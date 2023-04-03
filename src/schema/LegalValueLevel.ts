// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';

/**
 * schema:LegalValueLevel
 *
 * A list of possible levels for the legal validity of a legislation.
 */
export type LegalValueLevel = 
  
  | 'https://schema.org/UnofficialLegalValue'
  | 'https://schema.org/AuthoritativeLegalValue'
  | 'https://schema.org/OfficialLegalValue'
  | 'https://schema.org/DefinitiveLegalValue'
  ;

/**
 * schema:LegalValueLevel - Validation schema (w/ JOI)
 *
 * A list of possible levels for the legal validity of a legislation.
 */
export const LegalValueLevelJoiSchema = Joi.string().valid(
  'https://schema.org/UnofficialLegalValue',
  'https://schema.org/AuthoritativeLegalValue',
  'https://schema.org/OfficialLegalValue',
  'https://schema.org/DefinitiveLegalValue',
);

/**
 * Runtime validator for schema:LegalValueLevel.
 *
 * If some data has one of the values of the schema:LegalValueLevel enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeLegalValueLevel = validateLegalValueLevel(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeLegalValueLevel instanceof OaValidationError) {
 *   // From this point on, `maybeLegalValueLevel` will have type `OaValidationError`
 *   const error = maybeLegalValueLevel;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeLegalValueLevel` will have type `LegalValueLevel`
 * const legalValueLevel = maybeLegalValueLevel;
 * ```
 */
export function validateLegalValueLevel(maybeLegalValueLevel: unknown): LegalValueLevel | OaValidationError {
  const { value, error } = LegalValueLevelJoiSchema.validate(maybeLegalValueLevel);
  if (error) {
    return new OaValidationError('LegalValueLevel', maybeLegalValueLevel, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as LegalValueLevel;
}
