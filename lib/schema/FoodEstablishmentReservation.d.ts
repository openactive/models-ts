import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as schema from '../schema';
/**
 * schema:FoodEstablishmentReservation
 */
export declare type FoodEstablishmentReservation = {
    '@type': 'FoodEstablishmentReservation';
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
     * The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. e.g. John wrote a book from *January* to December. For media, including audio and video, it's the time offset of the start of a clip within a larger file.\n\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
     */
    startTime?: string;
    /**
     * Number of people the reservation should accommodate.
     */
    partySize?: schema.QuantitativeValueOrSubClass | number | string;
    /**
     * The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. e.g. John wrote a book from January to *December*. For media, including audio and video, it's the time offset of the end of a clip within a larger file.\n\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
     */
    endTime?: string;
    /**
     * The person or organization the reservation or ticket is for.
     */
    underName?: schema.PersonOrSubClass | schema.OrganizationOrSubClass | string;
    /**
     * The current status of the reservation.
     */
    reservationStatus?: schema.ReservationStatusTypeOrSubClass | string;
    /**
     * Any membership in a frequent flyer, hotel loyalty program, etc. being applied to the reservation.
     */
    programMembershipUsed?: schema.ProgramMembershipOrSubClass | string;
    /**
     * The currency of the price, or a price component when attached to [[PriceSpecification]] and its subtypes.\n\nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217) e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies e.g. "BTC"; well known names for [Local Exchange Tradings Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types e.g. "Ithaca HOUR".
     */
    priceCurrency?: string;
    /**
     * An entity that arranges for an exchange between a buyer and a seller.  In most cases a broker never acquires or releases ownership of a product or service involved in an exchange.  If it is not clear whether an entity is a broker, seller, or buyer, the latter two terms are preferred.
     */
    broker?: schema.PersonOrSubClass | schema.OrganizationOrSubClass | string;
    /**
     * The date and time the reservation was booked.
     */
    bookingTime?: string;
    /**
     * The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
     */
    provider?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
    /**
     * A unique identifier for the reservation.
     */
    reservationId?: string;
    /**
     * The date and time the reservation was modified.
     */
    modifiedTime?: string;
    /**
     * The total price for the reservation or ticket, including applicable taxes, shipping, etc.\n\nUsage guidelines:\n\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
     */
    totalPrice?: number | string | schema.PriceSpecificationOrSubClass;
    /**
     * The thing -- flight, event, restaurant,etc. being reserved.
     */
    reservationFor?: schema.ThingOrSubClass | string;
    /**
     * 'bookingAgent' is an out-dated term indicating a 'broker' that serves as a booking agent.
     */
    bookingAgent?: schema.PersonOrSubClass | schema.OrganizationOrSubClass | string;
    /**
     * A ticket associated with the reservation.
     */
    reservedTicket?: schema.TicketOrSubClass | string;
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
 * schema:FoodEstablishmentReservation
 *
 * This differs from FoodEstablishmentReservation because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type FoodEstablishmentReservationOrSubClass = FoodEstablishmentReservation;
/**
 * schema:FoodEstablishmentReservation - Validation schema (w/ JOI)
 */
export declare const FoodEstablishmentReservationJoiSchema: Joi.ObjectSchema;
/**
 * schema:FoodEstablishmentReservation - Validation schema (w/ JOI)
 *
 * This differs from FoodEstablishmentReservationJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const FoodEstablishmentReservationOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:FoodEstablishmentReservation.
 *
 * If some data has a structure which matches a schema:FoodEstablishmentReservation, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeFoodEstablishmentReservation = validateFoodEstablishmentReservation(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeFoodEstablishmentReservation instanceof OaValidationError) {
 *   // From this point on, `maybeFoodEstablishmentReservation` will have type `OaValidationError`
 *   const error = maybeFoodEstablishmentReservation;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeFoodEstablishmentReservation` will have type `FoodEstablishmentReservation`
 * const foodEstablishmentReservation = maybeFoodEstablishmentReservation;
 * ```
 */
export declare function validateFoodEstablishmentReservation(maybeFoodEstablishmentReservation: unknown): FoodEstablishmentReservation | OaValidationError;
