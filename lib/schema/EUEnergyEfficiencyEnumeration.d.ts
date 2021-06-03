import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:EUEnergyEfficiencyEnumeration
 */
export declare type EUEnergyEfficiencyEnumeration = {
    '@type': 'EUEnergyEfficiencyEnumeration';
    '@context'?: string | string[];
    /**
     * A unique url based identifier for the record
     */
    '@id'?: string;
};
/**
 * schema:EUEnergyEfficiencyEnumeration
 *
 * This differs from EUEnergyEfficiencyEnumeration because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type EUEnergyEfficiencyEnumerationOrSubClass = EUEnergyEfficiencyEnumeration;
/**
 * schema:EUEnergyEfficiencyEnumeration - Validation schema (w/ JOI)
 */
export declare const EUEnergyEfficiencyEnumerationJoiSchema: Joi.ObjectSchema;
/**
 * schema:EUEnergyEfficiencyEnumeration - Validation schema (w/ JOI)
 *
 * This differs from EUEnergyEfficiencyEnumerationJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const EUEnergyEfficiencyEnumerationOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:EUEnergyEfficiencyEnumeration.
 *
 * If some data has a structure which matches a schema:EUEnergyEfficiencyEnumeration, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeEUEnergyEfficiencyEnumeration = validateEUEnergyEfficiencyEnumeration(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeEUEnergyEfficiencyEnumeration instanceof OaValidationError) {
 *   // From this point on, `maybeEUEnergyEfficiencyEnumeration` will have type `OaValidationError`
 *   const error = maybeEUEnergyEfficiencyEnumeration;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeEUEnergyEfficiencyEnumeration` will have type `EUEnergyEfficiencyEnumeration`
 * const eUEnergyEfficiencyEnumeration = maybeEUEnergyEfficiencyEnumeration;
 * ```
 */
export declare function validateEUEnergyEfficiencyEnumeration(maybeEUEnergyEfficiencyEnumeration: unknown): EUEnergyEfficiencyEnumeration | OaValidationError;
