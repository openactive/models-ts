// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * schema:OfferShippingDetails
 */
export type OfferShippingDetails = {
  '@type': 'OfferShippingDetails';
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
  description?: string | schema.TextObjectOrSubClass;
  /**
   * A unique URI-based identifier for the record.
   * `@id` properties are used as identifiers for compatibility with JSON-LD. The value of such a property must always be an absolute URI that provides a stable globally unique identifier for the resource, as described in [RFC3986](https://tools.ietf.org/html/rfc3986).
   * The primary purpose of the URI format in this context is to provide natural namespacing for the identifier. Hence, the URI itself may not resolve to a valid endpoint, but must use a domain name controlled by the resource owner (the organisation responsible for the OpenActive open data feed).
   */
  '@id'?: string;
  /**
   * The total delay between the receipt of the order and the goods reaching the final customer.
   */
  deliveryTime?: schema.ShippingDeliveryTimeOrSubClass | string;
  /**
   * The depth of the item.
   */
  depth?: schema.DistanceOrSubClass | schema.QuantitativeValueOrSubClass | string;
  /**
   * Indicates when shipping to a particular [[shippingDestination]] is not available.
   */
  doesNotShip?: boolean;
  /**
   * Specification of a shipping service offered by the organization.
   */
  hasShippingService?: schema.ShippingServiceOrSubClass | string;
  /**
   * The height of the item.
   */
  height?: schema.DistanceOrSubClass | schema.QuantitativeValueOrSubClass | string;
  /**
   * The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
   */
  provider?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
  /**
   * indicates (possibly multiple) shipping destinations. These can be defined in several ways, e.g. postalCode ranges.
   */
  shippingDestination?: schema.DefinedRegionOrSubClass | string;
  /**
   * Label to match an [[OfferShippingDetails]] with a [[ShippingRateSettings]] (within the context of a [[shippingSettingsLink]] cross-reference).
   */
  shippingLabel?: string;
  /**
   * Indicates the origin of a shipment, i.e. where it should be coming from.
   */
  shippingOrigin?: schema.DefinedRegionOrSubClass | string;
  /**
   * The shipping rate is the cost of shipping to the specified destination. Typically, the maxValue and currency values (of the [[MonetaryAmount]]) are most appropriate.
   */
  shippingRate?: schema.MonetaryAmountOrSubClass | schema.ShippingRateSettingsOrSubClass | string;
  /**
   * Link to a page containing [[ShippingRateSettings]] and [[DeliveryTimeSettings]] details.
   */
  shippingSettingsLink?: string;
  /**
   * Label to match an [[OfferShippingDetails]] with a [[DeliveryTimeSettings]] (within the context of a [[shippingSettingsLink]] cross-reference).
   */
  transitTimeLabel?: string;
  /**
   * The membership program tier(s) an Offer (or a PriceSpecification, OfferShippingDetails, or MerchantReturnPolicy under an Offer) is valid for.
   */
  validForMemberTier?: schema.MemberProgramTierOrSubClass | string;
  /**
   * The weight of the product or person.
   */
  weight?: schema.MassOrSubClass | schema.QuantitativeValueOrSubClass | string;
  /**
   * The width of the item.
   */
  width?: schema.DistanceOrSubClass | schema.QuantitativeValueOrSubClass | string;
  /**
   * An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. Typically the value is a URI-identified RDF class, and in this case corresponds to the
   *     use of rdf:type in RDF. Text values can be used sparingly, for cases where useful information can be added without their being an appropriate schema to reference. In the case of text values, the class label should follow the schema.org <a href="https://schema.org/docs/styleguide.html">style guide</a>.
   */
  additionalType?: string;
  /**
   * An alias for the item.
   */
  alternateName?: string;
  /**
   * A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.
   */
  disambiguatingDescription?: string;
  /**
   * An image of the item. This can be a [[URL]] or a fully described [[ImageObject]].
   */
  image?: schema.ImageObjectOrSubClass | string;
  /**
   * Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See [background notes](/docs/datamodel.html#mainEntityBackground) for details.
   */
  mainEntityOfPage?: schema.CreativeWorkOrSubClass | string;
  /**
   * A person or organization who owns this Thing.
   */
  owner?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
  /**
   * Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role.
   */
  potentialAction?: schema.ActionOrSubClass | string;
  /**
   * URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website.
   */
  sameAs?: string;
  /**
   * A CreativeWork or Event about this Thing.
   */
  subjectOf?: schema.CreativeWorkOrSubClass | schema.Event_OrSubClass | string;
  /**
   * URL of the item.
   */
  url?: string;
};

