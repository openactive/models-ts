import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';
/**
 * Brand
 *
 * This type is derived from https://schema.org/Brand, which means that any of this type's properties within schema.org may also be used.
 */
export declare type Brand = {
    '@type': 'Brand';
    '@context'?: string | string[];
    /**
     * A local non-URI identifier for the resource
     *
     * ```json
     * "identifier": "BR1234"
     * ```
     */
    identifier?: number | string | oa.PropertyValueOrSubClass | oa.PropertyValueOrSubClass[];
    /**
     * The name of the brand.
     *
     * ```json
     * "name": "Play Ball!"
     * ```
     */
    name?: string;
    /**
     * A plain text description for the brand, which must not include HTML or other markup.
     *
     * ```json
     * "description": "Play Ball! is a series of games for people of all abilities."
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
     * The logo associated with the brand.
     *
     * ```json
     * "logo": {
     *   "@type": "ImageObject",
     *   "url": "http://example.com/static/image/speedball_large.jpg"
     * }
     * ```
     */
    logo?: oa.ImageObjectOrSubClass;
    /**
     * A url where further information can be found for the brand.
     *
     * ```json
     * "url": "http://example.com/play_ball"
     * ```
     */
    url?: string;
    /**
     * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
     * Sometimes a description is stored with formatting (e.g. href, bold, italics, embedded YouTube videos). This formatting can be useful for data consumers. This property must contain HTML.
     *
     * If you are using this property, please join the discussion at proposal [#276](https://github.com/openactive/modelling-opportunity-data/issues/276).
     */
    'beta:formattedDescription'?: string;
    /**
     * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
     * A related video object.
     *
     * If you are using this property, please join the discussion at proposal [#88](https://github.com/openactive/modelling-opportunity-data/issues/88).
     */
    'beta:video'?: oa.VideoObjectOrSubClass[];
    /**
     * The overall rating, based on a collection of reviews or ratings, of the item.
     */
    aggregateRating?: schema.AggregateRatingOrSubClass | string;
    /**
     * A slogan or motto associated with the item.
     */
    slogan?: string;
    /**
     * A review of the item.
     */
    review?: schema.ReviewOrSubClass | string;
    /**
     * Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See [background notes](/docs/datamodel.html#mainEntityBackground) for details.
     */
    mainEntityOfPage?: string | schema.CreativeWorkOrSubClass;
    /**
     * An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the 'typeof' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.
     */
    additionalType?: string;
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
 * Brand
 *
 * This type is derived from https://schema.org/Brand, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from Brand because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type BrandOrSubClass = Brand;
/**
 * Brand - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/Brand, which means that any of this type's properties within schema.org may also be used.
 */
export declare const BrandJoiSchema: Joi.ObjectSchema;
/**
 * Brand - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/Brand, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from BrandJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const BrandOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for Brand.
 *
 * If some data has a structure which matches a Brand, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeBrand = validateBrand(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeBrand instanceof OaValidationError) {
 *   // From this point on, `maybeBrand` will have type `OaValidationError`
 *   const error = maybeBrand;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeBrand` will have type `Brand`
 * const brand = maybeBrand;
 * ```
 */
export declare function validateBrand(maybeBrand: unknown): Brand | OaValidationError;
