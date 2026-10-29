import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:DigitalPlatformEnumeration
 *
 * Enumerates some common technology platforms, for use with properties such as [[actionPlatform]]. It is not supposed to be comprehensive - when a suitable code is not enumerated here, textual or URL values can be used instead. These codes are at a fairly high level and do not deal with versioning and other nuance. Additional codes can be suggested [in github](https://github.com/schemaorg/schemaorg/issues/3057).
 */
export declare type DigitalPlatformEnumeration = 'https://schema.org/AndroidPlatform' | 'https://schema.org/DesktopWebPlatform' | 'https://schema.org/GenericWebPlatform' | 'https://schema.org/IOSPlatform' | 'https://schema.org/MobileWebPlatform';
/**
 * schema:DigitalPlatformEnumeration - Validation schema (w/ JOI)
 *
 * Enumerates some common technology platforms, for use with properties such as [[actionPlatform]]. It is not supposed to be comprehensive - when a suitable code is not enumerated here, textual or URL values can be used instead. These codes are at a fairly high level and do not deal with versioning and other nuance. Additional codes can be suggested [in github](https://github.com/schemaorg/schemaorg/issues/3057).
 */
export declare const DigitalPlatformEnumerationJoiSchema: Joi.StringSchema;
/**
 * Runtime validator for schema:DigitalPlatformEnumeration.
 *
 * If some data has one of the values of the schema:DigitalPlatformEnumeration enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeDigitalPlatformEnumeration = validateDigitalPlatformEnumeration(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeDigitalPlatformEnumeration instanceof OaValidationError) {
 *   // From this point on, `maybeDigitalPlatformEnumeration` will have type `OaValidationError`
 *   const error = maybeDigitalPlatformEnumeration;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeDigitalPlatformEnumeration` will have type `DigitalPlatformEnumeration`
 * const digitalPlatformEnumeration = maybeDigitalPlatformEnumeration;
 * ```
 */
export declare function validateDigitalPlatformEnumeration(maybeDigitalPlatformEnumeration: unknown): DigitalPlatformEnumeration | OaValidationError;
