import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:LegalValueLevel
 *
 * A list of possible levels for the legal validity of a legislation.
 */
export declare type LegalValueLevel = 'https://schema.org/AuthoritativeLegalValue' | 'https://schema.org/UnofficialLegalValue' | 'https://schema.org/DefinitiveLegalValue' | 'https://schema.org/OfficialLegalValue';
/**
 * schema:LegalValueLevel - Validation schema (w/ JOI)
 *
 * A list of possible levels for the legal validity of a legislation.
 */
export declare const LegalValueLevelJoiSchema: Joi.StringSchema;
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
export declare function validateLegalValueLevel(maybeLegalValueLevel: unknown): LegalValueLevel | OaValidationError;
