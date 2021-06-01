"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTransferAction = exports.TransferActionOrSubClassJoiSchema = exports.TransferActionJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:TransferAction - Validation schema (w/ JOI)
 */
exports.TransferActionJoiSchema = Joi.object({
    '@type': Joi.string().valid('TransferAction').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    fromLocation: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    toLocation: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    startTime: Joi.alternatives().try(Joi.string().isoDate(), Joi.string()),
    instrument: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
    actionStatus: Joi.alternatives().try(Joi.lazy(() => schema.ActionStatusTypeOrSubClassJoiSchema), Joi.string().uri()),
    agent: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    participant: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    target: Joi.alternatives().try(Joi.lazy(() => schema.EntryPointOrSubClassJoiSchema), Joi.string().uri()),
    endTime: Joi.alternatives().try(Joi.string().isoDate(), Joi.string()),
    error: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
    result: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
    object: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
    location: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string(), Joi.lazy(() => schema.VirtualLocationOrSubClassJoiSchema), Joi.lazy(() => schema.PostalAddressOrSubClassJoiSchema), Joi.string().uri()),
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
 * schema:TransferAction - Validation schema (w/ JOI)
 *
 * This differs from TransferActionJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.TransferActionOrSubClassJoiSchema = Joi.alternatives().try([
    exports.TransferActionJoiSchema,
    Joi.lazy(() => schema.MoneyTransferOrSubClassJoiSchema),
    Joi.lazy(() => schema.LendActionOrSubClassJoiSchema),
    Joi.lazy(() => schema.GiveActionOrSubClassJoiSchema),
    Joi.lazy(() => schema.SendActionOrSubClassJoiSchema),
    Joi.lazy(() => schema.TakeActionOrSubClassJoiSchema),
    Joi.lazy(() => schema.ReturnActionOrSubClassJoiSchema),
    Joi.lazy(() => schema.DownloadActionOrSubClassJoiSchema),
    Joi.lazy(() => schema.BorrowActionOrSubClassJoiSchema),
    Joi.lazy(() => schema.ReceiveActionOrSubClassJoiSchema),
]);
/**
 * Runtime validator for schema:TransferAction.
 *
 * If some data has a structure which matches a schema:TransferAction, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeTransferAction = TransferAction.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeTransferAction instanceof OaValidationError) {
 *   // From this point on, `maybeTransferAction` will have type `OaValidationError`
 *   const error = maybeTransferAction;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeTransferAction` will have type `TransferAction`
 * const transferAction = maybeTransferAction;
 * ```
 */
function validateTransferAction(maybeTransferAction) {
    const { value, error } = exports.TransferActionJoiSchema.validate(maybeTransferAction);
    if (error) {
        return new oaValidationError_1.OaValidationError('TransferAction', maybeTransferAction, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateTransferAction = validateTransferAction;
