import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as schema from '../schema';
/**
 * schema:MerchantReturnPolicy
 */
export declare type MerchantReturnPolicy = {
    '@type': 'MerchantReturnPolicy';
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
     * A returnPolicyCategory expresses at most one of several enumerated kinds of return.
     */
    returnPolicyCategory?: schema.MerchantReturnEnumeration;
    /**
     * A refundType, from an enumerated list.
     */
    refundType?: schema.RefundTypeEnumeration;
    /**
     * Indicates (via enumerated options) the return fees policy for a MerchantReturnPolicy
     */
    returnFees?: schema.ReturnFeesEnumeration;
    /**
     * Indicates a Web page or service by URL, for product return.
     */
    merchantReturnLink?: string;
    /**
     * The merchantReturnDays property indicates the number of days (from purchase) within which relevant merchant return policy is applicable.
     */
    merchantReturnDays?: number;
    /**
     * Are in-store returns offered?
     */
    inStoreReturnsOffered?: boolean;
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
 * schema:MerchantReturnPolicy
 *
 * This differs from MerchantReturnPolicy because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type MerchantReturnPolicyOrSubClass = MerchantReturnPolicy;
/**
 * schema:MerchantReturnPolicy - Validation schema (w/ JOI)
 */
export declare const MerchantReturnPolicyJoiSchema: Joi.ObjectSchema;
/**
 * schema:MerchantReturnPolicy - Validation schema (w/ JOI)
 *
 * This differs from MerchantReturnPolicyJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const MerchantReturnPolicyOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:MerchantReturnPolicy.
 *
 * If some data has a structure which matches a schema:MerchantReturnPolicy, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMerchantReturnPolicy = validateMerchantReturnPolicy(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMerchantReturnPolicy instanceof OaValidationError) {
 *   // From this point on, `maybeMerchantReturnPolicy` will have type `OaValidationError`
 *   const error = maybeMerchantReturnPolicy;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMerchantReturnPolicy` will have type `MerchantReturnPolicy`
 * const merchantReturnPolicy = maybeMerchantReturnPolicy;
 * ```
 */
export declare function validateMerchantReturnPolicy(maybeMerchantReturnPolicy: unknown): MerchantReturnPolicy | OaValidationError;
