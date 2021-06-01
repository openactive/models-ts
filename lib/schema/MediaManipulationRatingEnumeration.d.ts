import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:MediaManipulationRatingEnumeration
 *
 *  Codes for use with the [[mediaAuthenticityCategory]] property, indicating the authenticity of a media object (in the context of how it was published or shared). In general these codes are not mutually exclusive, although some combinations (such as 'original' versus 'transformed', 'edited' and 'staged') would be contradictory if applied in the same [[MediaReview]]. Note that the application of these codes is with regard to a piece of media shared or published in a particular context.
 */
export declare type MediaManipulationRatingEnumeration = 'https://schema.org/OriginalMediaContent' | 'https://schema.org/TransformedContent' | 'https://schema.org/StagedContent' | 'https://schema.org/EditedOrCroppedContent' | 'https://schema.org/DecontextualizedContent' | 'https://schema.org/SatireOrParodyContent';
/**
 * schema:MediaManipulationRatingEnumeration - Validation schema (w/ JOI)
 *
 *  Codes for use with the [[mediaAuthenticityCategory]] property, indicating the authenticity of a media object (in the context of how it was published or shared). In general these codes are not mutually exclusive, although some combinations (such as 'original' versus 'transformed', 'edited' and 'staged') would be contradictory if applied in the same [[MediaReview]]. Note that the application of these codes is with regard to a piece of media shared or published in a particular context.
 */
export declare const MediaManipulationRatingEnumerationJoiSchema: Joi.StringSchema;
/**
 * Runtime validator for schema:MediaManipulationRatingEnumeration.
 *
 * If some data has one of the values of the schema:MediaManipulationRatingEnumeration enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMediaManipulationRatingEnumeration = MediaManipulationRatingEnumeration.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMediaManipulationRatingEnumeration instanceof OaValidationError) {
 *   // From this point on, `maybeMediaManipulationRatingEnumeration` will have type `OaValidationError`
 *   const error = maybeMediaManipulationRatingEnumeration;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMediaManipulationRatingEnumeration` will have type `MediaManipulationRatingEnumeration`
 * const mediaManipulationRatingEnumeration = maybeMediaManipulationRatingEnumeration;
 * ```
 */
export declare function validateMediaManipulationRatingEnumeration(maybeMediaManipulationRatingEnumeration: unknown): MediaManipulationRatingEnumeration | OaValidationError;
