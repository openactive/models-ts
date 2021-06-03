import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as schema from '../schema';
/**
 * schema:Order
 */
export declare type Order = {
    '@type': 'Order';
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
     * Was the offer accepted as a gift for someone other than the buyer.
     */
    isGift?: boolean;
    /**
     * The delivery of the parcel related to this order or order item.
     */
    orderDelivery?: schema.ParcelDeliveryOrSubClass | string;
    /**
     * Party placing the order or paying the invoice.
     */
    customer?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
    /**
     * The offer(s) -- e.g., product, quantity and price combinations -- included in the order.
     */
    acceptedOffer?: schema.OfferOrSubClass | string;
    /**
     * The currency of the discount.\n\nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217) e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies e.g. "BTC"; well known names for [Local Exchange Tradings Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types e.g. "Ithaca HOUR".
     */
    discountCurrency?: string;
    /**
     * An entity which offers (sells / leases / lends / loans) the services / goods.  A seller may also be a provider.
     */
    seller?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
    /**
     * The date that payment is due.
     */
    paymentDue?: string;
    /**
     * A number that confirms the given order or payment has been received.
     */
    confirmationNumber?: string;
    /**
     * The identifier of the transaction.
     */
    orderNumber?: string;
    /**
     * An identifier for the method of payment used (e.g. the last 4 digits of the credit card).
     */
    paymentMethodId?: string;
    /**
     * The billing address for the order.
     */
    billingAddress?: schema.PostalAddressOrSubClass | string;
    /**
     * An entity that arranges for an exchange between a buyer and a seller.  In most cases a broker never acquires or releases ownership of a product or service involved in an exchange.  If it is not clear whether an entity is a broker, seller, or buyer, the latter two terms are preferred.
     */
    broker?: schema.PersonOrSubClass | schema.OrganizationOrSubClass | string;
    /**
     * The URL for sending a payment.
     */
    paymentUrl?: string;
    /**
     * The order is being paid as part of the referenced Invoice.
     */
    partOfInvoice?: schema.InvoiceOrSubClass | string;
    /**
     * The date that payment is due.
     */
    paymentDueDate?: string;
    /**
     * 'merchant' is an out-dated term for 'seller'.
     */
    merchant?: schema.PersonOrSubClass | schema.OrganizationOrSubClass | string;
    /**
     * The item ordered.
     */
    orderedItem?: schema.ProductOrSubClass | schema.OrderItemOrSubClass | schema.ServiceOrSubClass | string;
    /**
     * Date order was placed.
     */
    orderDate?: string;
    /**
     * The name of the credit card or other method of payment for the order.
     */
    paymentMethod?: schema.PaymentMethod;
    /**
     * Code used to redeem a discount.
     */
    discountCode?: string;
    /**
     * The current status of the order.
     */
    orderStatus?: schema.OrderStatusOrSubClass | string;
    /**
     * Any discount applied (to an Order).
     */
    discount?: number | string;
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
};
/**
 * schema:Order
 *
 * This differs from Order because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type OrderOrSubClass = Order;
/**
 * schema:Order - Validation schema (w/ JOI)
 */
export declare const OrderJoiSchema: Joi.ObjectSchema;
/**
 * schema:Order - Validation schema (w/ JOI)
 *
 * This differs from OrderJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const OrderOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:Order.
 *
 * If some data has a structure which matches a schema:Order, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeOrder = validateOrder(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeOrder instanceof OaValidationError) {
 *   // From this point on, `maybeOrder` will have type `OaValidationError`
 *   const error = maybeOrder;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeOrder` will have type `Order`
 * const order = maybeOrder;
 * ```
 */
export declare function validateOrder(maybeOrder: unknown): Order | OaValidationError;
