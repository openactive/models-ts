"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCivicStructure = exports.CivicStructureOrSubClassJoiSchema = exports.CivicStructureJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:CivicStructure - Validation schema (w/ JOI)
 */
exports.CivicStructureJoiSchema = Joi.object({
    '@type': Joi.string().valid('CivicStructure').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    openingHours: Joi.string(),
    aggregateRating: Joi.alternatives().try(Joi.lazy(() => schema.AggregateRatingOrSubClassJoiSchema), Joi.string().uri()),
    geoIntersects: Joi.alternatives().try(Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    photos: Joi.alternatives().try(Joi.lazy(() => schema.PhotographOrSubClassJoiSchema), Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
    address: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.PostalAddressOrSubClassJoiSchema), Joi.string().uri()),
    tourBookingPage: Joi.string().uri(),
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
    amenityFeature: Joi.alternatives().try(Joi.lazy(() => schema.LocationFeatureSpecificationOrSubClassJoiSchema), Joi.string().uri()),
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
 * schema:CivicStructure - Validation schema (w/ JOI)
 *
 * This differs from CivicStructureJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.CivicStructureOrSubClassJoiSchema = Joi.alternatives().try([
    exports.CivicStructureJoiSchema,
    Joi.lazy(() => schema.AquariumOrSubClassJoiSchema),
    Joi.lazy(() => schema.EducationalOrganizationOrSubClassJoiSchema),
    Joi.lazy(() => schema.MovieTheaterOrSubClassJoiSchema),
    Joi.lazy(() => schema.HospitalOrSubClassJoiSchema),
    Joi.lazy(() => schema.TrainStationOrSubClassJoiSchema),
    Joi.lazy(() => schema.CampgroundOrSubClassJoiSchema),
    Joi.lazy(() => schema.PoliceStationOrSubClassJoiSchema),
    Joi.lazy(() => schema.BridgeOrSubClassJoiSchema),
    Joi.lazy(() => schema.ZooOrSubClassJoiSchema),
    Joi.lazy(() => schema.BeachOrSubClassJoiSchema),
    Joi.lazy(() => schema.EventVenueOrSubClassJoiSchema),
    Joi.lazy(() => schema.PlaygroundOrSubClassJoiSchema),
    Joi.lazy(() => schema.SubwayStationOrSubClassJoiSchema),
    Joi.lazy(() => schema.AirportOrSubClassJoiSchema),
    Joi.lazy(() => schema.BusStopOrSubClassJoiSchema),
    Joi.lazy(() => schema.CemeteryOrSubClassJoiSchema),
    Joi.lazy(() => schema.FireStationOrSubClassJoiSchema),
    Joi.lazy(() => schema.BusStationOrSubClassJoiSchema),
    Joi.lazy(() => schema.MuseumOrSubClassJoiSchema),
    Joi.lazy(() => schema.ParkOrSubClassJoiSchema),
    Joi.lazy(() => schema.TaxiStandOrSubClassJoiSchema),
    Joi.lazy(() => schema.PlaceOfWorshipOrSubClassJoiSchema),
    Joi.lazy(() => schema.MusicVenueOrSubClassJoiSchema),
    Joi.lazy(() => schema.ParkingFacilityOrSubClassJoiSchema),
    Joi.lazy(() => schema.StadiumOrArenaOrSubClassJoiSchema),
    Joi.lazy(() => schema.CrematoriumOrSubClassJoiSchema),
    Joi.lazy(() => schema.BoatTerminalOrSubClassJoiSchema),
    Joi.lazy(() => schema.PublicToiletOrSubClassJoiSchema),
    Joi.lazy(() => schema.GovernmentBuildingOrSubClassJoiSchema),
    Joi.lazy(() => schema.RVParkOrSubClassJoiSchema),
    Joi.lazy(() => schema.PerformingArtsTheaterOrSubClassJoiSchema),
]);
/**
 * Runtime validator for schema:CivicStructure.
 *
 * If some data has a structure which matches a schema:CivicStructure, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeCivicStructure = validateCivicStructure(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeCivicStructure instanceof OaValidationError) {
 *   // From this point on, `maybeCivicStructure` will have type `OaValidationError`
 *   const error = maybeCivicStructure;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeCivicStructure` will have type `CivicStructure`
 * const civicStructure = maybeCivicStructure;
 * ```
 */
function validateCivicStructure(maybeCivicStructure) {
    const { value, error } = exports.CivicStructureJoiSchema.validate(maybeCivicStructure);
    if (error) {
        return new oaValidationError_1.OaValidationError('CivicStructure', maybeCivicStructure, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateCivicStructure = validateCivicStructure;
