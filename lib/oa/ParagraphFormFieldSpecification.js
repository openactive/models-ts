"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateParagraphFormFieldSpecification = exports.ParagraphFormFieldSpecificationOrSubClassJoiSchema = exports.ParagraphFormFieldSpecificationJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * ParagraphFormFieldSpecification - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/PropertyValueSpecification, which means that any of this type's properties within schema.org may also be used.
 */
exports.ParagraphFormFieldSpecificationJoiSchema = Joi.object({
    '@type': Joi.string().valid('ParagraphFormFieldSpecification').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    valueRequired: Joi.boolean(),
    multipleValues: Joi.boolean(),
    valueMaxLength: Joi.number(),
    readonlyValue: Joi.boolean(),
    valueMinLength: Joi.number(),
    valuePattern: Joi.string(),
    minValue: Joi.number(),
    valueName: Joi.string(),
    stepValue: Joi.number(),
    maxValue: Joi.number(),
    defaultValue: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    mainEntityOfPage: Joi.alternatives().try(Joi.string().uri(), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema)),
    additionalType: Joi.string().uri(),
    url: Joi.string().uri(),
    alternateName: Joi.string(),
    sameAs: Joi.string().uri(),
    potentialAction: Joi.alternatives().try(Joi.lazy(() => schema.ActionOrSubClassJoiSchema), Joi.string().uri()),
    subjectOf: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    disambiguatingDescription: Joi.string(),
    image: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
});
/**
 * ParagraphFormFieldSpecification - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/PropertyValueSpecification, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from ParagraphFormFieldSpecificationJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.ParagraphFormFieldSpecificationOrSubClassJoiSchema = Joi.alternatives().try([
    exports.ParagraphFormFieldSpecificationJoiSchema,
]);
/**
 * Runtime validator for ParagraphFormFieldSpecification.
 *
 * If some data has a structure which matches a ParagraphFormFieldSpecification, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeParagraphFormFieldSpecification = validateParagraphFormFieldSpecification(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeParagraphFormFieldSpecification instanceof OaValidationError) {
 *   // From this point on, `maybeParagraphFormFieldSpecification` will have type `OaValidationError`
 *   const error = maybeParagraphFormFieldSpecification;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeParagraphFormFieldSpecification` will have type `ParagraphFormFieldSpecification`
 * const paragraphFormFieldSpecification = maybeParagraphFormFieldSpecification;
 * ```
 */
function validateParagraphFormFieldSpecification(maybeParagraphFormFieldSpecification) {
    const { value, error } = exports.ParagraphFormFieldSpecificationJoiSchema.validate(maybeParagraphFormFieldSpecification);
    if (error) {
        return new oaValidationError_1.OaValidationError('ParagraphFormFieldSpecification', maybeParagraphFormFieldSpecification, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateParagraphFormFieldSpecification = validateParagraphFormFieldSpecification;
