import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';
/**
 * beta:CertificationScheme
 *
 * [NOTICE: This is a beta class, and is highly likely to change in future versions of this library.]
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
export declare type CertificationScheme = {
    '@type': 'CertificationScheme';
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
     * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
     * Property containing an array of CertificationLevels
     *
     * If you are using this property, please join the discussion at proposal [#217](https://github.com/openactive/modelling-opportunity-data/issues/217).
     */
    'beta:certificationLevel'?: oa.CertificationLevelOrSubClass;
    /**
     * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
     * From within a CertificationScheme, points to other CertificationSchemes considered valid and trusted in order to allow the creation of a trust network.
     *
     * If you are using this property, please join the discussion at proposal [#217](https://github.com/openactive/modelling-opportunity-data/issues/217).
     */
    'beta:trustedCertificationSchemes'?: string;
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
 * beta:CertificationScheme
 *
 * [NOTICE: This is a beta class, and is highly likely to change in future versions of this library.]
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from CertificationScheme because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type CertificationSchemeOrSubClass = CertificationScheme;
/**
 * beta:CertificationScheme - Validation schema (w/ JOI)
 *
 * [NOTICE: This is a beta class, and is highly likely to change in future versions of this library.]
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
export declare const CertificationSchemeJoiSchema: Joi.ObjectSchema;
/**
 * beta:CertificationScheme - Validation schema (w/ JOI)
 *
 * [NOTICE: This is a beta class, and is highly likely to change in future versions of this library.]
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from CertificationSchemeJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const CertificationSchemeOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for beta:CertificationScheme.
 *
 * If some data has a structure which matches a beta:CertificationScheme, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeCertificationScheme = validateCertificationScheme(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeCertificationScheme instanceof OaValidationError) {
 *   // From this point on, `maybeCertificationScheme` will have type `OaValidationError`
 *   const error = maybeCertificationScheme;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeCertificationScheme` will have type `CertificationScheme`
 * const certificationScheme = maybeCertificationScheme;
 * ```
 */
export declare function validateCertificationScheme(maybeCertificationScheme: unknown): CertificationScheme | OaValidationError;
