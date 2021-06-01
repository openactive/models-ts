import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';
/**
 * HeadlineEvent
 *
 * This type is derived from https://schema.org/Event, which means that any of this type's properties within schema.org may also be used.
 */
export declare type HeadlineEvent = {
    '@type': 'HeadlineEvent';
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
     * The name of the event
     *
     * ```json
     * "name": "Speedball"
     * ```
     */
    name?: string;
    /**
     * A plain text description of the event, which must not include HTML or other markup.
     *
     * ```json
     * "description": "A fast paced game that incorporates netball, handball and football."
     * ```
     */
    description?: string;
    /**
     * A unique url based identifier for the record
     */
    '@id'?: string;
    /**
     * Provide additional, specific documentation for participants about how disabilities are, or can be supported at the Event.
     *
     * ```json
     * "accessibilityInformation": "This route has been British Cycling assessed as an accessible route, meaning it is suitable for the majority of adaptive bikes. The route will have no or low levels of traffic, there will be plenty of space and will have a good surface throughout. If you have any questions about using this route on an adaptive bike on this ride, please use visit https://www.letsride.co.uk/accessibility or call 0123 456 7000 and ask for the Recreation team."
     * ```
     */
    accessibilityInformation?: string;
    /**
     * Used to specify the types of disabilities or impairments that are supported at an event.
     *
     * ```json
     * "accessibilitySupport": [
     *   {
     *     "@type": "Concept",
     *     "@id": "https://openactive.io/accessibility-support#1393f2dc-3fcc-4be9-a99f-f1e51f5ad277",
     *     "prefLabel": "Visual impairment",
     *     "inScheme": "https://openactive.io/accessibility-support"
     *   }
     * ]
     * ```
     */
    accessibilitySupport?: oa.ConceptOrSubClass[];
    /**
     * Specifies the physical activity or activities that will take place during an event.
     *
     * ```json
     * "activity": [
     *   {
     *     "@type": "Concept",
     *     "@id": "https://openactive.io/activity-list#5e78bcbe-36db-425a-9064-bf96d09cc351",
     *     "prefLabel": "Bodypump™",
     *     "inScheme": "https://openactive.io/activity-list"
     *   }
     * ]
     * ```
     */
    activity?: oa.ConceptOrSubClass[];
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
     * Indicates that an event is recommended as being suitable for or is targetted at a specific age range.
     *
     * ```json
     * "ageRange": {
     *   "@type": "QuantitativeValue",
     *   "minValue": 50,
     *   "maxValue": 60
     * }
     * ```
     */
    ageRange?: oa.QuantitativeValueOrSubClass;
    /**
     * The enforced attendee age range requirement of the Event or Offer, that must be displayed prominently to the user before booking.
     *
     * ```json
     * "ageRestriction": {
     *   "@type": "QuantitativeValue",
     *   "minValue": 15,
     *   "maxValue": 60
     * }
     * ```
     */
    ageRestriction?: oa.QuantitativeValueOrSubClass;
    /**
     * Provides additional notes and instructions for event attendees, for example more information on how to find the event, what to bring, etc. The value of this property must not include HTML or other markup.
     *
     * ```json
     * "attendeeInstructions": "Ensure you bring trainers and a bottle of water."
     * ```
     */
    attendeeInstructions?: string;
    /**
     * Provides a set of tags that help categorise and describe an event, e.g. its intensity, purpose, etc.
     *
     * ```json
     * "category": [
     *   "High Intensity"
     * ]
     * ```
     */
    category?: string[] | oa.ConceptOrSubClass[];
    /**
     * A Person who contributes to the facilitation of the Event.
     *
     * ```json
     * "contributor": [
     *   {
     *     "@type": "Person",
     *     "familyName": "Smith",
     *     "givenName": "Nicole",
     *     "@id": "https://example.com/locations/1234ABCD/leaders/89",
     *     "identifier": 89
     *   }
     * ]
     * ```
     */
    contributor?: oa.PersonOrSubClass[];
    /**
     * The duration of the event given in [ISO8601] format.
     *
     * ```json
     * "duration": "PT1H"
     * ```
     */
    duration?: string;
    /**
     * The eventAttendanceMode of an event indicates whether it occurs online, offline, or a mix.
     *
     * ```json
     * "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode"
     * ```
     */
    eventAttendanceMode?: schema.EventAttendanceModeEnumeration;
    /**
     * The status of an event. Can be used to indicate rescheduled or cancelled events
     *
     * ```json
     * "eventStatus": "https://schema.org/EventScheduled"
     * ```
     */
    eventStatus?: schema.EventStatusType;
    /**
     * Indicates that an event is restricted to male, female or a mixed audience. This information must be displayed prominently to the user before booking. If a gender restriction isn't specified then applications should assume that an event is suitable for a mixed audience.
     *
     * ```json
     * "genderRestriction": "https://openactive.io/FemaleOnly"
     * ```
     */
    genderRestriction?: oa.GenderRestrictionType;
    /**
     * An image or photo that depicts the event, e.g. a photo taken at a previous event.
     *
     * ```json
     * "image": [
     *   {
     *     "@type": "ImageObject",
     *     "url": "http://example.com/static/image/speedball_large.jpg",
     *     "thumbnail": [
     *       {
     *         "@type": "ImageObject",
     *         "url": "http://example.com/static/image/speedball_thumbnail.jpg"
     *       }
     *     ]
     *   }
     * ]
     * ```
     */
    image?: oa.ImageObjectOrSubClass[];
    /**
     * Whether the Event is accessible without charge.
     *
     * ```json
     * "isAccessibleForFree": "true"
     * ```
     */
    isAccessibleForFree?: boolean;
    /**
     * A boolean property that indicates whether an Event will be coached. This flag allows an Event to be marked as being coached without having to specify a named individual as a coach. This addresses both privacy concerns and also scenarios where the actual coach may only be decided on the day.
     *
     * ```json
     * "isCoached": "true"
     * ```
     */
    isCoached?: boolean;
    /**
     * Refers to a person (schema:Person) who will be leading an event. E.g. a coach. This is a more specific role than an organiser or a contributor. The person will need to have given their consent for their personal information to be present in the Open Data.
     *
     * ```json
     * "leader": [
     *   {
     *     "@type": "Person",
     *     "familyName": "Smith",
     *     "givenName": "Nicole",
     *     "gender": "https://schema.org/Male",
     *     "@id": "https://example.com/locations/1234ABCD/leaders/89",
     *     "identifier": 89
     *   }
     * ]
     * ```
     */
    leader?: oa.PersonOrSubClass[];
    /**
     * A general purpose property for specifying the suitability of an event for different participant “levels”. E.g. `Beginner`, `Intermediate`, `Advanced`. Or in the case of martial arts, specific belt requirements.
     *
     * ```json
     * "level": [
     *   "Beginner"
     * ]
     * ```
     */
    level?: string[] | oa.ConceptOrSubClass[];
    /**
     * The location at which the event will take place. Or, in the case of events that may span multiple locations, the initial meeting or starting point.
     * Locations must be specified as a [Place](/models/place) complete with a fully described geographic location and/or address.
     *
     * ```json
     * "location": {
     *   "@type": "Place",
     *   "@id": "https://example.com/locations/1234ABCD",
     *   "identifier": "1234ABCD",
     *   "address": {
     *     "addressLocality": "New Malden",
     *     "addressRegion": "London",
     *     "postalCode": "NW5 3DU",
     *     "streetAddress": "Raynes Park High School, 46A West Barnes Lane",
     *     "@type": "PostalAddress"
     *   },
     *   "description": "Raynes Park High School in London",
     *   "geo": {
     *     "latitude": 51.4034423828125,
     *     "longitude": -0.2369088977575302,
     *     "@type": "GeoCoordinates"
     *   },
     *   "name": "Raynes Park High School",
     *   "telephone": "01253 473934"
     * }
     * ```
     */
    location?: oa.PlaceOrSubClass;
    /**
     * The maximum capacity of the Event.
     *
     * ```json
     * "maximumAttendeeCapacity": 30
     * ```
     */
    maximumAttendeeCapacity?: number;
    /**
     * Indicates the maximum number of connections to a shared virtual space.
     *
     * ```json
     * "maximumVirtualAttendeeCapacity": 20
     * ```
     */
    maximumVirtualAttendeeCapacity?: number;
    /**
     * Instructions for the attendees of an Event about where they should meet the organizer or leader at the start of the event. Some larger locations may have several possible meeting points, so this property provides additional more specific directions.
     *
     * ```json
     * "meetingPoint": "At the entrance to the park"
     * ```
     */
    meetingPoint?: string;
    /**
     * An array of schema:Offer that include the price of attending.
     *
     * ```json
     * "offers": [
     *   {
     *     "@type": "Offer",
     *     "identifier": "OX-AD",
     *     "name": "Adult",
     *     "price": 3.3,
     *     "priceCurrency": "GBP",
     *     "url": "https://profile.everyoneactive.com/booking?Site=0140&Activities=1402CBP20150217&Culture=en-GB"
     *   }
     * ]
     * ```
     */
    offers?: oa.OfferOrSubClass[];
    /**
     * The person or organization ultimately responsible for an event. An organizer might be an  schema:Organization or a schema:Person.
     *
     * ```json
     * "organizer": {
     *   "@type": "Organization",
     *   "@id": "https://id.bookingsystem.example.com/organizers/1",
     *   "name": "Central Speedball Association",
     *   "url": "http://www.speedball-world.com"
     * }
     * ```
     */
    organizer?: oa.PersonOrSubClass | oa.OrganizationOrSubClass;
    /**
     * Indicates that an event will be organised according to a specific Programme.
     *
     * ```json
     * "programme": {
     *   "@type": "Brand",
     *   "name": "Play Ball!",
     *   "url": "http://example.org/brand/play-ball"
     * }
     * ```
     */
    programme?: oa.BrandOrSubClass;
    /**
     * The number of places that are still available for the Event.
     *
     * ```json
     * "remainingAttendeeCapacity": 20
     * ```
     */
    remainingAttendeeCapacity?: number;
    /**
     * Provides a note from an organizer relating to how this Event is scheduled.
     *
     * ```json
     * "schedulingNote": "This event doesn't run during school holidays"
     * ```
     */
    schedulingNote?: string;
    /**
     * The start date and time of the event. Can be specified as a schema:Date or schema:DateTime.
     *
     * ```json
     * "startDate": "2018-01-27T12:00:00Z"
     * ```
     */
    startDate?: string;
    /**
     * The end date and time of the event. Can be specified as a schema:Date or  schema:DateTime
     * It is recommended that publishers provide either an schema:endDate or a schema:duration for an event.
     *
     * ```json
     * "endDate": "2018-01-27T12:00:00Z"
     * ```
     */
    endDate?: string;
    /**
     * Relates a parent event to a child event. Properties describing the parent event can be assumed to apply to the child, unless otherwise specified. A child event might be a specific instance of an Event within a schedule
     */
    subEvent?: oa.Event_OrSubClass[];
    /**
     * Relates a child event to a parent event. Properties describing the parent event can be assumed to apply to the child, unless otherwise specified. A parent event might specify a recurring schedule, of which the child event is one specific instance
     */
    superEvent?: oa.Event_OrSubClass;
    /**
     * A URL to a web page (or section of a page) that describes the event.
     *
     * ```json
     * "url": "https://example.com/event/1234"
     * ```
     */
    url?: string;
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
     * Internal location of the event, e.g. Court 1
     *
     * If you are using this property, please join the discussion at proposal [#110](https://github.com/openactive/modelling-opportunity-data/issues/110).
     */
    'beta:sportsActivityLocation'?: schema.SportsActivityLocationOrSubClass[];
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
 * HeadlineEvent
 *
 * This type is derived from https://schema.org/Event, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from HeadlineEvent because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type HeadlineEventOrSubClass = HeadlineEvent;
/**
 * HeadlineEvent - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/Event, which means that any of this type's properties within schema.org may also be used.
 */
export declare const HeadlineEventJoiSchema: Joi.ObjectSchema;
/**
 * HeadlineEvent - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/Event, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from HeadlineEventJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const HeadlineEventOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for HeadlineEvent.
 *
 * If some data has a structure which matches a HeadlineEvent, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeHeadlineEvent = HeadlineEvent.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeHeadlineEvent instanceof OaValidationError) {
 *   // From this point on, `maybeHeadlineEvent` will have type `OaValidationError`
 *   const error = maybeHeadlineEvent;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeHeadlineEvent` will have type `HeadlineEvent`
 * const headlineEvent = maybeHeadlineEvent;
 * ```
 */
export declare function validateHeadlineEvent(maybeHeadlineEvent: unknown): HeadlineEvent | OaValidationError;
