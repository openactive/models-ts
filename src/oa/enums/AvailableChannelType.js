const s = require('@imin/speck');

/**
 */
const AvailableChannelType = s.literalStringEnum([
  'https://openactive.io/OpenBookingPrepayment',
  'https://openactive.io/TelephoneAdvanceBooking',
  'https://openactive.io/TelephonePrepayment',
  'https://openactive.io/OnlinePrepayment',
]);