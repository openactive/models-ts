const s = require('@imin/speck');

/**
 */
const EventStatusType = s.literalStringEnum([
  'https://schema.org/EventCancelled',
  'https://schema.org/EventPostponed',
  'https://schema.org/EventRescheduled',
  'https://schema.org/EventScheduled',
]);