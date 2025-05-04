"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRentalCarReservation = exports.RentalCarReservationOrSubClassJoiSchema = exports.RentalCarReservationJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:RentalCarReservation - Validation schema (w/ JOI)
 */
exports.RentalCarReservationJoiSchema = Joi.object({
    '@type': Joi.string().valid('RentalCarReservation').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    pickupLocation: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    dropoffLocation: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    pickupTime: Joi.string().isoDate(),
    dropoffTime: Joi.string().isoDate(),
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
 * schema:RentalCarReservation - Validation schema (w/ JOI)
 *
 * This differs from RentalCarReservationJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.RentalCarReservationOrSubClassJoiSchema = Joi.alternatives().try([
    exports.RentalCarReservationJoiSchema,
]);
/**
 * Runtime validator for schema:RentalCarReservation.
 *
 * If some data has a structure which matches a schema:RentalCarReservation, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeRentalCarReservation = validateRentalCarReservation(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeRentalCarReservation instanceof OaValidationError) {
 *   // From this point on, `maybeRentalCarReservation` will have type `OaValidationError`
 *   const error = maybeRentalCarReservation;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeRentalCarReservation` will have type `RentalCarReservation`
 * const rentalCarReservation = maybeRentalCarReservation;
 * ```
 */
function validateRentalCarReservation(maybeRentalCarReservation) {
    const { value, error } = exports.RentalCarReservationJoiSchema.validate(maybeRentalCarReservation);
    if (error) {
        return new oaValidationError_1.OaValidationError('RentalCarReservation', maybeRentalCarReservation, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateRentalCarReservation = validateRentalCarReservation;
