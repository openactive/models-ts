import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as schema from '../schema';
/**
 * schema:MerchantReturnPolicySeasonalOverride
 */
export declare type MerchantReturnPolicySeasonalOverride = {
    '@type': 'MerchantReturnPolicySeasonalOverride';
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
     * The end date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
     */
    endDate?: string;
    /**
     * Specifies either a fixed return date or the number of days (from the delivery date) that a product can be returned. Used when the [[returnPolicyCategory]] property is specified as [[MerchantReturnFiniteReturnWindow]].
     */
    merchantReturnDays?: string | number;
    /**
     * A refund type, from an enumerated list.
     */
    refundType?: schema.RefundTypeEnumeration;
    /**
     * Use [[MonetaryAmount]] to specify a fixed restocking fee for product returns, or use [[Number]] to specify a percentage of the product price paid by the customer.
     */
    restockingFee?: schema.MonetaryAmountOrSubClass | number | string;
    /**
     * The type of return fees for purchased products (for any return reason).
     */
    returnFees?: schema.ReturnFeesEnumeration;
    /**
     * The type of return method offered, specified from an enumeration.
     */
    returnMethod?: schema.ReturnMethodEnumeration;
    /**
     * Specifies an applicable return policy (from an enumeration).
     */
    returnPolicyCategory?: schema.MerchantReturnEnumeration;
    /**
     * Amount of shipping costs for product returns (for any reason). Applicable when property [[returnFees]] equals [[ReturnShippingFees]].
     */
    returnShippingFeesAmount?: schema.MonetaryAmountOrSubClass | string;
    /**
     * The start date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
     */
    startDate?: string;
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
 * schema:MerchantReturnPolicySeasonalOverride
 *
 * This differs from MerchantReturnPolicySeasonalOverride because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type MerchantReturnPolicySeasonalOverrideOrSubClass = MerchantReturnPolicySeasonalOverride;
/**
 * schema:MerchantReturnPolicySeasonalOverride - Validation schema (w/ JOI)
 */
export declare const MerchantReturnPolicySeasonalOverrideJoiSchema: Joi.ObjectSchema;
/**
 * schema:MerchantReturnPolicySeasonalOverride - Validation schema (w/ JOI)
 *
 * This differs from MerchantReturnPolicySeasonalOverrideJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const MerchantReturnPolicySeasonalOverrideOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:MerchantReturnPolicySeasonalOverride.
 *
 * If some data has a structure which matches a schema:MerchantReturnPolicySeasonalOverride, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMerchantReturnPolicySeasonalOverride = validateMerchantReturnPolicySeasonalOverride(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMerchantReturnPolicySeasonalOverride instanceof OaValidationError) {
 *   // From this point on, `maybeMerchantReturnPolicySeasonalOverride` will have type `OaValidationError`
 *   const error = maybeMerchantReturnPolicySeasonalOverride;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMerchantReturnPolicySeasonalOverride` will have type `MerchantReturnPolicySeasonalOverride`
 * const merchantReturnPolicySeasonalOverride = maybeMerchantReturnPolicySeasonalOverride;
 * ```
 */
export declare function validateMerchantReturnPolicySeasonalOverride(maybeMerchantReturnPolicySeasonalOverride: unknown): MerchantReturnPolicySeasonalOverride | OaValidationError;
