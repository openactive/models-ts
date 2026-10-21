"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTelevisionChannel = exports.TelevisionChannelOrSubClassJoiSchema = exports.TelevisionChannelJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:TelevisionChannel - Validation schema (w/ JOI)
 */
exports.TelevisionChannelJoiSchema = Joi.object({
    '@type': Joi.string().valid('TelevisionChannel').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    broadcastChannelId: Joi.string(),
    broadcastFrequency: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.BroadcastFrequencySpecificationOrSubClassJoiSchema), Joi.string().uri()),
    genre: Joi.alternatives().try(Joi.string().uri(), Joi.string()),
    providesBroadcastService: Joi.alternatives().try(Joi.lazy(() => schema.BroadcastServiceOrSubClassJoiSchema), Joi.string().uri()),
    broadcastServiceTier: Joi.string(),
    inBroadcastLineup: Joi.alternatives().try(Joi.lazy(() => schema.CableOrSatelliteServiceOrSubClassJoiSchema), Joi.string().uri()),
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
 * schema:TelevisionChannel - Validation schema (w/ JOI)
 *
 * This differs from TelevisionChannelJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.TelevisionChannelOrSubClassJoiSchema = Joi.alternatives().try([
    exports.TelevisionChannelJoiSchema,
]);
/**
 * Runtime validator for schema:TelevisionChannel.
 *
 * If some data has a structure which matches a schema:TelevisionChannel, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeTelevisionChannel = validateTelevisionChannel(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeTelevisionChannel instanceof OaValidationError) {
 *   // From this point on, `maybeTelevisionChannel` will have type `OaValidationError`
 *   const error = maybeTelevisionChannel;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeTelevisionChannel` will have type `TelevisionChannel`
 * const televisionChannel = maybeTelevisionChannel;
 * ```
 */
function validateTelevisionChannel(maybeTelevisionChannel) {
    const { value, error } = exports.TelevisionChannelJoiSchema.validate(maybeTelevisionChannel);
    if (error) {
        return new oaValidationError_1.OaValidationError('TelevisionChannel', maybeTelevisionChannel, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateTelevisionChannel = validateTelevisionChannel;
