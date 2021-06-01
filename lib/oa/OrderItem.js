"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateOrderItem = exports.OrderItemOrSubClassJoiSchema = exports.OrderItemJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const oa = require("../oa");
const schema = require("../schema");
/**
 * OrderItem - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/OrderItem, which means that any of this type's properties within schema.org may also be used.
 */
exports.OrderItemJoiSchema = Joi.object({
    '@type': Joi.string().valid('OrderItem').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    acceptedOffer: Joi.alternatives().try(Joi.lazy(() => oa.OfferOrSubClassJoiSchema), Joi.string().uri()),
    accessChannel: Joi.lazy(() => oa.VirtualLocationOrSubClassJoiSchema),
    accessCode: Joi.array().items(Joi.lazy(() => oa.PropertyValueOrSubClassJoiSchema)),
    accessPass: Joi.array().items(Joi.lazy(() => oa.ImageObjectOrSubClassJoiSchema)),
    attendee: Joi.lazy(() => oa.PersonOrSubClassJoiSchema),
    attendeeDetailsRequired: Joi.array().items(Joi.lazy(() => oa.PropertyEnumerationJoiSchema)),
    cancellationMessage: Joi.string(),
    customerNotice: Joi.string(),
    error: Joi.array().items(Joi.lazy(() => oa.OpenBookingErrorOrSubClassJoiSchema)),
    orderedItem: Joi.alternatives().try(Joi.lazy(() => oa.Event_OrSubClassJoiSchema), Joi.string().uri()),
    orderItemIntakeForm: Joi.array().items(Joi.lazy(() => oa.PropertyValueSpecificationOrSubClassJoiSchema)),
    orderItemIntakeFormResponse: Joi.array().items(Joi.lazy(() => oa.PropertyValueOrSubClassJoiSchema)),
    orderItemStatus: Joi.lazy(() => oa.OrderItemStatusJoiSchema),
    position: Joi.number().integer(),
    unitTaxSpecification: Joi.array().items(Joi.lazy(() => oa.TaxChargeSpecificationOrSubClassJoiSchema)),
    orderDelivery: Joi.alternatives().try(Joi.lazy(() => schema.ParcelDeliveryOrSubClassJoiSchema), Joi.string().uri()),
    orderItemNumber: Joi.string(),
    orderQuantity: Joi.number(),
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
 * OrderItem - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/OrderItem, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from OrderItemJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.OrderItemOrSubClassJoiSchema = Joi.alternatives().try([
    exports.OrderItemJoiSchema,
]);
/**
 * Runtime validator for OrderItem.
 *
 * If some data has a structure which matches a OrderItem, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeOrderItem = OrderItem.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeOrderItem instanceof OaValidationError) {
 *   // From this point on, `maybeOrderItem` will have type `OaValidationError`
 *   const error = maybeOrderItem;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeOrderItem` will have type `OrderItem`
 * const orderItem = maybeOrderItem;
 * ```
 */
function validateOrderItem(maybeOrderItem) {
    const { value, error } = exports.OrderItemJoiSchema.validate(maybeOrderItem);
    if (error) {
        return new oaValidationError_1.OaValidationError('OrderItem', maybeOrderItem, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateOrderItem = validateOrderItem;
