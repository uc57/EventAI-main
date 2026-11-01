import React from 'react';
import { ChevronDown, Check, Plus, Calendar, MapPin } from 'lucide-react';
import { EventData } from '../../types';

interface EventSelectorDropdownProps {
  events: EventData[];
  currentEvent: EventData;
  onSelectEvent: (event: EventData) => void;
  onOpenNewEventModal: () => void;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
}

export const EventSelectorDropdown: React.FC<EventSelectorDropdownProps> = ({
  events,
  currentEvent,
  onSelectEvent,
  onOpenNewEventModal,
  isOpen,
  onToggle,
  onClose,
  dropdownRef,
}) => {
  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={onToggle}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800/70 border border-neutral-200/60 dark:border-neutral-700/60 text-xs font-medium cursor-pointer hover:bg-neutral-200/60 dark:hover:bg-neutral-800 transition focus:outline-none focus:ring-2 focus:ring-brand-500/50"
        aria-label="Switch Event"
        aria-expanded={isOpen}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span className="font-semibold text-neutral-900 dark:text-neutral-100 max-w-[160px] sm:max-w-[240px] truncate">
          {currentEvent.shortName}
        </span>
        <span className="text-neutral-400 dark:text-neutral-500 hidden sm:inline">
          • {currentEvent.dateStr.split(',')[1] || currentEvent.dateStr}
        </span>
        <ChevronDown className={`w-3.5 h-3.5 text-neutral-400 ml-0.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-80 sm:w-96 bg-white dark:bg-[#1a1b20] rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-2xl py-2 z-50 animate-in fade-in duration-150">
          <div className="px-3 py-1.5 text-[10px] uppercase font-bold tracking-wider text-neutral-400 border-b border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
            <span>Select Event Workspace</span>
            <span className="text-[10px] text-brand-600 dark:text-brand-400 font-semibold">{events.length} Active Events</span>
          </div>
          <div className="p-1 space-y-1 max-h-[360px] overflow-y-auto">
            {events.map((evt) => (
              <button
                key={evt.id}
                type="button"
                onMouseDown={(e) => e.stopPropagation()}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onSelectEvent(evt);
                  onClose();
                }}
                className={`w-full flex items-start justify-between p-2.5 rounded-xl text-left transition cursor-pointer ${
                  evt.id === currentEvent.id
                    ? 'bg-brand-50/90 dark:bg-brand-950/50 text-brand-950 dark:text-brand-100 ring-1 ring-brand-500/30'
                    : 'hover:bg-neutral-100 dark:hover:bg-neutral-800/80 text-neutral-800 dark:text-neutral-200'
                }`}
              >
                <div className="space-y-1 min-w-0 pr-2 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className={`text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded ${
                      evt.type === 'wedding'
                        ? 'bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300'
                        : evt.type === 'birthday'
                        ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300'
                        : 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300'
                    }`}>
                      {evt.type}
                    </span>
                    <span className="text-xs font-bold truncate text-neutral-900 dark:text-white">{evt.name}</span>
                  </div>
                  <div className="text-[11px] text-neutral-500 dark:text-neutral-400 flex items-center gap-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-neutral-400" />
                      <span>{evt.dateStr}</span>
                    </span>
                    <span>•</span>
                    <span>{evt.guestCount} guests</span>
                  </div>
                  <div className="text-[10px] text-neutral-400 truncate flex items-center gap-1">
                    <MapPin className="w-2.5 h-2.5 flex-shrink-0" />
                    <span className="truncate">{evt.location}</span>
                  </div>
                </div>
                {evt.id === currentEvent.id && (
                  <div className="p-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                )}
              </button>
            ))}
          </div>
          <div className="p-1 border-t border-neutral-100 dark:border-neutral-800 mt-1">
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenNewEventModal();
              }}
              className="w-full flex items-center gap-2 p-2 rounded-xl text-xs font-semibold text-brand-600 dark:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-950/40 transition cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>+ Create New Event with GenAI</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
