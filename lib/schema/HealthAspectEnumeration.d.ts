import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:HealthAspectEnumeration
 *
 * HealthAspectEnumeration enumerates several aspects of health content online, each of which might be described using [[hasHealthAspect]] and [[HealthTopicContent]].
 */
export declare type HealthAspectEnumeration = 'https://schema.org/BenefitsHealthAspect' | 'https://schema.org/StagesHealthAspect' | 'https://schema.org/SelfCareHealthAspect' | 'https://schema.org/SideEffectsHealthAspect' | 'https://schema.org/EffectivenessHealthAspect' | 'https://schema.org/MayTreatHealthAspect' | 'https://schema.org/ScreeningHealthAspect' | 'https://schema.org/SafetyHealthAspect' | 'https://schema.org/ContagiousnessHealthAspect' | 'https://schema.org/CausesHealthAspect' | 'https://schema.org/OverviewHealthAspect' | 'https://schema.org/SymptomsHealthAspect' | 'https://schema.org/SeeDoctorHealthAspect' | 'https://schema.org/GettingAccessHealthAspect' | 'https://schema.org/PrognosisHealthAspect' | 'https://schema.org/LivingWithHealthAspect' | 'https://schema.org/RisksOrComplicationsHealthAspect' | 'https://schema.org/PatientExperienceHealthAspect' | 'https://schema.org/PreventionHealthAspect' | 'https://schema.org/TreatmentsHealthAspect' | 'https://schema.org/IngredientsHealthAspect' | 'https://schema.org/HowItWorksHealthAspect' | 'https://schema.org/AllergiesHealthAspect' | 'https://schema.org/UsageOrScheduleHealthAspect' | 'https://schema.org/MisconceptionsHealthAspect' | 'https://schema.org/PregnancyHealthAspect' | 'https://schema.org/HowOrWhereHealthAspect' | 'https://schema.org/RelatedTopicsHealthAspect' | 'https://schema.org/TypesHealthAspect';
/**
 * schema:HealthAspectEnumeration - Validation schema (w/ JOI)
 *
 * HealthAspectEnumeration enumerates several aspects of health content online, each of which might be described using [[hasHealthAspect]] and [[HealthTopicContent]].
 */
export declare const HealthAspectEnumerationJoiSchema: Joi.StringSchema;
/**
 * Runtime validator for schema:HealthAspectEnumeration.
 *
 * If some data has one of the values of the schema:HealthAspectEnumeration enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeHealthAspectEnumeration = validateHealthAspectEnumeration(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeHealthAspectEnumeration instanceof OaValidationError) {
 *   // From this point on, `maybeHealthAspectEnumeration` will have type `OaValidationError`
 *   const error = maybeHealthAspectEnumeration;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeHealthAspectEnumeration` will have type `HealthAspectEnumeration`
 * const healthAspectEnumeration = maybeHealthAspectEnumeration;
 * ```
 */
export declare function validateHealthAspectEnumeration(maybeHealthAspectEnumeration: unknown): HealthAspectEnumeration | OaValidationError;
