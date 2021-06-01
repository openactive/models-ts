"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEmployeeRole = exports.EmployeeRoleOrSubClassJoiSchema = exports.EmployeeRoleJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:EmployeeRole - Validation schema (w/ JOI)
 */
exports.EmployeeRoleJoiSchema = Joi.object({
    '@type': Joi.string().valid('EmployeeRole').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    salaryCurrency: Joi.string(),
    baseSalary: Joi.alternatives().try(Joi.lazy(() => schema.MonetaryAmountOrSubClassJoiSchema), Joi.lazy(() => schema.PriceSpecificationOrSubClassJoiSchema), Joi.number(), Joi.string().uri()),
    numberedPosition: Joi.number(),
    startDate: Joi.string().isoDate(),
    endDate: Joi.string().isoDate(),
    namedPosition: Joi.alternatives().try(Joi.string().uri(), Joi.string()),
    roleName: Joi.alternatives().try(Joi.string().uri(), Joi.string()),
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
 * schema:EmployeeRole - Validation schema (w/ JOI)
 *
 * This differs from EmployeeRoleJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.EmployeeRoleOrSubClassJoiSchema = Joi.alternatives().try([
    exports.EmployeeRoleJoiSchema,
]);
/**
 * Runtime validator for schema:EmployeeRole.
 *
 * If some data has a structure which matches a schema:EmployeeRole, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeEmployeeRole = EmployeeRole.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeEmployeeRole instanceof OaValidationError) {
 *   // From this point on, `maybeEmployeeRole` will have type `OaValidationError`
 *   const error = maybeEmployeeRole;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeEmployeeRole` will have type `EmployeeRole`
 * const employeeRole = maybeEmployeeRole;
 * ```
 */
function validateEmployeeRole(maybeEmployeeRole) {
    const { value, error } = exports.EmployeeRoleJoiSchema.validate(maybeEmployeeRole);
    if (error) {
        return new oaValidationError_1.OaValidationError('EmployeeRole', maybeEmployeeRole, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateEmployeeRole = validateEmployeeRole;
