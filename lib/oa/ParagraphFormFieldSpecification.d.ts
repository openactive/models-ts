import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as schema from '../schema';
/**
 * ParagraphFormFieldSpecification
 *
 * This type is derived from https://schema.org/PropertyValueSpecification, which means that any of this type's properties within schema.org may also be used.
 */
export declare type ParagraphFormFieldSpecification = {
    '@type': 'ParagraphFormFieldSpecification';
    '@context'?: string | string[];
    /**
     * The identifier property represents any kind of identifier for any kind of [[Thing]], such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See [background notes](/docs/datamodel.html#identifierBg) for more details.
     *
     */
    identifier?: schema.PropertyValueOrSubClass | string;
    /**
     * Display label for the field.
     */
    name?: string;
    /**
     * Descriptive help plain text for the field, which must not include HTML or other markup.
     */
    description?: string;
    /**
     * A unique URI-based identifier for the record.
     * `@id` properties are used as identifiers for compatibility with JSON-LD. The value of such a property must always be an absolute URI that provides a stable globally unique identifier for the resource, as described in [RFC3986](https://tools.ietf.org/html/rfc3986).
     * The primary purpose of the URI format in this context is to provide natural namespacing for the identifier. Hence, the URI itself may not resolve to a valid endpoint, but must use a domain name controlled by the resource owner (the organisation responsible for the OpenActive open data feed).
     */
    '@id'?: string;
    /**
     * Specifies that a value for the field is required to proceed with the booking.
     */
    valueRequired?: boolean;
    /**
     * Whether multiple values are allowed for the property.  Default is false.
     */
    multipleValues?: boolean;
    /**
     * Specifies the allowed range for number of characters in a literal value.
     */
    valueMaxLength?: number;
    /**
     * Whether or not a property is mutable.  Default is false. Specifying this for a property that also has a value makes it act similar to a "hidden" input in an HTML form.
     */
    readonlyValue?: boolean;
    /**
     * Specifies the minimum allowed range for number of characters in a literal value.
     */
    valueMinLength?: number;
    /**
     * Specifies a regular expression for testing literal values according to the HTML spec.
     */
    valuePattern?: string;
    /**
     * The lower value of some characteristic or property.
     */
    minValue?: number;
    /**
     * Indicates the name of the PropertyValueSpecification to be used in URL templates and form encoding in a manner analogous to HTML's `input@name`.
     */
    valueName?: string;
    /**
     * The stepValue attribute indicates the granularity that is expected (and required) of the value in a PropertyValueSpecification.
     */
    stepValue?: number;
    /**
     * The upper value of some characteristic or property.
     */
    maxValue?: number;
    /**
     * The default value of the input.  For properties that expect a literal, the default is a literal value, for properties that expect an object, it's an ID reference to one of the current values.
     */
    defaultValue?: schema.ThingOrSubClass | string;
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
 * ParagraphFormFieldSpecification
 *
 * This type is derived from https://schema.org/PropertyValueSpecification, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from ParagraphFormFieldSpecification because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type ParagraphFormFieldSpecificationOrSubClass = ParagraphFormFieldSpecification;
/**
 * ParagraphFormFieldSpecification - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/PropertyValueSpecification, which means that any of this type's properties within schema.org may also be used.
 */
export declare const ParagraphFormFieldSpecificationJoiSchema: Joi.ObjectSchema;
/**
 * ParagraphFormFieldSpecification - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/PropertyValueSpecification, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from ParagraphFormFieldSpecificationJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const ParagraphFormFieldSpecificationOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for ParagraphFormFieldSpecification.
 *
 * If some data has a structure which matches a ParagraphFormFieldSpecification, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeParagraphFormFieldSpecification = validateParagraphFormFieldSpecification(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeParagraphFormFieldSpecification instanceof OaValidationError) {
 *   // From this point on, `maybeParagraphFormFieldSpecification` will have type `OaValidationError`
 *   const error = maybeParagraphFormFieldSpecification;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeParagraphFormFieldSpecification` will have type `ParagraphFormFieldSpecification`
 * const paragraphFormFieldSpecification = maybeParagraphFormFieldSpecification;
 * ```
 */
export declare function validateParagraphFormFieldSpecification(maybeParagraphFormFieldSpecification: unknown): ParagraphFormFieldSpecification | OaValidationError;
