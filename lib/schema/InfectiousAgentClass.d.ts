import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:InfectiousAgentClass
 */
export declare type InfectiousAgentClass = {
    '@type': 'InfectiousAgentClass';
    '@context'?: string | string[];
    /**
     * A unique url based identifier for the record
     */
    '@id'?: string;
};
/**
 * schema:InfectiousAgentClass
 *
 * This differs from InfectiousAgentClass because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type InfectiousAgentClassOrSubClass = InfectiousAgentClass;
/**
 * schema:InfectiousAgentClass - Validation schema (w/ JOI)
 */
export declare const InfectiousAgentClassJoiSchema: Joi.ObjectSchema;
/**
 * schema:InfectiousAgentClass - Validation schema (w/ JOI)
 *
 * This differs from InfectiousAgentClassJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const InfectiousAgentClassOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:InfectiousAgentClass.
 *
 * If some data has a structure which matches a schema:InfectiousAgentClass, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeInfectiousAgentClass = InfectiousAgentClass.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeInfectiousAgentClass instanceof OaValidationError) {
 *   // From this point on, `maybeInfectiousAgentClass` will have type `OaValidationError`
 *   const error = maybeInfectiousAgentClass;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeInfectiousAgentClass` will have type `InfectiousAgentClass`
 * const infectiousAgentClass = maybeInfectiousAgentClass;
 * ```
 */
export declare function validateInfectiousAgentClass(maybeInfectiousAgentClass: unknown): InfectiousAgentClass | OaValidationError;
