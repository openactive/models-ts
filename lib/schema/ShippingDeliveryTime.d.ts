import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as schema from '../schema';
/**
 * schema:ShippingDeliveryTime
 */
export declare type ShippingDeliveryTime = {
    '@type': 'ShippingDeliveryTime';
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
     * The typical delay between the receipt of the order and the goods either leaving the warehouse or being prepared for pickup, in case the delivery method is on site pickup. Typical properties: minValue, maxValue, unitCode (d for DAY).  This is by common convention assumed to mean business days (if a unitCode is used, coded as "d"), i.e. only counting days when the business normally operates.
     */
    handlingTime?: schema.QuantitativeValueOrSubClass | string;
    /**
     * Days of the week when the merchant typically operates, indicated via opening hours markup.
     */
    businessDays?: schema.OpeningHoursSpecificationOrSubClass | string;
    /**
     * Order cutoff time allows merchants to describe the time after which they will no longer process orders received on that day. For orders processed after cutoff time, one day gets added to the delivery time estimate. This property is expected to be most typically used via the [[ShippingRateSettings]] publication pattern. The time is indicated using the ISO-8601 Time format, e.g. "23:30:00-05:00" would represent 6:30 pm Eastern Standard Time (EST) which is 5 hours behind Coordinated Universal Time (UTC).
     */
    cutoffTime?: string;
    /**
     * The typical delay the order has been sent for delivery and the goods reach the final customer. Typical properties: minValue, maxValue, unitCode (d for DAY).
     */
    transitTime?: schema.QuantitativeValueOrSubClass | string;
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
 * schema:ShippingDeliveryTime
 *
 * This differs from ShippingDeliveryTime because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type ShippingDeliveryTimeOrSubClass = ShippingDeliveryTime;
/**
 * schema:ShippingDeliveryTime - Validation schema (w/ JOI)
 */
export declare const ShippingDeliveryTimeJoiSchema: Joi.ObjectSchema;
/**
 * schema:ShippingDeliveryTime - Validation schema (w/ JOI)
 *
 * This differs from ShippingDeliveryTimeJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const ShippingDeliveryTimeOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:ShippingDeliveryTime.
 *
 * If some data has a structure which matches a schema:ShippingDeliveryTime, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeShippingDeliveryTime = validateShippingDeliveryTime(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeShippingDeliveryTime instanceof OaValidationError) {
 *   // From this point on, `maybeShippingDeliveryTime` will have type `OaValidationError`
 *   const error = maybeShippingDeliveryTime;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeShippingDeliveryTime` will have type `ShippingDeliveryTime`
 * const shippingDeliveryTime = maybeShippingDeliveryTime;
 * ```
 */
export declare function validateShippingDeliveryTime(maybeShippingDeliveryTime: unknown): ShippingDeliveryTime | OaValidationError;
