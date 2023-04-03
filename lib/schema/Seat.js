"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSeat = exports.SeatOrSubClassJoiSchema = exports.SeatJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:Seat - Validation schema (w/ JOI)
 */
exports.SeatJoiSchema = Joi.object({
    '@type': Joi.string().valid('Seat').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    seatNumber: Joi.string(),
    seatSection: Joi.string(),
    seatingType: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.QualitativeValueJoiSchema)),
    seatRow: Joi.string(),
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
 * schema:Seat - Validation schema (w/ JOI)
 *
 * This differs from SeatJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.SeatOrSubClassJoiSchema = Joi.alternatives().try([
    exports.SeatJoiSchema,
]);
/**
 * Runtime validator for schema:Seat.
 *
 * If some data has a structure which matches a schema:Seat, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeSeat = validateSeat(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeSeat instanceof OaValidationError) {
 *   // From this point on, `maybeSeat` will have type `OaValidationError`
 *   const error = maybeSeat;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeSeat` will have type `Seat`
 * const seat = maybeSeat;
 * ```
 */
function validateSeat(maybeSeat) {
    const { value, error } = exports.SeatJoiSchema.validate(maybeSeat);
    if (error) {
        return new oaValidationError_1.OaValidationError('Seat', maybeSeat, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateSeat = validateSeat;
