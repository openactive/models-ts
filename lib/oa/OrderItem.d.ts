import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';
/**
 * OrderItem
 *
 * This type is derived from https://schema.org/OrderItem, which means that any of this type's properties within schema.org may also be used.
 */
export declare type OrderItem = {
    '@type': 'OrderItem';
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
     * A unique URI-based identifier for the record.
     * `@id` properties are used as identifiers for compatibility with JSON-LD. The value of such a property must always be an absolute URI that provides a stable globally unique identifier for the resource, as described in [RFC3986](https://tools.ietf.org/html/rfc3986).
     * The primary purpose of the URI format in this context is to provide natural namespacing for the identifier. Hence, the URI itself may not resolve to a valid endpoint, but must use a domain name controlled by the resource owner (the organisation responsible for the OpenActive open data feed).
     */
    '@id'?: string;
    /**
     * The offer from the associated orderedItem that has been selected by the Customer. The price of this includes or excludes tax depending on the taxMode of the Order.
     */
    acceptedOffer?: oa.OfferOrSubClass | string;
    /**
     * Channel through which the user can participate in the Opportunity. Not applicable for an OrderQuote.
     */
    accessChannel?: oa.VirtualLocationOrSubClass;
    /**
     * PropertyValue that contains a text value usable for entrance. Not applicable for an  OrderQuote.
     */
    accessCode?: oa.PropertyValueOrSubClass[];
    /**
     * ImageObject or Barcode that contains reference to an asset (e.g. Barcode, QR code image or PDF) usable for entrance. Not applicable for an OrderQuote.
     */
    accessPass?: oa.ImageObjectOrSubClass[];
    /**
     * The person attending the Opportunity related to the OrderItem.
     */
    attendee?: oa.PersonOrSubClass;
    /**
     * The properties of `schema:Person` that are required to describe an `attendee` for this `OrderItem`.
     */
    attendeeDetailsRequired?: oa.PropertyEnumeration[];
    /**
     * A message set by the Seller in the event of Opportunity cancellation, only applicable for an  `Order` and where the `OrderItem` has `orderItemStatus` set to `https://openactive.io/SellerCancelled`
     */
    cancellationMessage?: string;
    /**
     * A message set by the Seller to trigger a notification to the Customer, only applicable for an `Order` and where the `OrderItem` has `orderItemStatus` set to  `https://openactive.io/OrderItemConfirmed` or `https://openactive.io/CustomerAttended`
     */
    customerNotice?: string;
    /**
     * Array of errors related to the OrderItem being included in the Order, only applicable for an  OrderQuote.
     */
    error?: oa.OpenBookingErrorOrSubClass[];
    /**
     * The specific bookable Thing that has been selected by the Customer. See the [Modelling-Opportunity-Data] for more information on these types. Note that the Broker Request and Orders feed only require id within these objects to be included; in these contexts, all other properties are ignored.
     */
    orderedItem?: oa.Event_OrSubClass | string;
    /**
     * PropertyValueSpecifications that describe fields in the orderItemIntakeForm.
     */
    orderItemIntakeForm?: oa.PropertyValueSpecificationOrSubClass[];
    /**
     * PropertyValues that contains a text value responses to the orderItemIntakeForm.
     */
    orderItemIntakeFormResponse?: oa.PropertyValueOrSubClass[];
    orderItemStatus?: oa.OrderItemStatus;
    /**
     * An integer representing the order of OrderItems within the array.
     */
    position?: number;
    /**
     * Breakdown of tax payable for the OrderItem.
     */
    unitTaxSpecification?: oa.TaxChargeSpecificationOrSubClass[];
    /**
     * The delivery of the parcel related to this order or order item.
     */
    orderDelivery?: schema.ParcelDeliveryOrSubClass | string;
    /**
     * The number of the item ordered. If the property is not set, assume the quantity is one.
     */
    orderQuantity?: number;
    /**
     * The identifier of the order item.
     */
    orderItemNumber?: string;
    /**
     * Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See [background notes](/docs/datamodel.html#mainEntityBackground) for details.
     */
    mainEntityOfPage?: string | schema.CreativeWorkOrSubClass;
    /**
     * An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the 'typeof' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.
     */
    additionalType?: string;
    /**
     * URL of the item.
     */
    url?: string;
    /**
     * An alias for the item.
     */
    alternateName?: string;
    /**
     * URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website.
     */
    sameAs?: string;
    /**
     * Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role.
     */
    potentialAction?: schema.ActionOrSubClass | string;
    /**
     * A CreativeWork or Event about this Thing.
     */
    subjectOf?: schema.Event_OrSubClass | schema.CreativeWorkOrSubClass | string;
    /**
     * A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.
     */
    disambiguatingDescription?: string;
    /**
     * An image of the item. This can be a [[URL]] or a fully described [[ImageObject]].
     */
    image?: schema.ImageObjectOrSubClass | string;
};
/**
 * OrderItem
 *
 * This type is derived from https://schema.org/OrderItem, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from OrderItem because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type OrderItemOrSubClass = OrderItem;
/**
 * OrderItem - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/OrderItem, which means that any of this type's properties within schema.org may also be used.
 */
export declare const OrderItemJoiSchema: Joi.ObjectSchema;
/**
 * OrderItem - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/OrderItem, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from OrderItemJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const OrderItemOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for OrderItem.
 *
 * If some data has a structure which matches a OrderItem, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeOrderItem = validateOrderItem(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeOrderItem instanceof OaValidationError) {
 *   // From this point on, `maybeOrderItem` will have type `OaValidationError`
 *   const error = maybeOrderItem;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeOrderItem` will have type `OrderItem`
 * const orderItem = maybeOrderItem;
 * ```
 */
export declare function validateOrderItem(maybeOrderItem: unknown): OrderItem | OaValidationError;
