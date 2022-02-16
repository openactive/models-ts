"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateGeoShape = exports.GeoShapeOrSubClassJoiSchema = exports.GeoShapeJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:GeoShape - Validation schema (w/ JOI)
 */
exports.GeoShapeJoiSchema = Joi.object({
    '@type': Joi.string().valid('GeoShape').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    polygon: Joi.string(),
    postalCode: Joi.string(),
    line: Joi.string(),
    circle: Joi.string(),
    elevation: Joi.alternatives().try(Joi.string(), Joi.number()),
    address: Joi.alternatives().try(Joi.lazy(() => schema.PostalAddressOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    box: Joi.string(),
    addressCountry: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.CountryOrSubClassJoiSchema), Joi.string().uri()),
    mainEntityOfPage: Joi.alternatives().try(Joi.string().uri(), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema)),
    additionalType: Joi.string().uri(),
    url: Joi.string().uri(),
    alternateName: Joi.string(),
    sameAs: Joi.string().uri(),
    potentialAction: Joi.alternatives().try(Joi.lazy(() => schema.ActionOrSubClassJoiSchema), Joi.string().uri()),
    subjectOf: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    disambiguatingDescription: Joi.string(),
    image: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
});
/**
 * schema:GeoShape - Validation schema (w/ JOI)
 *
 * This differs from GeoShapeJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.GeoShapeOrSubClassJoiSchema = Joi.alternatives().try([
    exports.GeoShapeJoiSchema,
    Joi.lazy(() => schema.GeoCircleOrSubClassJoiSchema),
]);
/**
 * Runtime validator for schema:GeoShape.
 *
 * If some data has a structure which matches a schema:GeoShape, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeGeoShape = validateGeoShape(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeGeoShape instanceof OaValidationError) {
 *   // From this point on, `maybeGeoShape` will have type `OaValidationError`
 *   const error = maybeGeoShape;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeGeoShape` will have type `GeoShape`
 * const geoShape = maybeGeoShape;
 * ```
 */
function validateGeoShape(maybeGeoShape) {
    const { value, error } = exports.GeoShapeJoiSchema.validate(maybeGeoShape);
    if (error) {
        return new oaValidationError_1.OaValidationError('GeoShape', maybeGeoShape, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateGeoShape = validateGeoShape;
