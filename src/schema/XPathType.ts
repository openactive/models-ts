// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * schema:XPathType
 */
export type XPathType = {
  '@type': 'XPathType';
  '@context'?: string | string[];
  /**
   * A unique url based identifier for the record
   */
  '@id'?: string;
};

/**
 * schema:XPathType
 *
 * This differs from XPathType because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type XPathTypeOrSubClass =
  | XPathType
  ;

/**
 * schema:XPathType - Validation schema (w/ JOI)
 */
export const XPathTypeJoiSchema = Joi.object({
  '@type': Joi.string().valid('XPathType').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  '@id': Joi.string().uri(),
});

/**
 * schema:XPathType - Validation schema (w/ JOI)
 *
 * This differs from XPathTypeJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const XPathTypeOrSubClassJoiSchema = Joi.alternatives().try([
  XPathTypeJoiSchema,
]);

/**
 * Runtime validator for schema:XPathType.
 *
 * If some data has a structure which matches a schema:XPathType, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeXPathType = XPathType.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeXPathType instanceof OaValidationError) {
 *   // From this point on, `maybeXPathType` will have type `OaValidationError`
 *   const error = maybeXPathType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeXPathType` will have type `XPathType`
 * const xPathType = maybeXPathType;
 * ```
 */
export function validateXPathType(maybeXPathType: unknown): XPathType | OaValidationError {
  const { value, error } = XPathTypeJoiSchema.validate(maybeXPathType);
  if (error) {
    return new OaValidationError('XPathType', maybeXPathType, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as XPathType;
}
