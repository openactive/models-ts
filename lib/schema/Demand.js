"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDemand = exports.DemandOrSubClassJoiSchema = exports.DemandJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:Demand - Validation schema (w/ JOI)
 */
exports.DemandJoiSchema = Joi.object({
    '@type': Joi.string().valid('Demand').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    availableDeliveryMethod: Joi.lazy(() => schema.DeliveryMethodJoiSchema),
    itemCondition: Joi.lazy(() => schema.OfferItemConditionJoiSchema),
    validFrom: Joi.string().isoDate(),
    seller: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    gtin12: Joi.string(),
    eligibleRegion: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.GeoShapeOrSubClassJoiSchema), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    warranty: Joi.alternatives().try(Joi.lazy(() => schema.WarrantyPromiseOrSubClassJoiSchema), Joi.string().uri()),
    availabilityEnds: Joi.alternatives().try(Joi.string().isoDate(), Joi.string()),
    deliveryLeadTime: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    eligibleDuration: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    availabilityStarts: Joi.alternatives().try(Joi.string().isoDate(), Joi.string()),
    serialNumber: Joi.string(),
    acceptedPaymentMethod: Joi.alternatives().try(Joi.lazy(() => schema.LoanOrCreditOrSubClassJoiSchema), Joi.lazy(() => schema.PaymentMethodJoiSchema), Joi.string().uri()),
    priceSpecification: Joi.alternatives().try(Joi.lazy(() => schema.PriceSpecificationOrSubClassJoiSchema), Joi.string().uri()),
    eligibleTransactionVolume: Joi.alternatives().try(Joi.lazy(() => schema.PriceSpecificationOrSubClassJoiSchema), Joi.string().uri()),
    gtin13: Joi.string(),
    gtin: Joi.string(),
    areaServed: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.lazy(() => schema.AdministrativeAreaOrSubClassJoiSchema), Joi.lazy(() => schema.GeoShapeOrSubClassJoiSchema), Joi.string().uri()),
    advanceBookingRequirement: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    itemOffered: Joi.alternatives().try(Joi.lazy(() => schema.TripOrSubClassJoiSchema), Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.lazy(() => schema.MenuItemOrSubClassJoiSchema), Joi.lazy(() => schema.ServiceOrSubClassJoiSchema), Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.lazy(() => schema.AggregateOfferOrSubClassJoiSchema), Joi.string().uri()),
    inventoryLevel: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    ineligibleRegion: Joi.alternatives().try(Joi.lazy(() => schema.GeoShapeOrSubClassJoiSchema), Joi.string(), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    mpn: Joi.string(),
    includesObject: Joi.alternatives().try(Joi.lazy(() => schema.TypeAndQuantityNodeOrSubClassJoiSchema), Joi.string().uri()),
    availability: Joi.lazy(() => schema.ItemAvailabilityJoiSchema),
    sku: Joi.string(),
    eligibleCustomerType: Joi.lazy(() => schema.BusinessEntityTypeJoiSchema),
    gtin14: Joi.string(),
    eligibleQuantity: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    availableAtOrFrom: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    gtin8: Joi.string(),
    businessFunction: Joi.lazy(() => schema.BusinessFunctionJoiSchema),
    validThrough: Joi.string().isoDate(),
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
 * schema:Demand - Validation schema (w/ JOI)
 *
 * This differs from DemandJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.DemandOrSubClassJoiSchema = Joi.alternatives().try([
    exports.DemandJoiSchema,
]);
/**
 * Runtime validator for schema:Demand.
 *
 * If some data has a structure which matches a schema:Demand, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeDemand = validateDemand(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeDemand instanceof OaValidationError) {
 *   // From this point on, `maybeDemand` will have type `OaValidationError`
 *   const error = maybeDemand;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeDemand` will have type `Demand`
 * const demand = maybeDemand;
 * ```
 */
function validateDemand(maybeDemand) {
    const { value, error } = exports.DemandJoiSchema.validate(maybeDemand);
    if (error) {
        return new oaValidationError_1.OaValidationError('Demand', maybeDemand, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateDemand = validateDemand;
