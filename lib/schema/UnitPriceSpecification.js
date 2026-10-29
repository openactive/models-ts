"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUnitPriceSpecification = exports.UnitPriceSpecificationOrSubClassJoiSchema = exports.UnitPriceSpecificationJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:UnitPriceSpecification - Validation schema (w/ JOI)
 */
exports.UnitPriceSpecificationJoiSchema = Joi.object({
    '@type': Joi.string().valid('UnitPriceSpecification').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.TextObjectOrSubClassJoiSchema), Joi.string().uri()),
    '@id': Joi.string().uri(),
    billingDuration: Joi.alternatives().try(Joi.string(), Joi.number(), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    billingIncrement: Joi.number(),
    billingStart: Joi.number(),
    priceComponentType: Joi.lazy(() => schema.PriceComponentTypeEnumerationJoiSchema),
    priceType: Joi.alternatives().try(Joi.lazy(() => schema.PriceTypeEnumerationJoiSchema), Joi.string()),
    referenceQuantity: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    unitCode: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
    unitText: Joi.string(),
    eligibleQuantity: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    eligibleTransactionVolume: Joi.alternatives().try(Joi.lazy(() => schema.PriceSpecificationOrSubClassJoiSchema), Joi.string().uri()),
    maxPrice: Joi.number(),
    membershipPointsEarned: Joi.alternatives().try(Joi.number(), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    minPrice: Joi.number(),
    price: Joi.alternatives().try(Joi.number(), Joi.string()),
    priceCurrency: Joi.string(),
    validForMemberTier: Joi.alternatives().try(Joi.lazy(() => schema.MemberProgramTierOrSubClassJoiSchema), Joi.string().uri()),
    validFrom: Joi.string().isoDate(),
    validThrough: Joi.string().isoDate(),
    valueAddedTaxIncluded: Joi.boolean(),
    additionalType: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
    alternateName: Joi.string(),
    disambiguatingDescription: Joi.string(),
    image: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
    mainEntityOfPage: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    owner: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    potentialAction: Joi.alternatives().try(Joi.lazy(() => schema.ActionOrSubClassJoiSchema), Joi.string().uri()),
    sameAs: Joi.string().uri(),
    subjectOf: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.string().uri()),
    url: Joi.string().uri(),
});
/**
 * schema:UnitPriceSpecification - Validation schema (w/ JOI)
 *
 * This differs from UnitPriceSpecificationJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.UnitPriceSpecificationOrSubClassJoiSchema = Joi.alternatives().try([
    exports.UnitPriceSpecificationJoiSchema,
]);
/**
 * Runtime validator for schema:UnitPriceSpecification.
 *
 * If some data has a structure which matches a schema:UnitPriceSpecification, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeUnitPriceSpecification = validateUnitPriceSpecification(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeUnitPriceSpecification instanceof OaValidationError) {
 *   // From this point on, `maybeUnitPriceSpecification` will have type `OaValidationError`
 *   const error = maybeUnitPriceSpecification;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeUnitPriceSpecification` will have type `UnitPriceSpecification`
 * const unitPriceSpecification = maybeUnitPriceSpecification;
 * ```
 */
function validateUnitPriceSpecification(maybeUnitPriceSpecification) {
    const { value, error } = exports.UnitPriceSpecificationJoiSchema.validate(maybeUnitPriceSpecification);
    if (error) {
        return new oaValidationError_1.OaValidationError('UnitPriceSpecification', maybeUnitPriceSpecification, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateUnitPriceSpecification = validateUnitPriceSpecification;
