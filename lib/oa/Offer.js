"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateOffer = exports.OfferOrSubClassJoiSchema = exports.OfferJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const oa = require("../oa");
const schema = require("../schema");
/**
 * Offer - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/Offer, which means that any of this type's properties within schema.org may also be used.
 */
exports.OfferJoiSchema = Joi.object({
    '@type': Joi.string().valid('Offer').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.number().integer(), Joi.string(), Joi.lazy(() => oa.PropertyValueOrSubClassJoiSchema), Joi.array().items(Joi.lazy(() => oa.PropertyValueOrSubClassJoiSchema))),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    acceptedPaymentMethod: Joi.array().items(Joi.lazy(() => oa.PaymentMethodJoiSchema)),
    ageRange: Joi.lazy(() => oa.QuantitativeValueOrSubClassJoiSchema),
    ageRestriction: Joi.lazy(() => oa.QuantitativeValueOrSubClassJoiSchema),
    allowCustomerCancellationFullRefund: Joi.boolean(),
    eligibleEntitlementType: Joi.array().items(Joi.lazy(() => oa.ConceptOrSubClassJoiSchema)),
    latestCancellationBeforeStartDate: Joi.string(),
    openBookingFlowRequirement: Joi.array().items(Joi.lazy(() => oa.OpenBookingFlowRequirementJoiSchema)),
    openBookingInAdvance: Joi.lazy(() => oa.RequiredStatusTypeJoiSchema),
    openBookingPrepayment: Joi.lazy(() => oa.RequiredStatusTypeJoiSchema),
    price: Joi.number(),
    priceCurrency: Joi.string(),
    url: Joi.string().uri(),
    validFromBeforeStartDate: Joi.string(),
    validThroughBeforeStartDate: Joi.string(),
    'beta:partySize': Joi.lazy(() => oa.QuantitativeValueOrSubClassJoiSchema),
    hasMeasurement: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    includesObject: Joi.alternatives().try(Joi.lazy(() => schema.TypeAndQuantityNodeOrSubClassJoiSchema), Joi.string().uri()),
    areaServed: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.GeoShapeOrSubClassJoiSchema), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.lazy(() => schema.AdministrativeAreaOrSubClassJoiSchema), Joi.string().uri()),
    availableDeliveryMethod: Joi.lazy(() => schema.DeliveryMethodJoiSchema),
    serialNumber: Joi.string(),
    gtin13: Joi.string(),
    priceValidUntil: Joi.string().isoDate(),
    aggregateRating: Joi.alternatives().try(Joi.lazy(() => schema.AggregateRatingOrSubClassJoiSchema), Joi.string().uri()),
    eligibleCustomerType: Joi.lazy(() => schema.BusinessEntityTypeJoiSchema),
    availability: Joi.lazy(() => schema.ItemAvailabilityJoiSchema),
    gtin8: Joi.string(),
    leaseLength: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    eligibleTransactionVolume: Joi.alternatives().try(Joi.lazy(() => schema.PriceSpecificationOrSubClassJoiSchema), Joi.string().uri()),
    businessFunction: Joi.lazy(() => schema.BusinessFunctionJoiSchema),
    eligibleDuration: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    category: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.PhysicalActivityCategoryJoiSchema), Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
    hasMerchantReturnPolicy: Joi.alternatives().try(Joi.lazy(() => schema.MerchantReturnPolicyOrSubClassJoiSchema), Joi.string().uri()),
    availabilityStarts: Joi.alternatives().try(Joi.string().isoDate(), Joi.string()),
    eligibleRegion: Joi.alternatives().try(Joi.lazy(() => schema.GeoShapeOrSubClassJoiSchema), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    seller: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    warranty: Joi.alternatives().try(Joi.lazy(() => schema.WarrantyPromiseOrSubClassJoiSchema), Joi.string().uri()),
    deliveryLeadTime: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    mpn: Joi.string(),
    gtin12: Joi.string(),
    availableAtOrFrom: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    offeredBy: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    validFrom: Joi.string().isoDate(),
    itemOffered: Joi.alternatives().try(Joi.lazy(() => schema.TripOrSubClassJoiSchema), Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.lazy(() => schema.AggregateOfferOrSubClassJoiSchema), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.lazy(() => schema.ServiceOrSubClassJoiSchema), Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.lazy(() => schema.MenuItemOrSubClassJoiSchema), Joi.string().uri()),
    gtin14: Joi.string(),
    availabilityEnds: Joi.alternatives().try(Joi.string(), Joi.string().isoDate()),
    validThrough: Joi.string().isoDate(),
    addOn: Joi.alternatives().try(Joi.lazy(() => schema.OfferOrSubClassJoiSchema), Joi.string().uri()),
    reviews: Joi.alternatives().try(Joi.lazy(() => schema.ReviewOrSubClassJoiSchema), Joi.string().uri()),
    sku: Joi.string(),
    gtin: Joi.string(),
    review: Joi.alternatives().try(Joi.lazy(() => schema.ReviewOrSubClassJoiSchema), Joi.string().uri()),
    itemCondition: Joi.lazy(() => schema.OfferItemConditionJoiSchema),
    inventoryLevel: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    advanceBookingRequirement: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    priceSpecification: Joi.alternatives().try(Joi.lazy(() => schema.PriceSpecificationOrSubClassJoiSchema), Joi.string().uri()),
    ineligibleRegion: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.lazy(() => schema.GeoShapeOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    eligibleQuantity: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    shippingDetails: Joi.alternatives().try(Joi.lazy(() => schema.OfferShippingDetailsOrSubClassJoiSchema), Joi.string().uri()),
    mainEntityOfPage: Joi.alternatives().try(Joi.string().uri(), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema)),
    additionalType: Joi.string().uri(),
    alternateName: Joi.string(),
    sameAs: Joi.string().uri(),
    potentialAction: Joi.alternatives().try(Joi.lazy(() => schema.ActionOrSubClassJoiSchema), Joi.string().uri()),
    subjectOf: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    disambiguatingDescription: Joi.string(),
    image: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
});
/**
 * Offer - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/Offer, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from OfferJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.OfferOrSubClassJoiSchema = Joi.alternatives().try([
    exports.OfferJoiSchema,
    Joi.lazy(() => oa.OfferOverrideOrSubClassJoiSchema),
    Joi.lazy(() => oa.IndicativeOfferOrSubClassJoiSchema),
]);
/**
 * Runtime validator for Offer.
 *
 * If some data has a structure which matches a Offer, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeOffer = validateOffer(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeOffer instanceof OaValidationError) {
 *   // From this point on, `maybeOffer` will have type `OaValidationError`
 *   const error = maybeOffer;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeOffer` will have type `Offer`
 * const offer = maybeOffer;
 * ```
 */
function validateOffer(maybeOffer) {
    const { value, error } = exports.OfferJoiSchema.validate(maybeOffer);
    if (error) {
        return new oaValidationError_1.OaValidationError('Offer', maybeOffer, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateOffer = validateOffer;
