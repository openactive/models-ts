"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDrugCost = exports.DrugCostOrSubClassJoiSchema = exports.DrugCostJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:DrugCost - Validation schema (w/ JOI)
 */
exports.DrugCostJoiSchema = Joi.object({
    '@type': Joi.string().valid('DrugCost').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    costCurrency: Joi.string(),
    applicableLocation: Joi.alternatives().try(Joi.lazy(() => schema.AdministrativeAreaOrSubClassJoiSchema), Joi.string().uri()),
    costOrigin: Joi.string(),
    costCategory: Joi.alternatives().try(Joi.lazy(() => schema.DrugCostCategoryOrSubClassJoiSchema), Joi.string().uri()),
    costPerUnit: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.QualitativeValueJoiSchema), Joi.number()),
    drugUnit: Joi.string(),
    guideline: Joi.alternatives().try(Joi.lazy(() => schema.MedicalGuidelineOrSubClassJoiSchema), Joi.string().uri()),
    recognizingAuthority: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    legalStatus: Joi.alternatives().try(Joi.lazy(() => schema.MedicalEnumerationJoiSchema), Joi.string(), Joi.lazy(() => schema.DrugLegalStatusOrSubClassJoiSchema), Joi.string().uri()),
    code: Joi.alternatives().try(Joi.lazy(() => schema.MedicalCodeOrSubClassJoiSchema), Joi.string().uri()),
    relevantSpecialty: Joi.alternatives().try(Joi.lazy(() => schema.MedicalSpecialtyOrSubClassJoiSchema), Joi.string().uri()),
    study: Joi.alternatives().try(Joi.lazy(() => schema.MedicalStudyOrSubClassJoiSchema), Joi.string().uri()),
    medicineSystem: Joi.alternatives().try(Joi.lazy(() => schema.MedicineSystemOrSubClassJoiSchema), Joi.string().uri()),
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
 * schema:DrugCost - Validation schema (w/ JOI)
 *
 * This differs from DrugCostJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.DrugCostOrSubClassJoiSchema = Joi.alternatives().try([
    exports.DrugCostJoiSchema,
]);
/**
 * Runtime validator for schema:DrugCost.
 *
 * If some data has a structure which matches a schema:DrugCost, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeDrugCost = validateDrugCost(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeDrugCost instanceof OaValidationError) {
 *   // From this point on, `maybeDrugCost` will have type `OaValidationError`
 *   const error = maybeDrugCost;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeDrugCost` will have type `DrugCost`
 * const drugCost = maybeDrugCost;
 * ```
 */
function validateDrugCost(maybeDrugCost) {
    const { value, error } = exports.DrugCostJoiSchema.validate(maybeDrugCost);
    if (error) {
        return new oaValidationError_1.OaValidationError('DrugCost', maybeDrugCost, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateDrugCost = validateDrugCost;
