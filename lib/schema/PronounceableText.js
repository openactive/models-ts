"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePronounceableText = exports.PronounceableTextOrSubClassJoiSchema = exports.PronounceableTextJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:PronounceableText - Validation schema (w/ JOI)
 */
exports.PronounceableTextJoiSchema = Joi.object({
    '@type': Joi.string().valid('PronounceableText').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    '@id': Joi.string().uri(),
    textValue: Joi.string(),
    phoneticText: Joi.string(),
    speechToTextMarkup: Joi.string(),
    inLanguage: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.LanguageOrSubClassJoiSchema), Joi.string().uri()),
});
/**
 * schema:PronounceableText - Validation schema (w/ JOI)
 *
 * This differs from PronounceableTextJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.PronounceableTextOrSubClassJoiSchema = Joi.alternatives().try([
    exports.PronounceableTextJoiSchema,
]);
/**
 * Runtime validator for schema:PronounceableText.
 *
 * If some data has a structure which matches a schema:PronounceableText, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybePronounceableText = validatePronounceableText(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybePronounceableText instanceof OaValidationError) {
 *   // From this point on, `maybePronounceableText` will have type `OaValidationError`
 *   const error = maybePronounceableText;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybePronounceableText` will have type `PronounceableText`
 * const pronounceableText = maybePronounceableText;
 * ```
 */
function validatePronounceableText(maybePronounceableText) {
    const { value, error } = exports.PronounceableTextJoiSchema.validate(maybePronounceableText);
    if (error) {
        return new oaValidationError_1.OaValidationError('PronounceableText', maybePronounceableText, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validatePronounceableText = validatePronounceableText;
