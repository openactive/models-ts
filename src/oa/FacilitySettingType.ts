// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';

/**
 * beta:FacilitySettingType
 *
 * [NOTICE: This is a beta enumeration, and is highly likely to change in future versions of this library.]
 *
 * An enumeration of settings in which a facility can exist.
 */
export type FacilitySettingType = 
  
  | 'https://openactive.io/ns-beta#IndoorFacility'
  | 'https://openactive.io/ns-beta#OutdoorFacility'
  ;

/**
 * beta:FacilitySettingType - Validation schema (w/ JOI)
 *
 * [NOTICE: This is a beta enumeration, and is highly likely to change in future versions of this library.]
 *
 * An enumeration of settings in which a facility can exist.
 */
export const FacilitySettingTypeJoiSchema = Joi.string().valid(
  'https://openactive.io/ns-beta#IndoorFacility',
  'https://openactive.io/ns-beta#OutdoorFacility',
);

/**
 * Runtime validator for beta:FacilitySettingType.
 *
 * If some data has one of the values of the beta:FacilitySettingType enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeFacilitySettingType = FacilitySettingType.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeFacilitySettingType instanceof OaValidationError) {
 *   // From this point on, `maybeFacilitySettingType` will have type `OaValidationError`
 *   const error = maybeFacilitySettingType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeFacilitySettingType` will have type `FacilitySettingType`
 * const facilitySettingType = maybeFacilitySettingType;
 * ```
 */
export function validateFacilitySettingType(maybeFacilitySettingType: unknown): FacilitySettingType | OaValidationError {
  const { value, error } = FacilitySettingTypeJoiSchema.validate(maybeFacilitySettingType);
  if (error) {
    return new OaValidationError('FacilitySettingType', maybeFacilitySettingType, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as FacilitySettingType;
}
