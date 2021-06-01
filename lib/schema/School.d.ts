import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as schema from '../schema';
/**
 * schema:School
 */
export declare type School = {
    '@type': 'School';
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
     * Alumni of an organization.
     */
    alumni?: schema.PersonOrSubClass | string;
    /**
     * The overall rating, based on a collection of reviews or ratings, of the item.
     */
    aggregateRating?: schema.AggregateRatingOrSubClass | string;
    /**
     * For an [[Organization]] (often but not necessarily a [[NewsMediaOrganization]]), a report on staffing diversity issues. In a news context this might be for example ASNE or RTDNA (US) reports, or self-reported.
     */
    diversityStaffingReport?: schema.ArticleOrSubClass | string;
    /**
     * The number of employees in an organization e.g. business.
     */
    numberOfEmployees?: schema.QuantitativeValueOrSubClass | string;
    /**
     * People working for this organization.
     */
    employees?: schema.PersonOrSubClass | string;
    /**
     * Physical address of the item.
     */
    address?: string | schema.PostalAddressOrSubClass;
    /**
     * For an [[Organization]] (e.g. [[NewsMediaOrganization]]), a statement describing (in news media, the newsroom’s) disclosure and correction policy for errors.
     */
    correctionsPolicy?: string | schema.CreativeWorkOrSubClass;
    /**
     * For an [[Organization]] (often but not necessarily a [[NewsMediaOrganization]]), a description of organizational ownership structure; funding and grants. In a news/media setting, this is with particular reference to editorial independence.   Note that the [[funder]] is also available and can be used to make basic funder information machine-readable.
     */
    ownershipFundingInfo?: string | schema.CreativeWorkOrSubClass | schema.AboutPageOrSubClass;
    /**
     * The [Global Location Number](http://www.gs1.org/gln) (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations.
     */
    globalLocationNumber?: string;
    /**
     * Of a [[Person]], and less typically of an [[Organization]], to indicate a topic that is known about - suggesting possible expertise but not implying it. We do not distinguish skill levels here, or relate this to educational content, events, objectives or [[JobPosting]] descriptions.
     */
    knowsAbout?: string | schema.ThingOrSubClass;
    /**
     * A contact point for a person or organization.
     */
    contactPoint?: schema.ContactPointOrSubClass | string;
    /**
     * Of a [[Person]], and less typically of an [[Organization]], to indicate a known language. We do not distinguish skill levels or reading/writing/speaking/signing here. Use language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47).
     */
    knowsLanguage?: string | schema.LanguageOrSubClass;
    /**
     * An organization identifier that uniquely identifies a legal entity as defined in ISO 17442.
     */
    leiCode?: string;
    /**
     * A person who founded this organization.
     */
    founder?: schema.PersonOrSubClass | string;
    /**
     * A relationship between an organization and a department of that organization, also described as an organization (allowing different urls, logos, opening hours). For example: a store with a pharmacy, or a bakery with a cafe.
     */
    department?: schema.OrganizationOrSubClass | string;
    /**
     * A member of this organization.
     */
    members?: schema.PersonOrSubClass | schema.OrganizationOrSubClass | string;
    /**
     * Someone working for this organization.
     */
    employee?: schema.PersonOrSubClass | string;
    /**
     * A relationship between two organizations where the first includes the second, e.g., as a subsidiary. See also: the more specific 'department' property.
     */
    subOrganization?: schema.OrganizationOrSubClass | string;
    /**
     * The Value-added Tax ID of the organization or person.
     */
    vatID?: string;
    /**
     * nonprofit Status indicates the legal status of a non-profit organization in its primary place of business.
     */
    nonprofitStatus?: schema.NonprofitType;
    /**
     * The Dun & Bradstreet DUNS number for identifying an organization or business person.
     */
    duns?: string;
    /**
     * Indicates a MerchantReturnPolicy that may be applicable.
     */
    hasMerchantReturnPolicy?: schema.MerchantReturnPolicyOrSubClass | string;
    /**
     * A contact point for a person or organization.
     */
    contactPoints?: schema.ContactPointOrSubClass | string;
    /**
     * For an [[Organization]] (typically a [[NewsMediaOrganization]]), a statement about policy on use of unnamed sources and the decision process required.
     */
    unnamedSourcesPolicy?: schema.CreativeWorkOrSubClass | string;
    /**
     * A person who founded this organization.
     */
    founders?: schema.PersonOrSubClass | string;
    /**
     * A pointer to products or services offered by the organization or person.
     */
    makesOffer?: schema.OfferOrSubClass | string;
    /**
     * The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place.
     */
    isicV4?: string;
    /**
     * Review of the item.
     */
    reviews?: schema.ReviewOrSubClass | string;
    /**
     * An award won by or for this item.
     */
    award?: string;
    /**
     * A review of the item.
     */
    review?: schema.ReviewOrSubClass | string;
    /**
     * Upcoming or past events associated with this place or organization.
     */
    events?: schema.Event_OrSubClass | string;
    /**
     * The geographic area where a service or offered item is provided.
     */
    areaServed?: string | schema.PlaceOrSubClass | schema.AdministrativeAreaOrSubClass | schema.GeoShapeOrSubClass;
    /**
     * The date that this organization was dissolved.
     */
    dissolutionDate?: string;
    /**
     * A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals.
     */
    member?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
    /**
     * A pointer to products or services sought by the organization or person (demand).
     */
    seeks?: schema.DemandOrSubClass | string;
    /**
     * Indicates an OfferCatalog listing for this Organization, Person, or Service.
     */
    hasOfferCatalog?: schema.OfferCatalogOrSubClass | string;
    /**
     * Upcoming or past event associated with this place, organization, or action.
     */
    event?: schema.Event_OrSubClass | string;
    /**
     * Email address.
     */
    email?: string;
    /**
     * The official name of the organization, e.g. the registered company name.
     */
    legalName?: string;
    /**
     * A person or organization that supports a thing through a pledge, promise, or financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor of an event.
     */
    sponsor?: schema.PersonOrSubClass | schema.OrganizationOrSubClass | string;
    /**
     * The telephone number.
     */
    telephone?: string;
    /**
     * The date that this organization was founded.
     */
    foundingDate?: string;
    /**
     * An associated logo.
     */
    logo?: schema.ImageObjectOrSubClass | string;
    /**
     * The larger organization that this organization is a [[subOrganization]] of, if any.
     */
    parentOrganization?: schema.OrganizationOrSubClass | string;
    /**
     * Statement about ethics policy, e.g. of a [[NewsMediaOrganization]] regarding journalistic and publishing practices, or of a [[Restaurant]], a page describing food source policies. In the case of a [[NewsMediaOrganization]], an ethicsPolicy is typically a statement describing the personal, organizational, and corporate standards of behavior expected by the organization.
     */
    ethicsPolicy?: string | schema.CreativeWorkOrSubClass;
    /**
     * A slogan or motto associated with the item.
     */
    slogan?: string;
    /**
     * Products owned by the organization or person.
     */
    owns?: schema.OwnershipInfoOrSubClass | schema.ProductOrSubClass | string;
    /**
     * The number of interactions for the CreativeWork using the WebSite or SoftwareApplication. The most specific child type of InteractionCounter should be used.
     */
    interactionStatistic?: schema.InteractionCounterOrSubClass | string;
    /**
     * The geographic area where the service is provided.
     */
    serviceArea?: schema.PlaceOrSubClass | schema.AdministrativeAreaOrSubClass | schema.GeoShapeOrSubClass | string;
    /**
     * For a [[NewsMediaOrganization]] or other news-related [[Organization]], a statement about public engagement activities (for news media, the newsroom’s), including involving the public - digitally or otherwise -- in coverage decisions, reporting and activities after publication.
     */
    actionableFeedbackPolicy?: schema.CreativeWorkOrSubClass | string;
    /**
     * The fax number.
     */
    faxNumber?: string;
    /**
     * An Organization (or ProgramMembership) to which this Person or Organization belongs.
     */
    memberOf?: schema.ProgramMembershipOrSubClass | schema.OrganizationOrSubClass | string;
    /**
     * A credential awarded to the Person or Organization.
     */
    hasCredential?: schema.EducationalOccupationalCredentialOrSubClass | string;
    /**
     * The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person.
     */
    brand?: schema.BrandOrSubClass | schema.OrganizationOrSubClass | string;
    /**
     * Statement on diversity policy by an [[Organization]] e.g. a [[NewsMediaOrganization]]. For a [[NewsMediaOrganization]], a statement describing the newsroom’s diversity policy on both staffing and sources, typically providing staffing data.
     */
    diversityPolicy?: schema.CreativeWorkOrSubClass | string;
    /**
     * The Tax / Fiscal ID of the organization or person, e.g. the TIN in the US or the CIF/NIF in Spain.
     */
    taxID?: string;
    /**
     * The North American Industry Classification System (NAICS) code for a particular organization or business person.
     */
    naics?: string;
    /**
     * A person or organization that supports (sponsors) something through some kind of financial contribution.
     */
    funder?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
    /**
     * The publishingPrinciples property indicates (typically via [[URL]]) a document describing the editorial principles of an [[Organization]] (or individual e.g. a [[Person]] writing a blog) that relate to their activities as a publisher, e.g. ethics or diversity policies. When applied to a [[CreativeWork]] (e.g. [[NewsArticle]]) the principles are those of the party primarily responsible for the creation of the [[CreativeWork]].
     *
     * While such policies are most typically expressed in natural language, sometimes related information (e.g. indicating a [[funder]]) can be expressed using schema.org terminology.
     *
     */
    publishingPrinciples?: string | schema.CreativeWorkOrSubClass;
    /**
     * Awards won by or for this item.
     */
    awards?: string;
    /**
     * The location of, for example, where an event is happening, where an organization is located, or where an action takes place.
     */
    location?: schema.PlaceOrSubClass | string | schema.VirtualLocationOrSubClass | schema.PostalAddressOrSubClass;
    /**
     * Points-of-Sales operated by the organization or person.
     */
    hasPOS?: schema.PlaceOrSubClass | string;
    /**
     * The place where the Organization was founded.
     */
    foundingLocation?: schema.PlaceOrSubClass | string;
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
    /**
     * The general opening hours for a business. Opening hours can be specified as a weekly time range, starting with days, then times per day. Multiple days can be listed with commas ',' separating each day. Day or time ranges are specified using a hyphen '-'.\n\n* Days are specified using the following two-letter combinations: ```Mo```, ```Tu```, ```We```, ```Th```, ```Fr```, ```Sa```, ```Su```.\n* Times are specified using 24:00 format. For example, 3pm is specified as ```15:00```, 10am as ```10:00```. \n* Here is an example: <code>&lt;time itemprop="openingHours" datetime=&quot;Tu,Th 16:00-20:00&quot;&gt;Tuesdays and Thursdays 4-8pm&lt;/time&gt;</code>.\n* If a business is open 7 days a week, then it can be specified as <code>&lt;time itemprop=&quot;openingHours&quot; datetime=&quot;Mo-Su&quot;&gt;Monday through Sunday, all day&lt;/time&gt;</code>.
     */
    openingHours?: string;
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
     * The geo coordinates of the place.
     */
    geo?: schema.GeoCoordinatesOrSubClass | schema.GeoShapeOrSubClass | string;
    /**
     * Represents a relationship between two geometries (or the places they represent), relating a geometry to another that covers it. As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
     */
    geoCoveredBy?: schema.GeospatialGeometryOrSubClass | schema.PlaceOrSubClass | string;
    /**
     * The basic containment relation between a place and one that contains it.
     */
    containedInPlace?: schema.PlaceOrSubClass | string;
    /**
     * The special opening hours of a certain place.\n\nUse this to explicitly override general opening hours brought in scope by [[openingHoursSpecification]] or [[openingHours]].
     *
     */
    specialOpeningHoursSpecification?: schema.OpeningHoursSpecificationOrSubClass | string;
    /**
     * Represents a relationship between two geometries (or the places they represent), relating a geometry to another that geospatially overlaps it, i.e. they have some but not all points in common. As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
     */
    geoOverlaps?: schema.PlaceOrSubClass | schema.GeospatialGeometryOrSubClass | string;
    /**
     * A photograph of this place.
     */
    photo?: schema.PhotographOrSubClass | schema.ImageObjectOrSubClass | string;
    /**
     * The opening hours of a certain place.
     */
    openingHoursSpecification?: schema.OpeningHoursSpecificationOrSubClass | string;
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
     * An amenity feature (e.g. a characteristic or service) of the Accommodation. This generic property does not make a statement about whether the feature is included in an offer for the main accommodation or available at extra costs.
     */
    amenityFeature?: schema.LocationFeatureSpecificationOrSubClass | string;
    /**
     * A property-value pair representing an additional characteristics of the entitity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.\n\nNote: Publishers should be aware that applications designed to use specific schema.org properties (e.g. https://schema.org/width, https://schema.org/color, https://schema.org/gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.
     *
     */
    additionalProperty?: schema.PropertyValueOrSubClass | string;
    /**
     * A flag to signal that the item, event, or place is accessible for free.
     */
    isAccessibleForFree?: boolean;
    /**
     * The total number of individuals that may attend an event or venue.
     */
    maximumAttendeeCapacity?: number;
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
     * The basic containment relation between a place and another that it contains.
     */
    containsPlace?: schema.PlaceOrSubClass | string;
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
};
/**
 * schema:School
 *
 * This differs from School because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type SchoolOrSubClass = School;
/**
 * schema:School - Validation schema (w/ JOI)
 */
export declare const SchoolJoiSchema: Joi.ObjectSchema;
/**
 * schema:School - Validation schema (w/ JOI)
 *
 * This differs from SchoolJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const SchoolOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:School.
 *
 * If some data has a structure which matches a schema:School, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeSchool = School.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeSchool instanceof OaValidationError) {
 *   // From this point on, `maybeSchool` will have type `OaValidationError`
 *   const error = maybeSchool;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeSchool` will have type `School`
 * const school = maybeSchool;
 * ```
 */
export declare function validateSchool(maybeSchool: unknown): School | OaValidationError;
