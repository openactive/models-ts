"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateOrder = exports.OrderOrSubClassJoiSchema = exports.OrderJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const oa = require("../oa");
const schema = require("../schema");
/**
 * Order - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/Order, which means that any of this type's properties within schema.org may also be used.
 */
exports.OrderJoiSchema = Joi.object({
    '@type': Joi.string().valid('Order').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.string(),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    bookingService: Joi.lazy(() => oa.BookingServiceOrSubClassJoiSchema),
    broker: Joi.lazy(() => oa.OrganizationOrSubClassJoiSchema),
    brokerRole: Joi.lazy(() => oa.BrokerTypeJoiSchema),
    customer: Joi.alternatives().try(Joi.lazy(() => oa.OrganizationOrSubClassJoiSchema), Joi.lazy(() => oa.PersonOrSubClassJoiSchema)),
    orderCreationStatus: Joi.lazy(() => oa.OrderCreationStatusJoiSchema),
    orderedItem: Joi.array().items(Joi.lazy(() => oa.OrderItemOrSubClassJoiSchema)),
    orderNumber: Joi.string(),
    orderProposalVersion: Joi.string().uri(),
    payment: Joi.lazy(() => oa.PaymentOrSubClassJoiSchema),
    seller: Joi.alternatives().try(Joi.lazy(() => oa.PersonOrSubClassJoiSchema), Joi.lazy(() => oa.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    taxCalculationExcluded: Joi.boolean(),
    totalPaymentDue: Joi.lazy(() => oa.PriceSpecificationOrSubClassJoiSchema),
    totalPaymentTax: Joi.array().items(Joi.lazy(() => oa.TaxChargeSpecificationOrSubClassJoiSchema)),
    isGift: Joi.boolean(),
    orderDelivery: Joi.alternatives().try(Joi.lazy(() => schema.ParcelDeliveryOrSubClassJoiSchema), Joi.string().uri()),
    acceptedOffer: Joi.alternatives().try(Joi.lazy(() => schema.OfferOrSubClassJoiSchema), Joi.string().uri()),
    discountCurrency: Joi.string(),
    paymentDue: Joi.string().isoDate(),
    confirmationNumber: Joi.string(),
    paymentMethodId: Joi.string(),
    billingAddress: Joi.alternatives().try(Joi.lazy(() => schema.PostalAddressOrSubClassJoiSchema), Joi.string().uri()),
    paymentUrl: Joi.string().uri(),
    partOfInvoice: Joi.alternatives().try(Joi.lazy(() => schema.InvoiceOrSubClassJoiSchema), Joi.string().uri()),
    paymentDueDate: Joi.string().isoDate(),
    merchant: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    orderDate: Joi.string().isoDate(),
    paymentMethod: Joi.lazy(() => schema.PaymentMethodJoiSchema),
    discountCode: Joi.string(),
    orderStatus: Joi.alternatives().try(Joi.lazy(() => schema.OrderStatusOrSubClassJoiSchema), Joi.string().uri()),
    discount: Joi.alternatives().try(Joi.number(), Joi.string()),
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
 * Order - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/Order, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from OrderJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.OrderOrSubClassJoiSchema = Joi.alternatives().try([
    exports.OrderJoiSchema,
    Joi.lazy(() => oa.OrderQuoteOrSubClassJoiSchema),
]);
/**
 * Runtime validator for Order.
 *
 * If some data has a structure which matches a Order, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeOrder = validateOrder(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeOrder instanceof OaValidationError) {
 *   // From this point on, `maybeOrder` will have type `OaValidationError`
 *   const error = maybeOrder;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeOrder` will have type `Order`
 * const order = maybeOrder;
 * ```
 */
function validateOrder(maybeOrder) {
    const { value, error } = exports.OrderJoiSchema.validate(maybeOrder);
    if (error) {
        return new oaValidationError_1.OaValidationError('Order', maybeOrder, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateOrder = validateOrder;
