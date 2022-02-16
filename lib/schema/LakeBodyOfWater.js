"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLakeBodyOfWater = exports.LakeBodyOfWaterOrSubClassJoiSchema = exports.LakeBodyOfWaterJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:LakeBodyOfWater - Validation schema (w/ JOI)
 */
exports.LakeBodyOfWaterJoiSchema = Joi.object({
    '@type': Joi.string().valid('LakeBodyOfWater').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    geo: Joi.alternatives().try(Joi.lazy(() => schema.GeoCoordinatesOrSubClassJoiSchema), Joi.lazy(() => schema.GeoShapeOrSubClassJoiSchema), Joi.string().uri()),
    geoEquals: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.string().uri()),
    publicAccess: Joi.boolean(),
    geoDisjoint: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.string().uri()),
    geoTouches: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.string().uri()),
    specialOpeningHoursSpecification: Joi.alternatives().try(Joi.lazy(() => schema.OpeningHoursSpecificationOrSubClassJoiSchema), Joi.string().uri()),
    globalLocationNumber: Joi.string(),
    hasDriveThroughService: Joi.boolean(),
    maximumAttendeeCapacity: Joi.number().integer(),
    photo: Joi.alternatives().try(Joi.lazy(() => schema.PhotographOrSubClassJoiSchema), Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
    aggregateRating: Joi.alternatives().try(Joi.lazy(() => schema.AggregateRatingOrSubClassJoiSchema), Joi.string().uri()),
    containedIn: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    isicV4: Joi.string(),
    longitude: Joi.alternatives().try(Joi.number(), Joi.string()),
    smokingAllowed: Joi.boolean(),
    amenityFeature: Joi.alternatives().try(Joi.lazy(() => schema.LocationFeatureSpecificationOrSubClassJoiSchema), Joi.string().uri()),
    geoCovers: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.string().uri()),
    containsPlace: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    slogan: Joi.string(),
    containedInPlace: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    branchCode: Joi.string(),
    geoContains: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.string().uri()),
    tourBookingPage: Joi.string().uri(),
    geoCoveredBy: Joi.alternatives().try(Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    photos: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.lazy(() => schema.PhotographOrSubClassJoiSchema), Joi.string().uri()),
    geoCrosses: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.string().uri()),
    geoWithin: Joi.alternatives().try(Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    geoIntersects: Joi.alternatives().try(Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    logo: Joi.alternatives().try(Joi.string().uri(), Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema)),
    latitude: Joi.alternatives().try(Joi.string(), Joi.number()),
    address: Joi.alternatives().try(Joi.lazy(() => schema.PostalAddressOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    maps: Joi.string().uri(),
    events: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.string().uri()),
    geoOverlaps: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.string().uri()),
    reviews: Joi.alternatives().try(Joi.lazy(() => schema.ReviewOrSubClassJoiSchema), Joi.string().uri()),
    telephone: Joi.string(),
    openingHoursSpecification: Joi.alternatives().try(Joi.lazy(() => schema.OpeningHoursSpecificationOrSubClassJoiSchema), Joi.string().uri()),
    review: Joi.alternatives().try(Joi.lazy(() => schema.ReviewOrSubClassJoiSchema), Joi.string().uri()),
    map: Joi.string().uri(),
    additionalProperty: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri()),
    isAccessibleForFree: Joi.boolean(),
    event: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.string().uri()),
    hasMap: Joi.alternatives().try(Joi.lazy(() => schema.MapOrSubClassJoiSchema), Joi.string().uri()),
    faxNumber: Joi.string(),
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
 * schema:LakeBodyOfWater - Validation schema (w/ JOI)
 *
 * This differs from LakeBodyOfWaterJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.LakeBodyOfWaterOrSubClassJoiSchema = Joi.alternatives().try([
    exports.LakeBodyOfWaterJoiSchema,
]);
/**
 * Runtime validator for schema:LakeBodyOfWater.
 *
 * If some data has a structure which matches a schema:LakeBodyOfWater, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeLakeBodyOfWater = validateLakeBodyOfWater(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeLakeBodyOfWater instanceof OaValidationError) {
 *   // From this point on, `maybeLakeBodyOfWater` will have type `OaValidationError`
 *   const error = maybeLakeBodyOfWater;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeLakeBodyOfWater` will have type `LakeBodyOfWater`
 * const lakeBodyOfWater = maybeLakeBodyOfWater;
 * ```
 */
function validateLakeBodyOfWater(maybeLakeBodyOfWater) {
    const { value, error } = exports.LakeBodyOfWaterJoiSchema.validate(maybeLakeBodyOfWater);
    if (error) {
        return new oaValidationError_1.OaValidationError('LakeBodyOfWater', maybeLakeBodyOfWater, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateLakeBodyOfWater = validateLakeBodyOfWater;
