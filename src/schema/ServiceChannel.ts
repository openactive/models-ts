// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * schema:ServiceChannel
 */
export type ServiceChannel = {
  '@type': 'ServiceChannel';
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
   * The service provided by this channel.
   */
  providesService?: schema.ServiceOrSubClass | string;
  /**
   * The phone number to use to access the service.
   */
  servicePhone?: schema.ContactPointOrSubClass | string;
  /**
   * A language someone may use with or at the item, service or place. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[inLanguage]]
   */
  availableLanguage?: schema.LanguageOrSubClass | string;
  /**
   * The number to access the service by text message.
   */
  serviceSmsNumber?: schema.ContactPointOrSubClass | string;
  /**
   * The website to access the service.
   */
  serviceUrl?: string;
  /**
   * The location (e.g. civic structure, local business, etc.) where a person can go to access the service.
   */
  serviceLocation?: schema.PlaceOrSubClass | string;
  /**
   * The address for accessing the service by mail.
   */
  servicePostalAddress?: schema.PostalAddressOrSubClass | string;
  /**
   * Estimated processing time for the service using this channel.
   */
  processingTime?: string;
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
 * schema:ServiceChannel
 *
 * This differs from ServiceChannel because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type ServiceChannelOrSubClass =
  | ServiceChannel
  ;

/**
 * schema:ServiceChannel - Validation schema (w/ JOI)
 */
export const ServiceChannelJoiSchema = Joi.object({
  '@type': Joi.string().valid('ServiceChannel').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
  name: Joi.string(),
  description: Joi.string(),
  '@id': Joi.string().uri(),
  providesService: Joi.alternatives().try(Joi.lazy(() => schema.ServiceOrSubClassJoiSchema), Joi.string().uri()),
  servicePhone: Joi.alternatives().try(Joi.lazy(() => schema.ContactPointOrSubClassJoiSchema), Joi.string().uri()),
  availableLanguage: Joi.alternatives().try(Joi.lazy(() => schema.LanguageOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  serviceSmsNumber: Joi.alternatives().try(Joi.lazy(() => schema.ContactPointOrSubClassJoiSchema), Joi.string().uri()),
  serviceUrl: Joi.string().uri(),
  serviceLocation: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
  servicePostalAddress: Joi.alternatives().try(Joi.lazy(() => schema.PostalAddressOrSubClassJoiSchema), Joi.string().uri()),
  processingTime: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
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
 * schema:ServiceChannel - Validation schema (w/ JOI)
 *
 * This differs from ServiceChannelJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const ServiceChannelOrSubClassJoiSchema = Joi.alternatives().try([
  ServiceChannelJoiSchema,
]);

/**
 * Runtime validator for schema:ServiceChannel.
 *
 * If some data has a structure which matches a schema:ServiceChannel, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeServiceChannel = ServiceChannel.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeServiceChannel instanceof OaValidationError) {
 *   // From this point on, `maybeServiceChannel` will have type `OaValidationError`
 *   const error = maybeServiceChannel;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeServiceChannel` will have type `ServiceChannel`
 * const serviceChannel = maybeServiceChannel;
 * ```
 */
export function validateServiceChannel(maybeServiceChannel: unknown): ServiceChannel | OaValidationError {
  const { value, error } = ServiceChannelJoiSchema.validate(maybeServiceChannel);
  if (error) {
    return new OaValidationError('ServiceChannel', maybeServiceChannel, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as ServiceChannel;
}
