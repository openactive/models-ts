// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * schema:JobPosting
 */
export type JobPosting = {
  '@type': 'JobPosting';
  '@context'?: string | string[];
  /**
   * The identifier property represents any kind of identifier for any kind of [[Thing]], such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See [background notes](/docs/datamodel.html#identifierBg) for more details.
   *         
   */
  identifier?: schema.PropertyValueOrSubClass | string;
  /**
   * The title of the job.
   */
  title?: string;
  /**
   * The name of the item.
   */
  name?: string;
  /**
   * A description of the item.
   */
  description?: string;
  /**
   * A unique URI-based identifier for the record.
   * `@id` properties are used as identifiers for compatibility with JSON-LD. The value of such a property must always be an absolute URI that provides a stable globally unique identifier for the resource, as described in [RFC3986](https://tools.ietf.org/html/rfc3986).
   * The primary purpose of the URI format in this context is to provide natural namespacing for the identifier. Hence, the URI itself may not resolve to a valid endpoint, but must use a domain name controlled by the resource owner (the organisation responsible for the OpenActive open data feed).
   */
  '@id'?: string;
  /**
   * Description of skills and experience needed for the position or Occupation.
   */
  experienceRequirements?: schema.OccupationalExperienceRequirementsOrSubClass | string;
  /**
   * Organization offering the job position.
   */
  hiringOrganization?: schema.OrganizationOrSubClass | string;
  /**
   * Indicates whether an [[url]] that is associated with a [[JobPosting]] enables direct application for the job, via the posting website. A job posting is considered to have directApply of [[True]] if an application process for the specified job can be directly initiated via the url(s) given (noting that e.g. multiple internet domains might nevertheless be involved at an implementation level). A value of [[False]] is appropriate if there is no clear path to applying directly online for the specified job, navigating directly from the JobPosting url(s) supplied.
   */
  directApply?: boolean;
  /**
   * A statement of knowledge, skill, ability, task or any other assertion expressing a competency that is desired or required to fulfill this role or to work in this occupation.
   */
  skills?: schema.DefinedTermOrSubClass | string;
  /**
   * An estimated salary for a job posting or occupation, based on a variety of variables including, but not limited to industry, job title, and location. Estimated salaries  are often computed by outside organizations rather than the hiring organization, who may not have committed to the estimated value.
   */
  estimatedSalary?: number | schema.MonetaryAmountDistributionOrSubClass | schema.MonetaryAmountOrSubClass | string;
  /**
   * Description of benefits associated with the job.
   */
  benefits?: string;
  /**
   * A description of any sensory requirements and levels necessary to function on the job, including hearing and vision. Defined terms such as those in O*net may be used, but note that there is no way to specify the level of ability as well as its nature when using a defined term.
   */
  sensoryRequirement?: string | schema.DefinedTermOrSubClass;
  /**
   * An indicator as to whether a position is available for an immediate start.
   */
  jobImmediateStart?: boolean;
  /**
   * A description of the types of physical activity associated with the job. Defined terms such as those in O*net may be used, but note that there is no way to specify the level of ability as well as its nature when using a defined term.
   */
  physicalRequirement?: string | schema.DefinedTermOrSubClass;
  /**
   * A (typically single) geographic location associated with the job position.
   */
  jobLocation?: schema.PlaceOrSubClass | string;
  /**
   * Description of bonus and commission compensation aspects of the job.
   */
  incentives?: string;
  /**
   * A description of the employer, career opportunities and work environment for this position.
   */
  employerOverview?: string;
  /**
   * Any special commitments associated with this job posting. Valid entries include VeteranCommit, MilitarySpouseCommit, etc.
   */
  specialCommitments?: string;
  /**
   * A description of the job location (e.g TELECOMMUTE for telecommute jobs).
   */
  jobLocationType?: string;
  /**
   * The number of positions open for this job posting. Use a positive integer. Do not use if the number of positions is unclear or not known.
   */
  totalJobOpenings?: number;
  /**
   * The currency (coded using [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) ) used for the main salary information in this job posting or for this employee.
   */
  salaryCurrency?: string;
  /**
   * Responsibilities associated with this role or Occupation.
   */
  responsibilities?: string;
  /**
   * A description of any security clearance requirements of the job.
   */
  securityClearanceRequirement?: string;
  /**
   * Publication date of an online listing.
   */
  datePosted?: string;
  /**
   * Specific qualifications required for this role or Occupation.
   */
  qualifications?: string | schema.EducationalOccupationalCredentialOrSubClass;
  /**
   * The date on which a successful applicant for this job would be expected to start work. Choose a specific date in the future or use the jobImmediateStart property to indicate the position is to be filled as soon as possible.
   */
  jobStartDate?: string;
  /**
   * Description of bonus and commission compensation aspects of the job.
   */
  incentiveCompensation?: string;
  /**
   * The industry associated with the job position.
   */
  industry?: string | schema.DefinedTermOrSubClass;
  /**
   * Indicates the department, unit and/or facility where the employee reports and/or in which the job is to be performed.
   */
  employmentUnit?: schema.OrganizationOrSubClass | string;
  /**
   * The base salary of the job or of an employee in an EmployeeRole.
   */
  baseSalary?: schema.MonetaryAmountOrSubClass | schema.PriceSpecificationOrSubClass | number | string;
  /**
   * The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours.
   */
  validThrough?: string;
  /**
   * The typical working hours for this job (e.g. 1st shift, night shift, 8am-5pm).
   */
  workHours?: string;
  /**
   * Indicates whether a [[JobPosting]] will accept experience (as indicated by [[OccupationalExperienceRequirements]]) in place of its formal educational qualifications (as indicated by [[educationRequirements]]). If true, indicates that satisfying one of these requirements is sufficient.
   */
  experienceInPlaceOfEducation?: boolean;
  /**
   * Description of benefits associated with the job.
   */
  jobBenefits?: string;
  /**
   * The location(s) applicants can apply from. This is usually used for telecommuting jobs where the applicant does not need to be in a physical office. Note: This should not be used for citizenship or work visa requirements.
   */
  applicantLocationRequirements?: schema.AdministrativeAreaOrSubClass | string;
  /**
   * A category describing the job, preferably using a term from a taxonomy such as [BLS O*NET-SOC](http://www.onetcenter.org/taxonomy.html), [ISCO-08](https://www.ilo.org/public/english/bureau/stat/isco/isco08/) or similar, with the property repeated for each applicable value. Ideally the taxonomy should be identified, and both the textual label and formal code for the category should be provided.\n
   * Note: for historical reasons, any textual label and formal code provided as a literal may be assumed to be from O*NET-SOC.
   */
  occupationalCategory?: schema.CategoryCodeOrSubClass | string;
  /**
   * Type of employment (e.g. full-time, part-time, contract, temporary, seasonal, internship).
   */
  employmentType?: string;
  /**
   * Educational background needed for the position or Occupation.
   */
  educationRequirements?: string | schema.EducationalOccupationalCredentialOrSubClass;
  /**
   * Contact details for further information relevant to this job posting.
   */
  applicationContact?: schema.ContactPointOrSubClass | string;
  /**
   * The Occupation for the JobPosting.
   */
  relevantOccupation?: schema.OccupationOrSubClass | string;
  /**
   * The legal requirements such as citizenship, visa and other documentation required for an applicant to this job.
   */
  eligibilityToWorkRequirement?: string;
  /**
   * Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See [background notes](/docs/datamodel.html#mainEntityBackground) for details.
   */
  mainEntityOfPage?: string | schema.CreativeWorkOrSubClass;
  /**
   * An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the 'typeof' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.
   */
  additionalType?: string;
  /**
   * URL of the item.
   */
  url?: string;
  /**
   * An alias for the item.
   */
  alternateName?: string;
  /**
   * URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website.
   */
  sameAs?: string;
  /**
   * Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role.
   */
  potentialAction?: schema.ActionOrSubClass | string;
  /**
   * A CreativeWork or Event about this Thing.
   */
  subjectOf?: schema.Event_OrSubClass | schema.CreativeWorkOrSubClass | string;
  /**
   * A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.
   */
  disambiguatingDescription?: string;
  /**
   * An image of the item. This can be a [[URL]] or a fully described [[ImageObject]].
   */
  image?: schema.ImageObjectOrSubClass | string;
};

