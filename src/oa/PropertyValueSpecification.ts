// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * PropertyValueSpecification
 *
 * This type is derived from https://schema.org/PropertyValueSpecification, which means that any of this type's properties within schema.org may also be used.
 */
export type PropertyValueSpecification = {
  '@type': 'PropertyValueSpecification';
  '@context'?: string | string[];
  /**
   * The identifier property represents any kind of identifier for any kind of [[Thing]], such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See [background notes](/docs/datamodel.html#identifierBg) for more details.
   *         
   */
  identifier?: schema.PropertyValueOrSubClass | string;
  /**
   * Display label for the field.
   */
  name?: string;
  /**
   * Descriptive help plain text for the field, which must not include HTML or other markup.
   */
  description?: string;
  /**
   * A unique url based identifier for the record
   *
   * ```json
   * "@id": "https://example.com/someid12345"
   * ```
   */
  '@id'?: string;
  /**
   * Specifies that a value for the field is required to proceed with the booking.
   */
  valueRequired?: boolean;
  /**
   * Indicates the name of the PropertyValueSpecification to be used in URL templates and form encoding in a manner analogous to HTML's `input@name`.
   */
  valueName?: string;
  /**
   * The default value of the input.  For properties that expect a literal, the default is a literal value, for properties that expect an object, it's an ID reference to one of the current values.
   */
  defaultValue?: schema.ThingOrSubClass | string;
  /**
   * The stepValue attribute indicates the granularity that is expected (and required) of the value in a PropertyValueSpecification.
   */
  stepValue?: number;
  /**
   * The upper value of some characteristic or property.
   */
  maxValue?: number;
  /**
   * Specifies a regular expression for testing literal values according to the HTML spec.
   */
  valuePattern?: string;
  /**
   * Whether multiple values are allowed for the property.  Default is false.
   */
  multipleValues?: boolean;
  /**
   * Whether or not a property is mutable.  Default is false. Specifying this for a property that also has a value makes it act similar to a "hidden" input in an HTML form.
   */
  readonlyValue?: boolean;
  /**
   * The lower value of some characteristic or property.
   */
  minValue?: number;
  /**
   * Specifies the allowed range for number of characters in a literal value.
   */
  valueMaxLength?: number;
  /**
   * Specifies the minimum allowed range for number of characters in a literal value.
   */
  valueMinLength?: number;
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
 * PropertyValueSpecification
 *
 * This type is derived from https://schema.org/PropertyValueSpecification, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from PropertyValueSpecification because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type PropertyValueSpecificationOrSubClass =
  | PropertyValueSpecification
  | oa.BooleanFormFieldSpecificationOrSubClass
  | oa.DropdownFormFieldSpecificationOrSubClass
  | oa.ParagraphFormFieldSpecificationOrSubClass
  | oa.ShortAnswerFormFieldSpecificationOrSubClass
  ;

/**
 * PropertyValueSpecification - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/PropertyValueSpecification, which means that any of this type's properties within schema.org may also be used.
 */
export const PropertyValueSpecificationJoiSchema = Joi.object({
  '@type': Joi.string().valid('PropertyValueSpecification').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
  name: Joi.string(),
  description: Joi.string(),
  '@id': Joi.string().uri(),
  valueRequired: Joi.boolean(),
  valueName: Joi.string(),
  defaultValue: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  stepValue: Joi.number(),
  maxValue: Joi.number(),
  valuePattern: Joi.string(),
  multipleValues: Joi.boolean(),
  readonlyValue: Joi.boolean(),
  minValue: Joi.number(),
  valueMaxLength: Joi.number(),
  valueMinLength: Joi.number(),
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
 * PropertyValueSpecification - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/PropertyValueSpecification, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from PropertyValueSpecificationJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const PropertyValueSpecificationOrSubClassJoiSchema = Joi.alternatives().try([
  PropertyValueSpecificationJoiSchema,
  Joi.lazy(() => oa.BooleanFormFieldSpecificationOrSubClassJoiSchema),
  Joi.lazy(() => oa.DropdownFormFieldSpecificationOrSubClassJoiSchema),
  Joi.lazy(() => oa.ParagraphFormFieldSpecificationOrSubClassJoiSchema),
  Joi.lazy(() => oa.ShortAnswerFormFieldSpecificationOrSubClassJoiSchema),
]);

/**
 * Runtime validator for PropertyValueSpecification.
 *
 * If some data has a structure which matches a PropertyValueSpecification, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybePropertyValueSpecification = validatePropertyValueSpecification(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybePropertyValueSpecification instanceof OaValidationError) {
 *   // From this point on, `maybePropertyValueSpecification` will have type `OaValidationError`
 *   const error = maybePropertyValueSpecification;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybePropertyValueSpecification` will have type `PropertyValueSpecification`
 * const propertyValueSpecification = maybePropertyValueSpecification;
 * ```
 */
export function validatePropertyValueSpecification(maybePropertyValueSpecification: unknown): PropertyValueSpecification | OaValidationError {
  const { value, error } = PropertyValueSpecificationJoiSchema.validate(maybePropertyValueSpecification);
  if (error) {
    return new OaValidationError('PropertyValueSpecification', maybePropertyValueSpecification, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as PropertyValueSpecification;
}
