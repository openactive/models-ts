import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as schema from '../schema';
/**
 * schema:StructuredValue
 */
export declare type StructuredValue = {
    '@type': 'StructuredValue';
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
 * schema:StructuredValue
 *
 * This differs from StructuredValue because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type StructuredValueOrSubClass = StructuredValue | schema.NutritionInformationOrSubClass | schema.EngineSpecificationOrSubClass | schema.WarrantyPromiseOrSubClass | schema.OfferShippingDetailsOrSubClass | schema.OwnershipInfoOrSubClass | schema.MonetaryAmountOrSubClass | schema.QuantitativeValueOrSubClass | schema.GeoShapeOrSubClass | schema.RepaymentSpecificationOrSubClass | schema.DeliveryTimeSettingsOrSubClass | schema.InteractionCounterOrSubClass | schema.PriceSpecificationOrSubClass | schema.OpeningHoursSpecificationOrSubClass | schema.PostalCodeRangeSpecificationOrSubClass | schema.GeoCoordinatesOrSubClass | schema.QuantitativeValueDistributionOrSubClass | schema.ContactPointOrSubClass | schema.ShippingDeliveryTimeOrSubClass | schema.DefinedRegionOrSubClass | schema.CDCPMDRecordOrSubClass | schema.PropertyValueOrSubClass | schema.ExchangeRateSpecificationOrSubClass | schema.DatedMoneySpecificationOrSubClass | schema.ShippingRateSettingsOrSubClass | schema.TypeAndQuantityNodeOrSubClass;
/**
 * schema:StructuredValue - Validation schema (w/ JOI)
 */
export declare const StructuredValueJoiSchema: Joi.ObjectSchema;
/**
 * schema:StructuredValue - Validation schema (w/ JOI)
 *
 * This differs from StructuredValueJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const StructuredValueOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:StructuredValue.
 *
 * If some data has a structure which matches a schema:StructuredValue, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeStructuredValue = validateStructuredValue(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeStructuredValue instanceof OaValidationError) {
 *   // From this point on, `maybeStructuredValue` will have type `OaValidationError`
 *   const error = maybeStructuredValue;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeStructuredValue` will have type `StructuredValue`
 * const structuredValue = maybeStructuredValue;
 * ```
 */
export declare function validateStructuredValue(maybeStructuredValue: unknown): StructuredValue | OaValidationError;
