"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateIndividualFacilityUse = exports.IndividualFacilityUseOrSubClassJoiSchema = exports.IndividualFacilityUseJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const oa = require("../oa");
const schema = require("../schema");
/**
 * IndividualFacilityUse - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/Product, which means that any of this type's properties within schema.org may also be used.
 */
exports.IndividualFacilityUseJoiSchema = Joi.object({
    '@type': Joi.string().valid('IndividualFacilityUse').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.number().integer(), Joi.string(), Joi.lazy(() => oa.PropertyValueOrSubClassJoiSchema), Joi.array().items(Joi.lazy(() => oa.PropertyValueOrSubClassJoiSchema))),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    accessibilityInformation: Joi.string(),
    accessibilitySupport: Joi.array().items(Joi.lazy(() => oa.ConceptOrSubClassJoiSchema)),
    activity: Joi.array().items(Joi.lazy(() => oa.ConceptOrSubClassJoiSchema)),
    additionalAdmissionRestriction: Joi.array().items(Joi.string()),
    aggregateFacilityUse: Joi.lazy(() => oa.FacilityUseOrSubClassJoiSchema),
    attendeeInstructions: Joi.string(),
    category: Joi.alternatives().try(Joi.array().items(Joi.string()), Joi.array().items(Joi.lazy(() => oa.ConceptOrSubClassJoiSchema))),
    customerAccountBookingRestriction: Joi.array().items(Joi.string()),
    event: Joi.array().items(Joi.lazy(() => oa.SlotOrSubClassJoiSchema)),
    facilityType: Joi.array().items(Joi.lazy(() => oa.ConceptOrSubClassJoiSchema)),
    hoursAvailable: Joi.array().items(Joi.lazy(() => oa.OpeningHoursSpecificationOrSubClassJoiSchema)),
    image: Joi.array().items(Joi.lazy(() => oa.ImageObjectOrSubClassJoiSchema)),
    isOpenBookingWithCustomerAccountAllowed: Joi.boolean(),
    location: Joi.alternatives().try(Joi.lazy(() => oa.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    offers: Joi.array().items(Joi.lazy(() => oa.OfferOrSubClassJoiSchema)),
    provider: Joi.lazy(() => oa.OrganizationOrSubClassJoiSchema),
    url: Joi.string().uri(),
    'beta:formattedDescription': Joi.string(),
    'beta:isWheelchairAccessible': Joi.boolean(),
    'beta:video': Joi.array().items(Joi.lazy(() => oa.VideoObjectOrSubClassJoiSchema)),
    'beta:sportsActivityLocation': Joi.array().items(Joi.lazy(() => oa.SportsActivityLocationOrSubClassJoiSchema)),
    'beta:offerValidityPeriod': Joi.string(),
    'beta:facilityAttribute': Joi.array().items(Joi.lazy(() => oa.ConceptOrSubClassJoiSchema)),
    'beta:facilitySetting': Joi.lazy(() => oa.FacilitySettingTypeJoiSchema),
    'beta:bookingChannel': Joi.array().items(Joi.lazy(() => oa.BookingChannelTypeJoiSchema)),
    additionalProperty: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri()),
    aggregateRating: Joi.alternatives().try(Joi.lazy(() => schema.AggregateRatingOrSubClassJoiSchema), Joi.string().uri()),
    asin: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
    audience: Joi.alternatives().try(Joi.lazy(() => schema.AudienceOrSubClassJoiSchema), Joi.string().uri()),
    authorizedRepresentative: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    award: Joi.string(),
    awards: Joi.string(),
    brand: Joi.alternatives().try(Joi.lazy(() => schema.BrandOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    color: Joi.string(),
    colorSwatch: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
    consumerNotice: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.TextObjectOrSubClassJoiSchema), Joi.string().uri(), Joi.lazy(() => schema.WebContentOrSubClassJoiSchema)),
    countryOfAssembly: Joi.string(),
    countryOfLastProcessing: Joi.string(),
    countryOfOrigin: Joi.alternatives().try(Joi.lazy(() => schema.CountryOrSubClassJoiSchema), Joi.string().uri()),
    depth: Joi.alternatives().try(Joi.lazy(() => schema.DistanceOrSubClassJoiSchema), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    displayLocation: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    funding: Joi.alternatives().try(Joi.lazy(() => schema.GrantOrSubClassJoiSchema), Joi.string().uri()),
    gtin: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
    gtin12: Joi.string(),
    gtin13: Joi.string(),
    gtin14: Joi.string(),
    gtin8: Joi.string(),
    hasAdultConsideration: Joi.lazy(() => schema.AdultOrientedEnumerationJoiSchema),
    hasCertification: Joi.alternatives().try(Joi.lazy(() => schema.CertificationOrSubClassJoiSchema), Joi.string().uri()),
    hasDigitalProductPassport: Joi.alternatives().try(Joi.lazy(() => schema.DigitalProductPassportOrSubClassJoiSchema), Joi.string().uri()),
    hasEnergyConsumptionDetails: Joi.alternatives().try(Joi.lazy(() => schema.EnergyConsumptionDetailsOrSubClassJoiSchema), Joi.string().uri()),
    hasGS1DigitalLink: Joi.string().uri(),
    hasMeasurement: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    hasMerchantReturnPolicy: Joi.alternatives().try(Joi.lazy(() => schema.MerchantReturnPolicyOrSubClassJoiSchema), Joi.string().uri()),
    hasProductReturnPolicy: Joi.alternatives().try(Joi.lazy(() => schema.ProductReturnPolicyOrSubClassJoiSchema), Joi.string().uri()),
    height: Joi.alternatives().try(Joi.lazy(() => schema.DistanceOrSubClassJoiSchema), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    importer: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    inProductGroupWithID: Joi.string(),
    isAccessoryOrSparePartFor: Joi.alternatives().try(Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.string().uri()),
    isConsumableFor: Joi.alternatives().try(Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.string().uri()),
    isFamilyFriendly: Joi.boolean(),
    isOftenBoughtWith: Joi.alternatives().try(Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.string().uri()),
    isRelatedTo: Joi.alternatives().try(Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.lazy(() => schema.ServiceOrSubClassJoiSchema), Joi.string().uri()),
    isSimilarTo: Joi.alternatives().try(Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.lazy(() => schema.ServiceOrSubClassJoiSchema), Joi.string().uri()),
    isVariantOf: Joi.alternatives().try(Joi.lazy(() => schema.ProductGroupOrSubClassJoiSchema), Joi.lazy(() => schema.ProductModelOrSubClassJoiSchema), Joi.string().uri()),
    itemCondition: Joi.lazy(() => schema.OfferItemConditionJoiSchema),
    keywords: Joi.alternatives().try(Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    logo: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
    manufacturer: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    material: Joi.alternatives().try(Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    mobileUrl: Joi.string(),
    model: Joi.alternatives().try(Joi.lazy(() => schema.ProductModelOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    mpn: Joi.string(),
    negativeNotes: Joi.alternatives().try(Joi.lazy(() => schema.ItemListOrSubClassJoiSchema), Joi.lazy(() => schema.ListItemOrSubClassJoiSchema), Joi.string(), Joi.lazy(() => schema.WebContentOrSubClassJoiSchema), Joi.string().uri()),
    nsn: Joi.string(),
    pattern: Joi.alternatives().try(Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    positiveNotes: Joi.alternatives().try(Joi.lazy(() => schema.ItemListOrSubClassJoiSchema), Joi.lazy(() => schema.ListItemOrSubClassJoiSchema), Joi.string(), Joi.lazy(() => schema.WebContentOrSubClassJoiSchema), Joi.string().uri()),
    productID: Joi.string(),
    productionDate: Joi.string().isoDate(),
    purchaseDate: Joi.string().isoDate(),
    recycledContentPercentage: Joi.number(),
    releaseDate: Joi.string().isoDate(),
    review: Joi.alternatives().try(Joi.lazy(() => schema.ReviewOrSubClassJoiSchema), Joi.string().uri()),
    reviews: Joi.alternatives().try(Joi.lazy(() => schema.ReviewOrSubClassJoiSchema), Joi.string().uri()),
    size: Joi.alternatives().try(Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.lazy(() => schema.SizeSpecificationOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    sku: Joi.string(),
    slogan: Joi.string(),
    specification: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri()),
    substanceOfConcern: Joi.alternatives().try(Joi.lazy(() => schema.ChemicalSubstanceOrSubClassJoiSchema), Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    weight: Joi.alternatives().try(Joi.lazy(() => schema.MassOrSubClassJoiSchema), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    width: Joi.alternatives().try(Joi.lazy(() => schema.DistanceOrSubClassJoiSchema), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    additionalType: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
    alternateName: Joi.string(),
    disambiguatingDescription: Joi.string(),
    mainEntityOfPage: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    owner: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    potentialAction: Joi.alternatives().try(Joi.lazy(() => schema.ActionOrSubClassJoiSchema), Joi.string().uri()),
    sameAs: Joi.string().uri(),
    subjectOf: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.string().uri()),
});
/**
 * IndividualFacilityUse - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/Product, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from IndividualFacilityUseJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.IndividualFacilityUseOrSubClassJoiSchema = Joi.alternatives().try([
    exports.IndividualFacilityUseJoiSchema,
]);
/**
 * Runtime validator for IndividualFacilityUse.
 *
 * If some data has a structure which matches a IndividualFacilityUse, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeIndividualFacilityUse = validateIndividualFacilityUse(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeIndividualFacilityUse instanceof OaValidationError) {
 *   // From this point on, `maybeIndividualFacilityUse` will have type `OaValidationError`
 *   const error = maybeIndividualFacilityUse;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeIndividualFacilityUse` will have type `IndividualFacilityUse`
 * const individualFacilityUse = maybeIndividualFacilityUse;
 * ```
 */
function validateIndividualFacilityUse(maybeIndividualFacilityUse) {
    const { value, error } = exports.IndividualFacilityUseJoiSchema.validate(maybeIndividualFacilityUse);
    if (error) {
        return new oaValidationError_1.OaValidationError('IndividualFacilityUse', maybeIndividualFacilityUse, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateIndividualFacilityUse = validateIndividualFacilityUse;
