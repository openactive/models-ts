// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * schema:FMRadioChannel
 */
export type FMRadioChannel = {
  '@type': 'FMRadioChannel';
  '@context'?: string | string[];
  /**
   * The identifier property represents any kind of identifier for any kind of [[Thing]], such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See [background notes](/docs/datamodel.html#identifierBg) for more details.
   *         
   */
  identifier?: schema.PropertyValueOrSubClass | string;
  /**
   * The name of the item.
   */
  name?: string;
  /**
   * A description of the item.
   */
  description?: string;
  /**
   * A unique url based identifier for the record
   */
  '@id'?: string;
  /**
   * The frequency used for over-the-air broadcasts. Numeric values or simple ranges e.g. 87-99. In addition a shortcut idiom is supported for frequences of AM and FM radio channels, e.g. "87 FM".
   */
  broadcastFrequency?: string | schema.BroadcastFrequencySpecificationOrSubClass;
  /**
   * The unique address by which the BroadcastService can be identified in a provider lineup. In US, this is typically a number.
   */
  broadcastChannelId?: string;
  /**
   * The type of service required to have access to the channel (e.g. Standard or Premium).
   */
  broadcastServiceTier?: string;
  /**
   * Genre of the creative work, broadcast channel or group.
   */
  genre?: string;
  /**
   * The CableOrSatelliteService offering the channel.
   */
  inBroadcastLineup?: schema.CableOrSatelliteServiceOrSubClass | string;
  /**
   * The BroadcastService offered on this channel.
   */
  providesBroadcastService?: schema.BroadcastServiceOrSubClass | string;
  /**
   * URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website.
   */
  sameAs?: string;
  /**
   * A CreativeWork or Event about this Thing.
   */
  subjectOf?: schema.Event_OrSubClass | schema.CreativeWorkOrSubClass | string;
  /**
   * Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role.
   */
  potentialAction?: schema.ActionOrSubClass | string;
  /**
   * Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See [background notes](/docs/datamodel.html#mainEntityBackground) for details.
   */
  mainEntityOfPage?: schema.CreativeWorkOrSubClass | string;
  /**
   * An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the 'typeof' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.
   */
  additionalType?: string;
  /**
   * An alias for the item.
   */
  alternateName?: string;
  /**
   * URL of the item.
   */
  url?: string;
  /**
   * An image of the item. This can be a [[URL]] or a fully described [[ImageObject]].
   */
  image?: schema.ImageObjectOrSubClass | string;
  /**
   * A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.
   */
  disambiguatingDescription?: string;
};

/**
 * schema:FMRadioChannel
 *
 * This differs from FMRadioChannel because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type FMRadioChannelOrSubClass =
  | FMRadioChannel
  ;

/**
 * schema:FMRadioChannel - Validation schema (w/ JOI)
 */
export const FMRadioChannelJoiSchema = Joi.object({
  '@type': Joi.string().valid('FMRadioChannel').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
  name: Joi.string(),
  description: Joi.string(),
  '@id': Joi.string().uri(),
  broadcastFrequency: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.BroadcastFrequencySpecificationOrSubClassJoiSchema), Joi.string().uri()),
  broadcastChannelId: Joi.string(),
  broadcastServiceTier: Joi.string(),
  genre: Joi.alternatives().try(Joi.string().uri(), Joi.string()),
  inBroadcastLineup: Joi.alternatives().try(Joi.lazy(() => schema.CableOrSatelliteServiceOrSubClassJoiSchema), Joi.string().uri()),
  providesBroadcastService: Joi.alternatives().try(Joi.lazy(() => schema.BroadcastServiceOrSubClassJoiSchema), Joi.string().uri()),
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
 * schema:FMRadioChannel - Validation schema (w/ JOI)
 *
 * This differs from FMRadioChannelJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const FMRadioChannelOrSubClassJoiSchema = Joi.alternatives().try([
  FMRadioChannelJoiSchema,
]);

/**
 * Runtime validator for schema:FMRadioChannel.
 *
 * If some data has a structure which matches a schema:FMRadioChannel, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeFMRadioChannel = FMRadioChannel.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeFMRadioChannel instanceof OaValidationError) {
 *   // From this point on, `maybeFMRadioChannel` will have type `OaValidationError`
 *   const error = maybeFMRadioChannel;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeFMRadioChannel` will have type `FMRadioChannel`
 * const fMRadioChannel = maybeFMRadioChannel;
 * ```
 */
export function validateFMRadioChannel(maybeFMRadioChannel: unknown): FMRadioChannel | OaValidationError {
  const { value, error } = FMRadioChannelJoiSchema.validate(maybeFMRadioChannel);
  if (error) {
    return new OaValidationError('FMRadioChannel', maybeFMRadioChannel, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as FMRadioChannel;
}
