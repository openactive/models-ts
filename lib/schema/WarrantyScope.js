"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateWarrantyScope = exports.WarrantyScopeJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * schema:WarrantyScope - Validation schema (w/ JOI)
 *
 * A range of of services that will be provided to a customer free of charge in case of a defect or malfunction of a product.\n\nCommonly used values:\n\n* http://purl.org/goodrelations/v1#Labor-BringIn\n* http://purl.org/goodrelations/v1#PartsAndLabor-BringIn\n* http://purl.org/goodrelations/v1#PartsAndLabor-PickUp
 *
 *
 */
exports.WarrantyScopeJoiSchema = Joi.string().valid();
/**
 * Runtime validator for schema:WarrantyScope.
 *
 * If some data has one of the values of the schema:WarrantyScope enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeWarrantyScope = validateWarrantyScope(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeWarrantyScope instanceof OaValidationError) {
 *   // From this point on, `maybeWarrantyScope` will have type `OaValidationError`
 *   const error = maybeWarrantyScope;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeWarrantyScope` will have type `WarrantyScope`
 * const warrantyScope = maybeWarrantyScope;
 * ```
 */
function validateWarrantyScope(maybeWarrantyScope) {
    const { value, error } = exports.WarrantyScopeJoiSchema.validate(maybeWarrantyScope);
    if (error) {
        return new oaValidationError_1.OaValidationError('WarrantyScope', maybeWarrantyScope, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateWarrantyScope = validateWarrantyScope;
