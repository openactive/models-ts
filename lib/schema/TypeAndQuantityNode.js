"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTypeAndQuantityNode = exports.TypeAndQuantityNodeOrSubClassJoiSchema = exports.TypeAndQuantityNodeJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:TypeAndQuantityNode - Validation schema (w/ JOI)
 */
exports.TypeAndQuantityNodeJoiSchema = Joi.object({
    '@type': Joi.string().valid('TypeAndQuantityNode').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    businessFunction: Joi.lazy(() => schema.BusinessFunctionJoiSchema),
    typeOfGood: Joi.alternatives().try(Joi.lazy(() => schema.ServiceOrSubClassJoiSchema), Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.string().uri()),
    unitText: Joi.string(),
    unitCode: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
    amountOfThisGood: Joi.number(),
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
 * schema:TypeAndQuantityNode - Validation schema (w/ JOI)
 *
 * This differs from TypeAndQuantityNodeJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.TypeAndQuantityNodeOrSubClassJoiSchema = Joi.alternatives().try([
    exports.TypeAndQuantityNodeJoiSchema,
]);
/**
 * Runtime validator for schema:TypeAndQuantityNode.
 *
 * If some data has a structure which matches a schema:TypeAndQuantityNode, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeTypeAndQuantityNode = validateTypeAndQuantityNode(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeTypeAndQuantityNode instanceof OaValidationError) {
 *   // From this point on, `maybeTypeAndQuantityNode` will have type `OaValidationError`
 *   const error = maybeTypeAndQuantityNode;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeTypeAndQuantityNode` will have type `TypeAndQuantityNode`
 * const typeAndQuantityNode = maybeTypeAndQuantityNode;
 * ```
 */
function validateTypeAndQuantityNode(maybeTypeAndQuantityNode) {
    const { value, error } = exports.TypeAndQuantityNodeJoiSchema.validate(maybeTypeAndQuantityNode);
    if (error) {
        return new oaValidationError_1.OaValidationError('TypeAndQuantityNode', maybeTypeAndQuantityNode, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateTypeAndQuantityNode = validateTypeAndQuantityNode;
