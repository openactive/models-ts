"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateConstraintNode = exports.ConstraintNodeOrSubClassJoiSchema = exports.ConstraintNodeJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const oa = require("../oa");
const schema = require("../schema");
/**
 * schema:ConstraintNode - Validation schema (w/ JOI)
 */
exports.ConstraintNodeJoiSchema = Joi.object({
    '@type': Joi.string().valid('ConstraintNode').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.TextObjectOrSubClassJoiSchema), Joi.string().uri()),
    '@id': Joi.string().uri(),
    constraintProperty: Joi.alternatives().try(Joi.lazy(() => oa.PropertyEnumerationJoiSchema), Joi.string().uri()),
    numConstraints: Joi.number().integer(),
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
 * schema:ConstraintNode - Validation schema (w/ JOI)
 *
 * This differs from ConstraintNodeJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.ConstraintNodeOrSubClassJoiSchema = Joi.alternatives().try([
    exports.ConstraintNodeJoiSchema,
    Joi.lazy(() => schema.StatisticalVariableOrSubClassJoiSchema),
]);
/**
 * Runtime validator for schema:ConstraintNode.
 *
 * If some data has a structure which matches a schema:ConstraintNode, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeConstraintNode = validateConstraintNode(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeConstraintNode instanceof OaValidationError) {
 *   // From this point on, `maybeConstraintNode` will have type `OaValidationError`
 *   const error = maybeConstraintNode;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeConstraintNode` will have type `ConstraintNode`
 * const constraintNode = maybeConstraintNode;
 * ```
 */
function validateConstraintNode(maybeConstraintNode) {
    const { value, error } = exports.ConstraintNodeJoiSchema.validate(maybeConstraintNode);
    if (error) {
        return new oaValidationError_1.OaValidationError('ConstraintNode', maybeConstraintNode, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateConstraintNode = validateConstraintNode;
