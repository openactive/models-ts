
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 * 
 * This type is derived from https://schema.org/DigitalDocument, which means that any of this type's properties within schema.org may also be used.
 */
const Terms = s.intersection([
  s.type({'@type': s.literal('Terms')}),
  s.partial({
      /**
      * The name of the terms. The name must distinguish this from other terms fields provided, e.g. 'Terms and Conditions' or 'Privacy Policy'.
      */
      name: s.string,
      /**
      * The date and time at which the webpage containing the contents of the terms, located at the `url`, was last updated.
      *
      * ```json
      * "dateModified": "2018-01-27T12:00:00Z"
      * ```
      */
      dateModified: s.isoDateTimeString,
      requiresExplicitConsent: s.boolean,
      /**
      * The URL of the webpage containing the contents of the terms.
      */
      url: s.urlString,
  })
])

module.exports = {
  Terms,
};