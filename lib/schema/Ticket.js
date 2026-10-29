"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTicket = exports.TicketOrSubClassJoiSchema = exports.TicketJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:Ticket - Validation schema (w/ JOI)
 */
exports.TicketJoiSchema = Joi.object({
    '@type': Joi.string().valid('Ticket').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.TextObjectOrSubClassJoiSchema), Joi.string().uri()),
    '@id': Joi.string().uri(),
    dateIssued: Joi.string().isoDate(),
    issuedBy: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    priceCurrency: Joi.string(),
    ticketNumber: Joi.string(),
    ticketToken: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
    ticketedSeat: Joi.alternatives().try(Joi.lazy(() => schema.SeatOrSubClassJoiSchema), Joi.string().uri()),
    totalPrice: Joi.alternatives().try(Joi.number(), Joi.lazy(() => schema.PriceSpecificationOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    underName: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    additionalType: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
    alternateName: Joi.string(),
    disambiguatingDescription: Joi.string(),
    image: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
    mainEntityOfPage: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    owner: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    potentialAction: Joi.alternatives().try(Joi.lazy(() => schema.ActionOrSubClassJoiSchema), Joi.string().uri()),
    sameAs: Joi.string().uri(),
    subjectOf: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.string().uri()),
    url: Joi.string().uri(),
});
/**
 * schema:Ticket - Validation schema (w/ JOI)
 *
 * This differs from TicketJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.TicketOrSubClassJoiSchema = Joi.alternatives().try([
    exports.TicketJoiSchema,
]);
/**
 * Runtime validator for schema:Ticket.
 *
 * If some data has a structure which matches a schema:Ticket, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeTicket = validateTicket(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeTicket instanceof OaValidationError) {
 *   // From this point on, `maybeTicket` will have type `OaValidationError`
 *   const error = maybeTicket;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeTicket` will have type `Ticket`
 * const ticket = maybeTicket;
 * ```
 */
function validateTicket(maybeTicket) {
    const { value, error } = exports.TicketJoiSchema.validate(maybeTicket);
    if (error) {
        return new oaValidationError_1.OaValidationError('Ticket', maybeTicket, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateTicket = validateTicket;
