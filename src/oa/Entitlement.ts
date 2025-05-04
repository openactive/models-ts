// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * Entitlement
 *
 * 
 *
 * EARLY RELEASE NOTICE: This class represents a draft that is designed to inform the OpenActive specification work with implementation feedback. IT IS STILL SUBJECT TO CHANGE, as the [Customer Accounts proposal](https://github.com/openactive/customer-accounts) evolves.
 *
 * 
 *
 * This type is derived from https://schema.org/Permit, which means that any of this type's properties within schema.org may also be used.
 */
export type Entitlement = {
  '@type': 'Entitlement';
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
   * For the request, this is the value of the `@id` of the Concept being referenced. For the response, this the full Concept object including the `@id` and prefLabel.
   *
   * ```json
   * "entitlementType": {
   *   "@type": "Concept",
   *   "@id": "https://data.mcractive.com/openactive/entitlement-list#5e78bcbe-36db-425a-9064-bf96d09cc351",
   *   "prefLabel": "MCRactive Adult Resident",
   *   "inScheme": "https://data.mcractive.com/openactive/entitlement-list"
   * }
   * ```
   */
  entitlementType?: oa.ConceptOrSubClass | string;
  /**
   * Any evidence request associated with the entitlement.
   */
  evidenceRequestAction?: oa.ActionOrSubClass;
  /**
   * The date the entitlement becomes valid. This must be in the past.
   */
  validFrom?: string;
  /**
   * The date that the entitlement is no longer valid. This must be in the future.
   */
  validUntil?: string;
  /**
   * The service through with the permit was granted.
   */
  issuedThrough?: schema.ServiceOrSubClass | string;
  /**
   * The duration of validity of a permit or similar thing.
   */
  validFor?: string;
  /**
   * The target audience for this permit.
   */
  permitAudience?: schema.AudienceOrSubClass | string;
  /**
   * The organization issuing the ticket or permit.
   */
  issuedBy?: schema.OrganizationOrSubClass | string;
  /**
   * The geographic area where a permit or similar thing is valid.
   */
  validIn?: schema.AdministrativeAreaOrSubClass | string;
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
 * Entitlement
 *
 * 
 *
 * EARLY RELEASE NOTICE: This class represents a draft that is designed to inform the OpenActive specification work with implementation feedback. IT IS STILL SUBJECT TO CHANGE, as the [Customer Accounts proposal](https://github.com/openactive/customer-accounts) evolves.
 *
 * 
 *
 * This type is derived from https://schema.org/Permit, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from Entitlement because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type EntitlementOrSubClass =
  | Entitlement
  ;

/**
 * Entitlement - Validation schema (w/ JOI)
 *
 * 
 *
 * EARLY RELEASE NOTICE: This class represents a draft that is designed to inform the OpenActive specification work with implementation feedback. IT IS STILL SUBJECT TO CHANGE, as the [Customer Accounts proposal](https://github.com/openactive/customer-accounts) evolves.
 *
 * 
 *
 * This type is derived from https://schema.org/Permit, which means that any of this type's properties within schema.org may also be used.
 */
export const EntitlementJoiSchema = Joi.object({
  '@type': Joi.string().valid('Entitlement').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  name: Joi.string(),
  description: Joi.string(),
  '@id': Joi.string().uri(),
  entitlementType: Joi.alternatives().try(Joi.lazy(() => oa.ConceptOrSubClassJoiSchema), Joi.string().uri()),
  evidenceRequestAction: Joi.lazy(() => oa.ActionOrSubClassJoiSchema),
  validFrom: Joi.string().isoDate(),
  validUntil: Joi.string().isoDate(),
  issuedThrough: Joi.alternatives().try(Joi.lazy(() => schema.ServiceOrSubClassJoiSchema), Joi.string().uri()),
  validFor: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
  permitAudience: Joi.alternatives().try(Joi.lazy(() => schema.AudienceOrSubClassJoiSchema), Joi.string().uri()),
  issuedBy: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  validIn: Joi.alternatives().try(Joi.lazy(() => schema.AdministrativeAreaOrSubClassJoiSchema), Joi.string().uri()),
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
 * Entitlement - Validation schema (w/ JOI)
 *
 * 
 *
 * EARLY RELEASE NOTICE: This class represents a draft that is designed to inform the OpenActive specification work with implementation feedback. IT IS STILL SUBJECT TO CHANGE, as the [Customer Accounts proposal](https://github.com/openactive/customer-accounts) evolves.
 *
 * 
 *
 * This type is derived from https://schema.org/Permit, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from EntitlementJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const EntitlementOrSubClassJoiSchema = Joi.alternatives().try([
  EntitlementJoiSchema,
]);

/**
 * Runtime validator for Entitlement.
 *
 * If some data has a structure which matches a Entitlement, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeEntitlement = validateEntitlement(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeEntitlement instanceof OaValidationError) {
 *   // From this point on, `maybeEntitlement` will have type `OaValidationError`
 *   const error = maybeEntitlement;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeEntitlement` will have type `Entitlement`
 * const entitlement = maybeEntitlement;
 * ```
 */
export function validateEntitlement(maybeEntitlement: unknown): Entitlement | OaValidationError {
  const { value, error } = EntitlementJoiSchema.validate(maybeEntitlement);
  if (error) {
    return new OaValidationError('Entitlement', maybeEntitlement, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as Entitlement;
}
