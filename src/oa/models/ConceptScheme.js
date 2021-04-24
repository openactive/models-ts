
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 * 
 * This type is derived from http://www.w3.org/2004/02/skos/core#ConceptScheme.
 */
const ConceptScheme = s.intersection([
  s.type({'@type': s.literal('ConceptScheme')}),
  s.partial({
      /**
      * The title of the scheme
      *
      * ```json
      * "title": "Activity List"
      * ```
      */
      title: s.string,
      /**
      * A plain text description of the taxonomy, which must not include HTML or other markup.
      *
      * ```json
      * "description": "An example activity list."
      * ```
      */
      description: s.string,
      /**
      * A unique url based identifier for the record
      *
      * ```json
      * "@id": "https://example.com/scheme/12345"
      * ```
      */
      '@id': s.urlString,
      /**
      * A collection of concepts that are part of this scheme
      *
      * ```json
      * "concept": [
      *   {
      *     "@id": "https://example.com/concept/martial-arts",
      *     "type": "Concept",
      *     "prefLabel": "Martial Arts",
      *     "inScheme": "https://example.com/scheme/123",
      *     "narrower": "https://example.com/concept/martial-arts/karate"
      *   }
      * ]
      * ```
      */
      concept: s.array(oa.Concept),
      /**
      * Reference to the license under which the activity list has been published.
      *
      * ```json
      * "license": "https://example.com/license/MIT"
      * ```
      */
      license: s.urlString,
      /**
      * A URL to a web page (or section of a page) that describes the concept scheme.
      *
      * ```json
      * "url": "https://example.com/scheme/1234"
      * ```
      */
      url: s.urlString,
  })
])

module.exports = {
  ConceptScheme,
};