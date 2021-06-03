"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTestOpportunityCriteriaEnumeration = exports.TestOpportunityCriteriaEnumerationJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
/**
 * test:TestOpportunityCriteriaEnumeration - Validation schema (w/ JOI)
 *
 * [NOTICE: This enumeration is part of the Open Booking API Test Interface, and MUST NOT be used in production.]
 *
 * An enumeration of test opportunity criteria to which an opportunity must conform.
 */
exports.TestOpportunityCriteriaEnumerationJoiSchema = Joi.string().valid('https://openactive.io/test-interface#TestOpportunityBookable', 'https://openactive.io/test-interface#TestOpportunityOpenBookingNotAllowed', 'https://openactive.io/test-interface#TestOpportunityBookableNoSpaces', 'https://openactive.io/test-interface#TestOpportunityBookableFiveSpaces', 'https://openactive.io/test-interface#TestOpportunityBookableFree', 'https://openactive.io/test-interface#TestOpportunityBookableNonFree', 'https://openactive.io/test-interface#TestOpportunityBookableUsingPayment', 'https://openactive.io/test-interface#TestOpportunityBookableWithinValidFromBeforeStartDate', 'https://openactive.io/test-interface#TestOpportunityBookableOutsideValidFromBeforeStartDate', 'https://openactive.io/test-interface#TestOpportunityBookableCancellable', 'https://openactive.io/test-interface#TestOpportunityBookableNotCancellable', 'https://openactive.io/test-interface#TestOpportunityBookableCancellableWithinWindow', 'https://openactive.io/test-interface#TestOpportunityBookableCancellableOutsideWindow', 'https://openactive.io/test-interface#TestOpportunityBookableWithinValidFromBeforeStartDateWindow', 'https://openactive.io/test-interface#TestOpportunityBookableOutsideValidFromBeforeStartDateWindow', 'https://openactive.io/test-interface#TestOpportunityBookableAttendeeDetails', 'https://openactive.io/test-interface#TestOpportunityBookableAdditionalDetails', 'https://openactive.io/test-interface#TestOpportunityBookableFreePrepaymentOptional', 'https://openactive.io/test-interface#TestOpportunityBookableNonFreePrepaymentOptional', 'https://openactive.io/test-interface#TestOpportunityBookableNonFreePrepaymentUnavailable', 'https://openactive.io/test-interface#TestOpportunityBookableFreePrepaymentRequired', 'https://openactive.io/test-interface#TestOpportunityBookableNonFreePrepaymentRequired', 'https://openactive.io/test-interface#TestOpportunityBookableNonFreeTaxGross', 'https://openactive.io/test-interface#TestOpportunityBookableNonFreeTaxNet', 'https://openactive.io/test-interface#TestOpportunityBookableSellerTermsOfService', 'https://openactive.io/test-interface#TestOpportunityOnlineBookable', 'https://openactive.io/test-interface#TestOpportunityOfflineBookable', 'https://openactive.io/test-interface#TestOpportunityBookableWithNegotiation');
/**
 * Runtime validator for test:TestOpportunityCriteriaEnumeration.
 *
 * If some data has one of the values of the test:TestOpportunityCriteriaEnumeration enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeTestOpportunityCriteriaEnumeration = validateTestOpportunityCriteriaEnumeration(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeTestOpportunityCriteriaEnumeration instanceof OaValidationError) {
 *   // From this point on, `maybeTestOpportunityCriteriaEnumeration` will have type `OaValidationError`
 *   const error = maybeTestOpportunityCriteriaEnumeration;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeTestOpportunityCriteriaEnumeration` will have type `TestOpportunityCriteriaEnumeration`
 * const testOpportunityCriteriaEnumeration = maybeTestOpportunityCriteriaEnumeration;
 * ```
 */
function validateTestOpportunityCriteriaEnumeration(maybeTestOpportunityCriteriaEnumeration) {
    const { value, error } = exports.TestOpportunityCriteriaEnumerationJoiSchema.validate(maybeTestOpportunityCriteriaEnumeration);
    if (error) {
        return new oaValidationError_1.OaValidationError('TestOpportunityCriteriaEnumeration', maybeTestOpportunityCriteriaEnumeration, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateTestOpportunityCriteriaEnumeration = validateTestOpportunityCriteriaEnumeration;
