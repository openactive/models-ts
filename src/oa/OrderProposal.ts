// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * OrderProposal
 *
 * This type is derived from https://schema.org/Order, which means that any of this type's properties within schema.org may also be used.
 */
export type OrderProposal = {
  '@type': 'OrderProposal';
  '@context'?: string | string[];
  /**
   * The Order UUID of the Order, OrderQuote or OrderProposal, which is required within the Orders feed.
   *
   * ```json
   * "identifier": "123e4567-e89b-12d3-a456-426614174000"
   * ```
   */
  identifier?: string;
  /**
   * The name of the item.
   */
  name?: string;
  /**
   * A description of the item.
   */
  description?: string | schema.TextObjectOrSubClass;
  /**
   * A unique URI-based identifier for the record.
   * `@id` properties are used as identifiers for compatibility with JSON-LD. The value of such a property must always be an absolute URI that provides a stable globally unique identifier for the resource, as described in [RFC3986](https://tools.ietf.org/html/rfc3986).
   * The primary purpose of the URI format in this context is to provide natural namespacing for the identifier. Hence, the URI itself may not resolve to a valid endpoint, but must use a domain name controlled by the resource owner (the organisation responsible for the OpenActive open data feed).
   */
  '@id'?: string;
  /**
   * Details about the Booking System
   */
  bookingService?: oa.BookingServiceOrSubClass;
  /**
   * The organisation or developer providing an application that allows Customers to make bookings. Those applications will be clients of the API defined in this specification. If brokerRole is set to https://openactive.io/NoBroker this is not required.
   */
  broker?: oa.OrganizationOrSubClass;
  /**
   * Either https://openactive.io/AgentBroker,  https://openactive.io/ResellerBroker or  https://openactive.io/NoBroker, as agreed in advance between the Broker and Seller.
   */
  brokerRole?: oa.BrokerType;
  /**
   * The person or organization purchasing the Order.
   */
  customer?: oa.OrganizationOrSubClass | oa.PersonOrSubClass;
  /**
   * The Lease on the OrderItems which lasts for the duration specified by the Booking System.
   */
  lease?: oa.LeaseOrSubClass;
  /**
   * This property is internal to the Broker in this version of the specification.
   */
  orderCreationStatus?: oa.OrderCreationStatus;
  orderCustomerNote?: string;
  /**
   * The items that constitute the Order.
   */
  orderedItem?: oa.OrderItemOrSubClass[];
  /**
   * The Customer-facing identifier of the Order.
   */
  orderNumber?: string;
  orderProposalStatus?: oa.OrderProposalStatus;
  /**
   * The unique URL representing this version of the  OrderProposal, or the version of the OrderProposal to which this Order is related.
   */
  orderProposalVersion?: string;
  orderSellerNote?: string;
  /**
   * The payment associated with the Order by the Broker. It is required for cases where a payment has been taken.
   */
  payment?: oa.PaymentOrSubClass;
  /**
   * The organisation (schema:Organization) or person (schema:Person) providing access to events or facilities via a Booking System. e.g. a leisure provider or independent instructor running a yoga classes.
   */
  seller?: oa.PersonOrSubClass | oa.OrganizationOrSubClass | string;
  /**
   * Set to true when business-to-business tax calculation is required by the seller or brokerRole settings, but not supported by the Broker.
   */
  taxCalculationExcluded?: boolean;
  totalPaymentDue?: oa.PriceSpecificationOrSubClass;
  /**
   * Breakdown of tax payable for the Order.
   */
  totalPaymentTax?: oa.TaxChargeSpecificationOrSubClass[];
  /**
   * The offer(s) -- e.g., product, quantity and price combinations -- included in the order.
   */
  acceptedOffer?: schema.OfferOrSubClass | string;
  /**
   * The billing address for the order.
   */
  billingAddress?: schema.PostalAddressOrSubClass | string;
  /**
   * A number that confirms the given order or payment has been received.
   */
  confirmationNumber?: string;
  /**
   * Any discount applied (to an Order).
   */
  discount?: number | string;
  /**
   * Code used to redeem a discount.
   */
  discountCode?: string;
  /**
   * The currency of the discount.\n\nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217), e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies, e.g. "BTC"; well known names for [Local Exchange Trading Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types, e.g. "Ithaca HOUR".
   */
  discountCurrency?: string;
  /**
   * Indicates whether the offer was accepted as a gift for someone other than the buyer.
   */
  isGift?: boolean;
  /**
   * 'merchant' is an out-dated term for 'seller'.
   */
  merchant?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
  /**
   * Date order was placed.
   */
  orderDate?: string;
  /**
   * The delivery of the parcel related to this order or order item.
   */
  orderDelivery?: schema.ParcelDeliveryOrSubClass | string;
  /**
   * The current status of the order.
   */
  orderStatus?: schema.OrderStatusOrSubClass | string;
  /**
   * The order is being paid as part of the referenced Invoice.
   */
  partOfInvoice?: schema.InvoiceOrSubClass | string;
  /**
   * The date that payment is due.
   */
  paymentDue?: string;
  /**
   * The date that payment is due.
   */
  paymentDueDate?: string;
  /**
   * The name of the credit card or other method of payment for the order.
   */
  paymentMethod?: schema.PaymentMethodOrSubClass | string;
  /**
   * An identifier for the method of payment used (e.g. the last 4 digits of the credit card).
   */
  paymentMethodId?: string;
  /**
   * The URL for sending a payment.
   */
  paymentUrl?: string;
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
  /**
   * URL of the item.
   */
  url?: string;
};

