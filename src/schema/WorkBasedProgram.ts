// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * schema:WorkBasedProgram
 */
export type WorkBasedProgram = {
  '@type': 'WorkBasedProgram';
  '@context'?: string | string[];
  /**
   * The identifier property represents any kind of identifier for any kind of [[Thing]], such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See [background notes](/docs/datamodel.html#identifierBg) for more details.
   *         
   */
  identifier?: schema.PropertyValueOrSubClass | string;
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
   * The estimated salary earned while in the program.
   */
  trainingSalary?: schema.MonetaryAmountDistributionOrSubClass | string;
  /**
   * A category describing the job, preferably using a term from a taxonomy such as [BLS O*NET-SOC](http://www.onetcenter.org/taxonomy.html), [ISCO-08](https://www.ilo.org/public/english/bureau/stat/isco/isco08/) or similar, with the property repeated for each applicable value. Ideally the taxonomy should be identified, and both the textual label and formal code for the category should be provided.\n
   * Note: for historical reasons, any textual label and formal code provided as a literal may be assumed to be from O*NET-SOC.
   */
  occupationalCategory?: schema.CategoryCodeOrSubClass | string;
  /**
   * A course or class that is one of the learning opportunities that constitute an educational / occupational program. No information is implied about whether the course is mandatory or optional; no guarantee is implied about whether the course will be available to everyone on the program.
   */
  hasCourse?: schema.CourseOrSubClass | string;
  /**
   * The type of educational or occupational program. For example, classroom, internship, alternance, etc..
   */
  programType?: schema.DefinedTermOrSubClass | string;
  /**
   * The date at which the program begins collecting applications for the next enrollment cycle.
   */
  applicationStartDate?: string;
  /**
   * An offer to provide this item&#x2014;for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use [[businessFunction]] to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a [[Demand]]. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
   *       
   */
  offers?: schema.OfferOrSubClass | schema.DemandOrSubClass | string;
  /**
   * The start date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
   */
  startDate?: string;
  /**
   * The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
   */
  provider?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
  /**
   * The number of times terms of study are offered per year. Semesters and quarters are common units for term. For example, if the student can only take 2 semesters for the program in one year, then termsPerYear should be 2.
   */
  termsPerYear?: number;
  /**
   * The expected salary upon completing the training.
   */
  salaryUponCompletion?: schema.MonetaryAmountDistributionOrSubClass | string;
  /**
   * A description of the qualification, award, certificate, diploma or other occupational credential awarded as a consequence of successful completion of this course or program.
   */
  occupationalCredentialAwarded?: string | schema.EducationalOccupationalCredentialOrSubClass;
  /**
   * A financial aid type or program which students may use to pay for tuition or fees associated with the program.
   */
  financialAidEligible?: schema.DefinedTermOrSubClass | string;
  /**
   * The day of the week for which these opening hours are valid.
   */
  dayOfWeek?: schema.DayOfWeek;
  /**
   * The end date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
   */
  endDate?: string;
  /**
   * Similar to courseMode, The medium or means of delivery of the program as a whole. The value may either be a text label (e.g. "online", "onsite" or "blended"; "synchronous" or "asynchronous"; "full-time" or "part-time") or a URL reference to a term from a controlled vocabulary (e.g. https://ceds.ed.gov/element/001311#Asynchronous ).
   */
  educationalProgramMode?: string;
  /**
   * The maximum number of students who may be enrolled in the program.
   */
  maximumEnrollment?: number;
  /**
   * The amount of time in a term as defined by the institution. A term is a length of time where students take one or more classes. Semesters and quarters are common units for term.
   */
  termDuration?: string;
  /**
   * The date at which the program stops collecting applications for the next enrollment cycle.
   */
  applicationDeadline?: string;
  /**
   * The number of credits or units a full-time student would be expected to take in 1 term however 'term' is defined by the institution.
   */
  typicalCreditsPerTerm?: number | schema.StructuredValueOrSubClass | string;
  /**
   * The expected length of time to complete the program if attending full-time.
   */
  timeToComplete?: string;
  /**
   * The number of credits or units awarded by a Course or required to complete an EducationalOccupationalProgram.
   */
  numberOfCredits?: schema.StructuredValueOrSubClass | number | string;
  /**
   * The time of day the program normally runs. For example, "evenings".
   */
  timeOfDay?: string;
  /**
   * A description of the qualification, award, certificate, diploma or other educational credential awarded as a consequence of successful completion of this course or program.
   */
  educationalCredentialAwarded?: string | schema.EducationalOccupationalCredentialOrSubClass;
  /**
   * Prerequisites for enrolling in the program.
   */
  programPrerequisites?: schema.CourseOrSubClass | schema.AlignmentObjectOrSubClass | schema.EducationalOccupationalCredentialOrSubClass | string;
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
 * schema:WorkBasedProgram
 *
 * This differs from WorkBasedProgram because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type WorkBasedProgramOrSubClass =
  | WorkBasedProgram
  ;

/**
 * schema:WorkBasedProgram - Validation schema (w/ JOI)
 */
export const WorkBasedProgramJoiSchema = Joi.object({
  '@type': Joi.string().valid('WorkBasedProgram').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
  name: Joi.string(),
  description: Joi.string(),
  '@id': Joi.string().uri(),
  trainingSalary: Joi.alternatives().try(Joi.lazy(() => schema.MonetaryAmountDistributionOrSubClassJoiSchema), Joi.string().uri()),
  occupationalCategory: Joi.alternatives().try(Joi.lazy(() => schema.CategoryCodeOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  hasCourse: Joi.alternatives().try(Joi.lazy(() => schema.CourseOrSubClassJoiSchema), Joi.string().uri()),
  programType: Joi.alternatives().try(Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  applicationStartDate: Joi.string().isoDate(),
  offers: Joi.alternatives().try(Joi.lazy(() => schema.OfferOrSubClassJoiSchema), Joi.lazy(() => schema.DemandOrSubClassJoiSchema), Joi.string().uri()),
  startDate: Joi.string().isoDate(),
  provider: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  termsPerYear: Joi.number(),
  salaryUponCompletion: Joi.alternatives().try(Joi.lazy(() => schema.MonetaryAmountDistributionOrSubClassJoiSchema), Joi.string().uri()),
  occupationalCredentialAwarded: Joi.alternatives().try(Joi.string().uri(), Joi.string(), Joi.lazy(() => schema.EducationalOccupationalCredentialOrSubClassJoiSchema)),
  financialAidEligible: Joi.alternatives().try(Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  dayOfWeek: Joi.lazy(() => schema.DayOfWeekJoiSchema),
  endDate: Joi.string().isoDate(),
  educationalProgramMode: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
  maximumEnrollment: Joi.number().integer(),
  termDuration: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
  applicationDeadline: Joi.string().isoDate(),
  typicalCreditsPerTerm: Joi.alternatives().try(Joi.number().integer(), Joi.lazy(() => schema.StructuredValueOrSubClassJoiSchema), Joi.string().uri()),
  timeToComplete: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
  numberOfCredits: Joi.alternatives().try(Joi.lazy(() => schema.StructuredValueOrSubClassJoiSchema), Joi.number().integer(), Joi.string().uri()),
  timeOfDay: Joi.string(),
  educationalCredentialAwarded: Joi.alternatives().try(Joi.string().uri(), Joi.string(), Joi.lazy(() => schema.EducationalOccupationalCredentialOrSubClassJoiSchema)),
  programPrerequisites: Joi.alternatives().try(Joi.lazy(() => schema.CourseOrSubClassJoiSchema), Joi.lazy(() => schema.AlignmentObjectOrSubClassJoiSchema), Joi.lazy(() => schema.EducationalOccupationalCredentialOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
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
 * schema:WorkBasedProgram - Validation schema (w/ JOI)
 *
 * This differs from WorkBasedProgramJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const WorkBasedProgramOrSubClassJoiSchema = Joi.alternatives().try([
  WorkBasedProgramJoiSchema,
]);

/**
 * Runtime validator for schema:WorkBasedProgram.
 *
 * If some data has a structure which matches a schema:WorkBasedProgram, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeWorkBasedProgram = validateWorkBasedProgram(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeWorkBasedProgram instanceof OaValidationError) {
 *   // From this point on, `maybeWorkBasedProgram` will have type `OaValidationError`
 *   const error = maybeWorkBasedProgram;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeWorkBasedProgram` will have type `WorkBasedProgram`
 * const workBasedProgram = maybeWorkBasedProgram;
 * ```
 */
export function validateWorkBasedProgram(maybeWorkBasedProgram: unknown): WorkBasedProgram | OaValidationError {
  const { value, error } = WorkBasedProgramJoiSchema.validate(maybeWorkBasedProgram);
  if (error) {
    return new OaValidationError('WorkBasedProgram', maybeWorkBasedProgram, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as WorkBasedProgram;
}
