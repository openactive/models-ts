import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as schema from '../schema';
/**
 * schema:Hackathon
 */
export declare type Hackathon = {
    '@type': 'Hackathon';
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
     * A unique URI-based identifier for the record.
     * `@id` properties are used as identifiers for compatibility with JSON-LD. The value of such a property must always be an absolute URI that provides a stable globally unique identifier for the resource, as described in [RFC3986](https://tools.ietf.org/html/rfc3986).
     * The primary purpose of the URI format in this context is to provide natural namespacing for the identifier. Hence, the URI itself may not resolve to a valid endpoint, but must use a domain name controlled by the resource owner (the organisation responsible for the OpenActive open data feed).
     */
    '@id'?: string;
    /**
     * An Event that is part of this event. For example, a conference event includes many presentations, each of which is a subEvent of the conference.
     */
    subEvent?: schema.Event_OrSubClass | string;
    /**
     * The subject matter of the content.
     */
    about?: schema.ThingOrSubClass | string;
    /**
     * An offer to provide this item&#x2014;for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use [[businessFunction]] to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a [[Demand]]. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
     *
     */
    offers?: schema.DemandOrSubClass | schema.OfferOrSubClass | string;
    /**
     * The time admission will commence.
     */
    doorTime?: string;
    /**
     * The typical expected age range, e.g. '7-9', '11-'.
     */
    typicalAgeRange?: string;
    /**
     * A person or organization that supports (sponsors) something through some kind of financial contribution.
     */
    funder?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
    /**
     * The total number of individuals that may attend an event or venue.
     */
    maximumAttendeeCapacity?: number;
    /**
     * The overall rating, based on a collection of reviews or ratings, of the item.
     */
    aggregateRating?: schema.AggregateRatingOrSubClass | string;
    /**
     * A person attending the event.
     */
    attendees?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
    /**
     * The person or organization who wrote a composition, or who is the composer of a work performed at some event.
     */
    composer?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
    /**
     * The duration of the item (movie, audio recording, event, etc.) in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601).
     */
    duration?: string;
    /**
     * Organization or person who adapts a creative work to different languages, regional differences and technical requirements of a target market, or that translates during some event.
     */
    translator?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
    /**
     * Used in conjunction with eventStatus for rescheduled or cancelled events. This property contains the previously scheduled start date. For rescheduled events, the startDate property should be used for the newly scheduled start date. In the (rare) case of an event that has been postponed and rescheduled multiple times, this field may be repeated.
     */
    previousStartDate?: string;
    /**
     * A director of e.g. tv, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip.
     */
    director?: schema.PersonOrSubClass | string;
    /**
     * The location of, for example, where an event is happening, where an organization is located, or where an action takes place.
     */
    location?: schema.PostalAddressOrSubClass | string | schema.PlaceOrSubClass | schema.VirtualLocationOrSubClass;
    /**
     * An eventStatus of an event represents its status; particularly useful when an event is cancelled or rescheduled.
     */
    eventStatus?: schema.EventStatusType;
    /**
     * The maximum physical attendee capacity of an [[Event]] whose [[eventAttendanceMode]] is [[OfflineEventAttendanceMode]] (or the offline aspects, in the case of a [[MixedEventAttendanceMode]]).
     */
    maximumPhysicalAttendeeCapacity?: number;
    /**
     * The number of attendee places for an event that remain unallocated.
     */
    remainingAttendeeCapacity?: number;
    /**
     * A person or organization attending the event.
     */
    attendee?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
    /**
     * The end date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
     */
    endDate?: string;
    /**
     * An intended audience, i.e. a group for whom something was created.
     */
    audience?: schema.AudienceOrSubClass | string;
    /**
     * A person or organization that supports a thing through a pledge, promise, or financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor of an event.
     */
    sponsor?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
    /**
     * An organizer of an Event.
     */
    organizer?: schema.PersonOrSubClass | schema.OrganizationOrSubClass | string;
    /**
     * An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip.
     */
    actor?: schema.PersonOrSubClass | string;
    /**
     * A work featured in some event, e.g. exhibited in an ExhibitionEvent.
     *        Specific subproperties are available for workPerformed (e.g. a play), or a workPresented (a Movie at a ScreeningEvent).
     */
    workFeatured?: schema.CreativeWorkOrSubClass | string;
    /**
     * The eventAttendanceMode of an event indicates whether it occurs online, offline, or a mix.
     */
    eventAttendanceMode?: schema.EventAttendanceModeEnumeration;
    /**
     * An event that this event is a part of. For example, a collection of individual music performances might each have a music festival as their superEvent.
     */
    superEvent?: schema.Event_OrSubClass | string;
    /**
     * A work performed in some event, for example a play performed in a TheaterEvent.
     */
    workPerformed?: schema.CreativeWorkOrSubClass | string;
    /**
     * The CreativeWork that captured all or part of this Event.
     */
    recordedIn?: schema.CreativeWorkOrSubClass | string;
    /**
     * The main performer or performers of the event&#x2014;for example, a presenter, musician, or actor.
     */
    performers?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
    /**
     * The maximum physical attendee capacity of an [[Event]] whose [[eventAttendanceMode]] is [[OnlineEventAttendanceMode]] (or the online aspects, in the case of a [[MixedEventAttendanceMode]]).
     */
    maximumVirtualAttendeeCapacity?: number;
    /**
     * The start date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
     */
    startDate?: string;
    /**
     * The language of the content or performance or used in an action. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[availableLanguage]].
     */
    inLanguage?: string | schema.LanguageOrSubClass;
    /**
     * A performer at the event&#x2014;for example, a presenter, musician, musical group or actor.
     */
    performer?: schema.PersonOrSubClass | schema.OrganizationOrSubClass | string;
    /**
     * A review of the item.
     */
    review?: schema.ReviewOrSubClass | string;
    /**
     * Events that are a part of this event. For example, a conference event includes many presentations, each subEvents of the conference.
     */
    subEvents?: schema.Event_OrSubClass | string;
    /**
     * Associates an [[Event]] with a [[Schedule]]. There are circumstances where it is preferable to share a schedule for a series of
     *       repeating events rather than data on the individual events themselves. For example, a website or application might prefer to publish a schedule for a weekly
     *       gym class rather than provide data on every event. A schedule could be processed by applications to add forthcoming events to a calendar. An [[Event]] that
     *       is associated with a [[Schedule]] using this property should not have [[startDate]] or [[endDate]] properties. These are instead defined within the associated
     *       [[Schedule]], this avoids any ambiguity for clients using the data. The property might have repeated values to specify different schedules, e.g. for different months
     *       or seasons.
     */
    eventSchedule?: schema.ScheduleOrSubClass | string;
    /**
     * A secondary contributor to the CreativeWork or Event.
     */
    contributor?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
    /**
     * A flag to signal that the item, event, or place is accessible for free.
     */
    isAccessibleForFree?: boolean;
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
 * schema:Hackathon
 *
 * This differs from Hackathon because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type HackathonOrSubClass = Hackathon;
/**
 * schema:Hackathon - Validation schema (w/ JOI)
 */
export declare const HackathonJoiSchema: Joi.ObjectSchema;
/**
 * schema:Hackathon - Validation schema (w/ JOI)
 *
 * This differs from HackathonJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const HackathonOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:Hackathon.
 *
 * If some data has a structure which matches a schema:Hackathon, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeHackathon = validateHackathon(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeHackathon instanceof OaValidationError) {
 *   // From this point on, `maybeHackathon` will have type `OaValidationError`
 *   const error = maybeHackathon;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeHackathon` will have type `Hackathon`
 * const hackathon = maybeHackathon;
 * ```
 */
export declare function validateHackathon(maybeHackathon: unknown): Hackathon | OaValidationError;
