"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCategoryCode = exports.CategoryCodeOrSubClassJoiSchema = exports.CategoryCodeJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:CategoryCode - Validation schema (w/ JOI)
 */
exports.CategoryCodeJoiSchema = Joi.object({
    '@type': Joi.string().valid('CategoryCode').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    codeValue: Joi.string(),
    inCodeSet: Joi.alternatives().try(Joi.string().uri(), Joi.lazy(() => schema.CategoryCodeSetOrSubClassJoiSchema)),
    termCode: Joi.string(),
    inDefinedTermSet: Joi.alternatives().try(Joi.string().uri(), Joi.lazy(() => schema.DefinedTermSetOrSubClassJoiSchema)),
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
 * schema:CategoryCode - Validation schema (w/ JOI)
 *
 * This differs from CategoryCodeJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.CategoryCodeOrSubClassJoiSchema = Joi.alternatives().try([
    exports.CategoryCodeJoiSchema,
    Joi.lazy(() => schema.MedicalCodeOrSubClassJoiSchema),
]);
/**
 * Runtime validator for schema:CategoryCode.
 *
 * If some data has a structure which matches a schema:CategoryCode, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeCategoryCode = validateCategoryCode(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeCategoryCode instanceof OaValidationError) {
 *   // From this point on, `maybeCategoryCode` will have type `OaValidationError`
 *   const error = maybeCategoryCode;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeCategoryCode` will have type `CategoryCode`
 * const categoryCode = maybeCategoryCode;
 * ```
 */
function validateCategoryCode(maybeCategoryCode) {
    const { value, error } = exports.CategoryCodeJoiSchema.validate(maybeCategoryCode);
    if (error) {
        return new oaValidationError_1.OaValidationError('CategoryCode', maybeCategoryCode, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateCategoryCode = validateCategoryCode;
