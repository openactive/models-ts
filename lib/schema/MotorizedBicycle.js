"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateMotorizedBicycle = exports.MotorizedBicycleOrSubClassJoiSchema = exports.MotorizedBicycleJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:MotorizedBicycle - Validation schema (w/ JOI)
 */
exports.MotorizedBicycleJoiSchema = Joi.object({
    '@type': Joi.string().valid('MotorizedBicycle').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    vehicleModelDate: Joi.string().isoDate(),
    payload: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    vehicleTransmission: Joi.alternatives().try(Joi.string().uri(), Joi.string(), Joi.lazy(() => schema.QualitativeValueJoiSchema)),
    numberOfDoors: Joi.alternatives().try(Joi.number(), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    modelDate: Joi.string().isoDate(),
    fuelEfficiency: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    fuelType: Joi.alternatives().try(Joi.lazy(() => schema.QualitativeValueJoiSchema), Joi.string().uri(), Joi.string()),
    bodyType: Joi.alternatives().try(Joi.string().uri(), Joi.string(), Joi.lazy(() => schema.QualitativeValueJoiSchema)),
    wheelbase: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    vehicleInteriorType: Joi.string(),
    tongueWeight: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    vehicleEngine: Joi.alternatives().try(Joi.lazy(() => schema.EngineSpecificationOrSubClassJoiSchema), Joi.string().uri()),
    dateVehicleFirstRegistered: Joi.string().isoDate(),
    speed: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    driveWheelConfiguration: Joi.alternatives().try(Joi.lazy(() => schema.DriveWheelConfigurationValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    seatingCapacity: Joi.alternatives().try(Joi.number(), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    fuelCapacity: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    cargoVolume: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    vehicleIdentificationNumber: Joi.string(),
    vehicleSpecialUsage: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.CarUsageTypeJoiSchema)),
    emissionsCO2: Joi.number(),
    vehicleSeatingCapacity: Joi.alternatives().try(Joi.number(), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    trailerWeight: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    numberOfPreviousOwners: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.number(), Joi.string().uri()),
    purchaseDate: Joi.string().isoDate(),
    knownVehicleDamages: Joi.string(),
    mileageFromOdometer: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    fuelConsumption: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    numberOfAxles: Joi.alternatives().try(Joi.number(), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    steeringPosition: Joi.alternatives().try(Joi.lazy(() => schema.SteeringPositionValueOrSubClassJoiSchema), Joi.string().uri()),
    accelerationTime: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    vehicleConfiguration: Joi.string(),
    numberOfAirbags: Joi.alternatives().try(Joi.number(), Joi.string()),
    weightTotal: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    meetsEmissionStandard: Joi.alternatives().try(Joi.string().uri(), Joi.string(), Joi.lazy(() => schema.QualitativeValueJoiSchema)),
    productionDate: Joi.string().isoDate(),
    callSign: Joi.string(),
    vehicleInteriorColor: Joi.string(),
    numberOfForwardGears: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.number(), Joi.string().uri()),
    hasMeasurement: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    itemCondition: Joi.lazy(() => schema.OfferItemConditionJoiSchema),
    aggregateRating: Joi.alternatives().try(Joi.lazy(() => schema.AggregateRatingOrSubClassJoiSchema), Joi.string().uri()),
    size: Joi.alternatives().try(Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.lazy(() => schema.SizeSpecificationOrSubClassJoiSchema), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    depth: Joi.alternatives().try(Joi.lazy(() => schema.DistanceOrSubClassJoiSchema), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    height: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.lazy(() => schema.DistanceOrSubClassJoiSchema), Joi.string().uri()),
    gtin12: Joi.string(),
    isSimilarTo: Joi.alternatives().try(Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.lazy(() => schema.ServiceOrSubClassJoiSchema), Joi.string().uri()),
    weight: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    hasMerchantReturnPolicy: Joi.alternatives().try(Joi.lazy(() => schema.MerchantReturnPolicyOrSubClassJoiSchema), Joi.string().uri()),
    offers: Joi.alternatives().try(Joi.lazy(() => schema.OfferOrSubClassJoiSchema), Joi.lazy(() => schema.DemandOrSubClassJoiSchema), Joi.string().uri()),
    width: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.lazy(() => schema.DistanceOrSubClassJoiSchema), Joi.string().uri()),
    isConsumableFor: Joi.alternatives().try(Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.string().uri()),
    reviews: Joi.alternatives().try(Joi.lazy(() => schema.ReviewOrSubClassJoiSchema), Joi.string().uri()),
    award: Joi.string(),
    gtin13: Joi.string(),
    gtin: Joi.string(),
    review: Joi.alternatives().try(Joi.lazy(() => schema.ReviewOrSubClassJoiSchema), Joi.string().uri()),
    hasEnergyConsumptionDetails: Joi.alternatives().try(Joi.lazy(() => schema.EnergyConsumptionDetailsOrSubClassJoiSchema), Joi.string().uri()),
    color: Joi.string(),
    additionalProperty: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri()),
    logo: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
    mpn: Joi.string(),
    inProductGroupWithID: Joi.string(),
    category: Joi.alternatives().try(Joi.lazy(() => schema.PhysicalActivityCategoryJoiSchema), Joi.string(), Joi.string().uri(), Joi.lazy(() => schema.ThingOrSubClassJoiSchema)),
    isVariantOf: Joi.alternatives().try(Joi.lazy(() => schema.ProductGroupOrSubClassJoiSchema), Joi.lazy(() => schema.ProductModelOrSubClassJoiSchema), Joi.string().uri()),
    slogan: Joi.string(),
    pattern: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string().uri()),
    sku: Joi.string(),
    nsn: Joi.string(),
    gtin14: Joi.string(),
    isAccessoryOrSparePartFor: Joi.alternatives().try(Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.string().uri()),
    manufacturer: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    model: Joi.alternatives().try(Joi.lazy(() => schema.ProductModelOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    brand: Joi.alternatives().try(Joi.lazy(() => schema.BrandOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    releaseDate: Joi.string().isoDate(),
    gtin8: Joi.string(),
    material: Joi.alternatives().try(Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    awards: Joi.string(),
    audience: Joi.alternatives().try(Joi.lazy(() => schema.AudienceOrSubClassJoiSchema), Joi.string().uri()),
    isRelatedTo: Joi.alternatives().try(Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.lazy(() => schema.ServiceOrSubClassJoiSchema), Joi.string().uri()),
    productID: Joi.string(),
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
 * schema:MotorizedBicycle - Validation schema (w/ JOI)
 *
 * This differs from MotorizedBicycleJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.MotorizedBicycleOrSubClassJoiSchema = Joi.alternatives().try([
    exports.MotorizedBicycleJoiSchema,
]);
/**
 * Runtime validator for schema:MotorizedBicycle.
 *
 * If some data has a structure which matches a schema:MotorizedBicycle, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMotorizedBicycle = MotorizedBicycle.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMotorizedBicycle instanceof OaValidationError) {
 *   // From this point on, `maybeMotorizedBicycle` will have type `OaValidationError`
 *   const error = maybeMotorizedBicycle;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMotorizedBicycle` will have type `MotorizedBicycle`
 * const motorizedBicycle = maybeMotorizedBicycle;
 * ```
 */
function validateMotorizedBicycle(maybeMotorizedBicycle) {
    const { value, error } = exports.MotorizedBicycleJoiSchema.validate(maybeMotorizedBicycle);
    if (error) {
        return new oaValidationError_1.OaValidationError('MotorizedBicycle', maybeMotorizedBicycle, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateMotorizedBicycle = validateMotorizedBicycle;
