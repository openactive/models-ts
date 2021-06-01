"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDrug = exports.DrugOrSubClassJoiSchema = exports.DrugJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:Drug - Validation schema (w/ JOI)
 */
exports.DrugJoiSchema = Joi.object({
    '@type': Joi.string().valid('Drug').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    mechanismOfAction: Joi.string(),
    pregnancyCategory: Joi.alternatives().try(Joi.lazy(() => schema.DrugPregnancyCategoryOrSubClassJoiSchema), Joi.string().uri()),
    isProprietary: Joi.boolean(),
    includedInHealthInsurancePlan: Joi.alternatives().try(Joi.lazy(() => schema.HealthInsurancePlanOrSubClassJoiSchema), Joi.string().uri()),
    maximumIntake: Joi.alternatives().try(Joi.lazy(() => schema.MaximumDoseScheduleOrSubClassJoiSchema), Joi.string().uri()),
    drugClass: Joi.alternatives().try(Joi.lazy(() => schema.DrugClassOrSubClassJoiSchema), Joi.string().uri()),
    clinicalPharmacology: Joi.string(),
    rxcui: Joi.string(),
    legalStatus: Joi.alternatives().try(Joi.lazy(() => schema.MedicalEnumerationJoiSchema), Joi.string(), Joi.lazy(() => schema.DrugLegalStatusOrSubClassJoiSchema), Joi.string().uri()),
    breastfeedingWarning: Joi.string(),
    nonProprietaryName: Joi.string(),
    labelDetails: Joi.string().uri(),
    overdosage: Joi.string(),
    interactingDrug: Joi.alternatives().try(Joi.lazy(() => schema.DrugOrSubClassJoiSchema), Joi.string().uri()),
    clincalPharmacology: Joi.string(),
    relatedDrug: Joi.alternatives().try(Joi.lazy(() => schema.DrugOrSubClassJoiSchema), Joi.string().uri()),
    foodWarning: Joi.string(),
    isAvailableGenerically: Joi.boolean(),
    proprietaryName: Joi.string(),
    activeIngredient: Joi.string(),
    administrationRoute: Joi.string(),
    warning: Joi.alternatives().try(Joi.string().uri(), Joi.string()),
    alcoholWarning: Joi.string(),
    manufacturer: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    dosageForm: Joi.string(),
    pregnancyWarning: Joi.string(),
    drugUnit: Joi.string(),
    availableStrength: Joi.alternatives().try(Joi.lazy(() => schema.DrugStrengthOrSubClassJoiSchema), Joi.string().uri()),
    prescribingInfo: Joi.string().uri(),
    prescriptionStatus: Joi.alternatives().try(Joi.lazy(() => schema.DrugPrescriptionStatusOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    doseSchedule: Joi.alternatives().try(Joi.lazy(() => schema.DoseScheduleOrSubClassJoiSchema), Joi.string().uri()),
    guideline: Joi.alternatives().try(Joi.lazy(() => schema.MedicalGuidelineOrSubClassJoiSchema), Joi.string().uri()),
    recognizingAuthority: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
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
 * schema:Drug - Validation schema (w/ JOI)
 *
 * This differs from DrugJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.DrugOrSubClassJoiSchema = Joi.alternatives().try([
    exports.DrugJoiSchema,
]);
/**
 * Runtime validator for schema:Drug.
 *
 * If some data has a structure which matches a schema:Drug, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeDrug = Drug.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeDrug instanceof OaValidationError) {
 *   // From this point on, `maybeDrug` will have type `OaValidationError`
 *   const error = maybeDrug;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeDrug` will have type `Drug`
 * const drug = maybeDrug;
 * ```
 */
function validateDrug(maybeDrug) {
    const { value, error } = exports.DrugJoiSchema.validate(maybeDrug);
    if (error) {
        return new oaValidationError_1.OaValidationError('Drug', maybeDrug, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateDrug = validateDrug;
