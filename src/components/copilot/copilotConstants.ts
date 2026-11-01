import { ChatMessage } from '../../types';

export const DEFAULT_COPILOT_MESSAGES: ChatMessage[] = [
  {
    id: 'msg-1',
    sender: 'ai',
    text: "Hello Elena & Marcus! I've loaded your vendor contracts, Napa climate forecasts, and live budget balances. How can I assist your planning right now?",
    timestamp: '10:41 AM',
  },
  {
    id: 'msg-2',
    sender: 'user',
    text: 'Can you draft a polite email to Sonoma Bloom asking if we can swap imported peonies for seasonal garden roses to stay within budget?',
    timestamp: '10:42 AM',
  },
  {
    id: 'msg-3',
    sender: 'ai',
    text: 'Here is a tailored negotiation draft that trims ~$750 by substituting greenhouse David Austin garden roses and blush ranunculus:',
    timestamp: '10:43 AM',
    draft: {
      subject: 'Nuptials (Oct 18) — Floral Adjustments',
      version: 'Draft v2',
      body: '"Hi Camille & Sonoma Bloom team, Marcus and I adore your vision deck! As we finalize line allocations, we noticed imported peony surcharges. Could we substitute locally grown Juliet garden roses to keep our original threshold? Warm regards, Elena & Marcus"',
      savings: 750,
    },
  },
];