/**
 * schema:JobPosting
 *
 * This differs from JobPosting because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type JobPostingOrSubClass =
  | JobPosting
  ;

/**
 * schema:JobPosting - Validation schema (w/ JOI)
 */
export const JobPostingJoiSchema = Joi.object({
  '@type': Joi.string().valid('JobPosting').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  title: Joi.string(),
  name: Joi.string(),
  description: Joi.string(),
  '@id': Joi.string().uri(),
  experienceRequirements: Joi.alternatives().try(Joi.lazy(() => schema.OccupationalExperienceRequirementsOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  hiringOrganization: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  directApply: Joi.boolean(),
  skills: Joi.alternatives().try(Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  estimatedSalary: Joi.alternatives().try(Joi.number(), Joi.lazy(() => schema.MonetaryAmountDistributionOrSubClassJoiSchema), Joi.lazy(() => schema.MonetaryAmountOrSubClassJoiSchema), Joi.string().uri()),
  benefits: Joi.string(),
  sensoryRequirement: Joi.alternatives().try(Joi.string().uri(), Joi.string(), Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema)),
  jobImmediateStart: Joi.boolean(),
  physicalRequirement: Joi.alternatives().try(Joi.string().uri(), Joi.string(), Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema)),
  jobLocation: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
  incentives: Joi.string(),
  employerOverview: Joi.string(),
  specialCommitments: Joi.string(),
  jobLocationType: Joi.string(),
  totalJobOpenings: Joi.number().integer(),
  salaryCurrency: Joi.string(),
  responsibilities: Joi.string(),
  securityClearanceRequirement: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
  datePosted: Joi.string().isoDate(),
  qualifications: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.EducationalOccupationalCredentialOrSubClassJoiSchema), Joi.string().uri()),
  jobStartDate: Joi.alternatives().try(Joi.string().isoDate(), Joi.string()),
  incentiveCompensation: Joi.string(),
  industry: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string().uri()),
  employmentUnit: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  baseSalary: Joi.alternatives().try(Joi.lazy(() => schema.MonetaryAmountOrSubClassJoiSchema), Joi.lazy(() => schema.PriceSpecificationOrSubClassJoiSchema), Joi.number(), Joi.string().uri()),
  validThrough: Joi.string().isoDate(),
  workHours: Joi.string(),
  experienceInPlaceOfEducation: Joi.boolean(),
  jobBenefits: Joi.string(),
  applicantLocationRequirements: Joi.alternatives().try(Joi.lazy(() => schema.AdministrativeAreaOrSubClassJoiSchema), Joi.string().uri()),
  occupationalCategory: Joi.alternatives().try(Joi.lazy(() => schema.CategoryCodeOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  employmentType: Joi.string(),
  educationRequirements: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.EducationalOccupationalCredentialOrSubClassJoiSchema), Joi.string().uri()),
  applicationContact: Joi.alternatives().try(Joi.lazy(() => schema.ContactPointOrSubClassJoiSchema), Joi.string().uri()),
  relevantOccupation: Joi.alternatives().try(Joi.lazy(() => schema.OccupationOrSubClassJoiSchema), Joi.string().uri()),
  eligibilityToWorkRequirement: Joi.string(),
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
 * schema:JobPosting - Validation schema (w/ JOI)
 *
 * This differs from JobPostingJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const JobPostingOrSubClassJoiSchema = Joi.alternatives().try([
  JobPostingJoiSchema,
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
export function validateJobPosting(maybeJobPosting: unknown): JobPosting | OaValidationError {
  const { value, error } = JobPostingJoiSchema.validate(maybeJobPosting);
  if (error) {
    return new OaValidationError('JobPosting', maybeJobPosting, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as JobPosting;
}
