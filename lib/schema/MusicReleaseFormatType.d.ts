import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:MusicReleaseFormatType
 *
 * Format of this release (the type of recording media used, ie. compact disc, digital media, LP, etc.).
 */
export declare type MusicReleaseFormatType = 'https://schema.org/DVDFormat' | 'https://schema.org/DigitalAudioTapeFormat' | 'https://schema.org/VinylFormat' | 'https://schema.org/CDFormat' | 'https://schema.org/CassetteFormat' | 'https://schema.org/LaserDiscFormat' | 'https://schema.org/DigitalFormat';
/**
 * schema:MusicReleaseFormatType - Validation schema (w/ JOI)
 *
 * Format of this release (the type of recording media used, ie. compact disc, digital media, LP, etc.).
 */
export declare const MusicReleaseFormatTypeJoiSchema: Joi.StringSchema;
/**
 * Runtime validator for schema:MusicReleaseFormatType.
 *
 * If some data has one of the values of the schema:MusicReleaseFormatType enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMusicReleaseFormatType = validateMusicReleaseFormatType(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMusicReleaseFormatType instanceof OaValidationError) {
 *   // From this point on, `maybeMusicReleaseFormatType` will have type `OaValidationError`
 *   const error = maybeMusicReleaseFormatType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMusicReleaseFormatType` will have type `MusicReleaseFormatType`
 * const musicReleaseFormatType = maybeMusicReleaseFormatType;
 * ```
 */
export declare function validateMusicReleaseFormatType(maybeMusicReleaseFormatType: unknown): MusicReleaseFormatType | OaValidationError;
