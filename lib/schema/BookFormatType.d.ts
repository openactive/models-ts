import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:BookFormatType
 *
 * The publication format of the book.
 */
export declare type BookFormatType = 'https://schema.org/EBook' | 'https://schema.org/AudiobookFormat' | 'https://schema.org/Hardcover' | 'https://schema.org/Paperback' | 'https://schema.org/GraphicNovel';
/**
 * schema:BookFormatType - Validation schema (w/ JOI)
 *
 * The publication format of the book.
 */
export declare const BookFormatTypeJoiSchema: Joi.StringSchema;
/**
 * Runtime validator for schema:BookFormatType.
 *
 * If some data has one of the values of the schema:BookFormatType enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeBookFormatType = BookFormatType.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeBookFormatType instanceof OaValidationError) {
 *   // From this point on, `maybeBookFormatType` will have type `OaValidationError`
 *   const error = maybeBookFormatType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeBookFormatType` will have type `BookFormatType`
 * const bookFormatType = maybeBookFormatType;
 * ```
 */
export declare function validateBookFormatType(maybeBookFormatType: unknown): BookFormatType | OaValidationError;
