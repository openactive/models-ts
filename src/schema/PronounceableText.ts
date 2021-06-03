// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * schema:PronounceableText
 */
export type PronounceableText = {
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
export type PronounceableTextOrSubClass =
  | PronounceableText
  ;

/**
 * schema:PronounceableText - Validation schema (w/ JOI)
 */
export const PronounceableTextJoiSchema = Joi.object({
  '@type': Joi.string().valid('PronounceableText').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  '@id': Joi.string().uri(),
  textValue: Joi.string(),
  phoneticText: Joi.string(),
  inLanguage: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.LanguageOrSubClassJoiSchema), Joi.string().uri()),
  speechToTextMarkup: Joi.string(),
});

/**
 * schema:PronounceableText - Validation schema (w/ JOI)
 *
 * This differs from PronounceableTextJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const PronounceableTextOrSubClassJoiSchema = Joi.alternatives().try([
  PronounceableTextJoiSchema,
]);

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
export function validatePronounceableText(maybePronounceableText: unknown): PronounceableText | OaValidationError {
  const { value, error } = PronounceableTextJoiSchema.validate(maybePronounceableText);
  if (error) {
    return new OaValidationError('PronounceableText', maybePronounceableText, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as PronounceableText;
}
