
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 * 
 * [NOTICE: This is a beta class, and is highly likely to change in future versions of this library.] 
 * 
 * This type is derived from https://schema.org/Person, which means that any of this type's properties within schema.org may also be used.
 */
const AuthenticatedPerson = s.intersection([
  s.type({'@type': s.literal('AuthenticatedPerson')}),
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
      * A full name for the person.
      * This person must have given permission for their personal information to be shared as part of the open data.
      *
      * ```json
      * "name": "Daley Thompson"
      * ```
      */
      name: s.string,
      /**
      * A plain text description of the Person, which must not include HTML or other markup.
      *
      * ```json
      * "description": "The leader of the coaching team"
      * ```
      */
      description: s.string,
      /**
      * A unique url based identifier for the record
      *
      * ```json
      * "@id": "https://example.com/person/12345"
      * ```
      */
      '@id': s.urlString,
      /**
      * Address of the Seller, used on tax receipts.
      */
      address: oa.PostalAddress,
      /**
      * The e-mail address of the person.
      * This person must have given permission for their personal information to be shared as part of the open data.
      *
      * ```json
      * "email": "jane.smith@example.com"
      * ```
      */
      email: s.string,
      /**
      * A last name for the person.
      * This person must have given permission for their personal information to be shared as part of the open data.
      *
      * ```json
      * "familyName": "Thompson"
      * ```
      */
      familyName: s.string,
      /**
      * Indicates the gender of the person.
      *
      * ```json
      * "gender": "https://schema.org/Female"
      * ```
      */
      gender: schema.enums.GenderType,
      /**
      * A first name for the person.
      * This person must have given permission for their personal information to be shared as part of the open data.
      *
      * ```json
      * "givenName": "Daley"
      * ```
      */
      givenName: s.string,
      /**
      * The job title of a person
      * This person must have given permission for their personal information to be shared as part of the open data.
      *
      * ```json
      * "jobTitle": "Team Captain"
      * ```
      */
      jobTitle: s.string,
      /**
      * The official name of the organization, e.g. the registered company name.
      *
      * ```json
      * "legalName": "Central Speedball Ltd"
      * ```
      */
      legalName: s.string,
      /**
      * A logo for the person.
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
      * Lists the URL(s) of the official social media profile pages associated with the person.
      *
      * ```json
      * "sameAs": "https://example.org/example-org"
      * ```
      */
      sameAs: s.array(s.urlString),
      /**
      * Either  https://openactive.io/TaxNet or  https://openactive.io/TaxGross
      */
      taxMode: oa.enums.TaxMode,
      /**
      * The telephone number of the person
      * This person must have given permission for their personal information to be shared as part of the open data.
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
      * A URL where more information about the person may be found
      *
      * ```json
      * "url": "http://www.example.com/"
      * ```
      */
      url: s.urlString,
      /**
      * The Value-added Tax ID of the of the Seller.
      */
      vatID: s.string,
      /**
      * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
      * Token indicating the Broker's authorisation to book on behalf of a Customer.
      * 
      * If you are using this property, please join the discussion at proposal [#120](https://github.com/openactive/open-booking-api/issues/120).
      */
      accessToken: s.string,
      /**
      * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
      * Sometimes a description is stored with formatting (e.g. href, bold, italics, embedded YouTube videos). This formatting can be useful for data consumers. This property must contain HTML.
      * 
      * If you are using this property, please join the discussion at proposal [#276](https://github.com/openactive/modelling-opportunity-data/issues/276).
      */
      formattedDescription: s.string,
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
  AuthenticatedPerson,
};