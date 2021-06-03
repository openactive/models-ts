// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';

/**
 * schema:BookFormatType
 *
 * The publication format of the book.
 */
export type BookFormatType = 
  
  | 'https://schema.org/EBook'
  | 'https://schema.org/AudiobookFormat'
  | 'https://schema.org/Hardcover'
  | 'https://schema.org/Paperback'
  | 'https://schema.org/GraphicNovel'
  ;

/**
 * schema:BookFormatType - Validation schema (w/ JOI)
 *
 * The publication format of the book.
 */
export const BookFormatTypeJoiSchema = Joi.string().valid(
  'https://schema.org/EBook',
  'https://schema.org/AudiobookFormat',
  'https://schema.org/Hardcover',
  'https://schema.org/Paperback',
  'https://schema.org/GraphicNovel',
);

/**
 * Runtime validator for schema:BookFormatType.
 *
 * If some data has one of the values of the schema:BookFormatType enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeBookFormatType = validateBookFormatType(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeBookFormatType instanceof OaValidationError) {
 *   // From this point on, `maybeBookFormatType` will have type `OaValidationError`
 *   const error = maybeBookFormatType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeBookFormatType` will have type `BookFormatType`
 * const bookFormatType = maybeBookFormatType;
 * ```
 */
export function validateBookFormatType(maybeBookFormatType: unknown): BookFormatType | OaValidationError {
  const { value, error } = BookFormatTypeJoiSchema.validate(maybeBookFormatType);
  if (error) {
    return new OaValidationError('BookFormatType', maybeBookFormatType, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as BookFormatType;
}
