"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateGameServer = exports.GameServerOrSubClassJoiSchema = exports.GameServerJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:GameServer - Validation schema (w/ JOI)
 */
exports.GameServerJoiSchema = Joi.object({
    '@type': Joi.string().valid('GameServer').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    serverStatus: Joi.alternatives().try(Joi.lazy(() => schema.GameServerStatusOrSubClassJoiSchema), Joi.string().uri()),
    game: Joi.alternatives().try(Joi.lazy(() => schema.VideoGameOrSubClassJoiSchema), Joi.string().uri()),
    playersOnline: Joi.number().integer(),
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
 * schema:GameServer - Validation schema (w/ JOI)
 *
 * This differs from GameServerJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.GameServerOrSubClassJoiSchema = Joi.alternatives().try([
    exports.GameServerJoiSchema,
]);
/**
 * Runtime validator for schema:GameServer.
 *
 * If some data has a structure which matches a schema:GameServer, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeGameServer = GameServer.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeGameServer instanceof OaValidationError) {
 *   // From this point on, `maybeGameServer` will have type `OaValidationError`
 *   const error = maybeGameServer;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeGameServer` will have type `GameServer`
 * const gameServer = maybeGameServer;
 * ```
 */
function validateGameServer(maybeGameServer) {
    const { value, error } = exports.GameServerJoiSchema.validate(maybeGameServer);
    if (error) {
        return new oaValidationError_1.OaValidationError('GameServer', maybeGameServer, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateGameServer = validateGameServer;
