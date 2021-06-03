"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateNewsMediaOrganization = exports.NewsMediaOrganizationOrSubClassJoiSchema = exports.NewsMediaOrganizationJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:NewsMediaOrganization - Validation schema (w/ JOI)
 */
exports.NewsMediaOrganizationJoiSchema = Joi.object({
    '@type': Joi.string().valid('NewsMediaOrganization').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    diversityStaffingReport: Joi.alternatives().try(Joi.lazy(() => schema.ArticleOrSubClassJoiSchema), Joi.string().uri()),
    correctionsPolicy: Joi.alternatives().try(Joi.string().uri(), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema)),
    ownershipFundingInfo: Joi.alternatives().try(Joi.string(), Joi.string().uri(), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.lazy(() => schema.AboutPageOrSubClassJoiSchema)),
    verificationFactCheckingPolicy: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    masthead: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    missionCoveragePrioritiesPolicy: Joi.alternatives().try(Joi.string().uri(), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema)),
    unnamedSourcesPolicy: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    ethicsPolicy: Joi.alternatives().try(Joi.string().uri(), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema)),
    actionableFeedbackPolicy: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    diversityPolicy: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    noBylinesPolicy: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    aggregateRating: Joi.alternatives().try(Joi.lazy(() => schema.AggregateRatingOrSubClassJoiSchema), Joi.string().uri()),
    numberOfEmployees: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    employees: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    address: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.PostalAddressOrSubClassJoiSchema), Joi.string().uri()),
    globalLocationNumber: Joi.string(),
    knowsAbout: Joi.alternatives().try(Joi.string(), Joi.string().uri(), Joi.lazy(() => schema.ThingOrSubClassJoiSchema)),
    contactPoint: Joi.alternatives().try(Joi.lazy(() => schema.ContactPointOrSubClassJoiSchema), Joi.string().uri()),
    knowsLanguage: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.LanguageOrSubClassJoiSchema), Joi.string().uri()),
    leiCode: Joi.string(),
    founder: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    department: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    alumni: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    members: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    employee: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    subOrganization: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    vatID: Joi.string(),
    nonprofitStatus: Joi.lazy(() => schema.NonprofitTypeJoiSchema),
    duns: Joi.string(),
    hasMerchantReturnPolicy: Joi.alternatives().try(Joi.lazy(() => schema.MerchantReturnPolicyOrSubClassJoiSchema), Joi.string().uri()),
    contactPoints: Joi.alternatives().try(Joi.lazy(() => schema.ContactPointOrSubClassJoiSchema), Joi.string().uri()),
    founders: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    makesOffer: Joi.alternatives().try(Joi.lazy(() => schema.OfferOrSubClassJoiSchema), Joi.string().uri()),
    isicV4: Joi.string(),
    reviews: Joi.alternatives().try(Joi.lazy(() => schema.ReviewOrSubClassJoiSchema), Joi.string().uri()),
    award: Joi.string(),
    review: Joi.alternatives().try(Joi.lazy(() => schema.ReviewOrSubClassJoiSchema), Joi.string().uri()),
    events: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.string().uri()),
    areaServed: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.lazy(() => schema.AdministrativeAreaOrSubClassJoiSchema), Joi.lazy(() => schema.GeoShapeOrSubClassJoiSchema), Joi.string().uri()),
    dissolutionDate: Joi.string().isoDate(),
    member: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    seeks: Joi.alternatives().try(Joi.lazy(() => schema.DemandOrSubClassJoiSchema), Joi.string().uri()),
    hasOfferCatalog: Joi.alternatives().try(Joi.lazy(() => schema.OfferCatalogOrSubClassJoiSchema), Joi.string().uri()),
    event: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.string().uri()),
    email: Joi.string(),
    legalName: Joi.string(),
    sponsor: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    telephone: Joi.string(),
    foundingDate: Joi.string().isoDate(),
    logo: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
    parentOrganization: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    slogan: Joi.string(),
    owns: Joi.alternatives().try(Joi.lazy(() => schema.OwnershipInfoOrSubClassJoiSchema), Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.string().uri()),
    interactionStatistic: Joi.alternatives().try(Joi.lazy(() => schema.InteractionCounterOrSubClassJoiSchema), Joi.string().uri()),
    serviceArea: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.lazy(() => schema.AdministrativeAreaOrSubClassJoiSchema), Joi.lazy(() => schema.GeoShapeOrSubClassJoiSchema), Joi.string().uri()),
    faxNumber: Joi.string(),
    memberOf: Joi.alternatives().try(Joi.lazy(() => schema.ProgramMembershipOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    hasCredential: Joi.alternatives().try(Joi.lazy(() => schema.EducationalOccupationalCredentialOrSubClassJoiSchema), Joi.string().uri()),
    brand: Joi.alternatives().try(Joi.lazy(() => schema.BrandOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    taxID: Joi.string(),
    naics: Joi.string(),
    funder: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    publishingPrinciples: Joi.alternatives().try(Joi.string().uri(), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema)),
    awards: Joi.string(),
    location: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string(), Joi.lazy(() => schema.VirtualLocationOrSubClassJoiSchema), Joi.lazy(() => schema.PostalAddressOrSubClassJoiSchema), Joi.string().uri()),
    hasPOS: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    foundingLocation: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
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
 * schema:NewsMediaOrganization - Validation schema (w/ JOI)
 *
 * This differs from NewsMediaOrganizationJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.NewsMediaOrganizationOrSubClassJoiSchema = Joi.alternatives().try([
    exports.NewsMediaOrganizationJoiSchema,
]);
/**
 * Runtime validator for schema:NewsMediaOrganization.
 *
 * If some data has a structure which matches a schema:NewsMediaOrganization, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeNewsMediaOrganization = validateNewsMediaOrganization(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeNewsMediaOrganization instanceof OaValidationError) {
 *   // From this point on, `maybeNewsMediaOrganization` will have type `OaValidationError`
 *   const error = maybeNewsMediaOrganization;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeNewsMediaOrganization` will have type `NewsMediaOrganization`
 * const newsMediaOrganization = maybeNewsMediaOrganization;
 * ```
 */
function validateNewsMediaOrganization(maybeNewsMediaOrganization) {
    const { value, error } = exports.NewsMediaOrganizationJoiSchema.validate(maybeNewsMediaOrganization);
    if (error) {
        return new oaValidationError_1.OaValidationError('NewsMediaOrganization', maybeNewsMediaOrganization, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateNewsMediaOrganization = validateNewsMediaOrganization;