/**
 * schema:OfferShippingDetails
 *
 * This differs from OfferShippingDetails because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type OfferShippingDetailsOrSubClass =
  | OfferShippingDetails
  ;

/**
 * schema:OfferShippingDetails - Validation schema (w/ JOI)
 */
export const OfferShippingDetailsJoiSchema = Joi.object({
  '@type': Joi.string().valid('OfferShippingDetails').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  name: Joi.string(),
  description: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.TextObjectOrSubClassJoiSchema), Joi.string().uri()),
  '@id': Joi.string().uri(),
  deliveryTime: Joi.alternatives().try(Joi.lazy(() => schema.ShippingDeliveryTimeOrSubClassJoiSchema), Joi.string().uri()),
  depth: Joi.alternatives().try(Joi.lazy(() => schema.DistanceOrSubClassJoiSchema), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  doesNotShip: Joi.boolean(),
  hasShippingService: Joi.alternatives().try(Joi.lazy(() => schema.ShippingServiceOrSubClassJoiSchema), Joi.string().uri()),
  height: Joi.alternatives().try(Joi.lazy(() => schema.DistanceOrSubClassJoiSchema), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  provider: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  shippingDestination: Joi.alternatives().try(Joi.lazy(() => schema.DefinedRegionOrSubClassJoiSchema), Joi.string().uri()),
  shippingLabel: Joi.string(),
  shippingOrigin: Joi.alternatives().try(Joi.lazy(() => schema.DefinedRegionOrSubClassJoiSchema), Joi.string().uri()),
  shippingRate: Joi.alternatives().try(Joi.lazy(() => schema.MonetaryAmountOrSubClassJoiSchema), Joi.lazy(() => schema.ShippingRateSettingsOrSubClassJoiSchema), Joi.string().uri()),
  shippingSettingsLink: Joi.string().uri(),
  transitTimeLabel: Joi.string(),
  validForMemberTier: Joi.alternatives().try(Joi.lazy(() => schema.MemberProgramTierOrSubClassJoiSchema), Joi.string().uri()),
  weight: Joi.alternatives().try(Joi.lazy(() => schema.MassOrSubClassJoiSchema), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  width: Joi.alternatives().try(Joi.lazy(() => schema.DistanceOrSubClassJoiSchema), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  additionalType: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
  alternateName: Joi.string(),
  disambiguatingDescription: Joi.string(),
  image: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
  mainEntityOfPage: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
  owner: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  potentialAction: Joi.alternatives().try(Joi.lazy(() => schema.ActionOrSubClassJoiSchema), Joi.string().uri()),
  sameAs: Joi.string().uri(),
  subjectOf: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.string().uri()),
  url: Joi.string().uri(),
});

/**
 * schema:OfferShippingDetails - Validation schema (w/ JOI)
 *
 * This differs from OfferShippingDetailsJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const OfferShippingDetailsOrSubClassJoiSchema = Joi.alternatives().try([
  OfferShippingDetailsJoiSchema,
]);

/**
 * Runtime validator for schema:OfferShippingDetails.
 *
 * If some data has a structure which matches a schema:OfferShippingDetails, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeOfferShippingDetails = validateOfferShippingDetails(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeOfferShippingDetails instanceof OaValidationError) {
 *   // From this point on, `maybeOfferShippingDetails` will have type `OaValidationError`
 *   const error = maybeOfferShippingDetails;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeOfferShippingDetails` will have type `OfferShippingDetails`
 * const offerShippingDetails = maybeOfferShippingDetails;
 * ```
 */
export function validateOfferShippingDetails(maybeOfferShippingDetails: unknown): OfferShippingDetails | OaValidationError {
  const { value, error } = OfferShippingDetailsJoiSchema.validate(maybeOfferShippingDetails);
  if (error) {
    return new OaValidationError('OfferShippingDetails', maybeOfferShippingDetails, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as OfferShippingDetails;
}
