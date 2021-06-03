"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUKNonprofitType = exports.UKNonprofitTypeOrSubClassJoiSchema = exports.UKNonprofitTypeJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * schema:UKNonprofitType - Validation schema (w/ JOI)
 */
exports.UKNonprofitTypeJoiSchema = Joi.object({
    '@type': Joi.string().valid('UKNonprofitType').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    '@id': Joi.string().uri(),
});
/**
 * schema:UKNonprofitType - Validation schema (w/ JOI)
 *
 * This differs from UKNonprofitTypeJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.UKNonprofitTypeOrSubClassJoiSchema = Joi.alternatives().try([
    exports.UKNonprofitTypeJoiSchema,
]);
/**
 * Runtime validator for schema:UKNonprofitType.
 *
 * If some data has a structure which matches a schema:UKNonprofitType, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeUKNonprofitType = validateUKNonprofitType(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeUKNonprofitType instanceof OaValidationError) {
 *   // From this point on, `maybeUKNonprofitType` will have type `OaValidationError`
 *   const error = maybeUKNonprofitType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeUKNonprofitType` will have type `UKNonprofitType`
 * const uKNonprofitType = maybeUKNonprofitType;
 * ```
 */
function validateUKNonprofitType(maybeUKNonprofitType) {
    const { value, error } = exports.UKNonprofitTypeJoiSchema.validate(maybeUKNonprofitType);
    if (error) {
        return new oaValidationError_1.OaValidationError('UKNonprofitType', maybeUKNonprofitType, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateUKNonprofitType = validateUKNonprofitType;