/**
 * OrderProposal
 *
 * This type is derived from https://schema.org/Order, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from OrderProposal because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type OrderProposalOrSubClass =
  | OrderProposal
  ;

/**
 * OrderProposal - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/Order, which means that any of this type's properties within schema.org may also be used.
 */
export const OrderProposalJoiSchema = Joi.object({
  '@type': Joi.string().valid('OrderProposal').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  identifier: Joi.string(),
  name: Joi.string(),
  description: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.TextObjectOrSubClassJoiSchema), Joi.string().uri()),
  '@id': Joi.string().uri(),
  bookingService: Joi.lazy(() => oa.BookingServiceOrSubClassJoiSchema),
  broker: Joi.lazy(() => oa.OrganizationOrSubClassJoiSchema),
  brokerRole: Joi.lazy(() => oa.BrokerTypeJoiSchema),
  customer: Joi.alternatives().try(Joi.lazy(() => oa.OrganizationOrSubClassJoiSchema), Joi.lazy(() => oa.PersonOrSubClassJoiSchema)),
  lease: Joi.lazy(() => oa.LeaseOrSubClassJoiSchema),
  orderCreationStatus: Joi.lazy(() => oa.OrderCreationStatusJoiSchema),
  orderCustomerNote: Joi.string(),
  orderedItem: Joi.array().items(Joi.lazy(() => oa.OrderItemOrSubClassJoiSchema)),
  orderNumber: Joi.string(),
  orderProposalStatus: Joi.lazy(() => oa.OrderProposalStatusJoiSchema),
  orderProposalVersion: Joi.string().uri(),
  orderSellerNote: Joi.string(),
  payment: Joi.lazy(() => oa.PaymentOrSubClassJoiSchema),
  seller: Joi.alternatives().try(Joi.lazy(() => oa.PersonOrSubClassJoiSchema), Joi.lazy(() => oa.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  taxCalculationExcluded: Joi.boolean(),
  totalPaymentDue: Joi.lazy(() => oa.PriceSpecificationOrSubClassJoiSchema),
  totalPaymentTax: Joi.array().items(Joi.lazy(() => oa.TaxChargeSpecificationOrSubClassJoiSchema)),
  acceptedOffer: Joi.alternatives().try(Joi.lazy(() => schema.OfferOrSubClassJoiSchema), Joi.string().uri()),
  billingAddress: Joi.alternatives().try(Joi.lazy(() => schema.PostalAddressOrSubClassJoiSchema), Joi.string().uri()),
  confirmationNumber: Joi.string(),
  discount: Joi.alternatives().try(Joi.number(), Joi.string()),
  discountCode: Joi.string(),
  discountCurrency: Joi.string(),
  isGift: Joi.boolean(),
  merchant: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  orderDate: Joi.string().isoDate(),
  orderDelivery: Joi.alternatives().try(Joi.lazy(() => schema.ParcelDeliveryOrSubClassJoiSchema), Joi.string().uri()),
  orderStatus: Joi.alternatives().try(Joi.lazy(() => schema.OrderStatusOrSubClassJoiSchema), Joi.string().uri()),
  partOfInvoice: Joi.alternatives().try(Joi.lazy(() => schema.InvoiceOrSubClassJoiSchema), Joi.string().uri()),
  paymentDue: Joi.string().isoDate(),
  paymentDueDate: Joi.string().isoDate(),
  paymentMethod: Joi.alternatives().try(Joi.lazy(() => schema.PaymentMethodOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  paymentMethodId: Joi.string(),
  paymentUrl: Joi.string().uri(),
  additionalType: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
  alternateName: Joi.string(),
  disambiguatingDescription: Joi.string(),
  image: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
  mainEntityOfPage: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
  owner: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  potentialAction: Joi.alternatives().try(Joi.lazy(() => schema.ActionOrSubClassJoiSchema), Joi.string().uri()),
  sameAs: Joi.string().uri(),
  subjectOf: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.string().uri()),
  url: Joi.string().uri(),
});

/**
 * OrderProposal - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/Order, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from OrderProposalJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const OrderProposalOrSubClassJoiSchema = Joi.alternatives().try([
  OrderProposalJoiSchema,
]);

/**
 * Runtime validator for OrderProposal.
 *
 * If some data has a structure which matches a OrderProposal, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeOrderProposal = validateOrderProposal(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeOrderProposal instanceof OaValidationError) {
 *   // From this point on, `maybeOrderProposal` will have type `OaValidationError`
 *   const error = maybeOrderProposal;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeOrderProposal` will have type `OrderProposal`
 * const orderProposal = maybeOrderProposal;
 * ```
 */
export function validateOrderProposal(maybeOrderProposal: unknown): OrderProposal | OaValidationError {
  const { value, error } = OrderProposalJoiSchema.validate(maybeOrderProposal);
  if (error) {
    return new OaValidationError('OrderProposal', maybeOrderProposal, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as OrderProposal;
}
