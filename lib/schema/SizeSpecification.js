"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSizeSpecification = exports.SizeSpecificationOrSubClassJoiSchema = exports.SizeSpecificationJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:SizeSpecification - Validation schema (w/ JOI)
 */
exports.SizeSpecificationJoiSchema = Joi.object({
    '@type': Joi.string().valid('SizeSpecification').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    '@id': Joi.string().uri(),
    hasMeasurement: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    suggestedGender: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.GenderTypeJoiSchema)),
    sizeSystem: Joi.alternatives().try(Joi.lazy(() => schema.SizeSystemEnumerationJoiSchema), Joi.string()),
    suggestedAge: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    suggestedMeasurement: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    sizeGroup: Joi.alternatives().try(Joi.lazy(() => schema.SizeGroupEnumerationJoiSchema), Joi.string()),
});
/**
 * schema:SizeSpecification - Validation schema (w/ JOI)
 *
 * This differs from SizeSpecificationJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.SizeSpecificationOrSubClassJoiSchema = Joi.alternatives().try([
    exports.SizeSpecificationJoiSchema,
]);
/**
 * Runtime validator for schema:SizeSpecification.
 *
 * If some data has a structure which matches a schema:SizeSpecification, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeSizeSpecification = validateSizeSpecification(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeSizeSpecification instanceof OaValidationError) {
 *   // From this point on, `maybeSizeSpecification` will have type `OaValidationError`
 *   const error = maybeSizeSpecification;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeSizeSpecification` will have type `SizeSpecification`
 * const sizeSpecification = maybeSizeSpecification;
 * ```
 */
function validateSizeSpecification(maybeSizeSpecification) {
    const { value, error } = exports.SizeSpecificationJoiSchema.validate(maybeSizeSpecification);
    if (error) {
        return new oaValidationError_1.OaValidationError('SizeSpecification', maybeSizeSpecification, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateSizeSpecification = validateSizeSpecification;
