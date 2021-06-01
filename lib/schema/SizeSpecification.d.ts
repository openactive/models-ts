import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as schema from '../schema';
/**
 * schema:SizeSpecification
 */
export declare type SizeSpecification = {
    '@type': 'SizeSpecification';
    '@context'?: string | string[];
    /**
     * A unique url based identifier for the record
     */
    '@id'?: string;
    /**
     * A product measurement, for example the inseam of pants, the wheel size of a bicycle, or the gauge of a screw. Usually an exact measurement, but can also be a range of measurements for adjustable products, for example belts and ski bindings.
     */
    hasMeasurement?: schema.QuantitativeValueOrSubClass | string;
    /**
     * The suggested gender of the intended person or audience, for example "male", "female", or "unisex".
     */
    suggestedGender?: string | schema.GenderType;
    /**
     * The size system used to identify a product's size. Typically either a standard (for example, "GS1" or "ISO-EN13402"), country code (for example "US" or "JP"), or a measuring system (for example "Metric" or "Imperial").
     */
    sizeSystem?: schema.SizeSystemEnumeration | string;
    /**
     * The age or age range for the intended audience or person, for example 3-12 months for infants, 1-5 years for toddlers.
     */
    suggestedAge?: schema.QuantitativeValueOrSubClass | string;
    /**
     * A suggested range of body measurements for the intended audience or person, for example inseam between 32 and 34 inches or height between 170 and 190 cm. Typically found on a size chart for wearable products.
     */
    suggestedMeasurement?: schema.QuantitativeValueOrSubClass | string;
    /**
     * The size group (also known as "size type") for a product's size. Size groups are common in the fashion industry to define size segments and suggested audiences for wearable products. Multiple values can be combined, for example "men's big and tall", "petite maternity" or "regular"
     */
    sizeGroup?: schema.SizeGroupEnumeration | string;
};
/**
 * schema:SizeSpecification
 *
 * This differs from SizeSpecification because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type SizeSpecificationOrSubClass = SizeSpecification;
/**
 * schema:SizeSpecification - Validation schema (w/ JOI)
 */
export declare const SizeSpecificationJoiSchema: Joi.ObjectSchema;
/**
 * schema:SizeSpecification - Validation schema (w/ JOI)
 *
 * This differs from SizeSpecificationJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const SizeSpecificationOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:SizeSpecification.
 *
 * If some data has a structure which matches a schema:SizeSpecification, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeSizeSpecification = SizeSpecification.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeSizeSpecification instanceof OaValidationError) {
 *   // From this point on, `maybeSizeSpecification` will have type `OaValidationError`
 *   const error = maybeSizeSpecification;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeSizeSpecification` will have type `SizeSpecification`
 * const sizeSpecification = maybeSizeSpecification;
 * ```
 */
export declare function validateSizeSpecification(maybeSizeSpecification: unknown): SizeSpecification | OaValidationError;
