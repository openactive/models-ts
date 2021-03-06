// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * schema:RadioBroadcastService
 */
export type RadioBroadcastService = {
  '@type': 'RadioBroadcastService';
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
   * The frequency used for over-the-air broadcasts. Numeric values or simple ranges e.g. 87-99. In addition a shortcut idiom is supported for frequences of AM and FM radio channels, e.g. "87 FM".
   */
  broadcastFrequency?: string | schema.BroadcastFrequencySpecificationOrSubClass;
  /**
   * The type of screening or video broadcast used (e.g. IMAX, 3D, SD, HD, etc.).
   */
  videoFormat?: string;
  /**
   * A broadcast service to which the broadcast service may belong to such as regional variations of a national channel.
   */
  parentService?: schema.BroadcastServiceOrSubClass | string;
  /**
   * The name displayed in the channel guide. For many US affiliates, it is the network name.
   */
  broadcastDisplayName?: string;
  /**
   * The media network(s) whose content is broadcast on this station.
   */
  broadcastAffiliateOf?: schema.OrganizationOrSubClass | string;
  /**
   * The timezone in [ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601) for which the service bases its broadcasts
   */
  broadcastTimezone?: string;
  /**
   * The area within which users can expect to reach the broadcast service.
   */
  area?: schema.PlaceOrSubClass | string;
  /**
   * The organization owning or operating the broadcast service.
   */
  broadcaster?: schema.OrganizationOrSubClass | string;
  /**
   * The language of the content or performance or used in an action. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[availableLanguage]].
   */
  inLanguage?: string | schema.LanguageOrSubClass;
  /**
   * A broadcast channel of a broadcast service.
   */
  hasBroadcastChannel?: schema.BroadcastChannelOrSubClass | string;
  /**
   * A [callsign](https://en.wikipedia.org/wiki/Call_sign), as used in broadcasting and radio communications to identify people, radio and TV stations, or vehicles.
   */
  callSign?: string;
  /**
   * The overall rating, based on a collection of reviews or ratings, of the item.
   */
  aggregateRating?: schema.AggregateRatingOrSubClass | string;
  /**
   * The tangible thing generated by the service, e.g. a passport, permit, etc.
   */
  serviceOutput?: schema.ThingOrSubClass | string;
  /**
   * A pointer to another, functionally similar product (or multiple products).
   */
  isSimilarTo?: schema.ProductOrSubClass | schema.ServiceOrSubClass | string;
  /**
   * An offer to provide this item&#x2014;for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use [[businessFunction]] to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a [[Demand]]. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
   *       
   */
  offers?: schema.OfferOrSubClass | schema.DemandOrSubClass | string;
  /**
   * An entity that arranges for an exchange between a buyer and a seller.  In most cases a broker never acquires or releases ownership of a product or service involved in an exchange.  If it is not clear whether an entity is a broker, seller, or buyer, the latter two terms are preferred.
   */
  broker?: schema.PersonOrSubClass | schema.OrganizationOrSubClass | string;
  /**
   * Human-readable terms of service documentation.
   */
  termsOfService?: string;
  /**
   * An award won by or for this item.
   */
  award?: string;
  /**
   * The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
   */
  provider?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
  /**
   * A review of the item.
   */
  review?: schema.ReviewOrSubClass | string;
  /**
   * The geographic area where a service or offered item is provided.
   */
  areaServed?: string | schema.PlaceOrSubClass | schema.AdministrativeAreaOrSubClass | schema.GeoShapeOrSubClass;
  /**
   * The audience eligible for this service.
   */
  serviceAudience?: schema.AudienceOrSubClass | string;
  /**
   * Indicates an OfferCatalog listing for this Organization, Person, or Service.
   */
  hasOfferCatalog?: schema.OfferCatalogOrSubClass | string;
  /**
   * The tangible thing generated by the service, e.g. a passport, permit, etc.
   */
  produces?: schema.ThingOrSubClass | string;
  /**
   * An associated logo.
   */
  logo?: schema.ImageObjectOrSubClass | string;
  /**
   * A means of accessing the service (e.g. a phone bank, a web site, a location, etc.).
   */
  availableChannel?: schema.ServiceChannelOrSubClass | string;
  /**
   * A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.
   */
  category?: schema.PhysicalActivityCategory | string | schema.ThingOrSubClass;
  /**
   * The type of service being offered, e.g. veterans' benefits, emergency relief, etc.
   */
  serviceType?: string | schema.GovernmentBenefitsType;
  /**
   * A slogan or motto associated with the item.
   */
  slogan?: string;
  /**
   * The hours during which this service or contact is available.
   */
  hoursAvailable?: schema.OpeningHoursSpecificationOrSubClass | string;
  /**
   * The geographic area where the service is provided.
   */
  serviceArea?: schema.PlaceOrSubClass | schema.AdministrativeAreaOrSubClass | schema.GeoShapeOrSubClass | string;
  /**
   * The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person.
   */
  brand?: schema.BrandOrSubClass | schema.OrganizationOrSubClass | string;
  /**
   * An intended audience, i.e. a group for whom something was created.
   */
  audience?: schema.AudienceOrSubClass | string;
  /**
   * A pointer to another, somehow related product (or multiple products).
   */
  isRelatedTo?: schema.ProductOrSubClass | schema.ServiceOrSubClass | string;
  /**
   * Indicates the mobility of a provided service (e.g. 'static', 'dynamic').
   */
  providerMobility?: string;
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
 * schema:RadioBroadcastService
 *
 * This differs from RadioBroadcastService because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type RadioBroadcastServiceOrSubClass =
  | RadioBroadcastService
  ;

/**
 * schema:RadioBroadcastService - Validation schema (w/ JOI)
 */
export const RadioBroadcastServiceJoiSchema = Joi.object({
  '@type': Joi.string().valid('RadioBroadcastService').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
  name: Joi.string(),
  description: Joi.string(),
  '@id': Joi.string().uri(),
  broadcastFrequency: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.BroadcastFrequencySpecificationOrSubClassJoiSchema), Joi.string().uri()),
  videoFormat: Joi.string(),
  parentService: Joi.alternatives().try(Joi.lazy(() => schema.BroadcastServiceOrSubClassJoiSchema), Joi.string().uri()),
  broadcastDisplayName: Joi.string(),
  broadcastAffiliateOf: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  broadcastTimezone: Joi.string(),
  area: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
  broadcaster: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  inLanguage: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.LanguageOrSubClassJoiSchema), Joi.string().uri()),
  hasBroadcastChannel: Joi.alternatives().try(Joi.lazy(() => schema.BroadcastChannelOrSubClassJoiSchema), Joi.string().uri()),
  callSign: Joi.string(),
  aggregateRating: Joi.alternatives().try(Joi.lazy(() => schema.AggregateRatingOrSubClassJoiSchema), Joi.string().uri()),
  serviceOutput: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
  isSimilarTo: Joi.alternatives().try(Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.lazy(() => schema.ServiceOrSubClassJoiSchema), Joi.string().uri()),
  offers: Joi.alternatives().try(Joi.lazy(() => schema.OfferOrSubClassJoiSchema), Joi.lazy(() => schema.DemandOrSubClassJoiSchema), Joi.string().uri()),
  broker: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  termsOfService: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
  award: Joi.string(),
  provider: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  review: Joi.alternatives().try(Joi.lazy(() => schema.ReviewOrSubClassJoiSchema), Joi.string().uri()),
  areaServed: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.lazy(() => schema.AdministrativeAreaOrSubClassJoiSchema), Joi.lazy(() => schema.GeoShapeOrSubClassJoiSchema), Joi.string().uri()),
  serviceAudience: Joi.alternatives().try(Joi.lazy(() => schema.AudienceOrSubClassJoiSchema), Joi.string().uri()),
  hasOfferCatalog: Joi.alternatives().try(Joi.lazy(() => schema.OfferCatalogOrSubClassJoiSchema), Joi.string().uri()),
  produces: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
  logo: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
  availableChannel: Joi.alternatives().try(Joi.lazy(() => schema.ServiceChannelOrSubClassJoiSchema), Joi.string().uri()),
  category: Joi.alternatives().try(Joi.lazy(() => schema.PhysicalActivityCategoryJoiSchema), Joi.string(), Joi.string().uri(), Joi.lazy(() => schema.ThingOrSubClassJoiSchema)),
  serviceType: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.GovernmentBenefitsTypeJoiSchema)),
  slogan: Joi.string(),
  hoursAvailable: Joi.alternatives().try(Joi.lazy(() => schema.OpeningHoursSpecificationOrSubClassJoiSchema), Joi.string().uri()),
  serviceArea: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.lazy(() => schema.AdministrativeAreaOrSubClassJoiSchema), Joi.lazy(() => schema.GeoShapeOrSubClassJoiSchema), Joi.string().uri()),
  brand: Joi.alternatives().try(Joi.lazy(() => schema.BrandOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  audience: Joi.alternatives().try(Joi.lazy(() => schema.AudienceOrSubClassJoiSchema), Joi.string().uri()),
  isRelatedTo: Joi.alternatives().try(Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.lazy(() => schema.ServiceOrSubClassJoiSchema), Joi.string().uri()),
  providerMobility: Joi.string(),
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
 * schema:RadioBroadcastService - Validation schema (w/ JOI)
 *
 * This differs from RadioBroadcastServiceJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const RadioBroadcastServiceOrSubClassJoiSchema = Joi.alternatives().try([
  RadioBroadcastServiceJoiSchema,
]);

/**
 * Runtime validator for schema:RadioBroadcastService.
 *
 * If some data has a structure which matches a schema:RadioBroadcastService, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeRadioBroadcastService = validateRadioBroadcastService(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeRadioBroadcastService instanceof OaValidationError) {
 *   // From this point on, `maybeRadioBroadcastService` will have type `OaValidationError`
 *   const error = maybeRadioBroadcastService;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeRadioBroadcastService` will have type `RadioBroadcastService`
 * const radioBroadcastService = maybeRadioBroadcastService;
 * ```
 */
export function validateRadioBroadcastService(maybeRadioBroadcastService: unknown): RadioBroadcastService | OaValidationError {
  const { value, error } = RadioBroadcastServiceJoiSchema.validate(maybeRadioBroadcastService);
  if (error) {
    return new OaValidationError('RadioBroadcastService', maybeRadioBroadcastService, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as RadioBroadcastService;
}
