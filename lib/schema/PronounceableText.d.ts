import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as schema from '../schema';
/**
 * schema:PronounceableText
 */
export declare type PronounceableText = {
    '@type': 'PronounceableText';
    '@context'?: string | string[];
    /**
     * A unique url based identifier for the record
     */
    '@id'?: string;
    /**
     * Text value being annotated.
     */
    textValue?: string;
    /**
     * Representation of a text [[textValue]] using the specified [[speechToTextMarkup]]. For example the city name of Houston in IPA: /ˈhjuːstən/.
     */
    phoneticText?: string;
    /**
     * The language of the content or performance or used in an action. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[availableLanguage]].
     */
    inLanguage?: string | schema.LanguageOrSubClass;
    /**
     * Form of markup used. eg. [SSML](https://www.w3.org/TR/speech-synthesis11) or [IPA](https://www.wikidata.org/wiki/Property:P898).
     */
    speechToTextMarkup?: string;
};
/**
 * schema:PronounceableText
 *
 * This differs from PronounceableText because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type PronounceableTextOrSubClass = PronounceableText;
/**
 * schema:PronounceableText - Validation schema (w/ JOI)
 */
export declare const PronounceableTextJoiSchema: Joi.ObjectSchema;
/**
 * schema:PronounceableText - Validation schema (w/ JOI)
 *
 * This differs from PronounceableTextJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const PronounceableTextOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:PronounceableText.
 *
 * If some data has a structure which matches a schema:PronounceableText, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybePronounceableText = validatePronounceableText(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybePronounceableText instanceof OaValidationError) {
 *   // From this point on, `maybePronounceableText` will have type `OaValidationError`
 *   const error = maybePronounceableText;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybePronounceableText` will have type `PronounceableText`
 * const pronounceableText = maybePronounceableText;
 * ```
 */
export declare function validatePronounceableText(maybePronounceableText: unknown): PronounceableText | OaValidationError;
