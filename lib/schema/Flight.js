"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateFlight = exports.FlightOrSubClassJoiSchema = exports.FlightJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:Flight - Validation schema (w/ JOI)
 */
exports.FlightJoiSchema = Joi.object({
    '@type': Joi.string().valid('Flight').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    boardingPolicy: Joi.lazy(() => schema.BoardingPolicyTypeJoiSchema),
    flightDistance: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.DistanceOrSubClassJoiSchema), Joi.string().uri()),
    departureGate: Joi.string(),
    flightNumber: Joi.string(),
    seller: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    estimatedFlightDuration: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
    aircraft: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.VehicleOrSubClassJoiSchema), Joi.string().uri()),
    carrier: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    arrivalTerminal: Joi.string(),
    webCheckinTime: Joi.string().isoDate(),
    departureTerminal: Joi.string(),
    departureAirport: Joi.alternatives().try(Joi.lazy(() => schema.AirportOrSubClassJoiSchema), Joi.string().uri()),
    mealService: Joi.string(),
    arrivalGate: Joi.string(),
    arrivalAirport: Joi.alternatives().try(Joi.lazy(() => schema.AirportOrSubClassJoiSchema), Joi.string().uri()),
    offers: Joi.alternatives().try(Joi.lazy(() => schema.DemandOrSubClassJoiSchema), Joi.lazy(() => schema.OfferOrSubClassJoiSchema), Joi.string().uri()),
    departureTime: Joi.alternatives().try(Joi.string().isoDate(), Joi.string()),
    itinerary: Joi.alternatives().try(Joi.lazy(() => schema.ItemListOrSubClassJoiSchema), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    subTrip: Joi.alternatives().try(Joi.lazy(() => schema.TripOrSubClassJoiSchema), Joi.string().uri()),
    arrivalTime: Joi.alternatives().try(Joi.string(), Joi.string().isoDate()),
    provider: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    partOfTrip: Joi.alternatives().try(Joi.lazy(() => schema.TripOrSubClassJoiSchema), Joi.string().uri()),
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
 * schema:Flight - Validation schema (w/ JOI)
 *
 * This differs from FlightJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.FlightOrSubClassJoiSchema = Joi.alternatives().try([
    exports.FlightJoiSchema,
]);
/**
 * Runtime validator for schema:Flight.
 *
 * If some data has a structure which matches a schema:Flight, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeFlight = validateFlight(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeFlight instanceof OaValidationError) {
 *   // From this point on, `maybeFlight` will have type `OaValidationError`
 *   const error = maybeFlight;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeFlight` will have type `Flight`
 * const flight = maybeFlight;
 * ```
 */
function validateFlight(maybeFlight) {
    const { value, error } = exports.FlightJoiSchema.validate(maybeFlight);
    if (error) {
        return new oaValidationError_1.OaValidationError('Flight', maybeFlight, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateFlight = validateFlight;
