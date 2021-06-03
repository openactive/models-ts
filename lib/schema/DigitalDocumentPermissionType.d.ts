import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:DigitalDocumentPermissionType
 *
 * A type of permission which can be granted for accessing a digital document.
 */
export declare type DigitalDocumentPermissionType = 'https://schema.org/WritePermission' | 'https://schema.org/ReadPermission' | 'https://schema.org/CommentPermission';
/**
 * schema:DigitalDocumentPermissionType - Validation schema (w/ JOI)
 *
 * A type of permission which can be granted for accessing a digital document.
 */
export declare const DigitalDocumentPermissionTypeJoiSchema: Joi.StringSchema;
/**
 * Runtime validator for schema:DigitalDocumentPermissionType.
 *
 * If some data has one of the values of the schema:DigitalDocumentPermissionType enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeDigitalDocumentPermissionType = validateDigitalDocumentPermissionType(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeDigitalDocumentPermissionType instanceof OaValidationError) {
 *   // From this point on, `maybeDigitalDocumentPermissionType` will have type `OaValidationError`
 *   const error = maybeDigitalDocumentPermissionType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeDigitalDocumentPermissionType` will have type `DigitalDocumentPermissionType`
 * const digitalDocumentPermissionType = maybeDigitalDocumentPermissionType;
 * ```
 */
export declare function validateDigitalDocumentPermissionType(maybeDigitalDocumentPermissionType: unknown): DigitalDocumentPermissionType | OaValidationError;
