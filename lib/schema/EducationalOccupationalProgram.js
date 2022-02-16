"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEducationalOccupationalProgram = exports.EducationalOccupationalProgramOrSubClassJoiSchema = exports.EducationalOccupationalProgramJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:EducationalOccupationalProgram - Validation schema (w/ JOI)
 */
exports.EducationalOccupationalProgramJoiSchema = Joi.object({
    '@type': Joi.string().valid('EducationalOccupationalProgram').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    timeToComplete: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
    offers: Joi.alternatives().try(Joi.lazy(() => schema.DemandOrSubClassJoiSchema), Joi.lazy(() => schema.OfferOrSubClassJoiSchema), Joi.string().uri()),
    typicalCreditsPerTerm: Joi.alternatives().try(Joi.lazy(() => schema.StructuredValueOrSubClassJoiSchema), Joi.number().integer(), Joi.string().uri()),
    applicationStartDate: Joi.string().isoDate(),
    programPrerequisites: Joi.alternatives().try(Joi.lazy(() => schema.EducationalOccupationalCredentialOrSubClassJoiSchema), Joi.lazy(() => schema.CourseOrSubClassJoiSchema), Joi.string(), Joi.lazy(() => schema.AlignmentObjectOrSubClassJoiSchema), Joi.string().uri()),
    numberOfCredits: Joi.alternatives().try(Joi.number().integer(), Joi.lazy(() => schema.StructuredValueOrSubClassJoiSchema), Joi.string().uri()),
    educationalProgramMode: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
    programType: Joi.alternatives().try(Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    applicationDeadline: Joi.string().isoDate(),
    educationalCredentialAwarded: Joi.alternatives().try(Joi.lazy(() => schema.EducationalOccupationalCredentialOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    maximumEnrollment: Joi.number().integer(),
    termDuration: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
    endDate: Joi.string().isoDate(),
    trainingSalary: Joi.alternatives().try(Joi.lazy(() => schema.MonetaryAmountDistributionOrSubClassJoiSchema), Joi.string().uri()),
    salaryUponCompletion: Joi.alternatives().try(Joi.lazy(() => schema.MonetaryAmountDistributionOrSubClassJoiSchema), Joi.string().uri()),
    timeOfDay: Joi.string(),
    termsPerYear: Joi.number(),
    occupationalCredentialAwarded: Joi.alternatives().try(Joi.string(), Joi.string().uri(), Joi.lazy(() => schema.EducationalOccupationalCredentialOrSubClassJoiSchema)),
    startDate: Joi.string().isoDate(),
    dayOfWeek: Joi.lazy(() => schema.DayOfWeekJoiSchema),
    financialAidEligible: Joi.alternatives().try(Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    provider: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    occupationalCategory: Joi.alternatives().try(Joi.lazy(() => schema.CategoryCodeOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    hasCourse: Joi.alternatives().try(Joi.lazy(() => schema.CourseOrSubClassJoiSchema), Joi.string().uri()),
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
 * schema:EducationalOccupationalProgram - Validation schema (w/ JOI)
 *
 * This differs from EducationalOccupationalProgramJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.EducationalOccupationalProgramOrSubClassJoiSchema = Joi.alternatives().try([
    exports.EducationalOccupationalProgramJoiSchema,
    Joi.lazy(() => schema.WorkBasedProgramOrSubClassJoiSchema),
]);
/**
 * Runtime validator for schema:EducationalOccupationalProgram.
 *
 * If some data has a structure which matches a schema:EducationalOccupationalProgram, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeEducationalOccupationalProgram = validateEducationalOccupationalProgram(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeEducationalOccupationalProgram instanceof OaValidationError) {
 *   // From this point on, `maybeEducationalOccupationalProgram` will have type `OaValidationError`
 *   const error = maybeEducationalOccupationalProgram;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeEducationalOccupationalProgram` will have type `EducationalOccupationalProgram`
 * const educationalOccupationalProgram = maybeEducationalOccupationalProgram;
 * ```
 */
function validateEducationalOccupationalProgram(maybeEducationalOccupationalProgram) {
    const { value, error } = exports.EducationalOccupationalProgramJoiSchema.validate(maybeEducationalOccupationalProgram);
    if (error) {
        return new oaValidationError_1.OaValidationError('EducationalOccupationalProgram', maybeEducationalOccupationalProgram, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateEducationalOccupationalProgram = validateEducationalOccupationalProgram;
