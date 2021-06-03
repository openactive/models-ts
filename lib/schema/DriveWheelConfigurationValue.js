"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDriveWheelConfigurationValue = exports.DriveWheelConfigurationValueOrSubClassJoiSchema = exports.DriveWheelConfigurationValueJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * schema:DriveWheelConfigurationValue - Validation schema (w/ JOI)
 */
exports.DriveWheelConfigurationValueJoiSchema = Joi.object({
    '@type': Joi.string().valid('DriveWheelConfigurationValue').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    '@id': Joi.string().uri(),
});
/**
 * schema:DriveWheelConfigurationValue - Validation schema (w/ JOI)
 *
 * This differs from DriveWheelConfigurationValueJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.DriveWheelConfigurationValueOrSubClassJoiSchema = Joi.alternatives().try([
    exports.DriveWheelConfigurationValueJoiSchema,
]);
/**
 * Runtime validator for schema:DriveWheelConfigurationValue.
 *
 * If some data has a structure which matches a schema:DriveWheelConfigurationValue, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeDriveWheelConfigurationValue = validateDriveWheelConfigurationValue(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeDriveWheelConfigurationValue instanceof OaValidationError) {
 *   // From this point on, `maybeDriveWheelConfigurationValue` will have type `OaValidationError`
 *   const error = maybeDriveWheelConfigurationValue;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeDriveWheelConfigurationValue` will have type `DriveWheelConfigurationValue`
 * const driveWheelConfigurationValue = maybeDriveWheelConfigurationValue;
 * ```
 */
function validateDriveWheelConfigurationValue(maybeDriveWheelConfigurationValue) {
    const { value, error } = exports.DriveWheelConfigurationValueJoiSchema.validate(maybeDriveWheelConfigurationValue);
    if (error) {
        return new oaValidationError_1.OaValidationError('DriveWheelConfigurationValue', maybeDriveWheelConfigurationValue, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateDriveWheelConfigurationValue = validateDriveWheelConfigurationValue;
