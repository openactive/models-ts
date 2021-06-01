"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateGeoCoordinates = exports.GeoCoordinatesOrSubClassJoiSchema = exports.GeoCoordinatesJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * GeoCoordinates - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/GeoCoordinates, which means that any of this type's properties within schema.org may also be used.
 */
exports.GeoCoordinatesJoiSchema = Joi.object({
    '@type': Joi.string().valid('GeoCoordinates').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    latitude: Joi.number(),
    longitude: Joi.number(),
    address: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.PostalAddressOrSubClassJoiSchema), Joi.string().uri()),
    addressCountry: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.CountryOrSubClassJoiSchema), Joi.string().uri()),
    postalCode: Joi.string(),
    elevation: Joi.alternatives().try(Joi.number(), Joi.string()),
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
 * GeoCoordinates - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/GeoCoordinates, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from GeoCoordinatesJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.GeoCoordinatesOrSubClassJoiSchema = Joi.alternatives().try([
    exports.GeoCoordinatesJoiSchema,
]);
/**
 * Runtime validator for GeoCoordinates.
 *
 * If some data has a structure which matches a GeoCoordinates, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeGeoCoordinates = GeoCoordinates.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeGeoCoordinates instanceof OaValidationError) {
 *   // From this point on, `maybeGeoCoordinates` will have type `OaValidationError`
 *   const error = maybeGeoCoordinates;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeGeoCoordinates` will have type `GeoCoordinates`
 * const geoCoordinates = maybeGeoCoordinates;
 * ```
 */
function validateGeoCoordinates(maybeGeoCoordinates) {
    const { value, error } = exports.GeoCoordinatesJoiSchema.validate(maybeGeoCoordinates);
    if (error) {
        return new oaValidationError_1.OaValidationError('GeoCoordinates', maybeGeoCoordinates, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateGeoCoordinates = validateGeoCoordinates;
