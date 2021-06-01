"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateFloorPlan = exports.FloorPlanOrSubClassJoiSchema = exports.FloorPlanJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:FloorPlan - Validation schema (w/ JOI)
 */
exports.FloorPlanJoiSchema = Joi.object({
    '@type': Joi.string().valid('FloorPlan').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    numberOfBedrooms: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.number(), Joi.string().uri()),
    numberOfPartialBathrooms: Joi.number(),
    numberOfAvailableAccommodationUnits: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    isPlanForApartment: Joi.alternatives().try(Joi.lazy(() => schema.AccommodationOrSubClassJoiSchema), Joi.string().uri()),
    layoutImage: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
    floorSize: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    numberOfRooms: Joi.alternatives().try(Joi.number(), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    amenityFeature: Joi.alternatives().try(Joi.lazy(() => schema.LocationFeatureSpecificationOrSubClassJoiSchema), Joi.string().uri()),
    numberOfBathroomsTotal: Joi.number().integer(),
    petsAllowed: Joi.alternatives().try(Joi.string(), Joi.boolean()),
    numberOfAccommodationUnits: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    numberOfFullBathrooms: Joi.number(),
    sameAs: Joi.string().uri(),
    subjectOf: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    potentialAction: Joi.alternatives().try(Joi.lazy(() => schema.ActionOrSubClassJoiSchema), Joi.string().uri()),
    mainEntityOfPage: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    additionalType: Joi.string().uri(),
    alternateName: Joi.string(),
    url: Joi.string().uri(),
    image: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
    disambiguatingDescription: Joi.string(),
});
/**
 * schema:FloorPlan - Validation schema (w/ JOI)
 *
 * This differs from FloorPlanJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.FloorPlanOrSubClassJoiSchema = Joi.alternatives().try([
    exports.FloorPlanJoiSchema,
]);
/**
 * Runtime validator for schema:FloorPlan.
 *
 * If some data has a structure which matches a schema:FloorPlan, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeFloorPlan = FloorPlan.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeFloorPlan instanceof OaValidationError) {
 *   // From this point on, `maybeFloorPlan` will have type `OaValidationError`
 *   const error = maybeFloorPlan;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeFloorPlan` will have type `FloorPlan`
 * const floorPlan = maybeFloorPlan;
 * ```
 */
function validateFloorPlan(maybeFloorPlan) {
    const { value, error } = exports.FloorPlanJoiSchema.validate(maybeFloorPlan);
    if (error) {
        return new oaValidationError_1.OaValidationError('FloorPlan', maybeFloorPlan, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateFloorPlan = validateFloorPlan;
