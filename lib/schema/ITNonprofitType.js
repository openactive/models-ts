"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateITNonprofitType = exports.ITNonprofitTypeOrSubClassJoiSchema = exports.ITNonprofitTypeJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * schema:ITNonprofitType - Validation schema (w/ JOI)
 */
exports.ITNonprofitTypeJoiSchema = Joi.object({
    '@type': Joi.string().valid('ITNonprofitType').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    '@id': Joi.string().uri(),
});
/**
 * schema:ITNonprofitType - Validation schema (w/ JOI)
 *
 * This differs from ITNonprofitTypeJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.ITNonprofitTypeOrSubClassJoiSchema = Joi.alternatives().try([
    exports.ITNonprofitTypeJoiSchema,
]);
/**
 * Runtime validator for schema:ITNonprofitType.
 *
 * If some data has a structure which matches a schema:ITNonprofitType, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeITNonprofitType = validateITNonprofitType(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeITNonprofitType instanceof OaValidationError) {
 *   // From this point on, `maybeITNonprofitType` will have type `OaValidationError`
 *   const error = maybeITNonprofitType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeITNonprofitType` will have type `ITNonprofitType`
 * const iTNonprofitType = maybeITNonprofitType;
 * ```
 */
function validateITNonprofitType(maybeITNonprofitType) {
    const { value, error } = exports.ITNonprofitTypeJoiSchema.validate(maybeITNonprofitType);
    if (error) {
        return new oaValidationError_1.OaValidationError('ITNonprofitType', maybeITNonprofitType, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateITNonprofitType = validateITNonprofitType;
