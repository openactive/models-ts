import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as schema from '../schema';
/**
 * schema:RadioEpisode
 */
export declare type RadioEpisode = {
    '@type': 'RadioEpisode';
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
     * The season to which this episode belongs.
     */
    partOfSeason?: schema.CreativeWorkSeasonOrSubClass | string;
    /**
     * A director of e.g. tv, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip.
     */
    directors?: schema.PersonOrSubClass | string;
    /**
     * An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip.
     */
    actor?: schema.PersonOrSubClass | string;
    /**
     * A director of e.g. tv, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip.
     */
    director?: schema.PersonOrSubClass | string;
    /**
     * The composer of the soundtrack.
     */
    musicBy?: schema.PersonOrSubClass | schema.MusicGroupOrSubClass | string;
    /**
     * Position of the episode within an ordered group of episodes.
     */
    episodeNumber?: string | number;
    /**
     * An actor, e.g. in tv, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip.
     */
    actors?: schema.PersonOrSubClass | string;
    /**
     * The production company or studio responsible for the item e.g. series, video game, episode etc.
     */
    productionCompany?: schema.OrganizationOrSubClass | string;
    /**
     * The trailer of a movie or tv/radio series, season, episode, etc.
     */
    trailer?: schema.VideoObjectOrSubClass | string;
    /**
     * The series to which this episode or season belongs.
     */
    partOfSeries?: schema.CreativeWorkSeriesOrSubClass | string;
    /**
     * The duration of the item (movie, audio recording, event, etc.) in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601).
     */
    duration?: string;
    /**
     * The textual content of this CreativeWork.
     */
    text?: string;
    /**
     * The overall rating, based on a collection of reviews or ratings, of the item.
     */
    aggregateRating?: schema.AggregateRatingOrSubClass | string;
    /**
     * A link to the page containing the comments of the CreativeWork.
     */
    discussionUrl?: string;
    /**
     * The "temporal" property can be used in cases where more specific properties
     * (e.g. [[temporalCoverage]], [[dateCreated]], [[dateModified]], [[datePublished]]) are not known to be appropriate.
     */
    temporal?: string;
    /**
     * Conditions that affect the availability of, or method(s) of access to, an item. Typically used for real world items such as an [[ArchiveComponent]] held by an [[ArchiveOrganization]]. This property is not suitable for use as a general Web access control mechanism. It is expressed only in natural language.\n\nFor example "Available by appointment from the Reading Room" or "Accessible only from logged-in accounts ".
     */
    conditionsOfAccess?: string;
    /**
     * Date the content expires and is no longer useful or available. For example a [[VideoObject]] or [[NewsArticle]] whose availability or relevance is time-limited, or a [[ClaimReview]] fact check whose publisher wants to indicate that it may no longer be relevant (or helpful to highlight) after some date.
     */
    expires?: string;
    /**
     * A standardized size of a product or creative work, specified either through a simple textual string (for example 'XL', '32Wx34L'), a  QuantitativeValue with a unitCode, or a comprehensive and structured [[SizeSpecification]]; in other cases, the [[width]], [[height]], [[depth]] and [[weight]] properties may be more applicable.
     */
    size?: schema.DefinedTermOrSubClass | schema.SizeSpecificationOrSubClass | schema.QuantitativeValueOrSubClass | string;
    /**
     * Approximate or typical time it takes to work with or through this learning resource for the typical intended target audience, e.g. 'PT30M', 'PT1H25M'.
     */
    timeRequired?: string;
    /**
     * The date on which the CreativeWork was most recently modified or when the item's entry was modified within a DataFeed.
     */
    dateModified?: string;
    /**
     * The spatialCoverage of a CreativeWork indicates the place(s) which are the focus of the content. It is a subproperty of
     *       contentLocation intended primarily for more technical and detailed materials. For example with a Dataset, it indicates
     *       areas that the dataset describes: a dataset of New York weather would have spatialCoverage which was the place: the state of New York.
     */
    spatialCoverage?: schema.PlaceOrSubClass | string;
    /**
     * The level in terms of progression through an educational or training context. Examples of educational levels include 'beginner', 'intermediate' or 'advanced', and formal sets of level indicators.
     */
    educationalLevel?: string | schema.DefinedTermOrSubClass;
    /**
     * A creative work that this work is an example/instance/realization/derivation of.
     */
    exampleOfWork?: schema.CreativeWorkOrSubClass | string;
    /**
     * The year during which the claimed copyright for the CreativeWork was first asserted.
     */
    copyrightYear?: number;
    /**
     * The Organization on whose behalf the creator was working.
     */
    sourceOrganization?: schema.OrganizationOrSubClass | string;
    /**
     * Indicates an item or CreativeWork that this item, or CreativeWork (in some sense), is part of.
     */
    isPartOf?: schema.CreativeWorkOrSubClass | string;
    /**
     * An embedded video object.
     */
    video?: schema.ClipOrSubClass | schema.VideoObjectOrSubClass | string;
    /**
     * A work that is a translation of the content of this work. e.g. 西遊記 has an English workTranslation “Journey to the West”,a German workTranslation “Monkeys Pilgerfahrt” and a Vietnamese  translation Tây du ký bình khảo.
     */
    workTranslation?: schema.CreativeWorkOrSubClass | string;
    /**
     * Indicates the party responsible for generating and publishing the current structured data markup, typically in cases where the structured data is derived automatically from existing published content but published on a different site. For example, student projects and open data initiatives often re-publish existing content with more explicitly structured metadata. The
     * [[sdPublisher]] property helps make such practices more explicit.
     */
    sdPublisher?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
    /**
     * The creator/author of this CreativeWork. This is the same as the Author property for CreativeWork.
     */
    creator?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
    /**
     * A thumbnail image relevant to the Thing.
     */
    thumbnailUrl?: string;
    /**
     * The work that this work has been translated from. e.g. 物种起源 is a translationOf “On the Origin of Species”
     */
    translationOfWork?: schema.CreativeWorkOrSubClass | string;
    /**
     * The specific time described by a creative work, for works (e.g. articles, video objects etc.) that emphasise a particular moment within an Event.
     */
    contentReferenceTime?: string;
    /**
     * Date of first broadcast/publication.
     */
    datePublished?: string;
    /**
     * The temporalCoverage of a CreativeWork indicates the period that the content applies to, i.e. that it describes, either as a DateTime or as a textual string indicating a time period in [ISO 8601 time interval format](https://en.wikipedia.org/wiki/ISO_8601#Time_intervals). In
     *       the case of a Dataset it will typically indicate the relevant time period in a precise notation (e.g. for a 2011 census dataset, the year 2011 would be written "2011/2012"). Other forms of content e.g. ScholarlyArticle, Book, TVSeries or TVEpisode may indicate their temporalCoverage in broader terms - textually or via well-known URL.
     *       Written works such as books may sometimes have precise temporal coverage too, e.g. a work set in 1939 - 1945 can be indicated in ISO 8601 interval format format via "1939/1945".
     *
     * Open-ended date ranges can be written with ".." in place of the end date. For example, "2015-11/.." indicates a range beginning in November 2015 and with no specified final date. This is tentative and might be updated in future when ISO 8601 is officially updated.
     */
    temporalCoverage?: string;
    /**
     * Media type, typically MIME format (see [IANA site](http://www.iana.org/assignments/media-types/media-types.xhtml)) of the content e.g. application/zip of a SoftwareApplication binary. In cases where a CreativeWork has several media type representations, 'encoding' can be used to indicate each MediaObject alongside particular fileFormat information. Unregistered or niche file formats can be indicated instead via the most appropriate URL, e.g. defining Web page or a Wikipedia entry.
     */
    fileFormat?: string;
    /**
     * The location depicted or described in the content. For example, the location in a photograph or painting.
     */
    contentLocation?: schema.PlaceOrSubClass | string;
    /**
     * A secondary title of the CreativeWork.
     */
    alternativeHeadline?: string;
    /**
     * A secondary contributor to the CreativeWork or Event.
     */
    contributor?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
    /**
     * The version of the CreativeWork embodied by a specified resource.
     */
    version?: number | string;
    /**
     * The human sensory perceptual system or cognitive faculty through which a person may process or perceive information. Expected values include: auditory, tactile, textual, visual, colorDependent, chartOnVisual, chemOnVisual, diagramOnVisual, mathOnVisual, musicOnVisual, textOnVisual.
     *
     */
    accessMode?: string;
    /**
     * The "spatial" property can be used in cases when more specific properties
     * (e.g. [[locationCreated]], [[spatialCoverage]], [[contentLocation]]) are not known to be appropriate.
     */
    spatial?: schema.PlaceOrSubClass | string;
    /**
     * A media object that encodes this CreativeWork. This property is a synonym for associatedMedia.
     */
    encoding?: schema.MediaObjectOrSubClass | string;
    /**
     * The person or organization who produced the work (e.g. music album, movie, tv/radio series etc.).
     */
    producer?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
    /**
     * An abstract is a short description that summarizes a [[CreativeWork]].
     */
    abstract?: string;
    /**
     * A publication event associated with the item.
     */
    publication?: schema.PublicationEventOrSubClass | string;
    /**
     * The location where the CreativeWork was created, which may not be the same as the location depicted in the CreativeWork.
     */
    locationCreated?: schema.PlaceOrSubClass | string;
    /**
     * A maintainer of a [[Dataset]], software package ([[SoftwareApplication]]), or other [[Project]]. A maintainer is a [[Person]] or [[Organization]] that manages contributions to, and/or publication of, some (typically complex) artifact. It is common for distributions of software and data to be based on "upstream" sources. When [[maintainer]] is applied to a specific version of something e.g. a particular version or packaging of a [[Dataset]], it is always  possible that the upstream source has a different maintainer. The [[isBasedOn]] property can be used to indicate such relationships between datasets to make the different maintenance roles clear. Similarly in the case of software, a package may have dedicated maintainers working on integration into software distributions such as Ubuntu, as well as upstream maintainers of the underlying work.
     *
     */
    maintainer?: schema.PersonOrSubClass | schema.OrganizationOrSubClass | string;
    /**
     * The party holding the legal copyright to the CreativeWork.
     */
    copyrightHolder?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
    /**
     * An offer to provide this item&#x2014;for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use [[businessFunction]] to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a [[Demand]]. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
     *
     */
    offers?: schema.OfferOrSubClass | schema.DemandOrSubClass | string;
    /**
     * Genre of the creative work, broadcast channel or group.
     */
    genre?: string;
    /**
     * The author of this content or rating. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangeably.
     */
    author?: schema.PersonOrSubClass | schema.OrganizationOrSubClass | string;
    /**
     * A human-readable summary of specific accessibility features or deficiencies, consistent with the other accessibility metadata but expressing subtleties such as "short descriptions are present but long descriptions will be needed for non-visual users" or "short descriptions are present and no long descriptions are needed."
     */
    accessibilitySummary?: string;
    /**
     * The date on which the CreativeWork was created or the item was added to a DataFeed.
     */
    dateCreated?: string;
    /**
     * Review of the item.
     */
    reviews?: schema.ReviewOrSubClass | string;
    /**
     * Official rating of a piece of content&#x2014;for example,'MPAA PG-13'.
     */
    contentRating?: string | schema.RatingOrSubClass;
    /**
     * Indicates that the resource is compatible with the referenced accessibility API ([WebSchemas wiki lists possible values](http://www.w3.org/wiki/WebSchemas/Accessibility)).
     */
    accessibilityAPI?: string;
    /**
     * The publisher of the creative work.
     */
    publisher?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
    /**
     * A license document that applies to this content, typically indicated by URL.
     */
    license?: schema.CreativeWorkOrSubClass | string;
    /**
     * Indicates whether this content is family friendly.
     */
    isFamilyFriendly?: boolean;
    /**
     * A characteristic of the described resource that is physiologically dangerous to some users. Related to WCAG 2.0 guideline 2.3 ([WebSchemas wiki lists possible values](http://www.w3.org/wiki/WebSchemas/Accessibility)).
     */
    accessibilityHazard?: string;
    /**
     * Indicates the primary entity described in some page or other CreativeWork.
     */
    mainEntity?: schema.ThingOrSubClass | string;
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
     * Specifies the Person that is legally accountable for the CreativeWork.
     */
    accountablePerson?: schema.PersonOrSubClass | string;
    /**
     * The predominant mode of learning supported by the learning resource. Acceptable values are 'active', 'expositive', or 'mixed'.
     */
    interactivityType?: string;
    /**
     * An [EIDR](https://eidr.org/) (Entertainment Identifier Registry) [[identifier]] representing a specific edit / edition for a work of film or television.
     *
     * For example, the motion picture known as "Ghostbusters" whose [[titleEIDR]] is "10.5240/7EC7-228A-510A-053E-CBB8-J", has several edits e.g. "10.5240/1F2A-E1C5-680A-14C6-E76B-I" and "10.5240/8A35-3BEE-6497-5D12-9E4F-3".
     *
     * Since schema.org types like [[Movie]] and [[TVEpisode]] can be used for both works and their multiple expressions, it is possible to use [[titleEIDR]] alone (for a general description), or alongside [[editEIDR]] for a more edit-specific description.
     *
     */
    editEIDR?: string;
    /**
     * Organization or person who adapts a creative work to different languages, regional differences and technical requirements of a target market, or that translates during some event.
     */
    translator?: schema.PersonOrSubClass | schema.OrganizationOrSubClass | string;
    /**
     * The number of comments this CreativeWork (e.g. Article, Question or Answer) has received. This is most applicable to works published in Web sites with commenting system; additional comments may exist elsewhere.
     */
    commentCount?: number;
    /**
     * Indicates (by URL or string) a particular version of a schema used in some CreativeWork. This property was created primarily to
     *     indicate the use of a specific schema.org release, e.g. ```10.0``` as a simple string, or more explicitly via URL, ```https://schema.org/docs/releases.html#v10.0```. There may be situations in which other schemas might usefully be referenced this way, e.g. ```http://dublincore.org/specifications/dublin-core/dces/1999-07-02/``` but this has not been carefully explored in the community.
     */
    schemaVersion?: string;
    /**
     * Indicates the date on which the current structured data was generated / published. Typically used alongside [[sdPublisher]]
     */
    sdDatePublished?: string;
    /**
     * The purpose of a work in the context of education; for example, 'assignment', 'group work'.
     */
    educationalUse?: string | schema.DefinedTermOrSubClass;
    /**
     * Identifies input methods that are sufficient to fully control the described resource ([WebSchemas wiki lists possible values](http://www.w3.org/wiki/WebSchemas/Accessibility)).
     */
    accessibilityControl?: string;
    /**
     * A person or organization that supports a thing through a pledge, promise, or financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor of an event.
     */
    sponsor?: schema.PersonOrSubClass | schema.OrganizationOrSubClass | string;
    /**
     * An alignment to an established educational framework.
     *
     * This property should not be used where the nature of the alignment can be described using a simple property, for example to express that a resource [[teaches]] or [[assesses]] a competency.
     */
    educationalAlignment?: schema.AlignmentObjectOrSubClass | string;
    /**
     * A flag to signal that the item, event, or place is accessible for free.
     */
    isAccessibleForFree?: boolean;
    /**
     * A media object that encodes this CreativeWork.
     */
    encodings?: schema.MediaObjectOrSubClass | string;
    /**
     * A list of single or combined accessModes that are sufficient to understand all the intellectual content of a resource. Expected values include:  auditory, tactile, textual, visual.
     *
     */
    accessModeSufficient?: schema.ItemListOrSubClass | string;
    /**
     * The schema.org [[usageInfo]] property indicates further information about a [[CreativeWork]]. This property is applicable both to works that are freely available and to those that require payment or other transactions. It can reference additional information e.g. community expectations on preferred linking and citation conventions, as well as purchasing details. For something that can be commercially licensed, usageInfo can provide detailed, resource-specific information about licensing options.
     *
     * This property can be used alongside the license property which indicates license(s) applicable to some piece of content. The usageInfo property can provide information about other licensing options, e.g. acquiring commercial usage rights for an image that is also available under non-commercial creative commons licenses.
     */
    usageInfo?: schema.CreativeWorkOrSubClass | string;
    /**
     * The Event where the CreativeWork was recorded. The CreativeWork may capture all or part of the event.
     */
    recordedAt?: schema.Event_OrSubClass | string;
    /**
     * Fictional person connected with a creative work.
     */
    character?: schema.PersonOrSubClass | string;
    /**
     * A citation or reference to another creative work, such as another publication, web page, scholarly article, etc.
     */
    citation?: string | schema.CreativeWorkOrSubClass;
    /**
     * A pattern that something has, for example 'polka dot', 'striped', 'Canadian flag'. Values are typically expressed as text, although links to controlled value schemes are also supported.
     */
    pattern?: string | schema.DefinedTermOrSubClass;
    /**
     * Text of a notice appropriate for describing the copyright aspects of this Creative Work, ideally indicating the owner of the copyright for the Work.
     */
    copyrightNotice?: string;
    /**
     * Headline of the article.
     */
    headline?: string;
    /**
     * The number of interactions for the CreativeWork using the WebSite or SoftwareApplication. The most specific child type of InteractionCounter should be used.
     */
    interactionStatistic?: schema.InteractionCounterOrSubClass | string;
    /**
     * Indicates that the CreativeWork contains a reference to, but is not necessarily about a concept.
     */
    mentions?: schema.ThingOrSubClass | string;
    /**
     * A license document that applies to this structured data, typically indicated by URL.
     */
    sdLicense?: string | schema.CreativeWorkOrSubClass;
    /**
     * Media type typically expressed using a MIME format (see [IANA site](http://www.iana.org/assignments/media-types/media-types.xhtml) and [MDN reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)) e.g. application/zip for a SoftwareApplication binary, audio/mpeg for .mp3 etc.).
     *
     * In cases where a [[CreativeWork]] has several media type representations, [[encoding]] can be used to indicate each [[MediaObject]] alongside particular [[encodingFormat]] information.
     *
     * Unregistered or niche encoding and file formats can be indicated instead via the most appropriate URL, e.g. defining Web page or a Wikipedia/Wikidata entry.
     */
    encodingFormat?: string;
    /**
     * [object Object]
     */
    materialExtent?: string | schema.QuantitativeValueOrSubClass;
    /**
     * Text that can be used to credit person(s) and/or organization(s) associated with a published Creative Work.
     */
    creditText?: string;
    /**
     * The predominant type or kind characterizing the learning resource. For example, 'presentation', 'handout'.
     */
    learningResourceType?: string | schema.DefinedTermOrSubClass;
    /**
     * The item being described is intended to help a person learn the competency or learning outcome defined by the referenced term.
     */
    teaches?: string | schema.DefinedTermOrSubClass;
    /**
     * The subject matter of the content.
     */
    about?: schema.ThingOrSubClass | string;
    /**
     * The language of the content or performance or used in an action. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[availableLanguage]].
     */
    inLanguage?: string | schema.LanguageOrSubClass;
    /**
     * The item being described is intended to assess the competency or learning outcome defined by the referenced term.
     */
    assesses?: schema.DefinedTermOrSubClass | string;
    /**
     * Indicates a page documenting how licenses can be purchased or otherwise acquired, for the current item.
     */
    acquireLicensePage?: string | schema.CreativeWorkOrSubClass;
    /**
     * The place and time the release was issued, expressed as a PublicationEvent.
     */
    releasedEvent?: schema.PublicationEventOrSubClass | string;
    /**
     * An embedded audio object.
     */
    audio?: schema.ClipOrSubClass | schema.AudioObjectOrSubClass | schema.MusicRecordingOrSubClass | string;
    /**
     * Content features of the resource, such as accessible media, alternatives and supported enhancements for accessibility ([WebSchemas wiki lists possible values](http://www.w3.org/wiki/WebSchemas/Accessibility)).
     */
    accessibilityFeature?: string;
    /**
     * Comments, typically from users.
     */
    comment?: schema.CommentOrSubClass | string;
    /**
     * Indicates an item or CreativeWork that is part of this item, or CreativeWork (in some sense).
     */
    hasPart?: schema.CreativeWorkOrSubClass | string;
    /**
     * A media object that encodes this CreativeWork. This property is a synonym for encoding.
     */
    associatedMedia?: schema.MediaObjectOrSubClass | string;
    /**
     * The position of an item in a series or sequence of items.
     */
    position?: string | number;
    /**
     * The status of a creative work in terms of its stage in a lifecycle. Example terms include Incomplete, Draft, Published, Obsolete. Some organizations define a set of terms for the stages of their publication lifecycle.
     */
    creativeWorkStatus?: string | schema.DefinedTermOrSubClass;
    /**
     * A resource that was used in the creation of this resource. This term can be repeated for multiple sources. For example, http://example.com/great-multiplication-intro.html.
     */
    isBasedOnUrl?: schema.ProductOrSubClass | string | schema.CreativeWorkOrSubClass;
    /**
     * A material that something is made from, e.g. leather, wool, cotton, paper.
     */
    material?: schema.ProductOrSubClass | string;
    /**
     * A person or organization that supports (sponsors) something through some kind of financial contribution.
     */
    funder?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
    /**
     * The publishingPrinciples property indicates (typically via [[URL]]) a document describing the editorial principles of an [[Organization]] (or individual e.g. a [[Person]] writing a blog) that relate to their activities as a publisher, e.g. ethics or diversity policies. When applied to a [[CreativeWork]] (e.g. [[NewsArticle]]) the principles are those of the party primarily responsible for the creation of the [[CreativeWork]].
     *
     * While such policies are most typically expressed in natural language, sometimes related information (e.g. indicating a [[funder]]) can be expressed using schema.org terminology.
     *
     */
    publishingPrinciples?: string | schema.CreativeWorkOrSubClass;
    /**
     * Awards won by or for this item.
     */
    awards?: string;
    /**
     * Specifies the Person who edited the CreativeWork.
     */
    editor?: schema.PersonOrSubClass | string;
    /**
     * Example/instance/realization/derivation of the concept of this creative work. eg. The paperback edition, first edition, or eBook.
     */
    workExample?: schema.CreativeWorkOrSubClass | string;
    /**
     * An intended audience, i.e. a group for whom something was created.
     */
    audience?: schema.AudienceOrSubClass | string;
    /**
     * Indicates a correction to a [[CreativeWork]], either via a [[CorrectionComment]], textually or in another document.
     */
    correction?: schema.CorrectionCommentOrSubClass | string;
    /**
     * Keywords or tags used to describe this content. Multiple entries in a keywords list are typically delimited by commas.
     */
    keywords?: string | schema.DefinedTermOrSubClass;
    /**
     * The publishing division which published the comic.
     */
    publisherImprint?: schema.OrganizationOrSubClass | string;
    /**
     * A resource from which this work is derived or from which it is a modification or adaption.
     */
    isBasedOn?: schema.CreativeWorkOrSubClass | string | schema.ProductOrSubClass;
    /**
     * The typical expected age range, e.g. '7-9', '11-'.
     */
    typicalAgeRange?: string;
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
 * schema:RadioEpisode
 *
 * This differs from RadioEpisode because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export declare type RadioEpisodeOrSubClass = RadioEpisode;
/**
 * schema:RadioEpisode - Validation schema (w/ JOI)
 */
export declare const RadioEpisodeJoiSchema: Joi.ObjectSchema;
/**
 * schema:RadioEpisode - Validation schema (w/ JOI)
 *
 * This differs from RadioEpisodeJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export declare const RadioEpisodeOrSubClassJoiSchema: Joi.AlternativesSchema;
/**
 * Runtime validator for schema:RadioEpisode.
 *
 * If some data has a structure which matches a schema:RadioEpisode, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeRadioEpisode = validateRadioEpisode(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeRadioEpisode instanceof OaValidationError) {
 *   // From this point on, `maybeRadioEpisode` will have type `OaValidationError`
 *   const error = maybeRadioEpisode;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeRadioEpisode` will have type `RadioEpisode`
 * const radioEpisode = maybeRadioEpisode;
 * ```
 */
export declare function validateRadioEpisode(maybeRadioEpisode: unknown): RadioEpisode | OaValidationError;
