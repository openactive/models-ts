// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * schema:Vehicle
 */
export type Vehicle = {
  '@type': 'Vehicle';
  '@context'?: string | string[];
  /**
   * The identifier property represents any kind of identifier for any kind of [[Thing]], such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See [background notes](/docs/datamodel.html#identifierBg) for more details.
   *         
   */
  identifier?: schema.PropertyValueOrSubClass | string;
  /**
   * The name of the item.
   */
  name?: string;
  /**
   * A description of the item.
   */
  description?: string;
  /**
   * A unique url based identifier for the record
   */
  '@id'?: string;
  /**
   * The release date of a vehicle model (often used to differentiate versions of the same make and model).
   */
  vehicleModelDate?: string;
  /**
   * The permitted weight of passengers and cargo, EXCLUDING the weight of the empty vehicle.\n\nTypical unit code(s): KGM for kilogram, LBR for pound\n\n* Note 1: Many databases specify the permitted TOTAL weight instead, which is the sum of [[weight]] and [[payload]]\n* Note 2: You can indicate additional information in the [[name]] of the [[QuantitativeValue]] node.\n* Note 3: You may also link to a [[QualitativeValue]] node that provides additional information using [[valueReference]].\n* Note 4: Note that you can use [[minValue]] and [[maxValue]] to indicate ranges.
   */
  payload?: schema.QuantitativeValueOrSubClass | string;
  /**
   * The type of component used for transmitting the power from a rotating power source to the wheels or other relevant component(s) ("gearbox" for cars).
   */
  vehicleTransmission?: string | schema.QualitativeValue;
  /**
   * The number of doors.\n\nTypical unit code(s): C62
   */
  numberOfDoors?: number | schema.QuantitativeValueOrSubClass | string;
  /**
   * The release date of a vehicle model (often used to differentiate versions of the same make and model).
   */
  modelDate?: string;
  /**
   * The distance traveled per unit of fuel used; most commonly miles per gallon (mpg) or kilometers per liter (km/L).\n\n* Note 1: There are unfortunately no standard unit codes for miles per gallon or kilometers per liter. Use [[unitText]] to indicate the unit of measurement, e.g. mpg or km/L.\n* Note 2: There are two ways of indicating the fuel consumption, [[fuelConsumption]] (e.g. 8 liters per 100 km) and [[fuelEfficiency]] (e.g. 30 miles per gallon). They are reciprocal.\n* Note 3: Often, the absolute value is useful only when related to driving speed ("at 80 km/h") or usage pattern ("city traffic"). You can use [[valueReference]] to link the value for the fuel economy to another value.
   */
  fuelEfficiency?: schema.QuantitativeValueOrSubClass | string;
  /**
   * The type of fuel suitable for the engine or engines of the vehicle. If the vehicle has only one engine, this property can be attached directly to the vehicle.
   */
  fuelType?: schema.QualitativeValue | string;
  /**
   * Indicates the design and body style of the vehicle (e.g. station wagon, hatchback, etc.).
   */
  bodyType?: string | schema.QualitativeValue;
  /**
   * The distance between the centers of the front and rear wheels.\n\nTypical unit code(s): CMT for centimeters, MTR for meters, INH for inches, FOT for foot/feet
   */
  wheelbase?: schema.QuantitativeValueOrSubClass | string;
  /**
   * The type or material of the interior of the vehicle (e.g. synthetic fabric, leather, wood, etc.). While most interior types are characterized by the material used, an interior type can also be based on vehicle usage or target audience.
   */
  vehicleInteriorType?: string;
  /**
   * The permitted vertical load (TWR) of a trailer attached to the vehicle. Also referred to as Tongue Load Rating (TLR) or Vertical Load Rating (VLR)\n\nTypical unit code(s): KGM for kilogram, LBR for pound\n\n* Note 1: You can indicate additional information in the [[name]] of the [[QuantitativeValue]] node.\n* Note 2: You may also link to a [[QualitativeValue]] node that provides additional information using [[valueReference]].\n* Note 3: Note that you can use [[minValue]] and [[maxValue]] to indicate ranges.
   */
  tongueWeight?: schema.QuantitativeValueOrSubClass | string;
  /**
   * Information about the engine or engines of the vehicle.
   */
  vehicleEngine?: schema.EngineSpecificationOrSubClass | string;
  /**
   * The date of the first registration of the vehicle with the respective public authorities.
   */
  dateVehicleFirstRegistered?: string;
  /**
   * The speed range of the vehicle. If the vehicle is powered by an engine, the upper limit of the speed range (indicated by [[maxValue]] should be the maximum speed achievable under regular conditions.\n\nTypical unit code(s): KMH for km/h, HM for mile per hour (0.447 04 m/s), KNT for knot\n\n*Note 1: Use [[minValue]] and [[maxValue]] to indicate the range. Typically, the minimal value is zero.\n* Note 2: There are many different ways of measuring the speed range. You can link to information about how the given value has been determined using the [[valueReference]] property.
   */
  speed?: schema.QuantitativeValueOrSubClass | string;
  /**
   * The drive wheel configuration, i.e. which roadwheels will receive torque from the vehicle's engine via the drivetrain.
   */
  driveWheelConfiguration?: schema.DriveWheelConfigurationValueOrSubClass | string;
  /**
   * The number of persons that can be seated (e.g. in a vehicle), both in terms of the physical space available, and in terms of limitations set by law.\n\nTypical unit code(s): C62 for persons 
   */
  seatingCapacity?: number | schema.QuantitativeValueOrSubClass | string;
  /**
   * The capacity of the fuel tank or in the case of electric cars, the battery. If there are multiple components for storage, this should indicate the total of all storage of the same type.\n\nTypical unit code(s): LTR for liters, GLL of US gallons, GLI for UK / imperial gallons, AMH for ampere-hours (for electrical vehicles).
   */
  fuelCapacity?: schema.QuantitativeValueOrSubClass | string;
  /**
   * The available volume for cargo or luggage. For automobiles, this is usually the trunk volume.\n\nTypical unit code(s): LTR for liters, FTQ for cubic foot/feet\n\nNote: You can use [[minValue]] and [[maxValue]] to indicate ranges.
   */
  cargoVolume?: schema.QuantitativeValueOrSubClass | string;
  /**
   * The Vehicle Identification Number (VIN) is a unique serial number used by the automotive industry to identify individual motor vehicles.
   */
  vehicleIdentificationNumber?: string;
  /**
   * Indicates whether the vehicle has been used for special purposes, like commercial rental, driving school, or as a taxi. The legislation in many countries requires this information to be revealed when offering a car for sale.
   */
  vehicleSpecialUsage?: string | schema.CarUsageType;
  /**
   * The CO2 emissions in g/km. When used in combination with a QuantitativeValue, put "g/km" into the unitText property of that value, since there is no UN/CEFACT Common Code for "g/km".
   */
  emissionsCO2?: number;
  /**
   * The number of passengers that can be seated in the vehicle, both in terms of the physical space available, and in terms of limitations set by law.\n\nTypical unit code(s): C62 for persons.
   */
  vehicleSeatingCapacity?: number | schema.QuantitativeValueOrSubClass | string;
  /**
   * The permitted weight of a trailer attached to the vehicle.\n\nTypical unit code(s): KGM for kilogram, LBR for pound\n* Note 1: You can indicate additional information in the [[name]] of the [[QuantitativeValue]] node.\n* Note 2: You may also link to a [[QualitativeValue]] node that provides additional information using [[valueReference]].\n* Note 3: Note that you can use [[minValue]] and [[maxValue]] to indicate ranges.
   */
  trailerWeight?: schema.QuantitativeValueOrSubClass | string;
  /**
   * The number of owners of the vehicle, including the current one.\n\nTypical unit code(s): C62
   */
  numberOfPreviousOwners?: schema.QuantitativeValueOrSubClass | number | string;
  /**
   * The date the item e.g. vehicle was purchased by the current owner.
   */
  purchaseDate?: string;
  /**
   * A textual description of known damages, both repaired and unrepaired.
   */
  knownVehicleDamages?: string;
  /**
   * The total distance travelled by the particular vehicle since its initial production, as read from its odometer.\n\nTypical unit code(s): KMT for kilometers, SMI for statute miles
   */
  mileageFromOdometer?: schema.QuantitativeValueOrSubClass | string;
  /**
   * The amount of fuel consumed for traveling a particular distance or temporal duration with the given vehicle (e.g. liters per 100 km).\n\n* Note 1: There are unfortunately no standard unit codes for liters per 100 km.  Use [[unitText]] to indicate the unit of measurement, e.g. L/100 km.\n* Note 2: There are two ways of indicating the fuel consumption, [[fuelConsumption]] (e.g. 8 liters per 100 km) and [[fuelEfficiency]] (e.g. 30 miles per gallon). They are reciprocal.\n* Note 3: Often, the absolute value is useful only when related to driving speed ("at 80 km/h") or usage pattern ("city traffic"). You can use [[valueReference]] to link the value for the fuel consumption to another value.
   */
  fuelConsumption?: schema.QuantitativeValueOrSubClass | string;
  /**
   * The number of axles.\n\nTypical unit code(s): C62
   */
  numberOfAxles?: number | schema.QuantitativeValueOrSubClass | string;
  /**
   * The position of the steering wheel or similar device (mostly for cars).
   */
  steeringPosition?: schema.SteeringPositionValueOrSubClass | string;
  /**
   * The time needed to accelerate the vehicle from a given start velocity to a given target velocity.\n\nTypical unit code(s): SEC for seconds\n\n* Note: There are unfortunately no standard unit codes for seconds/0..100 km/h or seconds/0..60 mph. Simply use "SEC" for seconds and indicate the velocities in the [[name]] of the [[QuantitativeValue]], or use [[valueReference]] with a [[QuantitativeValue]] of 0..60 mph or 0..100 km/h to specify the reference speeds.
   */
  accelerationTime?: schema.QuantitativeValueOrSubClass | string;
  /**
   * A short text indicating the configuration of the vehicle, e.g. '5dr hatchback ST 2.5 MT 225 hp' or 'limited edition'.
   */
  vehicleConfiguration?: string;
  /**
   * The number or type of airbags in the vehicle.
   */
  numberOfAirbags?: number | string;
  /**
   * The permitted total weight of the loaded vehicle, including passengers and cargo and the weight of the empty vehicle.\n\nTypical unit code(s): KGM for kilogram, LBR for pound\n\n* Note 1: You can indicate additional information in the [[name]] of the [[QuantitativeValue]] node.\n* Note 2: You may also link to a [[QualitativeValue]] node that provides additional information using [[valueReference]].\n* Note 3: Note that you can use [[minValue]] and [[maxValue]] to indicate ranges.
   */
  weightTotal?: schema.QuantitativeValueOrSubClass | string;
  /**
   * Indicates that the vehicle meets the respective emission standard.
   */
  meetsEmissionStandard?: string | schema.QualitativeValue;
  /**
   * The date of production of the item, e.g. vehicle.
   */
  productionDate?: string;
  /**
   * A [callsign](https://en.wikipedia.org/wiki/Call_sign), as used in broadcasting and radio communications to identify people, radio and TV stations, or vehicles.
   */
  callSign?: string;
  /**
   * The color or color combination of the interior of the vehicle.
   */
  vehicleInteriorColor?: string;
  /**
   * The total number of forward gears available for the transmission system of the vehicle.\n\nTypical unit code(s): C62
   */
  numberOfForwardGears?: schema.QuantitativeValueOrSubClass | number | string;
  /**
   * A product measurement, for example the inseam of pants, the wheel size of a bicycle, or the gauge of a screw. Usually an exact measurement, but can also be a range of measurements for adjustable products, for example belts and ski bindings.
   */
  hasMeasurement?: schema.QuantitativeValueOrSubClass | string;
  /**
   * A predefined value from OfferItemCondition or a textual description of the condition of the product or service, or the products or services included in the offer.
   */
  itemCondition?: schema.OfferItemCondition;
  /**
   * The overall rating, based on a collection of reviews or ratings, of the item.
   */
  aggregateRating?: schema.AggregateRatingOrSubClass | string;
  /**
   * A standardized size of a product or creative work, specified either through a simple textual string (for example 'XL', '32Wx34L'), a  QuantitativeValue with a unitCode, or a comprehensive and structured [[SizeSpecification]]; in other cases, the [[width]], [[height]], [[depth]] and [[weight]] properties may be more applicable. 
   */
  size?: schema.DefinedTermOrSubClass | schema.SizeSpecificationOrSubClass | schema.QuantitativeValueOrSubClass | string;
  /**
   * The depth of the item.
   */
  depth?: schema.DistanceOrSubClass | schema.QuantitativeValueOrSubClass | string;
  /**
   * The height of the item.
   */
  height?: schema.QuantitativeValueOrSubClass | schema.DistanceOrSubClass | string;
  /**
   * The GTIN-12 code of the product, or the product to which the offer refers. The GTIN-12 is the 12-digit GS1 Identification Key composed of a U.P.C. Company Prefix, Item Reference, and Check Digit used to identify trade items. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
   */
  gtin12?: string;
  /**
   * A pointer to another, functionally similar product (or multiple products).
   */
  isSimilarTo?: schema.ProductOrSubClass | schema.ServiceOrSubClass | string;
  /**
   * The weight of the product or person.
   */
  weight?: schema.QuantitativeValueOrSubClass | string;
  /**
   * Indicates a MerchantReturnPolicy that may be applicable.
   */
  hasMerchantReturnPolicy?: schema.MerchantReturnPolicyOrSubClass | string;
  /**
   * An offer to provide this item&#x2014;for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use [[businessFunction]] to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a [[Demand]]. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
   *       
   */
  offers?: schema.OfferOrSubClass | schema.DemandOrSubClass | string;
  /**
   * The width of the item.
   */
  width?: schema.QuantitativeValueOrSubClass | schema.DistanceOrSubClass | string;
  /**
   * A pointer to another product (or multiple products) for which this product is a consumable.
   */
  isConsumableFor?: schema.ProductOrSubClass | string;
  /**
   * Review of the item.
   */
  reviews?: schema.ReviewOrSubClass | string;
  /**
   * An award won by or for this item.
   */
  award?: string;
  /**
   * The GTIN-13 code of the product, or the product to which the offer refers. This is equivalent to 13-digit ISBN codes and EAN UCC-13. Former 12-digit UPC codes can be converted into a GTIN-13 code by simply adding a preceding zero. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
   */
  gtin13?: string;
  /**
   * A Global Trade Item Number ([GTIN](https://www.gs1.org/standards/id-keys/gtin)). GTINs identify trade items, including products and services, using numeric identification codes. The [[gtin]] property generalizes the earlier [[gtin8]], [[gtin12]], [[gtin13]], and [[gtin14]] properties. The GS1 [digital link specifications](https://www.gs1.org/standards/Digital-Link/) express GTINs as URLs. A correct [[gtin]] value should be a valid GTIN, which means that it should be an all-numeric string of either 8, 12, 13 or 14 digits, or a "GS1 Digital Link" URL based on such a string. The numeric component should also have a [valid GS1 check digit](https://www.gs1.org/services/check-digit-calculator) and meet the other rules for valid GTINs. See also [GS1's GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) and [Wikipedia](https://en.wikipedia.org/wiki/Global_Trade_Item_Number) for more details. Left-padding of the gtin values is not required or encouraged.
   *    
   */
  gtin?: string;
  /**
   * A review of the item.
   */
  review?: schema.ReviewOrSubClass | string;
  /**
   * Defines the energy efficiency Category (also known as "class" or "rating") for a product according to an international energy efficiency standard.
   */
  hasEnergyConsumptionDetails?: schema.EnergyConsumptionDetailsOrSubClass | string;
  /**
   * The color of the product.
   */
  color?: string;
  /**
   * A property-value pair representing an additional characteristics of the entitity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.\n\nNote: Publishers should be aware that applications designed to use specific schema.org properties (e.g. https://schema.org/width, https://schema.org/color, https://schema.org/gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.
   * 
   */
  additionalProperty?: schema.PropertyValueOrSubClass | string;
  /**
   * An associated logo.
   */
  logo?: schema.ImageObjectOrSubClass | string;
  /**
   * The Manufacturer Part Number (MPN) of the product, or the product to which the offer refers.
   */
  mpn?: string;
  /**
   * Indicates the [[productGroupID]] for a [[ProductGroup]] that this product [[isVariantOf]]. 
   */
  inProductGroupWithID?: string;
  /**
   * A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.
   */
  category?: schema.PhysicalActivityCategory | string | schema.ThingOrSubClass;
  /**
   * Indicates the kind of product that this is a variant of. In the case of [[ProductModel]], this is a pointer (from a ProductModel) to a base product from which this product is a variant. It is safe to infer that the variant inherits all product features from the base model, unless defined locally. This is not transitive. In the case of a [[ProductGroup]], the group description also serves as a template, representing a set of Products that vary on explicitly defined, specific dimensions only (so it defines both a set of variants, as well as which values distinguish amongst those variants). When used with [[ProductGroup]], this property can apply to any [[Product]] included in the group.
   */
  isVariantOf?: schema.ProductGroupOrSubClass | schema.ProductModelOrSubClass | string;
  /**
   * A slogan or motto associated with the item.
   */
  slogan?: string;
  /**
   * A pattern that something has, for example 'polka dot', 'striped', 'Canadian flag'. Values are typically expressed as text, although links to controlled value schemes are also supported.
   */
  pattern?: string | schema.DefinedTermOrSubClass;
  /**
   * The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers.
   */
  sku?: string;
  /**
   * Indicates the [NATO stock number](https://en.wikipedia.org/wiki/NATO_Stock_Number) (nsn) of a [[Product]]. 
   */
  nsn?: string;
  /**
   * The GTIN-14 code of the product, or the product to which the offer refers. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
   */
  gtin14?: string;
  /**
   * A pointer to another product (or multiple products) for which this product is an accessory or spare part.
   */
  isAccessoryOrSparePartFor?: schema.ProductOrSubClass | string;
  /**
   * The manufacturer of the product.
   */
  manufacturer?: schema.OrganizationOrSubClass | string;
  /**
   * The model of the product. Use with the URL of a ProductModel or a textual representation of the model identifier. The URL of the ProductModel can be from an external source. It is recommended to additionally provide strong product identifiers via the gtin8/gtin13/gtin14 and mpn properties.
   */
  model?: schema.ProductModelOrSubClass | string;
  /**
   * The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person.
   */
  brand?: schema.BrandOrSubClass | schema.OrganizationOrSubClass | string;
  /**
   * The release date of a product or product model. This can be used to distinguish the exact variant of a product.
   */
  releaseDate?: string;
  /**
   * The GTIN-8 code of the product, or the product to which the offer refers. This code is also known as EAN/UCC-8 or 8-digit EAN. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
   */
  gtin8?: string;
  /**
   * A material that something is made from, e.g. leather, wool, cotton, paper.
   */
  material?: schema.ProductOrSubClass | string;
  /**
   * Awards won by or for this item.
   */
  awards?: string;
  /**
   * An intended audience, i.e. a group for whom something was created.
   */
  audience?: schema.AudienceOrSubClass | string;
  /**
   * A pointer to another, somehow related product (or multiple products).
   */
  isRelatedTo?: schema.ProductOrSubClass | schema.ServiceOrSubClass | string;
  /**
   * The product identifier, such as ISBN. For example: ``` meta itemprop="productID" content="isbn:123-456-789" ```.
   */
  productID?: string;
  /**
   * URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website.
   */
  sameAs?: string;
  /**
   * A CreativeWork or Event about this Thing.
   */
  subjectOf?: schema.Event_OrSubClass | schema.CreativeWorkOrSubClass | string;
  /**
   * Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role.
   */
  potentialAction?: schema.ActionOrSubClass | string;
  /**
   * Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See [background notes](/docs/datamodel.html#mainEntityBackground) for details.
   */
  mainEntityOfPage?: schema.CreativeWorkOrSubClass | string;
  /**
   * An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the 'typeof' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.
   */
  additionalType?: string;
  /**
   * An alias for the item.
   */
  alternateName?: string;
  /**
   * URL of the item.
   */
  url?: string;
  /**
   * An image of the item. This can be a [[URL]] or a fully described [[ImageObject]].
   */
  image?: schema.ImageObjectOrSubClass | string;
  /**
   * A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.
   */
  disambiguatingDescription?: string;
};

