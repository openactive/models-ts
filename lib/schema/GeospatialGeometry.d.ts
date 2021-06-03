import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as schema from '../schema';
/**
 * schema:GeospatialGeometry
 */
export declare type GeospatialGeometry = {
    '@type': 'GeospatialGeometry';
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
     * Represents spatial relations in which two geometries (or the places they represent) have at least one point in common. As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
     */
    geoIntersects?: schema.GeospatialGeometryOrSubClass | schema.PlaceOrSubClass | string;
    /**
     * Represents a relationship between two geometries (or the places they represent), relating a geometry to another that covers it. As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
     */
    geoCoveredBy?: schema.GeospatialGeometryOrSubClass | schema.PlaceOrSubClass | string;
    /**
     * Represents a relationship between two geometries (or the places they represent), relating a geometry to another that geospatially overlaps it, i.e. they have some but not all points in common. As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
     */
    geoOverlaps?: schema.PlaceOrSubClass | schema.GeospatialGeometryOrSubClass | string;
    /**
     * Represents a relationship between two geometries (or the places they represent), relating a geometry to one that contains it, i.e. it is inside (i.e. within) its interior. As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
     */
    geoWithin?: schema.PlaceOrSubClass | schema.GeospatialGeometryOrSubClass | string;
    /**
     * Represents a relationship between two geometries (or the places they represent), relating a covering geometry to a covered geometry. "Every point of b is a point of (the interior or boundary of) a". As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
     */
    geoCovers?: schema.GeospatialGeometryOrSubClass | schema.PlaceOrSubClass | string;
    /**
     * Represents spatial relations in which two geometries (or the places they represent) are topologically equal, as defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM). "Two geometries are topologically equal if their interiors intersect and no part of the interior or boundary of one geometry intersects the exterior of the other" (a symmetric relationship)
     */
    geoEquals?: schema.PlaceOrSubClass | schema.GeospatialGeometryOrSubClass | string;
    /**
     * Represents spatial relations in which two geometries (or the places they represent) are topologically disjoint: they have no point in common. They form a set of disconnected geometries." (a symmetric relationship, as defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM))
     */
    geoDisjoint?: schema.PlaceOrSubClass | schema.GeospatialGeometryOrSubClass | string;
    /**
     * Represents spatial relations in which two geometries (or the places they represent) touch: they have at least one boundary point in common, but no interior points." (a symmetric relationship, as defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM) )
     */
    geoTouches?: schema.PlaceOrSubClass | schema.GeospatialGeometryOrSubClass | string;
    /**
     * Represents a relationship between two geometries (or the places they represent), relating a geometry to another that crosses it: "a crosses b: they have some but not all interior points in common, and the dimension of the intersection is less than that of at least one of them". As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
     */
    geoCrosses?: schema.GeospatialGeometryOrSubClass | schema.PlaceOrSubClass | string;
    /**
     * Represents a relationship between two geometries (or the places they represent), relating a containing geometry to a contained geometry. "a contains b iff no points of b lie in the exterior of a, and at least one point of the interior of b lies in the interior of a". As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
     */
    geoContains?: schema.GeospatialGeometryOrSubClass | schema.PlaceOrSubClass | string;
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
 * schema:GeospatialGeometry
 *
 * This differs from GeospatialGeometry because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type GeospatialGeometryOrSubClass = GeospatialGeometry;
/**
 * schema:GeospatialGeometry - Validation schema (w/ JOI)
 */
export declare const GeospatialGeometryJoiSchema: Joi.ObjectSchema;
/**
 * schema:GeospatialGeometry - Validation schema (w/ JOI)
 *
 * This differs from GeospatialGeometryJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const GeospatialGeometryOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:GeospatialGeometry.
 *
 * If some data has a structure which matches a schema:GeospatialGeometry, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeGeospatialGeometry = validateGeospatialGeometry(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeGeospatialGeometry instanceof OaValidationError) {
 *   // From this point on, `maybeGeospatialGeometry` will have type `OaValidationError`
 *   const error = maybeGeospatialGeometry;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeGeospatialGeometry` will have type `GeospatialGeometry`
 * const geospatialGeometry = maybeGeospatialGeometry;
 * ```
 */
export declare function validateGeospatialGeometry(maybeGeospatialGeometry: unknown): GeospatialGeometry | OaValidationError;
