"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAlignmentObject = exports.AlignmentObjectOrSubClassJoiSchema = exports.AlignmentObjectJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:AlignmentObject - Validation schema (w/ JOI)
 */
exports.AlignmentObjectJoiSchema = Joi.object({
    '@type': Joi.string().valid('AlignmentObject').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    targetDescription: Joi.string(),
    educationalFramework: Joi.string(),
    targetUrl: Joi.string().uri(),
    alignmentType: Joi.string(),
    targetName: Joi.string(),
    sameAs: Joi.string().uri(),
    subjectOf: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    potentialAction: Joi.alternatives().try(Joi.lazy(() => schema.ActionOrSubClassJoiSchema), Joi.string().uri()),
    mainEntityOfPage: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    additionalType: Joi.string().uri(),
    alternateName: Joi.string(),
    url: Joi.string().uri(),
    image: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
    disambiguatingDescription: Joi.string(),
});
/**
 * schema:AlignmentObject - Validation schema (w/ JOI)
 *
 * This differs from AlignmentObjectJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.AlignmentObjectOrSubClassJoiSchema = Joi.alternatives().try([
    exports.AlignmentObjectJoiSchema,
]);
/**
 * Runtime validator for schema:AlignmentObject.
 *
 * If some data has a structure which matches a schema:AlignmentObject, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeAlignmentObject = AlignmentObject.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeAlignmentObject instanceof OaValidationError) {
 *   // From this point on, `maybeAlignmentObject` will have type `OaValidationError`
 *   const error = maybeAlignmentObject;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeAlignmentObject` will have type `AlignmentObject`
 * const alignmentObject = maybeAlignmentObject;
 * ```
 */
function validateAlignmentObject(maybeAlignmentObject) {
    const { value, error } = exports.AlignmentObjectJoiSchema.validate(maybeAlignmentObject);
    if (error) {
        return new oaValidationError_1.OaValidationError('AlignmentObject', maybeAlignmentObject, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateAlignmentObject = validateAlignmentObject;
