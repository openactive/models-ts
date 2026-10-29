// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * schema:EducationalOccupationalProgram
 */
export type EducationalOccupationalProgram = {
  '@type': 'EducationalOccupationalProgram';
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
  description?: string | schema.TextObjectOrSubClass;
  /**
   * A unique URI-based identifier for the record.
   * `@id` properties are used as identifiers for compatibility with JSON-LD. The value of such a property must always be an absolute URI that provides a stable globally unique identifier for the resource, as described in [RFC3986](https://tools.ietf.org/html/rfc3986).
   * The primary purpose of the URI format in this context is to provide natural namespacing for the identifier. Hence, the URI itself may not resolve to a valid endpoint, but must use a domain name controlled by the resource owner (the organisation responsible for the OpenActive open data feed).
   */
  '@id'?: string;
  /**
   * The date on which the program stops collecting applications for the next enrollment cycle. Flexible application deadlines (for example, a program with rolling admissions) can be described in a textual string, rather than as a DateTime.
   */
  applicationDeadline?: string;
  /**
   * The date at which the program begins collecting applications for the next enrollment cycle.
   */
  applicationStartDate?: string;
  /**
   * The day of the week for which these opening hours are valid.
   */
  dayOfWeek?: schema.DayOfWeek;
  /**
   * A description of the qualification, award, certificate, diploma or other educational credential awarded as a consequence of successful completion of this course or program.
   */
  educationalCredentialAwarded?: schema.EducationalOccupationalCredentialOrSubClass | string;
  /**
   * Similar to courseMode, the medium or means of delivery of the program as a whole. The value may either be a text label (e.g. "online", "onsite" or "blended"; "synchronous" or "asynchronous"; "full-time" or "part-time") or a URL reference to a term from a controlled vocabulary (e.g. https://ceds.ed.gov/element/001311#Asynchronous ).
   */
  educationalProgramMode?: string;
  /**
   * The end date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
   */
  endDate?: string;
  /**
   * A financial aid type or program which students may use to pay for tuition or fees associated with the program.
   */
  financialAidEligible?: schema.DefinedTermOrSubClass | string;
  /**
   * A course or class that is one of the learning opportunities that constitute an educational / occupational program. No information is implied about whether the course is mandatory or optional; no guarantee is implied about whether the course will be available to everyone on the program.
   */
  hasCourse?: schema.CourseOrSubClass | string;
  /**
   * The maximum number of students who may be enrolled in the program.
   */
  maximumEnrollment?: number;
  /**
   * The number of credits or units awarded by a Course or required to complete an EducationalOccupationalProgram.
   */
  numberOfCredits?: number | schema.StructuredValueOrSubClass | string;
  /**
   * A category describing the job, preferably using a term from a taxonomy such as [BLS O*NET-SOC](http://www.onetcenter.org/taxonomy.html), [ISCO-08](https://www.ilo.org/public/english/bureau/stat/isco/isco08/) or similar, with the property repeated for each applicable value. Ideally the taxonomy should be identified, and both the textual label and formal code for the category should be provided.\n
   * Note: for historical reasons, any textual label and formal code provided as a literal may be assumed to be from O*NET-SOC.
   */
  occupationalCategory?: schema.CategoryCodeOrSubClass | string;
  /**
   * A description of the qualification, award, certificate, diploma or other occupational credential awarded as a consequence of successful completion of this course or program.
   */
  occupationalCredentialAwarded?: schema.EducationalOccupationalCredentialOrSubClass | string;
  /**
   * An offer to provide this item&#x2014;for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use [[businessFunction]] to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a [[Demand]]. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
   *       
   */
  offers?: schema.DemandOrSubClass | schema.OfferOrSubClass | string;
  /**
   * Prerequisites for enrolling in the program.
   */
  programPrerequisites?: schema.AlignmentObjectOrSubClass | schema.CourseOrSubClass | schema.EducationalOccupationalCredentialOrSubClass | string;
  /**
   * The type of educational or occupational program. For example, classroom, internship, alternance, etc.
   */
  programType?: schema.DefinedTermOrSubClass | string;
  /**
   * The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
   */
  provider?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
  /**
   * The expected salary upon completing the training.
   */
  salaryUponCompletion?: schema.MonetaryAmountDistributionOrSubClass | string;
  /**
   * The start date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
   */
  startDate?: string;
  /**
   * The amount of time in a term as defined by the institution. A term is a length of time where students take one or more classes. Semesters and quarters are common units for term.
   */
  termDuration?: string;
  /**
   * The number of times terms of study are offered per year. Semesters and quarters are common units for term. For example, if the student can only take 2 semesters for the program in one year, then termsPerYear should be 2.
   */
  termsPerYear?: number;
  /**
   * The time of day the program normally runs. For example, "evenings".
   */
  timeOfDay?: string;
  /**
   * The expected length of time to complete the program if attending full-time.
   */
  timeToComplete?: string;
  /**
   * The estimated salary earned while in the program.
   */
  trainingSalary?: schema.MonetaryAmountDistributionOrSubClass | string;
  /**
   * The number of credits or units a full-time student would be expected to take in 1 term however 'term' is defined by the institution.
   */
  typicalCreditsPerTerm?: number | schema.StructuredValueOrSubClass | string;
  /**
   * An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. Typically the value is a URI-identified RDF class, and in this case corresponds to the
   *     use of rdf:type in RDF. Text values can be used sparingly, for cases where useful information can be added without their being an appropriate schema to reference. In the case of text values, the class label should follow the schema.org <a href="https://schema.org/docs/styleguide.html">style guide</a>.
   */
  additionalType?: string;
  /**
   * An alias for the item.
   */
  alternateName?: string;
  /**
   * A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.
   */
  disambiguatingDescription?: string;
  /**
   * An image of the item. This can be a [[URL]] or a fully described [[ImageObject]].
   */
  image?: schema.ImageObjectOrSubClass | string;
  /**
   * Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See [background notes](/docs/datamodel.html#mainEntityBackground) for details.
   */
  mainEntityOfPage?: schema.CreativeWorkOrSubClass | string;
  /**
   * A person or organization who owns this Thing.
   */
  owner?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
  /**
   * Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role.
   */
  potentialAction?: schema.ActionOrSubClass | string;
  /**
   * URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website.
   */
  sameAs?: string;
  /**
   * A CreativeWork or Event about this Thing.
   */
  subjectOf?: schema.CreativeWorkOrSubClass | schema.Event_OrSubClass | string;
  /**
   * URL of the item.
   */
  url?: string;
};

