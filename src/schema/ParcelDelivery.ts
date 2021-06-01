// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * schema:ParcelDelivery
 */
export type ParcelDelivery = {
  '@type': 'ParcelDelivery';
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
   * Shipper tracking number.
   */
  trackingNumber?: string;
  /**
   * The earliest date the package may arrive.
   */
  expectedArrivalFrom?: string;
  /**
   * New entry added as the package passes through each leg of its journey (from shipment to final delivery).
   */
  deliveryStatus?: schema.DeliveryEventOrSubClass | string;
  /**
   * The latest date the package may arrive.
   */
  expectedArrivalUntil?: string;
  /**
   * Method used for delivery or shipping.
   */
  hasDeliveryMethod?: schema.DeliveryMethod;
  /**
   * The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
   */
  provider?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
  /**
   * Destination address.
   */
  deliveryAddress?: schema.PostalAddressOrSubClass | string;
  /**
   * The overall order the items in this delivery were included in.
   */
  partOfOrder?: schema.OrderOrSubClass | string;
  /**
   * 'carrier' is an out-dated term indicating the 'provider' for parcel delivery and flights.
   */
  carrier?: schema.OrganizationOrSubClass | string;
  /**
   * Item(s) being shipped.
   */
  itemShipped?: schema.ProductOrSubClass | string;
  /**
   * Tracking url for the parcel delivery.
   */
  trackingUrl?: string;
  /**
   * Shipper's address.
   */
  originAddress?: schema.PostalAddressOrSubClass | string;
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
 * schema:ParcelDelivery
 *
 * This differs from ParcelDelivery because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type ParcelDeliveryOrSubClass =
  | ParcelDelivery
  ;

/**
 * schema:ParcelDelivery - Validation schema (w/ JOI)
 */
export const ParcelDeliveryJoiSchema = Joi.object({
  '@type': Joi.string().valid('ParcelDelivery').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
  name: Joi.string(),
  description: Joi.string(),
  '@id': Joi.string().uri(),
  trackingNumber: Joi.string(),
  expectedArrivalFrom: Joi.string().isoDate(),
  deliveryStatus: Joi.alternatives().try(Joi.lazy(() => schema.DeliveryEventOrSubClassJoiSchema), Joi.string().uri()),
  expectedArrivalUntil: Joi.string().isoDate(),
  hasDeliveryMethod: Joi.lazy(() => schema.DeliveryMethodJoiSchema),
  provider: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  deliveryAddress: Joi.alternatives().try(Joi.lazy(() => schema.PostalAddressOrSubClassJoiSchema), Joi.string().uri()),
  partOfOrder: Joi.alternatives().try(Joi.lazy(() => schema.OrderOrSubClassJoiSchema), Joi.string().uri()),
  carrier: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  itemShipped: Joi.alternatives().try(Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.string().uri()),
  trackingUrl: Joi.string().uri(),
  originAddress: Joi.alternatives().try(Joi.lazy(() => schema.PostalAddressOrSubClassJoiSchema), Joi.string().uri()),
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
 * schema:ParcelDelivery - Validation schema (w/ JOI)
 *
 * This differs from ParcelDeliveryJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const ParcelDeliveryOrSubClassJoiSchema = Joi.alternatives().try([
  ParcelDeliveryJoiSchema,
]);

/**
 * Runtime validator for schema:ParcelDelivery.
 *
 * If some data has a structure which matches a schema:ParcelDelivery, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeParcelDelivery = ParcelDelivery.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeParcelDelivery instanceof OaValidationError) {
 *   // From this point on, `maybeParcelDelivery` will have type `OaValidationError`
 *   const error = maybeParcelDelivery;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeParcelDelivery` will have type `ParcelDelivery`
 * const parcelDelivery = maybeParcelDelivery;
 * ```
 */
export function validateParcelDelivery(maybeParcelDelivery: unknown): ParcelDelivery | OaValidationError {
  const { value, error } = ParcelDeliveryJoiSchema.validate(maybeParcelDelivery);
  if (error) {
    return new OaValidationError('ParcelDelivery', maybeParcelDelivery, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as ParcelDelivery;
}
