"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateNutritionInformation = exports.NutritionInformationOrSubClassJoiSchema = exports.NutritionInformationJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:NutritionInformation - Validation schema (w/ JOI)
 */
exports.NutritionInformationJoiSchema = Joi.object({
    '@type': Joi.string().valid('NutritionInformation').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    proteinContent: Joi.alternatives().try(Joi.lazy(() => schema.MassOrSubClassJoiSchema), Joi.string().uri()),
    fatContent: Joi.alternatives().try(Joi.lazy(() => schema.MassOrSubClassJoiSchema), Joi.string().uri()),
    cholesterolContent: Joi.alternatives().try(Joi.lazy(() => schema.MassOrSubClassJoiSchema), Joi.string().uri()),
    unsaturatedFatContent: Joi.alternatives().try(Joi.lazy(() => schema.MassOrSubClassJoiSchema), Joi.string().uri()),
    fiberContent: Joi.alternatives().try(Joi.lazy(() => schema.MassOrSubClassJoiSchema), Joi.string().uri()),
    saturatedFatContent: Joi.alternatives().try(Joi.lazy(() => schema.MassOrSubClassJoiSchema), Joi.string().uri()),
    calories: Joi.alternatives().try(Joi.lazy(() => schema.EnergyOrSubClassJoiSchema), Joi.string().uri()),
    sugarContent: Joi.alternatives().try(Joi.lazy(() => schema.MassOrSubClassJoiSchema), Joi.string().uri()),
    transFatContent: Joi.alternatives().try(Joi.lazy(() => schema.MassOrSubClassJoiSchema), Joi.string().uri()),
    servingSize: Joi.string(),
    sodiumContent: Joi.alternatives().try(Joi.lazy(() => schema.MassOrSubClassJoiSchema), Joi.string().uri()),
    carbohydrateContent: Joi.alternatives().try(Joi.lazy(() => schema.MassOrSubClassJoiSchema), Joi.string().uri()),
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
 * schema:NutritionInformation - Validation schema (w/ JOI)
 *
 * This differs from NutritionInformationJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.NutritionInformationOrSubClassJoiSchema = Joi.alternatives().try([
    exports.NutritionInformationJoiSchema,
]);
/**
 * Runtime validator for schema:NutritionInformation.
 *
 * If some data has a structure which matches a schema:NutritionInformation, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeNutritionInformation = validateNutritionInformation(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeNutritionInformation instanceof OaValidationError) {
 *   // From this point on, `maybeNutritionInformation` will have type `OaValidationError`
 *   const error = maybeNutritionInformation;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeNutritionInformation` will have type `NutritionInformation`
 * const nutritionInformation = maybeNutritionInformation;
 * ```
 */
function validateNutritionInformation(maybeNutritionInformation) {
    const { value, error } = exports.NutritionInformationJoiSchema.validate(maybeNutritionInformation);
    if (error) {
        return new oaValidationError_1.OaValidationError('NutritionInformation', maybeNutritionInformation, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateNutritionInformation = validateNutritionInformation;
