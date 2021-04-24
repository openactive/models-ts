
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const AggregateOffer = s.intersection([
  s.type({'@type': s.literal('AggregateOffer')}),
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
      * An offer to provide this item&#x2014;for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use [[businessFunction]] to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a [[Demand]]. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
      *       
      */
      offers: s.union([schema.Offer,schema.Demand]),
      /**
      * The highest price of all offers available.\n\nUsage guidelines:\n\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
      */
      highPrice: s.union([s.nonNegativeFloat,s.string]),
      /**
      * The number of offers for the product.
      */
      offerCount: s.nonNegativeInt,
      /**
      * The lowest price of all offers available.\n\nUsage guidelines:\n\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
      */
      lowPrice: s.union([s.string,s.nonNegativeFloat]),
      /**
      * The delivery method(s) available for this offer.
      */
      availableDeliveryMethod: schema.enums.DeliveryMethod,
      /**
      * A product measurement, for example the inseam of pants, the wheel size of a bicycle, or the gauge of a screw. Usually an exact measurement, but can also be a range of measurements for adjustable products, for example belts and ski bindings.
      */
      hasMeasurement: schema.QuantitativeValue,
      /**
      * A predefined value from OfferItemCondition or a textual description of the condition of the product or service, or the products or services included in the offer.
      */
      itemCondition: schema.enums.OfferItemCondition,
      /**
      * The date when the item becomes valid.
      */
      validFrom: s.union([s.isoDateTimeString,s.string]),
      /**
      * The overall rating, based on a collection of reviews or ratings, of the item.
      */
      aggregateRating: schema.AggregateRating,
      /**
      * An additional offer that can only be obtained in combination with the first base offer (e.g. supplements and extensions that are available for a surcharge).
      */
      addOn: schema.Offer,
      /**
      * The offer price of a product, or of a price component when attached to PriceSpecification and its subtypes.\n\nUsage guidelines:\n\n* Use the [[priceCurrency]] property (with standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217) e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies e.g. "BTC"; well known names for [Local Exchange Tradings Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types e.g. "Ithaca HOUR") instead of including [ambiguous symbols](http://en.wikipedia.org/wiki/Dollar_sign#Currencies_that_use_the_dollar_or_peso_sign) such as '$' in the value.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.\n* Note that both [RDFa](http://www.w3.org/TR/xhtml-rdfa-primer/#using-the-content-attribute) and Microdata syntax allow the use of a "content=" attribute for publishing simple machine-readable values alongside more human-friendly formatting.\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.
      *       
      */
      price: s.union([s.nonNegativeFloat,s.string]),
      /**
      * An entity which offers (sells / leases / lends / loans) the services / goods.  A seller may also be a provider.
      */
      seller: s.union([schema.Organization,schema.Person]),
      /**
      * The GTIN-12 code of the product, or the product to which the offer refers. The GTIN-12 is the 12-digit GS1 Identification Key composed of a U.P.C. Company Prefix, Item Reference, and Check Digit used to identify trade items. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
      */
      gtin12: s.string,
      /**
      * Length of the lease for some [[Accommodation]], either particular to some [[Offer]] or in some cases intrinsic to the property.
      */
      leaseLength: s.union([s.string,schema.QuantitativeValue]),
      /**
      * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is valid.\n\nSee also [[ineligibleRegion]].
      *     
      */
      eligibleRegion: s.union([s.string,schema.GeoShape,schema.Place]),
      /**
      * The warranty promise(s) included in the offer.
      */
      warranty: schema.WarrantyPromise,
      /**
      * The end of the availability of the product or service included in the offer.
      */
      availabilityEnds: s.union([s.isoDateTimeString,s.string]),
      /**
      * The typical delay between the receipt of the order and the goods either leaving the warehouse or being prepared for pickup, in case the delivery method is on site pickup.
      */
      deliveryLeadTime: schema.QuantitativeValue,
      /**
      * The duration for which the given offer is valid.
      */
      eligibleDuration: schema.QuantitativeValue,
      /**
      * The beginning of the availability of the product or service included in the offer.
      */
      availabilityStarts: s.union([s.isoDateTimeString,s.string]),
      /**
      * The serial number or any alphanumeric identifier of a particular product. When attached to an offer, it is a shortcut for the serial number of the product included in the offer.
      */
      serialNumber: s.string,
      /**
      * The currency of the price, or a price component when attached to [[PriceSpecification]] and its subtypes.\n\nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217) e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies e.g. "BTC"; well known names for [Local Exchange Tradings Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types e.g. "Ithaca HOUR".
      */
      priceCurrency: s.string,
      /**
      * The payment method(s) accepted by seller for this offer.
      */
      acceptedPaymentMethod: s.union([schema.LoanOrCredit,schema.enums.PaymentMethod]),
      /**
      * Review of the item.
      */
      reviews: schema.Review,
      /**
      * One or more detailed price specifications, indicating the unit price and delivery or payment charges.
      */
      priceSpecification: schema.PriceSpecification,
      /**
      * The transaction volume, in a monetary unit, for which the offer or price specification is valid, e.g. for indicating a minimal purchasing volume, to express free shipping above a certain order volume, or to limit the acceptance of credit cards to purchases to a certain minimal amount.
      */
      eligibleTransactionVolume: schema.PriceSpecification,
      /**
      * The GTIN-13 code of the product, or the product to which the offer refers. This is equivalent to 13-digit ISBN codes and EAN UCC-13. Former 12-digit UPC codes can be converted into a GTIN-13 code by simply adding a preceding zero. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
      */
      gtin13: s.string,
      /**
      * A Global Trade Item Number ([GTIN](https://www.gs1.org/standards/id-keys/gtin)). GTINs identify trade items, including products and services, using numeric identification codes. The [[gtin]] property generalizes the earlier [[gtin8]], [[gtin12]], [[gtin13]], and [[gtin14]] properties. The GS1 [digital link specifications](https://www.gs1.org/standards/Digital-Link/) express GTINs as URLs. A correct [[gtin]] value should be a valid GTIN, which means that it should be an all-numeric string of either 8, 12, 13 or 14 digits, or a "GS1 Digital Link" URL based on such a string. The numeric component should also have a [valid GS1 check digit](https://www.gs1.org/services/check-digit-calculator) and meet the other rules for valid GTINs. See also [GS1's GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) and [Wikipedia](https://en.wikipedia.org/wiki/Global_Trade_Item_Number) for more details. Left-padding of the gtin values is not required or encouraged.
      *    
      */
      gtin: s.string,
      /**
      * A review of the item.
      */
      review: schema.Review,
      /**
      * The geographic area where a service or offered item is provided.
      */
      areaServed: s.union([s.string,schema.Place,schema.AdministrativeArea,schema.GeoShape]),
      /**
      * The amount of time that is required between accepting the offer and the actual usage of the resource or service.
      */
      advanceBookingRequirement: schema.QuantitativeValue,
      /**
      * An item being offered (or demanded). The transactional nature of the offer or demand is documented using [[businessFunction]], e.g. sell, lease etc. While several common expected types are listed explicitly in this definition, others can be used. Using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
      */
      itemOffered: s.union([schema.Trip,schema.Product,schema.MenuItem,schema.Service,schema.Event,schema.CreativeWork,schema.AggregateOffer]),
      /**
      * The current approximate inventory level for the item or items.
      */
      inventoryLevel: schema.QuantitativeValue,
      /**
      * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is not valid, e.g. a region where the transaction is not allowed.\n\nSee also [[eligibleRegion]].
      *       
      */
      ineligibleRegion: s.union([schema.GeoShape,s.string,schema.Place]),
      /**
      * The Manufacturer Part Number (MPN) of the product, or the product to which the offer refers.
      */
      mpn: s.string,
      /**
      * This links to a node or nodes indicating the exact quantity of the products included in  an [[Offer]] or [[ProductCollection]].
      */
      includesObject: schema.TypeAndQuantityNode,
      /**
      * A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.
      */
      category: s.union([schema.enums.PhysicalActivityCategory,s.string,s.urlString,schema.Thing]),
      /**
      * The availability of this item&#x2014;for example In stock, Out of stock, Pre-order, etc.
      */
      availability: schema.enums.ItemAvailability,
      /**
      * The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers.
      */
      sku: s.string,
      /**
      * The type(s) of customers for which the given offer is valid.
      */
      eligibleCustomerType: schema.enums.BusinessEntityType,
      /**
      * The date after which the price is no longer available.
      */
      priceValidUntil: s.string,
      /**
      * A pointer to the organization or person making the offer.
      */
      offeredBy: s.union([schema.Person,schema.Organization]),
      /**
      * The GTIN-14 code of the product, or the product to which the offer refers. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
      */
      gtin14: s.string,
      /**
      * The interval and unit of measurement of ordering quantities for which the offer or price specification is valid. This allows e.g. specifying that a certain freight charge is valid only for a certain quantity.
      */
      eligibleQuantity: schema.QuantitativeValue,
      /**
      * The place(s) from which the offer can be obtained (e.g. store locations).
      */
      availableAtOrFrom: schema.Place,
      /**
      * Indicates information about the shipping policies and options associated with an [[Offer]].
      */
      shippingDetails: schema.OfferShippingDetails,
      /**
      * The GTIN-8 code of the product, or the product to which the offer refers. This code is also known as EAN/UCC-8 or 8-digit EAN. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
      */
      gtin8: s.string,
      /**
      * The business function (e.g. sell, lease, repair, dispose) of the offer or component of a bundle (TypeAndQuantityNode). The default is http://purl.org/goodrelations/v1#Sell.
      */
      businessFunction: schema.enums.BusinessFunction,
      /**
      * The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours.
      */
      validThrough: s.union([s.isoDateTimeString,s.string]),
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
  AggregateOffer,
};