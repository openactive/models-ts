"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTrainTrip = exports.TrainTripOrSubClassJoiSchema = exports.TrainTripJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:TrainTrip - Validation schema (w/ JOI)
 */
exports.TrainTripJoiSchema = Joi.object({
    '@type': Joi.string().valid('TrainTrip').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    arrivalPlatform: Joi.string(),
    departurePlatform: Joi.string(),
    departureStation: Joi.alternatives().try(Joi.lazy(() => schema.TrainStationOrSubClassJoiSchema), Joi.string().uri()),
    trainNumber: Joi.string(),
    arrivalStation: Joi.alternatives().try(Joi.lazy(() => schema.TrainStationOrSubClassJoiSchema), Joi.string().uri()),
    trainName: Joi.string(),
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
 * schema:TrainTrip - Validation schema (w/ JOI)
 *
 * This differs from TrainTripJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.TrainTripOrSubClassJoiSchema = Joi.alternatives().try([
    exports.TrainTripJoiSchema,
]);
/**
 * Runtime validator for schema:TrainTrip.
 *
 * If some data has a structure which matches a schema:TrainTrip, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeTrainTrip = TrainTrip.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeTrainTrip instanceof OaValidationError) {
 *   // From this point on, `maybeTrainTrip` will have type `OaValidationError`
 *   const error = maybeTrainTrip;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeTrainTrip` will have type `TrainTrip`
 * const trainTrip = maybeTrainTrip;
 * ```
 */
function validateTrainTrip(maybeTrainTrip) {
    const { value, error } = exports.TrainTripJoiSchema.validate(maybeTrainTrip);
    if (error) {
        return new oaValidationError_1.OaValidationError('TrainTrip', maybeTrainTrip, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateTrainTrip = validateTrainTrip;
