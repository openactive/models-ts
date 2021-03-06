"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateOccupation = exports.OccupationOrSubClassJoiSchema = exports.OccupationJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:Occupation - Validation schema (w/ JOI)
 */
exports.OccupationJoiSchema = Joi.object({
    '@type': Joi.string().valid('Occupation').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    educationRequirements: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.EducationalOccupationalCredentialOrSubClassJoiSchema), Joi.string().uri()),
    skills: Joi.alternatives().try(Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    estimatedSalary: Joi.alternatives().try(Joi.lazy(() => schema.MonetaryAmountOrSubClassJoiSchema), Joi.number(), Joi.lazy(() => schema.MonetaryAmountDistributionOrSubClassJoiSchema), Joi.string().uri()),
    responsibilities: Joi.string(),
    occupationalCategory: Joi.alternatives().try(Joi.lazy(() => schema.CategoryCodeOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    occupationLocation: Joi.alternatives().try(Joi.lazy(() => schema.AdministrativeAreaOrSubClassJoiSchema), Joi.string().uri()),
    qualifications: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.EducationalOccupationalCredentialOrSubClassJoiSchema), Joi.string().uri()),
    experienceRequirements: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.OccupationalExperienceRequirementsOrSubClassJoiSchema), Joi.string().uri()),
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
 * schema:Occupation - Validation schema (w/ JOI)
 *
 * This differs from OccupationJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.OccupationOrSubClassJoiSchema = Joi.alternatives().try([
    exports.OccupationJoiSchema,
]);
/**
 * Runtime validator for schema:Occupation.
 *
 * If some data has a structure which matches a schema:Occupation, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeOccupation = validateOccupation(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeOccupation instanceof OaValidationError) {
 *   // From this point on, `maybeOccupation` will have type `OaValidationError`
 *   const error = maybeOccupation;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeOccupation` will have type `Occupation`
 * const occupation = maybeOccupation;
 * ```
 */
function validateOccupation(maybeOccupation) {
    const { value, error } = exports.OccupationJoiSchema.validate(maybeOccupation);
    if (error) {
        return new oaValidationError_1.OaValidationError('Occupation', maybeOccupation, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateOccupation = validateOccupation;
