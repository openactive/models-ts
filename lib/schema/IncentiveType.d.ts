import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:IncentiveType
 *
 * Enumerates common financial incentives for products, including tax credits, tax deductions, rebates and subsidies, etc.
 */
export declare type IncentiveType = 'https://schema.org/IncentiveTypeLoan' | 'https://schema.org/IncentiveTypeRebateOrSubsidy' | 'https://schema.org/IncentiveTypeTaxCredit' | 'https://schema.org/IncentiveTypeTaxDeduction' | 'https://schema.org/IncentiveTypeTaxWaiver';
/**
 * schema:IncentiveType - Validation schema (w/ JOI)
 *
 * Enumerates common financial incentives for products, including tax credits, tax deductions, rebates and subsidies, etc.
 */
export declare const IncentiveTypeJoiSchema: Joi.StringSchema;
/**
 * Runtime validator for schema:IncentiveType.
 *
 * If some data has one of the values of the schema:IncentiveType enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeIncentiveType = validateIncentiveType(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeIncentiveType instanceof OaValidationError) {
 *   // From this point on, `maybeIncentiveType` will have type `OaValidationError`
 *   const error = maybeIncentiveType;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeIncentiveType` will have type `IncentiveType`
 * const incentiveType = maybeIncentiveType;
 * ```
 */
export declare function validateIncentiveType(maybeIncentiveType: unknown): IncentiveType | OaValidationError;
