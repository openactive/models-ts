"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBroadcastChannel = exports.BroadcastChannelOrSubClassJoiSchema = exports.BroadcastChannelJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:BroadcastChannel - Validation schema (w/ JOI)
 */
exports.BroadcastChannelJoiSchema = Joi.object({
    '@type': Joi.string().valid('BroadcastChannel').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    broadcastFrequency: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.BroadcastFrequencySpecificationOrSubClassJoiSchema), Joi.string().uri()),
    broadcastChannelId: Joi.string(),
    broadcastServiceTier: Joi.string(),
    genre: Joi.alternatives().try(Joi.string().uri(), Joi.string()),
    inBroadcastLineup: Joi.alternatives().try(Joi.lazy(() => schema.CableOrSatelliteServiceOrSubClassJoiSchema), Joi.string().uri()),
    providesBroadcastService: Joi.alternatives().try(Joi.lazy(() => schema.BroadcastServiceOrSubClassJoiSchema), Joi.string().uri()),
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
 * schema:BroadcastChannel - Validation schema (w/ JOI)
 *
 * This differs from BroadcastChannelJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.BroadcastChannelOrSubClassJoiSchema = Joi.alternatives().try([
    exports.BroadcastChannelJoiSchema,
    Joi.lazy(() => schema.TelevisionChannelOrSubClassJoiSchema),
    Joi.lazy(() => schema.RadioChannelOrSubClassJoiSchema),
]);
/**
 * Runtime validator for schema:BroadcastChannel.
 *
 * If some data has a structure which matches a schema:BroadcastChannel, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeBroadcastChannel = validateBroadcastChannel(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeBroadcastChannel instanceof OaValidationError) {
 *   // From this point on, `maybeBroadcastChannel` will have type `OaValidationError`
 *   const error = maybeBroadcastChannel;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeBroadcastChannel` will have type `BroadcastChannel`
 * const broadcastChannel = maybeBroadcastChannel;
 * ```
 */
function validateBroadcastChannel(maybeBroadcastChannel) {
    const { value, error } = exports.BroadcastChannelJoiSchema.validate(maybeBroadcastChannel);
    if (error) {
        return new oaValidationError_1.OaValidationError('BroadcastChannel', maybeBroadcastChannel, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateBroadcastChannel = validateBroadcastChannel;
