"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateProductCollection = exports.ProductCollectionOrSubClassJoiSchema = exports.ProductCollectionJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:ProductCollection - Validation schema (w/ JOI)
 */
exports.ProductCollectionJoiSchema = Joi.object({
    '@type': Joi.string().valid('ProductCollection').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    includesObject: Joi.alternatives().try(Joi.lazy(() => schema.TypeAndQuantityNodeOrSubClassJoiSchema), Joi.string().uri()),
    pattern: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string().uri()),
    hasMeasurement: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    offers: Joi.alternatives().try(Joi.lazy(() => schema.DemandOrSubClassJoiSchema), Joi.lazy(() => schema.OfferOrSubClassJoiSchema), Joi.string().uri()),
    color: Joi.string(),
    isAccessoryOrSparePartFor: Joi.alternatives().try(Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.string().uri()),
    productID: Joi.string(),
    model: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.ProductModelOrSubClassJoiSchema), Joi.string().uri()),
    depth: Joi.alternatives().try(Joi.lazy(() => schema.DistanceOrSubClassJoiSchema), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    weight: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    gtin13: Joi.string(),
    productionDate: Joi.string().isoDate(),
    aggregateRating: Joi.alternatives().try(Joi.lazy(() => schema.AggregateRatingOrSubClassJoiSchema), Joi.string().uri()),
    award: Joi.string(),
    gtin8: Joi.string(),
    nsn: Joi.string(),
    countryOfOrigin: Joi.alternatives().try(Joi.lazy(() => schema.CountryOrSubClassJoiSchema), Joi.string().uri()),
    manufacturer: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    brand: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.BrandOrSubClassJoiSchema), Joi.string().uri()),
    category: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.PhysicalActivityCategoryJoiSchema), Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
    hasMerchantReturnPolicy: Joi.alternatives().try(Joi.lazy(() => schema.MerchantReturnPolicyOrSubClassJoiSchema), Joi.string().uri()),
    hasEnergyConsumptionDetails: Joi.alternatives().try(Joi.lazy(() => schema.EnergyConsumptionDetailsOrSubClassJoiSchema), Joi.string().uri()),
    slogan: Joi.string(),
    isSimilarTo: Joi.alternatives().try(Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.lazy(() => schema.ServiceOrSubClassJoiSchema), Joi.string().uri()),
    height: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.lazy(() => schema.DistanceOrSubClassJoiSchema), Joi.string().uri()),
    size: Joi.alternatives().try(Joi.lazy(() => schema.SizeSpecificationOrSubClassJoiSchema), Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string(), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    releaseDate: Joi.string().isoDate(),
    logo: Joi.alternatives().try(Joi.string().uri(), Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema)),
    mpn: Joi.string(),
    countryOfLastProcessing: Joi.string(),
    awards: Joi.string(),
    gtin12: Joi.string(),
    width: Joi.alternatives().try(Joi.lazy(() => schema.DistanceOrSubClassJoiSchema), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    audience: Joi.alternatives().try(Joi.lazy(() => schema.AudienceOrSubClassJoiSchema), Joi.string().uri()),
    gtin14: Joi.string(),
    material: Joi.alternatives().try(Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    isRelatedTo: Joi.alternatives().try(Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.lazy(() => schema.ServiceOrSubClassJoiSchema), Joi.string().uri()),
    inProductGroupWithID: Joi.string(),
    reviews: Joi.alternatives().try(Joi.lazy(() => schema.ReviewOrSubClassJoiSchema), Joi.string().uri()),
    sku: Joi.string(),
    isConsumableFor: Joi.alternatives().try(Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.string().uri()),
    gtin: Joi.string(),
    review: Joi.alternatives().try(Joi.lazy(() => schema.ReviewOrSubClassJoiSchema), Joi.string().uri()),
    itemCondition: Joi.lazy(() => schema.OfferItemConditionJoiSchema),
    additionalProperty: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri()),
    isVariantOf: Joi.alternatives().try(Joi.lazy(() => schema.ProductModelOrSubClassJoiSchema), Joi.lazy(() => schema.ProductGroupOrSubClassJoiSchema), Joi.string().uri()),
    countryOfAssembly: Joi.string(),
    purchaseDate: Joi.string().isoDate(),
    mainEntityOfPage: Joi.alternatives().try(Joi.string().uri(), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema)),
    additionalType: Joi.string().uri(),
    url: Joi.string().uri(),
    alternateName: Joi.string(),
    sameAs: Joi.string().uri(),
    potentialAction: Joi.alternatives().try(Joi.lazy(() => schema.ActionOrSubClassJoiSchema), Joi.string().uri()),
    subjectOf: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    disambiguatingDescription: Joi.string(),
    image: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
    collectionSize: Joi.number().integer(),
    creditText: Joi.string(),
    about: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
    text: Joi.string(),
    character: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    locationCreated: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    isBasedOnUrl: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri(), Joi.lazy(() => schema.ProductOrSubClassJoiSchema)),
    isPartOf: Joi.alternatives().try(Joi.string().uri(), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema)),
    materialExtent: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    contentReferenceTime: Joi.string().isoDate(),
    maintainer: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    typicalAgeRange: Joi.string(),
    author: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    funder: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    expires: Joi.string().isoDate(),
    genre: Joi.alternatives().try(Joi.string().uri(), Joi.string()),
    workTranslation: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    temporalCoverage: Joi.alternatives().try(Joi.string(), Joi.string().uri(), Joi.string().isoDate()),
    hasPart: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    accessibilitySummary: Joi.string(),
    accessModeSufficient: Joi.alternatives().try(Joi.lazy(() => schema.ItemListOrSubClassJoiSchema), Joi.string().uri()),
    headline: Joi.string(),
    educationalAlignment: Joi.alternatives().try(Joi.lazy(() => schema.AlignmentObjectOrSubClassJoiSchema), Joi.string().uri()),
    publishingPrinciples: Joi.alternatives().try(Joi.string().uri(), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema)),
    comment: Joi.alternatives().try(Joi.lazy(() => schema.CommentOrSubClassJoiSchema), Joi.string().uri()),
    audio: Joi.alternatives().try(Joi.lazy(() => schema.ClipOrSubClassJoiSchema), Joi.lazy(() => schema.AudioObjectOrSubClassJoiSchema), Joi.lazy(() => schema.MusicRecordingOrSubClassJoiSchema), Joi.string().uri()),
    video: Joi.alternatives().try(Joi.lazy(() => schema.VideoObjectOrSubClassJoiSchema), Joi.lazy(() => schema.ClipOrSubClassJoiSchema), Joi.string().uri()),
    sourceOrganization: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    translator: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    position: Joi.alternatives().try(Joi.string(), Joi.number().integer()),
    translationOfWork: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    isBasedOn: Joi.alternatives().try(Joi.string().uri(), Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema)),
    schemaVersion: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
    editEIDR: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
    sdPublisher: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    license: Joi.alternatives().try(Joi.string().uri(), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema)),
    interactionStatistic: Joi.alternatives().try(Joi.lazy(() => schema.InteractionCounterOrSubClassJoiSchema), Joi.string().uri()),
    accessibilityFeature: Joi.string(),
    mentions: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
    temporal: Joi.alternatives().try(Joi.string().isoDate(), Joi.string()),
    usageInfo: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    creativeWorkStatus: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string().uri()),
    publisher: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    releasedEvent: Joi.alternatives().try(Joi.lazy(() => schema.PublicationEventOrSubClassJoiSchema), Joi.string().uri()),
    alternativeHeadline: Joi.string(),
    sdLicense: Joi.alternatives().try(Joi.string().uri(), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema)),
    accountablePerson: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    copyrightNotice: Joi.string(),
    teaches: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string().uri()),
    exampleOfWork: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    recordedAt: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.string().uri()),
    conditionsOfAccess: Joi.string(),
    workExample: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    accessibilityHazard: Joi.string(),
    copyrightYear: Joi.number(),
    encodings: Joi.alternatives().try(Joi.lazy(() => schema.MediaObjectOrSubClassJoiSchema), Joi.string().uri()),
    creator: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    accessMode: Joi.string(),
    abstract: Joi.string(),
    thumbnailUrl: Joi.string().uri(),
    acquireLicensePage: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    contentRating: Joi.alternatives().try(Joi.lazy(() => schema.RatingOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    isFamilyFriendly: Joi.boolean(),
    editor: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    datePublished: Joi.string().isoDate(),
    educationalLevel: Joi.alternatives().try(Joi.string().uri(), Joi.string(), Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema)),
    assesses: Joi.alternatives().try(Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    mainEntity: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
    correction: Joi.alternatives().try(Joi.lazy(() => schema.CorrectionCommentOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    timeRequired: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
    keywords: Joi.alternatives().try(Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    sponsor: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    educationalUse: Joi.alternatives().try(Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    sdDatePublished: Joi.string().isoDate(),
    spatialCoverage: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    publication: Joi.alternatives().try(Joi.lazy(() => schema.PublicationEventOrSubClassJoiSchema), Joi.string().uri()),
    encodingFormat: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
    inLanguage: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.LanguageOrSubClassJoiSchema), Joi.string().uri()),
    dateModified: Joi.string().isoDate(),
    dateCreated: Joi.string().isoDate(),
    associatedMedia: Joi.alternatives().try(Joi.lazy(() => schema.MediaObjectOrSubClassJoiSchema), Joi.string().uri()),
    interpretedAsClaim: Joi.alternatives().try(Joi.lazy(() => schema.ClaimOrSubClassJoiSchema), Joi.string().uri()),
    publisherImprint: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    accessibilityAPI: Joi.string(),
    version: Joi.alternatives().try(Joi.string(), Joi.number()),
    learningResourceType: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string().uri()),
    discussionUrl: Joi.string().uri(),
    provider: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    fileFormat: Joi.alternatives().try(Joi.string().uri(), Joi.string()),
    producer: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    citation: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    archivedAt: Joi.alternatives().try(Joi.lazy(() => schema.WebPageOrSubClassJoiSchema), Joi.string().uri()),
    encoding: Joi.alternatives().try(Joi.lazy(() => schema.MediaObjectOrSubClassJoiSchema), Joi.string().uri()),
    interactivityType: Joi.string(),
    spatial: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    contentLocation: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    copyrightHolder: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    contributor: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    isAccessibleForFree: Joi.boolean(),
    accessibilityControl: Joi.string(),
    commentCount: Joi.number().integer(),
});
/**
 * schema:ProductCollection - Validation schema (w/ JOI)
 *
 * This differs from ProductCollectionJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.ProductCollectionOrSubClassJoiSchema = Joi.alternatives().try([
    exports.ProductCollectionJoiSchema,
]);
/**
 * Runtime validator for schema:ProductCollection.
 *
 * If some data has a structure which matches a schema:ProductCollection, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeProductCollection = validateProductCollection(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeProductCollection instanceof OaValidationError) {
 *   // From this point on, `maybeProductCollection` will have type `OaValidationError`
 *   const error = maybeProductCollection;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeProductCollection` will have type `ProductCollection`
 * const productCollection = maybeProductCollection;
 * ```
 */
function validateProductCollection(maybeProductCollection) {
    const { value, error } = exports.ProductCollectionJoiSchema.validate(maybeProductCollection);
    if (error) {
        return new oaValidationError_1.OaValidationError('ProductCollection', maybeProductCollection, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateProductCollection = validateProductCollection;
