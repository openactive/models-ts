// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * SportsActivityLocation
 *
 * This type is derived from https://schema.org/SportsActivityLocation, which means that any of this type's properties within schema.org may also be used.
 */
export type SportsActivityLocation = {
  '@type': 'SportsActivityLocation';
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
   * The name of the SportsActivityLocation
   *
   * ```json
   * "name": "Basketball Hall"
   * ```
   */
  name?: string;
  /**
   * A plain text description of the SportsActivityLocation, which must not include HTML or other markup.
   *
   * ```json
   * "description": "The National Basketball Performance Centre (NBPC) is part of Belle Vue Sports Village.
   * 
   * - It features a purpose-built hall with 3 courts developed to FIBA standards for international competition and a multi-sports hall with a further 2 basketball courts.
   * - The NBPC show court, which has basketball lines only, also features FIBA scoreboards, 24 second cubes, red LED fitted backboards and Olympic standard portable baskets.
   * 
   * To book a court at the National Basketball Performance Centre, please use the link below or drop in to one of our Pay & Play sessions."
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
   * An image or photo that depicts the specific SportsActivityLocation.
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
   * The times the SportsActivityLocation is open
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
   * A website URL that describes the SportsActivityLocation
   *
   * ```json
   * "url": "https://www.better.org.uk/leisure-centre/manchester/belle-vue-sports-village/facilities"
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
  /**
   * The larger organization that this local business is a branch of, if any. Not to be confused with (anatomical) [[branch]].
   */
  branchOf?: schema.OrganizationOrSubClass | string;
  /**
   * The currency accepted.\n\nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217), e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies, e.g. "BTC"; well known names for [Local Exchange Trading Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types, e.g. "Ithaca HOUR".
   */
  currenciesAccepted?: string;
  /**
   * The floor level for an [[Accommodation]] in a multi-storey building. Since counting
   *   systems [vary internationally](https://en.wikipedia.org/wiki/Storey#Consecutive_number_floor_designations), the local system should be used where possible.
   */
  floorLevel?: string;
  /**
   * The general opening hours for a business. Opening hours can be specified as a weekly time range, starting with days, then times per day. Multiple days can be listed with commas ',' separating each day. Day or time ranges are specified using a hyphen '-'.\n\n* Days are specified using the following two-letter combinations: ```Mo```, ```Tu```, ```We```, ```Th```, ```Fr```, ```Sa```, ```Su```.\n* Times are specified using 24:00 format. For example, 3pm is specified as ```15:00```, 10am as ```10:00```. \n* Here is an example: <code>&lt;time itemprop="openingHours" datetime=&quot;Tu,Th 16:00-20:00&quot;&gt;Tuesdays and Thursdays 4-8pm&lt;/time&gt;</code>.\n* If a business is open 7 days a week, then it can be specified as <code>&lt;time itemprop=&quot;openingHours&quot; datetime=&quot;Mo-Su&quot;&gt;Monday through Sunday, all day&lt;/time&gt;</code>.
   */
  openingHours?: string;
  /**
   * Cash, Credit Card, Cryptocurrency, Local Exchange Tradings System, etc.
   */
  paymentAccepted?: string;
  /**
   * The price range of the business, for example ```$$$```.
   */
  priceRange?: string;
  /**
   * The payment method(s) that are accepted in general by an organization, or for some specific demand or offer.
   */
  acceptedPaymentMethod?: schema.LoanOrCreditOrSubClass | schema.PaymentMethodOrSubClass | string;
  /**
   * For a [[NewsMediaOrganization]] or other news-related [[Organization]], a statement about public engagement activities (for news media, the newsroom’s), including involving the public - digitally or otherwise -- in coverage decisions, reporting and activities after publication.
   */
  actionableFeedbackPolicy?: schema.CreativeWorkOrSubClass | string;
  /**
   * The number of completed interactions for this entity, in a particular role (the 'agent'), in a particular action (indicated in the statistic), and in a particular context (i.e. interactionService).
   */
  agentInteractionStatistic?: schema.InteractionCounterOrSubClass | string;
  /**
   * Alumni of an organization.
   */
  alumni?: schema.PersonOrSubClass | string;
  /**
   * The geographic area where a service or offered item is provided.
   */
  areaServed?: schema.AdministrativeAreaOrSubClass | schema.GeoShapeOrSubClass | schema.PlaceOrSubClass | string;
  /**
   * An organization or person officially appointed to act on behalf of the manufacturer in a specific region or context.
   */
  authorizedRepresentative?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
  /**
   * An award won by or for this item.
   */
  award?: string;
  /**
   * Awards won by or for this item.
   */
  awards?: string;
  /**
   * The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person.
   */
  brand?: schema.BrandOrSubClass | schema.OrganizationOrSubClass | string;
  /**
   * The official registration information of a business including the organization that issued it such as Company House or Chamber of Commerce in form of a Certification.
   */
  companyRegistration?: schema.CertificationOrSubClass | string;
  /**
   * A contact point for a person or organization.
   */
  contactPoint?: schema.ContactPointOrSubClass | string;
  /**
   * A contact point for a person or organization.
   */
  contactPoints?: schema.ContactPointOrSubClass | string;
  /**
   * For an [[Organization]] (e.g. [[NewsMediaOrganization]]), a statement describing (in news media, the newsroom’s) disclosure and correction policy for errors.
   */
  correctionsPolicy?: schema.CreativeWorkOrSubClass | string;
  /**
   * A relationship between an organization and a department of that organization, also described as an organization (allowing different urls, logos, opening hours). For example: a store with a pharmacy, or a bakery with a cafe.
   */
  department?: schema.OrganizationOrSubClass | string;
  /**
   * The date that this organization was dissolved.
   */
  dissolutionDate?: string;
  /**
   * Statement on diversity policy by an [[Organization]] e.g. a [[NewsMediaOrganization]]. For a [[NewsMediaOrganization]], a statement describing the newsroom’s diversity policy on both staffing and sources, typically providing staffing data.
   */
  diversityPolicy?: schema.CreativeWorkOrSubClass | string;
  /**
   * For an [[Organization]] (often but not necessarily a [[NewsMediaOrganization]]), a report on staffing diversity issues. In a news context this might be for example ASNE or RTDNA (US) reports, or self-reported.
   */
  diversityStaffingReport?: schema.ArticleOrSubClass | string;
  /**
   * The Dun & Bradstreet DUNS number for identifying an organization or business person.
   */
  duns?: string;
  /**
   * Someone working for this organization.
   */
  employee?: schema.PersonOrSubClass | string;
  /**
   * People working for this organization.
   */
  employees?: schema.PersonOrSubClass | string;
  /**
   * Statement about ethics policy, e.g. of a [[NewsMediaOrganization]] regarding journalistic and publishing practices, or of a [[Restaurant]], a page describing food source policies. In the case of a [[NewsMediaOrganization]], an ethicsPolicy is typically a statement describing the personal, organizational, and corporate standards of behavior expected by the organization.
   */
  ethicsPolicy?: schema.CreativeWorkOrSubClass | string;
  /**
   * A person or organization who founded this organization.
   */
  founder?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
  /**
   * A person who founded this organization.
   */
  founders?: schema.PersonOrSubClass | string;
  /**
   * The date that this organization was founded.
   */
  foundingDate?: string;
  /**
   * The place where the Organization was founded.
   */
  foundingLocation?: schema.PlaceOrSubClass | string;
  /**
   * A person or organization that supports (sponsors) something through some kind of financial contribution.
   */
  funder?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
  /**
   * A [[Grant]] that directly or indirectly provide funding or sponsorship for this item. See also [[ownershipFundingInfo]].
   */
  funding?: schema.GrantOrSubClass | string;
  /**
   * A credential awarded to the Person or Organization.
   */
  hasCredential?: schema.CredentialOrSubClass | string;
  /**
   * MemberProgram offered by an Organization, for example an eCommerce merchant or an airline.
   */
  hasMemberProgram?: schema.MemberProgramOrSubClass | string;
  /**
   * Specifies a MerchantReturnPolicy that may be applicable.
   */
  hasMerchantReturnPolicy?: schema.MerchantReturnPolicyOrSubClass | string;
  /**
   * Indicates an OfferCatalog listing for this Organization, Person, or Service.
   */
  hasOfferCatalog?: schema.OfferCatalogOrSubClass | string;
  /**
   * Points-of-Sales operated by the organization or person.
   */
  hasPOS?: schema.PlaceOrSubClass | string;
  /**
   * Indicates a ProductReturnPolicy that may be applicable.
   */
  hasProductReturnPolicy?: schema.ProductReturnPolicyOrSubClass | string;
  /**
   * Specification of a shipping service offered by the organization.
   */
  hasShippingService?: schema.ShippingServiceOrSubClass | string;
  /**
   * The number of interactions for the CreativeWork using the WebSite or SoftwareApplication. The most specific child type of InteractionCounter should be used.
   */
  interactionStatistic?: schema.InteractionCounterOrSubClass | string;
  /**
   * An organization identifier as defined in [ISO 6523(-1)](https://en.wikipedia.org/wiki/ISO/IEC_6523). The identifier should be in the `XXXX:YYYYYY:ZZZ` or `XXXX:YYYYYY`format. Where `XXXX` is a 4 digit _ICD_ (International Code Designator), `YYYYYY` is an _OID_ (Organization Identifier) with all formatting characters (dots, dashes, spaces) removed with a maximal length of 35 characters, and `ZZZ` is an optional OPI (Organization Part Identifier) with a maximum length of 35 characters. The various components (ICD, OID, OPI) are joined with a colon character (ASCII `0x3a`). Note that many existing organization identifiers defined as attributes like [leiCode](https://schema.org/leiCode) (`0199`), [duns](https://schema.org/duns) (`0060`) or [GLN](https://schema.org/globalLocationNumber) (`0088`) can be expressed using ISO-6523. If possible, ISO-6523 codes should be preferred to populating [vatID](https://schema.org/vatID) or [taxID](https://schema.org/taxID), as ISO identifiers are less ambiguous.
   */
  iso6523Code?: string;
  /**
   * Of a [[Person]], and less typically of an [[Organization]], to indicate a topic that is known about - suggesting possible expertise but not implying it. We do not distinguish skill levels here, or relate this to educational content, events, objectives or [[JobPosting]] descriptions.
   */
  knowsAbout?: string | schema.ThingOrSubClass;
  /**
   * Of a [[Person]], and less typically of an [[Organization]], to indicate a known language. We do not distinguish skill levels or reading/writing/speaking/signing here. Use language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47).
   */
  knowsLanguage?: schema.LanguageOrSubClass | string;
  /**
   * The legal address of an organization which acts as the officially registered address used for legal and tax purposes. The legal address can be different from the place of operations of a business and other addresses can be part of an organization.
   */
  legalAddress?: schema.PostalAddressOrSubClass | string;
  /**
   * The official name of the organization, e.g. the registered company name.
   */
  legalName?: string;
  /**
   * One or multiple persons who represent this organization legally such as CEO or sole administrator.
   */
  legalRepresentative?: schema.PersonOrSubClass | string;
  /**
   * An organization identifier that uniquely identifies a legal entity as defined in ISO 17442.
   */
  leiCode?: string;
  /**
   * The location of, for example, where an event is happening, where an organization is located, or where an action takes place.
   */
  location?: schema.PlaceOrSubClass | schema.PostalAddressOrSubClass | string | schema.VirtualLocationOrSubClass;
  /**
   * A pointer to products or services offered by the organization or person.
   */
  makesOffer?: schema.OfferOrSubClass | string;
  /**
   * A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals.
   */
  member?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
  /**
   * An Organization (or ProgramMembership) to which this Person or Organization belongs.
   */
  memberOf?: schema.MemberProgramTierOrSubClass | schema.OrganizationOrSubClass | schema.ProgramMembershipOrSubClass | string;
  /**
   * A member of this organization.
   */
  members?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
  /**
   * The North American Industry Classification System (NAICS) code for a particular organization or business person.
   */
  naics?: string;
  /**
   * nonprofitStatus indicates the legal status of a non-profit organization in its primary place of business.
   */
  nonprofitStatus?: schema.NonprofitType;
  /**
   * The number of employees in an organization, e.g. business.
   */
  numberOfEmployees?: schema.QuantitativeValueOrSubClass | string;
  /**
   * For an [[Organization]] (often but not necessarily a [[NewsMediaOrganization]]), a description of organizational ownership structure; funding and grants. In a news/media setting, this is with particular reference to editorial independence.   Note that the [[funder]] is also available and can be used to make basic funder information machine-readable.
   */
  ownershipFundingInfo?: schema.AboutPageOrSubClass | schema.CreativeWorkOrSubClass | string;
  /**
   * Things owned by the organization or person.
   */
  owns?: schema.ThingOrSubClass | string;
  /**
   * The larger organization that this organization is a [[subOrganization]] of, if any.
   */
  parentOrganization?: schema.OrganizationOrSubClass | string;
  /**
   * The publishingPrinciples property indicates (typically via [[URL]]) a document describing the editorial principles of an [[Organization]] (or individual, e.g. a [[Person]] writing a blog) that relate to their activities as a publisher, e.g. ethics or diversity policies. When applied to a [[CreativeWork]] (e.g. [[NewsArticle]]) the principles are those of the party primarily responsible for the creation of the [[CreativeWork]].
   * 
   * While such policies are most typically expressed in natural language, sometimes related information (e.g. indicating a [[funder]]) can be expressed using schema.org terminology.
   * 
   */
  publishingPrinciples?: schema.CreativeWorkOrSubClass | string;
  /**
   * A pointer to products or services sought by the organization or person (demand).
   */
  seeks?: schema.DemandOrSubClass | string;
  /**
   * The geographic area where the service is provided.
   */
  serviceArea?: schema.AdministrativeAreaOrSubClass | schema.GeoShapeOrSubClass | schema.PlaceOrSubClass | string;
  /**
   * A statement of knowledge, skill, ability, task or any other assertion expressing a competency that is either claimed by a person, an organization or desired or required to fulfill a role or to work in an occupation.
   */
  skills?: schema.DefinedTermOrSubClass | string;
  /**
   * A person or organization that supports a thing through a pledge, promise, or financial contribution. E.g. a sponsor of a Medical Study or a corporate sponsor of an event.
   */
  sponsor?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
  /**
   * A relationship between two organizations where the first includes the second, e.g., as a subsidiary. See also: the more specific 'department' property.
   */
  subOrganization?: schema.OrganizationOrSubClass | string;
  /**
   * The Tax / Fiscal ID of the organization or person, e.g. the TIN in the US or the CIF/NIF in Spain.
   */
  taxID?: string;
  /**
   * For an [[Organization]] (typically a [[NewsMediaOrganization]]), a statement about policy on use of unnamed sources and the decision process required.
   */
  unnamedSourcesPolicy?: schema.CreativeWorkOrSubClass | string;
  /**
   * The value-added Tax ID of the organization or person with national prefix (for example IT123456789). Can also be described as [[iso6523Code]] with proper prefix.
   */
  vatID?: string;
};

