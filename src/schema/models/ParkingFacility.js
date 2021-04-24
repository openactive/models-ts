
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const ParkingFacility = s.intersection([
  s.type({'@type': s.literal('ParkingFacility')}),
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
      * The general opening hours for a business. Opening hours can be specified as a weekly time range, starting with days, then times per day. Multiple days can be listed with commas ',' separating each day. Day or time ranges are specified using a hyphen '-'.\n\n* Days are specified using the following two-letter combinations: ```Mo```, ```Tu```, ```We```, ```Th```, ```Fr```, ```Sa```, ```Su```.\n* Times are specified using 24:00 format. For example, 3pm is specified as ```15:00```, 10am as ```10:00```. \n* Here is an example: <code>&lt;time itemprop="openingHours" datetime=&quot;Tu,Th 16:00-20:00&quot;&gt;Tuesdays and Thursdays 4-8pm&lt;/time&gt;</code>.\n* If a business is open 7 days a week, then it can be specified as <code>&lt;time itemprop=&quot;openingHours&quot; datetime=&quot;Mo-Su&quot;&gt;Monday through Sunday, all day&lt;/time&gt;</code>.
      */
      openingHours: s.string,
      /**
      * The overall rating, based on a collection of reviews or ratings, of the item.
      */
      aggregateRating: schema.AggregateRating,
      /**
      * Represents spatial relations in which two geometries (or the places they represent) have at least one point in common. As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
      */
      geoIntersects: s.union([schema.GeospatialGeometry,schema.Place]),
      /**
      * Photographs of this place.
      */
      photos: s.union([schema.Photograph,schema.ImageObject]),
      /**
      * Physical address of the item.
      */
      address: s.union([s.string,schema.PostalAddress]),
      /**
      * A page providing information on how to book a tour of some [[Place]], such as an [[Accommodation]] or [[ApartmentComplex]] in a real estate setting, as well as other kinds of tours as appropriate.
      */
      tourBookingPage: s.urlString,
      /**
      * The longitude of a location. For example ```-122.08585``` ([WGS 84](https://en.wikipedia.org/wiki/World_Geodetic_System)).
      */
      longitude: s.union([s.string,s.nonNegativeFloat]),
      /**
      * The geo coordinates of the place.
      */
      geo: s.union([schema.GeoCoordinates,schema.GeoShape]),
      /**
      * The [Global Location Number](http://www.gs1.org/gln) (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations.
      */
      globalLocationNumber: s.string,
      /**
      * Represents a relationship between two geometries (or the places they represent), relating a geometry to another that covers it. As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
      */
      geoCoveredBy: s.union([schema.GeospatialGeometry,schema.Place]),
      /**
      * The basic containment relation between a place and one that contains it.
      */
      containedInPlace: schema.Place,
      /**
      * The special opening hours of a certain place.\n\nUse this to explicitly override general opening hours brought in scope by [[openingHoursSpecification]] or [[openingHours]].
      *       
      */
      specialOpeningHoursSpecification: schema.OpeningHoursSpecification,
      /**
      * Represents a relationship between two geometries (or the places they represent), relating a geometry to another that geospatially overlaps it, i.e. they have some but not all points in common. As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
      */
      geoOverlaps: s.union([schema.Place,schema.GeospatialGeometry]),
      /**
      * A photograph of this place.
      */
      photo: s.union([schema.Photograph,schema.ImageObject]),
      /**
      * The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place.
      */
      isicV4: s.string,
      /**
      * Review of the item.
      */
      reviews: schema.Review,
      /**
      * A review of the item.
      */
      review: schema.Review,
      /**
      * Upcoming or past events associated with this place or organization.
      */
      events: schema.Event,
      /**
      * The opening hours of a certain place.
      */
      openingHoursSpecification: schema.OpeningHoursSpecification,
      /**
      * Represents a relationship between two geometries (or the places they represent), relating a geometry to one that contains it, i.e. it is inside (i.e. within) its interior. As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
      */
      geoWithin: s.union([schema.Place,schema.GeospatialGeometry]),
      /**
      * Indicates whether some facility (e.g. [[FoodEstablishment]], [[CovidTestingFacility]]) offers a service that can be used by driving through in a car. In the case of [[CovidTestingFacility]] such facilities could potentially help with social distancing from other potentially-infected users.
      */
      hasDriveThroughService: s.boolean,
      /**
      * The basic containment relation between a place and one that contains it.
      */
      containedIn: schema.Place,
      /**
      * Represents a relationship between two geometries (or the places they represent), relating a covering geometry to a covered geometry. "Every point of b is a point of (the interior or boundary of) a". As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
      */
      geoCovers: s.union([schema.GeospatialGeometry,schema.Place]),
      /**
      * A URL to a map of the place.
      */
      map: s.urlString,
      /**
      * An amenity feature (e.g. a characteristic or service) of the Accommodation. This generic property does not make a statement about whether the feature is included in an offer for the main accommodation or available at extra costs.
      */
      amenityFeature: schema.LocationFeatureSpecification,
      /**
      * Upcoming or past event associated with this place, organization, or action.
      */
      event: schema.Event,
      /**
      * A property-value pair representing an additional characteristics of the entitity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.\n\nNote: Publishers should be aware that applications designed to use specific schema.org properties (e.g. https://schema.org/width, https://schema.org/color, https://schema.org/gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.
      * 
      */
      additionalProperty: schema.PropertyValue,
      /**
      * The telephone number.
      */
      telephone: s.string,
      /**
      * An associated logo.
      */
      logo: s.union([schema.ImageObject,s.urlString]),
      /**
      * A flag to signal that the item, event, or place is accessible for free.
      */
      isAccessibleForFree: s.boolean,
      /**
      * The total number of individuals that may attend an event or venue.
      */
      maximumAttendeeCapacity: s.nonNegativeInt,
      /**
      * A slogan or motto associated with the item.
      */
      slogan: s.string,
      /**
      * A URL to a map of the place.
      */
      maps: s.urlString,
      /**
      * A URL to a map of the place.
      */
      hasMap: s.union([s.urlString,schema.Map]),
      /**
      * Represents spatial relations in which two geometries (or the places they represent) are topologically equal, as defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM). "Two geometries are topologically equal if their interiors intersect and no part of the interior or boundary of one geometry intersects the exterior of the other" (a symmetric relationship)
      */
      geoEquals: s.union([schema.Place,schema.GeospatialGeometry]),
      /**
      * The basic containment relation between a place and another that it contains.
      */
      containsPlace: schema.Place,
      /**
      * Represents spatial relations in which two geometries (or the places they represent) are topologically disjoint: they have no point in common. They form a set of disconnected geometries." (a symmetric relationship, as defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM))
      */
      geoDisjoint: s.union([schema.Place,schema.GeospatialGeometry]),
      /**
      * The latitude of a location. For example ```37.42242``` ([WGS 84](https://en.wikipedia.org/wiki/World_Geodetic_System)).
      */
      latitude: s.union([s.string,s.nonNegativeFloat]),
      /**
      * Indicates whether it is allowed to smoke in the place, e.g. in the restaurant, hotel or hotel room.
      */
      smokingAllowed: s.boolean,
      /**
      * The fax number.
      */
      faxNumber: s.string,
      /**
      * A short textual code (also called "store code") that uniquely identifies a place of business. The code is typically assigned by the parentOrganization and used in structured URLs.\n\nFor example, in the URL http://www.starbucks.co.uk/store-locator/etc/detail/3047 the code "3047" is a branchCode for a particular branch.
      *       
      */
      branchCode: s.string,
      /**
      * Represents spatial relations in which two geometries (or the places they represent) touch: they have at least one boundary point in common, but no interior points." (a symmetric relationship, as defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM) )
      */
      geoTouches: s.union([schema.Place,schema.GeospatialGeometry]),
      /**
      * Represents a relationship between two geometries (or the places they represent), relating a geometry to another that crosses it: "a crosses b: they have some but not all interior points in common, and the dimension of the intersection is less than that of at least one of them". As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
      */
      geoCrosses: s.union([schema.GeospatialGeometry,schema.Place]),
      /**
      * Represents a relationship between two geometries (or the places they represent), relating a containing geometry to a contained geometry. "a contains b iff no points of b lie in the exterior of a, and at least one point of the interior of b lies in the interior of a". As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
      */
      geoContains: s.union([schema.GeospatialGeometry,schema.Place]),
      /**
      * A flag to signal that the [[Place]] is open to public visitors.  If this property is omitted there is no assumed default boolean value
      */
      publicAccess: s.boolean,
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
  ParkingFacility,
};