// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * schema:Invoice
 */
export type Invoice = {
  '@type': 'Invoice';
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
   * The date that payment is due.
   */
  paymentDue?: string;
  /**
   * An identifier for the method of payment used (e.g. the last 4 digits of the credit card).
   */
  paymentMethodId?: string;
  /**
   * The identifier for the account the payment will be applied to.
   */
  accountId?: string;
  /**
   * The time interval used to compute the invoice.
   */
  billingPeriod?: string;
  /**
   * A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.
   */
  category?: string | schema.PhysicalActivityCategory | schema.ThingOrSubClass;
  /**
   * The status of payment; whether the invoice has been paid or not.
   */
  paymentStatus?: string | schema.PaymentStatusTypeOrSubClass;
  /**
   * Party placing the order or paying the invoice.
   */
  customer?: schema.PersonOrSubClass | schema.OrganizationOrSubClass | string;
  /**
   * The total amount due.
   */
  totalPaymentDue?: schema.MonetaryAmountOrSubClass | schema.PriceSpecificationOrSubClass | string;
  /**
   * The date that payment is due.
   */
  paymentDueDate?: string;
  /**
   * The date the invoice is scheduled to be paid.
   */
  scheduledPaymentDate?: string;
  /**
   * The Order(s) related to this Invoice. One or more Orders may be combined into a single Invoice.
   */
  referencesOrder?: schema.OrderOrSubClass | string;
  /**
   * A number that confirms the given order or payment has been received.
   */
  confirmationNumber?: string;
  /**
   * The minimum payment required at this time.
   */
  minimumPaymentDue?: schema.MonetaryAmountOrSubClass | schema.PriceSpecificationOrSubClass | string;
  /**
   * The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
   */
  provider?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
  /**
   * The name of the credit card or other method of payment for the order.
   */
  paymentMethod?: schema.PaymentMethod;
  /**
   * An entity that arranges for an exchange between a buyer and a seller.  In most cases a broker never acquires or releases ownership of a product or service involved in an exchange.  If it is not clear whether an entity is a broker, seller, or buyer, the latter two terms are preferred.
   */
  broker?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
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
 * schema:Invoice
 *
 * This differs from Invoice because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type InvoiceOrSubClass =
  | Invoice
  ;

/**
 * schema:Invoice - Validation schema (w/ JOI)
 */
export const InvoiceJoiSchema = Joi.object({
  '@type': Joi.string().valid('Invoice').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  name: Joi.string(),
  description: Joi.string(),
  '@id': Joi.string().uri(),
  paymentDue: Joi.string().isoDate(),
  paymentMethodId: Joi.string(),
  accountId: Joi.string(),
  billingPeriod: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
  category: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.PhysicalActivityCategoryJoiSchema), Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
  paymentStatus: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.PaymentStatusTypeOrSubClassJoiSchema), Joi.string().uri()),
  customer: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  totalPaymentDue: Joi.alternatives().try(Joi.lazy(() => schema.MonetaryAmountOrSubClassJoiSchema), Joi.lazy(() => schema.PriceSpecificationOrSubClassJoiSchema), Joi.string().uri()),
  paymentDueDate: Joi.string().isoDate(),
  scheduledPaymentDate: Joi.string().isoDate(),
  referencesOrder: Joi.alternatives().try(Joi.lazy(() => schema.OrderOrSubClassJoiSchema), Joi.string().uri()),
  confirmationNumber: Joi.string(),
  minimumPaymentDue: Joi.alternatives().try(Joi.lazy(() => schema.MonetaryAmountOrSubClassJoiSchema), Joi.lazy(() => schema.PriceSpecificationOrSubClassJoiSchema), Joi.string().uri()),
  provider: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  paymentMethod: Joi.lazy(() => schema.PaymentMethodJoiSchema),
  broker: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  mainEntityOfPage: Joi.alternatives().try(Joi.string().uri(), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema)),
  additionalType: Joi.string().uri(),
  url: Joi.string().uri(),
  alternateName: Joi.string(),
  sameAs: Joi.string().uri(),
  potentialAction: Joi.alternatives().try(Joi.lazy(() => schema.ActionOrSubClassJoiSchema), Joi.string().uri()),
  subjectOf: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
  disambiguatingDescription: Joi.string(),
  image: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
});

/**
 * schema:Invoice - Validation schema (w/ JOI)
 *
 * This differs from InvoiceJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const InvoiceOrSubClassJoiSchema = Joi.alternatives().try([
  InvoiceJoiSchema,
]);

/**
 * Runtime validator for schema:Invoice.
 *
 * If some data has a structure which matches a schema:Invoice, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeInvoice = validateInvoice(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeInvoice instanceof OaValidationError) {
 *   // From this point on, `maybeInvoice` will have type `OaValidationError`
 *   const error = maybeInvoice;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeInvoice` will have type `Invoice`
 * const invoice = maybeInvoice;
 * ```
 */
export function validateInvoice(maybeInvoice: unknown): Invoice | OaValidationError {
  const { value, error } = InvoiceJoiSchema.validate(maybeInvoice);
  if (error) {
    return new OaValidationError('Invoice', maybeInvoice, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as Invoice;
}
