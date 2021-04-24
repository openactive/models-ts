
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const LocationFeatureSpecification = s.intersection([
  s.type({'@type': s.literal('LocationFeatureSpecification')}),
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
      * The date when the item becomes valid.
      */
      validFrom: s.union([s.isoDateTimeString,s.string]),
      /**
      * The hours during which this service or contact is available.
      */
      hoursAvailable: schema.OpeningHoursSpecification,
      /**
      * The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours.
      */
      validThrough: s.union([s.isoDateTimeString,s.string]),
      /**
      * The upper value of some characteristic or property.
      */
      maxValue: s.nonNegativeFloat,
      /**
      * A string or text indicating the unit of measurement. Useful if you cannot provide a standard unit code for
      * <a href='unitCode'>unitCode</a>.
      */
      unitText: s.string,
      /**
      * The unit of measurement given using the UN/CEFACT Common Code (3 characters) or a URL. Other codes than the UN/CEFACT Common Code may be used with a prefix followed by a colon.
      */
      unitCode: s.union([s.string,s.urlString]),
      /**
      * A secondary value that provides additional information on the original value, e.g. a reference temperature or a type of measurement.
      */
      valueReference: s.union([schema.QuantitativeValue,schema.enums.MeasurementTypeEnumeration,schema.DefinedTerm,schema.Enumeration,schema.PropertyValue,schema.enums.QualitativeValue,s.string,schema.StructuredValue]),
      /**
      * A technique or technology used in a [[Dataset]] (or [[DataDownload]], [[DataCatalog]]),
      * corresponding to the method used for measuring the corresponding variable(s) (described using [[variableMeasured]]). This is oriented towards scientific and scholarly dataset publication but may have broader applicability; it is not intended as a full representation of measurement, but rather as a high level summary for dataset discovery.
      * 
      * For example, if [[variableMeasured]] is: molecule concentration, [[measurementTechnique]] could be: "mass spectrometry" or "nmr spectroscopy" or "colorimetry" or "immunofluorescence".
      * 
      * If the [[variableMeasured]] is "depression rating", the [[measurementTechnique]] could be "Zung Scale" or "HAM-D" or "Beck Depression Inventory".
      * 
      * If there are several [[variableMeasured]] properties recorded for some given data object, use a [[PropertyValue]] for each [[variableMeasured]] and attach the corresponding [[measurementTechnique]].
      *       
      */
      measurementTechnique: s.union([s.string,s.urlString]),
      /**
      * The lower value of some characteristic or property.
      */
      minValue: s.nonNegativeFloat,
      /**
      * The value of the quantitative value or property value node.\n\n* For [[QuantitativeValue]] and [[MonetaryAmount]], the recommended type for values is 'Number'.\n* For [[PropertyValue]], it can be 'Text;', 'Number', 'Boolean', or 'StructuredValue'.\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
      */
      value: s.union([s.nonNegativeFloat,schema.StructuredValue,s.boolean,s.string]),
      /**
      * A commonly used identifier for the characteristic represented by the property, e.g. a manufacturer or a standard code for a property. propertyID can be
      * (1) a prefixed string, mainly meant to be used with standards for product properties; (2) a site-specific, non-prefixed string (e.g. the primary key of the property or the vendor-specific id of the property), or (3)
      * a URL indicating the type of the property, either pointing to an external vocabulary, or a Web resource that describes the property (e.g. a glossary entry).
      * Standards bodies should promote a standard prefix for the identifiers of properties from their standards.
      */
      propertyID: s.union([s.string,s.urlString]),
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
  LocationFeatureSpecification,
};