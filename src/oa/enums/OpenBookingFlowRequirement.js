const s = require('@imin/speck');

/**
 */
const OpenBookingFlowRequirement = s.literalStringEnum([
  'https://openactive.io/OpenBookingIntakeForm',
  'https://openactive.io/OpenBookingAttendeeDetails',
  'https://openactive.io/OpenBookingApproval',
  'https://openactive.io/OpenBookingNegotiation',
  'https://openactive.io/OpenBookingMessageExchange',
]);