/**
 * schema:EducationalOccupationalProgram
 *
 * This differs from EducationalOccupationalProgram because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type EducationalOccupationalProgramOrSubClass =
  | EducationalOccupationalProgram
  | schema.WorkBasedProgramOrSubClass
  ;

/**
 * schema:EducationalOccupationalProgram - Validation schema (w/ JOI)
 */
export const EducationalOccupationalProgramJoiSchema = Joi.object({
  '@type': Joi.string().valid('EducationalOccupationalProgram').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  name: Joi.string(),
  description: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.TextObjectOrSubClassJoiSchema), Joi.string().uri()),
  '@id': Joi.string().uri(),
  applicationDeadline: Joi.alternatives().try(Joi.string().isoDate(), Joi.string()),
  applicationStartDate: Joi.string().isoDate(),
  dayOfWeek: Joi.lazy(() => schema.DayOfWeekJoiSchema),
  educationalCredentialAwarded: Joi.alternatives().try(Joi.lazy(() => schema.EducationalOccupationalCredentialOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  educationalProgramMode: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
  endDate: Joi.string().isoDate(),
  financialAidEligible: Joi.alternatives().try(Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  hasCourse: Joi.alternatives().try(Joi.lazy(() => schema.CourseOrSubClassJoiSchema), Joi.string().uri()),
  maximumEnrollment: Joi.number().integer(),
  numberOfCredits: Joi.alternatives().try(Joi.number().integer(), Joi.lazy(() => schema.StructuredValueOrSubClassJoiSchema), Joi.string().uri()),
  occupationalCategory: Joi.alternatives().try(Joi.lazy(() => schema.CategoryCodeOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  occupationalCredentialAwarded: Joi.alternatives().try(Joi.lazy(() => schema.EducationalOccupationalCredentialOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  offers: Joi.alternatives().try(Joi.lazy(() => schema.DemandOrSubClassJoiSchema), Joi.lazy(() => schema.OfferOrSubClassJoiSchema), Joi.string().uri()),
  programPrerequisites: Joi.alternatives().try(Joi.lazy(() => schema.AlignmentObjectOrSubClassJoiSchema), Joi.lazy(() => schema.CourseOrSubClassJoiSchema), Joi.lazy(() => schema.EducationalOccupationalCredentialOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  programType: Joi.alternatives().try(Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  provider: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  salaryUponCompletion: Joi.alternatives().try(Joi.lazy(() => schema.MonetaryAmountDistributionOrSubClassJoiSchema), Joi.string().uri()),
  startDate: Joi.string().isoDate(),
  termDuration: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
  termsPerYear: Joi.number(),
  timeOfDay: Joi.string(),
  timeToComplete: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
  trainingSalary: Joi.alternatives().try(Joi.lazy(() => schema.MonetaryAmountDistributionOrSubClassJoiSchema), Joi.string().uri()),
  typicalCreditsPerTerm: Joi.alternatives().try(Joi.number().integer(), Joi.lazy(() => schema.StructuredValueOrSubClassJoiSchema), Joi.string().uri()),
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
 * schema:EducationalOccupationalProgram - Validation schema (w/ JOI)
 *
 * This differs from EducationalOccupationalProgramJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const EducationalOccupationalProgramOrSubClassJoiSchema = Joi.alternatives().try([
  EducationalOccupationalProgramJoiSchema,
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
export function validateEducationalOccupationalProgram(maybeEducationalOccupationalProgram: unknown): EducationalOccupationalProgram | OaValidationError {
  const { value, error } = EducationalOccupationalProgramJoiSchema.validate(maybeEducationalOccupationalProgram);
  if (error) {
    return new OaValidationError('EducationalOccupationalProgram', maybeEducationalOccupationalProgram, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as EducationalOccupationalProgram;
}
