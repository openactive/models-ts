import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as schema from '../schema';
/**
 * schema:MortgageLoan
 */
export declare type MortgageLoan = {
    '@type': 'MortgageLoan';
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
     * Whether borrower is a resident of the jurisdiction where the property is located.
     */
    domiciledMortgage?: boolean;
    /**
     * Amount of mortgage mandate that can be converted into a proper mortgage at a later stage.
     */
    loanMortgageMandateAmount?: schema.MonetaryAmountOrSubClass | string;
    /**
     * The period of time after any due date that the borrower has to fulfil its obligations before a default (failure to pay) is deemed to have occurred.
     */
    gracePeriod?: string;
    /**
     * The amount of money.
     */
    amount?: number | schema.MonetaryAmountOrSubClass | string;
    /**
     * The type of a loan or credit.
     */
    loanType?: string;
    /**
     * Whether the terms for payment of interest can be renegotiated during the life of the loan.
     */
    renegotiableLoan?: boolean;
    /**
     * The only way you get the money back in the event of default is the security. Recourse is where you still have the opportunity to go back to the borrower for the rest of the money.
     */
    recourseLoan?: boolean;
    /**
     * Assets required to secure loan or credit repayments. It may take form of third party pledge, goods, financial instruments (cash, securities, etc.)
     */
    requiredCollateral?: string | schema.ThingOrSubClass;
    /**
     * A form of paying back money previously borrowed from a lender. Repayment usually takes the form of periodic payments that normally include part principal plus interest in each payment.
     */
    loanRepaymentForm?: schema.RepaymentSpecificationOrSubClass | string;
    /**
     * The currency in which the monetary amount is expressed.\n\nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217) e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies e.g. "BTC"; well known names for [Local Exchange Tradings Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types e.g. "Ithaca HOUR".
     */
    currency?: string;
    /**
     * The duration of the loan or credit agreement.
     */
    loanTerm?: schema.QuantitativeValueOrSubClass | string;
    /**
     * Description of fees, commissions, and other terms applied either to a class of financial product, or by a financial service organization.
     */
    feesAndCommissionsSpecification?: string;
    /**
     * The interest rate, charged or paid, applicable to the financial product. Note: This is different from the calculated annualPercentageRate.
     */
    interestRate?: number | schema.QuantitativeValueOrSubClass | string;
    /**
     * The annual rate that is charged for borrowing (or made by investing), expressed as a single percentage number that represents the actual yearly cost of funds over the term of a loan. This includes any fees or additional costs associated with the transaction.
     */
    annualPercentageRate?: schema.QuantitativeValueOrSubClass | number | string;
    /**
     * The overall rating, based on a collection of reviews or ratings, of the item.
     */
    aggregateRating?: schema.AggregateRatingOrSubClass | string;
    /**
     * The tangible thing generated by the service, e.g. a passport, permit, etc.
     */
    serviceOutput?: schema.ThingOrSubClass | string;
    /**
     * A pointer to another, functionally similar product (or multiple products).
     */
    isSimilarTo?: schema.ProductOrSubClass | schema.ServiceOrSubClass | string;
    /**
     * An offer to provide this item&#x2014;for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use [[businessFunction]] to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a [[Demand]]. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
     *
     */
    offers?: schema.OfferOrSubClass | schema.DemandOrSubClass | string;
    /**
     * An entity that arranges for an exchange between a buyer and a seller.  In most cases a broker never acquires or releases ownership of a product or service involved in an exchange.  If it is not clear whether an entity is a broker, seller, or buyer, the latter two terms are preferred.
     */
    broker?: schema.PersonOrSubClass | schema.OrganizationOrSubClass | string;
    /**
     * Human-readable terms of service documentation.
     */
    termsOfService?: string;
    /**
     * An award won by or for this item.
     */
    award?: string;
    /**
     * The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
     */
    provider?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
    /**
     * A review of the item.
     */
    review?: schema.ReviewOrSubClass | string;
    /**
     * The geographic area where a service or offered item is provided.
     */
    areaServed?: string | schema.PlaceOrSubClass | schema.AdministrativeAreaOrSubClass | schema.GeoShapeOrSubClass;
    /**
     * The audience eligible for this service.
     */
    serviceAudience?: schema.AudienceOrSubClass | string;
    /**
     * Indicates an OfferCatalog listing for this Organization, Person, or Service.
     */
    hasOfferCatalog?: schema.OfferCatalogOrSubClass | string;
    /**
     * The tangible thing generated by the service, e.g. a passport, permit, etc.
     */
    produces?: schema.ThingOrSubClass | string;
    /**
     * An associated logo.
     */
    logo?: schema.ImageObjectOrSubClass | string;
    /**
     * A means of accessing the service (e.g. a phone bank, a web site, a location, etc.).
     */
    availableChannel?: schema.ServiceChannelOrSubClass | string;
    /**
     * A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.
     */
    category?: schema.PhysicalActivityCategory | string | schema.ThingOrSubClass;
    /**
     * The type of service being offered, e.g. veterans' benefits, emergency relief, etc.
     */
    serviceType?: string | schema.GovernmentBenefitsType;
    /**
     * A slogan or motto associated with the item.
     */
    slogan?: string;
    /**
     * The hours during which this service or contact is available.
     */
    hoursAvailable?: schema.OpeningHoursSpecificationOrSubClass | string;
    /**
     * The geographic area where the service is provided.
     */
    serviceArea?: schema.PlaceOrSubClass | schema.AdministrativeAreaOrSubClass | schema.GeoShapeOrSubClass | string;
    /**
     * The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person.
     */
    brand?: schema.BrandOrSubClass | schema.OrganizationOrSubClass | string;
    /**
     * An intended audience, i.e. a group for whom something was created.
     */
    audience?: schema.AudienceOrSubClass | string;
    /**
     * A pointer to another, somehow related product (or multiple products).
     */
    isRelatedTo?: schema.ProductOrSubClass | schema.ServiceOrSubClass | string;
    /**
     * Indicates the mobility of a provided service (e.g. 'static', 'dynamic').
     */
    providerMobility?: string;
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
 * schema:MortgageLoan
 *
 * This differs from MortgageLoan because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type MortgageLoanOrSubClass = MortgageLoan;
/**
 * schema:MortgageLoan - Validation schema (w/ JOI)
 */
export declare const MortgageLoanJoiSchema: Joi.ObjectSchema;
/**
 * schema:MortgageLoan - Validation schema (w/ JOI)
 *
 * This differs from MortgageLoanJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const MortgageLoanOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:MortgageLoan.
 *
 * If some data has a structure which matches a schema:MortgageLoan, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeMortgageLoan = validateMortgageLoan(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeMortgageLoan instanceof OaValidationError) {
 *   // From this point on, `maybeMortgageLoan` will have type `OaValidationError`
 *   const error = maybeMortgageLoan;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeMortgageLoan` will have type `MortgageLoan`
 * const mortgageLoan = maybeMortgageLoan;
 * ```
 */
export declare function validateMortgageLoan(maybeMortgageLoan: unknown): MortgageLoan | OaValidationError;
