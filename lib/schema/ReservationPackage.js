"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateReservationPackage = exports.ReservationPackageOrSubClassJoiSchema = exports.ReservationPackageJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:ReservationPackage - Validation schema (w/ JOI)
 */
exports.ReservationPackageJoiSchema = Joi.object({
    '@type': Joi.string().valid('ReservationPackage').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    subReservation: Joi.alternatives().try(Joi.lazy(() => schema.ReservationOrSubClassJoiSchema), Joi.string().uri()),
    underName: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    reservationStatus: Joi.alternatives().try(Joi.lazy(() => schema.ReservationStatusTypeOrSubClassJoiSchema), Joi.string().uri()),
    programMembershipUsed: Joi.alternatives().try(Joi.lazy(() => schema.ProgramMembershipOrSubClassJoiSchema), Joi.string().uri()),
    priceCurrency: Joi.string(),
    broker: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    bookingTime: Joi.string().isoDate(),
    provider: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    reservationId: Joi.string(),
    modifiedTime: Joi.string().isoDate(),
    totalPrice: Joi.alternatives().try(Joi.number(), Joi.string(), Joi.lazy(() => schema.PriceSpecificationOrSubClassJoiSchema), Joi.string().uri()),
    reservationFor: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
    bookingAgent: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    reservedTicket: Joi.alternatives().try(Joi.lazy(() => schema.TicketOrSubClassJoiSchema), Joi.string().uri()),
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
 * schema:ReservationPackage - Validation schema (w/ JOI)
 *
 * This differs from ReservationPackageJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.ReservationPackageOrSubClassJoiSchema = Joi.alternatives().try([
    exports.ReservationPackageJoiSchema,
]);
/**
 * Runtime validator for schema:ReservationPackage.
 *
 * If some data has a structure which matches a schema:ReservationPackage, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeReservationPackage = validateReservationPackage(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeReservationPackage instanceof OaValidationError) {
 *   // From this point on, `maybeReservationPackage` will have type `OaValidationError`
 *   const error = maybeReservationPackage;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeReservationPackage` will have type `ReservationPackage`
 * const reservationPackage = maybeReservationPackage;
 * ```
 */
function validateReservationPackage(maybeReservationPackage) {
    const { value, error } = exports.ReservationPackageJoiSchema.validate(maybeReservationPackage);
    if (error) {
        return new oaValidationError_1.OaValidationError('ReservationPackage', maybeReservationPackage, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateReservationPackage = validateReservationPackage;
