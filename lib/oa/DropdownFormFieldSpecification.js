"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDropdownFormFieldSpecification = exports.DropdownFormFieldSpecificationOrSubClassJoiSchema = exports.DropdownFormFieldSpecificationJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * DropdownFormFieldSpecification - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/PropertyValueSpecification, which means that any of this type's properties within schema.org may also be used.
 */
exports.DropdownFormFieldSpecificationJoiSchema = Joi.object({
    '@type': Joi.string().valid('DropdownFormFieldSpecification').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    valueOption: Joi.array().items(Joi.string()),
    valueRequired: Joi.boolean(),
    valueName: Joi.string(),
    defaultValue: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    stepValue: Joi.number(),
    maxValue: Joi.number(),
    valuePattern: Joi.string(),
    multipleValues: Joi.boolean(),
    readonlyValue: Joi.boolean(),
    minValue: Joi.number(),
    valueMaxLength: Joi.number(),
    valueMinLength: Joi.number(),
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
 * DropdownFormFieldSpecification - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/PropertyValueSpecification, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from DropdownFormFieldSpecificationJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.DropdownFormFieldSpecificationOrSubClassJoiSchema = Joi.alternatives().try([
    exports.DropdownFormFieldSpecificationJoiSchema,
]);
/**
 * Runtime validator for DropdownFormFieldSpecification.
 *
 * If some data has a structure which matches a DropdownFormFieldSpecification, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeDropdownFormFieldSpecification = validateDropdownFormFieldSpecification(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeDropdownFormFieldSpecification instanceof OaValidationError) {
 *   // From this point on, `maybeDropdownFormFieldSpecification` will have type `OaValidationError`
 *   const error = maybeDropdownFormFieldSpecification;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeDropdownFormFieldSpecification` will have type `DropdownFormFieldSpecification`
 * const dropdownFormFieldSpecification = maybeDropdownFormFieldSpecification;
 * ```
 */
function validateDropdownFormFieldSpecification(maybeDropdownFormFieldSpecification) {
    const { value, error } = exports.DropdownFormFieldSpecificationJoiSchema.validate(maybeDropdownFormFieldSpecification);
    if (error) {
        return new oaValidationError_1.OaValidationError('DropdownFormFieldSpecification', maybeDropdownFormFieldSpecification, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateDropdownFormFieldSpecification = validateDropdownFormFieldSpecification;
