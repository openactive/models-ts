import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';
/**
 * Place
 *
 * This type is derived from https://schema.org/Place, which means that any of this type's properties within schema.org may also be used.
 */
export declare type Place = {
    '@type': 'Place';
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
     * The name of the Place
     *
     * ```json
     * "name": "Raynes Park High School"
     * ```
     */
    name?: string;
    /**
     * A plain text description of the Place, which must not include HTML or other markup.
     *
     * ```json
     * "description": "Raynes Park High School in London"
     * ```
     */
    description?: string;
    /**
     * A unique url based identifier for the record
     *
     * ```json
     * "@id": "https://example.com/place/12345"
     * ```
     */
    '@id'?: string;
    /**
     * A structured PostalAddress object for the Place.
     * Ideally the address should be provided using the PostalAddress structured format. Google Reserve requires https://schema.org/PostalAddress and will not accept plain text addresses.
     *
     * ```json
     * "address": {
     *   "@type": "PostalAddress",
     *   "streetAddress": "Raynes Park High School, 46A West Barnes Lane",
     *   "addressLocality": "New Malden",
     *   "addressRegion": "London",
     *   "postalCode": "NW5 3DU",
     *   "addressCountry": "GB"
     * }
     * ```
     */
    address?: string | oa.PostalAddressOrSubClass;
    /**
     * An array listing the Ammenities of the Place.
     *
     * ```json
     * "amenityFeature": [
     *   {
     *     "name": "Changing Facilities",
     *     "value": true,
     *     "@type": "ChangingFacilities"
     *   },
     *   {
     *     "name": "Showers",
     *     "value": false,
     *     "@type": "Showers"
     *   },
     *   {
     *     "name": "Lockers",
     *     "value": true,
     *     "@type": "Lockers"
     *   },
     *   {
     *     "name": "Towels",
     *     "value": false,
     *     "@type": "Towels"
     *   },
     *   {
     *     "name": "Creche",
     *     "value": false,
     *     "@type": "Creche"
     *   },
     *   {
     *     "name": "Parking",
     *     "value": true,
     *     "@type": "Parking"
     *   }
     * ]
     * ```
     */
    amenityFeature?: oa.LocationFeatureSpecificationOrSubClass[];
    /**
     * The place within which this Place exists
     *
     * ```json
     * "containedInPlace": {
     *   "@type": "Place",
     *   "url": "https://www.everyoneactive.com/centres/Middlesbrough-Sports-Village",
     *   "name": "Middlesbrough Sports Village"
     * }
     * ```
     */
    containedInPlace?: oa.PlaceOrSubClass;
    /**
     * Places that exist within this place
     *
     * ```json
     * "containsPlace": {
     *   "@type": "Place",
     *   "url": "https://www.everyoneactive.com/centres/Center-Parcs-Sports-Plaza",
     *   "name": "Center Parcs Sports Plaza"
     * }
     * ```
     */
    containsPlace?: oa.PlaceOrSubClass[];
    /**
     * The geo coordinates of the Place.
     *
     * ```json
     * "geo": {
     *   "latitude": 51.4034423828125,
     *   "longitude": -0.2369088977575302,
     *   "@type": "GeoCoordinates"
     * }
     * ```
     */
    geo?: oa.GeoCoordinatesOrSubClass;
    /**
     * An image or photo that depicts the place, e.g. a photo taken at a previous event.
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
    image?: oa.ImageObjectOrSubClass[];
    /**
     * The times the Place is open
     */
    openingHoursSpecification?: oa.OpeningHoursSpecificationOrSubClass[];
    /**
     * Explicitly override general opening hours brought in scope by `schema:openingHoursSpecification`.
     */
    specialOpeningHoursSpecification?: oa.OpeningHoursSpecificationOrSubClass[];
    /**
     * The telephone number for the Place
     *
     * ```json
     * "telephone": "01253 473934"
     * ```
     */
    telephone?: string;
    /**
     * The website for the Place
     *
     * ```json
     * "url": "http://www.rphs.org.uk/"
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
     * The overall rating, based on a collection of reviews or ratings, of the item.
     */
    aggregateRating?: schema.AggregateRatingOrSubClass | string;
    /**
     * Represents spatial relations in which two geometries (or the places they represent) have at least one point in common. As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
     */
    geoIntersects?: schema.GeospatialGeometryOrSubClass | schema.PlaceOrSubClass | string;
    /**
     * Photographs of this place.
     */
    photos?: schema.PhotographOrSubClass | schema.ImageObjectOrSubClass | string;
    /**
     * A page providing information on how to book a tour of some [[Place]], such as an [[Accommodation]] or [[ApartmentComplex]] in a real estate setting, as well as other kinds of tours as appropriate.
     */
    tourBookingPage?: string;
    /**
     * The longitude of a location. For example ```-122.08585``` ([WGS 84](https://en.wikipedia.org/wiki/World_Geodetic_System)).
     */
    longitude?: string | number;
    /**
     * The [Global Location Number](http://www.gs1.org/gln) (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations.
     */
    globalLocationNumber?: string;
    /**
     * Represents a relationship between two geometries (or the places they represent), relating a geometry to another that covers it. As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
     */
    geoCoveredBy?: schema.GeospatialGeometryOrSubClass | schema.PlaceOrSubClass | string;
    /**
     * Represents a relationship between two geometries (or the places they represent), relating a geometry to another that geospatially overlaps it, i.e. they have some but not all points in common. As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
     */
    geoOverlaps?: schema.PlaceOrSubClass | schema.GeospatialGeometryOrSubClass | string;
    /**
     * A photograph of this place.
     */
    photo?: schema.PhotographOrSubClass | schema.ImageObjectOrSubClass | string;
    /**
     * The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place.
     */
    isicV4?: string;
    /**
     * Review of the item.
     */
    reviews?: schema.ReviewOrSubClass | string;
    /**
     * A review of the item.
     */
    review?: schema.ReviewOrSubClass | string;
    /**
     * Upcoming or past events associated with this place or organization.
     */
    events?: schema.Event_OrSubClass | string;
    /**
     * Represents a relationship between two geometries (or the places they represent), relating a geometry to one that contains it, i.e. it is inside (i.e. within) its interior. As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
     */
    geoWithin?: schema.PlaceOrSubClass | schema.GeospatialGeometryOrSubClass | string;
    /**
     * Indicates whether some facility (e.g. [[FoodEstablishment]], [[CovidTestingFacility]]) offers a service that can be used by driving through in a car. In the case of [[CovidTestingFacility]] such facilities could potentially help with social distancing from other potentially-infected users.
     */
    hasDriveThroughService?: boolean;
    /**
     * The basic containment relation between a place and one that contains it.
     */
    containedIn?: schema.PlaceOrSubClass | string;
    /**
     * Represents a relationship between two geometries (or the places they represent), relating a covering geometry to a covered geometry. "Every point of b is a point of (the interior or boundary of) a". As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
     */
    geoCovers?: schema.GeospatialGeometryOrSubClass | schema.PlaceOrSubClass | string;
    /**
     * A URL to a map of the place.
     */
    map?: string;
    /**
     * Upcoming or past event associated with this place, organization, or action.
     */
    event?: schema.Event_OrSubClass | string;
    /**
     * A property-value pair representing an additional characteristics of the entitity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.\n\nNote: Publishers should be aware that applications designed to use specific schema.org properties (e.g. https://schema.org/width, https://schema.org/color, https://schema.org/gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.
     *
     */
    additionalProperty?: schema.PropertyValueOrSubClass | string;
    /**
     * An associated logo.
     */
    logo?: schema.ImageObjectOrSubClass | string;
    /**
     * A flag to signal that the item, event, or place is accessible for free.
     */
    isAccessibleForFree?: boolean;
    /**
     * The total number of individuals that may attend an event or venue.
     */
    maximumAttendeeCapacity?: number;
    /**
     * A slogan or motto associated with the item.
     */
    slogan?: string;
    /**
     * A URL to a map of the place.
     */
    maps?: string;
    /**
     * A URL to a map of the place.
     */
    hasMap?: string | schema.MapOrSubClass;
    /**
     * Represents spatial relations in which two geometries (or the places they represent) are topologically equal, as defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM). "Two geometries are topologically equal if their interiors intersect and no part of the interior or boundary of one geometry intersects the exterior of the other" (a symmetric relationship)
     */
    geoEquals?: schema.PlaceOrSubClass | schema.GeospatialGeometryOrSubClass | string;
    /**
     * Represents spatial relations in which two geometries (or the places they represent) are topologically disjoint: they have no point in common. They form a set of disconnected geometries." (a symmetric relationship, as defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM))
     */
    geoDisjoint?: schema.PlaceOrSubClass | schema.GeospatialGeometryOrSubClass | string;
    /**
     * The latitude of a location. For example ```37.42242``` ([WGS 84](https://en.wikipedia.org/wiki/World_Geodetic_System)).
     */
    latitude?: string | number;
    /**
     * Indicates whether it is allowed to smoke in the place, e.g. in the restaurant, hotel or hotel room.
     */
    smokingAllowed?: boolean;
    /**
     * The fax number.
     */
    faxNumber?: string;
    /**
     * A short textual code (also called "store code") that uniquely identifies a place of business. The code is typically assigned by the parentOrganization and used in structured URLs.\n\nFor example, in the URL http://www.starbucks.co.uk/store-locator/etc/detail/3047 the code "3047" is a branchCode for a particular branch.
     *
     */
    branchCode?: string;
    /**
     * Represents spatial relations in which two geometries (or the places they represent) touch: they have at least one boundary point in common, but no interior points." (a symmetric relationship, as defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM) )
     */
    geoTouches?: schema.PlaceOrSubClass | schema.GeospatialGeometryOrSubClass | string;
    /**
     * Represents a relationship between two geometries (or the places they represent), relating a geometry to another that crosses it: "a crosses b: they have some but not all interior points in common, and the dimension of the intersection is less than that of at least one of them". As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
     */
    geoCrosses?: schema.GeospatialGeometryOrSubClass | schema.PlaceOrSubClass | string;
    /**
     * Represents a relationship between two geometries (or the places they represent), relating a containing geometry to a contained geometry. "a contains b iff no points of b lie in the exterior of a, and at least one point of the interior of b lies in the interior of a". As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
     */
    geoContains?: schema.GeospatialGeometryOrSubClass | schema.PlaceOrSubClass | string;
    /**
     * A flag to signal that the [[Place]] is open to public visitors.  If this property is omitted there is no assumed default boolean value
     */
    publicAccess?: boolean;
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
 * Place
 *
 * This type is derived from https://schema.org/Place, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from Place because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type PlaceOrSubClass = Place;
/**
 * Place - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/Place, which means that any of this type's properties within schema.org may also be used.
 */
export declare const PlaceJoiSchema: Joi.ObjectSchema;
/**
 * Place - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/Place, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from PlaceJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const PlaceOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for Place.
 *
 * If some data has a structure which matches a Place, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybePlace = Place.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybePlace instanceof OaValidationError) {
 *   // From this point on, `maybePlace` will have type `OaValidationError`
 *   const error = maybePlace;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybePlace` will have type `Place`
 * const place = maybePlace;
 * ```
 */
export declare function validatePlace(maybePlace: unknown): Place | OaValidationError;
