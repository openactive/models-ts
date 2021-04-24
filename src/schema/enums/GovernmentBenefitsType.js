const s = require('@imin/speck');

/**
 * GovernmentBenefitsType enumerates several kinds of government benefits to support the COVID-19 situation. Note that this structure may not capture all benefits offered.
 */
const GovernmentBenefitsType = s.literalStringEnum([
  'https://schema.org/ParentalSupport',
  'https://schema.org/UnemploymentSupport',
  'https://schema.org/OneTimePayments',
  'https://schema.org/DisabilitySupport',
  'https://schema.org/BasicIncome',
  'https://schema.org/PaidLeave',
  'https://schema.org/HealthCare',
  'https://schema.org/BusinessSupport',
]);