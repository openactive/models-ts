// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * Slot
 *
 * This type is derived from https://schema.org/Event, which means that any of this type's properties within schema.org may also be used.
 */
export type Slot = {
  '@type': 'Slot';
  '@context'?: string | string[];
  /**
   * A local non-URI identifier for the resource
   *
   * ```json
   * "identifier": "SB1234"
   * ```
   */
  identifier?: number | string | oa.PropertyValueOrSubClass | oa.PropertyValueOrSubClass[];
  /**
   * A unique url based identifier for the record
   *
   * ```json
   * "@id": "https://example.com/slot/12345"
   * ```
   */
  '@id'?: string;
  /**
   * Free text restrictions that must be displayed prominently to the user before booking. This property must only contain restrictions not described by `oa:ageRestriction` or `oa:genderRestriction`.
   *
   * ```json
   * "additionalAdmissionRestriction": [
   *   "Participants younger than 12 must be accompanied by an adult",
   *   "Participants must be comfortable standing for long periods of time"
   * ]
   * ```
   */
  additionalAdmissionRestriction?: string[];
  /**
   * The duration of the slot given in [ISO8601] format.
   *
   * ```json
   * "duration": "PT1H"
   * ```
   */
  duration?: string;
  /**
   * `FacilityUse` or `IndividualFacilityUse` that has this `Slot`, either directly embedded or referenced by its `@id`
   *
   * ```json
   * "facilityUse": "https://example.com/facility-use/1"
   * ```
   */
  facilityUse?: oa.FacilityUseOrSubClass | string;
  /**
   * The maximum available courts or pitches at this time. Must be 0 or 1 for an IndividualFacilityUse.
   *
   * ```json
   * "maximumUses": 16
   * ```
   */
  maximumUses?: number;
  /**
   * An array of schema:Offer that include the price of booking.
   *
   * ```json
   * "offers": {
   *   "@type": "Offer",
   *   "identifier": "OX-AD",
   *   "name": "Adult",
   *   "price": 7.5,
   *   "priceCurrency": "GBP",
   *   "url": "https://profile.everyoneactive.com/booking?Site=0140&Activities=1402CBP20150217&Culture=en-GB"
   * }
   * ```
   */
  offers?: oa.OfferOrSubClass[];
  /**
   * The person or organization ultimately responsible for an event. An organizer might be an  schema:Organization or a schema:Person.
   *
   * ```json
   * "organizer": {
   *   "@type": "Organization",
   *   "name": "Central Speedball Association",
   *   "url": "http://www.speedball-world.com"
   * }
   * ```
   */
  organizer?: oa.PersonOrSubClass | oa.OrganizationOrSubClass;
  /**
   * The remaining available courts or pitches at this time. Must be 0 or 1 for an IndividualFacilityUse.
   *
   * ```json
   * "remainingUses": 5
   * ```
   */
  remainingUses?: number;
  /**
   * The start date and time of the slot.
   *
   * ```json
   * "startDate": "2018-01-27T12:00:00Z"
   * ```
   */
  startDate?: string;
  /**
   * The end date and time of the slot.
   * It is recommended that publishers provide either an schema:endDate or a schema:duration for an slot.
   *
   * ```json
   * "endDate": "2018-01-27T12:00:00Z"
   * ```
   */
  endDate?: string;
  /**
   * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
   * Internal location of the event, e.g. Court 1
   * 
   * If you are using this property, please join the discussion at proposal [#110](https://github.com/openactive/modelling-opportunity-data/issues/110).
   */
  'beta:sportsActivityLocation'?: schema.SportsActivityLocationOrSubClass[];
  /**
   * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
   * Sometimes a description is stored with formatting (e.g. href, bold, italics, embedded YouTube videos). This formatting can be useful for data consumers. This property must contain HTML.
   * 
   * If you are using this property, please join the discussion at proposal [#276](https://github.com/openactive/modelling-opportunity-data/issues/276).
   */
  'beta:formattedDescription'?: string;
  /**
   * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
   * The distance of a run, cycle or other activity. Must also include units.
   * 
   * If you are using this property, please join the discussion at proposal [#275](https://github.com/openactive/modelling-opportunity-data/issues/275).
   */
  'beta:distance'?: oa.QuantitativeValueOrSubClass;
  /**
   * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
   * For events that have an unlimited number of tickets, captures the number of attendees (actual attendance).
   * 
   * If you are using this property, please join the discussion at proposal [#274](https://github.com/openactive/modelling-opportunity-data/issues/274).
   */
  'beta:attendeeCount'?: number;
  /**
   * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
   * For events that have an unlimited number of tickets, captures the number of registrations (intention to attend).
   * 
   * If you are using this property, please join the discussion at proposal [#273](https://github.com/openactive/modelling-opportunity-data/issues/273).
   */
  'beta:registrationCount'?: number;
  /**
   * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
   * A property that details whether the event is suitable for wheelchair access. Placed on Event as this field could be used to detail whether the Event is suitable, as well as the Place.
   * 
   * If you are using this property, please join the discussion at proposal [#166](https://github.com/openactive/modelling-opportunity-data/issues/166).
   */
  'beta:isWheelchairAccessible'?: boolean;
  /**
   * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
   * A property that allows an Event duration to be represented as a range (e.g. 0-30mins, 30-60mins, 60-90mins, 90+).
   * 
   * If you are using this property, please join the discussion at proposal [#201](https://github.com/openactive/modelling-opportunity-data/issues/201).
   */
  'beta:estimatedDuration'?: oa.QuantitativeValueOrSubClass;
  /**
   * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
   * A related video object.
   * 
   * If you are using this property, please join the discussion at proposal [#88](https://github.com/openactive/modelling-opportunity-data/issues/88).
   */
  'beta:video'?: oa.VideoObjectOrSubClass[];
  /**
   * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
   * Duration before the event for which the associated Offers are valid
   * 
   * If you are using this property, please join the discussion at proposal [#204](https://github.com/openactive/modelling-opportunity-data/issues/204).
   */
  'beta:offerValidityPeriod'?: string;
  /**
   * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
   * Whether the event or facility is indoor or outdoor.
   * 
   * If you are using this property, please join the discussion at proposal [#1](https://github.com/openactive/facility-types/issues/1).
   */
  'beta:facilitySetting'?: oa.FacilitySettingType;
  /**
   * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
   * A property that indicates whether the event is led by a virtual coach. Only relevant if an event `isCoached`. If not provided is assumed to be `false`.
   * 
   * If you are using this property, please join the discussion at proposal [#71](https://github.com/openactive/modelling-opportunity-data/issues/71).
   */
  'beta:isVirtuallyCoached'?: boolean;
  /**
   * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
   * Describes a means of electronic access to a shared virtual space.
   * 
   * If you are using this property, please join the discussion at proposal [#224](https://github.com/openactive/modelling-opportunity-data/issues/224).
   */
  'beta:virtualLocation'?: oa.VirtualLocationOrSubClass;
  /**
   * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
   * The physical location affiliated with the virtual event, for example the original location of the event before it was moved online.
   * 
   * If you are using this property, please join the discussion at proposal [#227](https://github.com/openactive/modelling-opportunity-data/issues/227).
   */
  'beta:affiliatedLocation'?: oa.PlaceOrSubClass;
  /**
   * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
   * Indicates whether the virtual event is interactive (e.g. Zoom with participant microphones and cameras on), or is just a one-way broadcast (e.g. Facebook Live, Instagram Live, Zoom with participant microphones and cameras off).
   * 
   * If you are using this property, please join the discussion at proposal [#230](https://github.com/openactive/modelling-opportunity-data/issues/230).
   */
  'beta:isInteractivityPreferred'?: boolean;
  /**
   * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
   * Indicates whether the participant must or may supply equipment for use in the Event.
   * 
   * If you are using this property, please join the discussion at proposal [#229](https://github.com/openactive/modelling-opportunity-data/issues/229).
   */
  'beta:participantSuppliedEquipment'?: oa.RequiredStatusType;
  /**
   * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
   * The URL of the webpage where the activity provider accepts donations.
   * 
   * If you are using this property, please join the discussion at proposal [#234](https://github.com/openactive/modelling-opportunity-data/issues/234).
   */
  'beta:donationPaymentUrl'?: string;
  /**
   * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
   * A property that indicates whether the first session is free.
   * 
   * If you are using this property, please join the discussion at proposal [#232](https://github.com/openactive/modelling-opportunity-data/issues/232).
   */
  'beta:isFirstSessionAccessibleForFree'?: boolean;
  /**
   * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
   * Contact details for an Event, where they are not specifically related to the `organizer` or `leader`.
   * 
   * If you are using this property, please join the discussion at proposal [#113](https://github.com/openactive/modelling-opportunity-data/issues/113).
   */
  'beta:contactPoint'?: schema.ContactPointOrSubClass;
  /**
   * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
   * The channels through which a booking can be made.
   * 
   * If you are using this property, please join the discussion at proposal [#161](https://github.com/openactive/modelling-opportunity-data/issues/161).
   */
  'beta:bookingChannel'?: oa.BookingChannelType[];
  /**
   * [NOTICE: This property is part of the Open Booking API Test Interface, and MUST NOT be used in production.]
   */
  'test:testOpenBookingFlow'?: oa.TestOpenBookingFlowEnumeration;
  /**
   * [NOTICE: This property is part of the Open Booking API Test Interface, and MUST NOT be used in production.]
   * The opportunity criteria which the Event conforms to.
   */
  'test:testOpportunityCriteria'?: oa.TestOpportunityCriteriaEnumeration;
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
   * An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip.
   */
  actor?: schema.PersonOrSubClass | string;
  /**
   * A performer at the event&#x2014;for example, a presenter, musician, musical group or actor.
   */
  performer?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
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
   * Events that are a part of this event. For example, a conference event includes many presentations, each subEvents of the conference.
   */
  subEvents?: schema.Event_OrSubClass | string;
  /**
   * A person or organization that supports a thing through a pledge, promise, or financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor of an event.
   */
  sponsor?: schema.PersonOrSubClass | schema.OrganizationOrSubClass | string;
  /**
   * The maximum physical attendee capacity of an [[Event]] whose [[eventAttendanceMode]] is [[OfflineEventAttendanceMode]] (or the offline aspects, in the case of a [[MixedEventAttendanceMode]]). 
   */
  maximumPhysicalAttendeeCapacity?: number;
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
   * The person or organization who wrote a composition, or who is the composer of a work performed at some event.
   */
  composer?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
  /**
   * The main performer or performers of the event&#x2014;for example, a presenter, musician, or actor.
   */
  performers?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
  /**
   * The time admission will commence.
   */
  doorTime?: string;
  /**
   * A person or organization that supports (sponsors) something through some kind of financial contribution.
   */
  funder?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
  /**
   * An intended audience, i.e. a group for whom something was created.
   */
  audience?: schema.AudienceOrSubClass | string;
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
   * A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.
   */
  disambiguatingDescription?: string;
};

