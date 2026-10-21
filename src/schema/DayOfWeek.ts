// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';

/**
 * schema:DayOfWeek
 *
 * The day of the week, e.g. used to specify to which day the opening hours of an OpeningHoursSpecification refer.
 *
 * 
 *
 * Originally, URLs from [GoodRelations](http://purl.org/goodrelations/v1) were used (for [[Monday]], [[Tuesday]], [[Wednesday]], [[Thursday]], [[Friday]], [[Saturday]], [[Sunday]] plus a special entry for [[PublicHolidays]]); these have now been integrated directly into schema.org.
 *
 *       
 */
export type DayOfWeek = 
  
  | 'https://schema.org/Saturday'
  | 'https://schema.org/Monday'
  | 'https://schema.org/Thursday'
  | 'https://schema.org/Sunday'
  | 'https://schema.org/Wednesday'
  | 'https://schema.org/PublicHolidays'
  | 'https://schema.org/Tuesday'
  | 'https://schema.org/Friday'
  ;

/**
 * schema:DayOfWeek - Validation schema (w/ JOI)
 *
 * The day of the week, e.g. used to specify to which day the opening hours of an OpeningHoursSpecification refer.
 *
 * 
 *
 * Originally, URLs from [GoodRelations](http://purl.org/goodrelations/v1) were used (for [[Monday]], [[Tuesday]], [[Wednesday]], [[Thursday]], [[Friday]], [[Saturday]], [[Sunday]] plus a special entry for [[PublicHolidays]]); these have now been integrated directly into schema.org.
 *
 *       
 */
export const DayOfWeekJoiSchema = Joi.string().valid(
  'https://schema.org/Saturday',
  'https://schema.org/Monday',
  'https://schema.org/Thursday',
  'https://schema.org/Sunday',
  'https://schema.org/Wednesday',
  'https://schema.org/PublicHolidays',
  'https://schema.org/Tuesday',
  'https://schema.org/Friday',
);

/**
 * Runtime validator for schema:DayOfWeek.
 *
 * If some data has one of the values of the schema:DayOfWeek enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeDayOfWeek = validateDayOfWeek(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeDayOfWeek instanceof OaValidationError) {
 *   // From this point on, `maybeDayOfWeek` will have type `OaValidationError`
 *   const error = maybeDayOfWeek;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeDayOfWeek` will have type `DayOfWeek`
 * const dayOfWeek = maybeDayOfWeek;
 * ```
 */
export function validateDayOfWeek(maybeDayOfWeek: unknown): DayOfWeek | OaValidationError {
  const { value, error } = DayOfWeekJoiSchema.validate(maybeDayOfWeek);
  if (error) {
    return new OaValidationError('DayOfWeek', maybeDayOfWeek, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as DayOfWeek;
}
