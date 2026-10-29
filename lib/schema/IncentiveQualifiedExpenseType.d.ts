import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:IncentiveQualifiedExpenseType
 *
 * The types of expenses that are covered by the incentive. For example some incentives are only for the goods (tangible items) but the services (labor) are excluded.
 */
export declare type IncentiveQualifiedExpenseType = 'https://schema.org/IncentiveQualifiedExpenseTypeGoodsOnly' | 'https://schema.org/IncentiveQualifiedExpenseTypeGoodsOrServices' | 'https://schema.org/IncentiveQualifiedExpenseTypeServicesOnly' | 'https://schema.org/IncentiveQualifiedExpenseTypeUtilityBill';
/**
 * schema:IncentiveQualifiedExpenseType - Validation schema (w/ JOI)
 *
 * The types of expenses that are covered by the incentive. For example some incentives are only for the goods (tangible items) but the services (labor) are excluded.
 */
export declare const IncentiveQualifiedExpenseTypeJoiSchema: Joi.StringSchema;
/**
 * Runtime validator for schema:IncentiveQualifiedExpenseType.
 *
 * If some data has one of the values of the schema:IncentiveQualifiedExpenseType enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeIncentiveQualifiedExpenseType = validateIncentiveQualifiedExpenseType(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeIncentiveQualifiedExpenseType instanceof OaValidationError) {
 *   // From this point on, `maybeIncentiveQualifiedExpenseType` will have type `OaValidationError`
 *   const error = maybeIncentiveQualifiedExpenseType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeIncentiveQualifiedExpenseType` will have type `IncentiveQualifiedExpenseType`
 * const incentiveQualifiedExpenseType = maybeIncentiveQualifiedExpenseType;
 * ```
 */
export declare function validateIncentiveQualifiedExpenseType(maybeIncentiveQualifiedExpenseType: unknown): IncentiveQualifiedExpenseType | OaValidationError;
