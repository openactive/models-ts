// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * OpportunityCapacityIsReservedByLeaseError
 *
 * 
 *
 * Error Use Case: The available capacity required to book a specific Opportunity is reserved by a lease held by another Customer.  If the `OrderItem` is repeated (for multiple attendees) this error MUST only be included in the API response against the `OrderItem`s which are in excess of the capacity but which are reserved by the lease of another Customer - for example in an Opportunity with a `remainingAttendeeCapacity` of 3, with 1 additional space held by another lease, then for an `OrderQuote` with 9 `OrderItem`s related to it, this error would only be emitted against 1 of the `OrderItem`s, with `OpportunityHasInsufficientCapacityError` emitted against the other 5 of the `OrderItem`s. This helps a Customer to know whether they should try again.
 *
 * 
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
export type OpportunityCapacityIsReservedByLeaseError = {
  '@type': 'OpportunityCapacityIsReservedByLeaseError';
  '@context'?: string | string[];
  /**
   * The identifier property represents any kind of identifier for any kind of [[Thing]], such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See [background notes](/docs/datamodel.html#identifierBg) for more details.
   *         
   */
  identifier?: schema.PropertyValueOrSubClass | string;
  /**
   * A short, human-readable summary of the problem type. It should not change from occurrence to occurrence of the problem, except for purposes of localization.
   *
   * ```json
   * "name": "The available capacity required to book a specific Opportunity is reserved by a lease held by another Customer."
   * ```
   */
  name?: string;
  /**
   * A plain-text human-readable explanation specific to this occurrence of the problem, providing specific information about why the error occurred in this particular case. This description must not include HTML or other markup.
   *
   * ```json
   * "description": "No customer details supplied. These must be supplied for calls to C2, P, and B."
   * ```
   */
  description?: string;
  /**
   * A unique URI-based identifier for the record.
   * `@id` properties are used as identifiers for compatibility with JSON-LD. The value of such a property must always be an absolute URI that provides a stable globally unique identifier for the resource, as described in [RFC3986](https://tools.ietf.org/html/rfc3986).
   * The primary purpose of the URI format in this context is to provide natural namespacing for the identifier. Hence, the URI itself may not resolve to a valid endpoint, but must use a domain name controlled by the resource owner (the organisation responsible for the OpenActive open data feed).
   */
  '@id'?: string;
  /**
   * A URI reference that identifies the specific occurrence of the problem. It may or may not yield further information if dereferenced.
   */
  instance?: string;
  /**
   * Used by technical support for diagnostics purposes.
   */
  requestId?: string;
  /**
   * Must always be present and set to ```json
   * "statusCode": 409
   * ```
   */
  statusCode?: number;
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
 * OpportunityCapacityIsReservedByLeaseError
 *
 * 
 *
 * Error Use Case: The available capacity required to book a specific Opportunity is reserved by a lease held by another Customer.  If the `OrderItem` is repeated (for multiple attendees) this error MUST only be included in the API response against the `OrderItem`s which are in excess of the capacity but which are reserved by the lease of another Customer - for example in an Opportunity with a `remainingAttendeeCapacity` of 3, with 1 additional space held by another lease, then for an `OrderQuote` with 9 `OrderItem`s related to it, this error would only be emitted against 1 of the `OrderItem`s, with `OpportunityHasInsufficientCapacityError` emitted against the other 5 of the `OrderItem`s. This helps a Customer to know whether they should try again.
 *
 * 
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from OpportunityCapacityIsReservedByLeaseError because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type OpportunityCapacityIsReservedByLeaseErrorOrSubClass =
  | OpportunityCapacityIsReservedByLeaseError
  ;

/**
 * OpportunityCapacityIsReservedByLeaseError - Validation schema (w/ JOI)
 *
 * 
 *
 * Error Use Case: The available capacity required to book a specific Opportunity is reserved by a lease held by another Customer.  If the `OrderItem` is repeated (for multiple attendees) this error MUST only be included in the API response against the `OrderItem`s which are in excess of the capacity but which are reserved by the lease of another Customer - for example in an Opportunity with a `remainingAttendeeCapacity` of 3, with 1 additional space held by another lease, then for an `OrderQuote` with 9 `OrderItem`s related to it, this error would only be emitted against 1 of the `OrderItem`s, with `OpportunityHasInsufficientCapacityError` emitted against the other 5 of the `OrderItem`s. This helps a Customer to know whether they should try again.
 *
 * 
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
export const OpportunityCapacityIsReservedByLeaseErrorJoiSchema = Joi.object({
  '@type': Joi.string().valid('OpportunityCapacityIsReservedByLeaseError').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  name: Joi.string(),
  description: Joi.string(),
  '@id': Joi.string().uri(),
  instance: Joi.string().uri(),
  requestId: Joi.string(),
  statusCode: Joi.number().integer(),
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
 * OpportunityCapacityIsReservedByLeaseError - Validation schema (w/ JOI)
 *
 * 
 *
 * Error Use Case: The available capacity required to book a specific Opportunity is reserved by a lease held by another Customer.  If the `OrderItem` is repeated (for multiple attendees) this error MUST only be included in the API response against the `OrderItem`s which are in excess of the capacity but which are reserved by the lease of another Customer - for example in an Opportunity with a `remainingAttendeeCapacity` of 3, with 1 additional space held by another lease, then for an `OrderQuote` with 9 `OrderItem`s related to it, this error would only be emitted against 1 of the `OrderItem`s, with `OpportunityHasInsufficientCapacityError` emitted against the other 5 of the `OrderItem`s. This helps a Customer to know whether they should try again.
 *
 * 
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from OpportunityCapacityIsReservedByLeaseErrorJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const OpportunityCapacityIsReservedByLeaseErrorOrSubClassJoiSchema = Joi.alternatives().try([
  OpportunityCapacityIsReservedByLeaseErrorJoiSchema,
]);

/**
 * Runtime validator for OpportunityCapacityIsReservedByLeaseError.
 *
 * If some data has a structure which matches a OpportunityCapacityIsReservedByLeaseError, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeOpportunityCapacityIsReservedByLeaseError = validateOpportunityCapacityIsReservedByLeaseError(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeOpportunityCapacityIsReservedByLeaseError instanceof OaValidationError) {
 *   // From this point on, `maybeOpportunityCapacityIsReservedByLeaseError` will have type `OaValidationError`
 *   const error = maybeOpportunityCapacityIsReservedByLeaseError;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeOpportunityCapacityIsReservedByLeaseError` will have type `OpportunityCapacityIsReservedByLeaseError`
 * const opportunityCapacityIsReservedByLeaseError = maybeOpportunityCapacityIsReservedByLeaseError;
 * ```
 */
export function validateOpportunityCapacityIsReservedByLeaseError(maybeOpportunityCapacityIsReservedByLeaseError: unknown): OpportunityCapacityIsReservedByLeaseError | OaValidationError {
  const { value, error } = OpportunityCapacityIsReservedByLeaseErrorJoiSchema.validate(maybeOpportunityCapacityIsReservedByLeaseError);
  if (error) {
    return new OaValidationError('OpportunityCapacityIsReservedByLeaseError', maybeOpportunityCapacityIsReservedByLeaseError, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as OpportunityCapacityIsReservedByLeaseError;
}
