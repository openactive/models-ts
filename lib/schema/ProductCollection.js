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
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    includesObject: Joi.alternatives().try(Joi.lazy(() => schema.TypeAndQuantityNodeOrSubClassJoiSchema), Joi.string().uri()),
    collectionSize: Joi.number().integer(),
    text: Joi.string(),
    aggregateRating: Joi.alternatives().try(Joi.lazy(() => schema.AggregateRatingOrSubClassJoiSchema), Joi.string().uri()),
    discussionUrl: Joi.string().uri(),
    temporal: Joi.alternatives().try(Joi.string().isoDate(), Joi.string()),
    conditionsOfAccess: Joi.string(),
    expires: Joi.string().isoDate(),
    size: Joi.alternatives().try(Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.lazy(() => schema.SizeSpecificationOrSubClassJoiSchema), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    timeRequired: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
    dateModified: Joi.string().isoDate(),
    spatialCoverage: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    educationalLevel: Joi.alternatives().try(Joi.string().uri(), Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string()),
    exampleOfWork: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    copyrightYear: Joi.number(),
    sourceOrganization: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    isPartOf: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    video: Joi.alternatives().try(Joi.lazy(() => schema.ClipOrSubClassJoiSchema), Joi.lazy(() => schema.VideoObjectOrSubClassJoiSchema), Joi.string().uri()),
    workTranslation: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    sdPublisher: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    creator: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    thumbnailUrl: Joi.string().uri(),
    translationOfWork: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    contentReferenceTime: Joi.string().isoDate(),
    datePublished: Joi.string().isoDate(),
    temporalCoverage: Joi.alternatives().try(Joi.string(), Joi.string().isoDate(), Joi.string().uri()),
    fileFormat: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
    contentLocation: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    alternativeHeadline: Joi.string(),
    contributor: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    version: Joi.alternatives().try(Joi.number(), Joi.string()),
    accessMode: Joi.string(),
    spatial: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    encoding: Joi.alternatives().try(Joi.lazy(() => schema.MediaObjectOrSubClassJoiSchema), Joi.string().uri()),
    producer: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    abstract: Joi.string(),
    publication: Joi.alternatives().try(Joi.lazy(() => schema.PublicationEventOrSubClassJoiSchema), Joi.string().uri()),
    locationCreated: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    maintainer: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    copyrightHolder: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    offers: Joi.alternatives().try(Joi.lazy(() => schema.OfferOrSubClassJoiSchema), Joi.lazy(() => schema.DemandOrSubClassJoiSchema), Joi.string().uri()),
    genre: Joi.alternatives().try(Joi.string().uri(), Joi.string()),
    author: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    accessibilitySummary: Joi.string(),
    dateCreated: Joi.string().isoDate(),
    reviews: Joi.alternatives().try(Joi.lazy(() => schema.ReviewOrSubClassJoiSchema), Joi.string().uri()),
    contentRating: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.RatingOrSubClassJoiSchema), Joi.string().uri()),
    accessibilityAPI: Joi.string(),
    publisher: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    license: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    isFamilyFriendly: Joi.boolean(),
    accessibilityHazard: Joi.string(),
    mainEntity: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
    award: Joi.string(),
    provider: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    review: Joi.alternatives().try(Joi.lazy(() => schema.ReviewOrSubClassJoiSchema), Joi.string().uri()),
    accountablePerson: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    interactivityType: Joi.string(),
    editEIDR: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
    translator: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    commentCount: Joi.number().integer(),
    schemaVersion: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
    sdDatePublished: Joi.string().isoDate(),
    educationalUse: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string().uri()),
    accessibilityControl: Joi.string(),
    sponsor: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    educationalAlignment: Joi.alternatives().try(Joi.lazy(() => schema.AlignmentObjectOrSubClassJoiSchema), Joi.string().uri()),
    isAccessibleForFree: Joi.boolean(),
    encodings: Joi.alternatives().try(Joi.lazy(() => schema.MediaObjectOrSubClassJoiSchema), Joi.string().uri()),
    accessModeSufficient: Joi.alternatives().try(Joi.lazy(() => schema.ItemListOrSubClassJoiSchema), Joi.string().uri()),
    usageInfo: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    recordedAt: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.string().uri()),
    character: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    citation: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    pattern: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string().uri()),
    copyrightNotice: Joi.string(),
    headline: Joi.string(),
    interactionStatistic: Joi.alternatives().try(Joi.lazy(() => schema.InteractionCounterOrSubClassJoiSchema), Joi.string().uri()),
    mentions: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
    sdLicense: Joi.alternatives().try(Joi.string().uri(), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema)),
    encodingFormat: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
    materialExtent: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    creditText: Joi.string(),
    learningResourceType: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string().uri()),
    teaches: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string().uri()),
    about: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
    inLanguage: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.LanguageOrSubClassJoiSchema), Joi.string().uri()),
    assesses: Joi.alternatives().try(Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    acquireLicensePage: Joi.alternatives().try(Joi.string().uri(), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema)),
    releasedEvent: Joi.alternatives().try(Joi.lazy(() => schema.PublicationEventOrSubClassJoiSchema), Joi.string().uri()),
    audio: Joi.alternatives().try(Joi.lazy(() => schema.ClipOrSubClassJoiSchema), Joi.lazy(() => schema.AudioObjectOrSubClassJoiSchema), Joi.lazy(() => schema.MusicRecordingOrSubClassJoiSchema), Joi.string().uri()),
    accessibilityFeature: Joi.string(),
    comment: Joi.alternatives().try(Joi.lazy(() => schema.CommentOrSubClassJoiSchema), Joi.string().uri()),
    hasPart: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    associatedMedia: Joi.alternatives().try(Joi.lazy(() => schema.MediaObjectOrSubClassJoiSchema), Joi.string().uri()),
    position: Joi.alternatives().try(Joi.string(), Joi.number().integer()),
    creativeWorkStatus: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string().uri()),
    isBasedOnUrl: Joi.alternatives().try(Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.string().uri(), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema)),
    material: Joi.alternatives().try(Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    funder: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    publishingPrinciples: Joi.alternatives().try(Joi.string().uri(), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema)),
    awards: Joi.string(),
    editor: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    workExample: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    audience: Joi.alternatives().try(Joi.lazy(() => schema.AudienceOrSubClassJoiSchema), Joi.string().uri()),
    correction: Joi.alternatives().try(Joi.lazy(() => schema.CorrectionCommentOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    keywords: Joi.alternatives().try(Joi.string().uri(), Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string()),
    publisherImprint: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    isBasedOn: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri(), Joi.lazy(() => schema.ProductOrSubClassJoiSchema)),
    typicalAgeRange: Joi.string(),
    sameAs: Joi.string().uri(),
    subjectOf: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    potentialAction: Joi.alternatives().try(Joi.lazy(() => schema.ActionOrSubClassJoiSchema), Joi.string().uri()),
    mainEntityOfPage: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    additionalType: Joi.string().uri(),
    alternateName: Joi.string(),
    url: Joi.string().uri(),
    image: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
    disambiguatingDescription: Joi.string(),
    hasMeasurement: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    itemCondition: Joi.lazy(() => schema.OfferItemConditionJoiSchema),
    depth: Joi.alternatives().try(Joi.lazy(() => schema.DistanceOrSubClassJoiSchema), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    height: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.lazy(() => schema.DistanceOrSubClassJoiSchema), Joi.string().uri()),
    gtin12: Joi.string(),
    isSimilarTo: Joi.alternatives().try(Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.lazy(() => schema.ServiceOrSubClassJoiSchema), Joi.string().uri()),
    weight: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    hasMerchantReturnPolicy: Joi.alternatives().try(Joi.lazy(() => schema.MerchantReturnPolicyOrSubClassJoiSchema), Joi.string().uri()),
    width: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.lazy(() => schema.DistanceOrSubClassJoiSchema), Joi.string().uri()),
    isConsumableFor: Joi.alternatives().try(Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.string().uri()),
    gtin13: Joi.string(),
    gtin: Joi.string(),
    hasEnergyConsumptionDetails: Joi.alternatives().try(Joi.lazy(() => schema.EnergyConsumptionDetailsOrSubClassJoiSchema), Joi.string().uri()),
    color: Joi.string(),
    additionalProperty: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri()),
    logo: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
    mpn: Joi.string(),
    inProductGroupWithID: Joi.string(),
    category: Joi.alternatives().try(Joi.lazy(() => schema.PhysicalActivityCategoryJoiSchema), Joi.string(), Joi.string().uri(), Joi.lazy(() => schema.ThingOrSubClassJoiSchema)),
    isVariantOf: Joi.alternatives().try(Joi.lazy(() => schema.ProductGroupOrSubClassJoiSchema), Joi.lazy(() => schema.ProductModelOrSubClassJoiSchema), Joi.string().uri()),
    slogan: Joi.string(),
    sku: Joi.string(),
    nsn: Joi.string(),
    purchaseDate: Joi.string().isoDate(),
    gtin14: Joi.string(),
    isAccessoryOrSparePartFor: Joi.alternatives().try(Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.string().uri()),
    manufacturer: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    model: Joi.alternatives().try(Joi.lazy(() => schema.ProductModelOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    brand: Joi.alternatives().try(Joi.lazy(() => schema.BrandOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    releaseDate: Joi.string().isoDate(),
    gtin8: Joi.string(),
    productionDate: Joi.string().isoDate(),
    isRelatedTo: Joi.alternatives().try(Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.lazy(() => schema.ServiceOrSubClassJoiSchema), Joi.string().uri()),
    productID: Joi.string(),
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
