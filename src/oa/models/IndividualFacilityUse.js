
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 * 
 * This type is derived from https://schema.org/Product, which means that any of this type's properties within schema.org may also be used.
 */
const IndividualFacilityUse = s.intersection([
  s.type({'@type': s.literal('IndividualFacilityUse')}),
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
      * The name of the facility use
      *
      * ```json
      * "name": "Speedball"
      * ```
      */
      name: s.string,
      /**
      * A plain text description of the facility use, which must not include HTML or other markup.
      *
      * ```json
      * "description": "An fast paced game that incorporates netball, handball and football."
      * ```
      */
      description: s.string,
      /**
      * A unique url based identifier for the record
      *
      * ```json
      * "@id": "https://example.com/facility-use/112345"
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
      * Specifies the physical activity or activities that will take place during a facility use.
      *
      * ```json
      * "activity": [
      *   {
      *     "@type": "Concept",
      *     "@id": "https://openactive.io/activity-list#c0360db0-a817-4bae-9167-40f89b49fc9e",
      *     "prefLabel": "Badminton",
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
      * Inverse of the oa:individualFacilityUse property. Relates an oa:IndividualFacilityUse (e.g. an opportunity to play tennis on a specific court) to a oa:FacilityUse (e.g. an opportunity to play tennis at a specific location).
      */
      aggregateFacilityUse: oa.FacilityUse,
      /**
      * Provides additional notes and instructions for users of a facility, for example more information on how to find it, what to bring, etc. The value of this property must not include HTML or other markup.
      *
      * ```json
      * "attendeeInstructions": "The tennis court is locked with a keycode, so please ensure you book online in advance to gain access."
      * ```
      */
      attendeeInstructions: s.string,
      /**
      * Provides a set of tags that help categorise and describe a facility.
      *
      * ```json
      * "category": [
      *   {
      *     "@type": "Concept",
      *     "@id": "https://example.com/reference/categories#Top%20Club%20Level",
      *     "inScheme": "https://example.com/reference/categories",
      *     "prefLabel": "Top Club Level"
      *   }
      * ]
      * ```
      */
      category: s.union([s.array(s.string),s.array(oa.Concept)]),
      /**
      * An array of slots of availability of this IndividualFacilityUse.
      *
      * ```json
      * "event": [
      *   {
      *     "@type": "Slot",
      *     "@id": "http://www.example.org/api/individual-facility-uses/432#/event/2018-03-01T10:00:00Z",
      *     "startDate": "2018-03-01T11:00:00Z",
      *     "endDate": "2018-03-01T11:30:00Z",
      *     "duration": "PT30M",
      *     "remainingUses": 0,
      *     "maximumUses": 1
      *   }
      * ]
      * ```
      */
      event: s.array(oa.Slot),
      /**
      * The times the facility use is available
      */
      hoursAvailable: s.array(oa.OpeningHoursSpecification),
      /**
      * An image or photo that depicts the facility use, e.g. a photo taken at a previous event.
      *
      * ```json
      * "image": [
      *   {
      *     "thumbnail": "http://example.com/static/image/speedball_thumbnail.jpg",
      *     "@type": "ImageObject",
      *     "url": "http://example.com/static/image/speedball_large.jpg"
      *   }
      * ]
      * ```
      */
      image: s.array(oa.ImageObject),
      /**
      * The location at which the facility use will take place.
      *
      * ```json
      * "location": {
      *   "@type": "Place",
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
      *   "@id": "https://example.com/locations/1234ABCD",
      *   "identifier": "1234ABCD",
      *   "name": "Raynes Park High School",
      *   "telephone": "01253 473934"
      * }
      * ```
      */
      location: oa.Place,
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
      * The organisation responsible for providing the facility
      *
      * ```json
      * "provider": {
      *   "@type": "Organization",
      *   "name": "Central Speedball Association",
      *   "url": "http://www.speedball-world.com"
      * }
      * ```
      */
      provider: oa.Organization,
      /**
      * A URL to a web page (or section of a page) that describes the facility use.
      *
      * ```json
      * "url": "https://example.com/facility-use/1234"
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
      * A property that details whether the event is suitable for wheelchair access. Placed on Event as this field could be used to detail whether the Event is suitable, as well as the Place.
      * 
      * If you are using this property, please join the discussion at proposal [#166](https://github.com/openactive/modelling-opportunity-data/issues/166).
      */
      isWheelchairAccessible: s.boolean,
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
      * The type of facility in use. See https://openactive.io/facility-types/.
      * 
      * If you are using this property, please join the discussion at proposal [#1](https://github.com/openactive/facility-types/issues/1).
      */
      facilityType: s.array(oa.Concept),
      /**
      * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
      * Whether the event or facility is indoor or outdoor.
      * 
      * If you are using this property, please join the discussion at proposal [#1](https://github.com/openactive/facility-types/issues/1).
      */
      facilitySetting: oa.enums.FacilitySettingType,
      /**
      * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
      * The channels through which a booking can be made.
      * 
      * If you are using this property, please join the discussion at proposal [#161](https://github.com/openactive/modelling-opportunity-data/issues/161).
      */
      bookingChannel: s.array(oa.enums.BookingChannelType),
  })
])

module.exports = {
  IndividualFacilityUse,
};