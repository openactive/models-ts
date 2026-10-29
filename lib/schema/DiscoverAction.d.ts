import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as schema from '../schema';
/**
 * schema:DiscoverAction
 */
export declare type DiscoverAction = {
    '@type': 'DiscoverAction';
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
     * Description of the process by which the action was performed.
     */
    actionProcess?: schema.HowToOrSubClass | string;
    /**
     * Indicates the current disposition of the Action.
     */
    actionStatus?: schema.ActionStatusTypeOrSubClass | string;
    /**
     * The direct performer or driver of the action (animate or inanimate). E.g. *John* wrote a book.
     */
    agent?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
    /**
     * The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. E.g. John wrote a book from January to *December*. For media, including audio and video, it's the time offset of the end of a clip within a larger file.\n\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
     */
    endTime?: string;
    /**
     * For failed actions, more information on the cause of the failure. Consider using the Error type.
     */
    error?: schema.ThingOrSubClass | string;
    /**
     * The object that helped the agent perform the action. E.g. John wrote a book with *a pen*.
     */
    instrument?: schema.ThingOrSubClass | string;
    /**
     * The location of, for example, where an event is happening, where an organization is located, or where an action takes place.
     */
    location?: schema.PlaceOrSubClass | schema.PostalAddressOrSubClass | string | schema.VirtualLocationOrSubClass;
    /**
     * The object upon which the action is carried out, whose state is kept intact or changed. Also known as the semantic roles patient, affected or undergoer (which change their state) or theme (which doesn't). E.g. John read *a book*.
     */
    object?: schema.ThingOrSubClass | string;
    /**
     * Other co-agents that participated in the action indirectly. E.g. John wrote a book with *Steve*.
     */
    participant?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
    /**
     * The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
     */
    provider?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
    /**
     * The result produced in the action. E.g. John wrote *a book*.
     */
    result?: schema.ThingOrSubClass | string;
    /**
     * The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. E.g. John wrote a book from *January* to December. For media, including audio and video, it's the time offset of the start of a clip within a larger file.\n\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
     */
    startTime?: string;
    /**
     * Indicates a target EntryPoint, or url, for an Action.
     */
    target?: schema.EntryPointOrSubClass | string;
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
 * schema:DiscoverAction
 *
 * This differs from DiscoverAction because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type DiscoverActionOrSubClass = DiscoverAction;
/**
 * schema:DiscoverAction - Validation schema (w/ JOI)
 */
export declare const DiscoverActionJoiSchema: Joi.ObjectSchema;
/**
 * schema:DiscoverAction - Validation schema (w/ JOI)
 *
 * This differs from DiscoverActionJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const DiscoverActionOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:DiscoverAction.
 *
 * If some data has a structure which matches a schema:DiscoverAction, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeDiscoverAction = validateDiscoverAction(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeDiscoverAction instanceof OaValidationError) {
 *   // From this point on, `maybeDiscoverAction` will have type `OaValidationError`
 *   const error = maybeDiscoverAction;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeDiscoverAction` will have type `DiscoverAction`
 * const discoverAction = maybeDiscoverAction;
 * ```
 */
export declare function validateDiscoverAction(maybeDiscoverAction: unknown): DiscoverAction | OaValidationError;
