import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:EnergyStarEnergyEfficiencyEnumeration
 */
export declare type EnergyStarEnergyEfficiencyEnumeration = {
    '@type': 'EnergyStarEnergyEfficiencyEnumeration';
    '@context'?: string | string[];
    /**
     * A unique url based identifier for the record
     */
    '@id'?: string;
};
/**
 * schema:EnergyStarEnergyEfficiencyEnumeration
 *
 * This differs from EnergyStarEnergyEfficiencyEnumeration because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type EnergyStarEnergyEfficiencyEnumerationOrSubClass = EnergyStarEnergyEfficiencyEnumeration;
/**
 * schema:EnergyStarEnergyEfficiencyEnumeration - Validation schema (w/ JOI)
 */
export declare const EnergyStarEnergyEfficiencyEnumerationJoiSchema: Joi.ObjectSchema;
/**
 * schema:EnergyStarEnergyEfficiencyEnumeration - Validation schema (w/ JOI)
 *
 * This differs from EnergyStarEnergyEfficiencyEnumerationJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const EnergyStarEnergyEfficiencyEnumerationOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:EnergyStarEnergyEfficiencyEnumeration.
 *
 * If some data has a structure which matches a schema:EnergyStarEnergyEfficiencyEnumeration, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeEnergyStarEnergyEfficiencyEnumeration = EnergyStarEnergyEfficiencyEnumeration.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeEnergyStarEnergyEfficiencyEnumeration instanceof OaValidationError) {
 *   // From this point on, `maybeEnergyStarEnergyEfficiencyEnumeration` will have type `OaValidationError`
 *   const error = maybeEnergyStarEnergyEfficiencyEnumeration;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeEnergyStarEnergyEfficiencyEnumeration` will have type `EnergyStarEnergyEfficiencyEnumeration`
 * const energyStarEnergyEfficiencyEnumeration = maybeEnergyStarEnergyEfficiencyEnumeration;
 * ```
 */
export declare function validateEnergyStarEnergyEfficiencyEnumeration(maybeEnergyStarEnergyEfficiencyEnumeration: unknown): EnergyStarEnergyEfficiencyEnumeration | OaValidationError;
