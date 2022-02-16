"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateHowToItem = exports.HowToItemOrSubClassJoiSchema = exports.HowToItemJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:HowToItem - Validation schema (w/ JOI)
 */
exports.HowToItemJoiSchema = Joi.object({
    '@type': Joi.string().valid('HowToItem').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    requiredQuantity: Joi.alternatives().try(Joi.number(), Joi.string(), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    position: Joi.alternatives().try(Joi.string(), Joi.number().integer()),
    nextItem: Joi.alternatives().try(Joi.lazy(() => schema.ListItemOrSubClassJoiSchema), Joi.string().uri()),
    previousItem: Joi.alternatives().try(Joi.lazy(() => schema.ListItemOrSubClassJoiSchema), Joi.string().uri()),
    item: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
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
 * schema:HowToItem - Validation schema (w/ JOI)
 *
 * This differs from HowToItemJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.HowToItemOrSubClassJoiSchema = Joi.alternatives().try([
    exports.HowToItemJoiSchema,
    Joi.lazy(() => schema.HowToToolOrSubClassJoiSchema),
    Joi.lazy(() => schema.HowToSupplyOrSubClassJoiSchema),
]);
/**
 * Runtime validator for schema:HowToItem.
 *
 * If some data has a structure which matches a schema:HowToItem, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeHowToItem = validateHowToItem(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeHowToItem instanceof OaValidationError) {
 *   // From this point on, `maybeHowToItem` will have type `OaValidationError`
 *   const error = maybeHowToItem;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeHowToItem` will have type `HowToItem`
 * const howToItem = maybeHowToItem;
 * ```
 */
function validateHowToItem(maybeHowToItem) {
    const { value, error } = exports.HowToItemJoiSchema.validate(maybeHowToItem);
    if (error) {
        return new oaValidationError_1.OaValidationError('HowToItem', maybeHowToItem, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateHowToItem = validateHowToItem;
