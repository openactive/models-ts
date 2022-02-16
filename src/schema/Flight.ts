// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * schema:Flight
 */
export type Flight = {
  '@type': 'Flight';
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
   * The type of boarding policy used by the airline (e.g. zone-based or group-based).
   */
  boardingPolicy?: schema.BoardingPolicyType;
  /**
   * The distance of the flight.
   */
  flightDistance?: string | schema.DistanceOrSubClass;
  /**
   * Identifier of the flight's departure gate.
   */
  departureGate?: string;
  /**
   * The unique identifier for a flight including the airline IATA code. For example, if describing United flight 110, where the IATA code for United is 'UA', the flightNumber is 'UA110'.
   */
  flightNumber?: string;
  /**
   * An entity which offers (sells / leases / lends / loans) the services / goods.  A seller may also be a provider.
   */
  seller?: schema.PersonOrSubClass | schema.OrganizationOrSubClass | string;
  /**
   * The estimated time the flight will take.
   */
  estimatedFlightDuration?: string;
  /**
   * The kind of aircraft (e.g., "Boeing 747").
   */
  aircraft?: string | schema.VehicleOrSubClass;
  /**
   * 'carrier' is an out-dated term indicating the 'provider' for parcel delivery and flights.
   */
  carrier?: schema.OrganizationOrSubClass | string;
  /**
   * Identifier of the flight's arrival terminal.
   */
  arrivalTerminal?: string;
  /**
   * The time when a passenger can check into the flight online.
   */
  webCheckinTime?: string;
  /**
   * Identifier of the flight's departure terminal.
   */
  departureTerminal?: string;
  /**
   * The airport where the flight originates.
   */
  departureAirport?: schema.AirportOrSubClass | string;
  /**
   * Description of the meals that will be provided or available for purchase.
   */
  mealService?: string;
  /**
   * Identifier of the flight's arrival gate.
   */
  arrivalGate?: string;
  /**
   * The airport where the flight terminates.
   */
  arrivalAirport?: schema.AirportOrSubClass | string;
  /**
   * An offer to provide this item&#x2014;for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use [[businessFunction]] to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a [[Demand]]. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
   *       
   */
  offers?: schema.DemandOrSubClass | schema.OfferOrSubClass | string;
  /**
   * The expected departure time.
   */
  departureTime?: string;
  /**
   * Destination(s) ( [[Place]] ) that make up a trip. For a trip where destination order is important use [[ItemList]] to specify that order (see examples).
   */
  itinerary?: schema.ItemListOrSubClass | schema.PlaceOrSubClass | string;
  /**
   * Identifies a [[Trip]] that is a subTrip of this Trip.  For example Day 1, Day 2, etc. of a multi-day trip.
   */
  subTrip?: schema.TripOrSubClass | string;
  /**
   * The expected arrival time.
   */
  arrivalTime?: string;
  /**
   * The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
   */
  provider?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
  /**
   * Identifies that this [[Trip]] is a subTrip of another Trip.  For example Day 1, Day 2, etc. of a multi-day trip.
   */
  partOfTrip?: schema.TripOrSubClass | string;
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
 * schema:Flight
 *
 * This differs from Flight because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type FlightOrSubClass =
  | Flight
  ;

/**
 * schema:Flight - Validation schema (w/ JOI)
 */
export const FlightJoiSchema = Joi.object({
  '@type': Joi.string().valid('Flight').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  name: Joi.string(),
  description: Joi.string(),
  '@id': Joi.string().uri(),
  boardingPolicy: Joi.lazy(() => schema.BoardingPolicyTypeJoiSchema),
  flightDistance: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.DistanceOrSubClassJoiSchema), Joi.string().uri()),
  departureGate: Joi.string(),
  flightNumber: Joi.string(),
  seller: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  estimatedFlightDuration: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
  aircraft: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.VehicleOrSubClassJoiSchema), Joi.string().uri()),
  carrier: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  arrivalTerminal: Joi.string(),
  webCheckinTime: Joi.string().isoDate(),
  departureTerminal: Joi.string(),
  departureAirport: Joi.alternatives().try(Joi.lazy(() => schema.AirportOrSubClassJoiSchema), Joi.string().uri()),
  mealService: Joi.string(),
  arrivalGate: Joi.string(),
  arrivalAirport: Joi.alternatives().try(Joi.lazy(() => schema.AirportOrSubClassJoiSchema), Joi.string().uri()),
  offers: Joi.alternatives().try(Joi.lazy(() => schema.DemandOrSubClassJoiSchema), Joi.lazy(() => schema.OfferOrSubClassJoiSchema), Joi.string().uri()),
  departureTime: Joi.alternatives().try(Joi.string().isoDate(), Joi.string()),
  itinerary: Joi.alternatives().try(Joi.lazy(() => schema.ItemListOrSubClassJoiSchema), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
  subTrip: Joi.alternatives().try(Joi.lazy(() => schema.TripOrSubClassJoiSchema), Joi.string().uri()),
  arrivalTime: Joi.alternatives().try(Joi.string(), Joi.string().isoDate()),
  provider: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  partOfTrip: Joi.alternatives().try(Joi.lazy(() => schema.TripOrSubClassJoiSchema), Joi.string().uri()),
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
 * schema:Flight - Validation schema (w/ JOI)
 *
 * This differs from FlightJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const FlightOrSubClassJoiSchema = Joi.alternatives().try([
  FlightJoiSchema,
]);

/**
 * Runtime validator for schema:Flight.
 *
 * If some data has a structure which matches a schema:Flight, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeFlight = validateFlight(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeFlight instanceof OaValidationError) {
 *   // From this point on, `maybeFlight` will have type `OaValidationError`
 *   const error = maybeFlight;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeFlight` will have type `Flight`
 * const flight = maybeFlight;
 * ```
 */
export function validateFlight(maybeFlight: unknown): Flight | OaValidationError {
  const { value, error } = FlightJoiSchema.validate(maybeFlight);
  if (error) {
    return new OaValidationError('Flight', maybeFlight, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as Flight;
}
