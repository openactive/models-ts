
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const PronounceableText = s.intersection([
  s.type({'@type': s.literal('PronounceableText')}),
  s.partial({
      /**
      * Text value being annotated.
      */
      textValue: s.string,
      /**
      * Representation of a text [[textValue]] using the specified [[speechToTextMarkup]]. For example the city name of Houston in IPA: /ˈhjuːstən/.
      */
      phoneticText: s.string,
      /**
      * The language of the content or performance or used in an action. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[availableLanguage]].
      */
      inLanguage: s.union([s.string,schema.Language]),
      /**
      * Form of markup used. eg. [SSML](https://www.w3.org/TR/speech-synthesis11) or [IPA](https://www.wikidata.org/wiki/Property:P898).
      */
      speechToTextMarkup: s.string,
  })
])

module.exports = {
  PronounceableText,
};