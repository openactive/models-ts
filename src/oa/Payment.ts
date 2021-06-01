// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * Payment
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
export type Payment = {
  '@type': 'Payment';
  '@context'?: string | string[];
  /**
   * The identifier of the payment held by the Broker and/or Payment Provider.
   *
   * ```json
   * "identifier": "SB1234"
   * ```
   */
  identifier?: string;
  /**
   * Optional free text description of the payment method for the Booking System, to help the Seller in discussions with the Customer (e.g. 'AcmeBroker Points' or 'AcmeBroker via Credit Card').
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
   * A reference used by the Seller to group transactions, which is used to aid reconciliation.
   */
  accountId?: string;
  /**
   * PropertyValue that contains a text value useful for reconciliation.
   */
  additionalProperty?: oa.PropertyValueOrSubClass[];
  /**
   * paymentMethod must not be used, and is reserved for future versions of this specification.
   */
  paymentMethod?: oa.PaymentMethod;
  /**
   * A reference to the specific Payment Provider that is used.
   */
  paymentProviderId?: string;
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
 * Payment
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from Payment because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type PaymentOrSubClass =
  | Payment
  | oa.DynamicPaymentOrSubClass
  ;

/**
 * Payment - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
export const PaymentJoiSchema = Joi.object({
  '@type': Joi.string().valid('Payment').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  identifier: Joi.string(),
  name: Joi.string(),
  description: Joi.string(),
  '@id': Joi.string().uri(),
  accountId: Joi.string(),
  additionalProperty: Joi.array().items(Joi.lazy(() => oa.PropertyValueOrSubClassJoiSchema)),
  paymentMethod: Joi.lazy(() => oa.PaymentMethodJoiSchema),
  paymentProviderId: Joi.string(),
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
 * Payment - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from PaymentJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const PaymentOrSubClassJoiSchema = Joi.alternatives().try([
  PaymentJoiSchema,
  Joi.lazy(() => oa.DynamicPaymentOrSubClassJoiSchema),
]);

/**
 * Runtime validator for Payment.
 *
 * If some data has a structure which matches a Payment, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybePayment = Payment.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybePayment instanceof OaValidationError) {
 *   // From this point on, `maybePayment` will have type `OaValidationError`
 *   const error = maybePayment;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybePayment` will have type `Payment`
 * const payment = maybePayment;
 * ```
 */
export function validatePayment(maybePayment: unknown): Payment | OaValidationError {
  const { value, error } = PaymentJoiSchema.validate(maybePayment);
  if (error) {
    return new OaValidationError('Payment', maybePayment, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as Payment;
}
