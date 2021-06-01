// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * schema:EducationEvent
 */
export type EducationEvent = {
  '@type': 'EducationEvent';
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
   * The level in terms of progression through an educational or training context. Examples of educational levels include 'beginner', 'intermediate' or 'advanced', and formal sets of level indicators.
   */
  educationalLevel?: string | schema.DefinedTermOrSubClass;
  /**
   * The item being described is intended to help a person learn the competency or learning outcome defined by the referenced term.
   */
  teaches?: string | schema.DefinedTermOrSubClass;
  /**
   * The item being described is intended to assess the competency or learning outcome defined by the referenced term.
   */
  assesses?: schema.DefinedTermOrSubClass | string;
  /**
   * A work featured in some event, e.g. exhibited in an ExhibitionEvent.
   *        Specific subproperties are available for workPerformed (e.g. a play), or a workPresented (a Movie at a ScreeningEvent).
   */
  workFeatured?: schema.CreativeWorkOrSubClass | string;
  /**
   * The overall rating, based on a collection of reviews or ratings, of the item.
   */
  aggregateRating?: schema.AggregateRatingOrSubClass | string;
  /**
   * A work performed in some event, for example a play performed in a TheaterEvent.
   */
  workPerformed?: schema.CreativeWorkOrSubClass | string;
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
   * A person attending the event.
   */
  attendees?: schema.PersonOrSubClass | schema.OrganizationOrSubClass | string;
  /**
   * A secondary contributor to the CreativeWork or Event.
   */
  contributor?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
  /**
   * An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip.
   */
  actor?: schema.PersonOrSubClass | string;
  /**
   * A performer at the event&#x2014;for example, a presenter, musician, musical group or actor.
   */
  performer?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
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
   * A director of e.g. tv, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip.
   */
  director?: schema.PersonOrSubClass | string;
  /**
   * Used in conjunction with eventStatus for rescheduled or cancelled events. This property contains the previously scheduled start date. For rescheduled events, the startDate property should be used for the newly scheduled start date. In the (rare) case of an event that has been postponed and rescheduled multiple times, this field may be repeated.
   */
  previousStartDate?: string;
  /**
   * A review of the item.
   */
  review?: schema.ReviewOrSubClass | string;
  /**
   * Organization or person who adapts a creative work to different languages, regional differences and technical requirements of a target market, or that translates during some event.
   */
  translator?: schema.PersonOrSubClass | schema.OrganizationOrSubClass | string;
  /**
   * An organizer of an Event.
   */
  organizer?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
  /**
   * Events that are a part of this event. For example, a conference event includes many presentations, each subEvents of the conference.
   */
  subEvents?: schema.Event_OrSubClass | string;
  /**
   * A person or organization that supports a thing through a pledge, promise, or financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor of an event.
   */
  sponsor?: schema.PersonOrSubClass | schema.OrganizationOrSubClass | string;
  /**
   * A flag to signal that the item, event, or place is accessible for free.
   */
  isAccessibleForFree?: boolean;
  /**
   * The total number of individuals that may attend an event or venue.
   */
  maximumAttendeeCapacity?: number;
  /**
   * An eventStatus of an event represents its status; particularly useful when an event is cancelled or rescheduled.
   */
  eventStatus?: schema.EventStatusType;
  /**
   * The maximum physical attendee capacity of an [[Event]] whose [[eventAttendanceMode]] is [[OfflineEventAttendanceMode]] (or the offline aspects, in the case of a [[MixedEventAttendanceMode]]). 
   */
  maximumPhysicalAttendeeCapacity?: number;
  /**
   * An Event that is part of this event. For example, a conference event includes many presentations, each of which is a subEvent of the conference.
   */
  subEvent?: schema.Event_OrSubClass | string;
  /**
   * The end date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
   */
  endDate?: string;
  /**
   * A person or organization attending the event.
   */
  attendee?: schema.PersonOrSubClass | schema.OrganizationOrSubClass | string;
  /**
   * The CreativeWork that captured all or part of this Event.
   */
  recordedIn?: schema.CreativeWorkOrSubClass | string;
  /**
   * The subject matter of the content.
   */
  about?: schema.ThingOrSubClass | string;
  /**
   * The language of the content or performance or used in an action. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[availableLanguage]].
   */
  inLanguage?: string | schema.LanguageOrSubClass;
  /**
   * An event that this event is a part of. For example, a collection of individual music performances might each have a music festival as their superEvent.
   */
  superEvent?: schema.Event_OrSubClass | string;
  /**
   * The eventAttendanceMode of an event indicates whether it occurs online, offline, or a mix.
   */
  eventAttendanceMode?: schema.EventAttendanceModeEnumeration;
  /**
   * The person or organization who wrote a composition, or who is the composer of a work performed at some event.
   */
  composer?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
  /**
   * The main performer or performers of the event&#x2014;for example, a presenter, musician, or actor.
   */
  performers?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
  /**
   * The duration of the item (movie, audio recording, event, etc.) in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601).
   */
  duration?: string;
  /**
   * The time admission will commence.
   */
  doorTime?: string;
  /**
   * A person or organization that supports (sponsors) something through some kind of financial contribution.
   */
  funder?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
  /**
   * The number of attendee places for an event that remain unallocated.
   */
  remainingAttendeeCapacity?: number;
  /**
   * The location of, for example, where an event is happening, where an organization is located, or where an action takes place.
   */
  location?: schema.PlaceOrSubClass | string | schema.VirtualLocationOrSubClass | schema.PostalAddressOrSubClass;
  /**
   * An intended audience, i.e. a group for whom something was created.
   */
  audience?: schema.AudienceOrSubClass | string;
  /**
   * The maximum physical attendee capacity of an [[Event]] whose [[eventAttendanceMode]] is [[OnlineEventAttendanceMode]] (or the online aspects, in the case of a [[MixedEventAttendanceMode]]). 
   */
  maximumVirtualAttendeeCapacity?: number;
  /**
   * The typical expected age range, e.g. '7-9', '11-'.
   */
  typicalAgeRange?: string;
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
 * schema:EducationEvent
 *
 * This differs from EducationEvent because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type EducationEventOrSubClass =
  | EducationEvent
  ;

/**
 * schema:EducationEvent - Validation schema (w/ JOI)
 */
export const EducationEventJoiSchema = Joi.object({
  '@type': Joi.string().valid('EducationEvent').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
  name: Joi.string(),
  description: Joi.string(),
  '@id': Joi.string().uri(),
  educationalLevel: Joi.alternatives().try(Joi.string().uri(), Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string()),
  teaches: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string().uri()),
  assesses: Joi.alternatives().try(Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  workFeatured: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
  aggregateRating: Joi.alternatives().try(Joi.lazy(() => schema.AggregateRatingOrSubClassJoiSchema), Joi.string().uri()),
  workPerformed: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
  eventSchedule: Joi.alternatives().try(Joi.lazy(() => schema.ScheduleOrSubClassJoiSchema), Joi.string().uri()),
  attendees: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  contributor: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  actor: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  performer: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  offers: Joi.alternatives().try(Joi.lazy(() => schema.OfferOrSubClassJoiSchema), Joi.lazy(() => schema.DemandOrSubClassJoiSchema), Joi.string().uri()),
  startDate: Joi.string().isoDate(),
  director: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  previousStartDate: Joi.string().isoDate(),
  review: Joi.alternatives().try(Joi.lazy(() => schema.ReviewOrSubClassJoiSchema), Joi.string().uri()),
  translator: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  organizer: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  subEvents: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.string().uri()),
  sponsor: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  isAccessibleForFree: Joi.boolean(),
  maximumAttendeeCapacity: Joi.number().integer(),
  eventStatus: Joi.lazy(() => schema.EventStatusTypeJoiSchema),
  maximumPhysicalAttendeeCapacity: Joi.number().integer(),
  subEvent: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.string().uri()),
  endDate: Joi.string().isoDate(),
  attendee: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  recordedIn: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
  about: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
  inLanguage: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.LanguageOrSubClassJoiSchema), Joi.string().uri()),
  superEvent: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.string().uri()),
  eventAttendanceMode: Joi.lazy(() => schema.EventAttendanceModeEnumerationJoiSchema),
  composer: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  performers: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  duration: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
  doorTime: Joi.alternatives().try(Joi.string().isoDate(), Joi.string()),
  funder: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  remainingAttendeeCapacity: Joi.number().integer(),
  location: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string(), Joi.lazy(() => schema.VirtualLocationOrSubClassJoiSchema), Joi.lazy(() => schema.PostalAddressOrSubClassJoiSchema), Joi.string().uri()),
  audience: Joi.alternatives().try(Joi.lazy(() => schema.AudienceOrSubClassJoiSchema), Joi.string().uri()),
  maximumVirtualAttendeeCapacity: Joi.number().integer(),
  typicalAgeRange: Joi.string(),
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
 * schema:EducationEvent - Validation schema (w/ JOI)
 *
 * This differs from EducationEventJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const EducationEventOrSubClassJoiSchema = Joi.alternatives().try([
  EducationEventJoiSchema,
]);

/**
 * Runtime validator for schema:EducationEvent.
 *
 * If some data has a structure which matches a schema:EducationEvent, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeEducationEvent = EducationEvent.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeEducationEvent instanceof OaValidationError) {
 *   // From this point on, `maybeEducationEvent` will have type `OaValidationError`
 *   const error = maybeEducationEvent;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeEducationEvent` will have type `EducationEvent`
 * const educationEvent = maybeEducationEvent;
 * ```
 */
export function validateEducationEvent(maybeEducationEvent: unknown): EducationEvent | OaValidationError {
  const { value, error } = EducationEventJoiSchema.validate(maybeEducationEvent);
  if (error) {
    return new OaValidationError('EducationEvent', maybeEducationEvent, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as EducationEvent;
}
