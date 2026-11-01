import React from 'react';
import { EventData } from '../../types';

interface EventVerticalSelectorProps {
  selected: EventData['type'];
  onSelect: (type: EventData['type']) => void;
}

const VERTICALS: { id: EventData['type']; label: string }[] = [
  { id: 'wedding', label: '💍 Wedding' },
  { id: 'birthday', label: '🎂 Milestone B-day' },
  { id: 'community', label: '🎪 Community Gala' },
  { id: 'gala', label: '🥂 Fundraiser' },
];

export const EventVerticalSelector: React.FC<EventVerticalSelectorProps> = ({ selected, onSelect }) => {
  return (
    <div>
      <span className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
        Select Event Vertical *
      </span>
      <div className="grid grid-cols-4 gap-2 text-xs">
        {VERTICALS.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => onSelect(t.id)}
            className={`p-2.5 rounded-xl border text-center font-semibold transition ${
              selected === t.id
                ? 'bg-brand-500 text-white border-brand-500 shadow-sm'
                : 'bg-neutral-50 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
    </div>
  );
};
