"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateResort = exports.ResortOrSubClassJoiSchema = exports.ResortJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:Resort - Validation schema (w/ JOI)
 */
exports.ResortJoiSchema = Joi.object({
    '@type': Joi.string().valid('Resort').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    amenityFeature: Joi.alternatives().try(Joi.lazy(() => schema.LocationFeatureSpecificationOrSubClassJoiSchema), Joi.string().uri()),
    numberOfRooms: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.number(), Joi.string().uri()),
    starRating: Joi.alternatives().try(Joi.lazy(() => schema.RatingOrSubClassJoiSchema), Joi.string().uri()),
    checkinTime: Joi.alternatives().try(Joi.string().isoDate(), Joi.string()),
    petsAllowed: Joi.alternatives().try(Joi.string(), Joi.boolean()),
    audience: Joi.alternatives().try(Joi.lazy(() => schema.AudienceOrSubClassJoiSchema), Joi.string().uri()),
    availableLanguage: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.LanguageOrSubClassJoiSchema), Joi.string().uri()),
    checkoutTime: Joi.alternatives().try(Joi.string().isoDate(), Joi.string()),
    priceRange: Joi.string(),
    openingHours: Joi.string(),
    branchOf: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    currenciesAccepted: Joi.string(),
    paymentAccepted: Joi.string(),
    subOrganization: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    contactPoint: Joi.alternatives().try(Joi.lazy(() => schema.ContactPointOrSubClassJoiSchema), Joi.string().uri()),
    areaServed: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.GeoShapeOrSubClassJoiSchema), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.lazy(() => schema.AdministrativeAreaOrSubClassJoiSchema), Joi.string().uri()),
    actionableFeedbackPolicy: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    parentOrganization: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    funder: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    globalLocationNumber: Joi.string(),
    employees: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    diversityPolicy: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    aggregateRating: Joi.alternatives().try(Joi.lazy(() => schema.AggregateRatingOrSubClassJoiSchema), Joi.string().uri()),
    knowsLanguage: Joi.alternatives().try(Joi.lazy(() => schema.LanguageOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    award: Joi.string(),
    foundingLocation: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    publishingPrinciples: Joi.alternatives().try(Joi.string().uri(), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema)),
    isicV4: Joi.string(),
    member: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    naics: Joi.string(),
    employee: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    brand: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.BrandOrSubClassJoiSchema), Joi.string().uri()),
    duns: Joi.string(),
    hasMerchantReturnPolicy: Joi.alternatives().try(Joi.lazy(() => schema.MerchantReturnPolicyOrSubClassJoiSchema), Joi.string().uri()),
    location: Joi.alternatives().try(Joi.lazy(() => schema.PostalAddressOrSubClassJoiSchema), Joi.string(), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.lazy(() => schema.VirtualLocationOrSubClassJoiSchema), Joi.string().uri()),
    interactionStatistic: Joi.alternatives().try(Joi.lazy(() => schema.InteractionCounterOrSubClassJoiSchema), Joi.string().uri()),
    hasCredential: Joi.alternatives().try(Joi.lazy(() => schema.EducationalOccupationalCredentialOrSubClassJoiSchema), Joi.string().uri()),
    nonprofitStatus: Joi.lazy(() => schema.NonprofitTypeJoiSchema),
    ethicsPolicy: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    correctionsPolicy: Joi.alternatives().try(Joi.string().uri(), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema)),
    memberOf: Joi.alternatives().try(Joi.lazy(() => schema.ProgramMembershipOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    slogan: Joi.string(),
    department: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    vatID: Joi.string(),
    leiCode: Joi.string(),
    founders: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    logo: Joi.alternatives().try(Joi.string().uri(), Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema)),
    members: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    foundingDate: Joi.string().isoDate(),
    awards: Joi.string(),
    makesOffer: Joi.alternatives().try(Joi.lazy(() => schema.OfferOrSubClassJoiSchema), Joi.string().uri()),
    address: Joi.alternatives().try(Joi.lazy(() => schema.PostalAddressOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    dissolutionDate: Joi.string().isoDate(),
    alumni: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    sponsor: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    events: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.string().uri()),
    serviceArea: Joi.alternatives().try(Joi.lazy(() => schema.GeoShapeOrSubClassJoiSchema), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.lazy(() => schema.AdministrativeAreaOrSubClassJoiSchema), Joi.string().uri()),
    email: Joi.string(),
    taxID: Joi.string(),
    hasOfferCatalog: Joi.alternatives().try(Joi.lazy(() => schema.OfferCatalogOrSubClassJoiSchema), Joi.string().uri()),
    numberOfEmployees: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    ownershipFundingInfo: Joi.alternatives().try(Joi.lazy(() => schema.AboutPageOrSubClassJoiSchema), Joi.string().uri(), Joi.string(), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema)),
    founder: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    reviews: Joi.alternatives().try(Joi.lazy(() => schema.ReviewOrSubClassJoiSchema), Joi.string().uri()),
    telephone: Joi.string(),
    hasPOS: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    review: Joi.alternatives().try(Joi.lazy(() => schema.ReviewOrSubClassJoiSchema), Joi.string().uri()),
    seeks: Joi.alternatives().try(Joi.lazy(() => schema.DemandOrSubClassJoiSchema), Joi.string().uri()),
    contactPoints: Joi.alternatives().try(Joi.lazy(() => schema.ContactPointOrSubClassJoiSchema), Joi.string().uri()),
    legalName: Joi.string(),
    diversityStaffingReport: Joi.alternatives().try(Joi.string().uri(), Joi.lazy(() => schema.ArticleOrSubClassJoiSchema)),
    unnamedSourcesPolicy: Joi.alternatives().try(Joi.string().uri(), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema)),
    knowsAbout: Joi.alternatives().try(Joi.string().uri(), Joi.string(), Joi.lazy(() => schema.ThingOrSubClassJoiSchema)),
    event: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.string().uri()),
    faxNumber: Joi.string(),
    owns: Joi.alternatives().try(Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.lazy(() => schema.OwnershipInfoOrSubClassJoiSchema), Joi.string().uri()),
    mainEntityOfPage: Joi.alternatives().try(Joi.string().uri(), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema)),
    additionalType: Joi.string().uri(),
    url: Joi.string().uri(),
    alternateName: Joi.string(),
    sameAs: Joi.string().uri(),
    potentialAction: Joi.alternatives().try(Joi.lazy(() => schema.ActionOrSubClassJoiSchema), Joi.string().uri()),
    subjectOf: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    disambiguatingDescription: Joi.string(),
    image: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
    geo: Joi.alternatives().try(Joi.lazy(() => schema.GeoCoordinatesOrSubClassJoiSchema), Joi.lazy(() => schema.GeoShapeOrSubClassJoiSchema), Joi.string().uri()),
    geoEquals: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.string().uri()),
    publicAccess: Joi.boolean(),
    geoDisjoint: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.string().uri()),
    geoTouches: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.string().uri()),
    specialOpeningHoursSpecification: Joi.alternatives().try(Joi.lazy(() => schema.OpeningHoursSpecificationOrSubClassJoiSchema), Joi.string().uri()),
    hasDriveThroughService: Joi.boolean(),
    maximumAttendeeCapacity: Joi.number().integer(),
    photo: Joi.alternatives().try(Joi.lazy(() => schema.PhotographOrSubClassJoiSchema), Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
    containedIn: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    longitude: Joi.alternatives().try(Joi.number(), Joi.string()),
    smokingAllowed: Joi.boolean(),
    geoCovers: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.string().uri()),
    containsPlace: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    containedInPlace: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    branchCode: Joi.string(),
    geoContains: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.string().uri()),
    tourBookingPage: Joi.string().uri(),
    geoCoveredBy: Joi.alternatives().try(Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    photos: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.lazy(() => schema.PhotographOrSubClassJoiSchema), Joi.string().uri()),
    geoCrosses: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.string().uri()),
    geoWithin: Joi.alternatives().try(Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    geoIntersects: Joi.alternatives().try(Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    latitude: Joi.alternatives().try(Joi.string(), Joi.number()),
    maps: Joi.string().uri(),
    geoOverlaps: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.lazy(() => schema.GeospatialGeometryOrSubClassJoiSchema), Joi.string().uri()),
    openingHoursSpecification: Joi.alternatives().try(Joi.lazy(() => schema.OpeningHoursSpecificationOrSubClassJoiSchema), Joi.string().uri()),
    map: Joi.string().uri(),
    additionalProperty: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri()),
    isAccessibleForFree: Joi.boolean(),
    hasMap: Joi.alternatives().try(Joi.lazy(() => schema.MapOrSubClassJoiSchema), Joi.string().uri()),
});
/**
 * schema:Resort - Validation schema (w/ JOI)
 *
 * This differs from ResortJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.ResortOrSubClassJoiSchema = Joi.alternatives().try([
    exports.ResortJoiSchema,
    Joi.lazy(() => schema.SkiResortOrSubClassJoiSchema),
]);
/**
 * Runtime validator for schema:Resort.
 *
 * If some data has a structure which matches a schema:Resort, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeResort = validateResort(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeResort instanceof OaValidationError) {
 *   // From this point on, `maybeResort` will have type `OaValidationError`
 *   const error = maybeResort;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeResort` will have type `Resort`
 * const resort = maybeResort;
 * ```
 */
function validateResort(maybeResort) {
    const { value, error } = exports.ResortJoiSchema.validate(maybeResort);
    if (error) {
        return new oaValidationError_1.OaValidationError('Resort', maybeResort, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateResort = validateResort;
