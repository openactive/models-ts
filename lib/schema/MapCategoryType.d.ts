import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:MapCategoryType
 *
 * An enumeration of several kinds of Map.
 */
export declare type MapCategoryType = 'https://schema.org/ParkingMap' | 'https://schema.org/TransitMap' | 'https://schema.org/VenueMap' | 'https://schema.org/SeatingMap';
/**
 * schema:MapCategoryType - Validation schema (w/ JOI)
 *
 * An enumeration of several kinds of Map.
 */
export declare const MapCategoryTypeJoiSchema: Joi.StringSchema;
/**
 * Runtime validator for schema:MapCategoryType.
 *
 * If some data has one of the values of the schema:MapCategoryType enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMapCategoryType = validateMapCategoryType(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMapCategoryType instanceof OaValidationError) {
 *   // From this point on, `maybeMapCategoryType` will have type `OaValidationError`
 *   const error = maybeMapCategoryType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMapCategoryType` will have type `MapCategoryType`
 * const mapCategoryType = maybeMapCategoryType;
 * ```
 */
export declare function validateMapCategoryType(maybeMapCategoryType: unknown): MapCategoryType | OaValidationError;
