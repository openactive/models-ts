"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateWebAPI = exports.WebAPIOrSubClassJoiSchema = exports.WebAPIJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * WebAPI - Validation schema (w/ JOI)
 *
 *
 *
 * EARLY RELEASE NOTICE: This class represents a draft that is designed to inform the OpenActive specification work with implementation feedback. IT IS SUBJECT TO CHANGE, as the [Dataset API Discovery specification](https://openactive.io/dataset-api-discovery/EditorsDraft/) evolves.
 *
 *
 *
 * This type is derived from https://pending.schema.org/WebAPI.
 */
exports.WebAPIJoiSchema = Joi.object({
    '@type': Joi.string().valid('WebAPI').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    authenticationAuthority: Joi.string().uri(),
    conformsTo: Joi.array().items(Joi.string().uri()),
    documentation: Joi.string().uri(),
    endpointDescription: Joi.string().uri(),
    endpointURL: Joi.string().uri(),
    landingPage: Joi.string().uri(),
    termsOfService: Joi.string().uri(),
});
/**
 * WebAPI - Validation schema (w/ JOI)
 *
 *
 *
 * EARLY RELEASE NOTICE: This class represents a draft that is designed to inform the OpenActive specification work with implementation feedback. IT IS SUBJECT TO CHANGE, as the [Dataset API Discovery specification](https://openactive.io/dataset-api-discovery/EditorsDraft/) evolves.
 *
 *
 *
 * This type is derived from https://pending.schema.org/WebAPI.
 *
 * This differs from WebAPIJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.WebAPIOrSubClassJoiSchema = Joi.alternatives().try([
    exports.WebAPIJoiSchema,
]);
/**
 * Runtime validator for WebAPI.
 *
 * If some data has a structure which matches a WebAPI, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeWebAPI = WebAPI.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeWebAPI instanceof OaValidationError) {
 *   // From this point on, `maybeWebAPI` will have type `OaValidationError`
 *   const error = maybeWebAPI;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeWebAPI` will have type `WebAPI`
 * const webAPI = maybeWebAPI;
 * ```
 */
function validateWebAPI(maybeWebAPI) {
    const { value, error } = exports.WebAPIJoiSchema.validate(maybeWebAPI);
    if (error) {
        return new oaValidationError_1.OaValidationError('WebAPI', maybeWebAPI, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateWebAPI = validateWebAPI;
