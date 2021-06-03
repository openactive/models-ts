"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateOpeningHoursSpecification = exports.OpeningHoursSpecificationOrSubClassJoiSchema = exports.OpeningHoursSpecificationJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * OpeningHoursSpecification - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/OpeningHoursSpecification, which means that any of this type's properties within schema.org may also be used.
 */
exports.OpeningHoursSpecificationJoiSchema = Joi.object({
    '@type': Joi.string().valid('OpeningHoursSpecification').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    closes: Joi.string(),
    dayOfWeek: Joi.array().items(Joi.lazy(() => schema.DayOfWeekJoiSchema)),
    opens: Joi.string(),
    validFrom: Joi.string().isoDate(),
    validThrough: Joi.string().isoDate(),
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
 * OpeningHoursSpecification - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/OpeningHoursSpecification, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from OpeningHoursSpecificationJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.OpeningHoursSpecificationOrSubClassJoiSchema = Joi.alternatives().try([
    exports.OpeningHoursSpecificationJoiSchema,
]);
/**
 * Runtime validator for OpeningHoursSpecification.
 *
 * If some data has a structure which matches a OpeningHoursSpecification, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeOpeningHoursSpecification = validateOpeningHoursSpecification(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeOpeningHoursSpecification instanceof OaValidationError) {
 *   // From this point on, `maybeOpeningHoursSpecification` will have type `OaValidationError`
 *   const error = maybeOpeningHoursSpecification;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeOpeningHoursSpecification` will have type `OpeningHoursSpecification`
 * const openingHoursSpecification = maybeOpeningHoursSpecification;
 * ```
 */
function validateOpeningHoursSpecification(maybeOpeningHoursSpecification) {
    const { value, error } = exports.OpeningHoursSpecificationJoiSchema.validate(maybeOpeningHoursSpecification);
    if (error) {
        return new oaValidationError_1.OaValidationError('OpeningHoursSpecification', maybeOpeningHoursSpecification, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateOpeningHoursSpecification = validateOpeningHoursSpecification;
