import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as schema from '../schema';
/**
 * schema:PostalAddress
 */
export declare type PostalAddress = {
    '@type': 'PostalAddress';
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
     * The locality in which the street address is, and which is in the region. For example, Mountain View.
     */
    addressLocality?: string;
    /**
     * The country. For example, USA. You can also provide the two-letter [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1).
     */
    addressCountry?: string | schema.CountryOrSubClass;
    /**
     * The post office box number for PO box addresses.
     */
    postOfficeBoxNumber?: string;
    /**
     * The street address. For example, 1600 Amphitheatre Pkwy.
     */
    streetAddress?: string;
    /**
     * The region in which the locality is, and which is in the country. For example, California or another appropriate first-level [Administrative division](https://en.wikipedia.org/wiki/List_of_administrative_divisions_by_country)
     */
    addressRegion?: string;
    /**
     * The postal code. For example, 94043.
     */
    postalCode?: string;
    /**
     * A language someone may use with or at the item, service or place. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[inLanguage]]
     */
    availableLanguage?: schema.LanguageOrSubClass | string;
    /**
     * The geographic area where a service or offered item is provided.
     */
    areaServed?: string | schema.PlaceOrSubClass | schema.AdministrativeAreaOrSubClass | schema.GeoShapeOrSubClass;
    /**
     * The product or service this support contact point is related to (such as product support for a particular product line). This can be a specific product or product line (e.g. "iPhone") or a general category of products or services (e.g. "smartphones").
     */
    productSupported?: schema.ProductOrSubClass | string;
    /**
     * Email address.
     */
    email?: string;
    /**
     * The telephone number.
     */
    telephone?: string;
    /**
     * A person or organization can have different contact points, for different purposes. For example, a sales contact point, a PR contact point and so on. This property is used to specify the kind of contact point.
     */
    contactType?: string;
    /**
     * The hours during which this service or contact is available.
     */
    hoursAvailable?: schema.OpeningHoursSpecificationOrSubClass | string;
    /**
     * The geographic area where the service is provided.
     */
    serviceArea?: schema.PlaceOrSubClass | schema.AdministrativeAreaOrSubClass | schema.GeoShapeOrSubClass | string;
    /**
     * The fax number.
     */
    faxNumber?: string;
    /**
     * An option available on this contact point (e.g. a toll-free number or support for hearing-impaired callers).
     */
    contactOption?: schema.ContactPointOption;
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
 * schema:PostalAddress
 *
 * This differs from PostalAddress because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type PostalAddressOrSubClass = PostalAddress;
/**
 * schema:PostalAddress - Validation schema (w/ JOI)
 */
export declare const PostalAddressJoiSchema: Joi.ObjectSchema;
/**
 * schema:PostalAddress - Validation schema (w/ JOI)
 *
 * This differs from PostalAddressJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const PostalAddressOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:PostalAddress.
 *
 * If some data has a structure which matches a schema:PostalAddress, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybePostalAddress = PostalAddress.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybePostalAddress instanceof OaValidationError) {
 *   // From this point on, `maybePostalAddress` will have type `OaValidationError`
 *   const error = maybePostalAddress;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybePostalAddress` will have type `PostalAddress`
 * const postalAddress = maybePostalAddress;
 * ```
 */
export declare function validatePostalAddress(maybePostalAddress: unknown): PostalAddress | OaValidationError;
