const s = require('@imin/speck');

/**
 * [NOTICE: This enumeration is part of the Open Booking API Test Interface, and MUST NOT be used in production.]
 * An enumeration of test opportunity criteria to which an opportunity must conform.
 */
const TestOpportunityCriteriaEnumeration = s.literalStringEnum([
  'https://openactive.io/test-interface#TestOpportunityBookable',
  'https://openactive.io/test-interface#TestOpportunityOpenBookingNotAllowed',
  'https://openactive.io/test-interface#TestOpportunityBookableNoSpaces',
  'https://openactive.io/test-interface#TestOpportunityBookableFiveSpaces',
  'https://openactive.io/test-interface#TestOpportunityBookableFree',
  'https://openactive.io/test-interface#TestOpportunityBookableNonFree',
  'https://openactive.io/test-interface#TestOpportunityBookableUsingPayment',
  'https://openactive.io/test-interface#TestOpportunityBookableWithinValidFromBeforeStartDate',
  'https://openactive.io/test-interface#TestOpportunityBookableOutsideValidFromBeforeStartDate',
  'https://openactive.io/test-interface#TestOpportunityBookableCancellable',
  'https://openactive.io/test-interface#TestOpportunityBookableNotCancellable',
  'https://openactive.io/test-interface#TestOpportunityBookableCancellableWithinWindow',
  'https://openactive.io/test-interface#TestOpportunityBookableCancellableOutsideWindow',
  'https://openactive.io/test-interface#TestOpportunityBookableWithinValidFromBeforeStartDateWindow',
  'https://openactive.io/test-interface#TestOpportunityBookableOutsideValidFromBeforeStartDateWindow',
  'https://openactive.io/test-interface#TestOpportunityBookableAttendeeDetails',
  'https://openactive.io/test-interface#TestOpportunityBookableAdditionalDetails',
  'https://openactive.io/test-interface#TestOpportunityBookableFreePrepaymentOptional',
  'https://openactive.io/test-interface#TestOpportunityBookableNonFreePrepaymentOptional',
  'https://openactive.io/test-interface#TestOpportunityBookableNonFreePrepaymentUnavailable',
  'https://openactive.io/test-interface#TestOpportunityBookableFreePrepaymentRequired',
  'https://openactive.io/test-interface#TestOpportunityBookableNonFreePrepaymentRequired',
  'https://openactive.io/test-interface#TestOpportunityBookableNonFreeTaxGross',
  'https://openactive.io/test-interface#TestOpportunityBookableNonFreeTaxNet',
  'https://openactive.io/test-interface#TestOpportunityBookableSellerTermsOfService',
  'https://openactive.io/test-interface#TestOpportunityBookableFlowRequirementOnlyApproval',
  'https://openactive.io/test-interface#TestOpportunityOnlineBookable',
  'https://openactive.io/test-interface#TestOpportunityOfflineBookable',
]);