/**
 * Slot
 *
 * This type is derived from https://schema.org/Event, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from Slot because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type SlotOrSubClass =
  | Slot
  ;

/**
 * Slot - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/Event, which means that any of this type's properties within schema.org may also be used.
 */
export const SlotJoiSchema = Joi.object({
  '@type': Joi.string().valid('Slot').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  identifier: Joi.alternatives().try(Joi.number().integer(), Joi.string(), Joi.lazy(() => oa.PropertyValueOrSubClassJoiSchema), Joi.array().items(Joi.lazy(() => oa.PropertyValueOrSubClassJoiSchema))),
  '@id': Joi.string().uri(),
  additionalAdmissionRestriction: Joi.array().items(Joi.string()),
  duration: Joi.string(),
  facilityUse: Joi.alternatives().try(Joi.lazy(() => oa.FacilityUseOrSubClassJoiSchema), Joi.string().uri()),
  maximumUses: Joi.number().integer(),
  offers: Joi.array().items(Joi.lazy(() => oa.OfferOrSubClassJoiSchema)),
  organizer: Joi.alternatives().try(Joi.lazy(() => oa.PersonOrSubClassJoiSchema), Joi.lazy(() => oa.OrganizationOrSubClassJoiSchema)),
  remainingUses: Joi.number().integer(),
  startDate: Joi.string().isoDate(),
  endDate: Joi.string().isoDate(),
  'beta:sportsActivityLocation': Joi.array().items(Joi.lazy(() => schema.SportsActivityLocationOrSubClassJoiSchema)),
  'beta:formattedDescription': Joi.string(),
  'beta:distance': Joi.lazy(() => oa.QuantitativeValueOrSubClassJoiSchema),
  'beta:attendeeCount': Joi.number().integer(),
  'beta:registrationCount': Joi.number().integer(),
  'beta:isWheelchairAccessible': Joi.boolean(),
  'beta:estimatedDuration': Joi.lazy(() => oa.QuantitativeValueOrSubClassJoiSchema),
  'beta:video': Joi.array().items(Joi.lazy(() => oa.VideoObjectOrSubClassJoiSchema)),
  'beta:offerValidityPeriod': Joi.string(),
  'beta:facilitySetting': Joi.lazy(() => oa.FacilitySettingTypeJoiSchema),
  'beta:isVirtuallyCoached': Joi.boolean(),
  'beta:virtualLocation': Joi.lazy(() => oa.VirtualLocationOrSubClassJoiSchema),
  'beta:affiliatedLocation': Joi.lazy(() => oa.PlaceOrSubClassJoiSchema),
  'beta:isInteractivityPreferred': Joi.boolean(),
  'beta:participantSuppliedEquipment': Joi.lazy(() => oa.RequiredStatusTypeJoiSchema),
  'beta:donationPaymentUrl': Joi.string().uri(),
  'beta:isFirstSessionAccessibleForFree': Joi.boolean(),
  'beta:contactPoint': Joi.lazy(() => schema.ContactPointOrSubClassJoiSchema),
  'beta:bookingChannel': Joi.array().items(Joi.lazy(() => oa.BookingChannelTypeJoiSchema)),
  'test:testOpenBookingFlow': Joi.lazy(() => oa.TestOpenBookingFlowEnumerationJoiSchema),
  'test:testOpportunityCriteria': Joi.lazy(() => oa.TestOpportunityCriteriaEnumerationJoiSchema),
  workFeatured: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
  aggregateRating: Joi.alternatives().try(Joi.lazy(() => schema.AggregateRatingOrSubClassJoiSchema), Joi.string().uri()),
  workPerformed: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
  eventSchedule: Joi.alternatives().try(Joi.lazy(() => schema.ScheduleOrSubClassJoiSchema), Joi.string().uri()),
  attendees: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  actor: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  performer: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  director: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  previousStartDate: Joi.string().isoDate(),
  review: Joi.alternatives().try(Joi.lazy(() => schema.ReviewOrSubClassJoiSchema), Joi.string().uri()),
  translator: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  subEvents: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.string().uri()),
  sponsor: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  maximumPhysicalAttendeeCapacity: Joi.number().integer(),
  attendee: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  recordedIn: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
  about: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
  inLanguage: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.LanguageOrSubClassJoiSchema), Joi.string().uri()),
  composer: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  performers: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  doorTime: Joi.alternatives().try(Joi.string().isoDate(), Joi.string()),
  funder: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  audience: Joi.alternatives().try(Joi.lazy(() => schema.AudienceOrSubClassJoiSchema), Joi.string().uri()),
  typicalAgeRange: Joi.string(),
  sameAs: Joi.string().uri(),
  subjectOf: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
  potentialAction: Joi.alternatives().try(Joi.lazy(() => schema.ActionOrSubClassJoiSchema), Joi.string().uri()),
  mainEntityOfPage: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
  additionalType: Joi.string().uri(),
  alternateName: Joi.string(),
  disambiguatingDescription: Joi.string(),
});

/**
 * Slot - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/Event, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from SlotJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const SlotOrSubClassJoiSchema = Joi.alternatives().try([
  SlotJoiSchema,
]);

/**
 * Runtime validator for Slot.
 *
 * If some data has a structure which matches a Slot, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeSlot = Slot.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeSlot instanceof OaValidationError) {
 *   // From this point on, `maybeSlot` will have type `OaValidationError`
 *   const error = maybeSlot;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeSlot` will have type `Slot`
 * const slot = maybeSlot;
 * ```
 */
export function validateSlot(maybeSlot: unknown): Slot | OaValidationError {
  const { value, error } = SlotJoiSchema.validate(maybeSlot);
  if (error) {
    return new OaValidationError('Slot', maybeSlot, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as Slot;
}
