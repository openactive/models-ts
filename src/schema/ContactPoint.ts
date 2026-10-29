// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * schema:ContactPoint
 */
export type ContactPoint = {
  '@type': 'ContactPoint';
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
  description?: string | schema.TextObjectOrSubClass;
  /**
   * A unique URI-based identifier for the record.
   * `@id` properties are used as identifiers for compatibility with JSON-LD. The value of such a property must always be an absolute URI that provides a stable globally unique identifier for the resource, as described in [RFC3986](https://tools.ietf.org/html/rfc3986).
   * The primary purpose of the URI format in this context is to provide natural namespacing for the identifier. Hence, the URI itself may not resolve to a valid endpoint, but must use a domain name controlled by the resource owner (the organisation responsible for the OpenActive open data feed).
   */
  '@id'?: string;
  /**
   * The geographic area where a service or offered item is provided.
   */
  areaServed?: schema.AdministrativeAreaOrSubClass | schema.GeoShapeOrSubClass | schema.PlaceOrSubClass | string;
  /**
   * A language someone may use with or at the item, service or place. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[inLanguage]].
   */
  availableLanguage?: schema.LanguageOrSubClass | string;
  /**
   * An option available on this contact point (e.g. a toll-free number or support for hearing-impaired callers).
   */
  contactOption?: schema.ContactPointOption;
  /**
   * A person or organization can have different contact points, for different purposes. For example, a sales contact point, a PR contact point and so on. This property is used to specify the kind of contact point.
   */
  contactType?: string;
  /**
   * Email address.
   */
  email?: string;
  /**
   * The fax number.
   */
  faxNumber?: string;
  /**
   * The hours during which this service or contact is available.
   */
  hoursAvailable?: schema.OpeningHoursSpecificationOrSubClass | string;
  /**
   * The product or service this support contact point is related to (such as product support for a particular product line). This can be a specific product or product line (e.g. "iPhone") or a general category of products or services (e.g. "smartphones").
   */
  productSupported?: schema.ProductOrSubClass | string;
  /**
   * The geographic area where the service is provided.
   */
  serviceArea?: schema.AdministrativeAreaOrSubClass | schema.GeoShapeOrSubClass | schema.PlaceOrSubClass | string;
  /**
   * The telephone number.
   */
  telephone?: string;
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
 * schema:ContactPoint
 *
 * This differs from ContactPoint because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type ContactPointOrSubClass =
  | ContactPoint
  | schema.PostalAddressOrSubClass
  ;

/**
 * schema:ContactPoint - Validation schema (w/ JOI)
 */
export const ContactPointJoiSchema = Joi.object({
  '@type': Joi.string().valid('ContactPoint').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  name: Joi.string(),
  description: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.TextObjectOrSubClassJoiSchema), Joi.string().uri()),
  '@id': Joi.string().uri(),
  areaServed: Joi.alternatives().try(Joi.lazy(() => schema.AdministrativeAreaOrSubClassJoiSchema), Joi.lazy(() => schema.GeoShapeOrSubClassJoiSchema), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  availableLanguage: Joi.alternatives().try(Joi.lazy(() => schema.LanguageOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  contactOption: Joi.lazy(() => schema.ContactPointOptionJoiSchema),
  contactType: Joi.string(),
  email: Joi.string(),
  faxNumber: Joi.string(),
  hoursAvailable: Joi.alternatives().try(Joi.lazy(() => schema.OpeningHoursSpecificationOrSubClassJoiSchema), Joi.string().uri()),
  productSupported: Joi.alternatives().try(Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  serviceArea: Joi.alternatives().try(Joi.lazy(() => schema.AdministrativeAreaOrSubClassJoiSchema), Joi.lazy(() => schema.GeoShapeOrSubClassJoiSchema), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
  telephone: Joi.string(),
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
 * schema:ContactPoint - Validation schema (w/ JOI)
 *
 * This differs from ContactPointJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const ContactPointOrSubClassJoiSchema = Joi.alternatives().try([
  ContactPointJoiSchema,
  Joi.lazy(() => schema.PostalAddressOrSubClassJoiSchema),
]);

/**
 * Runtime validator for schema:ContactPoint.
 *
 * If some data has a structure which matches a schema:ContactPoint, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeContactPoint = validateContactPoint(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeContactPoint instanceof OaValidationError) {
 *   // From this point on, `maybeContactPoint` will have type `OaValidationError`
 *   const error = maybeContactPoint;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeContactPoint` will have type `ContactPoint`
 * const contactPoint = maybeContactPoint;
 * ```
 */
export function validateContactPoint(maybeContactPoint: unknown): ContactPoint | OaValidationError {
  const { value, error } = ContactPointJoiSchema.validate(maybeContactPoint);
  if (error) {
    return new OaValidationError('ContactPoint', maybeContactPoint, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as ContactPoint;
}
