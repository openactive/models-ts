"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAction = exports.ActionOrSubClassJoiSchema = exports.ActionJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:Action - Validation schema (w/ JOI)
 */
exports.ActionJoiSchema = Joi.object({
    '@type': Joi.string().valid('Action').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
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
 * schema:Action - Validation schema (w/ JOI)
 *
 * This differs from ActionJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.ActionOrSubClassJoiSchema = Joi.alternatives().try([
    exports.ActionJoiSchema,
    Joi.lazy(() => schema.ConsumeActionOrSubClassJoiSchema),
    Joi.lazy(() => schema.MoveActionOrSubClassJoiSchema),
    Joi.lazy(() => schema.AchieveActionOrSubClassJoiSchema),
    Joi.lazy(() => schema.ControlActionOrSubClassJoiSchema),
    Joi.lazy(() => schema.FindActionOrSubClassJoiSchema),
    Joi.lazy(() => schema.PlayActionOrSubClassJoiSchema),
    Joi.lazy(() => schema.AssessActionOrSubClassJoiSchema),
    Joi.lazy(() => schema.OrganizeActionOrSubClassJoiSchema),
    Joi.lazy(() => schema.SearchActionOrSubClassJoiSchema),
    Joi.lazy(() => schema.SeekToActionOrSubClassJoiSchema),
    Joi.lazy(() => schema.TradeActionOrSubClassJoiSchema),
    Joi.lazy(() => schema.SolveMathActionOrSubClassJoiSchema),
    Joi.lazy(() => schema.CreateActionOrSubClassJoiSchema),
    Joi.lazy(() => schema.InteractActionOrSubClassJoiSchema),
    Joi.lazy(() => schema.UpdateActionOrSubClassJoiSchema),
    Joi.lazy(() => schema.TransferActionOrSubClassJoiSchema),
]);
/**
 * Runtime validator for schema:Action.
 *
 * If some data has a structure which matches a schema:Action, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeAction = validateAction(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeAction instanceof OaValidationError) {
 *   // From this point on, `maybeAction` will have type `OaValidationError`
 *   const error = maybeAction;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeAction` will have type `Action`
 * const action = maybeAction;
 * ```
 */
function validateAction(maybeAction) {
    const { value, error } = exports.ActionJoiSchema.validate(maybeAction);
    if (error) {
        return new oaValidationError_1.OaValidationError('Action', maybeAction, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateAction = validateAction;
