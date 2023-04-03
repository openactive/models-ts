"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateConsumeAction = exports.ConsumeActionOrSubClassJoiSchema = exports.ConsumeActionJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:ConsumeAction - Validation schema (w/ JOI)
 */
exports.ConsumeActionJoiSchema = Joi.object({
    '@type': Joi.string().valid('ConsumeAction').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    actionAccessibilityRequirement: Joi.alternatives().try(Joi.lazy(() => schema.ActionAccessSpecificationOrSubClassJoiSchema), Joi.string().uri()),
    expectsAcceptanceOf: Joi.alternatives().try(Joi.lazy(() => schema.OfferOrSubClassJoiSchema), Joi.string().uri()),
    result: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
    object: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
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
 * schema:ConsumeAction - Validation schema (w/ JOI)
 *
 * This differs from ConsumeActionJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.ConsumeActionOrSubClassJoiSchema = Joi.alternatives().try([
    exports.ConsumeActionJoiSchema,
    Joi.lazy(() => schema.ListenActionOrSubClassJoiSchema),
    Joi.lazy(() => schema.UseActionOrSubClassJoiSchema),
    Joi.lazy(() => schema.DrinkActionOrSubClassJoiSchema),
    Joi.lazy(() => schema.WatchActionOrSubClassJoiSchema),
    Joi.lazy(() => schema.InstallActionOrSubClassJoiSchema),
    Joi.lazy(() => schema.ViewActionOrSubClassJoiSchema),
    Joi.lazy(() => schema.ReadActionOrSubClassJoiSchema),
    Joi.lazy(() => schema.EatActionOrSubClassJoiSchema),
]);
/**
 * Runtime validator for schema:ConsumeAction.
 *
 * If some data has a structure which matches a schema:ConsumeAction, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeConsumeAction = validateConsumeAction(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeConsumeAction instanceof OaValidationError) {
 *   // From this point on, `maybeConsumeAction` will have type `OaValidationError`
 *   const error = maybeConsumeAction;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeConsumeAction` will have type `ConsumeAction`
 * const consumeAction = maybeConsumeAction;
 * ```
 */
function validateConsumeAction(maybeConsumeAction) {
    const { value, error } = exports.ConsumeActionJoiSchema.validate(maybeConsumeAction);
    if (error) {
        return new oaValidationError_1.OaValidationError('ConsumeAction', maybeConsumeAction, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateConsumeAction = validateConsumeAction;
