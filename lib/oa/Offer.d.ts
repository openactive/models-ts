import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';
/**
 * Offer
 *
 * This type is derived from https://schema.org/Offer, which means that any of this type's properties within schema.org may also be used.
 */
export declare type Offer = {
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
     * A unique url based identifier for the record
     *
     * ```json
     * "@id": "https://example.com/offer/12345"
     * ```
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
     * The duration before the startDate for which this Offer is valid, given in ISO 8601 format. This is a relatively-defined equivalent of schema:validFrom, to allow for Offer inheritance.
     */
    validFromBeforeStartDate?: string;
    /**
     * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
     * Number of people the reservation should accommodate.
     *
     * If you are using this property, please join the discussion at proposal [#250](https://github.com/openactive/modelling-opportunity-data/issues/250).
     */
    'beta:partySize'?: oa.QuantitativeValueOrSubClass;
    /**
     * The delivery method(s) available for this offer.
     */
    availableDeliveryMethod?: schema.DeliveryMethod;
    /**
     * A product measurement, for example the inseam of pants, the wheel size of a bicycle, or the gauge of a screw. Usually an exact measurement, but can also be a range of measurements for adjustable products, for example belts and ski bindings.
     */
    hasMeasurement?: schema.QuantitativeValueOrSubClass | string;
    /**
     * A predefined value from OfferItemCondition or a textual description of the condition of the product or service, or the products or services included in the offer.
     */
    itemCondition?: schema.OfferItemCondition;
    /**
     * The date when the item becomes valid.
     */
    validFrom?: string;
    /**
     * The overall rating, based on a collection of reviews or ratings, of the item.
     */
    aggregateRating?: schema.AggregateRatingOrSubClass | string;
    /**
     * An additional offer that can only be obtained in combination with the first base offer (e.g. supplements and extensions that are available for a surcharge).
     */
    addOn?: schema.OfferOrSubClass | string;
    /**
     * An entity which offers (sells / leases / lends / loans) the services / goods.  A seller may also be a provider.
     */
    seller?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
    /**
     * The GTIN-12 code of the product, or the product to which the offer refers. The GTIN-12 is the 12-digit GS1 Identification Key composed of a U.P.C. Company Prefix, Item Reference, and Check Digit used to identify trade items. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
     */
    gtin12?: string;
    /**
     * Length of the lease for some [[Accommodation]], either particular to some [[Offer]] or in some cases intrinsic to the property.
     */
    leaseLength?: string | schema.QuantitativeValueOrSubClass;
    /**
     * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is valid.\n\nSee also [[ineligibleRegion]].
     *
     */
    eligibleRegion?: string | schema.GeoShapeOrSubClass | schema.PlaceOrSubClass;
    /**
     * The warranty promise(s) included in the offer.
     */
    warranty?: schema.WarrantyPromiseOrSubClass | string;
    /**
     * The end of the availability of the product or service included in the offer.
     */
    availabilityEnds?: string;
    /**
     * The typical delay between the receipt of the order and the goods either leaving the warehouse or being prepared for pickup, in case the delivery method is on site pickup.
     */
    deliveryLeadTime?: schema.QuantitativeValueOrSubClass | string;
    /**
     * The duration for which the given offer is valid.
     */
    eligibleDuration?: schema.QuantitativeValueOrSubClass | string;
    /**
     * The beginning of the availability of the product or service included in the offer.
     */
    availabilityStarts?: string;
    /**
     * The serial number or any alphanumeric identifier of a particular product. When attached to an offer, it is a shortcut for the serial number of the product included in the offer.
     */
    serialNumber?: string;
    /**
     * Review of the item.
     */
    reviews?: schema.ReviewOrSubClass | string;
    /**
     * One or more detailed price specifications, indicating the unit price and delivery or payment charges.
     */
    priceSpecification?: schema.PriceSpecificationOrSubClass | string;
    /**
     * The transaction volume, in a monetary unit, for which the offer or price specification is valid, e.g. for indicating a minimal purchasing volume, to express free shipping above a certain order volume, or to limit the acceptance of credit cards to purchases to a certain minimal amount.
     */
    eligibleTransactionVolume?: schema.PriceSpecificationOrSubClass | string;
    /**
     * The GTIN-13 code of the product, or the product to which the offer refers. This is equivalent to 13-digit ISBN codes and EAN UCC-13. Former 12-digit UPC codes can be converted into a GTIN-13 code by simply adding a preceding zero. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
     */
    gtin13?: string;
    /**
     * A Global Trade Item Number ([GTIN](https://www.gs1.org/standards/id-keys/gtin)). GTINs identify trade items, including products and services, using numeric identification codes. The [[gtin]] property generalizes the earlier [[gtin8]], [[gtin12]], [[gtin13]], and [[gtin14]] properties. The GS1 [digital link specifications](https://www.gs1.org/standards/Digital-Link/) express GTINs as URLs. A correct [[gtin]] value should be a valid GTIN, which means that it should be an all-numeric string of either 8, 12, 13 or 14 digits, or a "GS1 Digital Link" URL based on such a string. The numeric component should also have a [valid GS1 check digit](https://www.gs1.org/services/check-digit-calculator) and meet the other rules for valid GTINs. See also [GS1's GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) and [Wikipedia](https://en.wikipedia.org/wiki/Global_Trade_Item_Number) for more details. Left-padding of the gtin values is not required or encouraged.
     *
     */
    gtin?: string;
    /**
     * A review of the item.
     */
    review?: schema.ReviewOrSubClass | string;
    /**
     * The geographic area where a service or offered item is provided.
     */
    areaServed?: string | schema.PlaceOrSubClass | schema.AdministrativeAreaOrSubClass | schema.GeoShapeOrSubClass;
    /**
     * The amount of time that is required between accepting the offer and the actual usage of the resource or service.
     */
    advanceBookingRequirement?: schema.QuantitativeValueOrSubClass | string;
    /**
     * An item being offered (or demanded). The transactional nature of the offer or demand is documented using [[businessFunction]], e.g. sell, lease etc. While several common expected types are listed explicitly in this definition, others can be used. Using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
     */
    itemOffered?: schema.TripOrSubClass | schema.ProductOrSubClass | schema.MenuItemOrSubClass | schema.ServiceOrSubClass | schema.Event_OrSubClass | schema.CreativeWorkOrSubClass | schema.AggregateOfferOrSubClass | string;
    /**
     * The current approximate inventory level for the item or items.
     */
    inventoryLevel?: schema.QuantitativeValueOrSubClass | string;
    /**
     * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is not valid, e.g. a region where the transaction is not allowed.\n\nSee also [[eligibleRegion]].
     *
     */
    ineligibleRegion?: schema.GeoShapeOrSubClass | string | schema.PlaceOrSubClass;
    /**
     * The Manufacturer Part Number (MPN) of the product, or the product to which the offer refers.
     */
    mpn?: string;
    /**
     * This links to a node or nodes indicating the exact quantity of the products included in  an [[Offer]] or [[ProductCollection]].
     */
    includesObject?: schema.TypeAndQuantityNodeOrSubClass | string;
    /**
     * A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.
     */
    category?: schema.PhysicalActivityCategory | string | schema.ThingOrSubClass;
    /**
     * The availability of this item&#x2014;for example In stock, Out of stock, Pre-order, etc.
     */
    availability?: schema.ItemAvailability;
    /**
     * The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers.
     */
    sku?: string;
    /**
     * The type(s) of customers for which the given offer is valid.
     */
    eligibleCustomerType?: schema.BusinessEntityType;
    /**
     * The date after which the price is no longer available.
     */
    priceValidUntil?: string;
    /**
     * A pointer to the organization or person making the offer.
     */
    offeredBy?: schema.PersonOrSubClass | schema.OrganizationOrSubClass | string;
    /**
     * The GTIN-14 code of the product, or the product to which the offer refers. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
     */
    gtin14?: string;
    /**
     * The interval and unit of measurement of ordering quantities for which the offer or price specification is valid. This allows e.g. specifying that a certain freight charge is valid only for a certain quantity.
     */
    eligibleQuantity?: schema.QuantitativeValueOrSubClass | string;
    /**
     * The place(s) from which the offer can be obtained (e.g. store locations).
     */
    availableAtOrFrom?: schema.PlaceOrSubClass | string;
    /**
     * Indicates information about the shipping policies and options associated with an [[Offer]].
     */
    shippingDetails?: schema.OfferShippingDetailsOrSubClass | string;
    /**
     * The GTIN-8 code of the product, or the product to which the offer refers. This code is also known as EAN/UCC-8 or 8-digit EAN. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
     */
    gtin8?: string;
    /**
     * The business function (e.g. sell, lease, repair, dispose) of the offer or component of a bundle (TypeAndQuantityNode). The default is http://purl.org/goodrelations/v1#Sell.
     */
    businessFunction?: schema.BusinessFunction;
    /**
     * The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours.
     */
    validThrough?: string;
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
     * An image of the item. This can be a [[URL]] or a fully described [[ImageObject]].
     */
    image?: schema.ImageObjectOrSubClass | string;
    /**
     * A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.
     */
    disambiguatingDescription?: string;
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
export declare type OfferOrSubClass = Offer | oa.OfferOverrideOrSubClass | oa.IndicativeOfferOrSubClass;
/**
 * Offer - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/Offer, which means that any of this type's properties within schema.org may also be used.
 */
export declare const OfferJoiSchema: Joi.ObjectSchema;
/**
 * Offer - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/Offer, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from OfferJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const OfferOrSubClassJoiSchema: Joi.AlternativesSchema;
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
export declare function validateOffer(maybeOffer: unknown): Offer | OaValidationError;
