import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as schema from '../schema';
/**
 * schema:ProductCollection
 */
export declare type ProductCollection = {
    '@type': 'ProductCollection';
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
     * This links to a node or nodes indicating the exact quantity of the products included in  an [[Offer]] or [[ProductCollection]].
     */
    includesObject?: schema.TypeAndQuantityNodeOrSubClass | string;
    /**
     * [object Object]
     */
    collectionSize?: number;
    /**
     * The subject matter of an object.
     */
    about?: schema.ThingOrSubClass | string;
    /**
     * An abstract is a short description that summarizes a [[CreativeWork]].
     */
    abstract?: string;
    /**
     * The human sensory perceptual system or cognitive faculty through which a person may process or perceive the intellectual content of a resource, not including any adaptations of the content (e.g., text alternatives for images). Values should be drawn from the [approved vocabulary](https://www.w3.org/2021/a11y-discov-vocab/latest/#accessMode-vocabulary).
     */
    accessMode?: string;
    /**
     * A list of single or combined access modes that are sufficient to understand all the intellectual content of a resource, including any adaptations. Values should be drawn from the [approved vocabulary](https://www.w3.org/2021/a11y-discov-vocab/latest/#accessModeSufficient-vocabulary).
     */
    accessModeSufficient?: schema.ItemListOrSubClass | string;
    /**
     * Indicates that the resource is compatible with the referenced accessibility API. Values should be drawn from the [approved vocabulary](https://www.w3.org/2021/a11y-discov-vocab/latest/#accessibilityAPI-vocabulary).
     */
    accessibilityAPI?: string;
    /**
     * Identifies input methods that are sufficient to fully control the described resource. Values should be drawn from the [approved vocabulary](https://www.w3.org/2021/a11y-discov-vocab/latest/#accessibilityControl-vocabulary).
     */
    accessibilityControl?: string;
    /**
     * Content features of the resource, such as accessible media, alternatives and supported enhancements for accessibility. Values should be drawn from the [approved vocabulary](https://www.w3.org/2021/a11y-discov-vocab/latest/#accessibilityFeature-vocabulary).
     */
    accessibilityFeature?: string;
    /**
     * A characteristic of the described resource that is physiologically dangerous to some users. Related to WCAG 2.0 guideline 2.3. Values should be drawn from the [approved vocabulary](https://www.w3.org/2021/a11y-discov-vocab/latest/#accessibilityHazard-vocabulary).
     */
    accessibilityHazard?: string;
    /**
     * A human-readable summary of specific accessibility features or deficiencies, consistent with the other accessibility metadata but expressing subtleties such as "short descriptions are present but long descriptions will be needed for non-visual users" or "short descriptions are present and no long descriptions are needed".
     */
    accessibilitySummary?: string;
    /**
     * Specifies the Person that is legally accountable for the CreativeWork.
     */
    accountablePerson?: schema.PersonOrSubClass | string;
    /**
     * Indicates a page documenting how licenses can be purchased or otherwise acquired, for the current item.
     */
    acquireLicensePage?: schema.CreativeWorkOrSubClass | string;
    /**
     * The overall rating, based on a collection of reviews or ratings, of the item.
     */
    aggregateRating?: schema.AggregateRatingOrSubClass | string;
    /**
     * A secondary title of the CreativeWork.
     */
    alternativeHeadline?: string;
    /**
     * Indicates a page or other link involved in archival of a [[CreativeWork]]. In the case of [[MediaReview]], the items in a [[MediaReviewItem]] may often become inaccessible, but be archived by archival, journalistic, activist, or law enforcement organizations. In such cases, the referenced page may not directly publish the content.
     */
    archivedAt?: string | schema.WebPageOrSubClass;
    /**
     * The item being described is intended to assess the competency or learning outcome defined by the referenced term.
     */
    assesses?: schema.DefinedTermOrSubClass | string;
    /**
     * A media object that encodes this CreativeWork. This property is a synonym for encoding.
     */
    associatedMedia?: schema.MediaObjectOrSubClass | string;
    /**
     * An intended audience, i.e. a group for whom something was created.
     */
    audience?: schema.AudienceOrSubClass | string;
    /**
     * An embedded audio object.
     */
    audio?: schema.AudioObjectOrSubClass | schema.ClipOrSubClass | schema.MusicRecordingOrSubClass | string;
    /**
     * The author of this content or rating. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangeably.
     */
    author?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
    /**
     * An award won by or for this item.
     */
    award?: string;
    /**
     * Awards won by or for this item.
     */
    awards?: string;
    /**
     * Fictional person connected with a creative work.
     */
    character?: schema.PersonOrSubClass | string;
    /**
     * A citation or reference to another creative work, such as another publication, web page, scholarly article, etc.
     */
    citation?: schema.CreativeWorkOrSubClass | string;
    /**
     * Comments, typically from users.
     */
    comment?: schema.CommentOrSubClass | string;
    /**
     * The number of comments this CreativeWork (e.g. Article, Question or Answer) has received. This is most applicable to works published in Web sites with commenting system; additional comments may exist elsewhere.
     */
    commentCount?: number;
    /**
     * Conditions that affect the availability of, or method(s) of access to, an item. Typically used for real world items such as an [[ArchiveComponent]] held by an [[ArchiveOrganization]]. This property is not suitable for use as a general Web access control mechanism. It is expressed only in natural language.\n\nFor example "Available by appointment from the Reading Room" or "Accessible only from logged-in accounts ".
     */
    conditionsOfAccess?: string;
    /**
     * The location depicted or described in the content. For example, the location in a photograph or painting.
     */
    contentLocation?: schema.PlaceOrSubClass | string;
    /**
     * Official rating of a piece of content&#x2014;for example, 'MPAA PG-13'.
     */
    contentRating?: schema.RatingOrSubClass | string;
    /**
     * The specific time described by a creative work, for works (e.g. articles, video objects etc.) that emphasise a particular moment within an Event.
     */
    contentReferenceTime?: string;
    /**
     * A secondary contributor to the CreativeWork or Event.
     */
    contributor?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
    /**
     * The party holding the legal copyright to the CreativeWork.
     */
    copyrightHolder?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
    /**
     * Text of a notice appropriate for describing the copyright aspects of this Creative Work, ideally indicating the owner of the copyright for the Work.
     */
    copyrightNotice?: string;
    /**
     * The year during which the claimed copyright for the CreativeWork was first asserted.
     */
    copyrightYear?: number;
    /**
     * Indicates a correction to a [[CreativeWork]], either via a [[CorrectionComment]], textually or in another document.
     */
    correction?: schema.CorrectionCommentOrSubClass | string;
    /**
     * The country of origin of something, including products as well as creative  works such as movie and TV content.
     *
     * In the case of TV and movie, this would be the country of the principle offices of the production company or individual responsible for the movie. For other kinds of [[CreativeWork]] it is difficult to provide fully general guidance, and properties such as [[contentLocation]] and [[locationCreated]] may be more applicable.
     *
     * In the case of products, the country of origin of the product. The exact interpretation of this may vary by context and product type, and cannot be fully enumerated here.
     */
    countryOfOrigin?: schema.CountryOrSubClass | string;
    /**
     * The status of a creative work in terms of its stage in a lifecycle. Example terms include Incomplete, Draft, Published, Obsolete. Some organizations define a set of terms for the stages of their publication lifecycle.
     */
    creativeWorkStatus?: schema.DefinedTermOrSubClass | string;
    /**
     * The creator/author of this CreativeWork. This is the same as the Author property for CreativeWork.
     */
    creator?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
    /**
     * Text that can be used to credit person(s) and/or organization(s) associated with a published Creative Work.
     */
    creditText?: string;
    /**
     * The date on which the CreativeWork was created or the item was added to a DataFeed.
     */
    dateCreated?: string;
    /**
     * The date on which the CreativeWork was most recently modified or when the item's entry was modified within a DataFeed.
     */
    dateModified?: string;
    /**
     * Date of first publication or broadcast. For example the date a [[CreativeWork]] was broadcast or a [[Certification]] was issued.
     */
    datePublished?: string;
    /**
     * Indicates an IPTCDigitalSourceEnumeration code indicating the nature of the digital source(s) for some [[CreativeWork]].
     */
    digitalSourceType?: schema.IPTCDigitalSourceEnumerationOrSubClass | string;
    /**
     * A link to the page containing the comments of the CreativeWork.
     */
    discussionUrl?: string;
    /**
     * The location at which an item can be viewed or experienced in-person.
     */
    displayLocation?: schema.PlaceOrSubClass | string;
    /**
     * An [EIDR](https://eidr.org/) (Entertainment Identifier Registry) [[identifier]] representing a specific edit / edition for a work of film or television.
     *
     * For example, the motion picture known as "Ghostbusters" whose [[titleEIDR]] is "10.5240/7EC7-228A-510A-053E-CBB8-J" has several edits, e.g. "10.5240/1F2A-E1C5-680A-14C6-E76B-I" and "10.5240/8A35-3BEE-6497-5D12-9E4F-3".
     *
     * Since schema.org types like [[Movie]] and [[TVEpisode]] can be used for both works and their multiple expressions, it is possible to use [[titleEIDR]] alone (for a general description), or alongside [[editEIDR]] for a more edit-specific description.
     *
     */
    editEIDR?: string;
    /**
     * Specifies the Person who edited the CreativeWork.
     */
    editor?: schema.PersonOrSubClass | string;
    /**
     * An alignment to an established educational framework.
     *
     * This property should not be used where the nature of the alignment can be described using a simple property, for example to express that a resource [[teaches]] or [[assesses]] a competency.
     */
    educationalAlignment?: schema.AlignmentObjectOrSubClass | string;
    /**
     * The level in terms of progression through an educational or training context. Examples of educational levels include 'beginner', 'intermediate' or 'advanced', and formal sets of level indicators.
     */
    educationalLevel?: schema.DefinedTermOrSubClass | string;
    /**
     * The purpose of a work in the context of education; for example, 'assignment', 'group work'.
     */
    educationalUse?: schema.DefinedTermOrSubClass | string;
    /**
     * A media object that encodes this CreativeWork. This property is a synonym for associatedMedia.
     */
    encoding?: schema.MediaObjectOrSubClass | string;
    /**
     * Media type typically expressed using a MIME format (see [IANA site](http://www.iana.org/assignments/media-types/media-types.xhtml) and [MDN reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)), e.g. application/zip for a SoftwareApplication binary, audio/mpeg for .mp3 etc.
     *
     * In cases where a [[CreativeWork]] has several media type representations, [[encoding]] can be used to indicate each [[MediaObject]] alongside particular [[encodingFormat]] information.
     *
     * Unregistered or niche encoding and file formats can be indicated instead via the most appropriate URL, e.g. defining Web page or a Wikipedia/Wikidata entry.
     */
    encodingFormat?: string;
    /**
     * A media object that encodes this CreativeWork.
     */
    encodings?: schema.MediaObjectOrSubClass | string;
    /**
     * A creative work that this work is an example/instance/realization/derivation of.
     */
    exampleOfWork?: schema.CreativeWorkOrSubClass | string;
    /**
     * Date the content expires and is no longer useful or available. For example a [[VideoObject]] or [[NewsArticle]] whose availability or relevance is time-limited, a [[ClaimReview]] fact check whose publisher wants to indicate that it may no longer be relevant (or helpful to highlight) after some date, or a [[Certification]] the validity has expired.
     */
    expires?: string;
    /**
     * Media type, typically MIME format (see [IANA site](http://www.iana.org/assignments/media-types/media-types.xhtml)) of the content, e.g. application/zip of a SoftwareApplication binary. In cases where a CreativeWork has several media type representations, 'encoding' can be used to indicate each MediaObject alongside particular fileFormat information. Unregistered or niche file formats can be indicated instead via the most appropriate URL, e.g. defining Web page or a Wikipedia entry.
     */
    fileFormat?: string;
    /**
     * A person or organization that supports (sponsors) something through some kind of financial contribution.
     */
    funder?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
    /**
     * A [[Grant]] that directly or indirectly provide funding or sponsorship for this item. See also [[ownershipFundingInfo]].
     */
    funding?: schema.GrantOrSubClass | string;
    /**
     * Genre of the creative work, broadcast channel or group.
     */
    genre?: schema.DefinedTermOrSubClass | string;
    /**
     * Indicates an item or CreativeWork that is part of this item, or CreativeWork (in some sense).
     */
    hasPart?: schema.CreativeWorkOrSubClass | string;
    /**
     * Headline of the article.
     */
    headline?: string;
    /**
     * The language of the content or performance or used in an action. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[availableLanguage]].
     */
    inLanguage?: schema.LanguageOrSubClass | string;
    /**
     * The number of interactions for the CreativeWork using the WebSite or SoftwareApplication. The most specific child type of InteractionCounter should be used.
     */
    interactionStatistic?: schema.InteractionCounterOrSubClass | string;
    /**
     * The predominant mode of learning supported by the learning resource. Acceptable values are 'active', 'expositive', or 'mixed'.
     */
    interactivityType?: string;
    /**
     * Used to indicate a specific claim contained, implied, translated or refined from the content of a [[MediaObject]] or other [[CreativeWork]]. The interpreting party can be indicated using [[claimInterpreter]].
     */
    interpretedAsClaim?: schema.ClaimOrSubClass | string;
    /**
     * A flag to signal that the item, event, or place is accessible for free.
     */
    isAccessibleForFree?: boolean;
    /**
     * A resource from which this work is derived or from which it is a modification or adaptation.
     */
    isBasedOn?: schema.CreativeWorkOrSubClass | schema.ProductOrSubClass | string;
    /**
     * A resource that was used in the creation of this resource. This term can be repeated for multiple sources. For example, http://example.com/great-multiplication-intro.html.
     */
    isBasedOnUrl?: schema.CreativeWorkOrSubClass | schema.ProductOrSubClass | string;
    /**
     * Indicates whether this content is family friendly.
     */
    isFamilyFriendly?: boolean;
    /**
     * Indicates an item or CreativeWork that this item, or CreativeWork (in some sense), is part of.
     */
    isPartOf?: schema.CreativeWorkOrSubClass | string;
    /**
     * Keywords or tags used to describe some item. Multiple textual entries in a keywords list are typically delimited by commas, or by repeating the property.
     */
    keywords?: schema.DefinedTermOrSubClass | string;
    /**
     * The predominant type or kind characterizing the learning resource. For example, 'presentation', 'handout'.
     */
    learningResourceType?: schema.DefinedTermOrSubClass | string;
    /**
     * A license document that applies to this content, typically indicated by URL.
     */
    license?: schema.CreativeWorkOrSubClass | string;
    /**
     * The location where the CreativeWork was created, which may not be the same as the location depicted in the CreativeWork.
     */
    locationCreated?: schema.PlaceOrSubClass | string;
    /**
     * Indicates the primary entity described in some page or other CreativeWork.
     */
    mainEntity?: schema.ThingOrSubClass | string;
    /**
     * A maintainer of a [[Dataset]], software package ([[SoftwareApplication]]), or other [[Project]]. A maintainer is a [[Person]] or [[Organization]] that manages contributions to, and/or publication of, some (typically complex) artifact. It is common for distributions of software and data to be based on "upstream" sources. When [[maintainer]] is applied to a specific version of something e.g. a particular version or packaging of a [[Dataset]], it is always  possible that the upstream source has a different maintainer. The [[isBasedOn]] property can be used to indicate such relationships between datasets to make the different maintenance roles clear. Similarly in the case of software, a package may have dedicated maintainers working on integration into software distributions such as Ubuntu, as well as upstream maintainers of the underlying work.
     *
     */
    maintainer?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
    /**
     * A material that something is made from, e.g. leather, wool, cotton, paper.
     */
    material?: schema.ProductOrSubClass | string;
    /**
     * [object Object]
     */
    materialExtent?: schema.QuantitativeValueOrSubClass | string;
    /**
     * Indicates that the CreativeWork contains a reference to, but is not necessarily about a concept.
     */
    mentions?: schema.ThingOrSubClass | string;
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
     * The position of an item in a series or sequence of items.
     */
    position?: number | string;
    /**
     * The person or organization who produced the work (e.g. music album, movie, TV/radio series etc.).
     */
    producer?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
    /**
     * The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
     */
    provider?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
    /**
     * A publication event associated with the item.
     */
    publication?: schema.PublicationEventOrSubClass | string;
    /**
     * The publisher of the article in question.
     */
    publisher?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
    /**
     * The publishing division which published the comic.
     */
    publisherImprint?: schema.OrganizationOrSubClass | string;
    /**
     * The publishingPrinciples property indicates (typically via [[URL]]) a document describing the editorial principles of an [[Organization]] (or individual, e.g. a [[Person]] writing a blog) that relate to their activities as a publisher, e.g. ethics or diversity policies. When applied to a [[CreativeWork]] (e.g. [[NewsArticle]]) the principles are those of the party primarily responsible for the creation of the [[CreativeWork]].
     *
     * While such policies are most typically expressed in natural language, sometimes related information (e.g. indicating a [[funder]]) can be expressed using schema.org terminology.
     *
     */
    publishingPrinciples?: schema.CreativeWorkOrSubClass | string;
    /**
     * The Event where the CreativeWork was recorded. The CreativeWork may capture all or part of the event.
     */
    recordedAt?: schema.Event_OrSubClass | string;
    /**
     * The place and time the release was issued, expressed as a PublicationEvent.
     */
    releasedEvent?: schema.PublicationEventOrSubClass | string;
    /**
     * A review of the item.
     */
    review?: schema.ReviewOrSubClass | string;
    /**
     * Review of the item.
     */
    reviews?: schema.ReviewOrSubClass | string;
    /**
     * Indicates (by URL or string) a particular version of a schema used in some CreativeWork. This property was created primarily to
     *     indicate the use of a specific schema.org release, e.g. ```10.0``` as a simple string, or more explicitly via URL, ```https://schema.org/docs/releases.html#v10.0```. There may be situations in which other schemas might usefully be referenced this way, e.g. ```http://dublincore.org/specifications/dublin-core/dces/1999-07-02/``` but this has not been carefully explored in the community.
     */
    schemaVersion?: string;
    /**
     * Indicates the date on which the current structured data was generated / published. Typically used alongside [[sdPublisher]].
     */
    sdDatePublished?: string;
    /**
     * A license document that applies to this structured data, typically indicated by URL.
     */
    sdLicense?: schema.CreativeWorkOrSubClass | string;
    /**
     * Indicates the party responsible for generating and publishing the current structured data markup, typically in cases where the structured data is derived automatically from existing published content but published on a different site. For example, student projects and open data initiatives often re-publish existing content with more explicitly structured metadata. The
     * [[sdPublisher]] property helps make such practices more explicit.
     */
    sdPublisher?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
    /**
     * A standardized size of a product or creative work, specified either through a simple textual string (for example 'XL', '32Wx34L'), a  QuantitativeValue with a unitCode, or a comprehensive and structured [[SizeSpecification]]; in other cases, the [[width]], [[height]], [[depth]] and [[weight]] properties may be more applicable.
     */
    size?: schema.DefinedTermOrSubClass | schema.QuantitativeValueOrSubClass | schema.SizeSpecificationOrSubClass | string;
    /**
     * The Organization on whose behalf the creator was working.
     */
    sourceOrganization?: schema.OrganizationOrSubClass | string;
    /**
     * The "spatial" property can be used in cases when more specific properties
     * (e.g. [[locationCreated]], [[spatialCoverage]], [[contentLocation]]) are not known to be appropriate.
     */
    spatial?: schema.PlaceOrSubClass | string;
    /**
     * The spatialCoverage of a CreativeWork indicates the place(s) which are the focus of the content. It is a subproperty of
     *       contentLocation intended primarily for more technical and detailed materials. For example with a Dataset, it indicates
     *       areas that the dataset describes: a dataset of New York weather would have spatialCoverage which was the place: the state of New York.
     */
    spatialCoverage?: schema.PlaceOrSubClass | string;
    /**
     * A person or organization that supports a thing through a pledge, promise, or financial contribution. E.g. a sponsor of a Medical Study or a corporate sponsor of an event.
     */
    sponsor?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
    /**
     * The item being described is intended to help a person learn the competency or learning outcome defined by the referenced term.
     */
    teaches?: schema.DefinedTermOrSubClass | string;
    /**
     * The "temporal" property can be used in cases where more specific properties
     * (e.g. [[temporalCoverage]], [[dateCreated]], [[dateModified]], [[datePublished]]) are not known to be appropriate.
     */
    temporal?: string;
    /**
     * The temporalCoverage of a CreativeWork indicates the period that the content applies to, i.e. that it describes, either as a DateTime or as a textual string indicating a time period in [ISO 8601 time interval format](https://en.wikipedia.org/wiki/ISO_8601#Time_intervals). In
     *       the case of a Dataset it will typically indicate the relevant time period in a precise notation (e.g. for a 2011 census dataset, the year 2011 would be written "2011/2012"). Other forms of content, e.g. ScholarlyArticle, Book, TVSeries or TVEpisode, may indicate their temporalCoverage in broader terms - textually or via well-known URL.
     *       Written works such as books may sometimes have precise temporal coverage too, e.g. a work set in 1939 - 1945 can be indicated in ISO 8601 interval format format via "1939/1945".
     *
     * Open-ended date ranges can be written with ".." in place of the end date. For example, "2015-11/.." indicates a range beginning in November 2015 and with no specified final date. This is tentative and might be updated in future when ISO 8601 is officially updated.
     */
    temporalCoverage?: string;
    /**
     * The textual content of this CreativeWork.
     */
    text?: string;
    /**
     * Thumbnail image for an image or video.
     */
    thumbnail?: schema.ImageObjectOrSubClass | string;
    /**
     * A thumbnail image relevant to the Thing.
     */
    thumbnailUrl?: string;
    /**
     * Approximate or typical time it usually takes to work with or through the content of this work for the typical or target audience.
     */
    timeRequired?: string;
    /**
     * The work that this work has been translated from. E.g. 物种起源 is a translationOf “On the Origin of Species”.
     */
    translationOfWork?: schema.CreativeWorkOrSubClass | string;
    /**
     * Organization or person who adapts a creative work to different languages, regional differences and technical requirements of a target market, or that translates during some event.
     */
    translator?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
    /**
     * The typical expected age range, e.g. '7-9', '11-'.
     */
    typicalAgeRange?: string;
    /**
     * The schema.org [[usageInfo]] property indicates further information about a [[CreativeWork]]. This property is applicable both to works that are freely available and to those that require payment or other transactions. It can reference additional information, e.g. community expectations on preferred linking and citation conventions, as well as purchasing details. For something that can be commercially licensed, usageInfo can provide detailed, resource-specific information about licensing options.
     *
     * This property can be used alongside the license property which indicates license(s) applicable to some piece of content. The usageInfo property can provide information about other licensing options, e.g. acquiring commercial usage rights for an image that is also available under non-commercial creative commons licenses.
     */
    usageInfo?: schema.CreativeWorkOrSubClass | string;
    /**
     * The version of the CreativeWork embodied by a specified resource.
     */
    version?: number | string;
    /**
     * An embedded video object.
     */
    video?: schema.ClipOrSubClass | schema.VideoObjectOrSubClass | string;
    /**
     * The number of words in the text of the CreativeWork such as an Article, Book, etc.
     */
    wordCount?: number;
    /**
     * Example/instance/realization/derivation of the concept of this creative work. E.g. the paperback edition, first edition, or e-book.
     */
    workExample?: schema.CreativeWorkOrSubClass | string;
    /**
     * A work that is a translation of the content of this work. E.g. 西遊記 has an English workTranslation “Journey to the West”, a German workTranslation “Monkeys Pilgerfahrt” and a Vietnamese  translation Tây du ký bình khảo.
     */
    workTranslation?: schema.CreativeWorkOrSubClass | string;
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
     * A property-value pair representing an additional characteristic of the entity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.\n\nNote: Publishers should be aware that applications designed to use specific schema.org properties (e.g. https://schema.org/width, https://schema.org/color, https://schema.org/gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.
     *
     */
    additionalProperty?: schema.PropertyValueOrSubClass | string;
    /**
     * An Amazon Standard Identification Number (ASIN) is a 10-character alphanumeric unique identifier assigned by Amazon.com and its partners for product identification within the Amazon organization (summary from [Wikipedia](https://en.wikipedia.org/wiki/Amazon_Standard_Identification_Number)'s article).
     *
     * Note also that this is a definition for how to include ASINs in Schema.org data, and not a definition of ASINs in general - see documentation from Amazon for authoritative details.
     * ASINs are most commonly encoded as text strings, but the [asin] property supports URL/URI as potential values too.
     */
    asin?: string;
    /**
     * An organization or person officially appointed to act on behalf of the manufacturer in a specific region or context.
     */
    authorizedRepresentative?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
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
     * The depth of the item.
     */
    depth?: schema.DistanceOrSubClass | schema.QuantitativeValueOrSubClass | string;
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
     * An associated logo.
     */
    logo?: schema.ImageObjectOrSubClass | string;
    /**
     * The manufacturer of the product.
     */
    manufacturer?: schema.OrganizationOrSubClass | string;
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
};
/**
 * schema:ProductCollection
 *
 * This differs from ProductCollection because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type ProductCollectionOrSubClass = ProductCollection;
/**
 * schema:ProductCollection - Validation schema (w/ JOI)
 */
export declare const ProductCollectionJoiSchema: Joi.ObjectSchema;
/**
 * schema:ProductCollection - Validation schema (w/ JOI)
 *
 * This differs from ProductCollectionJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const ProductCollectionOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:ProductCollection.
 *
 * If some data has a structure which matches a schema:ProductCollection, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeProductCollection = validateProductCollection(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeProductCollection instanceof OaValidationError) {
 *   // From this point on, `maybeProductCollection` will have type `OaValidationError`
 *   const error = maybeProductCollection;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeProductCollection` will have type `ProductCollection`
 * const productCollection = maybeProductCollection;
 * ```
 */
export declare function validateProductCollection(maybeProductCollection: unknown): ProductCollection | OaValidationError;
