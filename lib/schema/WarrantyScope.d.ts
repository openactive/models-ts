import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:WarrantyScope
 *
 * A range of of services that will be provided to a customer free of charge in case of a defect or malfunction of a product.\n\nCommonly used values:\n\n* http://purl.org/goodrelations/v1#Labor-BringIn\n* http://purl.org/goodrelations/v1#PartsAndLabor-BringIn\n* http://purl.org/goodrelations/v1#PartsAndLabor-PickUp
 *
 *
 */
export declare type WarrantyScope = string;
/**
 * schema:WarrantyScope - Validation schema (w/ JOI)
 *
 * A range of of services that will be provided to a customer free of charge in case of a defect or malfunction of a product.\n\nCommonly used values:\n\n* http://purl.org/goodrelations/v1#Labor-BringIn\n* http://purl.org/goodrelations/v1#PartsAndLabor-BringIn\n* http://purl.org/goodrelations/v1#PartsAndLabor-PickUp
 *
 *
 */
export declare const WarrantyScopeJoiSchema: Joi.StringSchema;
/**
 * Runtime validator for schema:WarrantyScope.
 *
 * If some data has one of the values of the schema:WarrantyScope enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeWarrantyScope = WarrantyScope.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeWarrantyScope instanceof OaValidationError) {
 *   // From this point on, `maybeWarrantyScope` will have type `OaValidationError`
 *   const error = maybeWarrantyScope;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeWarrantyScope` will have type `WarrantyScope`
 * const warrantyScope = maybeWarrantyScope;
 * ```
 */
export declare function validateWarrantyScope(maybeWarrantyScope: unknown): WarrantyScope | OaValidationError;
