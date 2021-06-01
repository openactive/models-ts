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
 * schema:Event - Validation schema (w/ JOI)
 *
 * This differs from Event_JoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.Event_OrSubClassJoiSchema = Joi.alternatives().try([
    exports.Event_JoiSchema,
    Joi.lazy(() => schema.SaleEventOrSubClassJoiSchema),
    Joi.lazy(() => schema.FestivalOrSubClassJoiSchema),
    Joi.lazy(() => schema.MusicEventOrSubClassJoiSchema),
    Joi.lazy(() => schema.ExhibitionEventOrSubClassJoiSchema),
    Joi.lazy(() => schema.HackathonOrSubClassJoiSchema),
    Joi.lazy(() => schema.ComedyEventOrSubClassJoiSchema),
    Joi.lazy(() => schema.EventSeriesOrSubClassJoiSchema),
    Joi.lazy(() => schema.ChildrensEventOrSubClassJoiSchema),
    Joi.lazy(() => schema.UserInteractionOrSubClassJoiSchema),
    Joi.lazy(() => schema.PublicationEventOrSubClassJoiSchema),
    Joi.lazy(() => schema.CourseInstanceOrSubClassJoiSchema),
    Joi.lazy(() => schema.ScreeningEventOrSubClassJoiSchema),
    Joi.lazy(() => schema.DeliveryEventOrSubClassJoiSchema),
    Joi.lazy(() => schema.LiteraryEventOrSubClassJoiSchema),
    Joi.lazy(() => schema.SportsEventOrSubClassJoiSchema),
    Joi.lazy(() => schema.BusinessEventOrSubClassJoiSchema),
    Joi.lazy(() => schema.VisualArtsEventOrSubClassJoiSchema),
    Joi.lazy(() => schema.SocialEventOrSubClassJoiSchema),
    Joi.lazy(() => schema.TheaterEventOrSubClassJoiSchema),
    Joi.lazy(() => schema.DanceEventOrSubClassJoiSchema),
    Joi.lazy(() => schema.EducationEventOrSubClassJoiSchema),
    Joi.lazy(() => schema.FoodEventOrSubClassJoiSchema),
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
 * const maybeEvent_ = Event_.validate(req.body); // `req.body` will have type `any` or `unknown`
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
