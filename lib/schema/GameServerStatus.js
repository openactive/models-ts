"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateGameServerStatus = exports.GameServerStatusOrSubClassJoiSchema = exports.GameServerStatusJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * schema:GameServerStatus - Validation schema (w/ JOI)
 */
exports.GameServerStatusJoiSchema = Joi.object({
    '@type': Joi.string().valid('GameServerStatus').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    '@id': Joi.string().uri(),
});
/**
 * schema:GameServerStatus - Validation schema (w/ JOI)
 *
 * This differs from GameServerStatusJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.GameServerStatusOrSubClassJoiSchema = Joi.alternatives().try([
    exports.GameServerStatusJoiSchema,
]);
/**
 * Runtime validator for schema:GameServerStatus.
 *
 * If some data has a structure which matches a schema:GameServerStatus, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeGameServerStatus = GameServerStatus.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeGameServerStatus instanceof OaValidationError) {
 *   // From this point on, `maybeGameServerStatus` will have type `OaValidationError`
 *   const error = maybeGameServerStatus;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeGameServerStatus` will have type `GameServerStatus`
 * const gameServerStatus = maybeGameServerStatus;
 * ```
 */
function validateGameServerStatus(maybeGameServerStatus) {
    const { value, error } = exports.GameServerStatusJoiSchema.validate(maybeGameServerStatus);
    if (error) {
        return new oaValidationError_1.OaValidationError('GameServerStatus', maybeGameServerStatus, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateGameServerStatus = validateGameServerStatus;
