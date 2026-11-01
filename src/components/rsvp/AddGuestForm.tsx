import React, { useState } from 'react';

interface AddGuestFormProps {
  onAddGuest: (guestData: { name: string; email: string; partySize: number; dietary: string }) => void;
  onCancel: () => void;
}

export const AddGuestForm: React.FC<AddGuestFormProps> = ({ onAddGuest, onCancel }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [partySize, setPartySize] = useState(1);
  const [dietary, setDietary] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    onAddGuest({ name, email, partySize, dietary });
    setName('');
    setEmail('');
    setPartySize(1);
    setDietary('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-3.5 rounded-2xl bg-brand-50/50 dark:bg-neutral-900 border border-brand-200/60 dark:border-neutral-800 space-y-3 animate-in fade-in">
      <div className="font-semibold text-xs text-neutral-900 dark:text-white">Quick Add Confirmed Guest</div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs">
        <div>
          <label htmlFor="guest-form-name" className="sr-only">Full Name</label>
          <input
            id="guest-form-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name (e.g. David Sterling)"
            className="w-full px-3 py-1.5 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white"
          />
        </div>
        <div>
          <label htmlFor="guest-form-email" className="sr-only">Email address</label>
          <input
            id="guest-form-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="w-full px-3 py-1.5 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white"
          />
        </div>
        <div>
          <label htmlFor="guest-form-partysize" className="sr-only">Party Size</label>
          <input
            id="guest-form-partysize"
            type="number"
            min={1}
            max={10}
            value={partySize}
            onChange={(e) => setPartySize(parseInt(e.target.value, 10) || 1)}
            placeholder="Party Size"
            className="w-full px-3 py-1.5 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white"
          />
        </div>
        <div>
          <label htmlFor="guest-form-dietary" className="sr-only">Dietary requirements</label>
          <input
            id="guest-form-dietary"
            type="text"
            value={dietary}
            onChange={(e) => setDietary(e.target.value)}
            placeholder="Dietary requirements..."
            className="w-full px-3 py-1.5 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white"
          />
        </div>
      </div>
      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-3 py-1 text-xs text-neutral-500 hover:text-neutral-700"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-1 text-xs font-semibold bg-brand-500 hover:bg-brand-600 text-white rounded-xl shadow-xs"
        >
          Save & Update Pacing
        </button>
      </div>
    </form>
  );
};
