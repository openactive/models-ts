
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const WorkBasedProgram = s.intersection([
  s.type({'@type': s.literal('WorkBasedProgram')}),
  s.partial({
      /**
      * The identifier property represents any kind of identifier for any kind of [[Thing]], such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See [background notes](/docs/datamodel.html#identifierBg) for more details.
      *         
      */
      identifier: s.union([schema.PropertyValue,s.urlString,s.string]),
      /**
      * The name of the item.
      */
      name: s.string,
      /**
      * A description of the item.
      */
      description: s.string,
      /**
      * The estimated salary earned while in the program.
      */
      trainingSalary: schema.MonetaryAmountDistribution,
      /**
      * A category describing the job, preferably using a term from a taxonomy such as [BLS O*NET-SOC](http://www.onetcenter.org/taxonomy.html), [ISCO-08](https://www.ilo.org/public/english/bureau/stat/isco/isco08/) or similar, with the property repeated for each applicable value. Ideally the taxonomy should be identified, and both the textual label and formal code for the category should be provided.\n
      * Note: for historical reasons, any textual label and formal code provided as a literal may be assumed to be from O*NET-SOC.
      */
      occupationalCategory: s.union([schema.CategoryCode,s.string]),
      /**
      * A course or class that is one of the learning opportunities that constitute an educational / occupational program. No information is implied about whether the course is mandatory or optional; no guarantee is implied about whether the course will be available to everyone on the program.
      */
      hasCourse: schema.Course,
      /**
      * The type of educational or occupational program. For example, classroom, internship, alternance, etc..
      */
      programType: s.union([schema.DefinedTerm,s.string]),
      /**
      * The date at which the program begins collecting applications for the next enrollment cycle.
      */
      applicationStartDate: s.string,
      /**
      * An offer to provide this item&#x2014;for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use [[businessFunction]] to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a [[Demand]]. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
      *       
      */
      offers: s.union([schema.Offer,schema.Demand]),
      /**
      * The start date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
      */
      startDate: s.union([s.isoDateTimeString,s.string]),
      /**
      * The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
      */
      provider: s.union([schema.Organization,schema.Person]),
      /**
      * The number of times terms of study are offered per year. Semesters and quarters are common units for term. For example, if the student can only take 2 semesters for the program in one year, then termsPerYear should be 2.
      */
      termsPerYear: s.nonNegativeFloat,
      /**
      * The expected salary upon completing the training.
      */
      salaryUponCompletion: schema.MonetaryAmountDistribution,
      /**
      * A description of the qualification, award, certificate, diploma or other occupational credential awarded as a consequence of successful completion of this course or program.
      */
      occupationalCredentialAwarded: s.union([s.urlString,s.string,schema.EducationalOccupationalCredential]),
      /**
      * A financial aid type or program which students may use to pay for tuition or fees associated with the program.
      */
      financialAidEligible: s.union([schema.DefinedTerm,s.string]),
      /**
      * The day of the week for which these opening hours are valid.
      */
      dayOfWeek: schema.enums.DayOfWeek,
      /**
      * The end date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
      */
      endDate: s.union([s.string,s.isoDateTimeString]),
      /**
      * Similar to courseMode, The medium or means of delivery of the program as a whole. The value may either be a text label (e.g. "online", "onsite" or "blended"; "synchronous" or "asynchronous"; "full-time" or "part-time") or a URL reference to a term from a controlled vocabulary (e.g. https://ceds.ed.gov/element/001311#Asynchronous ).
      */
      educationalProgramMode: s.union([s.string,s.urlString]),
      /**
      * The maximum number of students who may be enrolled in the program.
      */
      maximumEnrollment: s.nonNegativeInt,
      /**
      * The amount of time in a term as defined by the institution. A term is a length of time where students take one or more classes. Semesters and quarters are common units for term.
      */
      termDuration: s.string,
      /**
      * The date at which the program stops collecting applications for the next enrollment cycle.
      */
      applicationDeadline: s.string,
      /**
      * The number of credits or units a full-time student would be expected to take in 1 term however 'term' is defined by the institution.
      */
      typicalCreditsPerTerm: s.union([s.nonNegativeInt,schema.StructuredValue]),
      /**
      * The expected length of time to complete the program if attending full-time.
      */
      timeToComplete: s.string,
      /**
      * The number of credits or units awarded by a Course or required to complete an EducationalOccupationalProgram.
      */
      numberOfCredits: s.union([schema.StructuredValue,s.nonNegativeInt]),
      /**
      * The time of day the program normally runs. For example, "evenings".
      */
      timeOfDay: s.string,
      /**
      * A description of the qualification, award, certificate, diploma or other educational credential awarded as a consequence of successful completion of this course or program.
      */
      educationalCredentialAwarded: s.union([s.urlString,s.string,schema.EducationalOccupationalCredential]),
      /**
      * Prerequisites for enrolling in the program.
      */
      programPrerequisites: s.union([schema.Course,schema.AlignmentObject,schema.EducationalOccupationalCredential,s.string]),
      /**
      * URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website.
      */
      sameAs: s.urlString,
      /**
      * A CreativeWork or Event about this Thing.
      */
      subjectOf: s.union([schema.Event,schema.CreativeWork]),
      /**
      * Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role.
      */
      potentialAction: schema.Action,
      /**
      * Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See [background notes](/docs/datamodel.html#mainEntityBackground) for details.
      */
      mainEntityOfPage: s.union([schema.CreativeWork,s.urlString]),
      /**
      * An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the 'typeof' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.
      */
      additionalType: s.urlString,
      /**
      * An alias for the item.
      */
      alternateName: s.string,
      /**
      * URL of the item.
      */
      url: s.urlString,
      /**
      * An image of the item. This can be a [[URL]] or a fully described [[ImageObject]].
      */
      image: s.union([schema.ImageObject,s.urlString]),
      /**
      * A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.
      */
      disambiguatingDescription: s.string,
  })
])

module.exports = {
  WorkBasedProgram,
};