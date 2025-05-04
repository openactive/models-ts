"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEvent_ = exports.Event_OrSubClassJoiSchema = exports.Event_JoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:Event - Validation schema (w/ JOI)
 */
exports.Event_JoiSchema = Joi.object({
    '@type': Joi.string().valid('Event').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    subEvent: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.string().uri()),
    about: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
    offers: Joi.alternatives().try(Joi.lazy(() => schema.DemandOrSubClassJoiSchema), Joi.lazy(() => schema.OfferOrSubClassJoiSchema), Joi.string().uri()),
    doorTime: Joi.alternatives().try(Joi.string(), Joi.string().isoDate()),
    typicalAgeRange: Joi.string(),
    funder: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    maximumAttendeeCapacity: Joi.number().integer(),
    aggregateRating: Joi.alternatives().try(Joi.lazy(() => schema.AggregateRatingOrSubClassJoiSchema), Joi.string().uri()),
    attendees: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    composer: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    duration: Joi.alternatives().try(Joi.string(), Joi.string().uri()),
    translator: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    previousStartDate: Joi.string().isoDate(),
    director: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    location: Joi.alternatives().try(Joi.lazy(() => schema.PostalAddressOrSubClassJoiSchema), Joi.string(), Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.lazy(() => schema.VirtualLocationOrSubClassJoiSchema), Joi.string().uri()),
    eventStatus: Joi.lazy(() => schema.EventStatusTypeJoiSchema),
    maximumPhysicalAttendeeCapacity: Joi.number().integer(),
    remainingAttendeeCapacity: Joi.number().integer(),
    attendee: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    endDate: Joi.string().isoDate(),
    audience: Joi.alternatives().try(Joi.lazy(() => schema.AudienceOrSubClassJoiSchema), Joi.string().uri()),
    sponsor: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    organizer: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    actor: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    workFeatured: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    eventAttendanceMode: Joi.lazy(() => schema.EventAttendanceModeEnumerationJoiSchema),
    superEvent: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.string().uri()),
    workPerformed: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    recordedIn: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    performers: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    maximumVirtualAttendeeCapacity: Joi.number().integer(),
    startDate: Joi.string().isoDate(),
    inLanguage: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.LanguageOrSubClassJoiSchema), Joi.string().uri()),
    performer: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    review: Joi.alternatives().try(Joi.lazy(() => schema.ReviewOrSubClassJoiSchema), Joi.string().uri()),
    subEvents: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.string().uri()),
    eventSchedule: Joi.alternatives().try(Joi.lazy(() => schema.ScheduleOrSubClassJoiSchema), Joi.string().uri()),
    contributor: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    isAccessibleForFree: Joi.boolean(),
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
 * schema:Event - Validation schema (w/ JOI)
 *
 * This differs from Event_JoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.Event_OrSubClassJoiSchema = Joi.alternatives().try([
    exports.Event_JoiSchema,
    Joi.lazy(() => schema.DanceEventOrSubClassJoiSchema),
    Joi.lazy(() => schema.ScreeningEventOrSubClassJoiSchema),
    Joi.lazy(() => schema.ExhibitionEventOrSubClassJoiSchema),
    Joi.lazy(() => schema.MusicEventOrSubClassJoiSchema),
    Joi.lazy(() => schema.PublicationEventOrSubClassJoiSchema),
    Joi.lazy(() => schema.TheaterEventOrSubClassJoiSchema),
    Joi.lazy(() => schema.ChildrensEventOrSubClassJoiSchema),
    Joi.lazy(() => schema.VisualArtsEventOrSubClassJoiSchema),
    Joi.lazy(() => schema.HackathonOrSubClassJoiSchema),
    Joi.lazy(() => schema.UserInteractionOrSubClassJoiSchema),
    Joi.lazy(() => schema.EventSeriesOrSubClassJoiSchema),
    Joi.lazy(() => schema.FoodEventOrSubClassJoiSchema),
    Joi.lazy(() => schema.SaleEventOrSubClassJoiSchema),
    Joi.lazy(() => schema.LiteraryEventOrSubClassJoiSchema),
    Joi.lazy(() => schema.FestivalOrSubClassJoiSchema),
    Joi.lazy(() => schema.CourseInstanceOrSubClassJoiSchema),
    Joi.lazy(() => schema.EducationEventOrSubClassJoiSchema),
    Joi.lazy(() => schema.SocialEventOrSubClassJoiSchema),
    Joi.lazy(() => schema.BusinessEventOrSubClassJoiSchema),
    Joi.lazy(() => schema.DeliveryEventOrSubClassJoiSchema),
    Joi.lazy(() => schema.SportsEventOrSubClassJoiSchema),
    Joi.lazy(() => schema.ComedyEventOrSubClassJoiSchema),
]);
/**
 * Runtime validator for schema:Event.
 *
 * If some data has a structure which matches a schema:Event, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeEvent_ = validateEvent_(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeEvent_ instanceof OaValidationError) {
 *   // From this point on, `maybeEvent_` will have type `OaValidationError`
 *   const error = maybeEvent_;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeEvent_` will have type `Event_`
 * const event_ = maybeEvent_;
 * ```
 */
function validateEvent_(maybeEvent_) {
    const { value, error } = exports.Event_JoiSchema.validate(maybeEvent_);
    if (error) {
        return new oaValidationError_1.OaValidationError('Event_', maybeEvent_, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateEvent_ = validateEvent_;
