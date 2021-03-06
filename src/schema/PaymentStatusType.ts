// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * schema:PaymentStatusType
 */
export type PaymentStatusType = {
  '@type': 'PaymentStatusType';
  '@context'?: string | string[];
  /**
   * A unique url based identifier for the record
   */
  '@id'?: string;
};

/**
 * schema:PaymentStatusType
 *
 * This differs from PaymentStatusType because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type PaymentStatusTypeOrSubClass =
  | PaymentStatusType
  ;

/**
 * schema:PaymentStatusType - Validation schema (w/ JOI)
 */
export const PaymentStatusTypeJoiSchema = Joi.object({
  '@type': Joi.string().valid('PaymentStatusType').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  '@id': Joi.string().uri(),
});

/**
 * schema:PaymentStatusType - Validation schema (w/ JOI)
 *
 * This differs from PaymentStatusTypeJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const PaymentStatusTypeOrSubClassJoiSchema = Joi.alternatives().try([
  PaymentStatusTypeJoiSchema,
]);

/**
 * Runtime validator for schema:PaymentStatusType.
 *
 * If some data has a structure which matches a schema:PaymentStatusType, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybePaymentStatusType = validatePaymentStatusType(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybePaymentStatusType instanceof OaValidationError) {
 *   // From this point on, `maybePaymentStatusType` will have type `OaValidationError`
 *   const error = maybePaymentStatusType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybePaymentStatusType` will have type `PaymentStatusType`
 * const paymentStatusType = maybePaymentStatusType;
 * ```
 */
export function validatePaymentStatusType(maybePaymentStatusType: unknown): PaymentStatusType | OaValidationError {
  const { value, error } = PaymentStatusTypeJoiSchema.validate(maybePaymentStatusType);
  if (error) {
    return new OaValidationError('PaymentStatusType', maybePaymentStatusType, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as PaymentStatusType;
}
