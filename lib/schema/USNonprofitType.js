"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUSNonprofitType = exports.USNonprofitTypeOrSubClassJoiSchema = exports.USNonprofitTypeJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * schema:USNonprofitType - Validation schema (w/ JOI)
 */
exports.USNonprofitTypeJoiSchema = Joi.object({
    '@type': Joi.string().valid('USNonprofitType').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    '@id': Joi.string().uri(),
});
/**
 * schema:USNonprofitType - Validation schema (w/ JOI)
 *
 * This differs from USNonprofitTypeJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.USNonprofitTypeOrSubClassJoiSchema = Joi.alternatives().try([
    exports.USNonprofitTypeJoiSchema,
]);
/**
 * Runtime validator for schema:USNonprofitType.
 *
 * If some data has a structure which matches a schema:USNonprofitType, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeUSNonprofitType = USNonprofitType.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeUSNonprofitType instanceof OaValidationError) {
 *   // From this point on, `maybeUSNonprofitType` will have type `OaValidationError`
 *   const error = maybeUSNonprofitType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeUSNonprofitType` will have type `USNonprofitType`
 * const uSNonprofitType = maybeUSNonprofitType;
 * ```
 */
function validateUSNonprofitType(maybeUSNonprofitType) {
    const { value, error } = exports.USNonprofitTypeJoiSchema.validate(maybeUSNonprofitType);
    if (error) {
        return new oaValidationError_1.OaValidationError('USNonprofitType', maybeUSNonprofitType, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateUSNonprofitType = validateUSNonprofitType;
