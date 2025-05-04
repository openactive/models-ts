// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * CustomerAccount
 *
 * 
 *
 * EARLY RELEASE NOTICE: This class represents a draft that is designed to inform the OpenActive specification work with implementation feedback. IT IS STILL SUBJECT TO CHANGE, as the [Customer Accounts proposal](https://github.com/openactive/customer-accounts) evolves.
 *
 * 
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
export type CustomerAccount = {
  '@type': 'CustomerAccount';
  '@context'?: string | string[];
  /**
   * The identifier of the Customer Account used by the Booking System.
   *
   * ```json
   * "identifier": "fdc14503-275e-46d3-9922-45b986c9f9aa"
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
  description?: string;
  /**
   * A unique URI-based identifier for the record.
   * `@id` properties are used as identifiers for compatibility with JSON-LD. The value of such a property must always be an absolute URI that provides a stable globally unique identifier for the resource, as described in [RFC3986](https://tools.ietf.org/html/rfc3986).
   * The primary purpose of the URI format in this context is to provide natural namespacing for the identifier. Hence, the URI itself may not resolve to a valid endpoint, but must use a domain name controlled by the resource owner (the organisation responsible for the OpenActive open data feed).
   */
  '@id'?: string;
  /**
   * The barcode, QR code, magnetic stripe, or swipe card associated with this Customer Account, within their own namespaces.
   */
  accessPass?: oa.BarcodeOrSubClass[];
  /**
   * The customer-facing identifier for the Customer Account.
   */
  accountNumber?: string;
  /**
   * The person or organization to whom this Customer Account belongs.
   */
  customer?: oa.OrganizationOrSubClass | oa.PersonOrSubClass;
  /**
   * The current valid and active entitlements associated with this customer. Note that expired or inactive entitlements are not included in this list.
   */
  entitlement?: oa.EntitlementOrSubClass[];
  /**
   * Whether there are any additional entitlements (other than those listed in entitlement) or other types of discounts are associated with the Customer Account that will influence pricing, and therefore whether the pricing for the entitlement in the feed should be treated as indicative.
   *
   * ```json
   * "hasHiddenEntitlements": "true"
   * ```
   */
  hasHiddenEntitlements?: boolean;
  /**
   * Outstanding actions on this Customer Account, such as the resolution of outstanding debts or membership renewal. These may prevent the Customer from making bookings.
   */
  outstandingAction?: oa.ActionOrSubClass[];
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
 * CustomerAccount
 *
 * 
 *
 * EARLY RELEASE NOTICE: This class represents a draft that is designed to inform the OpenActive specification work with implementation feedback. IT IS STILL SUBJECT TO CHANGE, as the [Customer Accounts proposal](https://github.com/openactive/customer-accounts) evolves.
 *
 * 
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from CustomerAccount because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type CustomerAccountOrSubClass =
  | CustomerAccount
  ;

/**
 * CustomerAccount - Validation schema (w/ JOI)
 *
 * 
 *
 * EARLY RELEASE NOTICE: This class represents a draft that is designed to inform the OpenActive specification work with implementation feedback. IT IS STILL SUBJECT TO CHANGE, as the [Customer Accounts proposal](https://github.com/openactive/customer-accounts) evolves.
 *
 * 
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
export const CustomerAccountJoiSchema = Joi.object({
  '@type': Joi.string().valid('CustomerAccount').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  identifier: Joi.string(),
  name: Joi.string(),
  description: Joi.string(),
  '@id': Joi.string().uri(),
  accessPass: Joi.array().items(Joi.lazy(() => oa.BarcodeOrSubClassJoiSchema)),
  accountNumber: Joi.string(),
  customer: Joi.alternatives().try(Joi.lazy(() => oa.OrganizationOrSubClassJoiSchema), Joi.lazy(() => oa.PersonOrSubClassJoiSchema)),
  entitlement: Joi.array().items(Joi.lazy(() => oa.EntitlementOrSubClassJoiSchema)),
  hasHiddenEntitlements: Joi.boolean(),
  outstandingAction: Joi.array().items(Joi.lazy(() => oa.ActionOrSubClassJoiSchema)),
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
 * CustomerAccount - Validation schema (w/ JOI)
 *
 * 
 *
 * EARLY RELEASE NOTICE: This class represents a draft that is designed to inform the OpenActive specification work with implementation feedback. IT IS STILL SUBJECT TO CHANGE, as the [Customer Accounts proposal](https://github.com/openactive/customer-accounts) evolves.
 *
 * 
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from CustomerAccountJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const CustomerAccountOrSubClassJoiSchema = Joi.alternatives().try([
  CustomerAccountJoiSchema,
]);

/**
 * Runtime validator for CustomerAccount.
 *
 * If some data has a structure which matches a CustomerAccount, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeCustomerAccount = validateCustomerAccount(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeCustomerAccount instanceof OaValidationError) {
 *   // From this point on, `maybeCustomerAccount` will have type `OaValidationError`
 *   const error = maybeCustomerAccount;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeCustomerAccount` will have type `CustomerAccount`
 * const customerAccount = maybeCustomerAccount;
 * ```
 */
export function validateCustomerAccount(maybeCustomerAccount: unknown): CustomerAccount | OaValidationError {
  const { value, error } = CustomerAccountJoiSchema.validate(maybeCustomerAccount);
  if (error) {
    return new OaValidationError('CustomerAccount', maybeCustomerAccount, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as CustomerAccount;
}
