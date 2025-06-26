// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * PropertyValue
 *
 * This type is derived from https://schema.org/PropertyValue, which means that any of this type's properties within schema.org may also be used.
 */
export type PropertyValue = {
  '@type': 'PropertyValue';
  '@context'?: string | string[];
  /**
   * The identifier property represents any kind of identifier for any kind of [[Thing]], such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See [background notes](/docs/datamodel.html#identifierBg) for more details.
   *         
   */
  identifier?: schema.PropertyValueOrSubClass | string;
  /**
   * The name of this PropertyValue
   *
   * ```json
   * "name": "Vendor ID"
   * ```
   */
  name?: string;
  /**
   * Additional human-readable version of the value of the property.
   */
  description?: string;
  /**
   * A unique URI-based identifier for the record.
   * `@id` properties are used as identifiers for compatibility with JSON-LD. The value of such a property must always be an absolute URI that provides a stable globally unique identifier for the resource, as described in [RFC3986](https://tools.ietf.org/html/rfc3986).
   * The primary purpose of the URI format in this context is to provide natural namespacing for the identifier. Hence, the URI itself may not resolve to a valid endpoint, but must use a domain name controlled by the resource owner (the organisation responsible for the OpenActive open data feed).
   */
  '@id'?: string;
  /**
   * A commonly used identifier for the characteristic represented by the property
   *
   * ```json
   * "propertyID": "https://example.com/photoconsent"
   * ```
   */
  propertyID?: string;
  /**
   * The actual value of this identifier
   *
   * ```json
   * "value": "SB1234"
   * ```
   */
  value?: boolean | string;
  /**
   * A technique or technology used in a [[Dataset]] (or [[DataDownload]], [[DataCatalog]]),
   * corresponding to the method used for measuring the corresponding variable(s) (described using [[variableMeasured]]). This is oriented towards scientific and scholarly dataset publication but may have broader applicability; it is not intended as a full representation of measurement, but rather as a high level summary for dataset discovery.
   * 
   * For example, if [[variableMeasured]] is: molecule concentration, [[measurementTechnique]] could be: "mass spectrometry" or "nmr spectroscopy" or "colorimetry" or "immunofluorescence".
   * 
   * If the [[variableMeasured]] is "depression rating", the [[measurementTechnique]] could be "Zung Scale" or "HAM-D" or "Beck Depression Inventory".
   * 
   * If there are several [[variableMeasured]] properties recorded for some given data object, use a [[PropertyValue]] for each [[variableMeasured]] and attach the corresponding [[measurementTechnique]].
   *       
   */
  measurementTechnique?: string;
  /**
   * The lower value of some characteristic or property.
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
   * The upper value of some characteristic or property.
   */
  maxValue?: number;
  /**
   * A secondary value that provides additional information on the original value, e.g. a reference temperature or a type of measurement.
   */
  valueReference?: schema.PropertyValueOrSubClass | schema.StructuredValueOrSubClass | schema.QualitativeValue | schema.MeasurementTypeEnumeration | schema.QuantitativeValueOrSubClass | string | schema.DefinedTermOrSubClass | schema.EnumerationOrSubClass;
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
 * PropertyValue
 *
 * This type is derived from https://schema.org/PropertyValue, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from PropertyValue because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type PropertyValueOrSubClass =
  | PropertyValue
  ;

/**
 * PropertyValue - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/PropertyValue, which means that any of this type's properties within schema.org may also be used.
 */
export const PropertyValueJoiSchema = Joi.object({
  '@type': Joi.string().valid('PropertyValue').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  name: Joi.string(),
  description: Joi.string(),
  '@id': Joi.string().uri(),
  propertyID: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
  value: Joi.alternatives().try(Joi.boolean(), Joi.string().uri(), Joi.string()),
  measurementTechnique: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
  minValue: Joi.number(),
  unitText: Joi.string(),
  unitCode: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
  maxValue: Joi.number(),
  valueReference: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.lazy(() => schema.StructuredValueOrSubClassJoiSchema), Joi.lazy(() => schema.QualitativeValueJoiSchema), Joi.lazy(() => schema.MeasurementTypeEnumerationJoiSchema), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string(), Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.lazy(() => schema.EnumerationOrSubClassJoiSchema), Joi.string().uri()),
  mainEntityOfPage: Joi.alternatives().try(Joi.string().uri(), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema)),
  additionalType: Joi.string().uri(),
  url: Joi.string().uri(),
  alternateName: Joi.string(),
  sameAs: Joi.string().uri(),
  potentialAction: Joi.alternatives().try(Joi.lazy(() => schema.ActionOrSubClassJoiSchema), Joi.string().uri()),
  subjectOf: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
  disambiguatingDescription: Joi.string(),
  image: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
});

/**
 * PropertyValue - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/PropertyValue, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from PropertyValueJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const PropertyValueOrSubClassJoiSchema = Joi.alternatives().try([
  PropertyValueJoiSchema,
]);

/**
 * Runtime validator for PropertyValue.
 *
 * If some data has a structure which matches a PropertyValue, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybePropertyValue = validatePropertyValue(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybePropertyValue instanceof OaValidationError) {
 *   // From this point on, `maybePropertyValue` will have type `OaValidationError`
 *   const error = maybePropertyValue;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybePropertyValue` will have type `PropertyValue`
 * const propertyValue = maybePropertyValue;
 * ```
 */
export function validatePropertyValue(maybePropertyValue: unknown): PropertyValue | OaValidationError {
  const { value, error } = PropertyValueJoiSchema.validate(maybePropertyValue);
  if (error) {
    return new OaValidationError('PropertyValue', maybePropertyValue, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as PropertyValue;
}