/**
 * SportsActivityLocation
 *
 * This type is derived from https://schema.org/SportsActivityLocation, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from SportsActivityLocation because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type SportsActivityLocationOrSubClass =
  | SportsActivityLocation
  ;

/**
 * SportsActivityLocation - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/SportsActivityLocation, which means that any of this type's properties within schema.org may also be used.
 */
export const SportsActivityLocationJoiSchema = Joi.object({
  '@type': Joi.string().valid('SportsActivityLocation').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  identifier: Joi.alternatives().try(Joi.number().integer(), Joi.string(), Joi.lazy(() => oa.PropertyValueOrSubClassJoiSchema), Joi.array().items(Joi.lazy(() => oa.PropertyValueOrSubClassJoiSchema))),
  name: Joi.string(),
  description: Joi.string(),
  '@id': Joi.string().uri(),
  amenityFeature: Joi.array().items(Joi.lazy(() => oa.LocationFeatureSpecificationOrSubClassJoiSchema)),
  containedInPlace: Joi.alternatives().try(Joi.lazy(() => oa.PlaceOrSubClassJoiSchema), Joi.string().uri()),
  containsPlace: Joi.array().items(Joi.lazy(() => oa.PlaceOrSubClassJoiSchema)),
  email: Joi.string(),
  image: Joi.array().items(Joi.lazy(() => oa.ImageObjectOrSubClassJoiSchema)),
  openingHoursSpecification: Joi.array().items(Joi.lazy(() => oa.OpeningHoursSpecificationOrSubClassJoiSchema)),
  specialOpeningHoursSpecification: Joi.array().items(Joi.lazy(() => oa.OpeningHoursSpecificationOrSubClassJoiSchema)),
  telephone: Joi.string(),
  url: Joi.string().uri(),
  'beta:formattedDescription': Joi.string(),
  'beta:video': Joi.array().items(Joi.lazy(() => oa.VideoObjectOrSubClassJoiSchema)),
  'beta:virtualTour': Joi.array().items(Joi.lazy(() => schema.ThreeDModelOrSubClassJoiSchema)),
  'beta:serviceOperator': Joi.lazy(() => oa.OrganizationOrSubClassJoiSchema),
  'beta:placeType': Joi.array().items(Joi.lazy(() => oa.ConceptOrSubClassJoiSchema)),
  additionalProperty: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri()),
  aggregateRating: Joi.alternatives().try(Joi.lazy(() => schema.AggregateRatingOrSubClassJoiSchema), Joi.string().uri()),
  branchCode: Joi.string(),
  containedIn: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
  event: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.string().uri()),
  events: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.string().uri()),
  faxNumber: Joi.string(),
  geoContains: Joi.alternatives().try(Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
  geoCoveredBy: Joi.alternatives().try(Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
  geoCovers: Joi.alternatives().try(Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
  geoCrosses: Joi.alternatives().try(Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
  geoDisjoint: Joi.alternatives().try(Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
  geoEquals: Joi.alternatives().try(Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
  geoIntersects: Joi.alternatives().try(Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
  geoOverlaps: Joi.alternatives().try(Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
  geoTouches: Joi.alternatives().try(Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
  geoWithin: Joi.alternatives().try(Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
  globalLocationNumber: Joi.string(),
  hasCertification: Joi.alternatives().try(Joi.lazy(() => schema.CertificationOrSubClassJoiSchema), Joi.string().uri()),
  hasDriveThroughService: Joi.boolean(),
  hasGS1DigitalLink: Joi.string().uri(),
  hasMap: Joi.alternatives().try(Joi.lazy(() => schema.MapOrSubClassJoiSchema), Joi.string().uri()),
  isAccessibleForFree: Joi.boolean(),
  isicV4: Joi.string(),
  keywords: Joi.alternatives().try(Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  latitude: Joi.alternatives().try(Joi.number(), Joi.string()),
  logo: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
  longitude: Joi.alternatives().try(Joi.number(), Joi.string()),
  map: Joi.string().uri(),
  maps: Joi.string().uri(),
  maximumAttendeeCapacity: Joi.number().integer(),
  photo: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.lazy(() => schema.PhotographOrSubClassJoiSchema), Joi.string().uri()),
  photos: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.lazy(() => schema.PhotographOrSubClassJoiSchema), Joi.string().uri()),
  publicAccess: Joi.boolean(),
  review: Joi.alternatives().try(Joi.lazy(() => schema.ReviewOrSubClassJoiSchema), Joi.string().uri()),
  reviews: Joi.alternatives().try(Joi.lazy(() => schema.ReviewOrSubClassJoiSchema), Joi.string().uri()),
  slogan: Joi.string(),
  smokingAllowed: Joi.boolean(),
  tourBookingPage: Joi.string().uri(),
  additionalType: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
  alternateName: Joi.string(),
  disambiguatingDescription: Joi.string(),
  mainEntityOfPage: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
  owner: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  potentialAction: Joi.alternatives().try(Joi.lazy(() => schema.ActionOrSubClassJoiSchema), Joi.string().uri()),
  sameAs: Joi.string().uri(),
  subjectOf: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.string().uri()),
  branchOf: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  currenciesAccepted: Joi.string(),
  floorLevel: Joi.string(),
  openingHours: Joi.string(),
  paymentAccepted: Joi.string(),
  priceRange: Joi.string(),
  acceptedPaymentMethod: Joi.alternatives().try(Joi.lazy(() => schema.LoanOrCreditOrSubClassJoiSchema), Joi.lazy(() => schema.PaymentMethodOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  actionableFeedbackPolicy: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
  agentInteractionStatistic: Joi.alternatives().try(Joi.lazy(() => schema.InteractionCounterOrSubClassJoiSchema), Joi.string().uri()),
  alumni: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  areaServed: Joi.alternatives().try(Joi.lazy(() => schema.AdministrativeAreaOrSubClassJoiSchema), Joi.lazy(() => schema.GeoShapeOrSubClassJoiSchema), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  authorizedRepresentative: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  award: Joi.string(),
  awards: Joi.string(),
  brand: Joi.alternatives().try(Joi.lazy(() => schema.BrandOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  companyRegistration: Joi.alternatives().try(Joi.lazy(() => schema.CertificationOrSubClassJoiSchema), Joi.string().uri()),
  contactPoint: Joi.alternatives().try(Joi.lazy(() => schema.ContactPointOrSubClassJoiSchema), Joi.string().uri()),
  contactPoints: Joi.alternatives().try(Joi.lazy(() => schema.ContactPointOrSubClassJoiSchema), Joi.string().uri()),
  correctionsPolicy: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
  department: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  dissolutionDate: Joi.string().isoDate(),
  diversityPolicy: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
  diversityStaffingReport: Joi.alternatives().try(Joi.lazy(() => schema.ArticleOrSubClassJoiSchema), Joi.string().uri()),
  duns: Joi.string(),
  employee: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  employees: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  ethicsPolicy: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
  founder: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  founders: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  foundingDate: Joi.string().isoDate(),
  foundingLocation: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
  funder: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  funding: Joi.alternatives().try(Joi.lazy(() => schema.GrantOrSubClassJoiSchema), Joi.string().uri()),
  hasCredential: Joi.alternatives().try(Joi.lazy(() => schema.CredentialOrSubClassJoiSchema), Joi.string().uri()),
  hasMemberProgram: Joi.alternatives().try(Joi.lazy(() => schema.MemberProgramOrSubClassJoiSchema), Joi.string().uri()),
  hasMerchantReturnPolicy: Joi.alternatives().try(Joi.lazy(() => schema.MerchantReturnPolicyOrSubClassJoiSchema), Joi.string().uri()),
  hasOfferCatalog: Joi.alternatives().try(Joi.lazy(() => schema.OfferCatalogOrSubClassJoiSchema), Joi.string().uri()),
  hasPOS: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
  hasProductReturnPolicy: Joi.alternatives().try(Joi.lazy(() => schema.ProductReturnPolicyOrSubClassJoiSchema), Joi.string().uri()),
  hasShippingService: Joi.alternatives().try(Joi.lazy(() => schema.ShippingServiceOrSubClassJoiSchema), Joi.string().uri()),
  interactionStatistic: Joi.alternatives().try(Joi.lazy(() => schema.InteractionCounterOrSubClassJoiSchema), Joi.string().uri()),
  iso6523Code: Joi.string(),
  knowsAbout: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
  knowsLanguage: Joi.alternatives().try(Joi.lazy(() => schema.LanguageOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  legalAddress: Joi.alternatives().try(Joi.lazy(() => schema.PostalAddressOrSubClassJoiSchema), Joi.string().uri()),
  legalName: Joi.string(),
  legalRepresentative: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  leiCode: Joi.string(),
  location: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.lazy(() => schema.PostalAddressOrSubClassJoiSchema), Joi.string(), Joi.lazy(() => schema.VirtualLocationOrSubClassJoiSchema), Joi.string().uri()),
  makesOffer: Joi.alternatives().try(Joi.lazy(() => schema.OfferOrSubClassJoiSchema), Joi.string().uri()),
  member: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  memberOf: Joi.alternatives().try(Joi.lazy(() => schema.MemberProgramTierOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.ProgramMembershipOrSubClassJoiSchema), Joi.string().uri()),
  members: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  naics: Joi.string(),
  nonprofitStatus: Joi.lazy(() => schema.NonprofitTypeJoiSchema),
  numberOfEmployees: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  ownershipFundingInfo: Joi.alternatives().try(Joi.lazy(() => schema.AboutPageOrSubClassJoiSchema), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  owns: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
  parentOrganization: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  publishingPrinciples: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
  seeks: Joi.alternatives().try(Joi.lazy(() => schema.DemandOrSubClassJoiSchema), Joi.string().uri()),
  serviceArea: Joi.alternatives().try(Joi.lazy(() => schema.AdministrativeAreaOrSubClassJoiSchema), Joi.lazy(() => schema.GeoShapeOrSubClassJoiSchema), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
  skills: Joi.alternatives().try(Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  sponsor: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  subOrganization: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  taxID: Joi.string(),
  unnamedSourcesPolicy: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
  vatID: Joi.string(),
});

/**
 * SportsActivityLocation - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/SportsActivityLocation, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from SportsActivityLocationJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const SportsActivityLocationOrSubClassJoiSchema = Joi.alternatives().try([
  SportsActivityLocationJoiSchema,
]);

/**
 * Runtime validator for SportsActivityLocation.
 *
 * If some data has a structure which matches a SportsActivityLocation, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeSportsActivityLocation = validateSportsActivityLocation(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeSportsActivityLocation instanceof OaValidationError) {
 *   // From this point on, `maybeSportsActivityLocation` will have type `OaValidationError`
 *   const error = maybeSportsActivityLocation;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeSportsActivityLocation` will have type `SportsActivityLocation`
 * const sportsActivityLocation = maybeSportsActivityLocation;
 * ```
 */
export function validateSportsActivityLocation(maybeSportsActivityLocation: unknown): SportsActivityLocation | OaValidationError {
  const { value, error } = SportsActivityLocationJoiSchema.validate(maybeSportsActivityLocation);
  if (error) {
    return new OaValidationError('SportsActivityLocation', maybeSportsActivityLocation, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as SportsActivityLocation;
}
