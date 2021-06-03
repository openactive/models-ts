"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCDCPMDRecord = exports.CDCPMDRecordOrSubClassJoiSchema = exports.CDCPMDRecordJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:CDCPMDRecord - Validation schema (w/ JOI)
 */
exports.CDCPMDRecordJoiSchema = Joi.object({
    '@type': Joi.string().valid('CDCPMDRecord').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    cvdNumC19OverflowPats: Joi.number(),
    cvdNumTotBeds: Joi.number(),
    cvdNumBeds: Joi.number(),
    cvdNumC19OFMechVentPats: Joi.number(),
    cvdNumC19HospPats: Joi.number(),
    cvdNumVent: Joi.number(),
    cvdNumBedsOcc: Joi.number(),
    cvdNumC19HOPats: Joi.number(),
    cvdNumC19Died: Joi.number(),
    cvdCollectionDate: Joi.alternatives().try(Joi.string(), Joi.string().isoDate()),
    cvdNumVentUse: Joi.number(),
    cvdFacilityCounty: Joi.string(),
    cvdNumICUBedsOcc: Joi.number(),
    datePosted: Joi.string().isoDate(),
    cvdNumICUBeds: Joi.number(),
    cvdFacilityId: Joi.string(),
    cvdNumC19MechVentPats: Joi.number(),
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
 * schema:CDCPMDRecord - Validation schema (w/ JOI)
 *
 * This differs from CDCPMDRecordJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.CDCPMDRecordOrSubClassJoiSchema = Joi.alternatives().try([
    exports.CDCPMDRecordJoiSchema,
]);
/**
 * Runtime validator for schema:CDCPMDRecord.
 *
 * If some data has a structure which matches a schema:CDCPMDRecord, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeCDCPMDRecord = validateCDCPMDRecord(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeCDCPMDRecord instanceof OaValidationError) {
 *   // From this point on, `maybeCDCPMDRecord` will have type `OaValidationError`
 *   const error = maybeCDCPMDRecord;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeCDCPMDRecord` will have type `CDCPMDRecord`
 * const cDCPMDRecord = maybeCDCPMDRecord;
 * ```
 */
function validateCDCPMDRecord(maybeCDCPMDRecord) {
    const { value, error } = exports.CDCPMDRecordJoiSchema.validate(maybeCDCPMDRecord);
    if (error) {
        return new oaValidationError_1.OaValidationError('CDCPMDRecord', maybeCDCPMDRecord, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateCDCPMDRecord = validateCDCPMDRecord;
