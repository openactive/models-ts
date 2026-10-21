import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:MusicAlbumReleaseType
 *
 * The kind of release which this album is: single, EP or album.
 */
export declare type MusicAlbumReleaseType = 'https://schema.org/BroadcastRelease' | 'https://schema.org/EPRelease' | 'https://schema.org/SingleRelease' | 'https://schema.org/AlbumRelease';
/**
 * schema:MusicAlbumReleaseType - Validation schema (w/ JOI)
 *
 * The kind of release which this album is: single, EP or album.
 */
export declare const MusicAlbumReleaseTypeJoiSchema: Joi.StringSchema;
/**
 * Runtime validator for schema:MusicAlbumReleaseType.
 *
 * If some data has one of the values of the schema:MusicAlbumReleaseType enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMusicAlbumReleaseType = validateMusicAlbumReleaseType(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMusicAlbumReleaseType instanceof OaValidationError) {
 *   // From this point on, `maybeMusicAlbumReleaseType` will have type `OaValidationError`
 *   const error = maybeMusicAlbumReleaseType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMusicAlbumReleaseType` will have type `MusicAlbumReleaseType`
 * const musicAlbumReleaseType = maybeMusicAlbumReleaseType;
 * ```
 */
export declare function validateMusicAlbumReleaseType(maybeMusicAlbumReleaseType: unknown): MusicAlbumReleaseType | OaValidationError;
