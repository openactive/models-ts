import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:BusinessEntityType
 *
 * A business entity type is a conceptual entity representing the legal form, the size, the main line of business, the position in the value chain, or any combination thereof, of an organization or business person.\n\nCommonly used values:\n\n* http://purl.org/goodrelations/v1#Business\n* http://purl.org/goodrelations/v1#Enduser\n* http://purl.org/goodrelations/v1#PublicInstitution\n* http://purl.org/goodrelations/v1#Reseller
 *
 *
 */
export declare type BusinessEntityType = string;
/**
 * schema:BusinessEntityType - Validation schema (w/ JOI)
 *
 * A business entity type is a conceptual entity representing the legal form, the size, the main line of business, the position in the value chain, or any combination thereof, of an organization or business person.\n\nCommonly used values:\n\n* http://purl.org/goodrelations/v1#Business\n* http://purl.org/goodrelations/v1#Enduser\n* http://purl.org/goodrelations/v1#PublicInstitution\n* http://purl.org/goodrelations/v1#Reseller
 *
 *
 */
export declare const BusinessEntityTypeJoiSchema: Joi.StringSchema;
/**
 * Runtime validator for schema:BusinessEntityType.
 *
 * If some data has one of the values of the schema:BusinessEntityType enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeBusinessEntityType = BusinessEntityType.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeBusinessEntityType instanceof OaValidationError) {
 *   // From this point on, `maybeBusinessEntityType` will have type `OaValidationError`
 *   const error = maybeBusinessEntityType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeBusinessEntityType` will have type `BusinessEntityType`
 * const businessEntityType = maybeBusinessEntityType;
 * ```
 */
export declare function validateBusinessEntityType(maybeBusinessEntityType: unknown): BusinessEntityType | OaValidationError;
