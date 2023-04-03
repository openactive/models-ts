"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCustomerAccount = exports.CustomerAccountOrSubClassJoiSchema = exports.CustomerAccountJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const oa = require("../oa");
const schema = require("../schema");
/**
 * CustomerAccount - Validation schema (w/ JOI)
 *
 *
 *
 * EARLY RELEASE NOTICE: This class represents a draft that is designed to inform the OpenActive specification work with implementation feedback. IT IS STILL SUBJECT TO CHANGE, as the [Customer Accounts proposal](https://github.com/openactive/customer-accounts) evolves.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
exports.CustomerAccountJoiSchema = Joi.object({
    '@type': Joi.string().valid('CustomerAccount').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.string(),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    accessPass: Joi.array().items(Joi.lazy(() => oa.BarcodeOrSubClassJoiSchema)),
    accountNumber: Joi.string(),
    customer: Joi.alternatives().try(Joi.lazy(() => oa.OrganizationOrSubClassJoiSchema), Joi.lazy(() => oa.PersonOrSubClassJoiSchema)),
    entitlement: Joi.array().items(Joi.lazy(() => oa.EntitlementOrSubClassJoiSchema)),
    hasHiddenEntitlements: Joi.boolean(),
    outstandingAction: Joi.array().items(Joi.lazy(() => oa.ActionOrSubClassJoiSchema)),
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
 * CustomerAccount - Validation schema (w/ JOI)
 *
 *
 *
 * EARLY RELEASE NOTICE: This class represents a draft that is designed to inform the OpenActive specification work with implementation feedback. IT IS STILL SUBJECT TO CHANGE, as the [Customer Accounts proposal](https://github.com/openactive/customer-accounts) evolves.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from CustomerAccountJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.CustomerAccountOrSubClassJoiSchema = Joi.alternatives().try([
    exports.CustomerAccountJoiSchema,
]);
/**
 * Runtime validator for CustomerAccount.
 *
 * If some data has a structure which matches a CustomerAccount, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeCustomerAccount = validateCustomerAccount(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeCustomerAccount instanceof OaValidationError) {
 *   // From this point on, `maybeCustomerAccount` will have type `OaValidationError`
 *   const error = maybeCustomerAccount;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeCustomerAccount` will have type `CustomerAccount`
 * const customerAccount = maybeCustomerAccount;
 * ```
 */
function validateCustomerAccount(maybeCustomerAccount) {
    const { value, error } = exports.CustomerAccountJoiSchema.validate(maybeCustomerAccount);
    if (error) {
        return new oaValidationError_1.OaValidationError('CustomerAccount', maybeCustomerAccount, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateCustomerAccount = validateCustomerAccount;
