
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const VideoGameSeries = s.intersection([
  s.type({'@type': s.literal('VideoGameSeries')}),
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
      * A director of e.g. tv, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip.
      */
      directors: schema.Person,
      /**
      * Indicate how many people can play this game (minimum, maximum, or range).
      */
      numberOfPlayers: schema.QuantitativeValue,
      /**
      * A season in a media series.
      */
      seasons: schema.CreativeWorkSeason,
      /**
      * A season in a media series.
      */
      season: s.union([schema.CreativeWorkSeason,s.urlString]),
      /**
      * Indicates whether this game is multi-player, co-op or single-player.  The game can be marked as multi-player, co-op and single-player at the same time.
      */
      playMode: schema.enums.GamePlayMode,
      /**
      * An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip.
      */
      actor: schema.Person,
      /**
      * The number of seasons in this series.
      */
      numberOfSeasons: s.nonNegativeInt,
      /**
      * Real or fictional location of the game (or part of game).
      */
      gameLocation: s.union([schema.PostalAddress,schema.Place,s.urlString]),
      /**
      * A director of e.g. tv, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip.
      */
      director: schema.Person,
      /**
      * The composer of the soundtrack.
      */
      musicBy: s.union([schema.Person,schema.MusicGroup]),
      /**
      * The number of episodes in this season or series.
      */
      numberOfEpisodes: s.nonNegativeInt,
      /**
      * An episode of a TV/radio series or season.
      */
      episodes: schema.Episode,
      /**
      * An item is an object within the game world that can be collected by a player or, occasionally, a non-player character.
      */
      gameItem: schema.Thing,
      /**
      * The electronic systems used to play <a href="http://en.wikipedia.org/wiki/Category:Video_game_platforms">video games</a>.
      */
      gamePlatform: s.union([schema.Thing,s.urlString,s.string]),
      /**
      * A piece of data that represents a particular aspect of a fictional character (skill, power, character points, advantage, disadvantage).
      */
      characterAttribute: schema.Thing,
      /**
      * An actor, e.g. in tv, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip.
      */
      actors: schema.Person,
      /**
      * A season that is part of the media series.
      */
      containsSeason: schema.CreativeWorkSeason,
      /**
      * The task that a player-controlled character, or group of characters may complete in order to gain a reward.
      */
      quest: schema.Thing,
      /**
      * An episode of a tv, radio or game media within a series or season.
      */
      episode: schema.Episode,
      /**
      * The production company or studio responsible for the item e.g. series, video game, episode etc.
      */
      productionCompany: schema.Organization,
      /**
      * The trailer of a movie or tv/radio series, season, episode, etc.
      */
      trailer: schema.VideoObject,
      /**
      * Cheat codes to the game.
      */
      cheatCode: schema.CreativeWork,
      /**
      * The start date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
      */
      startDate: s.union([s.isoDateTimeString,s.string]),
      /**
      * The International Standard Serial Number (ISSN) that identifies this serial publication. You can repeat this property to identify different formats of, or the linking ISSN (ISSN-L) for, this serial publication.
      */
      issn: s.string,
      /**
      * The end date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
      */
      endDate: s.union([s.string,s.isoDateTimeString]),
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
  VideoGameSeries,
};