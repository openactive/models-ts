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
   * A unique url based identifier for the record
   */
  '@id'?: string;
  /**
   * Party placing the order or paying the invoice.
   */
  customer?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
  /**
   * The time interval used to compute the invoice.
   */
  billingPeriod?: string;
  /**
   * The total amount due.
   */
  totalPaymentDue?: schema.PriceSpecificationOrSubClass | schema.MonetaryAmountOrSubClass | string;
  /**
   * The date that payment is due.
   */
  paymentDue?: string;
  /**
   * The minimum payment required at this time.
   */
  minimumPaymentDue?: schema.PriceSpecificationOrSubClass | schema.MonetaryAmountOrSubClass | string;
  /**
   * A number that confirms the given order or payment has been received.
   */
  confirmationNumber?: string;
  /**
   * The status of payment; whether the invoice has been paid or not.
   */
  paymentStatus?: string | schema.PaymentStatusTypeOrSubClass;
  /**
   * An identifier for the method of payment used (e.g. the last 4 digits of the credit card).
   */
  paymentMethodId?: string;
  /**
   * The identifier for the account the payment will be applied to.
   */
  accountId?: string;
  /**
   * An entity that arranges for an exchange between a buyer and a seller.  In most cases a broker never acquires or releases ownership of a product or service involved in an exchange.  If it is not clear whether an entity is a broker, seller, or buyer, the latter two terms are preferred.
   */
  broker?: schema.PersonOrSubClass | schema.OrganizationOrSubClass | string;
  /**
   * The Order(s) related to this Invoice. One or more Orders may be combined into a single Invoice.
   */
  referencesOrder?: schema.OrderOrSubClass | string;
  /**
   * The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
   */
  provider?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
  /**
   * The date the invoice is scheduled to be paid.
   */
  scheduledPaymentDate?: string;
  /**
   * The date that payment is due.
   */
  paymentDueDate?: string;
  /**
   * A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.
   */
  category?: schema.PhysicalActivityCategory | string | schema.ThingOrSubClass;
  /**
   * The name of the credit card or other method of payment for the order.
   */
  paymentMethod?: schema.PaymentMethod;
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
  identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
  name: Joi.string(),
  description: Joi.string(),
  '@id': Joi.string().uri(),
  customer: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  billingPeriod: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
  totalPaymentDue: Joi.alternatives().try(Joi.lazy(() => schema.PriceSpecificationOrSubClassJoiSchema), Joi.lazy(() => schema.MonetaryAmountOrSubClassJoiSchema), Joi.string().uri()),
  paymentDue: Joi.string().isoDate(),
  minimumPaymentDue: Joi.alternatives().try(Joi.lazy(() => schema.PriceSpecificationOrSubClassJoiSchema), Joi.lazy(() => schema.MonetaryAmountOrSubClassJoiSchema), Joi.string().uri()),
  confirmationNumber: Joi.string(),
  paymentStatus: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.PaymentStatusTypeOrSubClassJoiSchema), Joi.string().uri()),
  paymentMethodId: Joi.string(),
  accountId: Joi.string(),
  broker: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  referencesOrder: Joi.alternatives().try(Joi.lazy(() => schema.OrderOrSubClassJoiSchema), Joi.string().uri()),
  provider: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  scheduledPaymentDate: Joi.string().isoDate(),
  paymentDueDate: Joi.string().isoDate(),
  category: Joi.alternatives().try(Joi.lazy(() => schema.PhysicalActivityCategoryJoiSchema), Joi.string(), Joi.string().uri(), Joi.lazy(() => schema.ThingOrSubClassJoiSchema)),
  paymentMethod: Joi.lazy(() => schema.PaymentMethodJoiSchema),
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
