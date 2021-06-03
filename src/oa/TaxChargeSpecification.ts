// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * TaxChargeSpecification
 *
 * This type is derived from https://schema.org/PriceSpecification, which means that any of this type's properties within schema.org may also be used.
 */
export type TaxChargeSpecification = {
  '@type': 'TaxChargeSpecification';
  '@context'?: string | string[];
  /**
   * A local non-URI identifier for the resource
   *
   * ```json
   * "identifier": "SB1234"
   * ```
   */
  identifier?: number | string | oa.PropertyValueOrSubClass | oa.PropertyValueOrSubClass[];
  /**
   * The name of the tax charge, e.g. "VAT at 0% for EU transactions"
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
   * The total amount.
   */
  price?: number;
  /**
   * The currency of the price. Specified as a 3-letter ISO 4217 value. If a  PriceSpecification has a zero price, then this property is not required. Otherwise the priceCurrency must be specified.
   */
  priceCurrency?: string;
  /**
   * The rate of VAT.
   */
  rate?: number;
  /**
   * The date when the item becomes valid.
   */
  validFrom?: string;
  /**
   * The lowest price if the price is a range.
   */
  minPrice?: number;
  /**
   * The highest price if the price is a range.
   */
  maxPrice?: number;
  /**
   * The transaction volume, in a monetary unit, for which the offer or price specification is valid, e.g. for indicating a minimal purchasing volume, to express free shipping above a certain order volume, or to limit the acceptance of credit cards to purchases to a certain minimal amount.
   */
  eligibleTransactionVolume?: schema.PriceSpecificationOrSubClass | string;
  /**
   * The interval and unit of measurement of ordering quantities for which the offer or price specification is valid. This allows e.g. specifying that a certain freight charge is valid only for a certain quantity.
   */
  eligibleQuantity?: schema.QuantitativeValueOrSubClass | string;
  /**
   * Specifies whether the applicable value-added tax (VAT) is included in the price specification or not.
   */
  valueAddedTaxIncluded?: boolean;
  /**
   * The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours.
   */
  validThrough?: string;
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
 * TaxChargeSpecification
 *
 * This type is derived from https://schema.org/PriceSpecification, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from TaxChargeSpecification because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type TaxChargeSpecificationOrSubClass =
  | TaxChargeSpecification
  ;

/**
 * TaxChargeSpecification - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/PriceSpecification, which means that any of this type's properties within schema.org may also be used.
 */
export const TaxChargeSpecificationJoiSchema = Joi.object({
  '@type': Joi.string().valid('TaxChargeSpecification').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  identifier: Joi.alternatives().try(Joi.number().integer(), Joi.string(), Joi.lazy(() => oa.PropertyValueOrSubClassJoiSchema), Joi.array().items(Joi.lazy(() => oa.PropertyValueOrSubClassJoiSchema))),
  name: Joi.string(),
  description: Joi.string(),
  '@id': Joi.string().uri(),
  price: Joi.number(),
  priceCurrency: Joi.string(),
  rate: Joi.number(),
  validFrom: Joi.string().isoDate(),
  minPrice: Joi.number(),
  maxPrice: Joi.number(),
  eligibleTransactionVolume: Joi.alternatives().try(Joi.lazy(() => schema.PriceSpecificationOrSubClassJoiSchema), Joi.string().uri()),
  eligibleQuantity: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  valueAddedTaxIncluded: Joi.boolean(),
  validThrough: Joi.string().isoDate(),
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
 * TaxChargeSpecification - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/PriceSpecification, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from TaxChargeSpecificationJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const TaxChargeSpecificationOrSubClassJoiSchema = Joi.alternatives().try([
  TaxChargeSpecificationJoiSchema,
]);

/**
 * Runtime validator for TaxChargeSpecification.
 *
 * If some data has a structure which matches a TaxChargeSpecification, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeTaxChargeSpecification = validateTaxChargeSpecification(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeTaxChargeSpecification instanceof OaValidationError) {
 *   // From this point on, `maybeTaxChargeSpecification` will have type `OaValidationError`
 *   const error = maybeTaxChargeSpecification;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeTaxChargeSpecification` will have type `TaxChargeSpecification`
 * const taxChargeSpecification = maybeTaxChargeSpecification;
 * ```
 */
export function validateTaxChargeSpecification(maybeTaxChargeSpecification: unknown): TaxChargeSpecification | OaValidationError {
  const { value, error } = TaxChargeSpecificationJoiSchema.validate(maybeTaxChargeSpecification);
  if (error) {
    return new OaValidationError('TaxChargeSpecification', maybeTaxChargeSpecification, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as TaxChargeSpecification;
}
