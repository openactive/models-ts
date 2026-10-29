// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * schema:Drug
 */
export type Drug = {
  '@type': 'Drug';
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
  description?: string | schema.TextObjectOrSubClass;
  /**
   * A unique URI-based identifier for the record.
   * `@id` properties are used as identifiers for compatibility with JSON-LD. The value of such a property must always be an absolute URI that provides a stable globally unique identifier for the resource, as described in [RFC3986](https://tools.ietf.org/html/rfc3986).
   * The primary purpose of the URI format in this context is to provide natural namespacing for the identifier. Hence, the URI itself may not resolve to a valid endpoint, but must use a domain name controlled by the resource owner (the organisation responsible for the OpenActive open data feed).
   */
  '@id'?: string;
  /**
   * An active ingredient, typically chemical compounds and/or biologic substances.
   */
  activeIngredient?: string;
  /**
   * A route by which this drug may be administered, e.g. 'oral'.
   */
  administrationRoute?: string;
  /**
   * Any precaution, guidance, contraindication, etc. related to consumption of alcohol while taking this drug.
   */
  alcoholWarning?: string;
  /**
   * An available dosage strength for the drug.
   */
  availableStrength?: schema.DrugStrengthOrSubClass | string;
  /**
   * Any precaution, guidance, contraindication, etc. related to this drug's use by breastfeeding mothers.
   */
  breastfeedingWarning?: string;
  /**
   * Description of the absorption and elimination of drugs, including their concentration (pharmacokinetics, pK) and biological effects (pharmacodynamics, pD).
   */
  clincalPharmacology?: string;
  /**
   * Description of the absorption and elimination of drugs, including their concentration (pharmacokinetics, pK) and biological effects (pharmacodynamics, pD).
   */
  clinicalPharmacology?: string;
  /**
   * A dosage form in which this drug/supplement is available, e.g. 'tablet', 'suspension', 'injection'.
   */
  dosageForm?: string;
  /**
   * A dosing schedule for the drug for a given population, either observed, recommended, or maximum dose based on the type used.
   */
  doseSchedule?: schema.DoseScheduleOrSubClass | string;
  /**
   * The class of drug this belongs to (e.g., statins).
   */
  drugClass?: schema.DrugClassOrSubClass | string;
  /**
   * The unit in which the drug is measured, e.g. '5 mg tablet'.
   */
  drugUnit?: string;
  /**
   * Any precaution, guidance, contraindication, etc. related to consumption of specific foods while taking this drug.
   */
  foodWarning?: string;
  /**
   * The insurance plans that cover this drug.
   */
  includedInHealthInsurancePlan?: schema.HealthInsurancePlanOrSubClass | string;
  /**
   * Another drug that is known to interact with this drug in a way that impacts the effect of this drug or causes a risk to the patient. Note: disease interactions are typically captured as contraindications.
   */
  interactingDrug?: schema.DrugOrSubClass | string;
  /**
   * True if the drug is available in a generic form (regardless of name).
   */
  isAvailableGenerically?: boolean;
  /**
   * True if this item's name is a proprietary/brand name (vs. generic name).
   */
  isProprietary?: boolean;
  /**
   * Link to the drug's label details.
   */
  labelDetails?: string;
  /**
   * The drug or supplement's legal status, including any controlled substance schedules that apply.
   */
  legalStatus?: schema.DrugLegalStatusOrSubClass | schema.MedicalEnumeration | string;
  /**
   * Recommended intake of this supplement for a given population as defined by a specific recommending authority.
   */
  maximumIntake?: schema.MaximumDoseScheduleOrSubClass | string;
  /**
   * The specific biochemical interaction through which this drug or supplement produces its pharmacological effect.
   */
  mechanismOfAction?: string;
  /**
   * The generic name of this drug or supplement.
   */
  nonProprietaryName?: string;
  /**
   * Any information related to overdose on a drug, including signs or symptoms, treatments, contact information for emergency response.
   */
  overdosage?: string;
  /**
   * Pregnancy category of this drug.
   */
  pregnancyCategory?: schema.DrugPregnancyCategoryOrSubClass | string;
  /**
   * Any precaution, guidance, contraindication, etc. related to this drug's use during pregnancy.
   */
  pregnancyWarning?: string;
  /**
   * Link to prescribing information for the drug.
   */
  prescribingInfo?: string;
  /**
   * Indicates the status of drug prescription, e.g. local catalogs classifications or whether the drug is available by prescription or over-the-counter, etc.
   */
  prescriptionStatus?: schema.DrugPrescriptionStatusOrSubClass | string;
  /**
   * Proprietary name given to the diet plan, typically by its originator or creator.
   */
  proprietaryName?: string;
  /**
   * Any other drug related to this one, for example commonly-prescribed alternatives.
   */
  relatedDrug?: schema.DrugOrSubClass | string;
  /**
   * The RxCUI drug identifier from RXNORM.
   */
  rxcui?: string;
  /**
   * Any FDA or other warnings about the drug (text or URL).
   */
  warning?: string;
  /**
   * A property-value pair representing an additional characteristic of the entity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.\n\nNote: Publishers should be aware that applications designed to use specific schema.org properties (e.g. https://schema.org/width, https://schema.org/color, https://schema.org/gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.
   * 
   */
  additionalProperty?: schema.PropertyValueOrSubClass | string;
  /**
   * The overall rating, based on a collection of reviews or ratings, of the item.
   */
  aggregateRating?: schema.AggregateRatingOrSubClass | string;
  /**
   * An Amazon Standard Identification Number (ASIN) is a 10-character alphanumeric unique identifier assigned by Amazon.com and its partners for product identification within the Amazon organization (summary from [Wikipedia](https://en.wikipedia.org/wiki/Amazon_Standard_Identification_Number)'s article).
   * 
   * Note also that this is a definition for how to include ASINs in Schema.org data, and not a definition of ASINs in general - see documentation from Amazon for authoritative details.
   * ASINs are most commonly encoded as text strings, but the [asin] property supports URL/URI as potential values too.
   */
  asin?: string;
  /**
   * An intended audience, i.e. a group for whom something was created.
   */
  audience?: schema.AudienceOrSubClass | string;
  /**
   * An organization or person officially appointed to act on behalf of the manufacturer in a specific region or context.
   */
  authorizedRepresentative?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
  /**
   * An award won by or for this item.
   */
  award?: string;
  /**
   * Awards won by or for this item.
   */
  awards?: string;
  /**
   * The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person.
   */
  brand?: schema.BrandOrSubClass | schema.OrganizationOrSubClass | string;
  /**
   * A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.
   */
  category?: schema.CategoryCodeOrSubClass | schema.PhysicalActivityCategory | string | schema.ThingOrSubClass;
  /**
   * The color of the product.
   */
  color?: string;
  /**
   * A color swatch image, visualizing the color of a [[Product]]. Should match the textual description specified in the [[color]] property. This can be a URL or a fully described ImageObject.
   */
  colorSwatch?: schema.ImageObjectOrSubClass | string;
  /**
   * A consumer notice, such as a safety warning or mandatory information, related to the product.
   */
  consumerNotice?: string | schema.TextObjectOrSubClass | schema.WebContentOrSubClass;
  /**
   * The place where the product was assembled.
   */
  countryOfAssembly?: string;
  /**
   * The place where the item (typically [[Product]]) was last processed and tested before importation.
   */
  countryOfLastProcessing?: string;
  /**
   * The country of origin of something, including products as well as creative  works such as movie and TV content.
   * 
   * In the case of TV and movie, this would be the country of the principle offices of the production company or individual responsible for the movie. For other kinds of [[CreativeWork]] it is difficult to provide fully general guidance, and properties such as [[contentLocation]] and [[locationCreated]] may be more applicable.
   * 
   * In the case of products, the country of origin of the product. The exact interpretation of this may vary by context and product type, and cannot be fully enumerated here.
   */
  countryOfOrigin?: schema.CountryOrSubClass | string;
  /**
   * The depth of the item.
   */
  depth?: schema.DistanceOrSubClass | schema.QuantitativeValueOrSubClass | string;
  /**
   * The location at which an item can be viewed or experienced in-person.
   */
  displayLocation?: schema.PlaceOrSubClass | string;
  /**
   * A [[Grant]] that directly or indirectly provide funding or sponsorship for this item. See also [[ownershipFundingInfo]].
   */
  funding?: schema.GrantOrSubClass | string;
  /**
   * A Global Trade Item Number ([GTIN](https://www.gs1.org/standards/id-keys/gtin)). GTINs identify trade items, including products and services, using numeric identification codes.
   * 
   * A correct [[gtin]] value should be a valid GTIN, which means that it should be an all-numeric string of either 8, 12, 13 or 14 digits, or a "GS1 Digital Link" URL based on such a string. The numeric component should also have a [valid GS1 check digit](https://www.gs1.org/services/check-digit-calculator) and meet the other rules for valid GTINs. See also [GS1's GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) and [Wikipedia](https://en.wikipedia.org/wiki/Global_Trade_Item_Number) for more details. Left-padding of the gtin values is not required or encouraged. The [[gtin]] property generalizes the earlier [[gtin8]], [[gtin12]], [[gtin13]], and [[gtin14]] properties.
   * 
   * The GS1 [digital link specifications](https://www.gs1.org/standards/Digital-Link/) expresses GTINs as URLs (URIs, IRIs, etc.).
   * Digital Links should be populated into the [[hasGS1DigitalLink]] attribute.
   * 
   * Note also that this is a definition for how to include GTINs in Schema.org data, and not a definition of GTINs in general - see the GS1 documentation for authoritative details.
   */
  gtin?: string;
  /**
   * The GTIN-12 code of the product, or the product to which the offer refers. The GTIN-12 is the 12-digit GS1 Identification Key composed of a U.P.C. Company Prefix, Item Reference, and Check Digit used to identify trade items. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
   */
  gtin12?: string;
  /**
   * The GTIN-13 code of the product, or the product to which the offer refers. This is equivalent to 13-digit ISBN codes and EAN UCC-13. Former 12-digit UPC codes can be converted into a GTIN-13 code by simply adding a preceding zero. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
   */
  gtin13?: string;
  /**
   * The GTIN-14 code of the product, or the product to which the offer refers. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
   */
  gtin14?: string;
  /**
   * The GTIN-8 code of the product, or the product to which the offer refers. This code is also known as EAN/UCC-8 or 8-digit EAN. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
   */
  gtin8?: string;
  /**
   * Used to tag an item to be intended or suitable for consumption or use by adults only.
   */
  hasAdultConsideration?: schema.AdultOrientedEnumeration;
  /**
   * Certification information about a product, organization, service, place, or person.
   */
  hasCertification?: schema.CertificationOrSubClass | string;
  /**
   * A link to a Digital Product Passport (DPP) or a digital record detailing the lifecycle, sustainability, and compliance data for this product or offer. This may be a direct URL, a GS1 Digital Link URI, or a nested DigitalProductPassport object. Note: This property is aligned with the IANA 'dpp' link relation and the GS1 Web Vocabulary 'dpp' link type.
   */
  hasDigitalProductPassport?: schema.DigitalProductPassportOrSubClass | string;
  /**
   * Defines the energy efficiency Category (also known as "class" or "rating") for a product according to an international energy efficiency standard.
   */
  hasEnergyConsumptionDetails?: schema.EnergyConsumptionDetailsOrSubClass | string;
  /**
   * The <a href="https://www.gs1.org/standards/gs1-digital-link">GS1 digital link</a> associated with the object. This URL should conform to the particular requirements of digital links. The link should only contain the Application Identifiers (AIs) that are relevant for the entity being annotated, for instance a [[Product]] or an [[Organization]], and for the correct granularity. In particular, for products:<ul><li>A Digital Link that contains a serial number (AI <code>21</code>) should only be present on instances of [[IndividualProduct]]</li><li>A Digital Link that contains a lot number (AI <code>10</code>) should be annotated as [[SomeProducts]] if only products from that lot are sold, or [[IndividualProduct]] if there is only a specific product.</li><li>A Digital Link that contains a global model number (AI <code>8013</code>) should be attached to a [[Product]] or a [[ProductModel]].</li></ul> Other item types should be adapted similarly.
   */
  hasGS1DigitalLink?: string;
  /**
   * A measurement of an item, For example, the inseam of pants, the wheel size of a bicycle, the gauge of a screw, or the carbon footprint measured for certification by an authority. Usually an exact measurement, but can also be a range of measurements for adjustable products, for example belts and ski bindings.
   */
  hasMeasurement?: schema.QuantitativeValueOrSubClass | string;
  /**
   * Specifies a MerchantReturnPolicy that may be applicable.
   */
  hasMerchantReturnPolicy?: schema.MerchantReturnPolicyOrSubClass | string;
  /**
   * Indicates a ProductReturnPolicy that may be applicable.
   */
  hasProductReturnPolicy?: schema.ProductReturnPolicyOrSubClass | string;
  /**
   * The height of the item.
   */
  height?: schema.DistanceOrSubClass | schema.QuantitativeValueOrSubClass | string;
  /**
   * An organization or person who imports the product into a specific market or region.
   */
  importer?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
  /**
   * Indicates the [[productGroupID]] for a [[ProductGroup]] that this product [[isVariantOf]]. 
   */
  inProductGroupWithID?: string;
  /**
   * A pointer to another product (or multiple products) for which this product is an accessory or spare part.
   */
  isAccessoryOrSparePartFor?: schema.ProductOrSubClass | string;
  /**
   * A pointer to another product (or multiple products) for which this product is a consumable.
   */
  isConsumableFor?: schema.ProductOrSubClass | string;
  /**
   * Indicates whether this content is family friendly.
   */
  isFamilyFriendly?: boolean;
  /**
   * Indicates a product that is often bought with the described product.
   */
  isOftenBoughtWith?: schema.ProductOrSubClass | string;
  /**
   * A pointer to another, somehow related product (or multiple products).
   */
  isRelatedTo?: schema.ProductOrSubClass | schema.ServiceOrSubClass | string;
  /**
   * A pointer to another, functionally similar product (or multiple products).
   */
  isSimilarTo?: schema.ProductOrSubClass | schema.ServiceOrSubClass | string;
  /**
   * Indicates the kind of product that this is a variant of. In the case of [[ProductModel]], this is a pointer (from a ProductModel) to a base product from which this product is a variant. It is safe to infer that the variant inherits all product features from the base model, unless defined locally. This is not transitive. In the case of a [[ProductGroup]], the group description also serves as a template, representing a set of Products that vary on explicitly defined, specific dimensions only (so it defines both a set of variants, as well as which values distinguish amongst those variants). When used with [[ProductGroup]], this property can apply to any [[Product]] included in the group.
   */
  isVariantOf?: schema.ProductGroupOrSubClass | schema.ProductModelOrSubClass | string;
  /**
   * A predefined value from OfferItemCondition specifying the condition of the product or service, or the products or services included in the offer. Also used for product return policies to specify the condition of products accepted for returns.
   */
  itemCondition?: schema.OfferItemCondition;
  /**
   * Keywords or tags used to describe some item. Multiple textual entries in a keywords list are typically delimited by commas, or by repeating the property.
   */
  keywords?: schema.DefinedTermOrSubClass | string;
  /**
   * An associated logo.
   */
  logo?: schema.ImageObjectOrSubClass | string;
  /**
   * The manufacturer of the product.
   */
  manufacturer?: schema.OrganizationOrSubClass | string;
  /**
   * A material that something is made from, e.g. leather, wool, cotton, paper.
   */
  material?: schema.ProductOrSubClass | string;
  /**
   * The [[mobileUrl]] property is provided for specific situations in which data consumers need to determine whether one of several provided URLs is a dedicated 'mobile site'.
   * 
   * To discourage over-use, and reflecting intial usecases, the property is expected only on [[Product]] and [[Offer]], rather than [[Thing]]. The general trend in web technology is towards [responsive design](https://en.wikipedia.org/wiki/Responsive_web_design) in which content can be flexibly adapted to a wide range of browsing environments. Pages and sites referenced with the long-established [[url]] property should ideally also be usable on a wide variety of devices, including mobile phones. In most cases, it would be pointless and counter productive to attempt to update all [[url]] markup to use [[mobileUrl]] for more mobile-oriented pages. The property is intended for the case when items (primarily [[Product]] and [[Offer]]) have extra URLs hosted on an additional "mobile site" alongside the main one. It should not be taken as an endorsement of this publication style.
   *     
   */
  mobileUrl?: string;
  /**
   * The model of the product. Use with the URL of a ProductModel or a textual representation of the model identifier. The URL of the ProductModel can be from an external source. It is recommended to additionally provide strong product identifiers via the gtin8/gtin13/gtin14 and mpn properties.
   */
  model?: schema.ProductModelOrSubClass | string;
  /**
   * The Manufacturer Part Number (MPN) of the product, or the product to which the offer refers.
   */
  mpn?: string;
  /**
   * Provides negative considerations regarding something, most typically in pro/con lists for reviews (alongside [[positiveNotes]]). For symmetry 
   * 
   * In the case of a [[Review]], the property describes the [[itemReviewed]] from the perspective of the review; in the case of a [[Product]], the product itself is being described. Since product descriptions 
   * tend to emphasise positive claims, it may be relatively unusual to find [[negativeNotes]] used in this way. Nevertheless for the sake of symmetry, [[negativeNotes]] can be used on [[Product]].
   * 
   * The property values can be expressed either as unstructured text (repeated as necessary), or if ordered, as a list (in which case the most negative is at the beginning of the list).
   */
  negativeNotes?: schema.ItemListOrSubClass | schema.ListItemOrSubClass | string | schema.WebContentOrSubClass;
  /**
   * Indicates the [NATO stock number](https://en.wikipedia.org/wiki/NATO_Stock_Number) (nsn) of a [[Product]]. 
   */
  nsn?: string;
  /**
   * An offer to provide this item&#x2014;for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use [[businessFunction]] to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a [[Demand]]. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
   *       
   */
  offers?: schema.DemandOrSubClass | schema.OfferOrSubClass | string;
  /**
   * A pattern that something has, for example 'polka dot', 'striped', 'Canadian flag'. Values are typically expressed as text, although links to controlled value schemes are also supported.
   */
  pattern?: schema.DefinedTermOrSubClass | string;
  /**
   * Provides positive considerations regarding something, for example product highlights or (alongside [[negativeNotes]]) pro/con lists for reviews.
   * 
   * In the case of a [[Review]], the property describes the [[itemReviewed]] from the perspective of the review; in the case of a [[Product]], the product itself is being described.
   * 
   * The property values can be expressed either as unstructured text (repeated as necessary), or if ordered, as a list (in which case the most positive is at the beginning of the list).
   */
  positiveNotes?: schema.ItemListOrSubClass | schema.ListItemOrSubClass | string | schema.WebContentOrSubClass;
  /**
   * The product identifier, such as ISBN. For example: ``` meta itemprop="productID" content="isbn:123-456-789" ```.
   */
  productID?: string;
  /**
   * The date of production of the item, e.g. vehicle.
   */
  productionDate?: string;
  /**
   * The date the item, e.g. vehicle, was purchased by the current owner.
   */
  purchaseDate?: string;
  /**
   * The percentage of recycled material in the product.
   */
  recycledContentPercentage?: number;
  /**
   * The release date of a product or product model. This can be used to distinguish the exact variant of a product.
   */
  releaseDate?: string;
  /**
   * A review of the item.
   */
  review?: schema.ReviewOrSubClass | string;
  /**
   * Review of the item.
   */
  reviews?: schema.ReviewOrSubClass | string;
  /**
   * A standardized size of a product or creative work, specified either through a simple textual string (for example 'XL', '32Wx34L'), a  QuantitativeValue with a unitCode, or a comprehensive and structured [[SizeSpecification]]; in other cases, the [[width]], [[height]], [[depth]] and [[weight]] properties may be more applicable. 
   */
  size?: schema.DefinedTermOrSubClass | schema.QuantitativeValueOrSubClass | schema.SizeSpecificationOrSubClass | string;
  /**
   * The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers.
   */
  sku?: string;
  /**
   * A slogan or motto associated with the item.
   */
  slogan?: string;
  /**
   * A specification of the product, often grouped by a section header/name. This is a cleaner alternative to additionalProperty for strict retail product specifications.
   */
  specification?: schema.PropertyValueOrSubClass | string;
  /**
   * A substance of concern (SoC) contained within the product, typically based on regulatory lists like REACH or RoHS.
   */
  substanceOfConcern?: schema.ChemicalSubstanceOrSubClass | schema.DefinedTermOrSubClass | string;
  /**
   * The weight of the product or person.
   */
  weight?: schema.MassOrSubClass | schema.QuantitativeValueOrSubClass | string;
  /**
   * The width of the item.
   */
  width?: schema.DistanceOrSubClass | schema.QuantitativeValueOrSubClass | string;
  /**
   * An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. Typically the value is a URI-identified RDF class, and in this case corresponds to the
   *     use of rdf:type in RDF. Text values can be used sparingly, for cases where useful information can be added without their being an appropriate schema to reference. In the case of text values, the class label should follow the schema.org <a href="https://schema.org/docs/styleguide.html">style guide</a>.
   */
  additionalType?: string;
  /**
   * An alias for the item.
   */
  alternateName?: string;
  /**
   * A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.
   */
  disambiguatingDescription?: string;
  /**
   * An image of the item. This can be a [[URL]] or a fully described [[ImageObject]].
   */
  image?: schema.ImageObjectOrSubClass | string;
  /**
   * Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See [background notes](/docs/datamodel.html#mainEntityBackground) for details.
   */
  mainEntityOfPage?: schema.CreativeWorkOrSubClass | string;
  /**
   * A person or organization who owns this Thing.
   */
  owner?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
  /**
   * Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role.
   */
  potentialAction?: schema.ActionOrSubClass | string;
  /**
   * URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website.
   */
  sameAs?: string;
  /**
   * A CreativeWork or Event about this Thing.
   */
  subjectOf?: schema.CreativeWorkOrSubClass | schema.Event_OrSubClass | string;
  /**
   * URL of the item.
   */
  url?: string;
  /**
   * A medical code for the entity, taken from a controlled vocabulary or ontology such as ICD-9, DiseasesDB, MeSH, SNOMED-CT, RxNorm, etc.
   */
  code?: schema.MedicalCodeOrSubClass | string;
  /**
   * A medical guideline related to this entity.
   */
  guideline?: schema.MedicalGuidelineOrSubClass | string;
  /**
   * The system of medicine that includes this MedicalEntity, for example 'evidence-based', 'homeopathic', 'chiropractic', etc.
   */
  medicineSystem?: schema.MedicineSystemOrSubClass | string;
  /**
   * If applicable, the organization that officially recognizes this entity as part of its endorsed system of medicine.
   */
  recognizingAuthority?: schema.OrganizationOrSubClass | string;
  /**
   * If applicable, a medical specialty in which this entity is relevant.
   */
  relevantSpecialty?: schema.MedicalSpecialtyOrSubClass | string;
  /**
   * A medical study or trial related to this entity.
   */
  study?: schema.MedicalStudyOrSubClass | string;
};

