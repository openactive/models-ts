"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateMusicReleaseFormatType = exports.MusicReleaseFormatTypeJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * schema:MusicReleaseFormatType - Validation schema (w/ JOI)
 *
 * Format of this release (the type of recording media used, ie. compact disc, digital media, LP, etc.).
 */
exports.MusicReleaseFormatTypeJoiSchema = Joi.string().valid('https://schema.org/VinylFormat', 'https://schema.org/DigitalAudioTapeFormat', 'https://schema.org/DVDFormat', 'https://schema.org/LaserDiscFormat', 'https://schema.org/DigitalFormat', 'https://schema.org/CDFormat', 'https://schema.org/CassetteFormat');
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
function validateMusicReleaseFormatType(maybeMusicReleaseFormatType) {
    const { value, error } = exports.MusicReleaseFormatTypeJoiSchema.validate(maybeMusicReleaseFormatType);
    if (error) {
        return new oaValidationError_1.OaValidationError('MusicReleaseFormatType', maybeMusicReleaseFormatType, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateMusicReleaseFormatType = validateMusicReleaseFormatType;
