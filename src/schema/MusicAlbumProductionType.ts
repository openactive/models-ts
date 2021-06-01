// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';

/**
 * schema:MusicAlbumProductionType
 *
 * Classification of the album by it's type of content: soundtrack, live album, studio album, etc.
 */
export type MusicAlbumProductionType = 
  
  | 'https://schema.org/SpokenWordAlbum'
  | 'https://schema.org/SoundtrackAlbum'
  | 'https://schema.org/StudioAlbum'
  | 'https://schema.org/RemixAlbum'
  | 'https://schema.org/DemoAlbum'
  | 'https://schema.org/MixtapeAlbum'
  | 'https://schema.org/LiveAlbum'
  | 'https://schema.org/DJMixAlbum'
  | 'https://schema.org/CompilationAlbum'
  ;

/**
 * schema:MusicAlbumProductionType - Validation schema (w/ JOI)
 *
 * Classification of the album by it's type of content: soundtrack, live album, studio album, etc.
 */
export const MusicAlbumProductionTypeJoiSchema = Joi.string().valid(
  'https://schema.org/SpokenWordAlbum',
  'https://schema.org/SoundtrackAlbum',
  'https://schema.org/StudioAlbum',
  'https://schema.org/RemixAlbum',
  'https://schema.org/DemoAlbum',
  'https://schema.org/MixtapeAlbum',
  'https://schema.org/LiveAlbum',
  'https://schema.org/DJMixAlbum',
  'https://schema.org/CompilationAlbum',
);

/**
 * Runtime validator for schema:MusicAlbumProductionType.
 *
 * If some data has one of the values of the schema:MusicAlbumProductionType enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMusicAlbumProductionType = MusicAlbumProductionType.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMusicAlbumProductionType instanceof OaValidationError) {
 *   // From this point on, `maybeMusicAlbumProductionType` will have type `OaValidationError`
 *   const error = maybeMusicAlbumProductionType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMusicAlbumProductionType` will have type `MusicAlbumProductionType`
 * const musicAlbumProductionType = maybeMusicAlbumProductionType;
 * ```
 */
export function validateMusicAlbumProductionType(maybeMusicAlbumProductionType: unknown): MusicAlbumProductionType | OaValidationError {
  const { value, error } = MusicAlbumProductionTypeJoiSchema.validate(maybeMusicAlbumProductionType);
  if (error) {
    return new OaValidationError('MusicAlbumProductionType', maybeMusicAlbumProductionType, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as MusicAlbumProductionType;
}
