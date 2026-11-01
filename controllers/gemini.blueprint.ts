export interface BlueprintParams {
  totalBudget?: number | string;
  guestCount?: number | string;
  safeTitle?: string;
  safeVibe?: string;
  safeEventType?: string;
  safeLocation?: string;
  safePriorities?: string;
}

export function createCuratedBlueprint(params: BlueprintParams) {
  const budget = Number(params.totalBudget) || 35000;
  const guests = Number(params.guestCount) || 120;
  const safeTitle = params.safeTitle || '';
  const safeVibe = params.safeVibe || '';
  const safeEventType = params.safeEventType || '';
  const safeLocation = params.safeLocation || '';

  return {
    name: safeTitle || `${safeVibe ? safeVibe.charAt(0).toUpperCase() + safeVibe.slice(1) : 'Curated'} ${safeEventType || 'Event'}`,
    summary: `A customized ${safeEventType ? safeEventType.toLowerCase() : 'event'} for ${guests} guests in ${safeLocation || 'San Francisco, CA'}, curated with ${safeVibe || 'warm, elegant, intimate'} aesthetics and disciplined budget allocation.`,
    budgetBreakdown: [
      { category: 'Venue & Facilities', amount: Math.round(budget * 0.38), percentage: 38, tip: 'Ensure site fee includes tables, chairs, and security.' },
      { category: 'Catering & Beverages', amount: Math.round(budget * 0.28), percentage: 28, tip: 'Prioritize farm-to-table seasonal menus to trim freight charges.' },
      { category: 'Decor & Floral Scenography', amount: Math.round(budget * 0.14), percentage: 14, tip: 'Utilize high-impact focal points and candle cluster centerpieces.' },
      { category: 'Photography & Media', amount: Math.round(budget * 0.10), percentage: 10, tip: 'Book 8 hours of documentary coverage.' },
      { category: 'Entertainment & Audio', amount: Math.round(budget * 0.05), percentage: 5, tip: 'Curated vinyl DJ or live acoustic trio.' },
      { category: 'Safe Harbor Cushion', amount: Math.round(budget * 0.05), percentage: 5, tip: 'Untouched buffer for unexpected weather or overtime.' },
    ],
    milestones: [
      { title: `Secure ${safeLocation || 'San Francisco, CA'} Primary Venue Contract`, daysBefore: 180, priority: 'High', dependency: 'None' },
      { title: 'Tasting & Menu Finalization with Head Chef', daysBefore: 90, priority: 'High', dependency: 'Venue deposit settled' },
      { title: 'Send Bespoke Invitations & RSVP Tracker', daysBefore: 75, priority: 'High', dependency: 'Guest list verified' },
      { title: 'Finalize Floor Plan & Seating Matrix', daysBefore: 21, priority: 'Medium', dependency: 'RSVP deadline reached' },
      { title: 'Day-of Logistics Walkthrough with Vendors', daysBefore: 7, priority: 'High', dependency: 'All vendor contracts active' },
    ],
    vendors: [
      { name: 'Estate Venue & Grounds', category: 'Venue', estimatedCost: Math.round(budget * 0.38), status: 'Reviewing', action: 'Inspect Contract' },
      { name: 'Artisan Catering Collective', category: 'Culinary', estimatedCost: Math.round(budget * 0.28), status: 'Proposed', action: 'Schedule Tasting' },
      { name: 'Botanical & Floral Studio', category: 'Decor', estimatedCost: Math.round(budget * 0.14), status: 'Drafting', action: 'Review Moodboard' },
      { name: 'Lens & Grain Cinematography', category: 'Media', estimatedCost: Math.round(budget * 0.10), status: 'Shortlisted', action: 'Compare Portfolios' },
    ],
    creativeVault: {
      cocktail: {
        name: 'Golden Orchard Spritz',
        description: 'Spiced pear reduction, local sparkling cider, elderflower tonic, and fresh rosemary sprig.',
        costPerGuest: 7.20,
      },
      palette: [
        { name: 'Terracotta Blush', hex: '#C86D56' },
        { name: 'Champagne Warmth', hex: '#E7B9AC' },
        { name: 'Muted Olive', hex: '#8C6B32' },
        { name: 'Deep Evergreen', hex: '#1D5249' },
      ],
    },
  };
}
