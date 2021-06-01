import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:PaymentStatusType
 */
export declare type PaymentStatusType = {
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
export declare type PaymentStatusTypeOrSubClass = PaymentStatusType;
/**
 * schema:PaymentStatusType - Validation schema (w/ JOI)
 */
export declare const PaymentStatusTypeJoiSchema: Joi.ObjectSchema;
/**
 * schema:PaymentStatusType - Validation schema (w/ JOI)
 *
 * This differs from PaymentStatusTypeJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const PaymentStatusTypeOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:PaymentStatusType.
 *
 * If some data has a structure which matches a schema:PaymentStatusType, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybePaymentStatusType = PaymentStatusType.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybePaymentStatusType instanceof OaValidationError) {
 *   // From this point on, `maybePaymentStatusType` will have type `OaValidationError`
 *   const error = maybePaymentStatusType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybePaymentStatusType` will have type `PaymentStatusType`
 * const paymentStatusType = maybePaymentStatusType;
 * ```
 */
export declare function validatePaymentStatusType(maybePaymentStatusType: unknown): PaymentStatusType | OaValidationError;
