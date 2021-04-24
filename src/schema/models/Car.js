
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const Car = s.intersection([
  s.type({'@type': s.literal('Car')}),
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
      * The permitted total weight of cargo and installations (e.g. a roof rack) on top of the vehicle.\n\nTypical unit code(s): KGM for kilogram, LBR for pound\n\n* Note 1: You can indicate additional information in the [[name]] of the [[QuantitativeValue]] node.\n* Note 2: You may also link to a [[QualitativeValue]] node that provides additional information using [[valueReference]]\n* Note 3: Note that you can use [[minValue]] and [[maxValue]] to indicate ranges.
      */
      roofLoad: schema.QuantitativeValue,
      /**
      * The ACRISS Car Classification Code is a code used by many car rental companies, for classifying vehicles. ACRISS stands for Association of Car Rental Industry Systems and Standards.
      */
      acrissCode: s.string,
      /**
      * The release date of a vehicle model (often used to differentiate versions of the same make and model).
      */
      vehicleModelDate: s.string,
      /**
      * The permitted weight of passengers and cargo, EXCLUDING the weight of the empty vehicle.\n\nTypical unit code(s): KGM for kilogram, LBR for pound\n\n* Note 1: Many databases specify the permitted TOTAL weight instead, which is the sum of [[weight]] and [[payload]]\n* Note 2: You can indicate additional information in the [[name]] of the [[QuantitativeValue]] node.\n* Note 3: You may also link to a [[QualitativeValue]] node that provides additional information using [[valueReference]].\n* Note 4: Note that you can use [[minValue]] and [[maxValue]] to indicate ranges.
      */
      payload: schema.QuantitativeValue,
      /**
      * The type of component used for transmitting the power from a rotating power source to the wheels or other relevant component(s) ("gearbox" for cars).
      */
      vehicleTransmission: s.union([s.urlString,s.string,schema.enums.QualitativeValue]),
      /**
      * The number of doors.\n\nTypical unit code(s): C62
      */
      numberOfDoors: s.union([s.nonNegativeFloat,schema.QuantitativeValue]),
      /**
      * The release date of a vehicle model (often used to differentiate versions of the same make and model).
      */
      modelDate: s.string,
      /**
      * The distance traveled per unit of fuel used; most commonly miles per gallon (mpg) or kilometers per liter (km/L).\n\n* Note 1: There are unfortunately no standard unit codes for miles per gallon or kilometers per liter. Use [[unitText]] to indicate the unit of measurement, e.g. mpg or km/L.\n* Note 2: There are two ways of indicating the fuel consumption, [[fuelConsumption]] (e.g. 8 liters per 100 km) and [[fuelEfficiency]] (e.g. 30 miles per gallon). They are reciprocal.\n* Note 3: Often, the absolute value is useful only when related to driving speed ("at 80 km/h") or usage pattern ("city traffic"). You can use [[valueReference]] to link the value for the fuel economy to another value.
      */
      fuelEfficiency: schema.QuantitativeValue,
      /**
      * The type of fuel suitable for the engine or engines of the vehicle. If the vehicle has only one engine, this property can be attached directly to the vehicle.
      */
      fuelType: s.union([schema.enums.QualitativeValue,s.urlString,s.string]),
      /**
      * Indicates the design and body style of the vehicle (e.g. station wagon, hatchback, etc.).
      */
      bodyType: s.union([s.urlString,s.string,schema.enums.QualitativeValue]),
      /**
      * The distance between the centers of the front and rear wheels.\n\nTypical unit code(s): CMT for centimeters, MTR for meters, INH for inches, FOT for foot/feet
      */
      wheelbase: schema.QuantitativeValue,
      /**
      * The type or material of the interior of the vehicle (e.g. synthetic fabric, leather, wood, etc.). While most interior types are characterized by the material used, an interior type can also be based on vehicle usage or target audience.
      */
      vehicleInteriorType: s.string,
      /**
      * The permitted vertical load (TWR) of a trailer attached to the vehicle. Also referred to as Tongue Load Rating (TLR) or Vertical Load Rating (VLR)\n\nTypical unit code(s): KGM for kilogram, LBR for pound\n\n* Note 1: You can indicate additional information in the [[name]] of the [[QuantitativeValue]] node.\n* Note 2: You may also link to a [[QualitativeValue]] node that provides additional information using [[valueReference]].\n* Note 3: Note that you can use [[minValue]] and [[maxValue]] to indicate ranges.
      */
      tongueWeight: schema.QuantitativeValue,
      /**
      * Information about the engine or engines of the vehicle.
      */
      vehicleEngine: schema.EngineSpecification,
      /**
      * The date of the first registration of the vehicle with the respective public authorities.
      */
      dateVehicleFirstRegistered: s.string,
      /**
      * The speed range of the vehicle. If the vehicle is powered by an engine, the upper limit of the speed range (indicated by [[maxValue]] should be the maximum speed achievable under regular conditions.\n\nTypical unit code(s): KMH for km/h, HM for mile per hour (0.447 04 m/s), KNT for knot\n\n*Note 1: Use [[minValue]] and [[maxValue]] to indicate the range. Typically, the minimal value is zero.\n* Note 2: There are many different ways of measuring the speed range. You can link to information about how the given value has been determined using the [[valueReference]] property.
      */
      speed: schema.QuantitativeValue,
      /**
      * The drive wheel configuration, i.e. which roadwheels will receive torque from the vehicle's engine via the drivetrain.
      */
      driveWheelConfiguration: s.union([schema.DriveWheelConfigurationValue,s.string]),
      /**
      * The number of persons that can be seated (e.g. in a vehicle), both in terms of the physical space available, and in terms of limitations set by law.\n\nTypical unit code(s): C62 for persons 
      */
      seatingCapacity: s.union([s.nonNegativeFloat,schema.QuantitativeValue]),
      /**
      * The capacity of the fuel tank or in the case of electric cars, the battery. If there are multiple components for storage, this should indicate the total of all storage of the same type.\n\nTypical unit code(s): LTR for liters, GLL of US gallons, GLI for UK / imperial gallons, AMH for ampere-hours (for electrical vehicles).
      */
      fuelCapacity: schema.QuantitativeValue,
      /**
      * The available volume for cargo or luggage. For automobiles, this is usually the trunk volume.\n\nTypical unit code(s): LTR for liters, FTQ for cubic foot/feet\n\nNote: You can use [[minValue]] and [[maxValue]] to indicate ranges.
      */
      cargoVolume: schema.QuantitativeValue,
      /**
      * The Vehicle Identification Number (VIN) is a unique serial number used by the automotive industry to identify individual motor vehicles.
      */
      vehicleIdentificationNumber: s.string,
      /**
      * Indicates whether the vehicle has been used for special purposes, like commercial rental, driving school, or as a taxi. The legislation in many countries requires this information to be revealed when offering a car for sale.
      */
      vehicleSpecialUsage: s.union([s.string,schema.enums.CarUsageType]),
      /**
      * The CO2 emissions in g/km. When used in combination with a QuantitativeValue, put "g/km" into the unitText property of that value, since there is no UN/CEFACT Common Code for "g/km".
      */
      emissionsCO2: s.nonNegativeFloat,
      /**
      * The number of passengers that can be seated in the vehicle, both in terms of the physical space available, and in terms of limitations set by law.\n\nTypical unit code(s): C62 for persons.
      */
      vehicleSeatingCapacity: s.union([s.nonNegativeFloat,schema.QuantitativeValue]),
      /**
      * The permitted weight of a trailer attached to the vehicle.\n\nTypical unit code(s): KGM for kilogram, LBR for pound\n* Note 1: You can indicate additional information in the [[name]] of the [[QuantitativeValue]] node.\n* Note 2: You may also link to a [[QualitativeValue]] node that provides additional information using [[valueReference]].\n* Note 3: Note that you can use [[minValue]] and [[maxValue]] to indicate ranges.
      */
      trailerWeight: schema.QuantitativeValue,
      /**
      * The number of owners of the vehicle, including the current one.\n\nTypical unit code(s): C62
      */
      numberOfPreviousOwners: s.union([schema.QuantitativeValue,s.nonNegativeFloat]),
      /**
      * The date the item e.g. vehicle was purchased by the current owner.
      */
      purchaseDate: s.string,
      /**
      * A textual description of known damages, both repaired and unrepaired.
      */
      knownVehicleDamages: s.string,
      /**
      * The total distance travelled by the particular vehicle since its initial production, as read from its odometer.\n\nTypical unit code(s): KMT for kilometers, SMI for statute miles
      */
      mileageFromOdometer: schema.QuantitativeValue,
      /**
      * The amount of fuel consumed for traveling a particular distance or temporal duration with the given vehicle (e.g. liters per 100 km).\n\n* Note 1: There are unfortunately no standard unit codes for liters per 100 km.  Use [[unitText]] to indicate the unit of measurement, e.g. L/100 km.\n* Note 2: There are two ways of indicating the fuel consumption, [[fuelConsumption]] (e.g. 8 liters per 100 km) and [[fuelEfficiency]] (e.g. 30 miles per gallon). They are reciprocal.\n* Note 3: Often, the absolute value is useful only when related to driving speed ("at 80 km/h") or usage pattern ("city traffic"). You can use [[valueReference]] to link the value for the fuel consumption to another value.
      */
      fuelConsumption: schema.QuantitativeValue,
      /**
      * The number of axles.\n\nTypical unit code(s): C62
      */
      numberOfAxles: s.union([s.nonNegativeFloat,schema.QuantitativeValue]),
      /**
      * The position of the steering wheel or similar device (mostly for cars).
      */
      steeringPosition: schema.SteeringPositionValue,
      /**
      * The time needed to accelerate the vehicle from a given start velocity to a given target velocity.\n\nTypical unit code(s): SEC for seconds\n\n* Note: There are unfortunately no standard unit codes for seconds/0..100 km/h or seconds/0..60 mph. Simply use "SEC" for seconds and indicate the velocities in the [[name]] of the [[QuantitativeValue]], or use [[valueReference]] with a [[QuantitativeValue]] of 0..60 mph or 0..100 km/h to specify the reference speeds.
      */
      accelerationTime: schema.QuantitativeValue,
      /**
      * A short text indicating the configuration of the vehicle, e.g. '5dr hatchback ST 2.5 MT 225 hp' or 'limited edition'.
      */
      vehicleConfiguration: s.string,
      /**
      * The number or type of airbags in the vehicle.
      */
      numberOfAirbags: s.union([s.nonNegativeFloat,s.string]),
      /**
      * The permitted total weight of the loaded vehicle, including passengers and cargo and the weight of the empty vehicle.\n\nTypical unit code(s): KGM for kilogram, LBR for pound\n\n* Note 1: You can indicate additional information in the [[name]] of the [[QuantitativeValue]] node.\n* Note 2: You may also link to a [[QualitativeValue]] node that provides additional information using [[valueReference]].\n* Note 3: Note that you can use [[minValue]] and [[maxValue]] to indicate ranges.
      */
      weightTotal: schema.QuantitativeValue,
      /**
      * Indicates that the vehicle meets the respective emission standard.
      */
      meetsEmissionStandard: s.union([s.urlString,s.string,schema.enums.QualitativeValue]),
      /**
      * The date of production of the item, e.g. vehicle.
      */
      productionDate: s.string,
      /**
      * A [callsign](https://en.wikipedia.org/wiki/Call_sign), as used in broadcasting and radio communications to identify people, radio and TV stations, or vehicles.
      */
      callSign: s.string,
      /**
      * The color or color combination of the interior of the vehicle.
      */
      vehicleInteriorColor: s.string,
      /**
      * The total number of forward gears available for the transmission system of the vehicle.\n\nTypical unit code(s): C62
      */
      numberOfForwardGears: s.union([schema.QuantitativeValue,s.nonNegativeFloat]),
      /**
      * A product measurement, for example the inseam of pants, the wheel size of a bicycle, or the gauge of a screw. Usually an exact measurement, but can also be a range of measurements for adjustable products, for example belts and ski bindings.
      */
      hasMeasurement: schema.QuantitativeValue,
      /**
      * A predefined value from OfferItemCondition or a textual description of the condition of the product or service, or the products or services included in the offer.
      */
      itemCondition: schema.enums.OfferItemCondition,
      /**
      * The overall rating, based on a collection of reviews or ratings, of the item.
      */
      aggregateRating: schema.AggregateRating,
      /**
      * A standardized size of a product or creative work, specified either through a simple textual string (for example 'XL', '32Wx34L'), a  QuantitativeValue with a unitCode, or a comprehensive and structured [[SizeSpecification]]; in other cases, the [[width]], [[height]], [[depth]] and [[weight]] properties may be more applicable. 
      */
      size: s.union([schema.DefinedTerm,schema.SizeSpecification,schema.QuantitativeValue,s.string]),
      /**
      * The depth of the item.
      */
      depth: s.union([schema.Distance,schema.QuantitativeValue]),
      /**
      * The height of the item.
      */
      height: s.union([schema.QuantitativeValue,schema.Distance]),
      /**
      * The GTIN-12 code of the product, or the product to which the offer refers. The GTIN-12 is the 12-digit GS1 Identification Key composed of a U.P.C. Company Prefix, Item Reference, and Check Digit used to identify trade items. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
      */
      gtin12: s.string,
      /**
      * A pointer to another, functionally similar product (or multiple products).
      */
      isSimilarTo: s.union([schema.Product,schema.Service]),
      /**
      * The weight of the product or person.
      */
      weight: schema.QuantitativeValue,
      /**
      * Indicates a MerchantReturnPolicy that may be applicable.
      */
      hasMerchantReturnPolicy: schema.MerchantReturnPolicy,
      /**
      * An offer to provide this item&#x2014;for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use [[businessFunction]] to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a [[Demand]]. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
      *       
      */
      offers: s.union([schema.Offer,schema.Demand]),
      /**
      * The width of the item.
      */
      width: s.union([schema.QuantitativeValue,schema.Distance]),
      /**
      * A pointer to another product (or multiple products) for which this product is a consumable.
      */
      isConsumableFor: schema.Product,
      /**
      * Review of the item.
      */
      reviews: schema.Review,
      /**
      * An award won by or for this item.
      */
      award: s.string,
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
      * Defines the energy efficiency Category (also known as "class" or "rating") for a product according to an international energy efficiency standard.
      */
      hasEnergyConsumptionDetails: schema.EnergyConsumptionDetails,
      /**
      * The color of the product.
      */
      color: s.string,
      /**
      * A property-value pair representing an additional characteristics of the entitity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.\n\nNote: Publishers should be aware that applications designed to use specific schema.org properties (e.g. https://schema.org/width, https://schema.org/color, https://schema.org/gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.
      * 
      */
      additionalProperty: schema.PropertyValue,
      /**
      * An associated logo.
      */
      logo: s.union([schema.ImageObject,s.urlString]),
      /**
      * The Manufacturer Part Number (MPN) of the product, or the product to which the offer refers.
      */
      mpn: s.string,
      /**
      * Indicates the [[productGroupID]] for a [[ProductGroup]] that this product [[isVariantOf]]. 
      */
      inProductGroupWithID: s.string,
      /**
      * A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.
      */
      category: s.union([schema.enums.PhysicalActivityCategory,s.string,s.urlString,schema.Thing]),
      /**
      * Indicates the kind of product that this is a variant of. In the case of [[ProductModel]], this is a pointer (from a ProductModel) to a base product from which this product is a variant. It is safe to infer that the variant inherits all product features from the base model, unless defined locally. This is not transitive. In the case of a [[ProductGroup]], the group description also serves as a template, representing a set of Products that vary on explicitly defined, specific dimensions only (so it defines both a set of variants, as well as which values distinguish amongst those variants). When used with [[ProductGroup]], this property can apply to any [[Product]] included in the group.
      */
      isVariantOf: s.union([schema.ProductGroup,schema.ProductModel]),
      /**
      * A slogan or motto associated with the item.
      */
      slogan: s.string,
      /**
      * A pattern that something has, for example 'polka dot', 'striped', 'Canadian flag'. Values are typically expressed as text, although links to controlled value schemes are also supported.
      */
      pattern: s.union([s.string,schema.DefinedTerm]),
      /**
      * The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers.
      */
      sku: s.string,
      /**
      * Indicates the [NATO stock number](https://en.wikipedia.org/wiki/NATO_Stock_Number) (nsn) of a [[Product]]. 
      */
      nsn: s.string,
      /**
      * The GTIN-14 code of the product, or the product to which the offer refers. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
      */
      gtin14: s.string,
      /**
      * A pointer to another product (or multiple products) for which this product is an accessory or spare part.
      */
      isAccessoryOrSparePartFor: schema.Product,
      /**
      * The manufacturer of the product.
      */
      manufacturer: schema.Organization,
      /**
      * The model of the product. Use with the URL of a ProductModel or a textual representation of the model identifier. The URL of the ProductModel can be from an external source. It is recommended to additionally provide strong product identifiers via the gtin8/gtin13/gtin14 and mpn properties.
      */
      model: s.union([schema.ProductModel,s.string]),
      /**
      * The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person.
      */
      brand: s.union([schema.Brand,schema.Organization]),
      /**
      * The release date of a product or product model. This can be used to distinguish the exact variant of a product.
      */
      releaseDate: s.string,
      /**
      * The GTIN-8 code of the product, or the product to which the offer refers. This code is also known as EAN/UCC-8 or 8-digit EAN. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
      */
      gtin8: s.string,
      /**
      * A material that something is made from, e.g. leather, wool, cotton, paper.
      */
      material: s.union([schema.Product,s.string,s.urlString]),
      /**
      * Awards won by or for this item.
      */
      awards: s.string,
      /**
      * An intended audience, i.e. a group for whom something was created.
      */
      audience: schema.Audience,
      /**
      * A pointer to another, somehow related product (or multiple products).
      */
      isRelatedTo: s.union([schema.Product,schema.Service]),
      /**
      * The product identifier, such as ISBN. For example: ``` meta itemprop="productID" content="isbn:123-456-789" ```.
      */
      productID: s.string,
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
  Car,
};