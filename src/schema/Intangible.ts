// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * schema:Intangible
 */
export type Intangible = {
  '@type': 'Intangible';
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
 * schema:Intangible
 *
 * This differs from Intangible because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type IntangibleOrSubClass =
  | Intangible
  | schema.StructuredValueOrSubClass
  | schema.PermitOrSubClass
  | schema.MenuItemOrSubClass
  | schema.GrantOrSubClass
  | schema.SeatOrSubClass
  | schema.MediaSubscriptionOrSubClass
  | schema.ObservationOrSubClass
  | schema.OrderItemOrSubClass
  | schema.OccupationOrSubClass
  | schema.ActionAccessSpecificationOrSubClass
  | schema.PropertyOrSubClass
  | schema.RatingOrSubClass
  | schema.HealthPlanFormularyOrSubClass
  | schema.ListItemOrSubClass
  | schema.HealthInsurancePlanOrSubClass
  | schema.ProgramMembershipOrSubClass
  | schema.ServiceChannelOrSubClass
  | schema.BroadcastChannelOrSubClass
  | schema.SeriesOrSubClass
  | schema.HealthPlanCostSharingSpecificationOrSubClass
  | schema.MerchantReturnPolicyOrSubClass
  | schema.TripOrSubClass
  | schema.EnergyConsumptionDetailsOrSubClass
  | schema.BedDetailsOrSubClass
  | schema.OfferOrSubClass
  | schema.ServiceOrSubClass
  | schema.GeospatialGeometryOrSubClass
  | schema.AlignmentObjectOrSubClass
  | schema.ComputerLanguageOrSubClass
  | schema.RoleOrSubClass
  | schema.HealthPlanNetworkOrSubClass
  | schema.ScheduleOrSubClass
  | schema.BroadcastFrequencySpecificationOrSubClass
  | schema.EducationalOccupationalProgramOrSubClass
  | schema.TicketOrSubClass
  | schema.EnumerationOrSubClass
  | schema.DataFeedItemOrSubClass
  | schema.ItemListOrSubClass
  | schema.ParcelDeliveryOrSubClass
  | schema.OccupationalExperienceRequirementsOrSubClass
  | schema.DefinedTermOrSubClass
  | schema.LanguageOrSubClass
  | schema.OrderOrSubClass
  | schema.AudienceOrSubClass
  | schema.InvoiceOrSubClass
  | schema.QuantityOrSubClass
  | schema.SpeakableSpecificationOrSubClass
  | schema.ClassOrSubClass
  | schema.FloorPlanOrSubClass
  | schema.PropertyValueSpecificationOrSubClass
  | schema.ReservationOrSubClass
  | schema.EntryPointOrSubClass
  | schema.GameServerOrSubClass
  | schema.DigitalDocumentPermissionOrSubClass
  | schema.JobPostingOrSubClass
  | schema.VirtualLocationOrSubClass
  | schema.StatisticalPopulationOrSubClass
  | schema.BrandOrSubClass
  | schema.DemandOrSubClass
  ;

/**
 * schema:Intangible - Validation schema (w/ JOI)
 */
export const IntangibleJoiSchema = Joi.object({
  '@type': Joi.string().valid('Intangible').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
  name: Joi.string(),
  description: Joi.string(),
  '@id': Joi.string().uri(),
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
 * schema:Intangible - Validation schema (w/ JOI)
 *
 * This differs from IntangibleJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const IntangibleOrSubClassJoiSchema = Joi.alternatives().try([
  IntangibleJoiSchema,
  Joi.lazy(() => schema.StructuredValueOrSubClassJoiSchema),
  Joi.lazy(() => schema.PermitOrSubClassJoiSchema),
  Joi.lazy(() => schema.MenuItemOrSubClassJoiSchema),
  Joi.lazy(() => schema.GrantOrSubClassJoiSchema),
  Joi.lazy(() => schema.SeatOrSubClassJoiSchema),
  Joi.lazy(() => schema.MediaSubscriptionOrSubClassJoiSchema),
  Joi.lazy(() => schema.ObservationOrSubClassJoiSchema),
  Joi.lazy(() => schema.OrderItemOrSubClassJoiSchema),
  Joi.lazy(() => schema.OccupationOrSubClassJoiSchema),
  Joi.lazy(() => schema.ActionAccessSpecificationOrSubClassJoiSchema),
  Joi.lazy(() => schema.PropertyOrSubClassJoiSchema),
  Joi.lazy(() => schema.RatingOrSubClassJoiSchema),
  Joi.lazy(() => schema.HealthPlanFormularyOrSubClassJoiSchema),
  Joi.lazy(() => schema.ListItemOrSubClassJoiSchema),
  Joi.lazy(() => schema.HealthInsurancePlanOrSubClassJoiSchema),
  Joi.lazy(() => schema.ProgramMembershipOrSubClassJoiSchema),
  Joi.lazy(() => schema.ServiceChannelOrSubClassJoiSchema),
  Joi.lazy(() => schema.BroadcastChannelOrSubClassJoiSchema),
  Joi.lazy(() => schema.SeriesOrSubClassJoiSchema),
  Joi.lazy(() => schema.HealthPlanCostSharingSpecificationOrSubClassJoiSchema),
  Joi.lazy(() => schema.MerchantReturnPolicyOrSubClassJoiSchema),
  Joi.lazy(() => schema.TripOrSubClassJoiSchema),
  Joi.lazy(() => schema.EnergyConsumptionDetailsOrSubClassJoiSchema),
  Joi.lazy(() => schema.BedDetailsOrSubClassJoiSchema),
  Joi.lazy(() => schema.OfferOrSubClassJoiSchema),
  Joi.lazy(() => schema.ServiceOrSubClassJoiSchema),
  Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema),
  Joi.lazy(() => schema.AlignmentObjectOrSubClassJoiSchema),
  Joi.lazy(() => schema.ComputerLanguageOrSubClassJoiSchema),
  Joi.lazy(() => schema.RoleOrSubClassJoiSchema),
  Joi.lazy(() => schema.HealthPlanNetworkOrSubClassJoiSchema),
  Joi.lazy(() => schema.ScheduleOrSubClassJoiSchema),
  Joi.lazy(() => schema.BroadcastFrequencySpecificationOrSubClassJoiSchema),
  Joi.lazy(() => schema.EducationalOccupationalProgramOrSubClassJoiSchema),
  Joi.lazy(() => schema.TicketOrSubClassJoiSchema),
  Joi.lazy(() => schema.EnumerationOrSubClassJoiSchema),
  Joi.lazy(() => schema.DataFeedItemOrSubClassJoiSchema),
  Joi.lazy(() => schema.ItemListOrSubClassJoiSchema),
  Joi.lazy(() => schema.ParcelDeliveryOrSubClassJoiSchema),
  Joi.lazy(() => schema.OccupationalExperienceRequirementsOrSubClassJoiSchema),
  Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema),
  Joi.lazy(() => schema.LanguageOrSubClassJoiSchema),
  Joi.lazy(() => schema.OrderOrSubClassJoiSchema),
  Joi.lazy(() => schema.AudienceOrSubClassJoiSchema),
  Joi.lazy(() => schema.InvoiceOrSubClassJoiSchema),
  Joi.lazy(() => schema.QuantityOrSubClassJoiSchema),
  Joi.lazy(() => schema.SpeakableSpecificationOrSubClassJoiSchema),
  Joi.lazy(() => schema.ClassOrSubClassJoiSchema),
  Joi.lazy(() => schema.FloorPlanOrSubClassJoiSchema),
  Joi.lazy(() => schema.PropertyValueSpecificationOrSubClassJoiSchema),
  Joi.lazy(() => schema.ReservationOrSubClassJoiSchema),
  Joi.lazy(() => schema.EntryPointOrSubClassJoiSchema),
  Joi.lazy(() => schema.GameServerOrSubClassJoiSchema),
  Joi.lazy(() => schema.DigitalDocumentPermissionOrSubClassJoiSchema),
  Joi.lazy(() => schema.JobPostingOrSubClassJoiSchema),
  Joi.lazy(() => schema.VirtualLocationOrSubClassJoiSchema),
  Joi.lazy(() => schema.StatisticalPopulationOrSubClassJoiSchema),
  Joi.lazy(() => schema.BrandOrSubClassJoiSchema),
  Joi.lazy(() => schema.DemandOrSubClassJoiSchema),
]);

/**
 * Runtime validator for schema:Intangible.
 *
 * If some data has a structure which matches a schema:Intangible, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeIntangible = Intangible.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeIntangible instanceof OaValidationError) {
 *   // From this point on, `maybeIntangible` will have type `OaValidationError`
 *   const error = maybeIntangible;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeIntangible` will have type `Intangible`
 * const intangible = maybeIntangible;
 * ```
 */
export function validateIntangible(maybeIntangible: unknown): Intangible | OaValidationError {
  const { value, error } = IntangibleJoiSchema.validate(maybeIntangible);
  if (error) {
    return new OaValidationError('Intangible', maybeIntangible, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as Intangible;
}
