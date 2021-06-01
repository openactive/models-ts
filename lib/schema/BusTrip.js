"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBusTrip = exports.BusTripOrSubClassJoiSchema = exports.BusTripJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:BusTrip - Validation schema (w/ JOI)
 */
exports.BusTripJoiSchema = Joi.object({
    '@type': Joi.string().valid('BusTrip').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    busName: Joi.string(),
    arrivalBusStop: Joi.alternatives().try(Joi.lazy(() => schema.BusStopOrSubClassJoiSchema), Joi.lazy(() => schema.BusStationOrSubClassJoiSchema), Joi.string().uri()),
    departureBusStop: Joi.alternatives().try(Joi.lazy(() => schema.BusStationOrSubClassJoiSchema), Joi.lazy(() => schema.BusStopOrSubClassJoiSchema), Joi.string().uri()),
    busNumber: Joi.string(),
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
 * schema:BusTrip - Validation schema (w/ JOI)
 *
 * This differs from BusTripJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.BusTripOrSubClassJoiSchema = Joi.alternatives().try([
    exports.BusTripJoiSchema,
]);
/**
 * Runtime validator for schema:BusTrip.
 *
 * If some data has a structure which matches a schema:BusTrip, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeBusTrip = BusTrip.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeBusTrip instanceof OaValidationError) {
 *   // From this point on, `maybeBusTrip` will have type `OaValidationError`
 *   const error = maybeBusTrip;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeBusTrip` will have type `BusTrip`
 * const busTrip = maybeBusTrip;
 * ```
 */
function validateBusTrip(maybeBusTrip) {
    const { value, error } = exports.BusTripJoiSchema.validate(maybeBusTrip);
    if (error) {
        return new oaValidationError_1.OaValidationError('BusTrip', maybeBusTrip, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateBusTrip = validateBusTrip;
