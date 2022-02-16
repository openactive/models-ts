"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateFlightReservation = exports.FlightReservationOrSubClassJoiSchema = exports.FlightReservationJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:FlightReservation - Validation schema (w/ JOI)
 */
exports.FlightReservationJoiSchema = Joi.object({
    '@type': Joi.string().valid('FlightReservation').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    passengerSequenceNumber: Joi.string(),
    securityScreening: Joi.string(),
    passengerPriorityStatus: Joi.alternatives().try(Joi.lazy(() => schema.QualitativeValueJoiSchema), Joi.string()),
    boardingGroup: Joi.string(),
    reservationId: Joi.string(),
    programMembershipUsed: Joi.alternatives().try(Joi.lazy(() => schema.ProgramMembershipOrSubClassJoiSchema), Joi.string().uri()),
    underName: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    modifiedTime: Joi.string().isoDate(),
    priceCurrency: Joi.string(),
    totalPrice: Joi.alternatives().try(Joi.string(), Joi.number(), Joi.lazy(() => schema.PriceSpecificationOrSubClassJoiSchema), Joi.string().uri()),
    bookingAgent: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    reservationStatus: Joi.alternatives().try(Joi.lazy(() => schema.ReservationStatusTypeOrSubClassJoiSchema), Joi.string().uri()),
    provider: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    bookingTime: Joi.string().isoDate(),
    reservationFor: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
    broker: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    reservedTicket: Joi.alternatives().try(Joi.lazy(() => schema.TicketOrSubClassJoiSchema), Joi.string().uri()),
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
 * schema:FlightReservation - Validation schema (w/ JOI)
 *
 * This differs from FlightReservationJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.FlightReservationOrSubClassJoiSchema = Joi.alternatives().try([
    exports.FlightReservationJoiSchema,
]);
/**
 * Runtime validator for schema:FlightReservation.
 *
 * If some data has a structure which matches a schema:FlightReservation, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeFlightReservation = validateFlightReservation(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeFlightReservation instanceof OaValidationError) {
 *   // From this point on, `maybeFlightReservation` will have type `OaValidationError`
 *   const error = maybeFlightReservation;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeFlightReservation` will have type `FlightReservation`
 * const flightReservation = maybeFlightReservation;
 * ```
 */
function validateFlightReservation(maybeFlightReservation) {
    const { value, error } = exports.FlightReservationJoiSchema.validate(maybeFlightReservation);
    if (error) {
        return new oaValidationError_1.OaValidationError('FlightReservation', maybeFlightReservation, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateFlightReservation = validateFlightReservation;
