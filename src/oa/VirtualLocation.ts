// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * VirtualLocation
 *
 * This type is derived from https://pending.schema.org/VirtualLocation.
 */
export type VirtualLocation = {
  '@type': 'VirtualLocation';
  '@context'?: string | string[];
  /**
   * The name of the service that is providing remote access to the Opportunity.
   *
   * ```json
   * "name": "Zoom"
   * ```
   */
  name?: string;
  /**
   * A plain text description of the live stream, including any instructions to join. This description must not include HTML or other markup.
   *
   * ```json
   * "description": "Please log into Zoom a few minutes before the event, and mute your mic while you wait for the session to start."
   * ```
   */
  description?: string;
  /**
   * A unique url based identifier for the record
   */
  '@id'?: string;
  /**
   * The password or pin required to access the `VirtualLocation` from any device, without requiring the URL, e.g. the meeting password.
   *
   * ```json
   * "accessCode": "211277"
   * ```
   */
  accessCode?: string;
  /**
   * The identifier required to access the `VirtualLocation` from any device, without requiring the URL, e.g. the meeting ID.
   *
   * ```json
   * "accessId": "123456789"
   * ```
   */
  accessId?: string;
  /**
   * The URL that enables remote access to the Opportunity, which should include encoded access credentials where possible.
   *
   * ```json
   * "url": "https://zoom.us/room/3fbCs0GVjgQ"
   * ```
   */
  url?: string;
};

/**
 * VirtualLocation
 *
 * This type is derived from https://pending.schema.org/VirtualLocation.
 *
 * This differs from VirtualLocation because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type VirtualLocationOrSubClass =
  | VirtualLocation
  ;

/**
 * VirtualLocation - Validation schema (w/ JOI)
 *
 * This type is derived from https://pending.schema.org/VirtualLocation.
 */
export const VirtualLocationJoiSchema = Joi.object({
  '@type': Joi.string().valid('VirtualLocation').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  name: Joi.string(),
  description: Joi.string(),
  '@id': Joi.string().uri(),
  accessCode: Joi.string(),
  accessId: Joi.string(),
  url: Joi.string().uri(),
});

/**
 * VirtualLocation - Validation schema (w/ JOI)
 *
 * This type is derived from https://pending.schema.org/VirtualLocation.
 *
 * This differs from VirtualLocationJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const VirtualLocationOrSubClassJoiSchema = Joi.alternatives().try([
  VirtualLocationJoiSchema,
]);

/**
 * Runtime validator for VirtualLocation.
 *
 * If some data has a structure which matches a VirtualLocation, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeVirtualLocation = validateVirtualLocation(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeVirtualLocation instanceof OaValidationError) {
 *   // From this point on, `maybeVirtualLocation` will have type `OaValidationError`
 *   const error = maybeVirtualLocation;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeVirtualLocation` will have type `VirtualLocation`
 * const virtualLocation = maybeVirtualLocation;
 * ```
 */
export function validateVirtualLocation(maybeVirtualLocation: unknown): VirtualLocation | OaValidationError {
  const { value, error } = VirtualLocationJoiSchema.validate(maybeVirtualLocation);
  if (error) {
    return new OaValidationError('VirtualLocation', maybeVirtualLocation, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as VirtualLocation;
}
