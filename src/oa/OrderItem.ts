// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * OrderItem
 *
 * This type is derived from https://schema.org/OrderItem, which means that any of this type's properties within schema.org may also be used.
 */
export type OrderItem = {
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
   * A unique url based identifier for the record
   *
   * ```json
   * "@id": "https://example.com/OrderItem/12345"
   * ```
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
   * The identifier of the order item.
   */
  orderItemNumber?: string;
  /**
   * The number of the item ordered. If the property is not set, assume the quantity is one.
   */
  orderQuantity?: number;
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
 * OrderItem
 *
 * This type is derived from https://schema.org/OrderItem, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from OrderItem because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type OrderItemOrSubClass =
  | OrderItem
  ;

/**
 * OrderItem - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/OrderItem, which means that any of this type's properties within schema.org may also be used.
 */
export const OrderItemJoiSchema = Joi.object({
  '@type': Joi.string().valid('OrderItem').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
  name: Joi.string(),
  description: Joi.string(),
  '@id': Joi.string().uri(),
  acceptedOffer: Joi.alternatives().try(Joi.lazy(() => oa.OfferOrSubClassJoiSchema), Joi.string().uri()),
  accessChannel: Joi.lazy(() => oa.VirtualLocationOrSubClassJoiSchema),
  accessCode: Joi.array().items(Joi.lazy(() => oa.PropertyValueOrSubClassJoiSchema)),
  accessPass: Joi.array().items(Joi.lazy(() => oa.ImageObjectOrSubClassJoiSchema)),
  attendee: Joi.lazy(() => oa.PersonOrSubClassJoiSchema),
  attendeeDetailsRequired: Joi.array().items(Joi.lazy(() => oa.PropertyEnumerationJoiSchema)),
  cancellationMessage: Joi.string(),
  customerNotice: Joi.string(),
  error: Joi.array().items(Joi.lazy(() => oa.OpenBookingErrorOrSubClassJoiSchema)),
  orderedItem: Joi.alternatives().try(Joi.lazy(() => oa.Event_OrSubClassJoiSchema), Joi.string().uri()),
  orderItemIntakeForm: Joi.array().items(Joi.lazy(() => oa.PropertyValueSpecificationOrSubClassJoiSchema)),
  orderItemIntakeFormResponse: Joi.array().items(Joi.lazy(() => oa.PropertyValueOrSubClassJoiSchema)),
  orderItemStatus: Joi.lazy(() => oa.OrderItemStatusJoiSchema),
  position: Joi.number().integer(),
  unitTaxSpecification: Joi.array().items(Joi.lazy(() => oa.TaxChargeSpecificationOrSubClassJoiSchema)),
  orderDelivery: Joi.alternatives().try(Joi.lazy(() => schema.ParcelDeliveryOrSubClassJoiSchema), Joi.string().uri()),
  orderItemNumber: Joi.string(),
  orderQuantity: Joi.number(),
  sameAs: Joi.string().uri(),
  subjectOf: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
  potentialAction: Joi.alternatives().try(Joi.lazy(() => schema.ActionOrSubClassJoiSchema), Joi.string().uri()),
  mainEntityOfPage: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
  additionalType: Joi.string().uri(),
  alternateName: Joi.string(),
  url: Joi.string().uri(),
  image: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
  disambiguatingDescription: Joi.string(),
});

/**
 * OrderItem - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/OrderItem, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from OrderItemJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const OrderItemOrSubClassJoiSchema = Joi.alternatives().try([
  OrderItemJoiSchema,
]);

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
export function validateOrderItem(maybeOrderItem: unknown): OrderItem | OaValidationError {
  const { value, error } = OrderItemJoiSchema.validate(maybeOrderItem);
  if (error) {
    return new OaValidationError('OrderItem', maybeOrderItem, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as OrderItem;
}
