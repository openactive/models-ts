// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * ChangingFacilities
 *
 * This type is derived from https://schema.org/LocationFeatureSpecification, which means that any of this type's properties within schema.org may also be used.
 */
export type ChangingFacilities = {
  '@type': 'ChangingFacilities';
  '@context'?: string | string[];
  /**
   * The identifier property represents any kind of identifier for any kind of [[Thing]], such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See [background notes](/docs/datamodel.html#identifierBg) for more details.
   *         
   */
  identifier?: schema.PropertyValueOrSubClass | string;
  /**
   * A string, suitable for presentation in user interfaces.
   *
   * ```json
   * "name": "Changing Rooms"
   * ```
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
   * A boolean value indicating whether this ammenity is available.
   */
  value?: boolean;
  /**
   * The date when the item becomes valid.
   */
  validFrom?: string;
  /**
   * The hours during which this service or contact is available.
   */
  hoursAvailable?: schema.OpeningHoursSpecificationOrSubClass | string;
  /**
   * The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours.
   */
  validThrough?: string;
  /**
   * The upper value of some characteristic or property.
   */
  maxValue?: number;
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
   * A commonly used identifier for the characteristic represented by the property, e.g. a manufacturer or a standard code for a property. propertyID can be
   * (1) a prefixed string, mainly meant to be used with standards for product properties; (2) a site-specific, non-prefixed string (e.g. the primary key of the property or the vendor-specific id of the property), or (3)
   * a URL indicating the type of the property, either pointing to an external vocabulary, or a Web resource that describes the property (e.g. a glossary entry).
   * Standards bodies should promote a standard prefix for the identifiers of properties from their standards.
   */
  propertyID?: string;
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
 * ChangingFacilities
 *
 * This type is derived from https://schema.org/LocationFeatureSpecification, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from ChangingFacilities because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type ChangingFacilitiesOrSubClass =
  | ChangingFacilities
  ;

/**
 * ChangingFacilities - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/LocationFeatureSpecification, which means that any of this type's properties within schema.org may also be used.
 */
export const ChangingFacilitiesJoiSchema = Joi.object({
  '@type': Joi.string().valid('ChangingFacilities').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
  name: Joi.string(),
  description: Joi.string(),
  '@id': Joi.string().uri(),
  value: Joi.boolean(),
  validFrom: Joi.string().isoDate(),
  hoursAvailable: Joi.alternatives().try(Joi.lazy(() => schema.OpeningHoursSpecificationOrSubClassJoiSchema), Joi.string().uri()),
  validThrough: Joi.string().isoDate(),
  maxValue: Joi.number(),
  unitText: Joi.string(),
  unitCode: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
  valueReference: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.lazy(() => schema.MeasurementTypeEnumerationJoiSchema), Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.lazy(() => schema.EnumerationOrSubClassJoiSchema), Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.lazy(() => schema.QualitativeValueJoiSchema), Joi.string(), Joi.lazy(() => schema.StructuredValueOrSubClassJoiSchema), Joi.string().uri()),
  measurementTechnique: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
  minValue: Joi.number(),
  propertyID: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
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
 * ChangingFacilities - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/LocationFeatureSpecification, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from ChangingFacilitiesJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const ChangingFacilitiesOrSubClassJoiSchema = Joi.alternatives().try([
  ChangingFacilitiesJoiSchema,
]);

/**
 * Runtime validator for ChangingFacilities.
 *
 * If some data has a structure which matches a ChangingFacilities, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeChangingFacilities = ChangingFacilities.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeChangingFacilities instanceof OaValidationError) {
 *   // From this point on, `maybeChangingFacilities` will have type `OaValidationError`
 *   const error = maybeChangingFacilities;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeChangingFacilities` will have type `ChangingFacilities`
 * const changingFacilities = maybeChangingFacilities;
 * ```
 */
export function validateChangingFacilities(maybeChangingFacilities: unknown): ChangingFacilities | OaValidationError {
  const { value, error } = ChangingFacilitiesJoiSchema.validate(maybeChangingFacilities);
  if (error) {
    return new OaValidationError('ChangingFacilities', maybeChangingFacilities, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as ChangingFacilities;
}
