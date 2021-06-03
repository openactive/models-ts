"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTrip = exports.TripOrSubClassJoiSchema = exports.TripJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:Trip - Validation schema (w/ JOI)
 */
exports.TripJoiSchema = Joi.object({
    '@type': Joi.string().valid('Trip').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    itinerary: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.lazy(() => schema.ItemListOrSubClassJoiSchema), Joi.string().uri()),
    subTrip: Joi.alternatives().try(Joi.lazy(() => schema.TripOrSubClassJoiSchema), Joi.string().uri()),
    partOfTrip: Joi.alternatives().try(Joi.lazy(() => schema.TripOrSubClassJoiSchema), Joi.string().uri()),
    arrivalTime: Joi.alternatives().try(Joi.string(), Joi.string().isoDate()),
    offers: Joi.alternatives().try(Joi.lazy(() => schema.OfferOrSubClassJoiSchema), Joi.lazy(() => schema.DemandOrSubClassJoiSchema), Joi.string().uri()),
    provider: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    departureTime: Joi.alternatives().try(Joi.string(), Joi.string().isoDate()),
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
 * schema:Trip - Validation schema (w/ JOI)
 *
 * This differs from TripJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.TripOrSubClassJoiSchema = Joi.alternatives().try([
    exports.TripJoiSchema,
    Joi.lazy(() => schema.BusTripOrSubClassJoiSchema),
    Joi.lazy(() => schema.BoatTripOrSubClassJoiSchema),
    Joi.lazy(() => schema.FlightOrSubClassJoiSchema),
    Joi.lazy(() => schema.TrainTripOrSubClassJoiSchema),
    Joi.lazy(() => schema.TouristTripOrSubClassJoiSchema),
]);
/**
 * Runtime validator for schema:Trip.
 *
 * If some data has a structure which matches a schema:Trip, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeTrip = validateTrip(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeTrip instanceof OaValidationError) {
 *   // From this point on, `maybeTrip` will have type `OaValidationError`
 *   const error = maybeTrip;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeTrip` will have type `Trip`
 * const trip = maybeTrip;
 * ```
 */
function validateTrip(maybeTrip) {
    const { value, error } = exports.TripJoiSchema.validate(maybeTrip);
    if (error) {
        return new oaValidationError_1.OaValidationError('Trip', maybeTrip, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateTrip = validateTrip;
