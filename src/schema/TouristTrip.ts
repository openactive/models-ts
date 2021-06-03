// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * schema:TouristTrip
 */
export type TouristTrip = {
  '@type': 'TouristTrip';
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
   * Attraction suitable for type(s) of tourist. eg. Children, visitors from a particular country, etc. 
   */
  touristType?: schema.AudienceOrSubClass | string;
  /**
   * Destination(s) ( [[Place]] ) that make up a trip. For a trip where destination order is important use [[ItemList]] to specify that order (see examples).
   */
  itinerary?: schema.PlaceOrSubClass | schema.ItemListOrSubClass | string;
  /**
   * Identifies a [[Trip]] that is a subTrip of this Trip.  For example Day 1, Day 2, etc. of a multi-day trip.
   */
  subTrip?: schema.TripOrSubClass | string;
  /**
   * Identifies that this [[Trip]] is a subTrip of another Trip.  For example Day 1, Day 2, etc. of a multi-day trip.
   */
  partOfTrip?: schema.TripOrSubClass | string;
  /**
   * The expected arrival time.
   */
  arrivalTime?: string;
  /**
   * An offer to provide this item&#x2014;for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use [[businessFunction]] to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a [[Demand]]. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
   *       
   */
  offers?: schema.OfferOrSubClass | schema.DemandOrSubClass | string;
  /**
   * The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
   */
  provider?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
  /**
   * The expected departure time.
   */
  departureTime?: string;
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
 * schema:TouristTrip
 *
 * This differs from TouristTrip because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type TouristTripOrSubClass =
  | TouristTrip
  ;

/**
 * schema:TouristTrip - Validation schema (w/ JOI)
 */
export const TouristTripJoiSchema = Joi.object({
  '@type': Joi.string().valid('TouristTrip').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
  name: Joi.string(),
  description: Joi.string(),
  '@id': Joi.string().uri(),
  touristType: Joi.alternatives().try(Joi.lazy(() => schema.AudienceOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  itinerary: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.lazy(() => schema.ItemListOrSubClassJoiSchema), Joi.string().uri()),
  subTrip: Joi.alternatives().try(Joi.lazy(() => schema.TripOrSubClassJoiSchema), Joi.string().uri()),
  partOfTrip: Joi.alternatives().try(Joi.lazy(() => schema.TripOrSubClassJoiSchema), Joi.string().uri()),
  arrivalTime: Joi.alternatives().try(Joi.string(), Joi.string().isoDate()),
  offers: Joi.alternatives().try(Joi.lazy(() => schema.OfferOrSubClassJoiSchema), Joi.lazy(() => schema.DemandOrSubClassJoiSchema), Joi.string().uri()),
  provider: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  departureTime: Joi.alternatives().try(Joi.string(), Joi.string().isoDate()),
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
 * schema:TouristTrip - Validation schema (w/ JOI)
 *
 * This differs from TouristTripJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const TouristTripOrSubClassJoiSchema = Joi.alternatives().try([
  TouristTripJoiSchema,
]);

/**
 * Runtime validator for schema:TouristTrip.
 *
 * If some data has a structure which matches a schema:TouristTrip, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeTouristTrip = validateTouristTrip(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeTouristTrip instanceof OaValidationError) {
 *   // From this point on, `maybeTouristTrip` will have type `OaValidationError`
 *   const error = maybeTouristTrip;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeTouristTrip` will have type `TouristTrip`
 * const touristTrip = maybeTouristTrip;
 * ```
 */
export function validateTouristTrip(maybeTouristTrip: unknown): TouristTrip | OaValidationError {
  const { value, error } = TouristTripJoiSchema.validate(maybeTouristTrip);
  if (error) {
    return new OaValidationError('TouristTrip', maybeTouristTrip, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as TouristTrip;
}
