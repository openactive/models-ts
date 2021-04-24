const s = require('@imin/speck');

/**
 * The day of the week, e.g. used to specify to which day the opening hours of an OpeningHoursSpecification refer.
 * 
 * Originally, URLs from [GoodRelations](http://purl.org/goodrelations/v1) were used (for [[Monday]], [[Tuesday]], [[Wednesday]], [[Thursday]], [[Friday]], [[Saturday]], [[Sunday]] plus a special entry for [[PublicHolidays]]); these have now been integrated directly into schema.org.
 *       
 */
const DayOfWeek = s.literalStringEnum([
  'https://schema.org/PublicHolidays',
  'https://schema.org/Sunday',
  'https://schema.org/Monday',
  'https://schema.org/Thursday',
  'https://schema.org/Wednesday',
  'https://schema.org/Tuesday',
  'https://schema.org/Saturday',
  'https://schema.org/Friday',
]);