"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCssSelectorType = exports.CssSelectorTypeOrSubClassJoiSchema = exports.CssSelectorTypeJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * schema:CssSelectorType - Validation schema (w/ JOI)
 */
exports.CssSelectorTypeJoiSchema = Joi.object({
    '@type': Joi.string().valid('CssSelectorType').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    '@id': Joi.string().uri(),
});
/**
 * schema:CssSelectorType - Validation schema (w/ JOI)
 *
 * This differs from CssSelectorTypeJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.CssSelectorTypeOrSubClassJoiSchema = Joi.alternatives().try([
    exports.CssSelectorTypeJoiSchema,
]);
/**
 * Runtime validator for schema:CssSelectorType.
 *
 * If some data has a structure which matches a schema:CssSelectorType, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeCssSelectorType = CssSelectorType.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeCssSelectorType instanceof OaValidationError) {
 *   // From this point on, `maybeCssSelectorType` will have type `OaValidationError`
 *   const error = maybeCssSelectorType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeCssSelectorType` will have type `CssSelectorType`
 * const cssSelectorType = maybeCssSelectorType;
 * ```
 */
function validateCssSelectorType(maybeCssSelectorType) {
    const { value, error } = exports.CssSelectorTypeJoiSchema.validate(maybeCssSelectorType);
    if (error) {
        return new oaValidationError_1.OaValidationError('CssSelectorType', maybeCssSelectorType, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateCssSelectorType = validateCssSelectorType;
