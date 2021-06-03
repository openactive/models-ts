// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * schema:LodgingReservation
 */
export type LodgingReservation = {
  '@type': 'LodgingReservation';
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
   * The earliest someone may check into a lodging establishment.
   */
  checkinTime?: string;
  /**
   * Textual description of the unit type (including suite vs. room, size of bed, etc.).
   */
  lodgingUnitType?: schema.QualitativeValue | string;
  /**
   * The number of children staying in the unit.
   */
  numChildren?: number | schema.QuantitativeValueOrSubClass | string;
  /**
   * A full description of the lodging unit.
   */
  lodgingUnitDescription?: string;
  /**
   * The number of adults staying in the unit.
   */
  numAdults?: number | schema.QuantitativeValueOrSubClass | string;
  /**
   * The latest someone may check out of a lodging establishment.
   */
  checkoutTime?: string;
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
 * schema:LodgingReservation
 *
 * This differs from LodgingReservation because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type LodgingReservationOrSubClass =
  | LodgingReservation
  ;

/**
 * schema:LodgingReservation - Validation schema (w/ JOI)
 */
export const LodgingReservationJoiSchema = Joi.object({
  '@type': Joi.string().valid('LodgingReservation').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
  name: Joi.string(),
  description: Joi.string(),
  '@id': Joi.string().uri(),
  checkinTime: Joi.alternatives().try(Joi.string().isoDate(), Joi.string()),
  lodgingUnitType: Joi.alternatives().try(Joi.lazy(() => schema.QualitativeValueJoiSchema), Joi.string()),
  numChildren: Joi.alternatives().try(Joi.number().integer(), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  lodgingUnitDescription: Joi.string(),
  numAdults: Joi.alternatives().try(Joi.number().integer(), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  checkoutTime: Joi.alternatives().try(Joi.string().isoDate(), Joi.string()),
  underName: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  reservationStatus: Joi.alternatives().try(Joi.lazy(() => schema.ReservationStatusTypeOrSubClassJoiSchema), Joi.string().uri()),
  programMembershipUsed: Joi.alternatives().try(Joi.lazy(() => schema.ProgramMembershipOrSubClassJoiSchema), Joi.string().uri()),
  priceCurrency: Joi.string(),
  broker: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  bookingTime: Joi.string().isoDate(),
  provider: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  reservationId: Joi.string(),
  modifiedTime: Joi.string().isoDate(),
  totalPrice: Joi.alternatives().try(Joi.number(), Joi.string(), Joi.lazy(() => schema.PriceSpecificationOrSubClassJoiSchema), Joi.string().uri()),
  reservationFor: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
  bookingAgent: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  reservedTicket: Joi.alternatives().try(Joi.lazy(() => schema.TicketOrSubClassJoiSchema), Joi.string().uri()),
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
 * schema:LodgingReservation - Validation schema (w/ JOI)
 *
 * This differs from LodgingReservationJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const LodgingReservationOrSubClassJoiSchema = Joi.alternatives().try([
  LodgingReservationJoiSchema,
]);

/**
 * Runtime validator for schema:LodgingReservation.
 *
 * If some data has a structure which matches a schema:LodgingReservation, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeLodgingReservation = validateLodgingReservation(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeLodgingReservation instanceof OaValidationError) {
 *   // From this point on, `maybeLodgingReservation` will have type `OaValidationError`
 *   const error = maybeLodgingReservation;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeLodgingReservation` will have type `LodgingReservation`
 * const lodgingReservation = maybeLodgingReservation;
 * ```
 */
export function validateLodgingReservation(maybeLodgingReservation: unknown): LodgingReservation | OaValidationError {
  const { value, error } = LodgingReservationJoiSchema.validate(maybeLodgingReservation);
  if (error) {
    return new OaValidationError('LodgingReservation', maybeLodgingReservation, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as LodgingReservation;
}
