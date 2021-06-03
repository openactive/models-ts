import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:DrugPregnancyCategory
 */
export declare type DrugPregnancyCategory = {
    '@type': 'DrugPregnancyCategory';
    '@context'?: string | string[];
    /**
     * A unique url based identifier for the record
     */
    '@id'?: string;
};
/**
 * schema:DrugPregnancyCategory
 *
 * This differs from DrugPregnancyCategory because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type DrugPregnancyCategoryOrSubClass = DrugPregnancyCategory;
/**
 * schema:DrugPregnancyCategory - Validation schema (w/ JOI)
 */
export declare const DrugPregnancyCategoryJoiSchema: Joi.ObjectSchema;
/**
 * schema:DrugPregnancyCategory - Validation schema (w/ JOI)
 *
 * This differs from DrugPregnancyCategoryJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const DrugPregnancyCategoryOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:DrugPregnancyCategory.
 *
 * If some data has a structure which matches a schema:DrugPregnancyCategory, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeDrugPregnancyCategory = validateDrugPregnancyCategory(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeDrugPregnancyCategory instanceof OaValidationError) {
 *   // From this point on, `maybeDrugPregnancyCategory` will have type `OaValidationError`
 *   const error = maybeDrugPregnancyCategory;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeDrugPregnancyCategory` will have type `DrugPregnancyCategory`
 * const drugPregnancyCategory = maybeDrugPregnancyCategory;
 * ```
 */
export declare function validateDrugPregnancyCategory(maybeDrugPregnancyCategory: unknown): DrugPregnancyCategory | OaValidationError;
