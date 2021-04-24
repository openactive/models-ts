
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const UserLikes = s.intersection([
  s.type({'@type': s.literal('UserLikes')}),
  s.partial({
      /**
      * The identifier property represents any kind of identifier for any kind of [[Thing]], such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See [background notes](/docs/datamodel.html#identifierBg) for more details.
      *         
      */
      identifier: s.union([schema.PropertyValue,s.urlString,s.string]),
      /**
      * The name of the item.
      */
      name: s.string,
      /**
      * A description of the item.
      */
      description: s.string,
      /**
      * A work featured in some event, e.g. exhibited in an ExhibitionEvent.
      *        Specific subproperties are available for workPerformed (e.g. a play), or a workPresented (a Movie at a ScreeningEvent).
      */
      workFeatured: schema.CreativeWork,
      /**
      * The overall rating, based on a collection of reviews or ratings, of the item.
      */
      aggregateRating: schema.AggregateRating,
      /**
      * A work performed in some event, for example a play performed in a TheaterEvent.
      */
      workPerformed: schema.CreativeWork,
      /**
      * Associates an [[Event]] with a [[Schedule]]. There are circumstances where it is preferable to share a schedule for a series of
      *       repeating events rather than data on the individual events themselves. For example, a website or application might prefer to publish a schedule for a weekly
      *       gym class rather than provide data on every event. A schedule could be processed by applications to add forthcoming events to a calendar. An [[Event]] that
      *       is associated with a [[Schedule]] using this property should not have [[startDate]] or [[endDate]] properties. These are instead defined within the associated
      *       [[Schedule]], this avoids any ambiguity for clients using the data. The property might have repeated values to specify different schedules, e.g. for different months
      *       or seasons.
      */
      eventSchedule: schema.Schedule,
      /**
      * A person attending the event.
      */
      attendees: s.union([schema.Person,schema.Organization]),
      /**
      * A secondary contributor to the CreativeWork or Event.
      */
      contributor: s.union([schema.Organization,schema.Person]),
      /**
      * An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip.
      */
      actor: schema.Person,
      /**
      * A performer at the event&#x2014;for example, a presenter, musician, musical group or actor.
      */
      performer: s.union([schema.Organization,schema.Person]),
      /**
      * An offer to provide this item&#x2014;for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use [[businessFunction]] to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a [[Demand]]. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
      *       
      */
      offers: s.union([schema.Offer,schema.Demand]),
      /**
      * The start date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
      */
      startDate: s.union([s.isoDateTimeString,s.string]),
      /**
      * A director of e.g. tv, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip.
      */
      director: schema.Person,
      /**
      * Used in conjunction with eventStatus for rescheduled or cancelled events. This property contains the previously scheduled start date. For rescheduled events, the startDate property should be used for the newly scheduled start date. In the (rare) case of an event that has been postponed and rescheduled multiple times, this field may be repeated.
      */
      previousStartDate: s.string,
      /**
      * A review of the item.
      */
      review: schema.Review,
      /**
      * Organization or person who adapts a creative work to different languages, regional differences and technical requirements of a target market, or that translates during some event.
      */
      translator: s.union([schema.Person,schema.Organization]),
      /**
      * An organizer of an Event.
      */
      organizer: s.union([schema.Organization,schema.Person]),
      /**
      * Events that are a part of this event. For example, a conference event includes many presentations, each subEvents of the conference.
      */
      subEvents: schema.Event,
      /**
      * A person or organization that supports a thing through a pledge, promise, or financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor of an event.
      */
      sponsor: s.union([schema.Person,schema.Organization]),
      /**
      * A flag to signal that the item, event, or place is accessible for free.
      */
      isAccessibleForFree: s.boolean,
      /**
      * The total number of individuals that may attend an event or venue.
      */
      maximumAttendeeCapacity: s.nonNegativeInt,
      /**
      * An eventStatus of an event represents its status; particularly useful when an event is cancelled or rescheduled.
      */
      eventStatus: schema.enums.EventStatusType,
      /**
      * The maximum physical attendee capacity of an [[Event]] whose [[eventAttendanceMode]] is [[OfflineEventAttendanceMode]] (or the offline aspects, in the case of a [[MixedEventAttendanceMode]]). 
      */
      maximumPhysicalAttendeeCapacity: s.nonNegativeInt,
      /**
      * An Event that is part of this event. For example, a conference event includes many presentations, each of which is a subEvent of the conference.
      */
      subEvent: schema.Event,
      /**
      * The end date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
      */
      endDate: s.union([s.string,s.isoDateTimeString]),
      /**
      * A person or organization attending the event.
      */
      attendee: s.union([schema.Person,schema.Organization]),
      /**
      * The CreativeWork that captured all or part of this Event.
      */
      recordedIn: schema.CreativeWork,
      /**
      * The subject matter of the content.
      */
      about: schema.Thing,
      /**
      * The language of the content or performance or used in an action. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[availableLanguage]].
      */
      inLanguage: s.union([s.string,schema.Language]),
      /**
      * An event that this event is a part of. For example, a collection of individual music performances might each have a music festival as their superEvent.
      */
      superEvent: schema.Event,
      /**
      * The eventAttendanceMode of an event indicates whether it occurs online, offline, or a mix.
      */
      eventAttendanceMode: schema.enums.EventAttendanceModeEnumeration,
      /**
      * The person or organization who wrote a composition, or who is the composer of a work performed at some event.
      */
      composer: s.union([schema.Organization,schema.Person]),
      /**
      * The main performer or performers of the event&#x2014;for example, a presenter, musician, or actor.
      */
      performers: s.union([schema.Organization,schema.Person]),
      /**
      * The duration of the item (movie, audio recording, event, etc.) in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601).
      */
      duration: s.string,
      /**
      * The time admission will commence.
      */
      doorTime: s.union([s.isoDateTimeString,s.string]),
      /**
      * A person or organization that supports (sponsors) something through some kind of financial contribution.
      */
      funder: s.union([schema.Organization,schema.Person]),
      /**
      * The number of attendee places for an event that remain unallocated.
      */
      remainingAttendeeCapacity: s.nonNegativeInt,
      /**
      * The location of, for example, where an event is happening, where an organization is located, or where an action takes place.
      */
      location: s.union([schema.Place,s.string,schema.VirtualLocation,schema.PostalAddress]),
      /**
      * An intended audience, i.e. a group for whom something was created.
      */
      audience: schema.Audience,
      /**
      * The maximum physical attendee capacity of an [[Event]] whose [[eventAttendanceMode]] is [[OnlineEventAttendanceMode]] (or the online aspects, in the case of a [[MixedEventAttendanceMode]]). 
      */
      maximumVirtualAttendeeCapacity: s.nonNegativeInt,
      /**
      * The typical expected age range, e.g. '7-9', '11-'.
      */
      typicalAgeRange: s.string,
      /**
      * URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website.
      */
      sameAs: s.urlString,
      /**
      * A CreativeWork or Event about this Thing.
      */
      subjectOf: s.union([schema.Event,schema.CreativeWork]),
      /**
      * Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role.
      */
      potentialAction: schema.Action,
      /**
      * Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See [background notes](/docs/datamodel.html#mainEntityBackground) for details.
      */
      mainEntityOfPage: s.union([schema.CreativeWork,s.urlString]),
      /**
      * An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the 'typeof' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.
      */
      additionalType: s.urlString,
      /**
      * An alias for the item.
      */
      alternateName: s.string,
      /**
      * URL of the item.
      */
      url: s.urlString,
      /**
      * An image of the item. This can be a [[URL]] or a fully described [[ImageObject]].
      */
      image: s.union([schema.ImageObject,s.urlString]),
      /**
      * A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.
      */
      disambiguatingDescription: s.string,
  })
])

module.exports = {
  UserLikes,
};