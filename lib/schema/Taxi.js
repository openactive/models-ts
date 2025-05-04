"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTaxi = exports.TaxiOrSubClassJoiSchema = exports.TaxiJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:Taxi - Validation schema (w/ JOI)
 */
exports.TaxiJoiSchema = Joi.object({
    '@type': Joi.string().valid('Taxi').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    offers: Joi.alternatives().try(Joi.lazy(() => schema.DemandOrSubClassJoiSchema), Joi.lazy(() => schema.OfferOrSubClassJoiSchema), Joi.string().uri()),
    areaServed: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.GeoShapeOrSubClassJoiSchema), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.lazy(() => schema.AdministrativeAreaOrSubClassJoiSchema), Joi.string().uri()),
    serviceOutput: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
    providerMobility: Joi.string(),
    aggregateRating: Joi.alternatives().try(Joi.lazy(() => schema.AggregateRatingOrSubClassJoiSchema), Joi.string().uri()),
    award: Joi.string(),
    termsOfService: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
    produces: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
    brand: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.BrandOrSubClassJoiSchema), Joi.string().uri()),
    category: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.PhysicalActivityCategoryJoiSchema), Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
    slogan: Joi.string(),
    isSimilarTo: Joi.alternatives().try(Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.lazy(() => schema.ServiceOrSubClassJoiSchema), Joi.string().uri()),
    serviceType: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.GovernmentBenefitsTypeJoiSchema)),
    logo: Joi.alternatives().try(Joi.string().uri(), Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema)),
    audience: Joi.alternatives().try(Joi.lazy(() => schema.AudienceOrSubClassJoiSchema), Joi.string().uri()),
    serviceArea: Joi.alternatives().try(Joi.lazy(() => schema.GeoShapeOrSubClassJoiSchema), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.lazy(() => schema.AdministrativeAreaOrSubClassJoiSchema), Joi.string().uri()),
    hasOfferCatalog: Joi.alternatives().try(Joi.lazy(() => schema.OfferCatalogOrSubClassJoiSchema), Joi.string().uri()),
    isRelatedTo: Joi.alternatives().try(Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.lazy(() => schema.ServiceOrSubClassJoiSchema), Joi.string().uri()),
    hoursAvailable: Joi.alternatives().try(Joi.lazy(() => schema.OpeningHoursSpecificationOrSubClassJoiSchema), Joi.string().uri()),
    review: Joi.alternatives().try(Joi.lazy(() => schema.ReviewOrSubClassJoiSchema), Joi.string().uri()),
    provider: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    availableChannel: Joi.alternatives().try(Joi.lazy(() => schema.ServiceChannelOrSubClassJoiSchema), Joi.string().uri()),
    broker: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    serviceAudience: Joi.alternatives().try(Joi.lazy(() => schema.AudienceOrSubClassJoiSchema), Joi.string().uri()),
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
 * schema:Taxi - Validation schema (w/ JOI)
 *
 * This differs from TaxiJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.TaxiOrSubClassJoiSchema = Joi.alternatives().try([
    exports.TaxiJoiSchema,
]);
/**
 * Runtime validator for schema:Taxi.
 *
 * If some data has a structure which matches a schema:Taxi, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeTaxi = validateTaxi(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeTaxi instanceof OaValidationError) {
 *   // From this point on, `maybeTaxi` will have type `OaValidationError`
 *   const error = maybeTaxi;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeTaxi` will have type `Taxi`
 * const taxi = maybeTaxi;
 * ```
 */
function validateTaxi(maybeTaxi) {
    const { value, error } = exports.TaxiJoiSchema.validate(maybeTaxi);
    if (error) {
        return new oaValidationError_1.OaValidationError('Taxi', maybeTaxi, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateTaxi = validateTaxi;
