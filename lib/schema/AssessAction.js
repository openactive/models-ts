"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAssessAction = exports.AssessActionOrSubClassJoiSchema = exports.AssessActionJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:AssessAction - Validation schema (w/ JOI)
 */
exports.AssessActionJoiSchema = Joi.object({
    '@type': Joi.string().valid('AssessAction').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
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
 * schema:AssessAction - Validation schema (w/ JOI)
 *
 * This differs from AssessActionJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.AssessActionOrSubClassJoiSchema = Joi.alternatives().try([
    exports.AssessActionJoiSchema,
    Joi.lazy(() => schema.ChooseActionOrSubClassJoiSchema),
    Joi.lazy(() => schema.ReviewActionOrSubClassJoiSchema),
    Joi.lazy(() => schema.ReactActionOrSubClassJoiSchema),
    Joi.lazy(() => schema.IgnoreActionOrSubClassJoiSchema),
]);
/**
 * Runtime validator for schema:AssessAction.
 *
 * If some data has a structure which matches a schema:AssessAction, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeAssessAction = validateAssessAction(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeAssessAction instanceof OaValidationError) {
 *   // From this point on, `maybeAssessAction` will have type `OaValidationError`
 *   const error = maybeAssessAction;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeAssessAction` will have type `AssessAction`
 * const assessAction = maybeAssessAction;
 * ```
 */
function validateAssessAction(maybeAssessAction) {
    const { value, error } = exports.AssessActionJoiSchema.validate(maybeAssessAction);
    if (error) {
        return new oaValidationError_1.OaValidationError('AssessAction', maybeAssessAction, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateAssessAction = validateAssessAction;
