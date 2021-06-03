import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as schema from '../schema';
/**
 * schema:Flight
 */
export declare type Flight = {
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
     * A unique url based identifier for the record
     */
    '@id'?: string;
    /**
     * The time when a passenger can check into the flight online.
     */
    webCheckinTime?: string;
    /**
     * Identifier of the flight's departure gate.
     */
    departureGate?: string;
    /**
     * An entity which offers (sells / leases / lends / loans) the services / goods.  A seller may also be a provider.
     */
    seller?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
    /**
     * Description of the meals that will be provided or available for purchase.
     */
    mealService?: string;
    /**
     * The kind of aircraft (e.g., "Boeing 747").
     */
    aircraft?: schema.VehicleOrSubClass | string;
    /**
     * Identifier of the flight's arrival terminal.
     */
    arrivalTerminal?: string;
    /**
     * The airport where the flight originates.
     */
    departureAirport?: schema.AirportOrSubClass | string;
    /**
     * Identifier of the flight's arrival gate.
     */
    arrivalGate?: string;
    /**
     * Identifier of the flight's departure terminal.
     */
    departureTerminal?: string;
    /**
     * The airport where the flight terminates.
     */
    arrivalAirport?: schema.AirportOrSubClass | string;
    /**
     * The type of boarding policy used by the airline (e.g. zone-based or group-based).
     */
    boardingPolicy?: schema.BoardingPolicyType;
    /**
     * 'carrier' is an out-dated term indicating the 'provider' for parcel delivery and flights.
     */
    carrier?: schema.OrganizationOrSubClass | string;
    /**
     * The unique identifier for a flight including the airline IATA code. For example, if describing United flight 110, where the IATA code for United is 'UA', the flightNumber is 'UA110'.
     */
    flightNumber?: string;
    /**
     * The distance of the flight.
     */
    flightDistance?: schema.DistanceOrSubClass | string;
    /**
     * The estimated time the flight will take.
     */
    estimatedFlightDuration?: string;
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
 * schema:Flight
 *
 * This differs from Flight because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type FlightOrSubClass = Flight;
/**
 * schema:Flight - Validation schema (w/ JOI)
 */
export declare const FlightJoiSchema: Joi.ObjectSchema;
/**
 * schema:Flight - Validation schema (w/ JOI)
 *
 * This differs from FlightJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const FlightOrSubClassJoiSchema: Joi.AlternativesSchema;
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
export declare function validateFlight(maybeFlight: unknown): Flight | OaValidationError;
