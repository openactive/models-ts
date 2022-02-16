"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePostalAddress = exports.PostalAddressOrSubClassJoiSchema = exports.PostalAddressJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * PostalAddress - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/PostalAddress, which means that any of this type's properties within schema.org may also be used.
 */
exports.PostalAddressJoiSchema = Joi.object({
    '@type': Joi.string().valid('PostalAddress').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    addressCountry: Joi.string(),
    addressLocality: Joi.string(),
    addressRegion: Joi.string(),
    postalCode: Joi.string(),
    streetAddress: Joi.string(),
    postOfficeBoxNumber: Joi.string(),
    areaServed: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.GeoShapeOrSubClassJoiSchema), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.lazy(() => schema.AdministrativeAreaOrSubClassJoiSchema), Joi.string().uri()),
    contactType: Joi.string(),
    availableLanguage: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.LanguageOrSubClassJoiSchema), Joi.string().uri()),
    serviceArea: Joi.alternatives().try(Joi.lazy(() => schema.GeoShapeOrSubClassJoiSchema), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.lazy(() => schema.AdministrativeAreaOrSubClassJoiSchema), Joi.string().uri()),
    email: Joi.string(),
    hoursAvailable: Joi.alternatives().try(Joi.lazy(() => schema.OpeningHoursSpecificationOrSubClassJoiSchema), Joi.string().uri()),
    telephone: Joi.string(),
    contactOption: Joi.lazy(() => schema.ContactPointOptionJoiSchema),
    faxNumber: Joi.string(),
    productSupported: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.string().uri()),
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
 * PostalAddress - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/PostalAddress, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from PostalAddressJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.PostalAddressOrSubClassJoiSchema = Joi.alternatives().try([
    exports.PostalAddressJoiSchema,
]);
/**
 * Runtime validator for PostalAddress.
 *
 * If some data has a structure which matches a PostalAddress, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybePostalAddress = validatePostalAddress(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybePostalAddress instanceof OaValidationError) {
 *   // From this point on, `maybePostalAddress` will have type `OaValidationError`
 *   const error = maybePostalAddress;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybePostalAddress` will have type `PostalAddress`
 * const postalAddress = maybePostalAddress;
 * ```
 */
function validatePostalAddress(maybePostalAddress) {
    const { value, error } = exports.PostalAddressJoiSchema.validate(maybePostalAddress);
    if (error) {
        return new oaValidationError_1.OaValidationError('PostalAddress', maybePostalAddress, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validatePostalAddress = validatePostalAddress;
