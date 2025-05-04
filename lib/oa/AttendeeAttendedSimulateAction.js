"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAttendeeAttendedSimulateAction = exports.AttendeeAttendedSimulateActionOrSubClassJoiSchema = exports.AttendeeAttendedSimulateActionJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const oa = require("../oa");
const schema = require("../schema");
/**
 * test:AttendeeAttendedSimulateAction - Validation schema (w/ JOI)
 *
 * [NOTICE: This class is part of the Open Booking API Test Interface, and MUST NOT be used in production.]
 *
 * This type is derived from https://schema.org/Action, which means that any of this type's properties within schema.org may also be used.
 */
exports.AttendeeAttendedSimulateActionJoiSchema = Joi.object({
    '@type': Joi.string().valid('AttendeeAttendedSimulateAction').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    object: Joi.alternatives().try(Joi.lazy(() => oa.OrderOrSubClassJoiSchema), Joi.lazy(() => oa.Event_OrSubClassJoiSchema)),
    result: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
    participant: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    error: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
    location: Joi.alternatives().try(Joi.lazy(() => schema.PostalAddressOrSubClassJoiSchema), Joi.string(), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.lazy(() => schema.VirtualLocationOrSubClassJoiSchema), Joi.string().uri()),
    endTime: Joi.alternatives().try(Joi.string().isoDate(), Joi.string()),
    agent: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    target: Joi.alternatives().try(Joi.lazy(() => schema.EntryPointOrSubClassJoiSchema), Joi.string().uri()),
    actionStatus: Joi.alternatives().try(Joi.lazy(() => schema.ActionStatusTypeOrSubClassJoiSchema), Joi.string().uri()),
    instrument: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
    startTime: Joi.alternatives().try(Joi.string(), Joi.string().isoDate()),
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
 * test:AttendeeAttendedSimulateAction - Validation schema (w/ JOI)
 *
 * [NOTICE: This class is part of the Open Booking API Test Interface, and MUST NOT be used in production.]
 *
 * This type is derived from https://schema.org/Action, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from AttendeeAttendedSimulateActionJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.AttendeeAttendedSimulateActionOrSubClassJoiSchema = Joi.alternatives().try([
    exports.AttendeeAttendedSimulateActionJoiSchema,
]);
/**
 * Runtime validator for test:AttendeeAttendedSimulateAction.
 *
 * If some data has a structure which matches a test:AttendeeAttendedSimulateAction, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeAttendeeAttendedSimulateAction = validateAttendeeAttendedSimulateAction(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeAttendeeAttendedSimulateAction instanceof OaValidationError) {
 *   // From this point on, `maybeAttendeeAttendedSimulateAction` will have type `OaValidationError`
 *   const error = maybeAttendeeAttendedSimulateAction;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeAttendeeAttendedSimulateAction` will have type `AttendeeAttendedSimulateAction`
 * const attendeeAttendedSimulateAction = maybeAttendeeAttendedSimulateAction;
 * ```
 */
function validateAttendeeAttendedSimulateAction(maybeAttendeeAttendedSimulateAction) {
    const { value, error } = exports.AttendeeAttendedSimulateActionJoiSchema.validate(maybeAttendeeAttendedSimulateAction);
    if (error) {
        return new oaValidationError_1.OaValidationError('AttendeeAttendedSimulateAction', maybeAttendeeAttendedSimulateAction, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateAttendeeAttendedSimulateAction = validateAttendeeAttendedSimulateAction;
