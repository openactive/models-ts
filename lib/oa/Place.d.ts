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
     * A unique URI-based identifier for the record.
     * `@id` properties are used as identifiers for compatibility with JSON-LD. The value of such a property must always be an absolute URI that provides a stable globally unique identifier for the resource, as described in [RFC3986](https://tools.ietf.org/html/rfc3986).
     * The primary purpose of the URI format in this context is to provide natural namespacing for the identifier. Hence, the URI itself may not resolve to a valid endpoint, but must use a domain name controlled by the resource owner (the organisation responsible for the OpenActive open data feed).
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
     * An array listing the Amenities of the Place.
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
    containedInPlace?: oa.PlaceOrSubClass | string;
    /**
     * A specific identifiable facility (`SportsActivityLocation`) or place (`Place`) that exist within this place
     *
     * ```json
     * "containsPlace": [
     *   {
     *     "@type": "SportsActivityLocation",
     *     "@id": "https://api.example.com/places/1402CBP20150217/sports-activity-locations/3",
     *     "url": "https://www.better.org.uk/leisure-centre/manchester/belle-vue-sports-village/facilities",
     *     "name": "Studio",
     *     "description": "We have a great range of Fitness Classes at Belle Vue Leisure Centre including Group Cycle, Zumba, Pilates and much much more.",
     *     "image": [
     *       {
     *         "@type": "ImageObject",
     *         "url": "https://res-1.cloudinary.com/gll/image/upload/c_fit,f_auto,h_169,w_384/v1592158966/production/0065/7/66/PHOTO-2020-06-09-14-25-53_3.jpg"
     *       }
     *     ],
     *     "specialOpeningHoursSpecification": [
     *       {
     *         "@type": "OpeningHoursSpecification",
     *         "opens": "00:00",
     *         "closes": "00:00",
     *         "validFrom": "2022-01-01",
     *         "validThrough": "2022-12-31"
     *       }
     *     ]
     *   }
     * ]
     * ```
     */
    containsPlace?: oa.PlaceOrSubClass[];
    /**
     * General enquiries e-mail address for the Place.
     *
     * ```json
     * "email": "info@example.com"
     * ```
     */
    email?: string;
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
     * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
     * A related video object.
     *
     * If you are using this property, please join the discussion at proposal [#88](https://github.com/openactive/modelling-opportunity-data/issues/88).
     */
    'beta:video'?: oa.VideoObjectOrSubClass[];
    /**
     * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
     * A related virtual tour.
     *
     * If you are using this property, please join the discussion at proposal [#306](https://github.com/openactive/modelling-opportunity-data/issues/306).
     */
    'beta:virtualTour'?: schema.ThreeDModelOrSubClass[];
    /**
     * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
     * The organization responsible for the operation of the `Place`.
     *
     * If you are using this property, please join the discussion at proposal [#307](https://github.com/openactive/modelling-opportunity-data/issues/307).
     */
    'beta:serviceOperator'?: oa.OrganizationOrSubClass;
    /**
     * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
     * The type of Place. See https://openactive.io/place-types/.
     *
     * If you are using this property, please join the discussion at proposal [#1](https://github.com/openactive/place-types/issues/1).
     */
    'beta:placeType'?: oa.ConceptOrSubClass[];
    /**
     * A property-value pair representing an additional characteristic of the entity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.\n\nNote: Publishers should be aware that applications designed to use specific schema.org properties (e.g. https://schema.org/width, https://schema.org/color, https://schema.org/gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.
     *
     */
    additionalProperty?: schema.PropertyValueOrSubClass | string;
    /**
     * The overall rating, based on a collection of reviews or ratings, of the item.
     */
    aggregateRating?: schema.AggregateRatingOrSubClass | string;
    /**
     * A short textual code (also called "store code") that uniquely identifies a place of business. The code is typically assigned by the parentOrganization and used in structured URLs.\n\nFor example, in the URL http://www.starbucks.co.uk/store-locator/etc/detail/3047 the code "3047" is a branchCode for a particular branch.
     *
     */
    branchCode?: string;
    /**
     * The basic containment relation between a place and one that contains it.
     */
    containedIn?: schema.PlaceOrSubClass | string;
    /**
     * Upcoming or past event associated with this place, organization, or action.
     */
    event?: schema.Event_OrSubClass | string;
    /**
     * Upcoming or past events associated with this place or organization.
     */
    events?: schema.Event_OrSubClass | string;
    /**
     * The fax number.
     */
    faxNumber?: string;
    /**
     * Represents a relationship between two geometries (or the places they represent), relating a containing geometry to a contained geometry. "a contains b iff no points of b lie in the exterior of a, and at least one point of the interior of b lies in the interior of a". As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
     */
    geoContains?: schema.GeospatialGeometryOrSubClass | schema.PlaceOrSubClass | string;
    /**
     * Represents a relationship between two geometries (or the places they represent), relating a geometry to another that covers it. As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
     */
    geoCoveredBy?: schema.GeospatialGeometryOrSubClass | schema.PlaceOrSubClass | string;
    /**
     * Represents a relationship between two geometries (or the places they represent), relating a covering geometry to a covered geometry. "Every point of b is a point of (the interior or boundary of) a". As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
     */
    geoCovers?: schema.GeospatialGeometryOrSubClass | schema.PlaceOrSubClass | string;
    /**
     * Represents a relationship between two geometries (or the places they represent), relating a geometry to another that crosses it: "a crosses b: they have some but not all interior points in common, and the dimension of the intersection is less than that of at least one of them". As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
     */
    geoCrosses?: schema.GeospatialGeometryOrSubClass | schema.PlaceOrSubClass | string;
    /**
     * Represents spatial relations in which two geometries (or the places they represent) are topologically disjoint: "they have no point in common. They form a set of disconnected geometries." (A symmetric relationship, as defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).)
     */
    geoDisjoint?: schema.GeospatialGeometryOrSubClass | schema.PlaceOrSubClass | string;
    /**
     * Represents spatial relations in which two geometries (or the places they represent) are topologically equal, as defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM). "Two geometries are topologically equal if their interiors intersect and no part of the interior or boundary of one geometry intersects the exterior of the other" (a symmetric relationship).
     */
    geoEquals?: schema.GeospatialGeometryOrSubClass | schema.PlaceOrSubClass | string;
    /**
     * Represents spatial relations in which two geometries (or the places they represent) have at least one point in common. As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
     */
    geoIntersects?: schema.GeospatialGeometryOrSubClass | schema.PlaceOrSubClass | string;
    /**
     * Represents a relationship between two geometries (or the places they represent), relating a geometry to another that geospatially overlaps it, i.e. they have some but not all points in common. As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
     */
    geoOverlaps?: schema.GeospatialGeometryOrSubClass | schema.PlaceOrSubClass | string;
    /**
     * Represents spatial relations in which two geometries (or the places they represent) touch: "they have at least one boundary point in common, but no interior points." (A symmetric relationship, as defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).)
     */
    geoTouches?: schema.GeospatialGeometryOrSubClass | schema.PlaceOrSubClass | string;
    /**
     * Represents a relationship between two geometries (or the places they represent), relating a geometry to one that contains it, i.e. it is inside (i.e. within) its interior. As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
     */
    geoWithin?: schema.GeospatialGeometryOrSubClass | schema.PlaceOrSubClass | string;
    /**
     * The [Global Location Number](http://www.gs1.org/gln) (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations.
     */
    globalLocationNumber?: string;
    /**
     * Certification information about a product, organization, service, place, or person.
     */
    hasCertification?: schema.CertificationOrSubClass | string;
    /**
     * Indicates whether some facility (e.g. [[FoodEstablishment]], [[CovidTestingFacility]]) offers a service that can be used by driving through in a car. In the case of [[CovidTestingFacility]] such facilities could potentially help with social distancing from other potentially-infected users.
     */
    hasDriveThroughService?: boolean;
    /**
     * The <a href="https://www.gs1.org/standards/gs1-digital-link">GS1 digital link</a> associated with the object. This URL should conform to the particular requirements of digital links. The link should only contain the Application Identifiers (AIs) that are relevant for the entity being annotated, for instance a [[Product]] or an [[Organization]], and for the correct granularity. In particular, for products:<ul><li>A Digital Link that contains a serial number (AI <code>21</code>) should only be present on instances of [[IndividualProduct]]</li><li>A Digital Link that contains a lot number (AI <code>10</code>) should be annotated as [[SomeProducts]] if only products from that lot are sold, or [[IndividualProduct]] if there is only a specific product.</li><li>A Digital Link that contains a global model number (AI <code>8013</code>) should be attached to a [[Product]] or a [[ProductModel]].</li></ul> Other item types should be adapted similarly.
     */
    hasGS1DigitalLink?: string;
    /**
     * A URL to a map of the place.
     */
    hasMap?: schema.MapOrSubClass | string;
    /**
     * A flag to signal that the item, event, or place is accessible for free.
     */
    isAccessibleForFree?: boolean;
    /**
     * The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place.
     */
    isicV4?: string;
    /**
     * Keywords or tags used to describe some item. Multiple textual entries in a keywords list are typically delimited by commas, or by repeating the property.
     */
    keywords?: schema.DefinedTermOrSubClass | string;
    /**
     * The latitude of a location. For example ```37.42242``` ([WGS 84](https://en.wikipedia.org/wiki/World_Geodetic_System)).
     */
    latitude?: number | string;
    /**
     * An associated logo.
     */
    logo?: schema.ImageObjectOrSubClass | string;
    /**
     * The longitude of a location. For example ```-122.08585``` ([WGS 84](https://en.wikipedia.org/wiki/World_Geodetic_System)).
     */
    longitude?: number | string;
    /**
     * A URL to a map of the place.
     */
    map?: string;
    /**
     * A URL to a map of the place.
     */
    maps?: string;
    /**
     * The total number of individuals that may attend an event or venue.
     */
    maximumAttendeeCapacity?: number;
    /**
     * A photograph of this place.
     */
    photo?: schema.ImageObjectOrSubClass | schema.PhotographOrSubClass | string;
    /**
     * Photographs of this place.
     */
    photos?: schema.ImageObjectOrSubClass | schema.PhotographOrSubClass | string;
    /**
     * A flag to signal that the [[Place]] is open to public visitors.  If this property is omitted there is no assumed default boolean value.
     */
    publicAccess?: boolean;
    /**
     * A review of the item.
     */
    review?: schema.ReviewOrSubClass | string;
    /**
     * Review of the item.
     */
    reviews?: schema.ReviewOrSubClass | string;
    /**
     * A slogan or motto associated with the item.
     */
    slogan?: string;
    /**
     * Indicates whether it is allowed to smoke in the place, e.g. in the restaurant, hotel or hotel room.
     */
    smokingAllowed?: boolean;
    /**
     * A page providing information on how to book a tour of some [[Place]], such as an [[Accommodation]] or [[ApartmentComplex]] in a real estate setting, as well as other kinds of tours as appropriate.
     */
    tourBookingPage?: string;
    /**
     * An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. Typically the value is a URI-identified RDF class, and in this case corresponds to the
     *     use of rdf:type in RDF. Text values can be used sparingly, for cases where useful information can be added without their being an appropriate schema to reference. In the case of text values, the class label should follow the schema.org <a href="https://schema.org/docs/styleguide.html">style guide</a>.
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
    /**
     * Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See [background notes](/docs/datamodel.html#mainEntityBackground) for details.
     */
    mainEntityOfPage?: schema.CreativeWorkOrSubClass | string;
    /**
     * A person or organization who owns this Thing.
     */
    owner?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
    /**
     * Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role.
     */
    potentialAction?: schema.ActionOrSubClass | string;
    /**
     * URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website.
     */
    sameAs?: string;
    /**
     * A CreativeWork or Event about this Thing.
     */
    subjectOf?: schema.CreativeWorkOrSubClass | schema.Event_OrSubClass | string;
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
export declare type PlaceOrSubClass = Place | oa.SportsActivityLocationOrSubClass;
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
 * const maybePlace = validatePlace(req.body); // `req.body` will have type `any` or `unknown`
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
