// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * IndividualFacilityUse
 *
 * This type is derived from https://schema.org/Product, which means that any of this type's properties within schema.org may also be used.
 */
export type IndividualFacilityUse = {
  '@type': 'IndividualFacilityUse';
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
   * The name of the facility use
   *
   * ```json
   * "name": "Speedball"
   * ```
   */
  name?: string;
  /**
   * A plain text description of the facility use, which must not include HTML or other markup.
   *
   * ```json
   * "description": "An fast paced game that incorporates netball, handball and football."
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
   * [DEPRECATED: Use `facilityType` instead of `activity` within `FacilityUse` and `IndividualFacilityUse`, as the `facilityType` controlled vocabulary has been designed specifically for facilities.]
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
   * Inverse of the oa:individualFacilityUse property. Relates an oa:IndividualFacilityUse (e.g. an opportunity to play tennis on a specific court) to a oa:FacilityUse (e.g. an opportunity to play tennis at a specific location).
   */
  aggregateFacilityUse?: oa.FacilityUseOrSubClass;
  /**
   * Provides additional notes and instructions for users of a facility, for example more information on how to find it, what to bring, etc. The value of this property must not include HTML or other markup.
   *
   * ```json
   * "attendeeInstructions": "The tennis court is locked with a keycode, so please ensure you book online in advance to gain access."
   * ```
   */
  attendeeInstructions?: string;
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
  category?: string[] | oa.ConceptOrSubClass[];
  /**
   * Free text restrictions to display to the Customer at the browse stage, that may apply when using a Customer Account to make the booking.
   * Note that this property is in EARLY RELEASE AND IS SUBJECT TO CHANGE, as the [Customer Accounts proposal](https://github.com/openactive/customer-accounts) evolves.
   *
   * ```json
   * "customerAccountBookingRestriction": [
   *   "Gold members only",
   *   "Gym induction required"
   * ]
   * ```
   */
  customerAccountBookingRestriction?: string[];
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
  event?: oa.SlotOrSubClass[];
  /**
   * Specifies the types of facility being described.
   * NOTE: this property has been added to tooling and documentation ahead of inclusion in the next point release of the OpenActive Modelling Opportunity Data specification, as agreed on [the W3C call 2021-06-02](https://github.com/openactive/facility-types/issues/1#issuecomment-853759213).
   *
   * ```json
   * "facilityType": [
   *   {
   *     "@type": "Concept",
   *     "@id": "https://openactive.io/facility-types#bba8ae59-d152-40bc-85cc-88c5375696d4",
   *     "prefLabel": "Tennis Court",
   *     "inScheme": "https://openactive.io/facility-types"
   *   }
   * ]
   * ```
   */
  facilityType?: oa.ConceptOrSubClass[];
  /**
   * The times the facility use is available
   */
  hoursAvailable?: oa.OpeningHoursSpecificationOrSubClass[];
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
  image?: oa.ImageObjectOrSubClass[];
  /**
   * Indicates that a Customer Account may be used to book that opportunity.
   * Note that this property is in EARLY RELEASE AND IS SUBJECT TO CHANGE, as the [Customer Accounts proposal](https://github.com/openactive/customer-accounts) evolves.
   *
   * ```json
   * "isOpenBookingWithCustomerAccountAllowed": "true"
   * ```
   */
  isOpenBookingWithCustomerAccountAllowed?: boolean;
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
  location?: oa.PlaceOrSubClass | string;
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
  offers?: oa.OfferOrSubClass[];
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
  provider?: oa.OrganizationOrSubClass;
  /**
   * A URL to a web page (or section of a page) that describes the facility use.
   *
   * ```json
   * "url": "https://example.com/facility-use/1234"
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
   * A property that details whether the event is suitable for wheelchair access. Placed on Event as this field could be used to detail whether the Event is suitable, as well as the Place.
   * 
   * If you are using this property, please join the discussion at proposal [#166](https://github.com/openactive/modelling-opportunity-data/issues/166).
   */
  'beta:isWheelchairAccessible'?: boolean;
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
  'beta:sportsActivityLocation'?: oa.SportsActivityLocationOrSubClass[];
  /**
   * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
   * Duration before the event for which the associated Offers are valid
   * 
   * If you are using this property, please join the discussion at proposal [#204](https://github.com/openactive/modelling-opportunity-data/issues/204).
   */
  'beta:offerValidityPeriod'?: string;
  /**
   * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
   * Attributes associated with the facility in use. See https://openactive.io/facility-attribute-list/.
   * 
   * If you are using this property, please join the discussion at proposal [#1](https://github.com/openactive/facility-types/issues/1).
   */
  'beta:facilityAttribute'?: oa.ConceptOrSubClass[];
  /**
   * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
   * Whether the event or facility is indoor or outdoor.
   * 
   * If you are using this property, please join the discussion at proposal [#1](https://github.com/openactive/facility-types/issues/1).
   */
  'beta:facilitySetting'?: oa.FacilitySettingType;
  /**
   * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
   * The channels through which a booking can be made.
   * 
   * If you are using this property, please join the discussion at proposal [#161](https://github.com/openactive/modelling-opportunity-data/issues/161).
   */
  'beta:bookingChannel'?: oa.BookingChannelType[];
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
   * An Amazon Standard Identification Number (ASIN) is a 10-character alphanumeric unique identifier assigned by Amazon.com and its partners for product identification within the Amazon organization (summary from [Wikipedia](https://en.wikipedia.org/wiki/Amazon_Standard_Identification_Number)'s article).
   * 
   * Note also that this is a definition for how to include ASINs in Schema.org data, and not a definition of ASINs in general - see documentation from Amazon for authoritative details.
   * ASINs are most commonly encoded as text strings, but the [asin] property supports URL/URI as potential values too.
   */
  asin?: string;
  /**
   * An intended audience, i.e. a group for whom something was created.
   */
  audience?: schema.AudienceOrSubClass | string;
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
   * The color of the product.
   */
  color?: string;
  /**
   * A color swatch image, visualizing the color of a [[Product]]. Should match the textual description specified in the [[color]] property. This can be a URL or a fully described ImageObject.
   */
  colorSwatch?: schema.ImageObjectOrSubClass | string;
  /**
   * A consumer notice, such as a safety warning or mandatory information, related to the product.
   */
  consumerNotice?: string | schema.TextObjectOrSubClass | schema.WebContentOrSubClass;
  /**
   * The place where the product was assembled.
   */
  countryOfAssembly?: string;
  /**
   * The place where the item (typically [[Product]]) was last processed and tested before importation.
   */
  countryOfLastProcessing?: string;
  /**
   * The country of origin of something, including products as well as creative  works such as movie and TV content.
   * 
   * In the case of TV and movie, this would be the country of the principle offices of the production company or individual responsible for the movie. For other kinds of [[CreativeWork]] it is difficult to provide fully general guidance, and properties such as [[contentLocation]] and [[locationCreated]] may be more applicable.
   * 
   * In the case of products, the country of origin of the product. The exact interpretation of this may vary by context and product type, and cannot be fully enumerated here.
   */
  countryOfOrigin?: schema.CountryOrSubClass | string;
  /**
   * The depth of the item.
   */
  depth?: schema.DistanceOrSubClass | schema.QuantitativeValueOrSubClass | string;
  /**
   * The location at which an item can be viewed or experienced in-person.
   */
  displayLocation?: schema.PlaceOrSubClass | string;
  /**
   * A [[Grant]] that directly or indirectly provide funding or sponsorship for this item. See also [[ownershipFundingInfo]].
   */
  funding?: schema.GrantOrSubClass | string;
  /**
   * A Global Trade Item Number ([GTIN](https://www.gs1.org/standards/id-keys/gtin)). GTINs identify trade items, including products and services, using numeric identification codes.
   * 
   * A correct [[gtin]] value should be a valid GTIN, which means that it should be an all-numeric string of either 8, 12, 13 or 14 digits, or a "GS1 Digital Link" URL based on such a string. The numeric component should also have a [valid GS1 check digit](https://www.gs1.org/services/check-digit-calculator) and meet the other rules for valid GTINs. See also [GS1's GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) and [Wikipedia](https://en.wikipedia.org/wiki/Global_Trade_Item_Number) for more details. Left-padding of the gtin values is not required or encouraged. The [[gtin]] property generalizes the earlier [[gtin8]], [[gtin12]], [[gtin13]], and [[gtin14]] properties.
   * 
   * The GS1 [digital link specifications](https://www.gs1.org/standards/Digital-Link/) expresses GTINs as URLs (URIs, IRIs, etc.).
   * Digital Links should be populated into the [[hasGS1DigitalLink]] attribute.
   * 
   * Note also that this is a definition for how to include GTINs in Schema.org data, and not a definition of GTINs in general - see the GS1 documentation for authoritative details.
   */
  gtin?: string;
  /**
   * The GTIN-12 code of the product, or the product to which the offer refers. The GTIN-12 is the 12-digit GS1 Identification Key composed of a U.P.C. Company Prefix, Item Reference, and Check Digit used to identify trade items. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
   */
  gtin12?: string;
  /**
   * The GTIN-13 code of the product, or the product to which the offer refers. This is equivalent to 13-digit ISBN codes and EAN UCC-13. Former 12-digit UPC codes can be converted into a GTIN-13 code by simply adding a preceding zero. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
   */
  gtin13?: string;
  /**
   * The GTIN-14 code of the product, or the product to which the offer refers. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
   */
  gtin14?: string;
  /**
   * The GTIN-8 code of the product, or the product to which the offer refers. This code is also known as EAN/UCC-8 or 8-digit EAN. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
   */
  gtin8?: string;
  /**
   * Used to tag an item to be intended or suitable for consumption or use by adults only.
   */
  hasAdultConsideration?: schema.AdultOrientedEnumeration;
  /**
   * Certification information about a product, organization, service, place, or person.
   */
  hasCertification?: schema.CertificationOrSubClass | string;
  /**
   * A link to a Digital Product Passport (DPP) or a digital record detailing the lifecycle, sustainability, and compliance data for this product or offer. This may be a direct URL, a GS1 Digital Link URI, or a nested DigitalProductPassport object. Note: This property is aligned with the IANA 'dpp' link relation and the GS1 Web Vocabulary 'dpp' link type.
   */
  hasDigitalProductPassport?: schema.DigitalProductPassportOrSubClass | string;
  /**
   * Defines the energy efficiency Category (also known as "class" or "rating") for a product according to an international energy efficiency standard.
   */
  hasEnergyConsumptionDetails?: schema.EnergyConsumptionDetailsOrSubClass | string;
  /**
   * The <a href="https://www.gs1.org/standards/gs1-digital-link">GS1 digital link</a> associated with the object. This URL should conform to the particular requirements of digital links. The link should only contain the Application Identifiers (AIs) that are relevant for the entity being annotated, for instance a [[Product]] or an [[Organization]], and for the correct granularity. In particular, for products:<ul><li>A Digital Link that contains a serial number (AI <code>21</code>) should only be present on instances of [[IndividualProduct]]</li><li>A Digital Link that contains a lot number (AI <code>10</code>) should be annotated as [[SomeProducts]] if only products from that lot are sold, or [[IndividualProduct]] if there is only a specific product.</li><li>A Digital Link that contains a global model number (AI <code>8013</code>) should be attached to a [[Product]] or a [[ProductModel]].</li></ul> Other item types should be adapted similarly.
   */
  hasGS1DigitalLink?: string;
  /**
   * A measurement of an item, For example, the inseam of pants, the wheel size of a bicycle, the gauge of a screw, or the carbon footprint measured for certification by an authority. Usually an exact measurement, but can also be a range of measurements for adjustable products, for example belts and ski bindings.
   */
  hasMeasurement?: schema.QuantitativeValueOrSubClass | string;
  /**
   * Specifies a MerchantReturnPolicy that may be applicable.
   */
  hasMerchantReturnPolicy?: schema.MerchantReturnPolicyOrSubClass | string;
  /**
   * Indicates a ProductReturnPolicy that may be applicable.
   */
  hasProductReturnPolicy?: schema.ProductReturnPolicyOrSubClass | string;
  /**
   * The height of the item.
   */
  height?: schema.DistanceOrSubClass | schema.QuantitativeValueOrSubClass | string;
  /**
   * An organization or person who imports the product into a specific market or region.
   */
  importer?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
  /**
   * Indicates the [[productGroupID]] for a [[ProductGroup]] that this product [[isVariantOf]]. 
   */
  inProductGroupWithID?: string;
  /**
   * A pointer to another product (or multiple products) for which this product is an accessory or spare part.
   */
  isAccessoryOrSparePartFor?: schema.ProductOrSubClass | string;
  /**
   * A pointer to another product (or multiple products) for which this product is a consumable.
   */
  isConsumableFor?: schema.ProductOrSubClass | string;
  /**
   * Indicates whether this content is family friendly.
   */
  isFamilyFriendly?: boolean;
  /**
   * Indicates a product that is often bought with the described product.
   */
  isOftenBoughtWith?: schema.ProductOrSubClass | string;
  /**
   * A pointer to another, somehow related product (or multiple products).
   */
  isRelatedTo?: schema.ProductOrSubClass | schema.ServiceOrSubClass | string;
  /**
   * A pointer to another, functionally similar product (or multiple products).
   */
  isSimilarTo?: schema.ProductOrSubClass | schema.ServiceOrSubClass | string;
  /**
   * Indicates the kind of product that this is a variant of. In the case of [[ProductModel]], this is a pointer (from a ProductModel) to a base product from which this product is a variant. It is safe to infer that the variant inherits all product features from the base model, unless defined locally. This is not transitive. In the case of a [[ProductGroup]], the group description also serves as a template, representing a set of Products that vary on explicitly defined, specific dimensions only (so it defines both a set of variants, as well as which values distinguish amongst those variants). When used with [[ProductGroup]], this property can apply to any [[Product]] included in the group.
   */
  isVariantOf?: schema.ProductGroupOrSubClass | schema.ProductModelOrSubClass | string;
  /**
   * A predefined value from OfferItemCondition specifying the condition of the product or service, or the products or services included in the offer. Also used for product return policies to specify the condition of products accepted for returns.
   */
  itemCondition?: schema.OfferItemCondition;
  /**
   * Keywords or tags used to describe some item. Multiple textual entries in a keywords list are typically delimited by commas, or by repeating the property.
   */
  keywords?: schema.DefinedTermOrSubClass | string;
  /**
   * An associated logo.
   */
  logo?: schema.ImageObjectOrSubClass | string;
  /**
   * The manufacturer of the product.
   */
  manufacturer?: schema.OrganizationOrSubClass | string;
  /**
   * A material that something is made from, e.g. leather, wool, cotton, paper.
   */
  material?: schema.ProductOrSubClass | string;
  /**
   * The [[mobileUrl]] property is provided for specific situations in which data consumers need to determine whether one of several provided URLs is a dedicated 'mobile site'.
   * 
   * To discourage over-use, and reflecting intial usecases, the property is expected only on [[Product]] and [[Offer]], rather than [[Thing]]. The general trend in web technology is towards [responsive design](https://en.wikipedia.org/wiki/Responsive_web_design) in which content can be flexibly adapted to a wide range of browsing environments. Pages and sites referenced with the long-established [[url]] property should ideally also be usable on a wide variety of devices, including mobile phones. In most cases, it would be pointless and counter productive to attempt to update all [[url]] markup to use [[mobileUrl]] for more mobile-oriented pages. The property is intended for the case when items (primarily [[Product]] and [[Offer]]) have extra URLs hosted on an additional "mobile site" alongside the main one. It should not be taken as an endorsement of this publication style.
   *     
   */
  mobileUrl?: string;
  /**
   * The model of the product. Use with the URL of a ProductModel or a textual representation of the model identifier. The URL of the ProductModel can be from an external source. It is recommended to additionally provide strong product identifiers via the gtin8/gtin13/gtin14 and mpn properties.
   */
  model?: schema.ProductModelOrSubClass | string;
  /**
   * The Manufacturer Part Number (MPN) of the product, or the product to which the offer refers.
   */
  mpn?: string;
  /**
   * Provides negative considerations regarding something, most typically in pro/con lists for reviews (alongside [[positiveNotes]]). For symmetry 
   * 
   * In the case of a [[Review]], the property describes the [[itemReviewed]] from the perspective of the review; in the case of a [[Product]], the product itself is being described. Since product descriptions 
   * tend to emphasise positive claims, it may be relatively unusual to find [[negativeNotes]] used in this way. Nevertheless for the sake of symmetry, [[negativeNotes]] can be used on [[Product]].
   * 
   * The property values can be expressed either as unstructured text (repeated as necessary), or if ordered, as a list (in which case the most negative is at the beginning of the list).
   */
  negativeNotes?: schema.ItemListOrSubClass | schema.ListItemOrSubClass | string | schema.WebContentOrSubClass;
  /**
   * Indicates the [NATO stock number](https://en.wikipedia.org/wiki/NATO_Stock_Number) (nsn) of a [[Product]]. 
   */
  nsn?: string;
  /**
   * A pattern that something has, for example 'polka dot', 'striped', 'Canadian flag'. Values are typically expressed as text, although links to controlled value schemes are also supported.
   */
  pattern?: schema.DefinedTermOrSubClass | string;
  /**
   * Provides positive considerations regarding something, for example product highlights or (alongside [[negativeNotes]]) pro/con lists for reviews.
   * 
   * In the case of a [[Review]], the property describes the [[itemReviewed]] from the perspective of the review; in the case of a [[Product]], the product itself is being described.
   * 
   * The property values can be expressed either as unstructured text (repeated as necessary), or if ordered, as a list (in which case the most positive is at the beginning of the list).
   */
  positiveNotes?: schema.ItemListOrSubClass | schema.ListItemOrSubClass | string | schema.WebContentOrSubClass;
  /**
   * The product identifier, such as ISBN. For example: ``` meta itemprop="productID" content="isbn:123-456-789" ```.
   */
  productID?: string;
  /**
   * The date of production of the item, e.g. vehicle.
   */
  productionDate?: string;
  /**
   * The date the item, e.g. vehicle, was purchased by the current owner.
   */
  purchaseDate?: string;
  /**
   * The percentage of recycled material in the product.
   */
  recycledContentPercentage?: number;
  /**
   * The release date of a product or product model. This can be used to distinguish the exact variant of a product.
   */
  releaseDate?: string;
  /**
   * A review of the item.
   */
  review?: schema.ReviewOrSubClass | string;
  /**
   * Review of the item.
   */
  reviews?: schema.ReviewOrSubClass | string;
  /**
   * A standardized size of a product or creative work, specified either through a simple textual string (for example 'XL', '32Wx34L'), a  QuantitativeValue with a unitCode, or a comprehensive and structured [[SizeSpecification]]; in other cases, the [[width]], [[height]], [[depth]] and [[weight]] properties may be more applicable. 
   */
  size?: schema.DefinedTermOrSubClass | schema.QuantitativeValueOrSubClass | schema.SizeSpecificationOrSubClass | string;
  /**
   * The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers.
   */
  sku?: string;
  /**
   * A slogan or motto associated with the item.
   */
  slogan?: string;
  /**
   * A specification of the product, often grouped by a section header/name. This is a cleaner alternative to additionalProperty for strict retail product specifications.
   */
  specification?: schema.PropertyValueOrSubClass | string;
  /**
   * A substance of concern (SoC) contained within the product, typically based on regulatory lists like REACH or RoHS.
   */
  substanceOfConcern?: schema.ChemicalSubstanceOrSubClass | schema.DefinedTermOrSubClass | string;
  /**
   * The weight of the product or person.
   */
  weight?: schema.MassOrSubClass | schema.QuantitativeValueOrSubClass | string;
  /**
   * The width of the item.
   */
  width?: schema.DistanceOrSubClass | schema.QuantitativeValueOrSubClass | string;
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
 * IndividualFacilityUse
 *
 * This type is derived from https://schema.org/Product, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from IndividualFacilityUse because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type IndividualFacilityUseOrSubClass =
  | IndividualFacilityUse
  ;

/**
 * IndividualFacilityUse - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/Product, which means that any of this type's properties within schema.org may also be used.
 */
export const IndividualFacilityUseJoiSchema = Joi.object({
  '@type': Joi.string().valid('IndividualFacilityUse').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  identifier: Joi.alternatives().try(Joi.number().integer(), Joi.string(), Joi.lazy(() => oa.PropertyValueOrSubClassJoiSchema), Joi.array().items(Joi.lazy(() => oa.PropertyValueOrSubClassJoiSchema))),
  name: Joi.string(),
  description: Joi.string(),
  '@id': Joi.string().uri(),
  accessibilityInformation: Joi.string(),
  accessibilitySupport: Joi.array().items(Joi.lazy(() => oa.ConceptOrSubClassJoiSchema)),
  activity: Joi.array().items(Joi.lazy(() => oa.ConceptOrSubClassJoiSchema)),
  additionalAdmissionRestriction: Joi.array().items(Joi.string()),
  aggregateFacilityUse: Joi.lazy(() => oa.FacilityUseOrSubClassJoiSchema),
  attendeeInstructions: Joi.string(),
  category: Joi.alternatives().try(Joi.array().items(Joi.string()), Joi.array().items(Joi.lazy(() => oa.ConceptOrSubClassJoiSchema))),
  customerAccountBookingRestriction: Joi.array().items(Joi.string()),
  event: Joi.array().items(Joi.lazy(() => oa.SlotOrSubClassJoiSchema)),
  facilityType: Joi.array().items(Joi.lazy(() => oa.ConceptOrSubClassJoiSchema)),
  hoursAvailable: Joi.array().items(Joi.lazy(() => oa.OpeningHoursSpecificationOrSubClassJoiSchema)),
  image: Joi.array().items(Joi.lazy(() => oa.ImageObjectOrSubClassJoiSchema)),
  isOpenBookingWithCustomerAccountAllowed: Joi.boolean(),
  location: Joi.alternatives().try(Joi.lazy(() => oa.PlaceOrSubClassJoiSchema), Joi.string().uri()),
  offers: Joi.array().items(Joi.lazy(() => oa.OfferOrSubClassJoiSchema)),
  provider: Joi.lazy(() => oa.OrganizationOrSubClassJoiSchema),
  url: Joi.string().uri(),
  'beta:formattedDescription': Joi.string(),
  'beta:isWheelchairAccessible': Joi.boolean(),
  'beta:video': Joi.array().items(Joi.lazy(() => oa.VideoObjectOrSubClassJoiSchema)),
  'beta:sportsActivityLocation': Joi.array().items(Joi.lazy(() => oa.SportsActivityLocationOrSubClassJoiSchema)),
  'beta:offerValidityPeriod': Joi.string(),
  'beta:facilityAttribute': Joi.array().items(Joi.lazy(() => oa.ConceptOrSubClassJoiSchema)),
  'beta:facilitySetting': Joi.lazy(() => oa.FacilitySettingTypeJoiSchema),
  'beta:bookingChannel': Joi.array().items(Joi.lazy(() => oa.BookingChannelTypeJoiSchema)),
  additionalProperty: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri()),
  aggregateRating: Joi.alternatives().try(Joi.lazy(() => schema.AggregateRatingOrSubClassJoiSchema), Joi.string().uri()),
  asin: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
  audience: Joi.alternatives().try(Joi.lazy(() => schema.AudienceOrSubClassJoiSchema), Joi.string().uri()),
  authorizedRepresentative: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  award: Joi.string(),
  awards: Joi.string(),
  brand: Joi.alternatives().try(Joi.lazy(() => schema.BrandOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  color: Joi.string(),
  colorSwatch: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
  consumerNotice: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.TextObjectOrSubClassJoiSchema), Joi.string().uri(), Joi.lazy(() => schema.WebContentOrSubClassJoiSchema)),
  countryOfAssembly: Joi.string(),
  countryOfLastProcessing: Joi.string(),
  countryOfOrigin: Joi.alternatives().try(Joi.lazy(() => schema.CountryOrSubClassJoiSchema), Joi.string().uri()),
  depth: Joi.alternatives().try(Joi.lazy(() => schema.DistanceOrSubClassJoiSchema), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  displayLocation: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
  funding: Joi.alternatives().try(Joi.lazy(() => schema.GrantOrSubClassJoiSchema), Joi.string().uri()),
  gtin: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
  gtin12: Joi.string(),
  gtin13: Joi.string(),
  gtin14: Joi.string(),
  gtin8: Joi.string(),
  hasAdultConsideration: Joi.lazy(() => schema.AdultOrientedEnumerationJoiSchema),
  hasCertification: Joi.alternatives().try(Joi.lazy(() => schema.CertificationOrSubClassJoiSchema), Joi.string().uri()),
  hasDigitalProductPassport: Joi.alternatives().try(Joi.lazy(() => schema.DigitalProductPassportOrSubClassJoiSchema), Joi.string().uri()),
  hasEnergyConsumptionDetails: Joi.alternatives().try(Joi.lazy(() => schema.EnergyConsumptionDetailsOrSubClassJoiSchema), Joi.string().uri()),
  hasGS1DigitalLink: Joi.string().uri(),
  hasMeasurement: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  hasMerchantReturnPolicy: Joi.alternatives().try(Joi.lazy(() => schema.MerchantReturnPolicyOrSubClassJoiSchema), Joi.string().uri()),
  hasProductReturnPolicy: Joi.alternatives().try(Joi.lazy(() => schema.ProductReturnPolicyOrSubClassJoiSchema), Joi.string().uri()),
  height: Joi.alternatives().try(Joi.lazy(() => schema.DistanceOrSubClassJoiSchema), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  importer: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  inProductGroupWithID: Joi.string(),
  isAccessoryOrSparePartFor: Joi.alternatives().try(Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.string().uri()),
  isConsumableFor: Joi.alternatives().try(Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.string().uri()),
  isFamilyFriendly: Joi.boolean(),
  isOftenBoughtWith: Joi.alternatives().try(Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.string().uri()),
  isRelatedTo: Joi.alternatives().try(Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.lazy(() => schema.ServiceOrSubClassJoiSchema), Joi.string().uri()),
  isSimilarTo: Joi.alternatives().try(Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.lazy(() => schema.ServiceOrSubClassJoiSchema), Joi.string().uri()),
  isVariantOf: Joi.alternatives().try(Joi.lazy(() => schema.ProductGroupOrSubClassJoiSchema), Joi.lazy(() => schema.ProductModelOrSubClassJoiSchema), Joi.string().uri()),
  itemCondition: Joi.lazy(() => schema.OfferItemConditionJoiSchema),
  keywords: Joi.alternatives().try(Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  logo: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
  manufacturer: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  material: Joi.alternatives().try(Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  mobileUrl: Joi.string(),
  model: Joi.alternatives().try(Joi.lazy(() => schema.ProductModelOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  mpn: Joi.string(),
  negativeNotes: Joi.alternatives().try(Joi.lazy(() => schema.ItemListOrSubClassJoiSchema), Joi.lazy(() => schema.ListItemOrSubClassJoiSchema), Joi.string(), Joi.lazy(() => schema.WebContentOrSubClassJoiSchema), Joi.string().uri()),
  nsn: Joi.string(),
  pattern: Joi.alternatives().try(Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  positiveNotes: Joi.alternatives().try(Joi.lazy(() => schema.ItemListOrSubClassJoiSchema), Joi.lazy(() => schema.ListItemOrSubClassJoiSchema), Joi.string(), Joi.lazy(() => schema.WebContentOrSubClassJoiSchema), Joi.string().uri()),
  productID: Joi.string(),
  productionDate: Joi.string().isoDate(),
  purchaseDate: Joi.string().isoDate(),
  recycledContentPercentage: Joi.number(),
  releaseDate: Joi.string().isoDate(),
  review: Joi.alternatives().try(Joi.lazy(() => schema.ReviewOrSubClassJoiSchema), Joi.string().uri()),
  reviews: Joi.alternatives().try(Joi.lazy(() => schema.ReviewOrSubClassJoiSchema), Joi.string().uri()),
  size: Joi.alternatives().try(Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.lazy(() => schema.SizeSpecificationOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  sku: Joi.string(),
  slogan: Joi.string(),
  specification: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri()),
  substanceOfConcern: Joi.alternatives().try(Joi.lazy(() => schema.ChemicalSubstanceOrSubClassJoiSchema), Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  weight: Joi.alternatives().try(Joi.lazy(() => schema.MassOrSubClassJoiSchema), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  width: Joi.alternatives().try(Joi.lazy(() => schema.DistanceOrSubClassJoiSchema), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  additionalType: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
  alternateName: Joi.string(),
  disambiguatingDescription: Joi.string(),
  mainEntityOfPage: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
  owner: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  potentialAction: Joi.alternatives().try(Joi.lazy(() => schema.ActionOrSubClassJoiSchema), Joi.string().uri()),
  sameAs: Joi.string().uri(),
  subjectOf: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.string().uri()),
});

/**
 * IndividualFacilityUse - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/Product, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from IndividualFacilityUseJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const IndividualFacilityUseOrSubClassJoiSchema = Joi.alternatives().try([
  IndividualFacilityUseJoiSchema,
]);

/**
 * Runtime validator for IndividualFacilityUse.
 *
 * If some data has a structure which matches a IndividualFacilityUse, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeIndividualFacilityUse = validateIndividualFacilityUse(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeIndividualFacilityUse instanceof OaValidationError) {
 *   // From this point on, `maybeIndividualFacilityUse` will have type `OaValidationError`
 *   const error = maybeIndividualFacilityUse;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeIndividualFacilityUse` will have type `IndividualFacilityUse`
 * const individualFacilityUse = maybeIndividualFacilityUse;
 * ```
 */
export function validateIndividualFacilityUse(maybeIndividualFacilityUse: unknown): IndividualFacilityUse | OaValidationError {
  const { value, error } = IndividualFacilityUseJoiSchema.validate(maybeIndividualFacilityUse);
  if (error) {
    return new OaValidationError('IndividualFacilityUse', maybeIndividualFacilityUse, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as IndividualFacilityUse;
}
