"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCompoundPriceSpecification = exports.CompoundPriceSpecificationOrSubClassJoiSchema = exports.CompoundPriceSpecificationJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:CompoundPriceSpecification - Validation schema (w/ JOI)
 */
exports.CompoundPriceSpecificationJoiSchema = Joi.object({
    '@type': Joi.string().valid('CompoundPriceSpecification').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    priceType: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.PriceTypeEnumerationJoiSchema)),
    priceComponent: Joi.alternatives().try(Joi.lazy(() => schema.UnitPriceSpecificationOrSubClassJoiSchema), Joi.string().uri()),
    valueAddedTaxIncluded: Joi.boolean(),
    eligibleTransactionVolume: Joi.alternatives().try(Joi.lazy(() => schema.PriceSpecificationOrSubClassJoiSchema), Joi.string().uri()),
    priceCurrency: Joi.string(),
    price: Joi.alternatives().try(Joi.number(), Joi.string()),
    maxPrice: Joi.number(),
    minPrice: Joi.number(),
    validFrom: Joi.string().isoDate(),
    validThrough: Joi.string().isoDate(),
    eligibleQuantity: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
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
 * schema:CompoundPriceSpecification - Validation schema (w/ JOI)
 *
 * This differs from CompoundPriceSpecificationJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.CompoundPriceSpecificationOrSubClassJoiSchema = Joi.alternatives().try([
    exports.CompoundPriceSpecificationJoiSchema,
]);
/**
 * Runtime validator for schema:CompoundPriceSpecification.
 *
 * If some data has a structure which matches a schema:CompoundPriceSpecification, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeCompoundPriceSpecification = validateCompoundPriceSpecification(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeCompoundPriceSpecification instanceof OaValidationError) {
 *   // From this point on, `maybeCompoundPriceSpecification` will have type `OaValidationError`
 *   const error = maybeCompoundPriceSpecification;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeCompoundPriceSpecification` will have type `CompoundPriceSpecification`
 * const compoundPriceSpecification = maybeCompoundPriceSpecification;
 * ```
 */
function validateCompoundPriceSpecification(maybeCompoundPriceSpecification) {
    const { value, error } = exports.CompoundPriceSpecificationJoiSchema.validate(maybeCompoundPriceSpecification);
    if (error) {
        return new oaValidationError_1.OaValidationError('CompoundPriceSpecification', maybeCompoundPriceSpecification, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateCompoundPriceSpecification = validateCompoundPriceSpecification;
