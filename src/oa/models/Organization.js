
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 * 
 * This type is derived from https://schema.org/Organization, which means that any of this type's properties within schema.org may also be used.
 */
const Organization = s.intersection([
  s.type({'@type': s.literal('Organization')}),
  s.partial({
      /**
      * A local non-URI identifier for the resource
      *
      * ```json
      * "identifier": "SB1234"
      * ```
      */
      identifier: s.union([s.nonNegativeInt,s.string,oa.PropertyValue,s.array(oa.PropertyValue)]),
      /**
      * The name of the Organization
      *
      * ```json
      * "name": "Central Speedball Association"
      * ```
      */
      name: s.string,
      /**
      * A plain text description of the Organization, which must not include HTML or other markup.
      *
      * ```json
      * "description": "The national governing body of cycling"
      * ```
      */
      description: s.string,
      /**
      * A unique url based identifier for the record
      *
      * ```json
      * "@id": "https://id.bookingsystem.example.com/organizers/112345"
      * ```
      */
      '@id': s.urlString,
      /**
      * Address of the Seller, used on tax receipts.
      */
      address: oa.PostalAddress,
      /**
      * General enquiries e-mail address for the organization.
      *
      * ```json
      * "email": "info@example.com"
      * ```
      */
      email: s.string,
      /**
      * The official name of the organization, e.g. the registered company name.
      *
      * ```json
      * "legalName": "Central Speedball Ltd"
      * ```
      */
      legalName: s.string,
      /**
      * A logo for the Organization.
      *
      * ```json
      * "logo": {
      *   "@type": "ImageObject",
      *   "url": "http://example.com/static/image/speedball_large.jpg"
      * }
      * ```
      */
      logo: oa.ImageObject,
      /**
      * Lists the URL(s) of the official social media profile pages associated with the organization.
      *
      * ```json
      * "sameAs": [
      *   "https://www.facebook.com/everyoneactive/",
      *   "https://twitter.com/everyoneactive"
      * ]
      * ```
      */
      sameAs: s.array(s.urlString),
      /**
      * Either  https://openactive.io/TaxNet or  https://openactive.io/TaxGross
      */
      taxMode: oa.enums.TaxMode,
      /**
      * The telephone number of the Organization
      *
      * ```json
      * "telephone": "01234 567890"
      * ```
      */
      telephone: s.string,
      /**
      * The terms of service of the Seller.
      */
      termsOfService: s.array(oa.Terms),
      /**
      * A definitive canonical URL for the Organization.
      *
      * ```json
      * "url": "http://www.speedball-world.com"
      * ```
      */
      url: s.urlString,
      /**
      * The Value-added Tax ID of the of the Seller.
      */
      vatID: s.string,
      /**
      * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
      * Sometimes a description is stored with formatting (e.g. href, bold, italics, embedded YouTube videos). This formatting can be useful for data consumers. This property must contain HTML.
      * 
      * If you are using this property, please join the discussion at proposal [#276](https://github.com/openactive/modelling-opportunity-data/issues/276).
      */
      formattedDescription: s.string,
      /**
      * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
      * A related video object.
      * 
      * If you are using this property, please join the discussion at proposal [#88](https://github.com/openactive/modelling-opportunity-data/issues/88).
      */
      video: s.array(oa.VideoObject),
      /**
      * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
      * An array of URLs, each of which describe the formal criteria that are met by the organizer.
      * 
      * If you are using this property, please join the discussion at proposal [#236](https://github.com/openactive/modelling-opportunity-data/issues/236).
      */
      formalCriteriaMet: s.array(s.urlString),
  })
])

module.exports = {
  Organization,
};