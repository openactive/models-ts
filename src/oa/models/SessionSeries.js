
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 * 
 * This type is derived from https://schema.org/Event, which means that any of this type's properties within schema.org may also be used.
 */
const SessionSeries = s.intersection([
  s.type({'@type': s.literal('SessionSeries')}),
  s.partial({
      /**
      * A local non-URI identifier for the resource
      *
      * ```json
      * "identifier": "SB1234"
      * ```
      */
      identifier: s.union([s.nonNegativeInt,s.string,oa.PropertyValue,s.array(oa.PropertyValue)]),
      /**
      * The name of the event
      *
      * ```json
      * "name": "Speedball"
      * ```
      */
      name: s.string,
      /**
      * A plain text description of the event, which must not include HTML or other markup.
      *
      * ```json
      * "description": "A fast paced game that incorporates netball, handball and football."
      * ```
      */
      description: s.string,
      /**
      * A unique url based identifier for the record
      *
      * ```json
      * "@id": "https://example.com/event/1234512345"
      * ```
      */
      '@id': s.urlString,
      /**
      * Provide additional, specific documentation for participants about how disabilities are, or can be supported at the Event.
      *
      * ```json
      * "accessibilityInformation": "This route has been British Cycling assessed as an accessible route, meaning it is suitable for the majority of adaptive bikes. The route will have no or low levels of traffic, there will be plenty of space and will have a good surface throughout. If you have any questions about using this route on an adaptive bike on this ride, please use visit https://www.letsride.co.uk/accessibility or call 0123 456 7000 and ask for the Recreation team."
      * ```
      */
      accessibilityInformation: s.string,
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
      accessibilitySupport: s.array(oa.Concept),
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
      activity: s.array(oa.Concept),
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
      additionalAdmissionRestriction: s.array(s.string),
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
      ageRange: oa.QuantitativeValue,
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
      ageRestriction: oa.QuantitativeValue,
      /**
      * Provides additional notes and instructions for event attendees, for example more information on how to find the event, what to bring, etc. The value of this property must not include HTML or other markup.
      *
      * ```json
      * "attendeeInstructions": "Ensure you bring trainers and a bottle of water."
      * ```
      */
      attendeeInstructions: s.string,
      /**
      * Provides a set of tags that help categorise and describe an event, e.g. its intensity, purpose, etc.
      *
      * ```json
      * "category": [
      *   "High Intensity"
      * ]
      * ```
      */
      category: s.union([s.array(s.string),s.array(oa.Concept)]),
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
      contributor: s.array(oa.Person),
      /**
      * The duration of the event given in [ISO8601] format.
      *
      * ```json
      * "duration": "PT1H"
      * ```
      */
      duration: s.string,
      /**
      * The eventAttendanceMode of an event indicates whether it occurs online, offline, or a mix.
      *
      * ```json
      * "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode"
      * ```
      */
      eventAttendanceMode: schema.enums.EventAttendanceModeEnumeration,
      /**
      * A an array of oa:Schedule or oa:PartialSchedule, which represents a recurrence pattern.
      *
      * ```json
      * "eventSchedule": [
      *   {
      *     "@type": "PartialSchedule",
      *     "repeatFrequency": "P1W",
      *     "startTime": "20:15",
      *     "endTime": "20:45",
      *     "byDay": [
      *       "http://schema.org/Tuesday"
      *     ],
      *     "scheduleTimezone": "Europe/London"
      *   }
      * ]
      * ```
      */
      eventSchedule: s.array(oa.Schedule),
      /**
      * The status of an event. Can be used to indicate rescheduled or cancelled events
      *
      * ```json
      * "eventStatus": "https://schema.org/EventScheduled"
      * ```
      */
      eventStatus: schema.enums.EventStatusType,
      /**
      * Indicates that an event is restricted to male, female or a mixed audience. This information must be displayed prominently to the user before booking. If a gender restriction isn't specified then applications should assume that an event is suitable for a mixed audience.
      *
      * ```json
      * "genderRestriction": "https://openactive.io/FemaleOnly"
      * ```
      */
      genderRestriction: oa.enums.GenderRestrictionType,
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
      image: s.array(oa.ImageObject),
      /**
      * Whether the Event is accessible without charge.
      *
      * ```json
      * "isAccessibleForFree": "true"
      * ```
      */
      isAccessibleForFree: s.boolean,
      /**
      * A boolean property that indicates whether an Event will be coached. This flag allows an Event to be marked as being coached without having to specify a named individual as a coach. This addresses both privacy concerns and also scenarios where the actual coach may only be decided on the day.
      *
      * ```json
      * "isCoached": "true"
      * ```
      */
      isCoached: s.boolean,
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
      leader: s.array(oa.Person),
      /**
      * A general purpose property for specifying the suitability of an event for different participant “levels”. E.g. `Beginner`, `Intermediate`, `Advanced`. Or in the case of martial arts, specific belt requirements.
      *
      * ```json
      * "level": [
      *   "Beginner"
      * ]
      * ```
      */
      level: s.union([s.array(s.string),s.array(oa.Concept)]),
      /**
      * The location at which the event will take place. Or, in the case of events that may span multiple locations, the initial meeting or starting point.
      * It is recommended that locations should be specified as a [Place](/models/place) complete with a fully described geographic location and/or address.
      * If only an address is available then this should be described as a [PostalAddress](/models/postaladdress).
      * Applications may use [schema:Text](https://schema.org/Text) to provide a more general description of a location ("In Victoria Park, near the lake"), but this is not recommended: consuming applications will be unable to help users discover opportunities based on their location.
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
      location: oa.Place,
      /**
      * The maximum capacity of the Event.
      *
      * ```json
      * "maximumAttendeeCapacity": 30
      * ```
      */
      maximumAttendeeCapacity: s.nonNegativeInt,
      /**
      * Indicates the maximum number of connections to a shared virtual space.
      *
      * ```json
      * "maximumVirtualAttendeeCapacity": 20
      * ```
      */
      maximumVirtualAttendeeCapacity: s.nonNegativeInt,
      /**
      * Instructions for the attendees of an Event about where they should meet the organizer or leader at the start of the event. Some larger locations may have several possible meeting points, so this property provides additional more specific directions.
      *
      * ```json
      * "meetingPoint": "At the entrance to the park"
      * ```
      */
      meetingPoint: s.string,
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
      offers: s.array(oa.Offer),
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
      organizer: s.union([oa.Person,oa.Organization]),
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
      programme: oa.Brand,
      /**
      * Provides a note from an organizer relating to how this Event is scheduled.
      *
      * ```json
      * "schedulingNote": "This event doesn't run during school holidays"
      * ```
      */
      schedulingNote: s.string,
      /**
      * The start date and time of the event. Can be specified as a schema:Date or schema:DateTime.
      *
      * ```json
      * "startDate": "2018-01-27T12:00:00Z"
      * ```
      */
      startDate: s.union([s.string,s.isoDateTimeString]),
      /**
      * The end date and time of the event. Can be specified as a schema:Date or  schema:DateTime
      * It is recommended that publishers provide either an schema:endDate or a schema:duration for an event.
      *
      * ```json
      * "endDate": "2018-01-27T12:00:00Z"
      * ```
      */
      endDate: s.union([s.string,s.isoDateTimeString]),
      /**
      * Relates a parent event to a child event. Properties describing the parent event can be assumed to apply to the child, unless otherwise specified. A child event might be a specific instance of an Event within a schedule
      */
      subEvent: s.array(oa.ScheduledSession),
      /**
      * Relates a child event to a parent event. Properties describing the parent event can be assumed to apply to the child, unless otherwise specified. A parent event might specify a recurring schedule, of which the child event is one specific instance
      */
      superEvent: oa.Event,
      /**
      * A URL to a web page (or section of a page) that describes the event.
      *
      * ```json
      * "url": "https://example.com/event/1234"
      * ```
      */
      url: s.urlString,
      /**
      * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
      * Sometimes a description is stored with formatting (e.g. href, bold, italics, embedded YouTube videos). This formatting can be useful for data consumers. This property must contain HTML.
      * 
      * If you are using this property, please join the discussion at proposal [#276](https://github.com/openactive/modelling-opportunity-data/issues/276).
      */
      formattedDescription: s.string,
      /**
      * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
      * The distance of a run, cycle or other activity. Must also include units.
      * 
      * If you are using this property, please join the discussion at proposal [#275](https://github.com/openactive/modelling-opportunity-data/issues/275).
      */
      distance: oa.QuantitativeValue,
      /**
      * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
      * For events that have an unlimited number of tickets, captures the number of attendees (actual attendance).
      * 
      * If you are using this property, please join the discussion at proposal [#274](https://github.com/openactive/modelling-opportunity-data/issues/274).
      */
      attendeeCount: s.nonNegativeInt,
      /**
      * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
      * For events that have an unlimited number of tickets, captures the number of registrations (intention to attend).
      * 
      * If you are using this property, please join the discussion at proposal [#273](https://github.com/openactive/modelling-opportunity-data/issues/273).
      */
      registrationCount: s.nonNegativeInt,
      /**
      * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
      * A property that details whether the event is suitable for wheelchair access. Placed on Event as this field could be used to detail whether the Event is suitable, as well as the Place.
      * 
      * If you are using this property, please join the discussion at proposal [#166](https://github.com/openactive/modelling-opportunity-data/issues/166).
      */
      isWheelchairAccessible: s.boolean,
      /**
      * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
      * A property that allows an Event duration to be represented as a range (e.g. 0-30mins, 30-60mins, 60-90mins, 90+).
      * 
      * If you are using this property, please join the discussion at proposal [#201](https://github.com/openactive/modelling-opportunity-data/issues/201).
      */
      estimatedDuration: oa.QuantitativeValue,
      /**
      * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
      * A related video object.
      * 
      * If you are using this property, please join the discussion at proposal [#88](https://github.com/openactive/modelling-opportunity-data/issues/88).
      */
      video: s.array(oa.VideoObject),
      /**
      * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
      * Internal location of the event, e.g. Court 1
      * 
      * If you are using this property, please join the discussion at proposal [#110](https://github.com/openactive/modelling-opportunity-data/issues/110).
      */
      sportsActivityLocation: s.array(schema.SportsActivityLocation),
      /**
      * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
      * Duration before the event for which the associated Offers are valid
      * 
      * If you are using this property, please join the discussion at proposal [#204](https://github.com/openactive/modelling-opportunity-data/issues/204).
      */
      offerValidityPeriod: s.string,
      /**
      * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
      * Whether the event or facility is indoor or outdoor.
      * 
      * If you are using this property, please join the discussion at proposal [#1](https://github.com/openactive/facility-types/issues/1).
      */
      facilitySetting: oa.enums.FacilitySettingType,
      /**
      * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
      * A property that indicates whether the event is led by a virtual coach. Only relevant if an event `isCoached`. If not provided is assumed to be `false`.
      * 
      * If you are using this property, please join the discussion at proposal [#71](https://github.com/openactive/modelling-opportunity-data/issues/71).
      */
      isVirtuallyCoached: s.boolean,
      /**
      * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
      * Describes a means of electronic access to a shared virtual space.
      * 
      * If you are using this property, please join the discussion at proposal [#224](https://github.com/openactive/modelling-opportunity-data/issues/224).
      */
      virtualLocation: oa.VirtualLocation,
      /**
      * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
      * The physical location affiliated with the virtual event, for example the original location of the event before it was moved online.
      * 
      * If you are using this property, please join the discussion at proposal [#227](https://github.com/openactive/modelling-opportunity-data/issues/227).
      */
      affiliatedLocation: oa.Place,
      /**
      * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
      * Indicates whether the virtual event is interactive (e.g. Zoom with participant microphones and cameras on), or is just a one-way broadcast (e.g. Facebook Live, Instagram Live, Zoom with participant microphones and cameras off).
      * 
      * If you are using this property, please join the discussion at proposal [#230](https://github.com/openactive/modelling-opportunity-data/issues/230).
      */
      isInteractivityPreferred: s.boolean,
      /**
      * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
      * Indicates whether the participant must or may supply equipment for use in the Event.
      * 
      * If you are using this property, please join the discussion at proposal [#229](https://github.com/openactive/modelling-opportunity-data/issues/229).
      */
      participantSuppliedEquipment: schema.enums.RequiredStatusType,
      /**
      * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
      * The URL of the webpage where the activity provider accepts donations.
      * 
      * If you are using this property, please join the discussion at proposal [#234](https://github.com/openactive/modelling-opportunity-data/issues/234).
      */
      donationPaymentUrl: s.urlString,
      /**
      * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
      * A property that indicates whether the first session is free.
      * 
      * If you are using this property, please join the discussion at proposal [#232](https://github.com/openactive/modelling-opportunity-data/issues/232).
      */
      isFirstSessionAccessibleForFree: s.boolean,
      /**
      * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
      * Contact details for an Event, where they are not specifically related to the `organizer` or `leader`.
      * 
      * If you are using this property, please join the discussion at proposal [#113](https://github.com/openactive/modelling-opportunity-data/issues/113).
      */
      contactPoint: schema.ContactPoint,
      /**
      * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
      * The channels through which a booking can be made.
      * 
      * If you are using this property, please join the discussion at proposal [#161](https://github.com/openactive/modelling-opportunity-data/issues/161).
      */
      bookingChannel: s.array(oa.enums.BookingChannelType),
      /**
      * [NOTICE: This property is part of the Open Booking API Test Interface, and MUST NOT be used in production.]
      * The opportunity criteria which the Event conforms to.
      */
      testOpportunityCriteria: oa.enums.TestOpportunityCriteriaEnumeration,
  })
])

module.exports = {
  SessionSeries,
};