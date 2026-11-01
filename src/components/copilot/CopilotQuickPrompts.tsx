import React from 'react';

interface CopilotQuickPromptsProps {
  onSelectPrompt: (prompt: string) => void;
}

export const CopilotQuickPrompts: React.FC<CopilotQuickPromptsProps> = ({ onSelectPrompt }) => {
  return (
    <div className="px-4 py-2 border-t border-neutral-200/60 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30 overflow-x-auto whitespace-nowrap space-x-2">
      <button
        type="button"
        onClick={() => onSelectPrompt('Draft a polite thank-you note to Meadowood venue team')}
        className="px-2.5 py-1 rounded-full text-[11px] bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-brand-500 text-neutral-700 dark:text-neutral-300 transition"
      >
        ✍️ Draft Venue Note
      </button>
      <button
        type="button"
        onClick={() => onSelectPrompt('What happens to our budget if RSVP headcount drops to 150?')}
        className="px-2.5 py-1 rounded-full text-[11px] bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-brand-500 text-neutral-700 dark:text-neutral-300 transition"
      >
        📉 Headcount Impact Analysis
      </button>
      <button
        type="button"
        onClick={() => onSelectPrompt('Suggest 3 practical rainy-day contingency layout ideas')}
        className="px-2.5 py-1 rounded-full text-[11px] bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-brand-500 text-neutral-700 dark:text-neutral-300 transition"
      >
        ☔ Rain Contingency Ideas
      </button>
      <button
        type="button"
        onClick={() => onSelectPrompt('Proactively suggest 3 cost-cutting DIY alternatives to save $1,500 without sacrificing quality')}
        className="px-2.5 py-1 rounded-full text-[11px] bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-brand-500 text-neutral-700 dark:text-neutral-300 transition"
      >
        💡 DIY Cost Cuts (-$1,500)
      </button>
    </div>
  );
};
