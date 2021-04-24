const s = require('@imin/speck');

/**
 */
const OrderProposalStatus = s.literalStringEnum([
  'https://openactive.io/AwaitingSellerConfirmation',
  'https://openactive.io/SellerAccepted',
  'https://openactive.io/SellerRejected',
  'https://openactive.io/CustomerRejected',
]);