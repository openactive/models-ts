"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePaymentCard = exports.PaymentCardOrSubClassJoiSchema = exports.PaymentCardJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:PaymentCard - Validation schema (w/ JOI)
 */
exports.PaymentCardJoiSchema = Joi.object({
    '@type': Joi.string().valid('PaymentCard').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    cashBack: Joi.alternatives().try(Joi.number(), Joi.boolean()),
    monthlyMinimumRepaymentAmount: Joi.alternatives().try(Joi.lazy(() => schema.MonetaryAmountOrSubClassJoiSchema), Joi.number(), Joi.string().uri()),
    floorLimit: Joi.alternatives().try(Joi.lazy(() => schema.MonetaryAmountOrSubClassJoiSchema), Joi.string().uri()),
    contactlessPayment: Joi.boolean(),
    feesAndCommissionsSpecification: Joi.alternatives().try(Joi.string().uri(), Joi.string()),
    interestRate: Joi.alternatives().try(Joi.number(), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
    annualPercentageRate: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.number(), Joi.string().uri()),
    aggregateRating: Joi.alternatives().try(Joi.lazy(() => schema.AggregateRatingOrSubClassJoiSchema), Joi.string().uri()),
    serviceOutput: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
    isSimilarTo: Joi.alternatives().try(Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.lazy(() => schema.ServiceOrSubClassJoiSchema), Joi.string().uri()),
    offers: Joi.alternatives().try(Joi.lazy(() => schema.OfferOrSubClassJoiSchema), Joi.lazy(() => schema.DemandOrSubClassJoiSchema), Joi.string().uri()),
    broker: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    termsOfService: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
    award: Joi.string(),
    provider: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    review: Joi.alternatives().try(Joi.lazy(() => schema.ReviewOrSubClassJoiSchema), Joi.string().uri()),
    areaServed: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.lazy(() => schema.AdministrativeAreaOrSubClassJoiSchema), Joi.lazy(() => schema.GeoShapeOrSubClassJoiSchema), Joi.string().uri()),
    serviceAudience: Joi.alternatives().try(Joi.lazy(() => schema.AudienceOrSubClassJoiSchema), Joi.string().uri()),
    hasOfferCatalog: Joi.alternatives().try(Joi.lazy(() => schema.OfferCatalogOrSubClassJoiSchema), Joi.string().uri()),
    produces: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
    logo: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
    availableChannel: Joi.alternatives().try(Joi.lazy(() => schema.ServiceChannelOrSubClassJoiSchema), Joi.string().uri()),
    category: Joi.alternatives().try(Joi.lazy(() => schema.PhysicalActivityCategoryJoiSchema), Joi.string(), Joi.string().uri(), Joi.lazy(() => schema.ThingOrSubClassJoiSchema)),
    serviceType: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.GovernmentBenefitsTypeJoiSchema)),
    slogan: Joi.string(),
    hoursAvailable: Joi.alternatives().try(Joi.lazy(() => schema.OpeningHoursSpecificationOrSubClassJoiSchema), Joi.string().uri()),
    serviceArea: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.lazy(() => schema.AdministrativeAreaOrSubClassJoiSchema), Joi.lazy(() => schema.GeoShapeOrSubClassJoiSchema), Joi.string().uri()),
    brand: Joi.alternatives().try(Joi.lazy(() => schema.BrandOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    audience: Joi.alternatives().try(Joi.lazy(() => schema.AudienceOrSubClassJoiSchema), Joi.string().uri()),
    isRelatedTo: Joi.alternatives().try(Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.lazy(() => schema.ServiceOrSubClassJoiSchema), Joi.string().uri()),
    providerMobility: Joi.string(),
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
 * schema:PaymentCard - Validation schema (w/ JOI)
 *
 * This differs from PaymentCardJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.PaymentCardOrSubClassJoiSchema = Joi.alternatives().try([
    exports.PaymentCardJoiSchema,
    Joi.lazy(() => schema.CreditCardOrSubClassJoiSchema),
]);
/**
 * Runtime validator for schema:PaymentCard.
 *
 * If some data has a structure which matches a schema:PaymentCard, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybePaymentCard = validatePaymentCard(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybePaymentCard instanceof OaValidationError) {
 *   // From this point on, `maybePaymentCard` will have type `OaValidationError`
 *   const error = maybePaymentCard;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybePaymentCard` will have type `PaymentCard`
 * const paymentCard = maybePaymentCard;
 * ```
 */
function validatePaymentCard(maybePaymentCard) {
    const { value, error } = exports.PaymentCardJoiSchema.validate(maybePaymentCard);
    if (error) {
        return new oaValidationError_1.OaValidationError('PaymentCard', maybePaymentCard, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validatePaymentCard = validatePaymentCard;
