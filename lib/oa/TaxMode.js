"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTaxMode = exports.TaxModeJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * TaxMode - Validation schema (w/ JOI)
 */
exports.TaxModeJoiSchema = Joi.string().valid('https://openactive.io/TaxGross', 'https://openactive.io/TaxNet');
/**
 * Runtime validator for TaxMode.
 *
 * If some data has one of the values of the TaxMode enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeTaxMode = TaxMode.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeTaxMode instanceof OaValidationError) {
 *   // From this point on, `maybeTaxMode` will have type `OaValidationError`
 *   const error = maybeTaxMode;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeTaxMode` will have type `TaxMode`
 * const taxMode = maybeTaxMode;
 * ```
 */
function validateTaxMode(maybeTaxMode) {
    const { value, error } = exports.TaxModeJoiSchema.validate(maybeTaxMode);
    if (error) {
        return new oaValidationError_1.OaValidationError('TaxMode', maybeTaxMode, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateTaxMode = validateTaxMode;
