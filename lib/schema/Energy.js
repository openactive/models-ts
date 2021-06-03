"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEnergy = exports.EnergyOrSubClassJoiSchema = exports.EnergyJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:Energy - Validation schema (w/ JOI)
 */
exports.EnergyJoiSchema = Joi.object({
    '@type': Joi.string().valid('Energy').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
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
 * schema:Energy - Validation schema (w/ JOI)
 *
 * This differs from EnergyJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.EnergyOrSubClassJoiSchema = Joi.alternatives().try([
    exports.EnergyJoiSchema,
]);
/**
 * Runtime validator for schema:Energy.
 *
 * If some data has a structure which matches a schema:Energy, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeEnergy = validateEnergy(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeEnergy instanceof OaValidationError) {
 *   // From this point on, `maybeEnergy` will have type `OaValidationError`
 *   const error = maybeEnergy;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeEnergy` will have type `Energy`
 * const energy = maybeEnergy;
 * ```
 */
function validateEnergy(maybeEnergy) {
    const { value, error } = exports.EnergyJoiSchema.validate(maybeEnergy);
    if (error) {
        return new oaValidationError_1.OaValidationError('Energy', maybeEnergy, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateEnergy = validateEnergy;
