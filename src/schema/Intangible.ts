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
   * A unique URI-based identifier for the record.
   * `@id` properties are used as identifiers for compatibility with JSON-LD. The value of such a property must always be an absolute URI that provides a stable globally unique identifier for the resource, as described in [RFC3986](https://tools.ietf.org/html/rfc3986).
   * The primary purpose of the URI format in this context is to provide natural namespacing for the identifier. Hence, the URI itself may not resolve to a valid endpoint, but must use a domain name controlled by the resource owner (the organisation responsible for the OpenActive open data feed).
   */
  '@id'?: string;
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
 * schema:Intangible
 *
 * This differs from Intangible because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type IntangibleOrSubClass =
  | Intangible
  | schema.ReservationOrSubClass
  | schema.AlignmentObjectOrSubClass
  | schema.EnumerationOrSubClass
  | schema.OrderOrSubClass
  | schema.DemandOrSubClass
  | schema.OccupationalExperienceRequirementsOrSubClass
  | schema.PermitOrSubClass
  | schema.MerchantReturnPolicyOrSubClass
  | schema.HealthPlanNetworkOrSubClass
  | schema.EducationalOccupationalProgramOrSubClass
  | schema.DataFeedItemOrSubClass
  | schema.ActionAccessSpecificationOrSubClass
  | schema.ItemListOrSubClass
  | schema.RatingOrSubClass
  | schema.BrandOrSubClass
  | schema.StructuredValueOrSubClass
  | schema.QuantityOrSubClass
  | schema.EnergyConsumptionDetailsOrSubClass
  | schema.JobPostingOrSubClass
  | schema.TicketOrSubClass
  | schema.BroadcastFrequencySpecificationOrSubClass
  | schema.SeriesOrSubClass
  | schema.OccupationOrSubClass
  | schema.GrantOrSubClass
  | schema.MenuItemOrSubClass
  | schema.DefinedTermOrSubClass
  | schema.GeospatialGeometryOrSubClass
  | schema.BedDetailsOrSubClass
  | schema.MediaSubscriptionOrSubClass
  | schema.ObservationOrSubClass
  | schema.SpeakableSpecificationOrSubClass
  | schema.ServiceChannelOrSubClass
  | schema.ProgramMembershipOrSubClass
  | schema.OrderItemOrSubClass
  | schema.VirtualLocationOrSubClass
  | schema.AudienceOrSubClass
  | schema.HealthInsurancePlanOrSubClass
  | schema.StatisticalPopulationOrSubClass
  | schema.PropertyOrSubClass
  | schema.BroadcastChannelOrSubClass
  | schema.PropertyValueSpecificationOrSubClass
  | schema.LanguageOrSubClass
  | schema.ComputerLanguageOrSubClass
  | schema.FloorPlanOrSubClass
  | schema.HealthPlanCostSharingSpecificationOrSubClass
  | schema.MerchantReturnPolicySeasonalOverrideOrSubClass
  | schema.InvoiceOrSubClass
  | schema.OfferOrSubClass
  | schema.RoleOrSubClass
  | schema.ServiceOrSubClass
  | schema.DigitalDocumentPermissionOrSubClass
  | schema.ClassOrSubClass
  | schema.TripOrSubClass
  | schema.HealthPlanFormularyOrSubClass
  | schema.EntryPointOrSubClass
  | schema.ScheduleOrSubClass
  | schema.ParcelDeliveryOrSubClass
  | schema.GameServerOrSubClass
  | schema.SeatOrSubClass
  | schema.ListItemOrSubClass
  ;

/**
 * schema:Intangible - Validation schema (w/ JOI)
 */
export const IntangibleJoiSchema = Joi.object({
  '@type': Joi.string().valid('Intangible').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  name: Joi.string(),
  description: Joi.string(),
  '@id': Joi.string().uri(),
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
 * schema:Intangible - Validation schema (w/ JOI)
 *
 * This differs from IntangibleJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const IntangibleOrSubClassJoiSchema = Joi.alternatives().try([
  IntangibleJoiSchema,
  Joi.lazy(() => schema.ReservationOrSubClassJoiSchema),
  Joi.lazy(() => schema.AlignmentObjectOrSubClassJoiSchema),
  Joi.lazy(() => schema.EnumerationOrSubClassJoiSchema),
  Joi.lazy(() => schema.OrderOrSubClassJoiSchema),
  Joi.lazy(() => schema.DemandOrSubClassJoiSchema),
  Joi.lazy(() => schema.OccupationalExperienceRequirementsOrSubClassJoiSchema),
  Joi.lazy(() => schema.PermitOrSubClassJoiSchema),
  Joi.lazy(() => schema.MerchantReturnPolicyOrSubClassJoiSchema),
  Joi.lazy(() => schema.HealthPlanNetworkOrSubClassJoiSchema),
  Joi.lazy(() => schema.EducationalOccupationalProgramOrSubClassJoiSchema),
  Joi.lazy(() => schema.DataFeedItemOrSubClassJoiSchema),
  Joi.lazy(() => schema.ActionAccessSpecificationOrSubClassJoiSchema),
  Joi.lazy(() => schema.ItemListOrSubClassJoiSchema),
  Joi.lazy(() => schema.RatingOrSubClassJoiSchema),
  Joi.lazy(() => schema.BrandOrSubClassJoiSchema),
  Joi.lazy(() => schema.StructuredValueOrSubClassJoiSchema),
  Joi.lazy(() => schema.QuantityOrSubClassJoiSchema),
  Joi.lazy(() => schema.EnergyConsumptionDetailsOrSubClassJoiSchema),
  Joi.lazy(() => schema.JobPostingOrSubClassJoiSchema),
  Joi.lazy(() => schema.TicketOrSubClassJoiSchema),
  Joi.lazy(() => schema.BroadcastFrequencySpecificationOrSubClassJoiSchema),
  Joi.lazy(() => schema.SeriesOrSubClassJoiSchema),
  Joi.lazy(() => schema.OccupationOrSubClassJoiSchema),
  Joi.lazy(() => schema.GrantOrSubClassJoiSchema),
  Joi.lazy(() => schema.MenuItemOrSubClassJoiSchema),
  Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema),
  Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema),
  Joi.lazy(() => schema.BedDetailsOrSubClassJoiSchema),
  Joi.lazy(() => schema.MediaSubscriptionOrSubClassJoiSchema),
  Joi.lazy(() => schema.ObservationOrSubClassJoiSchema),
  Joi.lazy(() => schema.SpeakableSpecificationOrSubClassJoiSchema),
  Joi.lazy(() => schema.ServiceChannelOrSubClassJoiSchema),
  Joi.lazy(() => schema.ProgramMembershipOrSubClassJoiSchema),
  Joi.lazy(() => schema.OrderItemOrSubClassJoiSchema),
  Joi.lazy(() => schema.VirtualLocationOrSubClassJoiSchema),
  Joi.lazy(() => schema.AudienceOrSubClassJoiSchema),
  Joi.lazy(() => schema.HealthInsurancePlanOrSubClassJoiSchema),
  Joi.lazy(() => schema.StatisticalPopulationOrSubClassJoiSchema),
  Joi.lazy(() => schema.PropertyOrSubClassJoiSchema),
  Joi.lazy(() => schema.BroadcastChannelOrSubClassJoiSchema),
  Joi.lazy(() => schema.PropertyValueSpecificationOrSubClassJoiSchema),
  Joi.lazy(() => schema.LanguageOrSubClassJoiSchema),
  Joi.lazy(() => schema.ComputerLanguageOrSubClassJoiSchema),
  Joi.lazy(() => schema.FloorPlanOrSubClassJoiSchema),
  Joi.lazy(() => schema.HealthPlanCostSharingSpecificationOrSubClassJoiSchema),
  Joi.lazy(() => schema.MerchantReturnPolicySeasonalOverrideOrSubClassJoiSchema),
  Joi.lazy(() => schema.InvoiceOrSubClassJoiSchema),
  Joi.lazy(() => schema.OfferOrSubClassJoiSchema),
  Joi.lazy(() => schema.RoleOrSubClassJoiSchema),
  Joi.lazy(() => schema.ServiceOrSubClassJoiSchema),
  Joi.lazy(() => schema.DigitalDocumentPermissionOrSubClassJoiSchema),
  Joi.lazy(() => schema.ClassOrSubClassJoiSchema),
  Joi.lazy(() => schema.TripOrSubClassJoiSchema),
  Joi.lazy(() => schema.HealthPlanFormularyOrSubClassJoiSchema),
  Joi.lazy(() => schema.EntryPointOrSubClassJoiSchema),
  Joi.lazy(() => schema.ScheduleOrSubClassJoiSchema),
  Joi.lazy(() => schema.ParcelDeliveryOrSubClassJoiSchema),
  Joi.lazy(() => schema.GameServerOrSubClassJoiSchema),
  Joi.lazy(() => schema.SeatOrSubClassJoiSchema),
  Joi.lazy(() => schema.ListItemOrSubClassJoiSchema),
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
 * const maybeIntangible = validateIntangible(req.body); // `req.body` will have type `any` or `unknown`
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
