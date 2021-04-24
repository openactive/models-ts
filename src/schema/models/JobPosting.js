
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const JobPosting = s.intersection([
  s.type({'@type': s.literal('JobPosting')}),
  s.partial({
      /**
      * The identifier property represents any kind of identifier for any kind of [[Thing]], such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See [background notes](/docs/datamodel.html#identifierBg) for more details.
      *         
      */
      identifier: s.union([schema.PropertyValue,s.urlString,s.string]),
      /**
      * The title of the job.
      */
      title: s.string,
      /**
      * The name of the item.
      */
      name: s.string,
      /**
      * A description of the item.
      */
      description: s.string,
      /**
      * Contact details for further information relevant to this job posting.
      */
      applicationContact: schema.ContactPoint,
      /**
      * A description of the employer, career opportunities and work environment for this position.
      */
      employerOverview: s.string,
      /**
      * Educational background needed for the position or Occupation.
      */
      educationRequirements: s.union([s.string,schema.EducationalOccupationalCredential]),
      /**
      * A statement of knowledge, skill, ability, task or any other assertion expressing a competency that is desired or required to fulfill this role or to work in this occupation.
      */
      skills: s.union([schema.DefinedTerm,s.string]),
      /**
      * An estimated salary for a job posting or occupation, based on a variety of variables including, but not limited to industry, job title, and location. Estimated salaries  are often computed by outside organizations rather than the hiring organization, who may not have committed to the estimated value.
      */
      estimatedSalary: s.union([schema.MonetaryAmount,s.nonNegativeFloat,schema.MonetaryAmountDistribution]),
      /**
      * Type of employment (e.g. full-time, part-time, contract, temporary, seasonal, internship).
      */
      employmentType: s.string,
      /**
      * Organization offering the job position.
      */
      hiringOrganization: schema.Organization,
      /**
      * A description of any sensory requirements and levels necessary to function on the job, including hearing and vision. Defined terms such as those in O*net may be used, but note that there is no way to specify the level of ability as well as its nature when using a defined term.
      */
      sensoryRequirement: s.union([schema.DefinedTerm,s.urlString,s.string]),
      /**
      * The industry associated with the job position.
      */
      industry: s.union([schema.DefinedTerm,s.string]),
      /**
      * The date on which a successful applicant for this job would be expected to start work. Choose a specific date in the future or use the jobImmediateStart property to indicate the position is to be filled as soon as possible.
      */
      jobStartDate: s.string,
      /**
      * An indicator as to whether a position is available for an immediate start.
      */
      jobImmediateStart: s.boolean,
      /**
      * Indicates the department, unit and/or facility where the employee reports and/or in which the job is to be performed.
      */
      employmentUnit: schema.Organization,
      /**
      * A description of any security clearance requirements of the job.
      */
      securityClearanceRequirement: s.union([s.urlString,s.string]),
      /**
      * Responsibilities associated with this role or Occupation.
      */
      responsibilities: s.string,
      /**
      * Description of benefits associated with the job.
      */
      jobBenefits: s.string,
      /**
      * A (typically single) geographic location associated with the job position.
      */
      jobLocation: schema.Place,
      /**
      * The location(s) applicants can apply from. This is usually used for telecommuting jobs where the applicant does not need to be in a physical office. Note: This should not be used for citizenship or work visa requirements.
      */
      applicantLocationRequirements: schema.AdministrativeArea,
      /**
      * A category describing the job, preferably using a term from a taxonomy such as [BLS O*NET-SOC](http://www.onetcenter.org/taxonomy.html), [ISCO-08](https://www.ilo.org/public/english/bureau/stat/isco/isco08/) or similar, with the property repeated for each applicable value. Ideally the taxonomy should be identified, and both the textual label and formal code for the category should be provided.\n
      * Note: for historical reasons, any textual label and formal code provided as a literal may be assumed to be from O*NET-SOC.
      */
      occupationalCategory: s.union([schema.CategoryCode,s.string]),
      /**
      * Specific qualifications required for this role or Occupation.
      */
      qualifications: s.union([s.string,schema.EducationalOccupationalCredential]),
      /**
      * A description of the job location (e.g TELECOMMUTE for telecommute jobs).
      */
      jobLocationType: s.string,
      /**
      * The Occupation for the JobPosting.
      */
      relevantOccupation: schema.Occupation,
      /**
      * Description of bonus and commission compensation aspects of the job.
      */
      incentiveCompensation: s.string,
      /**
      * Publication date of an online listing.
      */
      datePosted: s.union([s.string,s.isoDateTimeString]),
      /**
      * A description of the types of physical activity associated with the job. Defined terms such as those in O*net may be used, but note that there is no way to specify the level of ability as well as its nature when using a defined term.
      */
      physicalRequirement: s.union([schema.DefinedTerm,s.urlString,s.string]),
      /**
      * Description of skills and experience needed for the position or Occupation.
      */
      experienceRequirements: s.union([s.string,schema.OccupationalExperienceRequirements]),
      /**
      * Indicates whether a [[JobPosting]] will accept experience (as indicated by [[OccupationalExperienceRequirements]]) in place of its formal educational qualifications (as indicated by [[educationRequirements]]). If true, indicates that satisfying one of these requirements is sufficient.
      */
      experienceInPlaceOfEducation: s.boolean,
      /**
      * Any special commitments associated with this job posting. Valid entries include VeteranCommit, MilitarySpouseCommit, etc.
      */
      specialCommitments: s.string,
      /**
      * The typical working hours for this job (e.g. 1st shift, night shift, 8am-5pm).
      */
      workHours: s.string,
      /**
      * The number of positions open for this job posting. Use a positive integer. Do not use if the number of positions is unclear or not known.
      */
      totalJobOpenings: s.nonNegativeInt,
      /**
      * The currency (coded using [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) ) used for the main salary information in this job posting or for this employee.
      */
      salaryCurrency: s.string,
      /**
      * The base salary of the job or of an employee in an EmployeeRole.
      */
      baseSalary: s.union([schema.MonetaryAmount,schema.PriceSpecification,s.nonNegativeFloat]),
      /**
      * Description of benefits associated with the job.
      */
      benefits: s.string,
      /**
      * The legal requirements such as citizenship, visa and other documentation required for an applicant to this job.
      */
      eligibilityToWorkRequirement: s.string,
      /**
      * The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours.
      */
      validThrough: s.union([s.isoDateTimeString,s.string]),
      /**
      * Description of bonus and commission compensation aspects of the job.
      */
      incentives: s.string,
      /**
      * URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website.
      */
      sameAs: s.urlString,
      /**
      * A CreativeWork or Event about this Thing.
      */
      subjectOf: s.union([schema.Event,schema.CreativeWork]),
      /**
      * Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role.
      */
      potentialAction: schema.Action,
      /**
      * Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See [background notes](/docs/datamodel.html#mainEntityBackground) for details.
      */
      mainEntityOfPage: s.union([schema.CreativeWork,s.urlString]),
      /**
      * An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the 'typeof' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.
      */
      additionalType: s.urlString,
      /**
      * An alias for the item.
      */
      alternateName: s.string,
      /**
      * URL of the item.
      */
      url: s.urlString,
      /**
      * An image of the item. This can be a [[URL]] or a fully described [[ImageObject]].
      */
      image: s.union([schema.ImageObject,s.urlString]),
      /**
      * A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.
      */
      disambiguatingDescription: s.string,
  })
])

module.exports = {
  JobPosting,
};