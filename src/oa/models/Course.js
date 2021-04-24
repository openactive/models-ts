
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 * 
 * This type is derived from https://schema.org/Course, which means that any of this type's properties within schema.org may also be used.
 */
const Course = s.intersection([
  s.type({'@type': s.literal('Course')}),
  s.partial({
      /**
      * A local non-URI identifier for the resource
      *
      * ```json
      * "identifier": "BR1234"
      * ```
      */
      identifier: s.union([s.nonNegativeInt,s.string,oa.PropertyValue,s.array(oa.PropertyValue)]),
      /**
      * The name of the Course
      *
      * ```json
      * "name": "Netball Youth Camp"
      * ```
      */
      name: s.string,
      /**
      * A plain text description of the Course, which must not include HTML or other markup.
      *
      * ```json
      * "description": "Netball Youth Camps give junior netballers the chance to get together with their friends and take to the court in the holidays!
      * 
      * The camp is a non-residential holiday camp providing ‘Nothing but Netball’; not only will there be top quality coaching and fun netball activities but there is even an opportunity to meet and be inspired by an elite player.
      * 
      * If you are a junior netball lover (or the parent of one!) these are an unmissable holiday activity."
      * ```
      */
      description: s.string,
      /**
      * Specifies the physical activity or activities that will take place during a Course.
      *
      * ```json
      * "activity": [
      *   {
      *     "@id": "https://openactive.io/activity-list#fbdc35a8-3dd0-40ee-a7ca-6ff40b3e5f90",
      *     "@type": "Concept",
      *     "prefLabel": "Netball",
      *     "inScheme": "https://openactive.io/activity-list"
      *   }
      * ]
      * ```
      */
      activity: s.array(oa.Concept),
      /**
      * The person or organization who have created the Course. An author might be an schema:Organization or a schema:Person.
      *
      * ```json
      * "author": {
      *   "@type": "Organization",
      *   "name": "Central Speedball Association",
      *   "url": "http://www.speedball-world.com"
      * }
      * ```
      */
      author: s.union([oa.Person,oa.Organization]),
      /**
      * A definitive canonical URL for the Course.
      *
      * ```json
      * "url": "http://www.speedball-world.com/beginners-course"
      * ```
      */
      url: s.urlString,
      /**
      * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
      * An associated logo for a course.
      * 
      * If you are using this property, please join the discussion at proposal [#164](https://github.com/openactive/modelling-opportunity-data/issues/164).
      */
      logo: oa.ImageObject,
      /**
      * [NOTICE: This is a beta property, and is highly likely to change in future versions of this library.]
      * A related video object.
      * 
      * If you are using this property, please join the discussion at proposal [#88](https://github.com/openactive/modelling-opportunity-data/issues/88).
      */
      video: s.array(oa.VideoObject),
  })
])

module.exports = {
  Course,
};