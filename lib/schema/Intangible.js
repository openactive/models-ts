"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateIntangible = exports.IntangibleOrSubClassJoiSchema = exports.IntangibleJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:Intangible - Validation schema (w/ JOI)
 */
exports.IntangibleJoiSchema = Joi.object({
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
exports.IntangibleOrSubClassJoiSchema = Joi.alternatives().try([
    exports.IntangibleJoiSchema,
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
function validateIntangible(maybeIntangible) {
    const { value, error } = exports.IntangibleJoiSchema.validate(maybeIntangible);
    if (error) {
        return new oaValidationError_1.OaValidationError('Intangible', maybeIntangible, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateIntangible = validateIntangible;
