"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateJobPosting = exports.JobPostingOrSubClassJoiSchema = exports.JobPostingJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:JobPosting - Validation schema (w/ JOI)
 */
exports.JobPostingJoiSchema = Joi.object({
    '@type': Joi.string().valid('JobPosting').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    title: Joi.string(),
    name: Joi.string(),
    description: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.TextObjectOrSubClassJoiSchema), Joi.string().uri()),
    '@id': Joi.string().uri(),
    applicantLocationRequirements: Joi.alternatives().try(Joi.lazy(() => schema.AdministrativeAreaOrSubClassJoiSchema), Joi.string().uri()),
    applicationContact: Joi.alternatives().try(Joi.lazy(() => schema.ContactPointOrSubClassJoiSchema), Joi.string().uri()),
    baseSalary: Joi.alternatives().try(Joi.lazy(() => schema.MonetaryAmountOrSubClassJoiSchema), Joi.number(), Joi.lazy(() => schema.PriceSpecificationOrSubClassJoiSchema), Joi.string().uri()),
    benefits: Joi.string(),
    datePosted: Joi.string().isoDate(),
    directApply: Joi.boolean(),
    educationRequirements: Joi.alternatives().try(Joi.lazy(() => schema.EducationalOccupationalCredentialOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    eligibilityToWorkRequirement: Joi.string(),
    employerOverview: Joi.string(),
    employmentType: Joi.string(),
    employmentUnit: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    estimatedSalary: Joi.alternatives().try(Joi.lazy(() => schema.MonetaryAmountOrSubClassJoiSchema), Joi.lazy(() => schema.MonetaryAmountDistributionOrSubClassJoiSchema), Joi.number(), Joi.string().uri()),
    experienceInPlaceOfEducation: Joi.boolean(),
    experienceRequirements: Joi.alternatives().try(Joi.lazy(() => schema.OccupationalExperienceRequirementsOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    hiringOrganization: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    incentiveCompensation: Joi.string(),
    incentives: Joi.string(),
    industry: Joi.alternatives().try(Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    jobBenefits: Joi.string(),
    jobDuration: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    jobImmediateStart: Joi.boolean(),
    jobLocation: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    jobLocationType: Joi.string(),
    jobStartDate: Joi.alternatives().try(Joi.string().isoDate(), Joi.string()),
    occupationalCategory: Joi.alternatives().try(Joi.lazy(() => schema.CategoryCodeOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    physicalRequirement: Joi.alternatives().try(Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    qualifications: Joi.alternatives().try(Joi.lazy(() => schema.CredentialOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    relevantOccupation: Joi.alternatives().try(Joi.lazy(() => schema.OccupationOrSubClassJoiSchema), Joi.string().uri()),
    responsibilities: Joi.string(),
    salaryCurrency: Joi.string(),
    securityClearanceRequirement: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
    sensoryRequirement: Joi.alternatives().try(Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    skills: Joi.alternatives().try(Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    specialCommitments: Joi.string(),
    totalJobOpenings: Joi.number().integer(),
    validThrough: Joi.string().isoDate(),
    workHours: Joi.string(),
    additionalType: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
    alternateName: Joi.string(),
    disambiguatingDescription: Joi.string(),
    image: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
    mainEntityOfPage: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    owner: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    potentialAction: Joi.alternatives().try(Joi.lazy(() => schema.ActionOrSubClassJoiSchema), Joi.string().uri()),
    sameAs: Joi.string().uri(),
    subjectOf: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.string().uri()),
    url: Joi.string().uri(),
});
/**
 * schema:JobPosting - Validation schema (w/ JOI)
 *
 * This differs from JobPostingJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.JobPostingOrSubClassJoiSchema = Joi.alternatives().try([
    exports.JobPostingJoiSchema,
]);
/**
 * Runtime validator for schema:JobPosting.
 *
 * If some data has a structure which matches a schema:JobPosting, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeJobPosting = validateJobPosting(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeJobPosting instanceof OaValidationError) {
 *   // From this point on, `maybeJobPosting` will have type `OaValidationError`
 *   const error = maybeJobPosting;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeJobPosting` will have type `JobPosting`
 * const jobPosting = maybeJobPosting;
 * ```
 */
function validateJobPosting(maybeJobPosting) {
    const { value, error } = exports.JobPostingJoiSchema.validate(maybeJobPosting);
    if (error) {
        return new oaValidationError_1.OaValidationError('JobPosting', maybeJobPosting, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateJobPosting = validateJobPosting;
