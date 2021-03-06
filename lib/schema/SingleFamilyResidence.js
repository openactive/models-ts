"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSingleFamilyResidence = exports.SingleFamilyResidenceOrSubClassJoiSchema = exports.SingleFamilyResidenceJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:SingleFamilyResidence - Validation schema (w/ JOI)
 */
exports.SingleFamilyResidenceJoiSchema = Joi.object({
    '@type': Joi.string().valid('SingleFamilyResidence').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    numberOfRooms: Joi.alternatives().try(Joi.number(), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    occupancy: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    numberOfBedrooms: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.number(), Joi.string().uri()),
    floorLevel: Joi.string(),
    permittedUsage: Joi.string(),
    tourBookingPage: Joi.string().uri(),
    numberOfPartialBathrooms: Joi.number(),
    leaseLength: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    accommodationCategory: Joi.string(),
    accommodationFloorPlan: Joi.alternatives().try(Joi.lazy(() => schema.FloorPlanOrSubClassJoiSchema), Joi.string().uri()),
    floorSize: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    amenityFeature: Joi.alternatives().try(Joi.lazy(() => schema.LocationFeatureSpecificationOrSubClassJoiSchema), Joi.string().uri()),
    numberOfBathroomsTotal: Joi.number().integer(),
    petsAllowed: Joi.alternatives().try(Joi.string(), Joi.boolean()),
    numberOfFullBathrooms: Joi.number(),
    yearBuilt: Joi.number(),
    aggregateRating: Joi.alternatives().try(Joi.lazy(() => schema.AggregateRatingOrSubClassJoiSchema), Joi.string().uri()),
    geoIntersects: Joi.alternatives().try(Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    photos: Joi.alternatives().try(Joi.lazy(() => schema.PhotographOrSubClassJoiSchema), Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
    address: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.PostalAddressOrSubClassJoiSchema), Joi.string().uri()),
    longitude: Joi.alternatives().try(Joi.string(), Joi.number()),
    geo: Joi.alternatives().try(Joi.lazy(() => schema.GeoCoordinatesOrSubClassJoiSchema), Joi.lazy(() => schema.GeoShapeOrSubClassJoiSchema), Joi.string().uri()),
    globalLocationNumber: Joi.string(),
    geoCoveredBy: Joi.alternatives().try(Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    containedInPlace: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    specialOpeningHoursSpecification: Joi.alternatives().try(Joi.lazy(() => schema.OpeningHoursSpecificationOrSubClassJoiSchema), Joi.string().uri()),
    geoOverlaps: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.string().uri()),
    photo: Joi.alternatives().try(Joi.lazy(() => schema.PhotographOrSubClassJoiSchema), Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
    isicV4: Joi.string(),
    reviews: Joi.alternatives().try(Joi.lazy(() => schema.ReviewOrSubClassJoiSchema), Joi.string().uri()),
    review: Joi.alternatives().try(Joi.lazy(() => schema.ReviewOrSubClassJoiSchema), Joi.string().uri()),
    events: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.string().uri()),
    openingHoursSpecification: Joi.alternatives().try(Joi.lazy(() => schema.OpeningHoursSpecificationOrSubClassJoiSchema), Joi.string().uri()),
    geoWithin: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.string().uri()),
    hasDriveThroughService: Joi.boolean(),
    containedIn: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    geoCovers: Joi.alternatives().try(Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    map: Joi.string().uri(),
    event: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.string().uri()),
    additionalProperty: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri()),
    telephone: Joi.string(),
    logo: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
    isAccessibleForFree: Joi.boolean(),
    maximumAttendeeCapacity: Joi.number().integer(),
    slogan: Joi.string(),
    maps: Joi.string().uri(),
    hasMap: Joi.alternatives().try(Joi.string().uri(), Joi.lazy(() => schema.MapOrSubClassJoiSchema)),
    geoEquals: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.string().uri()),
    containsPlace: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    geoDisjoint: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.string().uri()),
    latitude: Joi.alternatives().try(Joi.string(), Joi.number()),
    smokingAllowed: Joi.boolean(),
    faxNumber: Joi.string(),
    branchCode: Joi.string(),
    geoTouches: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.string().uri()),
    geoCrosses: Joi.alternatives().try(Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    geoContains: Joi.alternatives().try(Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    publicAccess: Joi.boolean(),
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
 * schema:SingleFamilyResidence - Validation schema (w/ JOI)
 *
 * This differs from SingleFamilyResidenceJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.SingleFamilyResidenceOrSubClassJoiSchema = Joi.alternatives().try([
    exports.SingleFamilyResidenceJoiSchema,
]);
/**
 * Runtime validator for schema:SingleFamilyResidence.
 *
 * If some data has a structure which matches a schema:SingleFamilyResidence, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeSingleFamilyResidence = validateSingleFamilyResidence(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeSingleFamilyResidence instanceof OaValidationError) {
 *   // From this point on, `maybeSingleFamilyResidence` will have type `OaValidationError`
 *   const error = maybeSingleFamilyResidence;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeSingleFamilyResidence` will have type `SingleFamilyResidence`
 * const singleFamilyResidence = maybeSingleFamilyResidence;
 * ```
 */
function validateSingleFamilyResidence(maybeSingleFamilyResidence) {
    const { value, error } = exports.SingleFamilyResidenceJoiSchema.validate(maybeSingleFamilyResidence);
    if (error) {
        return new oaValidationError_1.OaValidationError('SingleFamilyResidence', maybeSingleFamilyResidence, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateSingleFamilyResidence = validateSingleFamilyResidence;
