import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as schema from '../schema';
/**
 * schema:Occupation
 */
export declare type Occupation = {
    '@type': 'Occupation';
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
     * Responsibilities associated with this role or Occupation.
     */
    responsibilities?: string;
    /**
     * A category describing the job, preferably using a term from a taxonomy such as [BLS O*NET-SOC](http://www.onetcenter.org/taxonomy.html), [ISCO-08](https://www.ilo.org/public/english/bureau/stat/isco/isco08/) or similar, with the property repeated for each applicable value. Ideally the taxonomy should be identified, and both the textual label and formal code for the category should be provided.\n
     * Note: for historical reasons, any textual label and formal code provided as a literal may be assumed to be from O*NET-SOC.
     */
    occupationalCategory?: schema.CategoryCodeOrSubClass | string;
    /**
     *  The region/country for which this occupational description is appropriate. Note that educational requirements and qualifications can vary between jurisdictions.
     */
    occupationLocation?: schema.AdministrativeAreaOrSubClass | string;
    /**
     * Specific qualifications required for this role or Occupation.
     */
    qualifications?: string | schema.EducationalOccupationalCredentialOrSubClass;
    /**
     * Description of skills and experience needed for the position or Occupation.
     */
    experienceRequirements?: string | schema.OccupationalExperienceRequirementsOrSubClass;
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
 * schema:Occupation
 *
 * This differs from Occupation because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type OccupationOrSubClass = Occupation;
/**
 * schema:Occupation - Validation schema (w/ JOI)
 */
export declare const OccupationJoiSchema: Joi.ObjectSchema;
/**
 * schema:Occupation - Validation schema (w/ JOI)
 *
 * This differs from OccupationJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const OccupationOrSubClassJoiSchema: Joi.AlternativesSchema;
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
export declare function validateOccupation(maybeOccupation: unknown): Occupation | OaValidationError;
