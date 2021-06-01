// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';

/**
 * schema:MusicReleaseFormatType
 *
 * Format of this release (the type of recording media used, ie. compact disc, digital media, LP, etc.).
 */
export type MusicReleaseFormatType = 
  
  | 'https://schema.org/DVDFormat'
  | 'https://schema.org/DigitalAudioTapeFormat'
  | 'https://schema.org/VinylFormat'
  | 'https://schema.org/CDFormat'
  | 'https://schema.org/CassetteFormat'
  | 'https://schema.org/LaserDiscFormat'
  | 'https://schema.org/DigitalFormat'
  ;

/**
 * schema:MusicReleaseFormatType - Validation schema (w/ JOI)
 *
 * Format of this release (the type of recording media used, ie. compact disc, digital media, LP, etc.).
 */
export const MusicReleaseFormatTypeJoiSchema = Joi.string().valid(
  'https://schema.org/DVDFormat',
  'https://schema.org/DigitalAudioTapeFormat',
  'https://schema.org/VinylFormat',
  'https://schema.org/CDFormat',
  'https://schema.org/CassetteFormat',
  'https://schema.org/LaserDiscFormat',
  'https://schema.org/DigitalFormat',
);

/**
 * Runtime validator for schema:MusicReleaseFormatType.
 *
 * If some data has one of the values of the schema:MusicReleaseFormatType enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMusicReleaseFormatType = MusicReleaseFormatType.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMusicReleaseFormatType instanceof OaValidationError) {
 *   // From this point on, `maybeMusicReleaseFormatType` will have type `OaValidationError`
 *   const error = maybeMusicReleaseFormatType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMusicReleaseFormatType` will have type `MusicReleaseFormatType`
 * const musicReleaseFormatType = maybeMusicReleaseFormatType;
 * ```
 */
export function validateMusicReleaseFormatType(maybeMusicReleaseFormatType: unknown): MusicReleaseFormatType | OaValidationError {
  const { value, error } = MusicReleaseFormatTypeJoiSchema.validate(maybeMusicReleaseFormatType);
  if (error) {
    return new OaValidationError('MusicReleaseFormatType', maybeMusicReleaseFormatType, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as MusicReleaseFormatType;
}
