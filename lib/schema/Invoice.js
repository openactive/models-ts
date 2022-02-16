"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateInvoice = exports.InvoiceOrSubClassJoiSchema = exports.InvoiceJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:Invoice - Validation schema (w/ JOI)
 */
exports.InvoiceJoiSchema = Joi.object({
    '@type': Joi.string().valid('Invoice').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    paymentDue: Joi.string().isoDate(),
    paymentMethodId: Joi.string(),
    accountId: Joi.string(),
    billingPeriod: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
    category: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.PhysicalActivityCategoryJoiSchema), Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
    paymentStatus: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.PaymentStatusTypeOrSubClassJoiSchema), Joi.string().uri()),
    customer: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    totalPaymentDue: Joi.alternatives().try(Joi.lazy(() => schema.MonetaryAmountOrSubClassJoiSchema), Joi.lazy(() => schema.PriceSpecificationOrSubClassJoiSchema), Joi.string().uri()),
    paymentDueDate: Joi.string().isoDate(),
    scheduledPaymentDate: Joi.string().isoDate(),
    referencesOrder: Joi.alternatives().try(Joi.lazy(() => schema.OrderOrSubClassJoiSchema), Joi.string().uri()),
    confirmationNumber: Joi.string(),
    minimumPaymentDue: Joi.alternatives().try(Joi.lazy(() => schema.MonetaryAmountOrSubClassJoiSchema), Joi.lazy(() => schema.PriceSpecificationOrSubClassJoiSchema), Joi.string().uri()),
    provider: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    paymentMethod: Joi.lazy(() => schema.PaymentMethodJoiSchema),
    broker: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
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
 * schema:Invoice - Validation schema (w/ JOI)
 *
 * This differs from InvoiceJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.InvoiceOrSubClassJoiSchema = Joi.alternatives().try([
    exports.InvoiceJoiSchema,
]);
/**
 * Runtime validator for schema:Invoice.
 *
 * If some data has a structure which matches a schema:Invoice, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeInvoice = validateInvoice(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeInvoice instanceof OaValidationError) {
 *   // From this point on, `maybeInvoice` will have type `OaValidationError`
 *   const error = maybeInvoice;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeInvoice` will have type `Invoice`
 * const invoice = maybeInvoice;
 * ```
 */
function validateInvoice(maybeInvoice) {
    const { value, error } = exports.InvoiceJoiSchema.validate(maybeInvoice);
    if (error) {
        return new oaValidationError_1.OaValidationError('Invoice', maybeInvoice, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateInvoice = validateInvoice;
