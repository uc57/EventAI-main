import { EventData } from '../types';
import { weddingEvent } from './weddingEvent';
import { birthdayEvent } from './birthdayEvent';
import { galaEvent } from './galaEvent';

/**
 * Initial mock events dataset covering multiple verticals:
 * - Wedding vertical: weddingEvent
 * - Birthday vertical: birthdayEvent
 * - Community & Charity Gala vertical: galaEvent (type: 'community')
 */
export const communityEvent: EventData = galaEvent;

export const INITIAL_EVENTS: EventData[] = [
  weddingEvent,
  birthdayEvent,
  galaEvent,
];

export { weddingEvent, birthdayEvent, galaEvent };
