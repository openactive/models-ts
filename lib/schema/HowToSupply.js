"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateHowToSupply = exports.HowToSupplyOrSubClassJoiSchema = exports.HowToSupplyJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:HowToSupply - Validation schema (w/ JOI)
 */
exports.HowToSupplyJoiSchema = Joi.object({
    '@type': Joi.string().valid('HowToSupply').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    estimatedCost: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.MonetaryAmountOrSubClassJoiSchema), Joi.string().uri()),
    requiredQuantity: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.number(), Joi.string().uri()),
    item: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
    nextItem: Joi.alternatives().try(Joi.lazy(() => schema.ListItemOrSubClassJoiSchema), Joi.string().uri()),
    previousItem: Joi.alternatives().try(Joi.lazy(() => schema.ListItemOrSubClassJoiSchema), Joi.string().uri()),
    position: Joi.alternatives().try(Joi.string(), Joi.number().integer()),
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
 * schema:HowToSupply - Validation schema (w/ JOI)
 *
 * This differs from HowToSupplyJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.HowToSupplyOrSubClassJoiSchema = Joi.alternatives().try([
    exports.HowToSupplyJoiSchema,
]);
/**
 * Runtime validator for schema:HowToSupply.
 *
 * If some data has a structure which matches a schema:HowToSupply, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeHowToSupply = validateHowToSupply(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeHowToSupply instanceof OaValidationError) {
 *   // From this point on, `maybeHowToSupply` will have type `OaValidationError`
 *   const error = maybeHowToSupply;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeHowToSupply` will have type `HowToSupply`
 * const howToSupply = maybeHowToSupply;
 * ```
 */
function validateHowToSupply(maybeHowToSupply) {
    const { value, error } = exports.HowToSupplyJoiSchema.validate(maybeHowToSupply);
    if (error) {
        return new oaValidationError_1.OaValidationError('HowToSupply', maybeHowToSupply, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateHowToSupply = validateHowToSupply;
