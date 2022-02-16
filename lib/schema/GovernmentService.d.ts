import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as schema from '../schema';
/**
 * schema:GovernmentService
 */
export declare type GovernmentService = {
    '@type': 'GovernmentService';
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
     * Indicates a legal jurisdiction, e.g. of some legislation, or where some government service is based.
     */
    jurisdiction?: schema.AdministrativeAreaOrSubClass | string;
    /**
     * The operating organization, if different from the provider.  This enables the representation of services that are provided by an organization, but operated by another organization like a subcontractor.
     */
    serviceOperator?: schema.OrganizationOrSubClass | string;
    /**
     * An offer to provide this item&#x2014;for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use [[businessFunction]] to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a [[Demand]]. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
     *
     */
    offers?: schema.DemandOrSubClass | schema.OfferOrSubClass | string;
    /**
     * The geographic area where a service or offered item is provided.
     */
    areaServed?: string | schema.GeoShapeOrSubClass | schema.PlaceOrSubClass | schema.AdministrativeAreaOrSubClass;
    /**
     * The tangible thing generated by the service, e.g. a passport, permit, etc.
     */
    serviceOutput?: schema.ThingOrSubClass | string;
    /**
     * Indicates the mobility of a provided service (e.g. 'static', 'dynamic').
     */
    providerMobility?: string;
    /**
     * The overall rating, based on a collection of reviews or ratings, of the item.
     */
    aggregateRating?: schema.AggregateRatingOrSubClass | string;
    /**
     * An award won by or for this item.
     */
    award?: string;
    /**
     * Human-readable terms of service documentation.
     */
    termsOfService?: string;
    /**
     * The tangible thing generated by the service, e.g. a passport, permit, etc.
     */
    produces?: schema.ThingOrSubClass | string;
    /**
     * The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person.
     */
    brand?: schema.OrganizationOrSubClass | schema.BrandOrSubClass | string;
    /**
     * A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.
     */
    category?: string | schema.PhysicalActivityCategory | schema.ThingOrSubClass;
    /**
     * A slogan or motto associated with the item.
     */
    slogan?: string;
    /**
     * A pointer to another, functionally similar product (or multiple products).
     */
    isSimilarTo?: schema.ProductOrSubClass | schema.ServiceOrSubClass | string;
    /**
     * The type of service being offered, e.g. veterans' benefits, emergency relief, etc.
     */
    serviceType?: string | schema.GovernmentBenefitsType;
    /**
     * An associated logo.
     */
    logo?: string | schema.ImageObjectOrSubClass;
    /**
     * An intended audience, i.e. a group for whom something was created.
     */
    audience?: schema.AudienceOrSubClass | string;
    /**
     * The geographic area where the service is provided.
     */
    serviceArea?: schema.GeoShapeOrSubClass | schema.PlaceOrSubClass | schema.AdministrativeAreaOrSubClass | string;
    /**
     * Indicates an OfferCatalog listing for this Organization, Person, or Service.
     */
    hasOfferCatalog?: schema.OfferCatalogOrSubClass | string;
    /**
     * A pointer to another, somehow related product (or multiple products).
     */
    isRelatedTo?: schema.ProductOrSubClass | schema.ServiceOrSubClass | string;
    /**
     * The hours during which this service or contact is available.
     */
    hoursAvailable?: schema.OpeningHoursSpecificationOrSubClass | string;
    /**
     * A review of the item.
     */
    review?: schema.ReviewOrSubClass | string;
    /**
     * The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
     */
    provider?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
    /**
     * A means of accessing the service (e.g. a phone bank, a web site, a location, etc.).
     */
    availableChannel?: schema.ServiceChannelOrSubClass | string;
    /**
     * An entity that arranges for an exchange between a buyer and a seller.  In most cases a broker never acquires or releases ownership of a product or service involved in an exchange.  If it is not clear whether an entity is a broker, seller, or buyer, the latter two terms are preferred.
     */
    broker?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
    /**
     * The audience eligible for this service.
     */
    serviceAudience?: schema.AudienceOrSubClass | string;
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
 * schema:GovernmentService
 *
 * This differs from GovernmentService because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type GovernmentServiceOrSubClass = GovernmentService;
/**
 * schema:GovernmentService - Validation schema (w/ JOI)
 */
export declare const GovernmentServiceJoiSchema: Joi.ObjectSchema;
/**
 * schema:GovernmentService - Validation schema (w/ JOI)
 *
 * This differs from GovernmentServiceJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const GovernmentServiceOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:GovernmentService.
 *
 * If some data has a structure which matches a schema:GovernmentService, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeGovernmentService = validateGovernmentService(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeGovernmentService instanceof OaValidationError) {
 *   // From this point on, `maybeGovernmentService` will have type `OaValidationError`
 *   const error = maybeGovernmentService;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeGovernmentService` will have type `GovernmentService`
 * const governmentService = maybeGovernmentService;
 * ```
 */
export declare function validateGovernmentService(maybeGovernmentService: unknown): GovernmentService | OaValidationError;
