"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateOfferOverride = exports.OfferOverrideOrSubClassJoiSchema = exports.OfferOverrideJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const oa = require("../oa");
const schema = require("../schema");
/**
 * OfferOverride - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/Offer, which means that any of this type's properties within schema.org may also be used.
 */
exports.OfferOverrideJoiSchema = Joi.object({
    '@type': Joi.string().valid('OfferOverride').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.number().integer(), Joi.string(), Joi.lazy(() => oa.PropertyValueOrSubClassJoiSchema), Joi.array().items(Joi.lazy(() => oa.PropertyValueOrSubClassJoiSchema))),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    acceptedPaymentMethod: Joi.array().items(Joi.lazy(() => oa.PaymentMethodJoiSchema)),
    openBookingFlowRequirement: Joi.array().items(Joi.lazy(() => oa.OpenBookingFlowRequirementJoiSchema)),
    price: Joi.number(),
    priceCurrency: Joi.string(),
    url: Joi.string().uri(),
    'beta:partySize': Joi.lazy(() => oa.QuantitativeValueOrSubClassJoiSchema),
    availableDeliveryMethod: Joi.lazy(() => schema.DeliveryMethodJoiSchema),
    hasMeasurement: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    itemCondition: Joi.lazy(() => schema.OfferItemConditionJoiSchema),
    validFrom: Joi.string().isoDate(),
    aggregateRating: Joi.alternatives().try(Joi.lazy(() => schema.AggregateRatingOrSubClassJoiSchema), Joi.string().uri()),
    addOn: Joi.alternatives().try(Joi.lazy(() => schema.OfferOrSubClassJoiSchema), Joi.string().uri()),
    seller: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    gtin12: Joi.string(),
    leaseLength: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    eligibleRegion: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.GeoShapeOrSubClassJoiSchema), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    warranty: Joi.alternatives().try(Joi.lazy(() => schema.WarrantyPromiseOrSubClassJoiSchema), Joi.string().uri()),
    availabilityEnds: Joi.alternatives().try(Joi.string().isoDate(), Joi.string()),
    deliveryLeadTime: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    eligibleDuration: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    availabilityStarts: Joi.alternatives().try(Joi.string().isoDate(), Joi.string()),
    serialNumber: Joi.string(),
    reviews: Joi.alternatives().try(Joi.lazy(() => schema.ReviewOrSubClassJoiSchema), Joi.string().uri()),
    priceSpecification: Joi.alternatives().try(Joi.lazy(() => schema.PriceSpecificationOrSubClassJoiSchema), Joi.string().uri()),
    eligibleTransactionVolume: Joi.alternatives().try(Joi.lazy(() => schema.PriceSpecificationOrSubClassJoiSchema), Joi.string().uri()),
    gtin13: Joi.string(),
    gtin: Joi.string(),
    review: Joi.alternatives().try(Joi.lazy(() => schema.ReviewOrSubClassJoiSchema), Joi.string().uri()),
    areaServed: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.lazy(() => schema.AdministrativeAreaOrSubClassJoiSchema), Joi.lazy(() => schema.GeoShapeOrSubClassJoiSchema), Joi.string().uri()),
    advanceBookingRequirement: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    itemOffered: Joi.alternatives().try(Joi.lazy(() => schema.TripOrSubClassJoiSchema), Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.lazy(() => schema.MenuItemOrSubClassJoiSchema), Joi.lazy(() => schema.ServiceOrSubClassJoiSchema), Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.lazy(() => schema.AggregateOfferOrSubClassJoiSchema), Joi.string().uri()),
    inventoryLevel: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    ineligibleRegion: Joi.alternatives().try(Joi.lazy(() => schema.GeoShapeOrSubClassJoiSchema), Joi.string(), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    mpn: Joi.string(),
    includesObject: Joi.alternatives().try(Joi.lazy(() => schema.TypeAndQuantityNodeOrSubClassJoiSchema), Joi.string().uri()),
    category: Joi.alternatives().try(Joi.lazy(() => schema.PhysicalActivityCategoryJoiSchema), Joi.string(), Joi.string().uri(), Joi.lazy(() => schema.ThingOrSubClassJoiSchema)),
    availability: Joi.lazy(() => schema.ItemAvailabilityJoiSchema),
    sku: Joi.string(),
    eligibleCustomerType: Joi.lazy(() => schema.BusinessEntityTypeJoiSchema),
    priceValidUntil: Joi.string().isoDate(),
    offeredBy: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    gtin14: Joi.string(),
    eligibleQuantity: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    availableAtOrFrom: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    shippingDetails: Joi.alternatives().try(Joi.lazy(() => schema.OfferShippingDetailsOrSubClassJoiSchema), Joi.string().uri()),
    gtin8: Joi.string(),
    businessFunction: Joi.lazy(() => schema.BusinessFunctionJoiSchema),
    validThrough: Joi.string().isoDate(),
    sameAs: Joi.string().uri(),
    subjectOf: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    potentialAction: Joi.alternatives().try(Joi.lazy(() => schema.ActionOrSubClassJoiSchema), Joi.string().uri()),
    mainEntityOfPage: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    additionalType: Joi.string().uri(),
    alternateName: Joi.string(),
    image: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
    disambiguatingDescription: Joi.string(),
});
/**
 * OfferOverride - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/Offer, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from OfferOverrideJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.OfferOverrideOrSubClassJoiSchema = Joi.alternatives().try([
    exports.OfferOverrideJoiSchema,
]);
/**
 * Runtime validator for OfferOverride.
 *
 * If some data has a structure which matches a OfferOverride, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeOfferOverride = validateOfferOverride(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeOfferOverride instanceof OaValidationError) {
 *   // From this point on, `maybeOfferOverride` will have type `OaValidationError`
 *   const error = maybeOfferOverride;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeOfferOverride` will have type `OfferOverride`
 * const offerOverride = maybeOfferOverride;
 * ```
 */
function validateOfferOverride(maybeOfferOverride) {
    const { value, error } = exports.OfferOverrideJoiSchema.validate(maybeOfferOverride);
    if (error) {
        return new oaValidationError_1.OaValidationError('OfferOverride', maybeOfferOverride, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateOfferOverride = validateOfferOverride;
