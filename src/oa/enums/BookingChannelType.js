const s = require('@imin/speck');

/**
 * [NOTICE: This is a beta enumeration, and is highly likely to change in future versions of this library.]
 * An enumeration of booking channels that can exist.
 */
const BookingChannelType = s.literalStringEnum([
  'https://openactive.io/ns-beta#TelephoneAdvanceBooking',
  'https://openactive.io/ns-beta#TelephonePrepayment',
  'https://openactive.io/ns-beta#OnlineAdvanceBooking',
  'https://openactive.io/ns-beta#OnlinePrepayment',
]);