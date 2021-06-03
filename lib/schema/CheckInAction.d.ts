import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as schema from '../schema';
/**
 * schema:CheckInAction
 */
export declare type CheckInAction = {
    '@type': 'CheckInAction';
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
     * A sub property of participant. The participant who is at the receiving end of the action.
     */
    recipient?: schema.OrganizationOrSubClass | schema.ContactPointOrSubClass | schema.PersonOrSubClass | schema.AudienceOrSubClass | string;
    /**
     * A sub property of instrument. The language used on this action.
     */
    language?: schema.LanguageOrSubClass | string;
    /**
     * The subject matter of the content.
     */
    about?: schema.ThingOrSubClass | string;
    /**
     * The language of the content or performance or used in an action. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[availableLanguage]].
     */
    inLanguage?: string | schema.LanguageOrSubClass;
    /**
     * The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. e.g. John wrote a book from *January* to December. For media, including audio and video, it's the time offset of the start of a clip within a larger file.\n\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
     */
    startTime?: string;
    /**
     * The object that helped the agent perform the action. e.g. John wrote a book with *a pen*.
     */
    instrument?: schema.ThingOrSubClass | string;
    /**
     * Indicates the current disposition of the Action.
     */
    actionStatus?: schema.ActionStatusTypeOrSubClass | string;
    /**
     * The direct performer or driver of the action (animate or inanimate). e.g. *John* wrote a book.
     */
    agent?: schema.PersonOrSubClass | schema.OrganizationOrSubClass | string;
    /**
     * Other co-agents that participated in the action indirectly. e.g. John wrote a book with *Steve*.
     */
    participant?: schema.PersonOrSubClass | schema.OrganizationOrSubClass | string;
    /**
     * Indicates a target EntryPoint for an Action.
     */
    target?: schema.EntryPointOrSubClass | string;
    /**
     * The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. e.g. John wrote a book from January to *December*. For media, including audio and video, it's the time offset of the end of a clip within a larger file.\n\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
     */
    endTime?: string;
    /**
     * For failed actions, more information on the cause of the failure.
     */
    error?: schema.ThingOrSubClass | string;
    /**
     * The result produced in the action. e.g. John wrote *a book*.
     */
    result?: schema.ThingOrSubClass | string;
    /**
     * The object upon which the action is carried out, whose state is kept intact or changed. Also known as the semantic roles patient, affected or undergoer (which change their state) or theme (which doesn't). e.g. John read *a book*.
     */
    object?: schema.ThingOrSubClass | string;
    /**
     * The location of, for example, where an event is happening, where an organization is located, or where an action takes place.
     */
    location?: schema.PlaceOrSubClass | string | schema.VirtualLocationOrSubClass | schema.PostalAddressOrSubClass;
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
 * schema:CheckInAction
 *
 * This differs from CheckInAction because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type CheckInActionOrSubClass = CheckInAction;
/**
 * schema:CheckInAction - Validation schema (w/ JOI)
 */
export declare const CheckInActionJoiSchema: Joi.ObjectSchema;
/**
 * schema:CheckInAction - Validation schema (w/ JOI)
 *
 * This differs from CheckInActionJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const CheckInActionOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:CheckInAction.
 *
 * If some data has a structure which matches a schema:CheckInAction, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeCheckInAction = validateCheckInAction(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeCheckInAction instanceof OaValidationError) {
 *   // From this point on, `maybeCheckInAction` will have type `OaValidationError`
 *   const error = maybeCheckInAction;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeCheckInAction` will have type `CheckInAction`
 * const checkInAction = maybeCheckInAction;
 * ```
 */
export declare function validateCheckInAction(maybeCheckInAction: unknown): CheckInAction | OaValidationError;
