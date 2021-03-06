// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * schema:Demand
 */
export type Demand = {
  '@type': 'Demand';
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
   * The delivery method(s) available for this offer.
   */
  availableDeliveryMethod?: schema.DeliveryMethod;
  /**
   * A predefined value from OfferItemCondition or a textual description of the condition of the product or service, or the products or services included in the offer.
   */
  itemCondition?: schema.OfferItemCondition;
  /**
   * The date when the item becomes valid.
   */
  validFrom?: string;
  /**
   * An entity which offers (sells / leases / lends / loans) the services / goods.  A seller may also be a provider.
   */
  seller?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
  /**
   * The GTIN-12 code of the product, or the product to which the offer refers. The GTIN-12 is the 12-digit GS1 Identification Key composed of a U.P.C. Company Prefix, Item Reference, and Check Digit used to identify trade items. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
   */
  gtin12?: string;
  /**
   * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is valid.\n\nSee also [[ineligibleRegion]].
   *     
   */
  eligibleRegion?: string | schema.GeoShapeOrSubClass | schema.PlaceOrSubClass;
  /**
   * The warranty promise(s) included in the offer.
   */
  warranty?: schema.WarrantyPromiseOrSubClass | string;
  /**
   * The end of the availability of the product or service included in the offer.
   */
  availabilityEnds?: string;
  /**
   * The typical delay between the receipt of the order and the goods either leaving the warehouse or being prepared for pickup, in case the delivery method is on site pickup.
   */
  deliveryLeadTime?: schema.QuantitativeValueOrSubClass | string;
  /**
   * The duration for which the given offer is valid.
   */
  eligibleDuration?: schema.QuantitativeValueOrSubClass | string;
  /**
   * The beginning of the availability of the product or service included in the offer.
   */
  availabilityStarts?: string;
  /**
   * The serial number or any alphanumeric identifier of a particular product. When attached to an offer, it is a shortcut for the serial number of the product included in the offer.
   */
  serialNumber?: string;
  /**
   * The payment method(s) accepted by seller for this offer.
   */
  acceptedPaymentMethod?: schema.LoanOrCreditOrSubClass | schema.PaymentMethod | string;
  /**
   * One or more detailed price specifications, indicating the unit price and delivery or payment charges.
   */
  priceSpecification?: schema.PriceSpecificationOrSubClass | string;
  /**
   * The transaction volume, in a monetary unit, for which the offer or price specification is valid, e.g. for indicating a minimal purchasing volume, to express free shipping above a certain order volume, or to limit the acceptance of credit cards to purchases to a certain minimal amount.
   */
  eligibleTransactionVolume?: schema.PriceSpecificationOrSubClass | string;
  /**
   * The GTIN-13 code of the product, or the product to which the offer refers. This is equivalent to 13-digit ISBN codes and EAN UCC-13. Former 12-digit UPC codes can be converted into a GTIN-13 code by simply adding a preceding zero. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
   */
  gtin13?: string;
  /**
   * A Global Trade Item Number ([GTIN](https://www.gs1.org/standards/id-keys/gtin)). GTINs identify trade items, including products and services, using numeric identification codes. The [[gtin]] property generalizes the earlier [[gtin8]], [[gtin12]], [[gtin13]], and [[gtin14]] properties. The GS1 [digital link specifications](https://www.gs1.org/standards/Digital-Link/) express GTINs as URLs. A correct [[gtin]] value should be a valid GTIN, which means that it should be an all-numeric string of either 8, 12, 13 or 14 digits, or a "GS1 Digital Link" URL based on such a string. The numeric component should also have a [valid GS1 check digit](https://www.gs1.org/services/check-digit-calculator) and meet the other rules for valid GTINs. See also [GS1's GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) and [Wikipedia](https://en.wikipedia.org/wiki/Global_Trade_Item_Number) for more details. Left-padding of the gtin values is not required or encouraged.
   *    
   */
  gtin?: string;
  /**
   * The geographic area where a service or offered item is provided.
   */
  areaServed?: string | schema.PlaceOrSubClass | schema.AdministrativeAreaOrSubClass | schema.GeoShapeOrSubClass;
  /**
   * The amount of time that is required between accepting the offer and the actual usage of the resource or service.
   */
  advanceBookingRequirement?: schema.QuantitativeValueOrSubClass | string;
  /**
   * An item being offered (or demanded). The transactional nature of the offer or demand is documented using [[businessFunction]], e.g. sell, lease etc. While several common expected types are listed explicitly in this definition, others can be used. Using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
   */
  itemOffered?: schema.TripOrSubClass | schema.ProductOrSubClass | schema.MenuItemOrSubClass | schema.ServiceOrSubClass | schema.Event_OrSubClass | schema.CreativeWorkOrSubClass | schema.AggregateOfferOrSubClass | string;
  /**
   * The current approximate inventory level for the item or items.
   */
  inventoryLevel?: schema.QuantitativeValueOrSubClass | string;
  /**
   * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is not valid, e.g. a region where the transaction is not allowed.\n\nSee also [[eligibleRegion]].
   *       
   */
  ineligibleRegion?: schema.GeoShapeOrSubClass | string | schema.PlaceOrSubClass;
  /**
   * The Manufacturer Part Number (MPN) of the product, or the product to which the offer refers.
   */
  mpn?: string;
  /**
   * This links to a node or nodes indicating the exact quantity of the products included in  an [[Offer]] or [[ProductCollection]].
   */
  includesObject?: schema.TypeAndQuantityNodeOrSubClass | string;
  /**
   * The availability of this item&#x2014;for example In stock, Out of stock, Pre-order, etc.
   */
  availability?: schema.ItemAvailability;
  /**
   * The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers.
   */
  sku?: string;
  /**
   * The type(s) of customers for which the given offer is valid.
   */
  eligibleCustomerType?: schema.BusinessEntityType;
  /**
   * The GTIN-14 code of the product, or the product to which the offer refers. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
   */
  gtin14?: string;
  /**
   * The interval and unit of measurement of ordering quantities for which the offer or price specification is valid. This allows e.g. specifying that a certain freight charge is valid only for a certain quantity.
   */
  eligibleQuantity?: schema.QuantitativeValueOrSubClass | string;
  /**
   * The place(s) from which the offer can be obtained (e.g. store locations).
   */
  availableAtOrFrom?: schema.PlaceOrSubClass | string;
  /**
   * The GTIN-8 code of the product, or the product to which the offer refers. This code is also known as EAN/UCC-8 or 8-digit EAN. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
   */
  gtin8?: string;
  /**
   * The business function (e.g. sell, lease, repair, dispose) of the offer or component of a bundle (TypeAndQuantityNode). The default is http://purl.org/goodrelations/v1#Sell.
   */
  businessFunction?: schema.BusinessFunction;
  /**
   * The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours.
   */
  validThrough?: string;
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
 * schema:Demand
 *
 * This differs from Demand because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type DemandOrSubClass =
  | Demand
  ;

/**
 * schema:Demand - Validation schema (w/ JOI)
 */
export const DemandJoiSchema = Joi.object({
  '@type': Joi.string().valid('Demand').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
  name: Joi.string(),
  description: Joi.string(),
  '@id': Joi.string().uri(),
  availableDeliveryMethod: Joi.lazy(() => schema.DeliveryMethodJoiSchema),
  itemCondition: Joi.lazy(() => schema.OfferItemConditionJoiSchema),
  validFrom: Joi.string().isoDate(),
  seller: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  gtin12: Joi.string(),
  eligibleRegion: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.GeoShapeOrSubClassJoiSchema), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
  warranty: Joi.alternatives().try(Joi.lazy(() => schema.WarrantyPromiseOrSubClassJoiSchema), Joi.string().uri()),
  availabilityEnds: Joi.alternatives().try(Joi.string().isoDate(), Joi.string()),
  deliveryLeadTime: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  eligibleDuration: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  availabilityStarts: Joi.alternatives().try(Joi.string().isoDate(), Joi.string()),
  serialNumber: Joi.string(),
  acceptedPaymentMethod: Joi.alternatives().try(Joi.lazy(() => schema.LoanOrCreditOrSubClassJoiSchema), Joi.lazy(() => schema.PaymentMethodJoiSchema), Joi.string().uri()),
  priceSpecification: Joi.alternatives().try(Joi.lazy(() => schema.PriceSpecificationOrSubClassJoiSchema), Joi.string().uri()),
  eligibleTransactionVolume: Joi.alternatives().try(Joi.lazy(() => schema.PriceSpecificationOrSubClassJoiSchema), Joi.string().uri()),
  gtin13: Joi.string(),
  gtin: Joi.string(),
  areaServed: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.lazy(() => schema.AdministrativeAreaOrSubClassJoiSchema), Joi.lazy(() => schema.GeoShapeOrSubClassJoiSchema), Joi.string().uri()),
  advanceBookingRequirement: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  itemOffered: Joi.alternatives().try(Joi.lazy(() => schema.TripOrSubClassJoiSchema), Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.lazy(() => schema.MenuItemOrSubClassJoiSchema), Joi.lazy(() => schema.ServiceOrSubClassJoiSchema), Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.lazy(() => schema.AggregateOfferOrSubClassJoiSchema), Joi.string().uri()),
  inventoryLevel: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  ineligibleRegion: Joi.alternatives().try(Joi.lazy(() => schema.GeoShapeOrSubClassJoiSchema), Joi.string(), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
  mpn: Joi.string(),
  includesObject: Joi.alternatives().try(Joi.lazy(() => schema.TypeAndQuantityNodeOrSubClassJoiSchema), Joi.string().uri()),
  availability: Joi.lazy(() => schema.ItemAvailabilityJoiSchema),
  sku: Joi.string(),
  eligibleCustomerType: Joi.lazy(() => schema.BusinessEntityTypeJoiSchema),
  gtin14: Joi.string(),
  eligibleQuantity: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  availableAtOrFrom: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
  gtin8: Joi.string(),
  businessFunction: Joi.lazy(() => schema.BusinessFunctionJoiSchema),
  validThrough: Joi.string().isoDate(),
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
 * schema:Demand - Validation schema (w/ JOI)
 *
 * This differs from DemandJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const DemandOrSubClassJoiSchema = Joi.alternatives().try([
  DemandJoiSchema,
]);

/**
 * Runtime validator for schema:Demand.
 *
 * If some data has a structure which matches a schema:Demand, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeDemand = validateDemand(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeDemand instanceof OaValidationError) {
 *   // From this point on, `maybeDemand` will have type `OaValidationError`
 *   const error = maybeDemand;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeDemand` will have type `Demand`
 * const demand = maybeDemand;
 * ```
 */
export function validateDemand(maybeDemand: unknown): Demand | OaValidationError {
  const { value, error } = DemandJoiSchema.validate(maybeDemand);
  if (error) {
    return new OaValidationError('Demand', maybeDemand, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as Demand;
}
