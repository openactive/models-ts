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
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    prescribingInfo: Joi.string().uri(),
    clinicalPharmacology: Joi.string(),
    administrationRoute: Joi.string(),
    clincalPharmacology: Joi.string(),
    availableStrength: Joi.alternatives().try(Joi.lazy(() => schema.DrugStrengthOrSubClassJoiSchema), Joi.string().uri()),
    activeIngredient: Joi.string(),
    pregnancyWarning: Joi.string(),
    breastfeedingWarning: Joi.string(),
    pregnancyCategory: Joi.alternatives().try(Joi.lazy(() => schema.DrugPregnancyCategoryOrSubClassJoiSchema), Joi.string().uri()),
    alcoholWarning: Joi.string(),
    drugUnit: Joi.string(),
    proprietaryName: Joi.string(),
    manufacturer: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    rxcui: Joi.string(),
    foodWarning: Joi.string(),
    doseSchedule: Joi.alternatives().try(Joi.lazy(() => schema.DoseScheduleOrSubClassJoiSchema), Joi.string().uri()),
    maximumIntake: Joi.alternatives().try(Joi.lazy(() => schema.MaximumDoseScheduleOrSubClassJoiSchema), Joi.string().uri()),
    isAvailableGenerically: Joi.boolean(),
    prescriptionStatus: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.DrugPrescriptionStatusOrSubClassJoiSchema), Joi.string().uri()),
    overdosage: Joi.string(),
    includedInHealthInsurancePlan: Joi.alternatives().try(Joi.lazy(() => schema.HealthInsurancePlanOrSubClassJoiSchema), Joi.string().uri()),
    nonProprietaryName: Joi.string(),
    dosageForm: Joi.string(),
    labelDetails: Joi.string().uri(),
    interactingDrug: Joi.alternatives().try(Joi.lazy(() => schema.DrugOrSubClassJoiSchema), Joi.string().uri()),
    relatedDrug: Joi.alternatives().try(Joi.lazy(() => schema.DrugOrSubClassJoiSchema), Joi.string().uri()),
    drugClass: Joi.alternatives().try(Joi.lazy(() => schema.DrugClassOrSubClassJoiSchema), Joi.string().uri()),
    mechanismOfAction: Joi.string(),
    legalStatus: Joi.alternatives().try(Joi.lazy(() => schema.MedicalEnumerationJoiSchema), Joi.lazy(() => schema.DrugLegalStatusOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    isProprietary: Joi.boolean(),
    warning: Joi.alternatives().try(Joi.string().uri(), Joi.string()),
    medicineSystem: Joi.alternatives().try(Joi.lazy(() => schema.MedicineSystemOrSubClassJoiSchema), Joi.string().uri()),
    guideline: Joi.alternatives().try(Joi.lazy(() => schema.MedicalGuidelineOrSubClassJoiSchema), Joi.string().uri()),
    study: Joi.alternatives().try(Joi.lazy(() => schema.MedicalStudyOrSubClassJoiSchema), Joi.string().uri()),
    relevantSpecialty: Joi.alternatives().try(Joi.lazy(() => schema.MedicalSpecialtyOrSubClassJoiSchema), Joi.string().uri()),
    recognizingAuthority: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    code: Joi.alternatives().try(Joi.lazy(() => schema.MedicalCodeOrSubClassJoiSchema), Joi.string().uri()),
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
 * const maybeDrug = validateDrug(req.body); // `req.body` will have type `any` or `unknown`
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
