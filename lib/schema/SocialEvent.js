"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSocialEvent = exports.SocialEventOrSubClassJoiSchema = exports.SocialEventJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:SocialEvent - Validation schema (w/ JOI)
 */
exports.SocialEventJoiSchema = Joi.object({
    '@type': Joi.string().valid('SocialEvent').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    workFeatured: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    aggregateRating: Joi.alternatives().try(Joi.lazy(() => schema.AggregateRatingOrSubClassJoiSchema), Joi.string().uri()),
    workPerformed: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    eventSchedule: Joi.alternatives().try(Joi.lazy(() => schema.ScheduleOrSubClassJoiSchema), Joi.string().uri()),
    attendees: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    contributor: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    actor: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    performer: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    offers: Joi.alternatives().try(Joi.lazy(() => schema.OfferOrSubClassJoiSchema), Joi.lazy(() => schema.DemandOrSubClassJoiSchema), Joi.string().uri()),
    startDate: Joi.string().isoDate(),
    director: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    previousStartDate: Joi.string().isoDate(),
    review: Joi.alternatives().try(Joi.lazy(() => schema.ReviewOrSubClassJoiSchema), Joi.string().uri()),
    translator: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    organizer: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    subEvents: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.string().uri()),
    sponsor: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    isAccessibleForFree: Joi.boolean(),
    maximumAttendeeCapacity: Joi.number().integer(),
    eventStatus: Joi.lazy(() => schema.EventStatusTypeJoiSchema),
    maximumPhysicalAttendeeCapacity: Joi.number().integer(),
    subEvent: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.string().uri()),
    endDate: Joi.string().isoDate(),
    attendee: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    recordedIn: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    about: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
    inLanguage: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.LanguageOrSubClassJoiSchema), Joi.string().uri()),
    superEvent: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.string().uri()),
    eventAttendanceMode: Joi.lazy(() => schema.EventAttendanceModeEnumerationJoiSchema),
    composer: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    performers: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    duration: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
    doorTime: Joi.alternatives().try(Joi.string().isoDate(), Joi.string()),
    funder: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    remainingAttendeeCapacity: Joi.number().integer(),
    location: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string(), Joi.lazy(() => schema.VirtualLocationOrSubClassJoiSchema), Joi.lazy(() => schema.PostalAddressOrSubClassJoiSchema), Joi.string().uri()),
    audience: Joi.alternatives().try(Joi.lazy(() => schema.AudienceOrSubClassJoiSchema), Joi.string().uri()),
    maximumVirtualAttendeeCapacity: Joi.number().integer(),
    typicalAgeRange: Joi.string(),
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
 * schema:SocialEvent - Validation schema (w/ JOI)
 *
 * This differs from SocialEventJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.SocialEventOrSubClassJoiSchema = Joi.alternatives().try([
    exports.SocialEventJoiSchema,
]);
/**
 * Runtime validator for schema:SocialEvent.
 *
 * If some data has a structure which matches a schema:SocialEvent, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeSocialEvent = validateSocialEvent(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeSocialEvent instanceof OaValidationError) {
 *   // From this point on, `maybeSocialEvent` will have type `OaValidationError`
 *   const error = maybeSocialEvent;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeSocialEvent` will have type `SocialEvent`
 * const socialEvent = maybeSocialEvent;
 * ```
 */
function validateSocialEvent(maybeSocialEvent) {
    const { value, error } = exports.SocialEventJoiSchema.validate(maybeSocialEvent);
    if (error) {
        return new oaValidationError_1.OaValidationError('SocialEvent', maybeSocialEvent, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateSocialEvent = validateSocialEvent;
