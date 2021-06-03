"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateGovernmentBenefitsType = exports.GovernmentBenefitsTypeJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * schema:GovernmentBenefitsType - Validation schema (w/ JOI)
 *
 * GovernmentBenefitsType enumerates several kinds of government benefits to support the COVID-19 situation. Note that this structure may not capture all benefits offered.
 */
exports.GovernmentBenefitsTypeJoiSchema = Joi.string().valid('https://schema.org/ParentalSupport', 'https://schema.org/UnemploymentSupport', 'https://schema.org/OneTimePayments', 'https://schema.org/DisabilitySupport', 'https://schema.org/BasicIncome', 'https://schema.org/PaidLeave', 'https://schema.org/HealthCare', 'https://schema.org/BusinessSupport');
/**
 * Runtime validator for schema:GovernmentBenefitsType.
 *
 * If some data has one of the values of the schema:GovernmentBenefitsType enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeGovernmentBenefitsType = validateGovernmentBenefitsType(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeGovernmentBenefitsType instanceof OaValidationError) {
 *   // From this point on, `maybeGovernmentBenefitsType` will have type `OaValidationError`
 *   const error = maybeGovernmentBenefitsType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeGovernmentBenefitsType` will have type `GovernmentBenefitsType`
 * const governmentBenefitsType = maybeGovernmentBenefitsType;
 * ```
 */
function validateGovernmentBenefitsType(maybeGovernmentBenefitsType) {
    const { value, error } = exports.GovernmentBenefitsTypeJoiSchema.validate(maybeGovernmentBenefitsType);
    if (error) {
        return new oaValidationError_1.OaValidationError('GovernmentBenefitsType', maybeGovernmentBenefitsType, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateGovernmentBenefitsType = validateGovernmentBenefitsType;
