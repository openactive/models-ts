"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateOrderProposal = exports.OrderProposalOrSubClassJoiSchema = exports.OrderProposalJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const oa = require("../oa");
const schema = require("../schema");
/**
 * OrderProposal - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/Order, which means that any of this type's properties within schema.org may also be used.
 */
exports.OrderProposalJoiSchema = Joi.object({
    '@type': Joi.string().valid('OrderProposal').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.string(),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    bookingService: Joi.lazy(() => oa.BookingServiceOrSubClassJoiSchema),
    broker: Joi.lazy(() => oa.OrganizationOrSubClassJoiSchema),
    brokerRole: Joi.lazy(() => oa.BrokerTypeJoiSchema),
    customer: Joi.alternatives().try(Joi.lazy(() => oa.OrganizationOrSubClassJoiSchema), Joi.lazy(() => oa.PersonOrSubClassJoiSchema)),
    lease: Joi.lazy(() => oa.LeaseOrSubClassJoiSchema),
    orderCreationStatus: Joi.lazy(() => oa.OrderCreationStatusJoiSchema),
    orderCustomerNote: Joi.string(),
    orderedItem: Joi.array().items(Joi.lazy(() => oa.OrderItemOrSubClassJoiSchema)),
    orderNumber: Joi.string(),
    orderProposalStatus: Joi.lazy(() => oa.OrderProposalStatusJoiSchema),
    orderProposalVersion: Joi.string().uri(),
    orderSellerNote: Joi.string(),
    payment: Joi.lazy(() => oa.PaymentOrSubClassJoiSchema),
    seller: Joi.alternatives().try(Joi.lazy(() => oa.PersonOrSubClassJoiSchema), Joi.lazy(() => oa.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    taxCalculationExcluded: Joi.boolean(),
    totalPaymentDue: Joi.lazy(() => oa.PriceSpecificationOrSubClassJoiSchema),
    totalPaymentTax: Joi.array().items(Joi.lazy(() => oa.TaxChargeSpecificationOrSubClassJoiSchema)),
    orderDate: Joi.string().isoDate(),
    paymentDue: Joi.string().isoDate(),
    discount: Joi.alternatives().try(Joi.number(), Joi.string()),
    discountCode: Joi.string(),
    paymentMethodId: Joi.string(),
    orderDelivery: Joi.alternatives().try(Joi.lazy(() => schema.ParcelDeliveryOrSubClassJoiSchema), Joi.string().uri()),
    discountCurrency: Joi.string(),
    isGift: Joi.boolean(),
    billingAddress: Joi.alternatives().try(Joi.lazy(() => schema.PostalAddressOrSubClassJoiSchema), Joi.string().uri()),
    orderStatus: Joi.alternatives().try(Joi.lazy(() => schema.OrderStatusOrSubClassJoiSchema), Joi.string().uri()),
    partOfInvoice: Joi.alternatives().try(Joi.lazy(() => schema.InvoiceOrSubClassJoiSchema), Joi.string().uri()),
    paymentDueDate: Joi.string().isoDate(),
    confirmationNumber: Joi.string(),
    acceptedOffer: Joi.alternatives().try(Joi.lazy(() => schema.OfferOrSubClassJoiSchema), Joi.string().uri()),
    merchant: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    paymentUrl: Joi.string().uri(),
    paymentMethod: Joi.lazy(() => schema.PaymentMethodJoiSchema),
    mainEntityOfPage: Joi.alternatives().try(Joi.string().uri(), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema)),
    additionalType: Joi.string().uri(),
    url: Joi.string().uri(),
    alternateName: Joi.string(),
    sameAs: Joi.string().uri(),
    potentialAction: Joi.alternatives().try(Joi.lazy(() => schema.ActionOrSubClassJoiSchema), Joi.string().uri()),
    subjectOf: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    disambiguatingDescription: Joi.string(),
    image: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
});
/**
 * OrderProposal - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/Order, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from OrderProposalJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.OrderProposalOrSubClassJoiSchema = Joi.alternatives().try([
    exports.OrderProposalJoiSchema,
]);
/**
 * Runtime validator for OrderProposal.
 *
 * If some data has a structure which matches a OrderProposal, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeOrderProposal = validateOrderProposal(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeOrderProposal instanceof OaValidationError) {
 *   // From this point on, `maybeOrderProposal` will have type `OaValidationError`
 *   const error = maybeOrderProposal;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeOrderProposal` will have type `OrderProposal`
 * const orderProposal = maybeOrderProposal;
 * ```
 */
function validateOrderProposal(maybeOrderProposal) {
    const { value, error } = exports.OrderProposalJoiSchema.validate(maybeOrderProposal);
    if (error) {
        return new oaValidationError_1.OaValidationError('OrderProposal', maybeOrderProposal, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateOrderProposal = validateOrderProposal;
