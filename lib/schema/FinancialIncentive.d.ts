import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as schema from '../schema';
/**
 * schema:FinancialIncentive
 */
export declare type FinancialIncentive = {
    '@type': 'FinancialIncentive';
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
     * The geographic area where a service or offered item is provided.
     */
    areaServed?: schema.AdministrativeAreaOrSubClass | schema.GeoShapeOrSubClass | schema.PlaceOrSubClass | string;
    /**
     * The supplier of the incentivized item/service for which the incentive is valid for such as a utility company, merchant, or contractor.
     */
    eligibleWithSupplier?: schema.OrganizationOrSubClass | string;
    /**
     * Describes the amount that can be redeemed from this incentive.
     *
     * <p>[[QuantitativeValue]]: Use this for incentives based on price (either raw amount or percentage-based). For a raw amount example, "You can claim $2,500 - $7,500 from the total cost of installation" would be represented as the following:</p>
     *     {
     *         "@type": "QuantitativeValue",
     *         “minValue”: 2500,
     *         “maxValue”: 7500,
     *         "unitCode": "USD"
     *     }
     * <p>[[QuantitativeValue]] can also be used for percentage amounts. In such cases, value is used to represent the incentive’s percentage, while maxValue represents a limit (if one exists) to that incentive. The unitCode should be 'P1' and the unitText should be '%', while valueReference should be used for holding the currency type. For example, "You can claim up to 30% of the total cost of installation, up to a maximum of $7,500" would be:</p>
     *     {
     *         "@type": "QuantitativeValue",
     *         "value": 30,
     *         "unitCode": "P1",
     *         "unitText": "%",
     *         “maxValue”: 7500,
     *         “valueReference”: “USD”
     *     }
     * <p>[[UnitPriceSpecification]]: Use this for incentives that are based on amounts rather than price. For example, a net metering rebate that pays $10/kWh, up to $1,000:</p>
     *     {
     *         "@type": "UnitPriceSpecification",
     *         "price": 10,
     *         "priceCurrency": "USD",
     *         "referenceQuantity": 1,
     *         "unitCode": "DO3",
     *         "unitText": "kw/h",
     *         "maxPrice": 1000,
     *         "description": "$10 / kwh up to $1000"
     *     }
     * <p>[[LoanOrCredit]]: Use for incentives that are loan based. For example, a loan of $4,000 - $50,000 with a repayment term of 10 years, interest free would look like:</p>
     *     {
     *         "@type": "LoanOrCredit",
     *         "loanTerm": {
     *                 "@type":"QuantitativeValue",
     *                 "value":"10",
     *                 "unitCode": "ANN"
     *             },
     *         "amount":[
     *             {
     *                 "@type": "QuantitativeValue",
     *                 "Name":"fixed interest rate",
     *                 "value":"0",
     *             },
     *         ],
     *         "amount":[
     *             {
     *                 "@type": "MonetaryAmount",
     *                 "Name":"min loan amount",
     *                 "value":"4000",
     *                 "currency":"CAD"
     *             },
     *             {
     *                 "@type": "MonetaryAmount",
     *                 "Name":"max loan amount",
     *                 "value":"50000",
     *                 "currency":"CAD"
     *             }
     *         ],
     *     }
     *
     * In summary: <ul><li>Use [[QuantitativeValue]] for absolute/percentage-based incentives applied on the price of a good/service.</li>
     * <li>Use [[UnitPriceSpecification]] for incentives based on a per-unit basis (e.g. net metering).</li>
     * <li>Use [[LoanOrCredit]] for loans/credits.</li>
     * </ul>.
     */
    incentiveAmount?: schema.LoanOrCreditOrSubClass | schema.QuantitativeValueOrSubClass | schema.UnitPriceSpecificationOrSubClass | string;
    /**
     * The status of the incentive (active, on hold, retired, etc.).
     */
    incentiveStatus?: schema.IncentiveStatus;
    /**
     * The type of incentive offered (tax credit/rebate, tax deduction, tax waiver, subsidies, etc.).
     */
    incentiveType?: schema.IncentiveType;
    /**
     * The type or specific product(s) and/or service(s) being incentivized.
     * <p>DefinedTermSets are used for product and service categories such as the United Nations Standard Products and Services Code:</p>
     *     {
     *         "@type": "DefinedTerm",
     *         "inDefinedTermSet": "https://www.unspsc.org/",
     *         "termCode": "261315XX",
     *         "name": "Photovoltaic module"
     *     }
     *
     * <p>For a specific product or service, use the Product type:</p>
     *     {
     *         "@type": "Product",
     *         "name": "Kenmore White 17" Microwave",
     *     }
     * For multiple different incentivized items, use multiple [[DefinedTerm]] or [[Product]].
     */
    incentivizedItem?: schema.DefinedTermOrSubClass | schema.ProductOrSubClass | string;
    /**
     * Optional. Income limit for which the incentive is applicable for.
     *
     * <p>If MonetaryAmount is specified, this should be based on annualized income (e.g. if an incentive is limited to those making <$114,000 annually):</p>
     *     {
     *         "@type": "MonetaryAmount",
     *         "maxValue": 114000,
     *         "currency": "USD",
     *     }
     *
     * Use Text for incentives that are limited based on other criteria, for example if an incentive is only available to recipients making 120% of the median poverty income in their area.
     */
    incomeLimit?: schema.MonetaryAmountOrSubClass | string;
    /**
     * The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
     */
    provider?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
    /**
     * The publisher of the article in question.
     */
    publisher?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
    /**
     * Optional. The maximum price the item can have and still qualify for this offer.
     */
    purchasePriceLimit?: schema.MonetaryAmountOrSubClass | string;
    /**
     * Optional. The type of purchase the consumer must make in order to qualify for this incentive.
     */
    purchaseType?: schema.PurchaseType;
    /**
     * Optional. The types of expenses that are covered by the incentive. For example some incentives are only for the goods (tangible items) but the services (labor) are excluded.
     */
    qualifiedExpense?: schema.IncentiveQualifiedExpenseType;
    /**
     * The date when the item becomes valid.
     */
    validFrom?: string;
    /**
     * The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours.
     */
    validThrough?: string;
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
};
/**
 * schema:FinancialIncentive
 *
 * This differs from FinancialIncentive because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type FinancialIncentiveOrSubClass = FinancialIncentive;
/**
 * schema:FinancialIncentive - Validation schema (w/ JOI)
 */
export declare const FinancialIncentiveJoiSchema: Joi.ObjectSchema;
/**
 * schema:FinancialIncentive - Validation schema (w/ JOI)
 *
 * This differs from FinancialIncentiveJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const FinancialIncentiveOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:FinancialIncentive.
 *
 * If some data has a structure which matches a schema:FinancialIncentive, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeFinancialIncentive = validateFinancialIncentive(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeFinancialIncentive instanceof OaValidationError) {
 *   // From this point on, `maybeFinancialIncentive` will have type `OaValidationError`
 *   const error = maybeFinancialIncentive;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeFinancialIncentive` will have type `FinancialIncentive`
 * const financialIncentive = maybeFinancialIncentive;
 * ```
 */
export declare function validateFinancialIncentive(maybeFinancialIncentive: unknown): FinancialIncentive | OaValidationError;
