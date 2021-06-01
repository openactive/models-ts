"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePlace = exports.PlaceOrSubClassJoiSchema = exports.PlaceJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const oa = require("../oa");
const schema = require("../schema");
/**
 * Place - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/Place, which means that any of this type's properties within schema.org may also be used.
 */
exports.PlaceJoiSchema = Joi.object({
    '@type': Joi.string().valid('Place').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.number().integer(), Joi.string(), Joi.lazy(() => oa.PropertyValueOrSubClassJoiSchema), Joi.array().items(Joi.lazy(() => oa.PropertyValueOrSubClassJoiSchema))),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    address: Joi.alternatives().try(Joi.string(), Joi.lazy(() => oa.PostalAddressOrSubClassJoiSchema)),
    amenityFeature: Joi.array().items(Joi.lazy(() => oa.LocationFeatureSpecificationOrSubClassJoiSchema)),
    containedInPlace: Joi.lazy(() => oa.PlaceOrSubClassJoiSchema),
    containsPlace: Joi.array().items(Joi.lazy(() => oa.PlaceOrSubClassJoiSchema)),
    geo: Joi.lazy(() => oa.GeoCoordinatesOrSubClassJoiSchema),
    image: Joi.array().items(Joi.lazy(() => oa.ImageObjectOrSubClassJoiSchema)),
    openingHoursSpecification: Joi.array().items(Joi.lazy(() => oa.OpeningHoursSpecificationOrSubClassJoiSchema)),
    specialOpeningHoursSpecification: Joi.array().items(Joi.lazy(() => oa.OpeningHoursSpecificationOrSubClassJoiSchema)),
    telephone: Joi.string(),
    url: Joi.string().uri(),
    'beta:formattedDescription': Joi.string(),
    aggregateRating: Joi.alternatives().try(Joi.lazy(() => schema.AggregateRatingOrSubClassJoiSchema), Joi.string().uri()),
    geoIntersects: Joi.alternatives().try(Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    photos: Joi.alternatives().try(Joi.lazy(() => schema.PhotographOrSubClassJoiSchema), Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
    tourBookingPage: Joi.string().uri(),
    longitude: Joi.alternatives().try(Joi.string(), Joi.number()),
    globalLocationNumber: Joi.string(),
    geoCoveredBy: Joi.alternatives().try(Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    geoOverlaps: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.string().uri()),
    photo: Joi.alternatives().try(Joi.lazy(() => schema.PhotographOrSubClassJoiSchema), Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
    isicV4: Joi.string(),
    reviews: Joi.alternatives().try(Joi.lazy(() => schema.ReviewOrSubClassJoiSchema), Joi.string().uri()),
    review: Joi.alternatives().try(Joi.lazy(() => schema.ReviewOrSubClassJoiSchema), Joi.string().uri()),
    events: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.string().uri()),
    geoWithin: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.string().uri()),
    hasDriveThroughService: Joi.boolean(),
    containedIn: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    geoCovers: Joi.alternatives().try(Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    map: Joi.string().uri(),
    event: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.string().uri()),
    additionalProperty: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri()),
    logo: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
    isAccessibleForFree: Joi.boolean(),
    maximumAttendeeCapacity: Joi.number().integer(),
    slogan: Joi.string(),
    maps: Joi.string().uri(),
    hasMap: Joi.alternatives().try(Joi.string().uri(), Joi.lazy(() => schema.MapOrSubClassJoiSchema)),
    geoEquals: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.string().uri()),
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
    disambiguatingDescription: Joi.string(),
});
/**
 * Place - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/Place, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from PlaceJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.PlaceOrSubClassJoiSchema = Joi.alternatives().try([
    exports.PlaceJoiSchema,
]);
/**
 * Runtime validator for Place.
 *
 * If some data has a structure which matches a Place, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybePlace = Place.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybePlace instanceof OaValidationError) {
 *   // From this point on, `maybePlace` will have type `OaValidationError`
 *   const error = maybePlace;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybePlace` will have type `Place`
 * const place = maybePlace;
 * ```
 */
function validatePlace(maybePlace) {
    const { value, error } = exports.PlaceJoiSchema.validate(maybePlace);
    if (error) {
        return new oaValidationError_1.OaValidationError('Place', maybePlace, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validatePlace = validatePlace;
