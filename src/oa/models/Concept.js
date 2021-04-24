
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 * 
 * This type is derived from http://www.w3.org/2004/02/skos/core#Concept.
 */
const Concept = s.intersection([
  s.type({'@type': s.literal('Concept')}),
  s.partial({
      /**
      * A unique url based identifier for the record
      *
      * ```json
      * "@id": "https://openactive.io/activity-list#a454c7e6-52da-426d-9bd1-743e9d7d266d12345"
      * ```
      */
      '@id': s.urlString,
      /**
      * An alternative human readable string for use in user interfaces.
      *
      * ```json
      * "altLabel": [
      *   "Five a side"
      * ]
      * ```
      */
      altLabel: s.array(s.string),
      /**
      * A broader Concept URI
      *
      * ```json
      * "broader": [
      *   "https://openactive.io/activity-list#6ca15167-51da-4d91-a1ae-8a45dc47b0ea"
      * ]
      * ```
      */
      broader: s.array(s.urlString),
      /**
      * A human readable string that unambiguously defines the Concept, for use in user interfaces.
      *
      * ```json
      * "definition": "Latin American style of dance with Cuban origins."
      * ```
      */
      definition: s.string,
      /**
      * An alternative human readable string used to drive autocomplete search matches, that is hidden from the user.
      *
      * ```json
      * "hiddenLabel": [
      *   "5-a-side"
      * ]
      * ```
      */
      hiddenLabel: s.array(s.string),
      /**
      * A stable URL reference for the taxonomy, which must be `https://openactive.io/activity-list` to reference the OpenActive Activity List.
      *
      * ```json
      * "inScheme": "https://openactive.io/activity-list"
      * ```
      */
      inScheme: s.urlString,
      /**
      * A more specific concept URI
      *
      * ```json
      * "narrower": [
      *   "https://openactive.io/activity-list#b3829f3e-a63e-455f-a51c-1f50ecf85ad5"
      * ]
      * ```
      */
      narrower: s.array(s.urlString),
      /**
      * A human-readable identifier for the concept.
      *
      * ```json
      * "notation": "salsa"
      * ```
      */
      notation: s.string,
      /**
      * A human readable string that minimally describes the Concept, for use in user interfaces.
      *
      * ```json
      * "prefLabel": "Salsa"
      * ```
      */
      prefLabel: s.string,
      /**
      * A related Concept URI
      *
      * ```json
      * "related": [
      *   "https://openactive.io/activity-list#5cdf5ead-e19d-4619-9585-cfe509c3fe52"
      * ]
      * ```
      */
      related: s.array(s.urlString),
      /**
      * A reference to the Scheme URI, the existence of which indicates that this Concept is at the top level of the hierarchy.
      *
      * ```json
      * "topConceptOf": "https://openactive.io/activity-list"
      * ```
      */
      topConceptOf: s.urlString,
  })
])

module.exports = {
  Concept,
};