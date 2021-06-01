// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * test:ChangeOfLogisticsNameSimulateAction
 *
 * [NOTICE: This class is part of the Open Booking API Test Interface, and MUST NOT be used in production.] 
 *
 * This type is derived from https://schema.org/Action, which means that any of this type's properties within schema.org may also be used.
 */
export type ChangeOfLogisticsNameSimulateAction = {
  '@type': 'ChangeOfLogisticsNameSimulateAction';
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
   * The object upon which the action is carried out, whose state is kept intact or changed.
   *
   * ```json
   * "object": {
   *   "@type": "SessionSeries",
   *   "@id": "https://id.booking-system.example.com/session-series/42"
   * }
   * ```
   */
  object?: oa.OrderOrSubClass | oa.Event_OrSubClass;
  /**
   * The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. e.g. John wrote a book from *January* to December. For media, including audio and video, it's the time offset of the start of a clip within a larger file.\n\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
   */
  startTime?: string;
  /**
   * The object that helped the agent perform the action. e.g. John wrote a book with *a pen*.
   */
  instrument?: schema.ThingOrSubClass | string;
  /**
   * Indicates the current disposition of the Action.
   */
  actionStatus?: schema.ActionStatusTypeOrSubClass | string;
  /**
   * The direct performer or driver of the action (animate or inanimate). e.g. *John* wrote a book.
   */
  agent?: schema.PersonOrSubClass | schema.OrganizationOrSubClass | string;
  /**
   * Other co-agents that participated in the action indirectly. e.g. John wrote a book with *Steve*.
   */
  participant?: schema.PersonOrSubClass | schema.OrganizationOrSubClass | string;
  /**
   * Indicates a target EntryPoint for an Action.
   */
  target?: schema.EntryPointOrSubClass | string;
  /**
   * The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. e.g. John wrote a book from January to *December*. For media, including audio and video, it's the time offset of the end of a clip within a larger file.\n\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
   */
  endTime?: string;
  /**
   * For failed actions, more information on the cause of the failure.
   */
  error?: schema.ThingOrSubClass | string;
  /**
   * The result produced in the action. e.g. John wrote *a book*.
   */
  result?: schema.ThingOrSubClass | string;
  /**
   * The location of, for example, where an event is happening, where an organization is located, or where an action takes place.
   */
  location?: schema.PlaceOrSubClass | string | schema.VirtualLocationOrSubClass | schema.PostalAddressOrSubClass;
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
 * test:ChangeOfLogisticsNameSimulateAction
 *
 * [NOTICE: This class is part of the Open Booking API Test Interface, and MUST NOT be used in production.] 
 *
 * This type is derived from https://schema.org/Action, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from ChangeOfLogisticsNameSimulateAction because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type ChangeOfLogisticsNameSimulateActionOrSubClass =
  | ChangeOfLogisticsNameSimulateAction
  ;

/**
 * test:ChangeOfLogisticsNameSimulateAction - Validation schema (w/ JOI)
 *
 * [NOTICE: This class is part of the Open Booking API Test Interface, and MUST NOT be used in production.] 
 *
 * This type is derived from https://schema.org/Action, which means that any of this type's properties within schema.org may also be used.
 */
export const ChangeOfLogisticsNameSimulateActionJoiSchema = Joi.object({
  '@type': Joi.string().valid('ChangeOfLogisticsNameSimulateAction').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
  name: Joi.string(),
  description: Joi.string(),
  '@id': Joi.string().uri(),
  object: Joi.alternatives().try(Joi.lazy(() => oa.OrderOrSubClassJoiSchema), Joi.lazy(() => oa.Event_OrSubClassJoiSchema)),
  startTime: Joi.alternatives().try(Joi.string().isoDate(), Joi.string()),
  instrument: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
  actionStatus: Joi.alternatives().try(Joi.lazy(() => schema.ActionStatusTypeOrSubClassJoiSchema), Joi.string().uri()),
  agent: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  participant: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  target: Joi.alternatives().try(Joi.lazy(() => schema.EntryPointOrSubClassJoiSchema), Joi.string().uri()),
  endTime: Joi.alternatives().try(Joi.string().isoDate(), Joi.string()),
  error: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
  result: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
  location: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string(), Joi.lazy(() => schema.VirtualLocationOrSubClassJoiSchema), Joi.lazy(() => schema.PostalAddressOrSubClassJoiSchema), Joi.string().uri()),
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
 * test:ChangeOfLogisticsNameSimulateAction - Validation schema (w/ JOI)
 *
 * [NOTICE: This class is part of the Open Booking API Test Interface, and MUST NOT be used in production.] 
 *
 * This type is derived from https://schema.org/Action, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from ChangeOfLogisticsNameSimulateActionJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const ChangeOfLogisticsNameSimulateActionOrSubClassJoiSchema = Joi.alternatives().try([
  ChangeOfLogisticsNameSimulateActionJoiSchema,
]);

/**
 * Runtime validator for test:ChangeOfLogisticsNameSimulateAction.
 *
 * If some data has a structure which matches a test:ChangeOfLogisticsNameSimulateAction, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeChangeOfLogisticsNameSimulateAction = ChangeOfLogisticsNameSimulateAction.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeChangeOfLogisticsNameSimulateAction instanceof OaValidationError) {
 *   // From this point on, `maybeChangeOfLogisticsNameSimulateAction` will have type `OaValidationError`
 *   const error = maybeChangeOfLogisticsNameSimulateAction;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeChangeOfLogisticsNameSimulateAction` will have type `ChangeOfLogisticsNameSimulateAction`
 * const changeOfLogisticsNameSimulateAction = maybeChangeOfLogisticsNameSimulateAction;
 * ```
 */
export function validateChangeOfLogisticsNameSimulateAction(maybeChangeOfLogisticsNameSimulateAction: unknown): ChangeOfLogisticsNameSimulateAction | OaValidationError {
  const { value, error } = ChangeOfLogisticsNameSimulateActionJoiSchema.validate(maybeChangeOfLogisticsNameSimulateAction);
  if (error) {
    return new OaValidationError('ChangeOfLogisticsNameSimulateAction', maybeChangeOfLogisticsNameSimulateAction, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as ChangeOfLogisticsNameSimulateAction;
}
