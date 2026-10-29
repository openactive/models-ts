import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:AdultOrientedEnumeration
 *
 * Enumeration of considerations that make a product relevant or potentially restricted for adults only.
 */
export declare type AdultOrientedEnumeration = 'https://schema.org/AlcoholConsideration' | 'https://schema.org/DangerousGoodConsideration' | 'https://schema.org/HealthcareConsideration' | 'https://schema.org/NarcoticConsideration' | 'https://schema.org/ReducedRelevanceForChildrenConsideration' | 'https://schema.org/SexualContentConsideration' | 'https://schema.org/TobaccoNicotineConsideration' | 'https://schema.org/UnclassifiedAdultConsideration' | 'https://schema.org/ViolenceConsideration' | 'https://schema.org/WeaponConsideration';
/**
 * schema:AdultOrientedEnumeration - Validation schema (w/ JOI)
 *
 * Enumeration of considerations that make a product relevant or potentially restricted for adults only.
 */
export declare const AdultOrientedEnumerationJoiSchema: Joi.StringSchema;
/**
 * Runtime validator for schema:AdultOrientedEnumeration.
 *
 * If some data has one of the values of the schema:AdultOrientedEnumeration enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeAdultOrientedEnumeration = validateAdultOrientedEnumeration(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeAdultOrientedEnumeration instanceof OaValidationError) {
 *   // From this point on, `maybeAdultOrientedEnumeration` will have type `OaValidationError`
 *   const error = maybeAdultOrientedEnumeration;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeAdultOrientedEnumeration` will have type `AdultOrientedEnumeration`
 * const adultOrientedEnumeration = maybeAdultOrientedEnumeration;
 * ```
 */
export declare function validateAdultOrientedEnumeration(maybeAdultOrientedEnumeration: unknown): AdultOrientedEnumeration | OaValidationError;
