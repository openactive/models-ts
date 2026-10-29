// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * Offer
 *
 * This type is derived from https://schema.org/Offer, which means that any of this type's properties within schema.org may also be used.
 */
export type Offer = {
  '@type': 'Offer';
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
   * The name of the Offer suitable for communication to participants.
   *
   * ```json
   * "name": "Speedball winger position"
   * ```
   */
  name?: string;
  /**
   * A plain text description of the Offer, which must not include HTML or other markup.
   *
   * ```json
   * "description": "Concession requirements are available at https://www.fusion-lifestyle.com/. Proof of entitlement to concession membership must be provided when you visit the centre."
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
   * Indicates the offline payment methods accepted by this provider.
   *
   * ```json
   * "acceptedPaymentMethod": [
   *   "http://purl.org/goodrelations/v1#Cash",
   *   "http://purl.org/goodrelations/v1#PaymentMethodCreditCard"
   * ]
   * ```
   */
  acceptedPaymentMethod?: oa.PaymentMethod[];
  /**
   * [DEPRECATED: Use `ageRestriction` instead of `ageRange` within the `Offer` for cases where the `Offer` is age restricted.]
   * Indicates that an Offer is only applicable to a specific age range.
   */
  ageRange?: oa.QuantitativeValueOrSubClass;
  /**
   * Indicates that an Offer can only be purchased by participants within a specific age range. Specified as a QuantitativeValue with minValue and maxValue properties. This must be displayed prominently to the user when selecting an `Offer` or before booking.
   *
   * ```json
   * "ageRestriction": {
   *   "@type": "QuantitativeValue",
   *   "minValue": 15,
   *   "maxValue": 60
   * }
   * ```
   */
  ageRestriction?: oa.QuantitativeValueOrSubClass;
  /**
   * Whether the opportunity can be cancelled with a full refund at any time before the `startDate`, or before the `latestCancellationBeforeStartDate` if provided.
   */
  allowCustomerCancellationFullRefund?: boolean;
  /**
   * Offers in open data can be marked as requiring an entitlement type via `eligibleEntitlementType`. The same Offer may be applicable to multiple entitlement types, and the Customer must have at least one matching entitlement type to qualify for the Offer.
   * Note that this property is in EARLY RELEASE AND IS SUBJECT TO CHANGE, as the [Customer Accounts proposal](https://github.com/openactive/customer-accounts) evolves.
   *
   * ```json
   * "eligibleEntitlementType": [
   *   {
   *     "@type": "Concept",
   *     "@id": "https://data.mcractive.com/openactive/entitlement-list#5e78bcbe-36db-425a-9064-bf96d09cc351",
   *     "prefLabel": "MCRactive Adult Resident",
   *     "inScheme": "https://data.mcractive.com/openactive/entitlement-list"
   *   }
   * ]
   * ```
   */
  eligibleEntitlementType?: oa.ConceptOrSubClass[];
  /**
   * The duration before the startDate during which this Offer may not be cancelled, given in ISO 8601 format.
   */
  latestCancellationBeforeStartDate?: string;
  /**
   * Can include  https://openactive.io/OpenBookingIntakeForm,  https://openactive.io/OpenBookingAttendeeDetails,  https://openactive.io/OpenBookingApproval,  https://openactive.io/OpenBookingNegotiation,  https://openactive.io/OpenBookingMessageExchange
   */
  openBookingFlowRequirement?: oa.OpenBookingFlowRequirement[];
  /**
   * Indicates whether to accept this offer, a participant must book in advance, whether they must pay on attending, or have option to do either. Values must be one of  https://openactive.io/Required,  https://openactive.io/Optional or  https://openactive.io/Unavailable.
   *
   * ```json
   * "openBookingInAdvance": "https://openactive.io/Required"
   * ```
   */
  openBookingInAdvance?: oa.RequiredStatusType;
  /**
   * Indicates whether to accept this offer, a participant must pay in advance, pay when attending, or have the option to do either. Values must be one of  https://openactive.io/Required,  https://openactive.io/Optional or  https://openactive.io/Unavailable.
   *
   * ```json
   * "openBookingPrepayment": "https://openactive.io/Required"
   * ```
   */
  openBookingPrepayment?: oa.RequiredStatusType;
  /**
   * The offer price of the activity.
   * This price should be specified without currency symbols and as a floating point number with two decimal places.
   * The currency of the price should be expressed in the priceCurrency field.
   * Includes or excludes tax depending on the taxMode of the seller.
   *
   * ```json
   * "price": "33"
   * ```
   */
  price?: number;
  /**
   * The currency of the price. Specified as a 3-letter ISO 4217 value. If an Offer has a zero price, then this property is not required. Otherwise the priceCurrency must be specified.
   *
   * ```json
   * "priceCurrency": "GBP"
   * ```
   */
  priceCurrency?: string;
  /**
   * URL describing the offer
   *
   * ```json
   * "url": "http://www.rphs.org.uk/"
   * ```
   */
  url?: string;
  /**
   * The duration before the `startDate` for which this `Offer` is valid, given in ISO 8601 format. This is a relatively-defined equivalent of `schema:validFrom`, to allow for `Offer` inheritance.
   */
  validFromBeforeStartDate?: string;
  /**
   * The duration before the `startDate` after which the `Offer` is no longer valid, given in ISO 8601 format. This is a relatively-defined equivalent of `schema:validThrough`, to allow for `Offer` inheritance.
   */
  validThroughBeforeStartDate?: string;
  /**
   * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
   * Number of people the reservation should accommodate.
   * 
   * If you are using this property, please join the discussion at proposal [#250](https://github.com/openactive/modelling-opportunity-data/issues/250).
   */
  'beta:partySize'?: oa.QuantitativeValueOrSubClass;
  /**
   * An additional offer that can only be obtained in combination with the first base offer (e.g. supplements and extensions that are available for a surcharge).
   */
  addOn?: schema.OfferOrSubClass | string;
  /**
   * A property-value pair representing an additional characteristic of the entity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.\n\nNote: Publishers should be aware that applications designed to use specific schema.org properties (e.g. https://schema.org/width, https://schema.org/color, https://schema.org/gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.
   * 
   */
  additionalProperty?: schema.PropertyValueOrSubClass | string;
  /**
   * The amount of time that is required between accepting the offer and the actual usage of the resource or service.
   */
  advanceBookingRequirement?: schema.QuantitativeValueOrSubClass | string;
  /**
   * The overall rating, based on a collection of reviews or ratings, of the item.
   */
  aggregateRating?: schema.AggregateRatingOrSubClass | string;
  /**
   * The geographic area where a service or offered item is provided.
   */
  areaServed?: schema.AdministrativeAreaOrSubClass | schema.GeoShapeOrSubClass | schema.PlaceOrSubClass | string;
  /**
   * An Amazon Standard Identification Number (ASIN) is a 10-character alphanumeric unique identifier assigned by Amazon.com and its partners for product identification within the Amazon organization (summary from [Wikipedia](https://en.wikipedia.org/wiki/Amazon_Standard_Identification_Number)'s article).
   * 
   * Note also that this is a definition for how to include ASINs in Schema.org data, and not a definition of ASINs in general - see documentation from Amazon for authoritative details.
   * ASINs are most commonly encoded as text strings, but the [asin] property supports URL/URI as potential values too.
   */
  asin?: string;
  /**
   * The availability of this item&#x2014;for example In stock, Out of stock, Pre-order, etc.
   */
  availability?: schema.ItemAvailability;
  /**
   * The end of the availability of the product or service included in the offer.
   */
  availabilityEnds?: string;
  /**
   * The beginning of the availability of the product or service included in the offer.
   */
  availabilityStarts?: string;
  /**
   * The place(s) from which the offer can be obtained (e.g. store locations).
   */
  availableAtOrFrom?: schema.PlaceOrSubClass | string;
  /**
   * The delivery method(s) available for this offer.
   */
  availableDeliveryMethod?: schema.DeliveryMethod;
  /**
   * The business function (e.g. sell, lease, repair, dispose) of the offer or component of a bundle (TypeAndQuantityNode). The default is http://purl.org/goodrelations/v1#Sell.
   */
  businessFunction?: schema.BusinessFunction;
  /**
   * A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.
   */
  category?: schema.CategoryCodeOrSubClass | schema.PhysicalActivityCategory | string | schema.ThingOrSubClass;
  /**
   * A URL template (RFC 6570) for a checkout page for an offer. This approach allows merchants to specify a URL for online checkout of the offered product, by interpolating parameters such as the logged in user ID, product ID, quantity, discount code etc. Parameter naming and standardization are not specified here.
   */
  checkoutPageURLTemplate?: string;
  /**
   * The typical delay between the receipt of the order and the goods either leaving the warehouse or being prepared for pickup, in case the delivery method is on site pickup.
   */
  deliveryLeadTime?: schema.QuantitativeValueOrSubClass | string;
  /**
   * The type(s) of customers for which the given offer is valid.
   */
  eligibleCustomerType?: schema.BusinessEntityType;
  /**
   * The duration for which the given offer is valid.
   */
  eligibleDuration?: schema.QuantitativeValueOrSubClass | string;
  /**
   * The interval and unit of measurement of ordering quantities for which the offer or price specification is valid. This allows e.g. specifying that a certain freight charge is valid only for a certain quantity.
   */
  eligibleQuantity?: schema.QuantitativeValueOrSubClass | string;
  /**
   * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is valid.\n\nSee also [[ineligibleRegion]].
   *     
   */
  eligibleRegion?: schema.GeoShapeOrSubClass | schema.PlaceOrSubClass | string;
  /**
   * The transaction volume, in a monetary unit, for which the offer or price specification is valid, e.g. for indicating a minimal purchasing volume, to express free shipping above a certain order volume, or to limit the acceptance of credit cards to purchases to a certain minimal amount.
   */
  eligibleTransactionVolume?: schema.PriceSpecificationOrSubClass | string;
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
   * A link to a Digital Product Passport (DPP) or a digital record detailing the lifecycle, sustainability, and compliance data for this product or offer. This may be a direct URL, a GS1 Digital Link URI, or a nested DigitalProductPassport object. Note: This property is aligned with the IANA 'dpp' link relation and the GS1 Web Vocabulary 'dpp' link type.
   */
  hasDigitalProductPassport?: schema.DigitalProductPassportOrSubClass | string;
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
   * This links to a node or nodes indicating the exact quantity of the products included in  an [[Offer]] or [[ProductCollection]].
   */
  includesObject?: schema.TypeAndQuantityNodeOrSubClass | string;
  /**
   * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is not valid, e.g. a region where the transaction is not allowed.\n\nSee also [[eligibleRegion]].
   *       
   */
  ineligibleRegion?: schema.GeoShapeOrSubClass | schema.PlaceOrSubClass | string;
  /**
   * The current approximate inventory level for the item or items.
   */
  inventoryLevel?: schema.QuantitativeValueOrSubClass | string;
  /**
   * Indicates whether this content is family friendly.
   */
  isFamilyFriendly?: boolean;
  /**
   * A predefined value from OfferItemCondition specifying the condition of the product or service, or the products or services included in the offer. Also used for product return policies to specify the condition of products accepted for returns.
   */
  itemCondition?: schema.OfferItemCondition;
  /**
   * An item being offered (or demanded). The transactional nature of the offer or demand is documented using [[businessFunction]], e.g. sell, lease etc. While several common expected types are listed explicitly in this definition, others can be used. Using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
   */
  itemOffered?: schema.AggregateOfferOrSubClass | schema.CreativeWorkOrSubClass | schema.Event_OrSubClass | schema.MenuItemOrSubClass | schema.ProductOrSubClass | schema.ServiceOrSubClass | schema.TripOrSubClass | string;
  /**
   * A measure of the relative popularity or sales rank of the offer within a marketplace, catalog, or platform (e.g. a platform-specific bestseller ranking or sales rank). This property is intended for platform-level or catalog-wide comparative rankings rather than self-asserted promotional claims.
   */
  itemPopularity?: number | schema.QuantitativeValueOrSubClass | string;
  /**
   * Length of the lease for some [[Accommodation]], either particular to some [[Offer]] or in some cases intrinsic to the property.
   */
  leaseLength?: string | schema.QuantitativeValueOrSubClass;
  /**
   * The [[mobileUrl]] property is provided for specific situations in which data consumers need to determine whether one of several provided URLs is a dedicated 'mobile site'.
   * 
   * To discourage over-use, and reflecting intial usecases, the property is expected only on [[Product]] and [[Offer]], rather than [[Thing]]. The general trend in web technology is towards [responsive design](https://en.wikipedia.org/wiki/Responsive_web_design) in which content can be flexibly adapted to a wide range of browsing environments. Pages and sites referenced with the long-established [[url]] property should ideally also be usable on a wide variety of devices, including mobile phones. In most cases, it would be pointless and counter productive to attempt to update all [[url]] markup to use [[mobileUrl]] for more mobile-oriented pages. The property is intended for the case when items (primarily [[Product]] and [[Offer]]) have extra URLs hosted on an additional "mobile site" alongside the main one. It should not be taken as an endorsement of this publication style.
   *     
   */
  mobileUrl?: string;
  /**
   * The Manufacturer Part Number (MPN) of the product, or the product to which the offer refers.
   */
  mpn?: string;
  /**
   * A pointer to the organization or person making the offer.
   */
  offeredBy?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
  /**
   * One or more detailed price specifications, indicating the unit price and delivery or payment charges.
   */
  priceSpecification?: schema.PriceSpecificationOrSubClass | string;
  /**
   * The date after which the price is no longer available.
   */
  priceValidUntil?: string;
  /**
   * A review of the item.
   */
  review?: schema.ReviewOrSubClass | string;
  /**
   * Review of the item.
   */
  reviews?: schema.ReviewOrSubClass | string;
  /**
   * An entity which offers (sells / leases / lends / loans) the services / goods.  A seller may also be a provider.
   */
  seller?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
  /**
   * The serial number or any alphanumeric identifier of a particular product. When attached to an offer, it is a shortcut for the serial number of the product included in the offer.
   */
  serialNumber?: string;
  /**
   * Indicates information about the shipping policies and options associated with an [[Offer]].
   */
  shippingDetails?: schema.OfferShippingDetailsOrSubClass | string;
  /**
   * The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers.
   */
  sku?: string;
  /**
   * The membership program tier(s) an Offer (or a PriceSpecification, OfferShippingDetails, or MerchantReturnPolicy under an Offer) is valid for.
   */
  validForMemberTier?: schema.MemberProgramTierOrSubClass | string;
  /**
   * The date when the item becomes valid.
   */
  validFrom?: string;
  /**
   * The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours.
   */
  validThrough?: string;
  /**
   * The warranty promise(s) included in the offer.
   */
  warranty?: schema.WarrantyPromiseOrSubClass | string;
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
   * An image of the item. This can be a [[URL]] or a fully described [[ImageObject]].
   */
  image?: schema.ImageObjectOrSubClass | string;
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
 * Offer
 *
 * This type is derived from https://schema.org/Offer, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from Offer because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type OfferOrSubClass =
  | Offer
  | oa.OfferOverrideOrSubClass
  | oa.IndicativeOfferOrSubClass
  ;

/**
 * Offer - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/Offer, which means that any of this type's properties within schema.org may also be used.
 */
export const OfferJoiSchema = Joi.object({
  '@type': Joi.string().valid('Offer').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  identifier: Joi.alternatives().try(Joi.number().integer(), Joi.string(), Joi.lazy(() => oa.PropertyValueOrSubClassJoiSchema), Joi.array().items(Joi.lazy(() => oa.PropertyValueOrSubClassJoiSchema))),
  name: Joi.string(),
  description: Joi.string(),
  '@id': Joi.string().uri(),
  acceptedPaymentMethod: Joi.array().items(Joi.lazy(() => oa.PaymentMethodJoiSchema)),
  ageRange: Joi.lazy(() => oa.QuantitativeValueOrSubClassJoiSchema),
  ageRestriction: Joi.lazy(() => oa.QuantitativeValueOrSubClassJoiSchema),
  allowCustomerCancellationFullRefund: Joi.boolean(),
  eligibleEntitlementType: Joi.array().items(Joi.lazy(() => oa.ConceptOrSubClassJoiSchema)),
  latestCancellationBeforeStartDate: Joi.string(),
  openBookingFlowRequirement: Joi.array().items(Joi.lazy(() => oa.OpenBookingFlowRequirementJoiSchema)),
  openBookingInAdvance: Joi.lazy(() => oa.RequiredStatusTypeJoiSchema),
  openBookingPrepayment: Joi.lazy(() => oa.RequiredStatusTypeJoiSchema),
  price: Joi.number(),
  priceCurrency: Joi.string(),
  url: Joi.string().uri(),
  validFromBeforeStartDate: Joi.string(),
  validThroughBeforeStartDate: Joi.string(),
  'beta:partySize': Joi.lazy(() => oa.QuantitativeValueOrSubClassJoiSchema),
  addOn: Joi.alternatives().try(Joi.lazy(() => schema.OfferOrSubClassJoiSchema), Joi.string().uri()),
  additionalProperty: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri()),
  advanceBookingRequirement: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  aggregateRating: Joi.alternatives().try(Joi.lazy(() => schema.AggregateRatingOrSubClassJoiSchema), Joi.string().uri()),
  areaServed: Joi.alternatives().try(Joi.lazy(() => schema.AdministrativeAreaOrSubClassJoiSchema), Joi.lazy(() => schema.GeoShapeOrSubClassJoiSchema), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  asin: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
  availability: Joi.lazy(() => schema.ItemAvailabilityJoiSchema),
  availabilityEnds: Joi.alternatives().try(Joi.string().isoDate(), Joi.string()),
  availabilityStarts: Joi.alternatives().try(Joi.string().isoDate(), Joi.string()),
  availableAtOrFrom: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
  availableDeliveryMethod: Joi.lazy(() => schema.DeliveryMethodJoiSchema),
  businessFunction: Joi.lazy(() => schema.BusinessFunctionJoiSchema),
  category: Joi.alternatives().try(Joi.lazy(() => schema.CategoryCodeOrSubClassJoiSchema), Joi.lazy(() => schema.PhysicalActivityCategoryJoiSchema), Joi.string(), Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
  checkoutPageURLTemplate: Joi.string(),
  deliveryLeadTime: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  eligibleCustomerType: Joi.lazy(() => schema.BusinessEntityTypeJoiSchema),
  eligibleDuration: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  eligibleQuantity: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  eligibleRegion: Joi.alternatives().try(Joi.lazy(() => schema.GeoShapeOrSubClassJoiSchema), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  eligibleTransactionVolume: Joi.alternatives().try(Joi.lazy(() => schema.PriceSpecificationOrSubClassJoiSchema), Joi.string().uri()),
  gtin: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
  gtin12: Joi.string(),
  gtin13: Joi.string(),
  gtin14: Joi.string(),
  gtin8: Joi.string(),
  hasAdultConsideration: Joi.lazy(() => schema.AdultOrientedEnumerationJoiSchema),
  hasDigitalProductPassport: Joi.alternatives().try(Joi.lazy(() => schema.DigitalProductPassportOrSubClassJoiSchema), Joi.string().uri()),
  hasGS1DigitalLink: Joi.string().uri(),
  hasMeasurement: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  hasMerchantReturnPolicy: Joi.alternatives().try(Joi.lazy(() => schema.MerchantReturnPolicyOrSubClassJoiSchema), Joi.string().uri()),
  includesObject: Joi.alternatives().try(Joi.lazy(() => schema.TypeAndQuantityNodeOrSubClassJoiSchema), Joi.string().uri()),
  ineligibleRegion: Joi.alternatives().try(Joi.lazy(() => schema.GeoShapeOrSubClassJoiSchema), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  inventoryLevel: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  isFamilyFriendly: Joi.boolean(),
  itemCondition: Joi.lazy(() => schema.OfferItemConditionJoiSchema),
  itemOffered: Joi.alternatives().try(Joi.lazy(() => schema.AggregateOfferOrSubClassJoiSchema), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.lazy(() => schema.MenuItemOrSubClassJoiSchema), Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.lazy(() => schema.ServiceOrSubClassJoiSchema), Joi.lazy(() => schema.TripOrSubClassJoiSchema), Joi.string().uri()),
  itemPopularity: Joi.alternatives().try(Joi.number(), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  leaseLength: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  mobileUrl: Joi.string(),
  mpn: Joi.string(),
  offeredBy: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  priceSpecification: Joi.alternatives().try(Joi.lazy(() => schema.PriceSpecificationOrSubClassJoiSchema), Joi.string().uri()),
  priceValidUntil: Joi.string().isoDate(),
  review: Joi.alternatives().try(Joi.lazy(() => schema.ReviewOrSubClassJoiSchema), Joi.string().uri()),
  reviews: Joi.alternatives().try(Joi.lazy(() => schema.ReviewOrSubClassJoiSchema), Joi.string().uri()),
  seller: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  serialNumber: Joi.string(),
  shippingDetails: Joi.alternatives().try(Joi.lazy(() => schema.OfferShippingDetailsOrSubClassJoiSchema), Joi.string().uri()),
  sku: Joi.string(),
  validForMemberTier: Joi.alternatives().try(Joi.lazy(() => schema.MemberProgramTierOrSubClassJoiSchema), Joi.string().uri()),
  validFrom: Joi.string().isoDate(),
  validThrough: Joi.string().isoDate(),
  warranty: Joi.alternatives().try(Joi.lazy(() => schema.WarrantyPromiseOrSubClassJoiSchema), Joi.string().uri()),
  additionalType: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
  alternateName: Joi.string(),
  disambiguatingDescription: Joi.string(),
  image: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
  mainEntityOfPage: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
  owner: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  potentialAction: Joi.alternatives().try(Joi.lazy(() => schema.ActionOrSubClassJoiSchema), Joi.string().uri()),
  sameAs: Joi.string().uri(),
  subjectOf: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.string().uri()),
});

/**
 * Offer - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/Offer, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from OfferJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const OfferOrSubClassJoiSchema = Joi.alternatives().try([
  OfferJoiSchema,
  Joi.lazy(() => oa.OfferOverrideOrSubClassJoiSchema),
  Joi.lazy(() => oa.IndicativeOfferOrSubClassJoiSchema),
]);

/**
 * Runtime validator for Offer.
 *
 * If some data has a structure which matches a Offer, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeOffer = validateOffer(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeOffer instanceof OaValidationError) {
 *   // From this point on, `maybeOffer` will have type `OaValidationError`
 *   const error = maybeOffer;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeOffer` will have type `Offer`
 * const offer = maybeOffer;
 * ```
 */
export function validateOffer(maybeOffer: unknown): Offer | OaValidationError {
  const { value, error } = OfferJoiSchema.validate(maybeOffer);
  if (error) {
    return new OaValidationError('Offer', maybeOffer, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as Offer;
}
