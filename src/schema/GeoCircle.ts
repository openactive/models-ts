// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * schema:GeoCircle
 */
export type GeoCircle = {
  '@type': 'GeoCircle';
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
   * Indicates the GeoCoordinates at the centre of a GeoShape e.g. GeoCircle.
   */
  geoMidpoint?: schema.GeoCoordinatesOrSubClass | string;
  /**
   * Indicates the approximate radius of a GeoCircle (metres unless indicated otherwise via Distance notation).
   */
  geoRadius?: string | schema.DistanceOrSubClass | number;
  /**
   * A polygon is the area enclosed by a point-to-point path for which the starting and ending points are the same. A polygon is expressed as a series of four or more space delimited points where the first and final points are identical.
   */
  polygon?: string;
  /**
   * A circle is the circular region of a specified radius centered at a specified latitude and longitude. A circle is expressed as a pair followed by a radius in meters.
   */
  circle?: string;
  /**
   * Physical address of the item.
   */
  address?: string | schema.PostalAddressOrSubClass;
  /**
   * The country. For example, USA. You can also provide the two-letter [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1).
   */
  addressCountry?: string | schema.CountryOrSubClass;
  /**
   * A line is a point-to-point path consisting of two or more points. A line is expressed as a series of two or more point objects separated by space.
   */
  line?: string;
  /**
   * A box is the area enclosed by the rectangle formed by two points. The first point is the lower corner, the second point is the upper corner. A box is expressed as two points separated by a space character.
   */
  box?: string;
  /**
   * The postal code. For example, 94043.
   */
  postalCode?: string;
  /**
   * The elevation of a location ([WGS 84](https://en.wikipedia.org/wiki/World_Geodetic_System)). Values may be of the form 'NUMBER UNIT_OF_MEASUREMENT' (e.g., '1,000 m', '3,200 ft') while numbers alone should be assumed to be a value in meters.
   */
  elevation?: number | string;
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
 * schema:GeoCircle
 *
 * This differs from GeoCircle because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type GeoCircleOrSubClass =
  | GeoCircle
  ;

/**
 * schema:GeoCircle - Validation schema (w/ JOI)
 */
export const GeoCircleJoiSchema = Joi.object({
  '@type': Joi.string().valid('GeoCircle').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
  name: Joi.string(),
  description: Joi.string(),
  '@id': Joi.string().uri(),
  geoMidpoint: Joi.alternatives().try(Joi.lazy(() => schema.GeoCoordinatesOrSubClassJoiSchema), Joi.string().uri()),
  geoRadius: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.DistanceOrSubClassJoiSchema), Joi.number(), Joi.string().uri()),
  polygon: Joi.string(),
  circle: Joi.string(),
  address: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.PostalAddressOrSubClassJoiSchema), Joi.string().uri()),
  addressCountry: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.CountryOrSubClassJoiSchema), Joi.string().uri()),
  line: Joi.string(),
  box: Joi.string(),
  postalCode: Joi.string(),
  elevation: Joi.alternatives().try(Joi.number(), Joi.string()),
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
 * schema:GeoCircle - Validation schema (w/ JOI)
 *
 * This differs from GeoCircleJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const GeoCircleOrSubClassJoiSchema = Joi.alternatives().try([
  GeoCircleJoiSchema,
]);

/**
 * Runtime validator for schema:GeoCircle.
 *
 * If some data has a structure which matches a schema:GeoCircle, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeGeoCircle = GeoCircle.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeGeoCircle instanceof OaValidationError) {
 *   // From this point on, `maybeGeoCircle` will have type `OaValidationError`
 *   const error = maybeGeoCircle;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeGeoCircle` will have type `GeoCircle`
 * const geoCircle = maybeGeoCircle;
 * ```
 */
export function validateGeoCircle(maybeGeoCircle: unknown): GeoCircle | OaValidationError {
  const { value, error } = GeoCircleJoiSchema.validate(maybeGeoCircle);
  if (error) {
    return new OaValidationError('GeoCircle', maybeGeoCircle, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as GeoCircle;
}
