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
    description?: string | schema.TextObjectOrSubClass;
    /**
     * A unique URI-based identifier for the record.
     * `@id` properties are used as identifiers for compatibility with JSON-LD. The value of such a property must always be an absolute URI that provides a stable globally unique identifier for the resource, as described in [RFC3986](https://tools.ietf.org/html/rfc3986).
     * The primary purpose of the URI format in this context is to provide natural namespacing for the identifier. Hence, the URI itself may not resolve to a valid endpoint, but must use a domain name controlled by the resource owner (the organisation responsible for the OpenActive open data feed).
     */
    '@id'?: string;
    /**
     * A property-value pair representing an additional characteristic of the entity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.\n\nNote: Publishers should be aware that applications designed to use specific schema.org properties (e.g. https://schema.org/width, https://schema.org/color, https://schema.org/gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.
     *
     */
    additionalProperty?: schema.PropertyValueOrSubClass | string;
    /**
     * A country where a particular merchant return policy applies to, for example the two-letter ISO 3166-1 alpha-2 country code.
     */
    applicableCountry?: schema.CountryOrSubClass | string;
    /**
     * The type of return fees if the product is returned due to customer remorse.
     */
    customerRemorseReturnFees?: schema.ReturnFeesEnumeration;
    /**
     * The method (from an enumeration) by which the customer obtains a return shipping label for a product returned due to customer remorse.
     */
    customerRemorseReturnLabelSource?: schema.ReturnLabelSourceEnumeration;
    /**
     * The amount of shipping costs if a product is returned due to customer remorse. Applicable when property [[customerRemorseReturnFees]] equals [[ReturnShippingFees]].
     */
    customerRemorseReturnShippingFeesAmount?: schema.MonetaryAmountOrSubClass | string;
    /**
     * Are in-store returns offered? (For more advanced return methods use the [[returnMethod]] property.)
     */
    inStoreReturnsOffered?: boolean;
    /**
     * A predefined value from OfferItemCondition specifying the condition of the product or service, or the products or services included in the offer. Also used for product return policies to specify the condition of products accepted for returns.
     */
    itemCondition?: schema.OfferItemCondition;
    /**
     * The type of return fees for returns of defect products.
     */
    itemDefectReturnFees?: schema.ReturnFeesEnumeration;
    /**
     * The method (from an enumeration) by which the customer obtains a return shipping label for a defect product.
     */
    itemDefectReturnLabelSource?: schema.ReturnLabelSourceEnumeration;
    /**
     * Amount of shipping costs for defect product returns. Applicable when property [[itemDefectReturnFees]] equals [[ReturnShippingFees]].
     */
    itemDefectReturnShippingFeesAmount?: schema.MonetaryAmountOrSubClass | string;
    /**
     * Specifies either a fixed return date or the number of days (from the delivery date) that a product can be returned. Used when the [[returnPolicyCategory]] property is specified as [[MerchantReturnFiniteReturnWindow]].
     */
    merchantReturnDays?: string | number;
    /**
     * Specifies a Web page or service by URL, for product returns.
     */
    merchantReturnLink?: string;
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
     * The method (from an enumeration) by which the customer obtains a return shipping label for a product returned for any reason.
     */
    returnLabelSource?: schema.ReturnLabelSourceEnumeration;
    /**
     * The type of return method offered, specified from an enumeration.
     */
    returnMethod?: schema.ReturnMethodEnumeration;
    /**
     * Specifies an applicable return policy (from an enumeration).
     */
    returnPolicyCategory?: schema.MerchantReturnEnumeration;
    /**
     * The country where the product has to be sent to for returns, for example "Ireland" using the [[name]] property of [[Country]]. You can also provide the two-letter [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1). Note that this can be different from the country where the product was originally shipped from or sent to.
     */
    returnPolicyCountry?: schema.CountryOrSubClass | string;
    /**
     * Seasonal override of a return policy.
     */
    returnPolicySeasonalOverride?: schema.MerchantReturnPolicySeasonalOverrideOrSubClass | string;
    /**
     * Amount of shipping costs for product returns (for any reason). Applicable when property [[returnFees]] equals [[ReturnShippingFees]].
     */
    returnShippingFeesAmount?: schema.MonetaryAmountOrSubClass | string;
    /**
     * The membership program tier(s) an Offer (or a PriceSpecification, OfferShippingDetails, or MerchantReturnPolicy under an Offer) is valid for.
     */
    validForMemberTier?: schema.MemberProgramTierOrSubClass | string;
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
