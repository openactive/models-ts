import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as schema from '../schema';
/**
 * GeoCoordinates
 *
 * This type is derived from https://schema.org/GeoCoordinates, which means that any of this type's properties within schema.org may also be used.
 */
export declare type GeoCoordinates = {
    '@type': 'GeoCoordinates';
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
     * The latitude of a location. For example 51.522338 (WGS 84).
     *
     * ```json
     * "latitude": "51.522338"
     * ```
     */
    latitude?: number;
    /**
     * The longitude of a location. For example -0.083437 (WGS 84).
     *
     * ```json
     * "longitude": "-0.083437"
     * ```
     */
    longitude?: number;
    /**
     * The postal code. For example, 94043.
     */
    postalCode?: string;
    /**
     * The elevation of a location ([WGS 84](https://en.wikipedia.org/wiki/World_Geodetic_System)). Values may be of the form 'NUMBER UNIT_OF_MEASUREMENT' (e.g., '1,000 m', '3,200 ft') while numbers alone should be assumed to be a value in meters.
     */
    elevation?: string | number;
    /**
     * Physical address of the item.
     */
    address?: schema.PostalAddressOrSubClass | string;
    /**
     * The country. For example, USA. You can also provide the two-letter [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1).
     */
    addressCountry?: string | schema.CountryOrSubClass;
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
 * GeoCoordinates
 *
 * This type is derived from https://schema.org/GeoCoordinates, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from GeoCoordinates because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type GeoCoordinatesOrSubClass = GeoCoordinates;
/**
 * GeoCoordinates - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/GeoCoordinates, which means that any of this type's properties within schema.org may also be used.
 */
export declare const GeoCoordinatesJoiSchema: Joi.ObjectSchema;
/**
 * GeoCoordinates - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/GeoCoordinates, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from GeoCoordinatesJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const GeoCoordinatesOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for GeoCoordinates.
 *
 * If some data has a structure which matches a GeoCoordinates, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeGeoCoordinates = validateGeoCoordinates(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeGeoCoordinates instanceof OaValidationError) {
 *   // From this point on, `maybeGeoCoordinates` will have type `OaValidationError`
 *   const error = maybeGeoCoordinates;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeGeoCoordinates` will have type `GeoCoordinates`
 * const geoCoordinates = maybeGeoCoordinates;
 * ```
 */
export declare function validateGeoCoordinates(maybeGeoCoordinates: unknown): GeoCoordinates | OaValidationError;
