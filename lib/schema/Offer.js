"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateOffer = exports.OfferOrSubClassJoiSchema = exports.OfferJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:Offer - Validation schema (w/ JOI)
 */
exports.OfferJoiSchema = Joi.object({
    '@type': Joi.string().valid('Offer').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.TextObjectOrSubClassJoiSchema), Joi.string().uri()),
    '@id': Joi.string().uri(),
    acceptedPaymentMethod: Joi.alternatives().try(Joi.lazy(() => schema.LoanOrCreditOrSubClassJoiSchema), Joi.lazy(() => schema.PaymentMethodOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    addOn: Joi.alternatives().try(Joi.lazy(() => schema.OfferOrSubClassJoiSchema), Joi.string().uri()),
    additionalProperty: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri()),
    advanceBookingRequirement: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    aggregateRating: Joi.alternatives().try(Joi.lazy(() => schema.AggregateRatingOrSubClassJoiSchema), Joi.string().uri()),
    areaServed: Joi.alternatives().try(Joi.lazy(() => schema.AdministrativeAreaOrSubClassJoiSchema), Joi.lazy(() => schema.GeoShapeOrSubClassJoiSchema), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    asin: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
    availability: Joi.lazy(() => schema.ItemAvailabilityJoiSchema),
    availabilityEnds: Joi.alternatives().try(Joi.string().isoDate(), Joi.string()),
    availabilityStarts: Joi.alternatives().try(Joi.string().isoDate(), Joi.string()),
    availableAtOrFrom: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    availableDeliveryMethod: Joi.lazy(() => schema.DeliveryMethodJoiSchema),
    businessFunction: Joi.lazy(() => schema.BusinessFunctionJoiSchema),
    category: Joi.alternatives().try(Joi.lazy(() => schema.CategoryCodeOrSubClassJoiSchema), Joi.lazy(() => schema.PhysicalActivityCategoryJoiSchema), Joi.string(), Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
    checkoutPageURLTemplate: Joi.string(),
    deliveryLeadTime: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    eligibleCustomerType: Joi.lazy(() => schema.BusinessEntityTypeJoiSchema),
    eligibleDuration: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    eligibleQuantity: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    eligibleRegion: Joi.alternatives().try(Joi.lazy(() => schema.GeoShapeOrSubClassJoiSchema), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    eligibleTransactionVolume: Joi.alternatives().try(Joi.lazy(() => schema.PriceSpecificationOrSubClassJoiSchema), Joi.string().uri()),
    gtin: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
    gtin12: Joi.string(),
    gtin13: Joi.string(),
    gtin14: Joi.string(),
    gtin8: Joi.string(),
    hasAdultConsideration: Joi.lazy(() => schema.AdultOrientedEnumerationJoiSchema),
    hasDigitalProductPassport: Joi.alternatives().try(Joi.lazy(() => schema.DigitalProductPassportOrSubClassJoiSchema), Joi.string().uri()),
    hasGS1DigitalLink: Joi.string().uri(),
    hasMeasurement: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    hasMerchantReturnPolicy: Joi.alternatives().try(Joi.lazy(() => schema.MerchantReturnPolicyOrSubClassJoiSchema), Joi.string().uri()),
    includesObject: Joi.alternatives().try(Joi.lazy(() => schema.TypeAndQuantityNodeOrSubClassJoiSchema), Joi.string().uri()),
    ineligibleRegion: Joi.alternatives().try(Joi.lazy(() => schema.GeoShapeOrSubClassJoiSchema), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    inventoryLevel: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    isFamilyFriendly: Joi.boolean(),
    itemCondition: Joi.lazy(() => schema.OfferItemConditionJoiSchema),
    itemOffered: Joi.alternatives().try(Joi.lazy(() => schema.AggregateOfferOrSubClassJoiSchema), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.lazy(() => schema.MenuItemOrSubClassJoiSchema), Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.lazy(() => schema.ServiceOrSubClassJoiSchema), Joi.lazy(() => schema.TripOrSubClassJoiSchema), Joi.string().uri()),
    itemPopularity: Joi.alternatives().try(Joi.number(), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    leaseLength: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    mobileUrl: Joi.string(),
    mpn: Joi.string(),
    offeredBy: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    price: Joi.alternatives().try(Joi.number(), Joi.string()),
    priceCurrency: Joi.string(),
    priceSpecification: Joi.alternatives().try(Joi.lazy(() => schema.PriceSpecificationOrSubClassJoiSchema), Joi.string().uri()),
    priceValidUntil: Joi.string().isoDate(),
    review: Joi.alternatives().try(Joi.lazy(() => schema.ReviewOrSubClassJoiSchema), Joi.string().uri()),
    reviews: Joi.alternatives().try(Joi.lazy(() => schema.ReviewOrSubClassJoiSchema), Joi.string().uri()),
    seller: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    serialNumber: Joi.string(),
    shippingDetails: Joi.alternatives().try(Joi.lazy(() => schema.OfferShippingDetailsOrSubClassJoiSchema), Joi.string().uri()),
    sku: Joi.string(),
    validForMemberTier: Joi.alternatives().try(Joi.lazy(() => schema.MemberProgramTierOrSubClassJoiSchema), Joi.string().uri()),
    validFrom: Joi.string().isoDate(),
    validThrough: Joi.string().isoDate(),
    warranty: Joi.alternatives().try(Joi.lazy(() => schema.WarrantyPromiseOrSubClassJoiSchema), Joi.string().uri()),
    additionalType: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
    alternateName: Joi.string(),
    disambiguatingDescription: Joi.string(),
    image: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
    mainEntityOfPage: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    owner: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    potentialAction: Joi.alternatives().try(Joi.lazy(() => schema.ActionOrSubClassJoiSchema), Joi.string().uri()),
    sameAs: Joi.string().uri(),
    subjectOf: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.string().uri()),
    url: Joi.string().uri(),
});
/**
 * schema:Offer - Validation schema (w/ JOI)
 *
 * This differs from OfferJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.OfferOrSubClassJoiSchema = Joi.alternatives().try([
    exports.OfferJoiSchema,
    Joi.lazy(() => schema.AggregateOfferOrSubClassJoiSchema),
    Joi.lazy(() => schema.OfferForLeaseOrSubClassJoiSchema),
    Joi.lazy(() => schema.OfferForPurchaseOrSubClassJoiSchema),
]);
/**
 * Runtime validator for schema:Offer.
 *
 * If some data has a structure which matches a schema:Offer, it will be returned with the correct type.
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
