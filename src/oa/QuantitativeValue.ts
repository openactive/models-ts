// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * QuantitativeValue
 *
 * This type is derived from https://schema.org/QuantitativeValue, which means that any of this type's properties within schema.org may also be used.
 */
export type QuantitativeValue = {
  '@type': 'QuantitativeValue';
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
   * The maximum value.
   *
   * ```json
   * "maxValue": 60
   * ```
   */
  maxValue?: number;
  /**
   * The minimum value.
   *
   * ```json
   * "minValue": 16
   * ```
   */
  minValue?: number;
  /**
   * A string or text indicating the unit of measurement. Useful if you cannot provide a standard unit code for
   * <a href='unitCode'>unitCode</a>.
   */
  unitText?: string;
  /**
   * The unit of measurement given using the UN/CEFACT Common Code (3 characters) or a URL. Other codes than the UN/CEFACT Common Code may be used with a prefix followed by a colon.
   */
  unitCode?: string;
  /**
   * A secondary value that provides additional information on the original value, e.g. a reference temperature or a type of measurement.
   */
  valueReference?: schema.QuantitativeValueOrSubClass | schema.MeasurementTypeEnumeration | schema.DefinedTermOrSubClass | schema.EnumerationOrSubClass | schema.PropertyValueOrSubClass | schema.QualitativeValue | string | schema.StructuredValueOrSubClass;
  /**
   * A property-value pair representing an additional characteristics of the entitity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.\n\nNote: Publishers should be aware that applications designed to use specific schema.org properties (e.g. https://schema.org/width, https://schema.org/color, https://schema.org/gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.
   * 
   */
  additionalProperty?: schema.PropertyValueOrSubClass | string;
  /**
   * The value of the quantitative value or property value node.\n\n* For [[QuantitativeValue]] and [[MonetaryAmount]], the recommended type for values is 'Number'.\n* For [[PropertyValue]], it can be 'Text;', 'Number', 'Boolean', or 'StructuredValue'.\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
   */
  value?: number | schema.StructuredValueOrSubClass | boolean | string;
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
 * QuantitativeValue
 *
 * This type is derived from https://schema.org/QuantitativeValue, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from QuantitativeValue because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type QuantitativeValueOrSubClass =
  | QuantitativeValue
  ;

/**
 * QuantitativeValue - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/QuantitativeValue, which means that any of this type's properties within schema.org may also be used.
 */
export const QuantitativeValueJoiSchema = Joi.object({
  '@type': Joi.string().valid('QuantitativeValue').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
  name: Joi.string(),
  description: Joi.string(),
  '@id': Joi.string().uri(),
  maxValue: Joi.number().integer(),
  minValue: Joi.number().integer(),
  unitText: Joi.string(),
  unitCode: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
  valueReference: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.lazy(() => schema.MeasurementTypeEnumerationJoiSchema), Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.lazy(() => schema.EnumerationOrSubClassJoiSchema), Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.lazy(() => schema.QualitativeValueJoiSchema), Joi.string(), Joi.lazy(() => schema.StructuredValueOrSubClassJoiSchema), Joi.string().uri()),
  additionalProperty: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri()),
  value: Joi.alternatives().try(Joi.number(), Joi.lazy(() => schema.StructuredValueOrSubClassJoiSchema), Joi.boolean(), Joi.string(), Joi.string().uri()),
  sameAs: Joi.string().uri(),
  subjectOf: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
  potentialAction: Joi.alternatives().try(Joi.lazy(() => schema.ActionOrSubClassJoiSchema), Joi.string().uri()),
  mainEntityOfPage: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
  additionalType: Joi.string().uri(),
  alternateName: Joi.string(),
  url: Joi.string().uri(),
  image: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
  disambiguatingDescription: Joi.string(),
});

/**
 * QuantitativeValue - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/QuantitativeValue, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from QuantitativeValueJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const QuantitativeValueOrSubClassJoiSchema = Joi.alternatives().try([
  QuantitativeValueJoiSchema,
]);

/**
 * Runtime validator for QuantitativeValue.
 *
 * If some data has a structure which matches a QuantitativeValue, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeQuantitativeValue = validateQuantitativeValue(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeQuantitativeValue instanceof OaValidationError) {
 *   // From this point on, `maybeQuantitativeValue` will have type `OaValidationError`
 *   const error = maybeQuantitativeValue;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeQuantitativeValue` will have type `QuantitativeValue`
 * const quantitativeValue = maybeQuantitativeValue;
 * ```
 */
export function validateQuantitativeValue(maybeQuantitativeValue: unknown): QuantitativeValue | OaValidationError {
  const { value, error } = QuantitativeValueJoiSchema.validate(maybeQuantitativeValue);
  if (error) {
    return new OaValidationError('QuantitativeValue', maybeQuantitativeValue, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as QuantitativeValue;
}
