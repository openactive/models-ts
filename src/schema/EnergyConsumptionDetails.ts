// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * schema:EnergyConsumptionDetails
 */
export type EnergyConsumptionDetails = {
  '@type': 'EnergyConsumptionDetails';
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
   * Specifies the most energy efficient class on the regulated EU energy consumption scale for the product category a product belongs to. For example, energy consumption for televisions placed on the market after January 1, 2020 is scaled from D to A+++.
   */
  energyEfficiencyScaleMax?: schema.EUEnergyEfficiencyEnumerationOrSubClass | string;
  /**
   * Specifies the least energy efficient class on the regulated EU energy consumption scale for the product category a product belongs to. For example, energy consumption for televisions placed on the market after January 1, 2020 is scaled from D to A+++.
   */
  energyEfficiencyScaleMin?: schema.EUEnergyEfficiencyEnumerationOrSubClass | string;
  /**
   * Defines the energy efficiency Category (which could be either a rating out of range of values or a yes/no certification) for a product according to an international energy efficiency standard.
   */
  hasEnergyEfficiencyCategory?: schema.EnergyEfficiencyEnumeration;
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
 * schema:EnergyConsumptionDetails
 *
 * This differs from EnergyConsumptionDetails because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type EnergyConsumptionDetailsOrSubClass =
  | EnergyConsumptionDetails
  ;

/**
 * schema:EnergyConsumptionDetails - Validation schema (w/ JOI)
 */
export const EnergyConsumptionDetailsJoiSchema = Joi.object({
  '@type': Joi.string().valid('EnergyConsumptionDetails').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
  name: Joi.string(),
  description: Joi.string(),
  '@id': Joi.string().uri(),
  energyEfficiencyScaleMax: Joi.alternatives().try(Joi.lazy(() => schema.EUEnergyEfficiencyEnumerationOrSubClassJoiSchema), Joi.string().uri()),
  energyEfficiencyScaleMin: Joi.alternatives().try(Joi.lazy(() => schema.EUEnergyEfficiencyEnumerationOrSubClassJoiSchema), Joi.string().uri()),
  hasEnergyEfficiencyCategory: Joi.lazy(() => schema.EnergyEfficiencyEnumerationJoiSchema),
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
 * schema:EnergyConsumptionDetails - Validation schema (w/ JOI)
 *
 * This differs from EnergyConsumptionDetailsJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const EnergyConsumptionDetailsOrSubClassJoiSchema = Joi.alternatives().try([
  EnergyConsumptionDetailsJoiSchema,
]);

/**
 * Runtime validator for schema:EnergyConsumptionDetails.
 *
 * If some data has a structure which matches a schema:EnergyConsumptionDetails, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeEnergyConsumptionDetails = EnergyConsumptionDetails.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeEnergyConsumptionDetails instanceof OaValidationError) {
 *   // From this point on, `maybeEnergyConsumptionDetails` will have type `OaValidationError`
 *   const error = maybeEnergyConsumptionDetails;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeEnergyConsumptionDetails` will have type `EnergyConsumptionDetails`
 * const energyConsumptionDetails = maybeEnergyConsumptionDetails;
 * ```
 */
export function validateEnergyConsumptionDetails(maybeEnergyConsumptionDetails: unknown): EnergyConsumptionDetails | OaValidationError {
  const { value, error } = EnergyConsumptionDetailsJoiSchema.validate(maybeEnergyConsumptionDetails);
  if (error) {
    return new OaValidationError('EnergyConsumptionDetails', maybeEnergyConsumptionDetails, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as EnergyConsumptionDetails;
}
