// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as oa from '../oa';
import * as schema from '../schema';

/**
 * schema:CheckoutPage
 */
export type CheckoutPage = {
  '@type': 'CheckoutPage';
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
   * A unique URI-based identifier for the record.
   * `@id` properties are used as identifiers for compatibility with JSON-LD. The value of such a property must always be an absolute URI that provides a stable globally unique identifier for the resource, as described in [RFC3986](https://tools.ietf.org/html/rfc3986).
   * The primary purpose of the URI format in this context is to provide natural namespacing for the identifier. Hence, the URI itself may not resolve to a valid endpoint, but must use a domain name controlled by the resource owner (the organisation responsible for the OpenActive open data feed).
   */
  '@id'?: string;
  /**
   * One of the more significant URLs on the page. Typically, these are the non-navigation links that are clicked on the most.
   */
  significantLink?: string;
  /**
   * Indicates sections of a Web page that are particularly 'speakable' in the sense of being highlighted as being especially appropriate for text-to-speech conversion. Other sections of a page may also be usefully spoken in particular circumstances; the 'speakable' property serves to indicate the parts most likely to be generally useful for speech.
   * 
   * The *speakable* property can be repeated an arbitrary number of times, with three kinds of possible 'content-locator' values:
   * 
   * 1.) *id-value* URL references - uses *id-value* of an element in the page being annotated. The simplest use of *speakable* has (potentially relative) URL values, referencing identified sections of the document concerned.
   * 
   * 2.) CSS Selectors - addresses content in the annotated page, eg. via class attribute. Use the [[cssSelector]] property.
   * 
   * 3.)  XPaths - addresses content via XPaths (assuming an XML view of the content). Use the [[xpath]] property.
   * 
   * 
   * For more sophisticated markup of speakable sections beyond simple ID references, either CSS selectors or XPath expressions to pick out document section(s) as speakable. For this
   * we define a supporting type, [[SpeakableSpecification]]  which is defined to be a possible value of the *speakable* property.
   *          
   */
  speakable?: string | schema.SpeakableSpecificationOrSubClass;
  /**
   * The most significant URLs on the page. Typically, these are the non-navigation links that are clicked on the most.
   */
  significantLinks?: string;
  /**
   * A link related to this web page, for example to other related web pages.
   */
  relatedLink?: string;
  /**
   * People or organizations that have reviewed the content on this web page for accuracy and/or completeness.
   */
  reviewedBy?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
  /**
   * A set of links that can help a user understand and navigate a website hierarchy.
   */
  breadcrumb?: string | schema.BreadcrumbListOrSubClass;
  /**
   * Indicates the main image on the page.
   */
  primaryImageOfPage?: schema.ImageObjectOrSubClass | string;
  /**
   * Date on which the content on this web page was last reviewed for accuracy and/or completeness.
   */
  lastReviewed?: string;
  /**
   * Indicates if this web page element is the main subject of the page.
   */
  mainContentOfPage?: schema.WebPageElementOrSubClass | string;
  /**
   * One of the domain specialities to which this web page's content applies.
   */
  specialty?: schema.Specialty;
  /**
   * A pattern that something has, for example 'polka dot', 'striped', 'Canadian flag'. Values are typically expressed as text, although links to controlled value schemes are also supported.
   */
  pattern?: string | schema.DefinedTermOrSubClass;
  /**
   * Text that can be used to credit person(s) and/or organization(s) associated with a published Creative Work.
   */
  creditText?: string;
  /**
   * The subject matter of the content.
   */
  about?: schema.ThingOrSubClass | string;
  /**
   * The textual content of this CreativeWork.
   */
  text?: string;
  /**
   * Fictional person connected with a creative work.
   */
  character?: schema.PersonOrSubClass | string;
  /**
   * An offer to provide this item&#x2014;for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use [[businessFunction]] to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a [[Demand]]. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
   *       
   */
  offers?: schema.DemandOrSubClass | schema.OfferOrSubClass | string;
  /**
   * The location where the CreativeWork was created, which may not be the same as the location depicted in the CreativeWork.
   */
  locationCreated?: schema.PlaceOrSubClass | string;
  /**
   * A resource that was used in the creation of this resource. This term can be repeated for multiple sources. For example, http://example.com/great-multiplication-intro.html.
   */
  isBasedOnUrl?: schema.CreativeWorkOrSubClass | string | schema.ProductOrSubClass;
  /**
   * Indicates an item or CreativeWork that this item, or CreativeWork (in some sense), is part of.
   */
  isPartOf?: string | schema.CreativeWorkOrSubClass;
  /**
   * [object Object]
   */
  materialExtent?: string | schema.QuantitativeValueOrSubClass;
  /**
   * The specific time described by a creative work, for works (e.g. articles, video objects etc.) that emphasise a particular moment within an Event.
   */
  contentReferenceTime?: string;
  /**
   * A maintainer of a [[Dataset]], software package ([[SoftwareApplication]]), or other [[Project]]. A maintainer is a [[Person]] or [[Organization]] that manages contributions to, and/or publication of, some (typically complex) artifact. It is common for distributions of software and data to be based on "upstream" sources. When [[maintainer]] is applied to a specific version of something e.g. a particular version or packaging of a [[Dataset]], it is always  possible that the upstream source has a different maintainer. The [[isBasedOn]] property can be used to indicate such relationships between datasets to make the different maintenance roles clear. Similarly in the case of software, a package may have dedicated maintainers working on integration into software distributions such as Ubuntu, as well as upstream maintainers of the underlying work.
   *       
   */
  maintainer?: schema.PersonOrSubClass | schema.OrganizationOrSubClass | string;
  /**
   * The typical expected age range, e.g. '7-9', '11-'.
   */
  typicalAgeRange?: string;
  /**
   * The author of this content or rating. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangeably.
   */
  author?: schema.PersonOrSubClass | schema.OrganizationOrSubClass | string;
  /**
   * A person or organization that supports (sponsors) something through some kind of financial contribution.
   */
  funder?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
  /**
   * Date the content expires and is no longer useful or available. For example a [[VideoObject]] or [[NewsArticle]] whose availability or relevance is time-limited, or a [[ClaimReview]] fact check whose publisher wants to indicate that it may no longer be relevant (or helpful to highlight) after some date.
   */
  expires?: string;
  /**
   * Genre of the creative work, broadcast channel or group.
   */
  genre?: string;
  /**
   * A work that is a translation of the content of this work. e.g. 西遊記 has an English workTranslation “Journey to the West”,a German workTranslation “Monkeys Pilgerfahrt” and a Vietnamese  translation Tây du ký bình khảo.
   */
  workTranslation?: schema.CreativeWorkOrSubClass | string;
  /**
   * The overall rating, based on a collection of reviews or ratings, of the item.
   */
  aggregateRating?: schema.AggregateRatingOrSubClass | string;
  /**
   * An award won by or for this item.
   */
  award?: string;
  /**
   * The temporalCoverage of a CreativeWork indicates the period that the content applies to, i.e. that it describes, either as a DateTime or as a textual string indicating a time period in [ISO 8601 time interval format](https://en.wikipedia.org/wiki/ISO_8601#Time_intervals). In
   *       the case of a Dataset it will typically indicate the relevant time period in a precise notation (e.g. for a 2011 census dataset, the year 2011 would be written "2011/2012"). Other forms of content e.g. ScholarlyArticle, Book, TVSeries or TVEpisode may indicate their temporalCoverage in broader terms - textually or via well-known URL.
   *       Written works such as books may sometimes have precise temporal coverage too, e.g. a work set in 1939 - 1945 can be indicated in ISO 8601 interval format format via "1939/1945".
   * 
   * Open-ended date ranges can be written with ".." in place of the end date. For example, "2015-11/.." indicates a range beginning in November 2015 and with no specified final date. This is tentative and might be updated in future when ISO 8601 is officially updated.
   */
  temporalCoverage?: string;
  /**
   * Indicates an item or CreativeWork that is part of this item, or CreativeWork (in some sense).
   */
  hasPart?: schema.CreativeWorkOrSubClass | string;
  /**
   * A human-readable summary of specific accessibility features or deficiencies, consistent with the other accessibility metadata but expressing subtleties such as "short descriptions are present but long descriptions will be needed for non-visual users" or "short descriptions are present and no long descriptions are needed."
   */
  accessibilitySummary?: string;
  /**
   * A list of single or combined accessModes that are sufficient to understand all the intellectual content of a resource. Expected values include:  auditory, tactile, textual, visual.
   *       
   */
  accessModeSufficient?: schema.ItemListOrSubClass | string;
  /**
   * Headline of the article.
   */
  headline?: string;
  /**
   * An alignment to an established educational framework.
   * 
   * This property should not be used where the nature of the alignment can be described using a simple property, for example to express that a resource [[teaches]] or [[assesses]] a competency.
   */
  educationalAlignment?: schema.AlignmentObjectOrSubClass | string;
  /**
   * The publishingPrinciples property indicates (typically via [[URL]]) a document describing the editorial principles of an [[Organization]] (or individual e.g. a [[Person]] writing a blog) that relate to their activities as a publisher, e.g. ethics or diversity policies. When applied to a [[CreativeWork]] (e.g. [[NewsArticle]]) the principles are those of the party primarily responsible for the creation of the [[CreativeWork]].
   * 
   * While such policies are most typically expressed in natural language, sometimes related information (e.g. indicating a [[funder]]) can be expressed using schema.org terminology.
   * 
   */
  publishingPrinciples?: string | schema.CreativeWorkOrSubClass;
  /**
   * Comments, typically from users.
   */
  comment?: schema.CommentOrSubClass | string;
  /**
   * An embedded audio object.
   */
  audio?: schema.ClipOrSubClass | schema.AudioObjectOrSubClass | schema.MusicRecordingOrSubClass | string;
  /**
   * An embedded video object.
   */
  video?: schema.VideoObjectOrSubClass | schema.ClipOrSubClass | string;
  /**
   * The Organization on whose behalf the creator was working.
   */
  sourceOrganization?: schema.OrganizationOrSubClass | string;
  /**
   * Organization or person who adapts a creative work to different languages, regional differences and technical requirements of a target market, or that translates during some event.
   */
  translator?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
  /**
   * The position of an item in a series or sequence of items.
   */
  position?: string | number;
  /**
   * The work that this work has been translated from. e.g. 物种起源 is a translationOf “On the Origin of Species”
   */
  translationOfWork?: schema.CreativeWorkOrSubClass | string;
  /**
   * A resource from which this work is derived or from which it is a modification or adaption.
   */
  isBasedOn?: string | schema.ProductOrSubClass | schema.CreativeWorkOrSubClass;
  /**
   * Indicates (by URL or string) a particular version of a schema used in some CreativeWork. This property was created primarily to
   *     indicate the use of a specific schema.org release, e.g. ```10.0``` as a simple string, or more explicitly via URL, ```https://schema.org/docs/releases.html#v10.0```. There may be situations in which other schemas might usefully be referenced this way, e.g. ```http://dublincore.org/specifications/dublin-core/dces/1999-07-02/``` but this has not been carefully explored in the community.
   */
  schemaVersion?: string;
  /**
   * The country of origin of something, including products as well as creative  works such as movie and TV content.
   * 
   * In the case of TV and movie, this would be the country of the principle offices of the production company or individual responsible for the movie. For other kinds of [[CreativeWork]] it is difficult to provide fully general guidance, and properties such as [[contentLocation]] and [[locationCreated]] may be more applicable.
   * 
   * In the case of products, the country of origin of the product. The exact interpretation of this may vary by context and product type, and cannot be fully enumerated here.
   */
  countryOfOrigin?: schema.CountryOrSubClass | string;
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
   * Indicates the party responsible for generating and publishing the current structured data markup, typically in cases where the structured data is derived automatically from existing published content but published on a different site. For example, student projects and open data initiatives often re-publish existing content with more explicitly structured metadata. The
   * [[sdPublisher]] property helps make such practices more explicit.
   */
  sdPublisher?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
  /**
   * A license document that applies to this content, typically indicated by URL.
   */
  license?: string | schema.CreativeWorkOrSubClass;
  /**
   * The number of interactions for the CreativeWork using the WebSite or SoftwareApplication. The most specific child type of InteractionCounter should be used.
   */
  interactionStatistic?: schema.InteractionCounterOrSubClass | string;
  /**
   * Content features of the resource, such as accessible media, alternatives and supported enhancements for accessibility ([WebSchemas wiki lists possible values](http://www.w3.org/wiki/WebSchemas/Accessibility)).
   */
  accessibilityFeature?: string;
  /**
   * Indicates that the CreativeWork contains a reference to, but is not necessarily about a concept.
   */
  mentions?: schema.ThingOrSubClass | string;
  /**
   * The "temporal" property can be used in cases where more specific properties
   * (e.g. [[temporalCoverage]], [[dateCreated]], [[dateModified]], [[datePublished]]) are not known to be appropriate.
   */
  temporal?: string;
  /**
   * The schema.org [[usageInfo]] property indicates further information about a [[CreativeWork]]. This property is applicable both to works that are freely available and to those that require payment or other transactions. It can reference additional information e.g. community expectations on preferred linking and citation conventions, as well as purchasing details. For something that can be commercially licensed, usageInfo can provide detailed, resource-specific information about licensing options.
   * 
   * This property can be used alongside the license property which indicates license(s) applicable to some piece of content. The usageInfo property can provide information about other licensing options, e.g. acquiring commercial usage rights for an image that is also available under non-commercial creative commons licenses.
   */
  usageInfo?: schema.CreativeWorkOrSubClass | string;
  /**
   * The status of a creative work in terms of its stage in a lifecycle. Example terms include Incomplete, Draft, Published, Obsolete. Some organizations define a set of terms for the stages of their publication lifecycle.
   */
  creativeWorkStatus?: string | schema.DefinedTermOrSubClass;
  /**
   * The publisher of the creative work.
   */
  publisher?: schema.PersonOrSubClass | schema.OrganizationOrSubClass | string;
  /**
   * The place and time the release was issued, expressed as a PublicationEvent.
   */
  releasedEvent?: schema.PublicationEventOrSubClass | string;
  /**
   * A secondary title of the CreativeWork.
   */
  alternativeHeadline?: string;
  /**
   * A license document that applies to this structured data, typically indicated by URL.
   */
  sdLicense?: string | schema.CreativeWorkOrSubClass;
  /**
   * Specifies the Person that is legally accountable for the CreativeWork.
   */
  accountablePerson?: schema.PersonOrSubClass | string;
  /**
   * Text of a notice appropriate for describing the copyright aspects of this Creative Work, ideally indicating the owner of the copyright for the Work.
   */
  copyrightNotice?: string;
  /**
   * The item being described is intended to help a person learn the competency or learning outcome defined by the referenced term.
   */
  teaches?: string | schema.DefinedTermOrSubClass;
  /**
   * A creative work that this work is an example/instance/realization/derivation of.
   */
  exampleOfWork?: schema.CreativeWorkOrSubClass | string;
  /**
   * The Event where the CreativeWork was recorded. The CreativeWork may capture all or part of the event.
   */
  recordedAt?: schema.Event_OrSubClass | string;
  /**
   * Conditions that affect the availability of, or method(s) of access to, an item. Typically used for real world items such as an [[ArchiveComponent]] held by an [[ArchiveOrganization]]. This property is not suitable for use as a general Web access control mechanism. It is expressed only in natural language.\n\nFor example "Available by appointment from the Reading Room" or "Accessible only from logged-in accounts ". 
   */
  conditionsOfAccess?: string;
  /**
   * Example/instance/realization/derivation of the concept of this creative work. eg. The paperback edition, first edition, or eBook.
   */
  workExample?: schema.CreativeWorkOrSubClass | string;
  /**
   * A standardized size of a product or creative work, specified either through a simple textual string (for example 'XL', '32Wx34L'), a  QuantitativeValue with a unitCode, or a comprehensive and structured [[SizeSpecification]]; in other cases, the [[width]], [[height]], [[depth]] and [[weight]] properties may be more applicable. 
   */
  size?: schema.SizeSpecificationOrSubClass | schema.DefinedTermOrSubClass | string | schema.QuantitativeValueOrSubClass;
  /**
   * A characteristic of the described resource that is physiologically dangerous to some users. Related to WCAG 2.0 guideline 2.3 ([WebSchemas wiki lists possible values](http://www.w3.org/wiki/WebSchemas/Accessibility)).
   */
  accessibilityHazard?: string;
  /**
   * The year during which the claimed copyright for the CreativeWork was first asserted.
   */
  copyrightYear?: number;
  /**
   * A media object that encodes this CreativeWork.
   */
  encodings?: schema.MediaObjectOrSubClass | string;
  /**
   * The creator/author of this CreativeWork. This is the same as the Author property for CreativeWork.
   */
  creator?: schema.PersonOrSubClass | schema.OrganizationOrSubClass | string;
  /**
   * The human sensory perceptual system or cognitive faculty through which a person may process or perceive information. Expected values include: auditory, tactile, textual, visual, colorDependent, chartOnVisual, chemOnVisual, diagramOnVisual, mathOnVisual, musicOnVisual, textOnVisual.
   *       
   */
  accessMode?: string;
  /**
   * An abstract is a short description that summarizes a [[CreativeWork]].
   */
  abstract?: string;
  /**
   * A thumbnail image relevant to the Thing.
   */
  thumbnailUrl?: string;
  /**
   * Indicates a page documenting how licenses can be purchased or otherwise acquired, for the current item.
   */
  acquireLicensePage?: schema.CreativeWorkOrSubClass | string;
  /**
   * Official rating of a piece of content&#x2014;for example,'MPAA PG-13'.
   */
  contentRating?: schema.RatingOrSubClass | string;
  /**
   * Awards won by or for this item.
   */
  awards?: string;
  /**
   * Indicates whether this content is family friendly.
   */
  isFamilyFriendly?: boolean;
  /**
   * Specifies the Person who edited the CreativeWork.
   */
  editor?: schema.PersonOrSubClass | string;
  /**
   * Date of first broadcast/publication.
   */
  datePublished?: string;
  /**
   * The level in terms of progression through an educational or training context. Examples of educational levels include 'beginner', 'intermediate' or 'advanced', and formal sets of level indicators.
   */
  educationalLevel?: string | schema.DefinedTermOrSubClass;
  /**
   * The item being described is intended to assess the competency or learning outcome defined by the referenced term.
   */
  assesses?: schema.DefinedTermOrSubClass | string;
  /**
   * Indicates the primary entity described in some page or other CreativeWork.
   */
  mainEntity?: schema.ThingOrSubClass | string;
  /**
   * Indicates a correction to a [[CreativeWork]], either via a [[CorrectionComment]], textually or in another document.
   */
  correction?: schema.CorrectionCommentOrSubClass | string;
  /**
   * Approximate or typical time it takes to work with or through this learning resource for the typical intended target audience, e.g. 'PT30M', 'PT1H25M'.
   */
  timeRequired?: string;
  /**
   * Keywords or tags used to describe this content. Multiple entries in a keywords list are typically delimited by commas.
   */
  keywords?: schema.DefinedTermOrSubClass | string;
  /**
   * An intended audience, i.e. a group for whom something was created.
   */
  audience?: schema.AudienceOrSubClass | string;
  /**
   * A person or organization that supports a thing through a pledge, promise, or financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor of an event.
   */
  sponsor?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
  /**
   * The purpose of a work in the context of education; for example, 'assignment', 'group work'.
   */
  educationalUse?: schema.DefinedTermOrSubClass | string;
  /**
   * Indicates the date on which the current structured data was generated / published. Typically used alongside [[sdPublisher]]
   */
  sdDatePublished?: string;
  /**
   * The spatialCoverage of a CreativeWork indicates the place(s) which are the focus of the content. It is a subproperty of
   *       contentLocation intended primarily for more technical and detailed materials. For example with a Dataset, it indicates
   *       areas that the dataset describes: a dataset of New York weather would have spatialCoverage which was the place: the state of New York.
   */
  spatialCoverage?: schema.PlaceOrSubClass | string;
  /**
   * A material that something is made from, e.g. leather, wool, cotton, paper.
   */
  material?: schema.ProductOrSubClass | string;
  /**
   * A publication event associated with the item.
   */
  publication?: schema.PublicationEventOrSubClass | string;
  /**
   * Media type typically expressed using a MIME format (see [IANA site](http://www.iana.org/assignments/media-types/media-types.xhtml) and [MDN reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)) e.g. application/zip for a SoftwareApplication binary, audio/mpeg for .mp3 etc.).
   * 
   * In cases where a [[CreativeWork]] has several media type representations, [[encoding]] can be used to indicate each [[MediaObject]] alongside particular [[encodingFormat]] information.
   * 
   * Unregistered or niche encoding and file formats can be indicated instead via the most appropriate URL, e.g. defining Web page or a Wikipedia/Wikidata entry.
   */
  encodingFormat?: string;
  /**
   * The language of the content or performance or used in an action. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[availableLanguage]].
   */
  inLanguage?: string | schema.LanguageOrSubClass;
  /**
   * The date on which the CreativeWork was most recently modified or when the item's entry was modified within a DataFeed.
   */
  dateModified?: string;
  /**
   * Review of the item.
   */
  reviews?: schema.ReviewOrSubClass | string;
  /**
   * The date on which the CreativeWork was created or the item was added to a DataFeed.
   */
  dateCreated?: string;
  /**
   * A media object that encodes this CreativeWork. This property is a synonym for encoding.
   */
  associatedMedia?: schema.MediaObjectOrSubClass | string;
  /**
   * Used to indicate a specific claim contained, implied, translated or refined from the content of a [[MediaObject]] or other [[CreativeWork]]. The interpreting party can be indicated using [[claimInterpreter]].
   */
  interpretedAsClaim?: schema.ClaimOrSubClass | string;
  /**
   * A review of the item.
   */
  review?: schema.ReviewOrSubClass | string;
  /**
   * The publishing division which published the comic.
   */
  publisherImprint?: schema.OrganizationOrSubClass | string;
  /**
   * Indicates that the resource is compatible with the referenced accessibility API ([WebSchemas wiki lists possible values](http://www.w3.org/wiki/WebSchemas/Accessibility)).
   */
  accessibilityAPI?: string;
  /**
   * The version of the CreativeWork embodied by a specified resource.
   */
  version?: string | number;
  /**
   * The predominant type or kind characterizing the learning resource. For example, 'presentation', 'handout'.
   */
  learningResourceType?: string | schema.DefinedTermOrSubClass;
  /**
   * A link to the page containing the comments of the CreativeWork.
   */
  discussionUrl?: string;
  /**
   * The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
   */
  provider?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
  /**
   * Media type, typically MIME format (see [IANA site](http://www.iana.org/assignments/media-types/media-types.xhtml)) of the content e.g. application/zip of a SoftwareApplication binary. In cases where a CreativeWork has several media type representations, 'encoding' can be used to indicate each MediaObject alongside particular fileFormat information. Unregistered or niche file formats can be indicated instead via the most appropriate URL, e.g. defining Web page or a Wikipedia entry.
   */
  fileFormat?: string;
  /**
   * The person or organization who produced the work (e.g. music album, movie, tv/radio series etc.).
   */
  producer?: schema.PersonOrSubClass | schema.OrganizationOrSubClass | string;
  /**
   * A citation or reference to another creative work, such as another publication, web page, scholarly article, etc.
   */
  citation?: string | schema.CreativeWorkOrSubClass;
  /**
   * Indicates a page or other link involved in archival of a [[CreativeWork]]. In the case of [[MediaReview]], the items in a [[MediaReviewItem]] may often become inaccessible, but be archived by archival, journalistic, activist, or law enforcement organizations. In such cases, the referenced page may not directly publish the content.
   */
  archivedAt?: schema.WebPageOrSubClass | string;
  /**
   * A media object that encodes this CreativeWork. This property is a synonym for associatedMedia.
   */
  encoding?: schema.MediaObjectOrSubClass | string;
  /**
   * The predominant mode of learning supported by the learning resource. Acceptable values are 'active', 'expositive', or 'mixed'.
   */
  interactivityType?: string;
  /**
   * The "spatial" property can be used in cases when more specific properties
   * (e.g. [[locationCreated]], [[spatialCoverage]], [[contentLocation]]) are not known to be appropriate.
   */
  spatial?: schema.PlaceOrSubClass | string;
  /**
   * The location depicted or described in the content. For example, the location in a photograph or painting.
   */
  contentLocation?: schema.PlaceOrSubClass | string;
  /**
   * The party holding the legal copyright to the CreativeWork.
   */
  copyrightHolder?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
  /**
   * A secondary contributor to the CreativeWork or Event.
   */
  contributor?: schema.OrganizationOrSubClass | schema.PersonOrSubClass | string;
  /**
   * A flag to signal that the item, event, or place is accessible for free.
   */
  isAccessibleForFree?: boolean;
  /**
   * Identifies input methods that are sufficient to fully control the described resource ([WebSchemas wiki lists possible values](http://www.w3.org/wiki/WebSchemas/Accessibility)).
   */
  accessibilityControl?: string;
  /**
   * The number of comments this CreativeWork (e.g. Article, Question or Answer) has received. This is most applicable to works published in Web sites with commenting system; additional comments may exist elsewhere.
   */
  commentCount?: number;
  /**
   * Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See [background notes](/docs/datamodel.html#mainEntityBackground) for details.
   */
  mainEntityOfPage?: string | schema.CreativeWorkOrSubClass;
  /**
   * An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the 'typeof' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.
   */
  additionalType?: string;
  /**
   * URL of the item.
   */
  url?: string;
  /**
   * An alias for the item.
   */
  alternateName?: string;
  /**
   * URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website.
   */
  sameAs?: string;
  /**
   * Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role.
   */
  potentialAction?: schema.ActionOrSubClass | string;
  /**
   * A CreativeWork or Event about this Thing.
   */
  subjectOf?: schema.Event_OrSubClass | schema.CreativeWorkOrSubClass | string;
  /**
   * A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.
   */
  disambiguatingDescription?: string;
  /**
   * An image of the item. This can be a [[URL]] or a fully described [[ImageObject]].
   */
  image?: schema.ImageObjectOrSubClass | string;
};

/**
 * schema:CheckoutPage
 *
 * This differs from CheckoutPage because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event_OrSubClass` allows `Event`s as well as `ScheduledSession`s, `SessionSeries`,
 * etc.
 */
export type CheckoutPageOrSubClass =
  | CheckoutPage
  ;

/**
 * schema:CheckoutPage - Validation schema (w/ JOI)
 */
export const CheckoutPageJoiSchema = Joi.object({
  '@type': Joi.string().valid('CheckoutPage').required(),
  '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
  identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  name: Joi.string(),
  description: Joi.string(),
  '@id': Joi.string().uri(),
  significantLink: Joi.string().uri(),
  speakable: Joi.alternatives().try(Joi.string().uri(), Joi.lazy(() => schema.SpeakableSpecificationOrSubClassJoiSchema)),
  significantLinks: Joi.string().uri(),
  relatedLink: Joi.string().uri(),
  reviewedBy: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  breadcrumb: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.BreadcrumbListOrSubClassJoiSchema), Joi.string().uri()),
  primaryImageOfPage: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
  lastReviewed: Joi.string().isoDate(),
  mainContentOfPage: Joi.alternatives().try(Joi.lazy(() => schema.WebPageElementOrSubClassJoiSchema), Joi.string().uri()),
  specialty: Joi.lazy(() => schema.SpecialtyJoiSchema),
  pattern: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string().uri()),
  creditText: Joi.string(),
  about: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
  text: Joi.string(),
  character: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  offers: Joi.alternatives().try(Joi.lazy(() => schema.DemandOrSubClassJoiSchema), Joi.lazy(() => schema.OfferOrSubClassJoiSchema), Joi.string().uri()),
  locationCreated: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
  isBasedOnUrl: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri(), Joi.lazy(() => schema.ProductOrSubClassJoiSchema)),
  isPartOf: Joi.alternatives().try(Joi.string().uri(), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema)),
  materialExtent: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  contentReferenceTime: Joi.string().isoDate(),
  maintainer: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  typicalAgeRange: Joi.string(),
  author: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  funder: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  expires: Joi.string().isoDate(),
  genre: Joi.alternatives().try(Joi.string().uri(), Joi.string()),
  workTranslation: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
  aggregateRating: Joi.alternatives().try(Joi.lazy(() => schema.AggregateRatingOrSubClassJoiSchema), Joi.string().uri()),
  award: Joi.string(),
  temporalCoverage: Joi.alternatives().try(Joi.string(), Joi.string().uri(), Joi.string().isoDate()),
  hasPart: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
  accessibilitySummary: Joi.string(),
  accessModeSufficient: Joi.alternatives().try(Joi.lazy(() => schema.ItemListOrSubClassJoiSchema), Joi.string().uri()),
  headline: Joi.string(),
  educationalAlignment: Joi.alternatives().try(Joi.lazy(() => schema.AlignmentObjectOrSubClassJoiSchema), Joi.string().uri()),
  publishingPrinciples: Joi.alternatives().try(Joi.string().uri(), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema)),
  comment: Joi.alternatives().try(Joi.lazy(() => schema.CommentOrSubClassJoiSchema), Joi.string().uri()),
  audio: Joi.alternatives().try(Joi.lazy(() => schema.ClipOrSubClassJoiSchema), Joi.lazy(() => schema.AudioObjectOrSubClassJoiSchema), Joi.lazy(() => schema.MusicRecordingOrSubClassJoiSchema), Joi.string().uri()),
  video: Joi.alternatives().try(Joi.lazy(() => schema.VideoObjectOrSubClassJoiSchema), Joi.lazy(() => schema.ClipOrSubClassJoiSchema), Joi.string().uri()),
  sourceOrganization: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  translator: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  position: Joi.alternatives().try(Joi.string(), Joi.number().integer()),
  translationOfWork: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
  isBasedOn: Joi.alternatives().try(Joi.string().uri(), Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema)),
  schemaVersion: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
  countryOfOrigin: Joi.alternatives().try(Joi.lazy(() => schema.CountryOrSubClassJoiSchema), Joi.string().uri()),
  editEIDR: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
  sdPublisher: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  license: Joi.alternatives().try(Joi.string().uri(), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema)),
  interactionStatistic: Joi.alternatives().try(Joi.lazy(() => schema.InteractionCounterOrSubClassJoiSchema), Joi.string().uri()),
  accessibilityFeature: Joi.string(),
  mentions: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
  temporal: Joi.alternatives().try(Joi.string().isoDate(), Joi.string()),
  usageInfo: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
  creativeWorkStatus: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string().uri()),
  publisher: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  releasedEvent: Joi.alternatives().try(Joi.lazy(() => schema.PublicationEventOrSubClassJoiSchema), Joi.string().uri()),
  alternativeHeadline: Joi.string(),
  sdLicense: Joi.alternatives().try(Joi.string().uri(), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema)),
  accountablePerson: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  copyrightNotice: Joi.string(),
  teaches: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string().uri()),
  exampleOfWork: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
  recordedAt: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.string().uri()),
  conditionsOfAccess: Joi.string(),
  workExample: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
  size: Joi.alternatives().try(Joi.lazy(() => schema.SizeSpecificationOrSubClassJoiSchema), Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string(), Joi.lazy(() => schema.QuantitativeValueOrSubClassJoiSchema), Joi.string().uri()),
  accessibilityHazard: Joi.string(),
  copyrightYear: Joi.number(),
  encodings: Joi.alternatives().try(Joi.lazy(() => schema.MediaObjectOrSubClassJoiSchema), Joi.string().uri()),
  creator: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  accessMode: Joi.string(),
  abstract: Joi.string(),
  thumbnailUrl: Joi.string().uri(),
  acquireLicensePage: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
  contentRating: Joi.alternatives().try(Joi.lazy(() => schema.RatingOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  awards: Joi.string(),
  isFamilyFriendly: Joi.boolean(),
  editor: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  datePublished: Joi.string().isoDate(),
  educationalLevel: Joi.alternatives().try(Joi.string().uri(), Joi.string(), Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema)),
  assesses: Joi.alternatives().try(Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  mainEntity: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
  correction: Joi.alternatives().try(Joi.lazy(() => schema.CorrectionCommentOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  timeRequired: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
  keywords: Joi.alternatives().try(Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
  audience: Joi.alternatives().try(Joi.lazy(() => schema.AudienceOrSubClassJoiSchema), Joi.string().uri()),
  sponsor: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  educationalUse: Joi.alternatives().try(Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
  sdDatePublished: Joi.string().isoDate(),
  spatialCoverage: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
  material: Joi.alternatives().try(Joi.lazy(() => schema.ProductOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
  publication: Joi.alternatives().try(Joi.lazy(() => schema.PublicationEventOrSubClassJoiSchema), Joi.string().uri()),
  encodingFormat: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
  inLanguage: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.LanguageOrSubClassJoiSchema), Joi.string().uri()),
  dateModified: Joi.string().isoDate(),
  reviews: Joi.alternatives().try(Joi.lazy(() => schema.ReviewOrSubClassJoiSchema), Joi.string().uri()),
  dateCreated: Joi.string().isoDate(),
  associatedMedia: Joi.alternatives().try(Joi.lazy(() => schema.MediaObjectOrSubClassJoiSchema), Joi.string().uri()),
  interpretedAsClaim: Joi.alternatives().try(Joi.lazy(() => schema.ClaimOrSubClassJoiSchema), Joi.string().uri()),
  review: Joi.alternatives().try(Joi.lazy(() => schema.ReviewOrSubClassJoiSchema), Joi.string().uri()),
  publisherImprint: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  accessibilityAPI: Joi.string(),
  version: Joi.alternatives().try(Joi.string(), Joi.number()),
  learningResourceType: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.DefinedTermOrSubClassJoiSchema), Joi.string().uri()),
  discussionUrl: Joi.string().uri(),
  provider: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  fileFormat: Joi.alternatives().try(Joi.string().uri(), Joi.string()),
  producer: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
  citation: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
  archivedAt: Joi.alternatives().try(Joi.lazy(() => schema.WebPageOrSubClassJoiSchema), Joi.string().uri()),
  encoding: Joi.alternatives().try(Joi.lazy(() => schema.MediaObjectOrSubClassJoiSchema), Joi.string().uri()),
  interactivityType: Joi.string(),
  spatial: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
  contentLocation: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
  copyrightHolder: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  contributor: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
  isAccessibleForFree: Joi.boolean(),
  accessibilityControl: Joi.string(),
  commentCount: Joi.number().integer(),
  mainEntityOfPage: Joi.alternatives().try(Joi.string().uri(), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema)),
  additionalType: Joi.string().uri(),
  url: Joi.string().uri(),
  alternateName: Joi.string(),
  sameAs: Joi.string().uri(),
  potentialAction: Joi.alternatives().try(Joi.lazy(() => schema.ActionOrSubClassJoiSchema), Joi.string().uri()),
  subjectOf: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
  disambiguatingDescription: Joi.string(),
  image: Joi.alternatives().try(Joi.lazy(() => schema.ImageObjectOrSubClassJoiSchema), Joi.string().uri()),
});

/**
 * schema:CheckoutPage - Validation schema (w/ JOI)
 *
 * This differs from CheckoutPageJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
export const CheckoutPageOrSubClassJoiSchema = Joi.alternatives().try([
  CheckoutPageJoiSchema,
]);

/**
 * Runtime validator for schema:CheckoutPage.
 *
 * If some data has a structure which matches a schema:CheckoutPage, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeCheckoutPage = validateCheckoutPage(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeCheckoutPage instanceof OaValidationError) {
 *   // From this point on, `maybeCheckoutPage` will have type `OaValidationError`
 *   const error = maybeCheckoutPage;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeCheckoutPage` will have type `CheckoutPage`
 * const checkoutPage = maybeCheckoutPage;
 * ```
 */
export function validateCheckoutPage(maybeCheckoutPage: unknown): CheckoutPage | OaValidationError {
  const { value, error } = CheckoutPageJoiSchema.validate(maybeCheckoutPage);
  if (error) {
    return new OaValidationError('CheckoutPage', maybeCheckoutPage, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as CheckoutPage;
}
