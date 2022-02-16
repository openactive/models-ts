import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as schema from '../schema';
/**
 * schema:LocationFeatureSpecification
 */
export declare type LocationFeatureSpecification = {
    '@type': 'LocationFeatureSpecification';
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
     * The date when the item becomes valid.
     */
    validFrom?: string;
    /**
     * The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours.
     */
    validThrough?: string;
    /**
     * The hours during which this service or contact is available.
     */
    hoursAvailable?: schema.OpeningHoursSpecificationOrSubClass | string;
    /**
     * A technique or technology used in a [[Dataset]] (or [[DataDownload]], [[DataCatalog]]),
     * corresponding to the method used for measuring the corresponding variable(s) (described using [[variableMeasured]]). This is oriented towards scientific and scholarly dataset publication but may have broader applicability; it is not intended as a full representation of measurement, but rather as a high level summary for dataset discovery.
     *
     * For example, if [[variableMeasured]] is: molecule concentration, [[measurementTechnique]] could be: "mass spectrometry" or "nmr spectroscopy" or "colorimetry" or "immunofluorescence".
     *
     * If the [[variableMeasured]] is "depression rating", the [[measurementTechnique]] could be "Zung Scale" or "HAM-D" or "Beck Depression Inventory".
     *
     * If there are several [[variableMeasured]] properties recorded for some given data object, use a [[PropertyValue]] for each [[variableMeasured]] and attach the corresponding [[measurementTechnique]].
     *
     */
    measurementTechnique?: string;
    /**
     * The lower value of some characteristic or property.
     */
    minValue?: number;
    /**
     * A string or text indicating the unit of measurement. Useful if you cannot provide a standard unit code for
     * <a href='unitCode'>unitCode</a>.
     */
    unitText?: string;
    /**
     * The value of the quantitative value or property value node.\n\n* For [[QuantitativeValue]] and [[MonetaryAmount]], the recommended type for values is 'Number'.\n* For [[PropertyValue]], it can be 'Text;', 'Number', 'Boolean', or 'StructuredValue'.\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
     */
    value?: string | number | boolean | schema.StructuredValueOrSubClass;
    /**
     * A commonly used identifier for the characteristic represented by the property, e.g. a manufacturer or a standard code for a property. propertyID can be
     * (1) a prefixed string, mainly meant to be used with standards for product properties; (2) a site-specific, non-prefixed string (e.g. the primary key of the property or the vendor-specific id of the property), or (3)
     * a URL indicating the type of the property, either pointing to an external vocabulary, or a Web resource that describes the property (e.g. a glossary entry).
     * Standards bodies should promote a standard prefix for the identifiers of properties from their standards.
     */
    propertyID?: string;
    /**
     * The unit of measurement given using the UN/CEFACT Common Code (3 characters) or a URL. Other codes than the UN/CEFACT Common Code may be used with a prefix followed by a colon.
     */
    unitCode?: string;
    /**
     * The upper value of some characteristic or property.
     */
    maxValue?: number;
    /**
     * A secondary value that provides additional information on the original value, e.g. a reference temperature or a type of measurement.
     */
    valueReference?: schema.PropertyValueOrSubClass | schema.StructuredValueOrSubClass | schema.QualitativeValue | schema.MeasurementTypeEnumeration | schema.QuantitativeValueOrSubClass | string | schema.DefinedTermOrSubClass | schema.EnumerationOrSubClass;
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
 * schema:LocationFeatureSpecification
 *
 * This differs from LocationFeatureSpecification because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type LocationFeatureSpecificationOrSubClass = LocationFeatureSpecification;
/**
 * schema:LocationFeatureSpecification - Validation schema (w/ JOI)
 */
export declare const LocationFeatureSpecificationJoiSchema: Joi.ObjectSchema;
/**
 * schema:LocationFeatureSpecification - Validation schema (w/ JOI)
 *
 * This differs from LocationFeatureSpecificationJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const LocationFeatureSpecificationOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:LocationFeatureSpecification.
 *
 * If some data has a structure which matches a schema:LocationFeatureSpecification, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeLocationFeatureSpecification = validateLocationFeatureSpecification(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeLocationFeatureSpecification instanceof OaValidationError) {
 *   // From this point on, `maybeLocationFeatureSpecification` will have type `OaValidationError`
 *   const error = maybeLocationFeatureSpecification;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeLocationFeatureSpecification` will have type `LocationFeatureSpecification`
 * const locationFeatureSpecification = maybeLocationFeatureSpecification;
 * ```
 */
export declare function validateLocationFeatureSpecification(maybeLocationFeatureSpecification: unknown): LocationFeatureSpecification | OaValidationError;
