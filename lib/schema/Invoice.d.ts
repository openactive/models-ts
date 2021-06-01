import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as schema from '../schema';
/**
 * schema:Invoice
 */
export declare type Invoice = {
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
export declare type InvoiceOrSubClass = Invoice;
/**
 * schema:Invoice - Validation schema (w/ JOI)
 */
export declare const InvoiceJoiSchema: Joi.ObjectSchema;
/**
 * schema:Invoice - Validation schema (w/ JOI)
 *
 * This differs from InvoiceJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const InvoiceOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:Invoice.
 *
 * If some data has a structure which matches a schema:Invoice, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeInvoice = Invoice.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeInvoice instanceof OaValidationError) {
 *   // From this point on, `maybeInvoice` will have type `OaValidationError`
 *   const error = maybeInvoice;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeInvoice` will have type `Invoice`
 * const invoice = maybeInvoice;
 * ```
 */
export declare function validateInvoice(maybeInvoice: unknown): Invoice | OaValidationError;
