const s = require('@imin/speck');

/**
 * An EventAttendanceModeEnumeration value is one of potentially several modes of organising an event, relating to whether it is online or offline.
 */
const EventAttendanceModeEnumeration = s.literalStringEnum([
  'https://schema.org/OnlineEventAttendanceMode',
  'https://schema.org/OfflineEventAttendanceMode',
  'https://schema.org/MixedEventAttendanceMode',
]);