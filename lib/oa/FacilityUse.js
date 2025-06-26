"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateFacilityUse = exports.FacilityUseOrSubClassJoiSchema = exports.FacilityUseJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const oa = require("../oa");
const schema = require("../schema");
/**
 * FacilityUse - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/Product, which means that any of this type's properties within schema.org may also be used.
 */
exports.FacilityUseJoiSchema = Joi.object({
    '@type': Joi.string().valid('FacilityUse').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.number().integer(), Joi.string(), Joi.lazy(() => oa.PropertyValueOrSubClassJoiSchema), Joi.array().items(Joi.lazy(() => oa.PropertyValueOrSubClassJoiSchema))),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    accessibilityInformation: Joi.string(),
    accessibilitySupport: Joi.array().items(Joi.lazy(() => oa.ConceptOrSubClassJoiSchema)),
    activity: Joi.array().items(Joi.lazy(() => oa.ConceptOrSubClassJoiSchema)),
    additionalAdmissionRestriction: Joi.array().items(Joi.string()),
    attendeeInstructions: Joi.string(),
    category: Joi.alternatives().try(Joi.array().items(Joi.string()), Joi.array().items(Joi.lazy(() => oa.ConceptOrSubClassJoiSchema))),
    customerAccountBookingRestriction: Joi.array().items(Joi.string()),
    event: Joi.array().items(Joi.lazy(() => oa.SlotOrSubClassJoiSchema)),
    facilityType: Joi.array().items(Joi.lazy(() => oa.ConceptOrSubClassJoiSchema)),
    hoursAvailable: Joi.array().items(Joi.lazy(() => oa.OpeningHoursSpecificationOrSubClassJoiSchema)),
    image: Joi.array().items(Joi.lazy(() => oa.ImageObjectOrSubClassJoiSchema)),
    individualFacilityUse: Joi.array().items(Joi.lazy(() => oa.IndividualFacilityUseOrSubClassJoiSchema)),
    isOpenBookingWithCustomerAccountAllowed: Joi.boolean(),
    location: Joi.lazy(() => oa.PlaceOrSubClassJoiSchema),
    offers: Joi.array().items(Joi.lazy(() => oa.OfferOrSubClassJoiSchema)),
    provider: Joi.lazy(() => oa.OrganizationOrSubClassJoiSchema),
    url: Joi.string().uri(),
    'beta:formattedDescription': Joi.string(),
    'beta:isWheelchairAccessible': Joi.boolean(),
    'beta:video': Joi.array().items(Joi.lazy(() => oa.VideoObjectOrSubClassJoiSchema)),
    'beta:sportsActivityLocation': Joi.array().items(Joi.lazy(() => schema.SportsActivityLocationOrSubClassJoiSchema)),
    'beta:offerValidityPeriod': Joi.string(),
    'beta:facilitySetting': Joi.lazy(() => oa.FacilitySettingTypeJoiSchema),
    'beta:bookingChannel': Joi.array().items(Joi.lazy(() => oa.BookingChannelTypeJoiSchema)),
    pattern: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string().uri()),
    hasMeasurement: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
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
    alternateName: Joi.string(),
    sameAs: Joi.string().uri(),
    potentialAction: Joi.alternatives().try(Joi.lazy(() => schema.ActionOrSubClassJoiSchema), Joi.string().uri()),
    subjectOf: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    disambiguatingDescription: Joi.string(),
});
/**
 * FacilityUse - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/Product, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from FacilityUseJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.FacilityUseOrSubClassJoiSchema = Joi.alternatives().try([
    exports.FacilityUseJoiSchema,
    Joi.lazy(() => oa.IndividualFacilityUseOrSubClassJoiSchema),
]);
/**
 * Runtime validator for FacilityUse.
 *
 * If some data has a structure which matches a FacilityUse, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeFacilityUse = validateFacilityUse(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeFacilityUse instanceof OaValidationError) {
 *   // From this point on, `maybeFacilityUse` will have type `OaValidationError`
 *   const error = maybeFacilityUse;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeFacilityUse` will have type `FacilityUse`
 * const facilityUse = maybeFacilityUse;
 * ```
 */
function validateFacilityUse(maybeFacilityUse) {
    const { value, error } = exports.FacilityUseJoiSchema.validate(maybeFacilityUse);
    if (error) {
        return new oaValidationError_1.OaValidationError('FacilityUse', maybeFacilityUse, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateFacilityUse = validateFacilityUse;