/**
 * schema:Drug
 *
 * This differs from Drug because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type DrugOrSubClass =
  | Drug
  ;

/**
 * schema:Drug - Validation schema (w/ JOI)
 */
export const DrugJoiSchema = Joi.object({
  '@type': Joi.string().valid('Drug').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  name: Joi.string(),
  description: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.TextObjectOrSubClassJoiSchema), Joi.string().uri()),
  '@id': Joi.string().uri(),
  activeIngredient: Joi.string(),
  administrationRoute: Joi.string(),
  alcoholWarning: Joi.string(),
  availableStrength: Joi.alternatives().try(Joi.lazy(() => schema.DrugStrengthOrSubClassJoiSchema), Joi.string().uri()),
  breastfeedingWarning: Joi.string(),
  clincalPharmacology: Joi.string(),
  clinicalPharmacology: Joi.string(),
  dosageForm: Joi.string(),
  doseSchedule: Joi.alternatives().try(Joi.lazy(() => schema.DoseScheduleOrSubClassJoiSchema), Joi.string().uri()),
  drugClass: Joi.alternatives().try(Joi.lazy(() => schema.DrugClassOrSubClassJoiSchema), Joi.string().uri()),
  drugUnit: Joi.string(),
  foodWarning: Joi.string(),
  includedInHealthInsurancePlan: Joi.alternatives().try(Joi.lazy(() => schema.HealthInsurancePlanOrSubClassJoiSchema), Joi.string().uri()),
  interactingDrug: Joi.alternatives().try(Joi.lazy(() => schema.DrugOrSubClassJoiSchema), Joi.string().uri()),
  isAvailableGenerically: Joi.boolean(),
  isProprietary: Joi.boolean(),
  labelDetails: Joi.string().uri(),
  legalStatus: Joi.alternatives().try(Joi.lazy(() => schema.DrugLegalStatusOrSubClassJoiSchema), Joi.lazy(() => schema.MedicalEnumerationJoiSchema), Joi.string(), Joi.string().uri()),
  maximumIntake: Joi.alternatives().try(Joi.lazy(() => schema.MaximumDoseScheduleOrSubClassJoiSchema), Joi.string().uri()),
  mechanismOfAction: Joi.string(),
  nonProprietaryName: Joi.string(),
  overdosage: Joi.string(),
  pregnancyCategory: Joi.alternatives().try(Joi.lazy(() => schema.DrugPregnancyCategoryOrSubClassJoiSchema), Joi.string().uri()),
  pregnancyWarning: Joi.string(),
  prescribingInfo: Joi.string().uri(),
  prescriptionStatus: Joi.alternatives().try(Joi.lazy(() => schema.DrugPrescriptionStatusOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  proprietaryName: Joi.string(),
  relatedDrug: Joi.alternatives().try(Joi.lazy(() => schema.DrugOrSubClassJoiSchema), Joi.string().uri()),
  rxcui: Joi.string(),
  warning: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
  additionalProperty: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri()),
  aggregateRating: Joi.alternatives().try(Joi.lazy(() => schema.AggregateRatingOrSubClassJoiSchema), Joi.string().uri()),
  asin: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
  audience: Joi.alternatives().try(Joi.lazy(() => schema.AudienceOrSubClassJoiSchema), Joi.string().uri()),
  authorizedRepresentative: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  award: Joi.string(),
  awards: Joi.string(),
  brand: Joi.alternatives().try(Joi.lazy(() => schema.BrandOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  category: Joi.alternatives().try(Joi.lazy(() => schema.CategoryCodeOrSubClassJoiSchema), Joi.lazy(() => schema.PhysicalActivityCategoryJoiSchema), Joi.string(), Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
  color: Joi.string(),
  colorSwatch: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
  consumerNotice: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.TextObjectOrSubClassJoiSchema), Joi.string().uri(), Joi.lazy(() => schema.WebContentOrSubClassJoiSchema)),
  countryOfAssembly: Joi.string(),
  countryOfLastProcessing: Joi.string(),
  countryOfOrigin: Joi.alternatives().try(Joi.lazy(() => schema.CountryOrSubClassJoiSchema), Joi.string().uri()),
  depth: Joi.alternatives().try(Joi.lazy(() => schema.DistanceOrSubClassJoiSchema), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  displayLocation: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
  funding: Joi.alternatives().try(Joi.lazy(() => schema.GrantOrSubClassJoiSchema), Joi.string().uri()),
  gtin: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
  gtin12: Joi.string(),
  gtin13: Joi.string(),
  gtin14: Joi.string(),
  gtin8: Joi.string(),
  hasAdultConsideration: Joi.lazy(() => schema.AdultOrientedEnumerationJoiSchema),
  hasCertification: Joi.alternatives().try(Joi.lazy(() => schema.CertificationOrSubClassJoiSchema), Joi.string().uri()),
  hasDigitalProductPassport: Joi.alternatives().try(Joi.lazy(() => schema.DigitalProductPassportOrSubClassJoiSchema), Joi.string().uri()),
  hasEnergyConsumptionDetails: Joi.alternatives().try(Joi.lazy(() => schema.EnergyConsumptionDetailsOrSubClassJoiSchema), Joi.string().uri()),
  hasGS1DigitalLink: Joi.string().uri(),
  hasMeasurement: Joi.alternatives().try(Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  hasMerchantReturnPolicy: Joi.alternatives().try(Joi.lazy(() => schema.MerchantReturnPolicyOrSubClassJoiSchema), Joi.string().uri()),
  hasProductReturnPolicy: Joi.alternatives().try(Joi.lazy(() => schema.ProductReturnPolicyOrSubClassJoiSchema), Joi.string().uri()),
  height: Joi.alternatives().try(Joi.lazy(() => schema.DistanceOrSubClassJoiSchema), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  importer: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  inProductGroupWithID: Joi.string(),
  isAccessoryOrSparePartFor: Joi.alternatives().try(Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.string().uri()),
  isConsumableFor: Joi.alternatives().try(Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.string().uri()),
  isFamilyFriendly: Joi.boolean(),
  isOftenBoughtWith: Joi.alternatives().try(Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.string().uri()),
  isRelatedTo: Joi.alternatives().try(Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.lazy(() => schema.ServiceOrSubClassJoiSchema), Joi.string().uri()),
  isSimilarTo: Joi.alternatives().try(Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.lazy(() => schema.ServiceOrSubClassJoiSchema), Joi.string().uri()),
  isVariantOf: Joi.alternatives().try(Joi.lazy(() => schema.ProductGroupOrSubClassJoiSchema), Joi.lazy(() => schema.ProductModelOrSubClassJoiSchema), Joi.string().uri()),
  itemCondition: Joi.lazy(() => schema.OfferItemConditionJoiSchema),
  keywords: Joi.alternatives().try(Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  logo: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
  manufacturer: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  material: Joi.alternatives().try(Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  mobileUrl: Joi.string(),
  model: Joi.alternatives().try(Joi.lazy(() => schema.ProductModelOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  mpn: Joi.string(),
  negativeNotes: Joi.alternatives().try(Joi.lazy(() => schema.ItemListOrSubClassJoiSchema), Joi.lazy(() => schema.ListItemOrSubClassJoiSchema), Joi.string(), Joi.lazy(() => schema.WebContentOrSubClassJoiSchema), Joi.string().uri()),
  nsn: Joi.string(),
  offers: Joi.alternatives().try(Joi.lazy(() => schema.DemandOrSubClassJoiSchema), Joi.lazy(() => schema.OfferOrSubClassJoiSchema), Joi.string().uri()),
  pattern: Joi.alternatives().try(Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  positiveNotes: Joi.alternatives().try(Joi.lazy(() => schema.ItemListOrSubClassJoiSchema), Joi.lazy(() => schema.ListItemOrSubClassJoiSchema), Joi.string(), Joi.lazy(() => schema.WebContentOrSubClassJoiSchema), Joi.string().uri()),
  productID: Joi.string(),
  productionDate: Joi.string().isoDate(),
  purchaseDate: Joi.string().isoDate(),
  recycledContentPercentage: Joi.number(),
  releaseDate: Joi.string().isoDate(),
  review: Joi.alternatives().try(Joi.lazy(() => schema.ReviewOrSubClassJoiSchema), Joi.string().uri()),
  reviews: Joi.alternatives().try(Joi.lazy(() => schema.ReviewOrSubClassJoiSchema), Joi.string().uri()),
  size: Joi.alternatives().try(Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.lazy(() => schema.SizeSpecificationOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  sku: Joi.string(),
  slogan: Joi.string(),
  specification: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri()),
  substanceOfConcern: Joi.alternatives().try(Joi.lazy(() => schema.ChemicalSubstanceOrSubClassJoiSchema), Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  weight: Joi.alternatives().try(Joi.lazy(() => schema.MassOrSubClassJoiSchema), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  width: Joi.alternatives().try(Joi.lazy(() => schema.DistanceOrSubClassJoiSchema), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  additionalType: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
  alternateName: Joi.string(),
  disambiguatingDescription: Joi.string(),
  image: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
  mainEntityOfPage: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
  owner: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  potentialAction: Joi.alternatives().try(Joi.lazy(() => schema.ActionOrSubClassJoiSchema), Joi.string().uri()),
  sameAs: Joi.string().uri(),
  subjectOf: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.string().uri()),
  url: Joi.string().uri(),
  code: Joi.alternatives().try(Joi.lazy(() => schema.MedicalCodeOrSubClassJoiSchema), Joi.string().uri()),
  guideline: Joi.alternatives().try(Joi.lazy(() => schema.MedicalGuidelineOrSubClassJoiSchema), Joi.string().uri()),
  medicineSystem: Joi.alternatives().try(Joi.lazy(() => schema.MedicineSystemOrSubClassJoiSchema), Joi.string().uri()),
  recognizingAuthority: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  relevantSpecialty: Joi.alternatives().try(Joi.lazy(() => schema.MedicalSpecialtyOrSubClassJoiSchema), Joi.string().uri()),
  study: Joi.alternatives().try(Joi.lazy(() => schema.MedicalStudyOrSubClassJoiSchema), Joi.string().uri()),
});

/**
 * schema:Drug - Validation schema (w/ JOI)
 *
 * This differs from DrugJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const DrugOrSubClassJoiSchema = Joi.alternatives().try([
  DrugJoiSchema,
]);

/**
 * Runtime validator for schema:Drug.
 *
 * If some data has a structure which matches a schema:Drug, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeDrug = validateDrug(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeDrug instanceof OaValidationError) {
 *   // From this point on, `maybeDrug` will have type `OaValidationError`
 *   const error = maybeDrug;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeDrug` will have type `Drug`
 * const drug = maybeDrug;
 * ```
 */
export function validateDrug(maybeDrug: unknown): Drug | OaValidationError {
  const { value, error } = DrugJoiSchema.validate(maybeDrug);
  if (error) {
    return new OaValidationError('Drug', maybeDrug, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as Drug;
}
