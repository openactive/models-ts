"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDatedMoneySpecification = exports.DatedMoneySpecificationOrSubClassJoiSchema = exports.DatedMoneySpecificationJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:DatedMoneySpecification - Validation schema (w/ JOI)
 */
exports.DatedMoneySpecificationJoiSchema = Joi.object({
    '@type': Joi.string().valid('DatedMoneySpecification').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    amount: Joi.alternatives().try(Joi.number(), Joi.lazy(() => schema.MonetaryAmountOrSubClassJoiSchema), Joi.string().uri()),
    endDate: Joi.string().isoDate(),
    startDate: Joi.string().isoDate(),
    currency: Joi.string(),
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
 * schema:DatedMoneySpecification - Validation schema (w/ JOI)
 *
 * This differs from DatedMoneySpecificationJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.DatedMoneySpecificationOrSubClassJoiSchema = Joi.alternatives().try([
    exports.DatedMoneySpecificationJoiSchema,
]);
/**
 * Runtime validator for schema:DatedMoneySpecification.
 *
 * If some data has a structure which matches a schema:DatedMoneySpecification, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeDatedMoneySpecification = validateDatedMoneySpecification(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeDatedMoneySpecification instanceof OaValidationError) {
 *   // From this point on, `maybeDatedMoneySpecification` will have type `OaValidationError`
 *   const error = maybeDatedMoneySpecification;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeDatedMoneySpecification` will have type `DatedMoneySpecification`
 * const datedMoneySpecification = maybeDatedMoneySpecification;
 * ```
 */
function validateDatedMoneySpecification(maybeDatedMoneySpecification) {
    const { value, error } = exports.DatedMoneySpecificationJoiSchema.validate(maybeDatedMoneySpecification);
    if (error) {
        return new oaValidationError_1.OaValidationError('DatedMoneySpecification', maybeDatedMoneySpecification, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateDatedMoneySpecification = validateDatedMoneySpecification;
