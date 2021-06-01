import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as schema from '../schema';
/**
 * schema:JobPosting
 */
export declare type JobPosting = {
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
     * A unique url based identifier for the record
     */
    '@id'?: string;
    /**
     * Contact details for further information relevant to this job posting.
     */
    applicationContact?: schema.ContactPointOrSubClass | string;
    /**
     * A description of the employer, career opportunities and work environment for this position.
     */
    employerOverview?: string;
    /**
     * Educational background needed for the position or Occupation.
     */
    educationRequirements?: string | schema.EducationalOccupationalCredentialOrSubClass;
    /**
     * A statement of knowledge, skill, ability, task or any other assertion expressing a competency that is desired or required to fulfill this role or to work in this occupation.
     */
    skills?: schema.DefinedTermOrSubClass | string;
    /**
     * An estimated salary for a job posting or occupation, based on a variety of variables including, but not limited to industry, job title, and location. Estimated salaries  are often computed by outside organizations rather than the hiring organization, who may not have committed to the estimated value.
     */
    estimatedSalary?: schema.MonetaryAmountOrSubClass | number | schema.MonetaryAmountDistributionOrSubClass | string;
    /**
     * Type of employment (e.g. full-time, part-time, contract, temporary, seasonal, internship).
     */
    employmentType?: string;
    /**
     * Organization offering the job position.
     */
    hiringOrganization?: schema.OrganizationOrSubClass | string;
    /**
     * A description of any sensory requirements and levels necessary to function on the job, including hearing and vision. Defined terms such as those in O*net may be used, but note that there is no way to specify the level of ability as well as its nature when using a defined term.
     */
    sensoryRequirement?: schema.DefinedTermOrSubClass | string;
    /**
     * The industry associated with the job position.
     */
    industry?: schema.DefinedTermOrSubClass | string;
    /**
     * The date on which a successful applicant for this job would be expected to start work. Choose a specific date in the future or use the jobImmediateStart property to indicate the position is to be filled as soon as possible.
     */
    jobStartDate?: string;
    /**
     * An indicator as to whether a position is available for an immediate start.
     */
    jobImmediateStart?: boolean;
    /**
     * Indicates the department, unit and/or facility where the employee reports and/or in which the job is to be performed.
     */
    employmentUnit?: schema.OrganizationOrSubClass | string;
    /**
     * A description of any security clearance requirements of the job.
     */
    securityClearanceRequirement?: string;
    /**
     * Responsibilities associated with this role or Occupation.
     */
    responsibilities?: string;
    /**
     * Description of benefits associated with the job.
     */
    jobBenefits?: string;
    /**
     * A (typically single) geographic location associated with the job position.
     */
    jobLocation?: schema.PlaceOrSubClass | string;
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
     * Specific qualifications required for this role or Occupation.
     */
    qualifications?: string | schema.EducationalOccupationalCredentialOrSubClass;
    /**
     * A description of the job location (e.g TELECOMMUTE for telecommute jobs).
     */
    jobLocationType?: string;
    /**
     * The Occupation for the JobPosting.
     */
    relevantOccupation?: schema.OccupationOrSubClass | string;
    /**
     * Description of bonus and commission compensation aspects of the job.
     */
    incentiveCompensation?: string;
    /**
     * Publication date of an online listing.
     */
    datePosted?: string;
    /**
     * A description of the types of physical activity associated with the job. Defined terms such as those in O*net may be used, but note that there is no way to specify the level of ability as well as its nature when using a defined term.
     */
    physicalRequirement?: schema.DefinedTermOrSubClass | string;
    /**
     * Description of skills and experience needed for the position or Occupation.
     */
    experienceRequirements?: string | schema.OccupationalExperienceRequirementsOrSubClass;
    /**
     * Indicates whether a [[JobPosting]] will accept experience (as indicated by [[OccupationalExperienceRequirements]]) in place of its formal educational qualifications (as indicated by [[educationRequirements]]). If true, indicates that satisfying one of these requirements is sufficient.
     */
    experienceInPlaceOfEducation?: boolean;
    /**
     * Any special commitments associated with this job posting. Valid entries include VeteranCommit, MilitarySpouseCommit, etc.
     */
    specialCommitments?: string;
    /**
     * The typical working hours for this job (e.g. 1st shift, night shift, 8am-5pm).
     */
    workHours?: string;
    /**
     * The number of positions open for this job posting. Use a positive integer. Do not use if the number of positions is unclear or not known.
     */
    totalJobOpenings?: number;
    /**
     * The currency (coded using [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) ) used for the main salary information in this job posting or for this employee.
     */
    salaryCurrency?: string;
    /**
     * The base salary of the job or of an employee in an EmployeeRole.
     */
    baseSalary?: schema.MonetaryAmountOrSubClass | schema.PriceSpecificationOrSubClass | number | string;
    /**
     * Description of benefits associated with the job.
     */
    benefits?: string;
    /**
     * The legal requirements such as citizenship, visa and other documentation required for an applicant to this job.
     */
    eligibilityToWorkRequirement?: string;
    /**
     * The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours.
     */
    validThrough?: string;
    /**
     * Description of bonus and commission compensation aspects of the job.
     */
    incentives?: string;
    /**
     * URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website.
     */
    sameAs?: string;
    /**
     * A CreativeWork or Event about this Thing.
     */
    subjectOf?: schema.Event_OrSubClass | schema.CreativeWorkOrSubClass | string;
    /**
     * Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role.
     */
    potentialAction?: schema.ActionOrSubClass | string;
    /**
     * Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See [background notes](/docs/datamodel.html#mainEntityBackground) for details.
     */
    mainEntityOfPage?: schema.CreativeWorkOrSubClass | string;
    /**
     * An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the 'typeof' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.
     */
    additionalType?: string;
    /**
     * An alias for the item.
     */
    alternateName?: string;
    /**
     * URL of the item.
     */
    url?: string;
    /**
     * An image of the item. This can be a [[URL]] or a fully described [[ImageObject]].
     */
    image?: schema.ImageObjectOrSubClass | string;
    /**
     * A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.
     */
    disambiguatingDescription?: string;
};
/**
 * schema:JobPosting
 *
 * This differs from JobPosting because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type JobPostingOrSubClass = JobPosting;
/**
 * schema:JobPosting - Validation schema (w/ JOI)
 */
export declare const JobPostingJoiSchema: Joi.ObjectSchema;
/**
 * schema:JobPosting - Validation schema (w/ JOI)
 *
 * This differs from JobPostingJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const JobPostingOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:JobPosting.
 *
 * If some data has a structure which matches a schema:JobPosting, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeJobPosting = JobPosting.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeJobPosting instanceof OaValidationError) {
 *   // From this point on, `maybeJobPosting` will have type `OaValidationError`
 *   const error = maybeJobPosting;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeJobPosting` will have type `JobPosting`
 * const jobPosting = maybeJobPosting;
 * ```
 */
export declare function validateJobPosting(maybeJobPosting: unknown): JobPosting | OaValidationError;
