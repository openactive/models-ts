// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * schema:AssessAction
 */
export type AssessAction = {
  '@type': 'AssessAction';
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
   * A unique URI-based identifier for the record.
   * `@id` properties are used as identifiers for compatibility with JSON-LD. The value of such a property must always be an absolute URI that provides a stable globally unique identifier for the resource, as described in [RFC3986](https://tools.ietf.org/html/rfc3986).
   * The primary purpose of the URI format in this context is to provide natural namespacing for the identifier. Hence, the URI itself may not resolve to a valid endpoint, but must use a domain name controlled by the resource owner (the organisation responsible for the OpenActive open data feed).
   */
  '@id'?: string;
  /**
   * The result produced in the action. e.g. John wrote *a book*.
   */
  result?: schema.ThingOrSubClass | string;
  /**
   * The object upon which the action is carried out, whose state is kept intact or changed. Also known as the semantic roles patient, affected or undergoer (which change their state) or theme (which doesn't). e.g. John read *a book*.
   */
  object?: schema.ThingOrSubClass | string;
  /**
   * Other co-agents that participated in the action indirectly. e.g. John wrote a book with *Steve*.
   */
  participant?: schema.PersonOrSubClass | schema.OrganizationOrSubClass | string;
  /**
   * For failed actions, more information on the cause of the failure.
   */
  error?: schema.ThingOrSubClass | string;
  /**
   * The location of, for example, where an event is happening, where an organization is located, or where an action takes place.
   */
  location?: schema.PostalAddressOrSubClass | string | schema.PlaceOrSubClass | schema.VirtualLocationOrSubClass;
  /**
   * The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. e.g. John wrote a book from January to *December*. For media, including audio and video, it's the time offset of the end of a clip within a larger file.\n\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
   */
  endTime?: string;
  /**
   * The direct performer or driver of the action (animate or inanimate). e.g. *John* wrote a book.
   */
  agent?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
  /**
   * Indicates a target EntryPoint for an Action.
   */
  target?: schema.EntryPointOrSubClass | string;
  /**
   * Indicates the current disposition of the Action.
   */
  actionStatus?: schema.ActionStatusTypeOrSubClass | string;
  /**
   * The object that helped the agent perform the action. e.g. John wrote a book with *a pen*.
   */
  instrument?: schema.ThingOrSubClass | string;
  /**
   * The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. e.g. John wrote a book from *January* to December. For media, including audio and video, it's the time offset of the start of a clip within a larger file.\n\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
   */
  startTime?: string;
  /**
   * Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See [background notes](/docs/datamodel.html#mainEntityBackground) for details.
   */
  mainEntityOfPage?: string | schema.CreativeWorkOrSubClass;
  /**
   * An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the 'typeof' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.
   */
  additionalType?: string;
  /**
   * URL of the item.
   */
  url?: string;
  /**
   * An alias for the item.
   */
  alternateName?: string;
  /**
   * URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website.
   */
  sameAs?: string;
  /**
   * Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role.
   */
  potentialAction?: schema.ActionOrSubClass | string;
  /**
   * A CreativeWork or Event about this Thing.
   */
  subjectOf?: schema.Event_OrSubClass | schema.CreativeWorkOrSubClass | string;
  /**
   * A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.
   */
  disambiguatingDescription?: string;
  /**
   * An image of the item. This can be a [[URL]] or a fully described [[ImageObject]].
   */
  image?: schema.ImageObjectOrSubClass | string;
};

/**
 * schema:AssessAction
 *
 * This differs from AssessAction because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type AssessActionOrSubClass =
  | AssessAction
  | schema.ChooseActionOrSubClass
  | schema.ReviewActionOrSubClass
  | schema.ReactActionOrSubClass
  | schema.IgnoreActionOrSubClass
  ;

/**
 * schema:AssessAction - Validation schema (w/ JOI)
 */
export const AssessActionJoiSchema = Joi.object({
  '@type': Joi.string().valid('AssessAction').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  name: Joi.string(),
  description: Joi.string(),
  '@id': Joi.string().uri(),
  result: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
  object: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
  participant: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  error: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
  location: Joi.alternatives().try(Joi.lazy(() => schema.PostalAddressOrSubClassJoiSchema), Joi.string(), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.lazy(() => schema.VirtualLocationOrSubClassJoiSchema), Joi.string().uri()),
  endTime: Joi.alternatives().try(Joi.string().isoDate(), Joi.string()),
  agent: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  target: Joi.alternatives().try(Joi.lazy(() => schema.EntryPointOrSubClassJoiSchema), Joi.string().uri()),
  actionStatus: Joi.alternatives().try(Joi.lazy(() => schema.ActionStatusTypeOrSubClassJoiSchema), Joi.string().uri()),
  instrument: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
  startTime: Joi.alternatives().try(Joi.string(), Joi.string().isoDate()),
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
 * schema:AssessAction - Validation schema (w/ JOI)
 *
 * This differs from AssessActionJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const AssessActionOrSubClassJoiSchema = Joi.alternatives().try([
  AssessActionJoiSchema,
  Joi.lazy(() => schema.ChooseActionOrSubClassJoiSchema),
  Joi.lazy(() => schema.ReviewActionOrSubClassJoiSchema),
  Joi.lazy(() => schema.ReactActionOrSubClassJoiSchema),
  Joi.lazy(() => schema.IgnoreActionOrSubClassJoiSchema),
]);

/**
 * Runtime validator for schema:AssessAction.
 *
 * If some data has a structure which matches a schema:AssessAction, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeAssessAction = validateAssessAction(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeAssessAction instanceof OaValidationError) {
 *   // From this point on, `maybeAssessAction` will have type `OaValidationError`
 *   const error = maybeAssessAction;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeAssessAction` will have type `AssessAction`
 * const assessAction = maybeAssessAction;
 * ```
 */
export function validateAssessAction(maybeAssessAction: unknown): AssessAction | OaValidationError {
  const { value, error } = AssessActionJoiSchema.validate(maybeAssessAction);
  if (error) {
    return new OaValidationError('AssessAction', maybeAssessAction, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as AssessAction;
}
