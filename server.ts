import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import compression from 'compression';
import geminiRoutes from './routes/gemini.routes.ts';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

// Enable gzip/deflate compression for optimal network efficiency
app.use(compression());

// Strict payload limit for high security
app.use(express.json({ limit: '1mb' }));

// Custom in-memory rateLimit middleware to protect API endpoints
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
export const rateLimit = (limit: number = 120, windowMs: number = 60000) => {
  return (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const ip = req.ip || req.socket.remoteAddress || 'unknown';
    const now = Date.now();
    const clientRecord = rateLimitMap.get(ip) || { count: 0, resetTime: now + windowMs };
    if (now > clientRecord.resetTime) {
      clientRecord.count = 1;
      clientRecord.resetTime = now + windowMs;
    } else {
      clientRecord.count += 1;
    }
    rateLimitMap.set(ip, clientRecord);
    if (clientRecord.count > limit) {
      res.status(429).json({ error: 'Too many requests, please try again later.' });
      return;
    }
    next();
  };
};

app.use('/api', rateLimit(120, 60000));

// Security & Performance Headers Middleware (configured for AI Studio iframe embedding)
app.use((_req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self' https: data: blob:; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https: blob:; connect-src 'self' https: ws: wss:; frame-ancestors *;"
  );
  next();
});

// Cache control for API routes to prevent stale state
app.use('/api', (_req, res, next) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});

// Mount Gemini AI routes
app.use('/api/gemini', geminiRoutes);

// Setup Vite or static serving with high-efficiency caching
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, 'dist'), {
    maxAge: '1y',
    etag: true,
    immutable: true,
  }));
  app.get('*', (_req, res) => {
    res.setHeader('Cache-Control', 'no-cache');
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
  });
} else {
  const { createServer: createViteServer } = await import('vite');
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa',
  });
  app.use(vite.middlewares);
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(`EventAI Server active on http://0.0.0.0:${PORT}`);
});

export default app;