/**
 * schema:Vehicle
 *
 * This differs from Vehicle because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type VehicleOrSubClass =
  | Vehicle
  | schema.MotorcycleOrSubClass
  | schema.MotorizedBicycleOrSubClass
  | schema.BusOrCoachOrSubClass
  | schema.CarOrSubClass
  ;

/**
 * schema:Vehicle - Validation schema (w/ JOI)
 */
export const VehicleJoiSchema = Joi.object({
  '@type': Joi.string().valid('Vehicle').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
  name: Joi.string(),
  description: Joi.string(),
  '@id': Joi.string().uri(),
  vehicleModelDate: Joi.string().isoDate(),
  payload: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  vehicleTransmission: Joi.alternatives().try(Joi.string().uri(), Joi.string(), Joi.lazy(() => schema.QualitativeValueJoiSchema)),
  numberOfDoors: Joi.alternatives().try(Joi.number(), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  modelDate: Joi.string().isoDate(),
  fuelEfficiency: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  fuelType: Joi.alternatives().try(Joi.lazy(() => schema.QualitativeValueJoiSchema), Joi.string().uri(), Joi.string()),
  bodyType: Joi.alternatives().try(Joi.string().uri(), Joi.string(), Joi.lazy(() => schema.QualitativeValueJoiSchema)),
  wheelbase: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  vehicleInteriorType: Joi.string(),
  tongueWeight: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  vehicleEngine: Joi.alternatives().try(Joi.lazy(() => schema.EngineSpecificationOrSubClassJoiSchema), Joi.string().uri()),
  dateVehicleFirstRegistered: Joi.string().isoDate(),
  speed: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  driveWheelConfiguration: Joi.alternatives().try(Joi.lazy(() => schema.DriveWheelConfigurationValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  seatingCapacity: Joi.alternatives().try(Joi.number(), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  fuelCapacity: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  cargoVolume: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  vehicleIdentificationNumber: Joi.string(),
  vehicleSpecialUsage: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.CarUsageTypeJoiSchema)),
  emissionsCO2: Joi.number(),
  vehicleSeatingCapacity: Joi.alternatives().try(Joi.number(), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  trailerWeight: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  numberOfPreviousOwners: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.number(), Joi.string().uri()),
  purchaseDate: Joi.string().isoDate(),
  knownVehicleDamages: Joi.string(),
  mileageFromOdometer: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  fuelConsumption: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  numberOfAxles: Joi.alternatives().try(Joi.number(), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  steeringPosition: Joi.alternatives().try(Joi.lazy(() => schema.SteeringPositionValueOrSubClassJoiSchema), Joi.string().uri()),
  accelerationTime: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  vehicleConfiguration: Joi.string(),
  numberOfAirbags: Joi.alternatives().try(Joi.number(), Joi.string()),
  weightTotal: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  meetsEmissionStandard: Joi.alternatives().try(Joi.string().uri(), Joi.string(), Joi.lazy(() => schema.QualitativeValueJoiSchema)),
  productionDate: Joi.string().isoDate(),
  callSign: Joi.string(),
  vehicleInteriorColor: Joi.string(),
  numberOfForwardGears: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.number(), Joi.string().uri()),
  hasMeasurement: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  itemCondition: Joi.lazy(() => schema.OfferItemConditionJoiSchema),
  aggregateRating: Joi.alternatives().try(Joi.lazy(() => schema.AggregateRatingOrSubClassJoiSchema), Joi.string().uri()),
  size: Joi.alternatives().try(Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.lazy(() => schema.SizeSpecificationOrSubClassJoiSchema), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  depth: Joi.alternatives().try(Joi.lazy(() => schema.DistanceOrSubClassJoiSchema), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  height: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.lazy(() => schema.DistanceOrSubClassJoiSchema), Joi.string().uri()),
  gtin12: Joi.string(),
  isSimilarTo: Joi.alternatives().try(Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.lazy(() => schema.ServiceOrSubClassJoiSchema), Joi.string().uri()),
  weight: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  hasMerchantReturnPolicy: Joi.alternatives().try(Joi.lazy(() => schema.MerchantReturnPolicyOrSubClassJoiSchema), Joi.string().uri()),
  offers: Joi.alternatives().try(Joi.lazy(() => schema.OfferOrSubClassJoiSchema), Joi.lazy(() => schema.DemandOrSubClassJoiSchema), Joi.string().uri()),
  width: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.lazy(() => schema.DistanceOrSubClassJoiSchema), Joi.string().uri()),
  isConsumableFor: Joi.alternatives().try(Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.string().uri()),
  reviews: Joi.alternatives().try(Joi.lazy(() => schema.ReviewOrSubClassJoiSchema), Joi.string().uri()),
  award: Joi.string(),
  gtin13: Joi.string(),
  gtin: Joi.string(),
  review: Joi.alternatives().try(Joi.lazy(() => schema.ReviewOrSubClassJoiSchema), Joi.string().uri()),
  hasEnergyConsumptionDetails: Joi.alternatives().try(Joi.lazy(() => schema.EnergyConsumptionDetailsOrSubClassJoiSchema), Joi.string().uri()),
  color: Joi.string(),
  additionalProperty: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri()),
  logo: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
  mpn: Joi.string(),
  inProductGroupWithID: Joi.string(),
  category: Joi.alternatives().try(Joi.lazy(() => schema.PhysicalActivityCategoryJoiSchema), Joi.string(), Joi.string().uri(), Joi.lazy(() => schema.ThingOrSubClassJoiSchema)),
  isVariantOf: Joi.alternatives().try(Joi.lazy(() => schema.ProductGroupOrSubClassJoiSchema), Joi.lazy(() => schema.ProductModelOrSubClassJoiSchema), Joi.string().uri()),
  slogan: Joi.string(),
  pattern: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string().uri()),
  sku: Joi.string(),
  nsn: Joi.string(),
  gtin14: Joi.string(),
  isAccessoryOrSparePartFor: Joi.alternatives().try(Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.string().uri()),
  manufacturer: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  model: Joi.alternatives().try(Joi.lazy(() => schema.ProductModelOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  brand: Joi.alternatives().try(Joi.lazy(() => schema.BrandOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  releaseDate: Joi.string().isoDate(),
  gtin8: Joi.string(),
  material: Joi.alternatives().try(Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  awards: Joi.string(),
  audience: Joi.alternatives().try(Joi.lazy(() => schema.AudienceOrSubClassJoiSchema), Joi.string().uri()),
  isRelatedTo: Joi.alternatives().try(Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.lazy(() => schema.ServiceOrSubClassJoiSchema), Joi.string().uri()),
  productID: Joi.string(),
  sameAs: Joi.string().uri(),
  subjectOf: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
  potentialAction: Joi.alternatives().try(Joi.lazy(() => schema.ActionOrSubClassJoiSchema), Joi.string().uri()),
  mainEntityOfPage: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
  additionalType: Joi.string().uri(),
  alternateName: Joi.string(),
  url: Joi.string().uri(),
  image: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
  disambiguatingDescription: Joi.string(),
});

/**
 * schema:Vehicle - Validation schema (w/ JOI)
 *
 * This differs from VehicleJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const VehicleOrSubClassJoiSchema = Joi.alternatives().try([
  VehicleJoiSchema,
  Joi.lazy(() => schema.MotorcycleOrSubClassJoiSchema),
  Joi.lazy(() => schema.MotorizedBicycleOrSubClassJoiSchema),
  Joi.lazy(() => schema.BusOrCoachOrSubClassJoiSchema),
  Joi.lazy(() => schema.CarOrSubClassJoiSchema),
]);

/**
 * Runtime validator for schema:Vehicle.
 *
 * If some data has a structure which matches a schema:Vehicle, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeVehicle = Vehicle.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeVehicle instanceof OaValidationError) {
 *   // From this point on, `maybeVehicle` will have type `OaValidationError`
 *   const error = maybeVehicle;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeVehicle` will have type `Vehicle`
 * const vehicle = maybeVehicle;
 * ```
 */
export function validateVehicle(maybeVehicle: unknown): Vehicle | OaValidationError {
  const { value, error } = VehicleJoiSchema.validate(maybeVehicle);
  if (error) {
    return new OaValidationError('Vehicle', maybeVehicle, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as Vehicle;
}
