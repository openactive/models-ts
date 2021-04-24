
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 * 
 * This type is derived from https://schema.org/Event, which means that any of this type's properties within schema.org may also be used.
 */
const Slot = s.intersection([
  s.type({'@type': s.literal('Slot')}),
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
      * A unique url based identifier for the record
      *
      * ```json
      * "@id": "https://example.com/slot/12345"
      * ```
      */
      '@id': s.urlString,
      /**
      * The duration of the slot given in [ISO8601] format.
      *
      * ```json
      * "duration": "PT1H"
      * ```
      */
      duration: s.string,
      /**
      * `FacilityUse` or `IndividualFacilityUse` that has this `Slot`, either directly embedded or referenced by its `@id`
      *
      * ```json
      * "facilityUse": "https://example.com/facility-use/1"
      * ```
      */
      facilityUse: s.union([oa.FacilityUse,s.urlString]),
      /**
      * The maximum available courts or pitches at this time. Must be 0 or 1 for an IndividualFacilityUse.
      *
      * ```json
      * "maximumUses": 16
      * ```
      */
      maximumUses: s.nonNegativeInt,
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
      * The remaining available courts or pitches at this time. Must be 0 or 1 for an IndividualFacilityUse.
      *
      * ```json
      * "remainingUses": 5
      * ```
      */
      remainingUses: s.nonNegativeInt,
      /**
      * The start date and time of the slot.
      *
      * ```json
      * "startDate": "2018-01-27T12:00:00Z"
      * ```
      */
      startDate: s.isoDateTimeString,
      /**
      * The end date and time of the slot.
      * It is recommended that publishers provide either an schema:endDate or a schema:duration for an slot.
      *
      * ```json
      * "endDate": "2018-01-27T12:00:00Z"
      * ```
      */
      endDate: s.isoDateTimeString,
      /**
      * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
      * Internal location of the event, e.g. Court 1
      * 
      * If you are using this property, please join the discussion at proposal [#110](https://github.com/openactive/modelling-opportunity-data/issues/110).
      */
      sportsActivityLocation: s.array(schema.SportsActivityLocation),
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
  Slot,
};