"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLodgingReservation = exports.LodgingReservationOrSubClassJoiSchema = exports.LodgingReservationJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:LodgingReservation - Validation schema (w/ JOI)
 */
exports.LodgingReservationJoiSchema = Joi.object({
    '@type': Joi.string().valid('LodgingReservation').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    lodgingUnitDescription: Joi.string(),
    numChildren: Joi.alternatives().try(Joi.number().integer(), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    checkinTime: Joi.alternatives().try(Joi.string().isoDate(), Joi.string()),
    numAdults: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.number().integer(), Joi.string().uri()),
    checkoutTime: Joi.alternatives().try(Joi.string().isoDate(), Joi.string()),
    lodgingUnitType: Joi.alternatives().try(Joi.lazy(() => schema.QualitativeValueJoiSchema), Joi.string()),
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
 * schema:LodgingReservation - Validation schema (w/ JOI)
 *
 * This differs from LodgingReservationJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.LodgingReservationOrSubClassJoiSchema = Joi.alternatives().try([
    exports.LodgingReservationJoiSchema,
]);
/**
 * Runtime validator for schema:LodgingReservation.
 *
 * If some data has a structure which matches a schema:LodgingReservation, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeLodgingReservation = validateLodgingReservation(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeLodgingReservation instanceof OaValidationError) {
 *   // From this point on, `maybeLodgingReservation` will have type `OaValidationError`
 *   const error = maybeLodgingReservation;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeLodgingReservation` will have type `LodgingReservation`
 * const lodgingReservation = maybeLodgingReservation;
 * ```
 */
function validateLodgingReservation(maybeLodgingReservation) {
    const { value, error } = exports.LodgingReservationJoiSchema.validate(maybeLodgingReservation);
    if (error) {
        return new oaValidationError_1.OaValidationError('LodgingReservation', maybeLodgingReservation, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateLodgingReservation = validateLodgingReservation;
