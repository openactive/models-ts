import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * schema:DeliveryMethod
 *
 * A delivery method is a standardized procedure for transferring the product or service to the destination of fulfillment chosen by the customer. Delivery methods are characterized by the means of transportation used, and by the organization or group that is the contracting party for the sending organization or person.\n\nCommonly used values:\n\n* http://purl.org/goodrelations/v1#DeliveryModeDirectDownload\n* http://purl.org/goodrelations/v1#DeliveryModeFreight\n* http://purl.org/goodrelations/v1#DeliveryModeMail\n* http://purl.org/goodrelations/v1#DeliveryModeOwnFleet\n* http://purl.org/goodrelations/v1#DeliveryModePickUp\n* http://purl.org/goodrelations/v1#DHL\n* http://purl.org/goodrelations/v1#FederalExpress\n* http://purl.org/goodrelations/v1#UPS
 *
 *
 */
export declare type DeliveryMethod = 'https://schema.org/OnSitePickup' | 'https://schema.org/LockerDelivery' | 'https://schema.org/ParcelService';
/**
 * schema:DeliveryMethod - Validation schema (w/ JOI)
 *
 * A delivery method is a standardized procedure for transferring the product or service to the destination of fulfillment chosen by the customer. Delivery methods are characterized by the means of transportation used, and by the organization or group that is the contracting party for the sending organization or person.\n\nCommonly used values:\n\n* http://purl.org/goodrelations/v1#DeliveryModeDirectDownload\n* http://purl.org/goodrelations/v1#DeliveryModeFreight\n* http://purl.org/goodrelations/v1#DeliveryModeMail\n* http://purl.org/goodrelations/v1#DeliveryModeOwnFleet\n* http://purl.org/goodrelations/v1#DeliveryModePickUp\n* http://purl.org/goodrelations/v1#DHL\n* http://purl.org/goodrelations/v1#FederalExpress\n* http://purl.org/goodrelations/v1#UPS
 *
 *
 */
export declare const DeliveryMethodJoiSchema: Joi.StringSchema;
/**
 * Runtime validator for schema:DeliveryMethod.
 *
 * If some data has one of the values of the schema:DeliveryMethod enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeDeliveryMethod = validateDeliveryMethod(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeDeliveryMethod instanceof OaValidationError) {
 *   // From this point on, `maybeDeliveryMethod` will have type `OaValidationError`
 *   const error = maybeDeliveryMethod;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeDeliveryMethod` will have type `DeliveryMethod`
 * const deliveryMethod = maybeDeliveryMethod;
 * ```
 */
export declare function validateDeliveryMethod(maybeDeliveryMethod: unknown): DeliveryMethod | OaValidationError;
