import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * beta:FacilitySettingType
 *
 * [NOTICE: This is a beta enumeration, and is highly likely to change in future versions of this library.]
 *
 * An enumeration of settings in which a facility can exist.
 */
export declare type FacilitySettingType = 'https://openactive.io/ns-beta#IndoorFacility' | 'https://openactive.io/ns-beta#OutdoorFacility';
/**
 * beta:FacilitySettingType - Validation schema (w/ JOI)
 *
 * [NOTICE: This is a beta enumeration, and is highly likely to change in future versions of this library.]
 *
 * An enumeration of settings in which a facility can exist.
 */
export declare const FacilitySettingTypeJoiSchema: Joi.StringSchema;
/**
 * Runtime validator for beta:FacilitySettingType.
 *
 * If some data has one of the values of the beta:FacilitySettingType enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeFacilitySettingType = validateFacilitySettingType(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeFacilitySettingType instanceof OaValidationError) {
 *   // From this point on, `maybeFacilitySettingType` will have type `OaValidationError`
 *   const error = maybeFacilitySettingType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeFacilitySettingType` will have type `FacilitySettingType`
 * const facilitySettingType = maybeFacilitySettingType;
 * ```
 */
export declare function validateFacilitySettingType(maybeFacilitySettingType: unknown): FacilitySettingType | OaValidationError;
