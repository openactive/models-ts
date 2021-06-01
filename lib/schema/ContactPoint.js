"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateContactPoint = exports.ContactPointOrSubClassJoiSchema = exports.ContactPointJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:ContactPoint - Validation schema (w/ JOI)
 */
exports.ContactPointJoiSchema = Joi.object({
    '@type': Joi.string().valid('ContactPoint').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    availableLanguage: Joi.alternatives().try(Joi.lazy(() => schema.LanguageOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    areaServed: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.lazy(() => schema.AdministrativeAreaOrSubClassJoiSchema), Joi.lazy(() => schema.GeoShapeOrSubClassJoiSchema), Joi.string().uri()),
    productSupported: Joi.alternatives().try(Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    email: Joi.string(),
    telephone: Joi.string(),
    contactType: Joi.string(),
    hoursAvailable: Joi.alternatives().try(Joi.lazy(() => schema.OpeningHoursSpecificationOrSubClassJoiSchema), Joi.string().uri()),
    serviceArea: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.lazy(() => schema.AdministrativeAreaOrSubClassJoiSchema), Joi.lazy(() => schema.GeoShapeOrSubClassJoiSchema), Joi.string().uri()),
    faxNumber: Joi.string(),
    contactOption: Joi.lazy(() => schema.ContactPointOptionJoiSchema),
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
 * schema:ContactPoint - Validation schema (w/ JOI)
 *
 * This differs from ContactPointJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.ContactPointOrSubClassJoiSchema = Joi.alternatives().try([
    exports.ContactPointJoiSchema,
    Joi.lazy(() => schema.PostalAddressOrSubClassJoiSchema),
]);
/**
 * Runtime validator for schema:ContactPoint.
 *
 * If some data has a structure which matches a schema:ContactPoint, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeContactPoint = ContactPoint.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeContactPoint instanceof OaValidationError) {
 *   // From this point on, `maybeContactPoint` will have type `OaValidationError`
 *   const error = maybeContactPoint;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeContactPoint` will have type `ContactPoint`
 * const contactPoint = maybeContactPoint;
 * ```
 */
function validateContactPoint(maybeContactPoint) {
    const { value, error } = exports.ContactPointJoiSchema.validate(maybeContactPoint);
    if (error) {
        return new oaValidationError_1.OaValidationError('ContactPoint', maybeContactPoint, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateContactPoint = validateContactPoint;
