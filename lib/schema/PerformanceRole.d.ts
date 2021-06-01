import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as schema from '../schema';
/**
 * schema:PerformanceRole
 */
export declare type PerformanceRole = {
    '@type': 'PerformanceRole';
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
     * The name of a character played in some acting or performing role, i.e. in a PerformanceRole.
     */
    characterName?: string;
    /**
     * The start date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
     */
    startDate?: string;
    /**
     * The end date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
     */
    endDate?: string;
    /**
     * A position played, performed or filled by a person or organization, as part of an organization. For example, an athlete in a SportsTeam might play in the position named 'Quarterback'.
     */
    namedPosition?: string;
    /**
     * A role played, performed or filled by a person or organization. For example, the team of creators for a comic book might fill the roles named 'inker', 'penciller', and 'letterer'; or an athlete in a SportsTeam might play in the position named 'Quarterback'.
     */
    roleName?: string;
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
 * schema:PerformanceRole
 *
 * This differs from PerformanceRole because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type PerformanceRoleOrSubClass = PerformanceRole;
/**
 * schema:PerformanceRole - Validation schema (w/ JOI)
 */
export declare const PerformanceRoleJoiSchema: Joi.ObjectSchema;
/**
 * schema:PerformanceRole - Validation schema (w/ JOI)
 *
 * This differs from PerformanceRoleJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const PerformanceRoleOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:PerformanceRole.
 *
 * If some data has a structure which matches a schema:PerformanceRole, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybePerformanceRole = PerformanceRole.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybePerformanceRole instanceof OaValidationError) {
 *   // From this point on, `maybePerformanceRole` will have type `OaValidationError`
 *   const error = maybePerformanceRole;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybePerformanceRole` will have type `PerformanceRole`
 * const performanceRole = maybePerformanceRole;
 * ```
 */
export declare function validatePerformanceRole(maybePerformanceRole: unknown): PerformanceRole | OaValidationError;
