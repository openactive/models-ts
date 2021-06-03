"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDigitalDocumentPermissionType = exports.DigitalDocumentPermissionTypeJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * schema:DigitalDocumentPermissionType - Validation schema (w/ JOI)
 *
 * A type of permission which can be granted for accessing a digital document.
 */
exports.DigitalDocumentPermissionTypeJoiSchema = Joi.string().valid('https://schema.org/WritePermission', 'https://schema.org/ReadPermission', 'https://schema.org/CommentPermission');
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
function validateDigitalDocumentPermissionType(maybeDigitalDocumentPermissionType) {
    const { value, error } = exports.DigitalDocumentPermissionTypeJoiSchema.validate(maybeDigitalDocumentPermissionType);
    if (error) {
        return new oaValidationError_1.OaValidationError('DigitalDocumentPermissionType', maybeDigitalDocumentPermissionType, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateDigitalDocumentPermissionType = validateDigitalDocumentPermissionType;
