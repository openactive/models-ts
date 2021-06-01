"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEvent_ = exports.Event_OrSubClassJoiSchema = exports.Event_JoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const oa = require("../oa");
const schema = require("../schema");
/**
 * Event - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/Event, which means that any of this type's properties within schema.org may also be used.
 */
exports.Event_JoiSchema = Joi.object({
    '@type': Joi.string().valid('Event').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.number().integer(), Joi.string(), Joi.lazy(() => oa.PropertyValueOrSubClassJoiSchema), Joi.array().items(Joi.lazy(() => oa.PropertyValueOrSubClassJoiSchema))),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    accessibilityInformation: Joi.string(),
    accessibilitySupport: Joi.array().items(Joi.lazy(() => oa.ConceptOrSubClassJoiSchema)),
    activity: Joi.array().items(Joi.lazy(() => oa.ConceptOrSubClassJoiSchema)),
    additionalAdmissionRestriction: Joi.array().items(Joi.string()),
    ageRange: Joi.lazy(() => oa.QuantitativeValueOrSubClassJoiSchema),
    ageRestriction: Joi.lazy(() => oa.QuantitativeValueOrSubClassJoiSchema),
    attendeeInstructions: Joi.string(),
    category: Joi.alternatives().try(Joi.array().items(Joi.string()), Joi.array().items(Joi.lazy(() => oa.ConceptOrSubClassJoiSchema))),
    contributor: Joi.array().items(Joi.lazy(() => oa.PersonOrSubClassJoiSchema)),
    duration: Joi.string(),
    eventAttendanceMode: Joi.lazy(() => schema.EventAttendanceModeEnumerationJoiSchema),
    eventStatus: Joi.lazy(() => schema.EventStatusTypeJoiSchema),
    genderRestriction: Joi.lazy(() => oa.GenderRestrictionTypeJoiSchema),
    image: Joi.array().items(Joi.lazy(() => oa.ImageObjectOrSubClassJoiSchema)),
    isAccessibleForFree: Joi.boolean(),
    isCoached: Joi.boolean(),
    leader: Joi.array().items(Joi.lazy(() => oa.PersonOrSubClassJoiSchema)),
    level: Joi.alternatives().try(Joi.array().items(Joi.string()), Joi.array().items(Joi.lazy(() => oa.ConceptOrSubClassJoiSchema))),
    location: Joi.lazy(() => oa.PlaceOrSubClassJoiSchema),
    maximumAttendeeCapacity: Joi.number().integer(),
    maximumVirtualAttendeeCapacity: Joi.number().integer(),
    meetingPoint: Joi.string(),
    offers: Joi.array().items(Joi.lazy(() => oa.OfferOrSubClassJoiSchema)),
    organizer: Joi.alternatives().try(Joi.lazy(() => oa.PersonOrSubClassJoiSchema), Joi.lazy(() => oa.OrganizationOrSubClassJoiSchema)),
    programme: Joi.lazy(() => oa.BrandOrSubClassJoiSchema),
    remainingAttendeeCapacity: Joi.number().integer(),
    schedulingNote: Joi.string(),
    startDate: Joi.string().isoDate(),
    endDate: Joi.string().isoDate(),
    subEvent: Joi.array().items(Joi.lazy(() => oa.Event_OrSubClassJoiSchema)),
    superEvent: Joi.lazy(() => oa.Event_OrSubClassJoiSchema),
    url: Joi.string().uri(),
    'beta:formattedDescription': Joi.string(),
    'beta:distance': Joi.lazy(() => oa.QuantitativeValueOrSubClassJoiSchema),
    'beta:attendeeCount': Joi.number().integer(),
    'beta:registrationCount': Joi.number().integer(),
    'beta:isWheelchairAccessible': Joi.boolean(),
    'beta:estimatedDuration': Joi.lazy(() => oa.QuantitativeValueOrSubClassJoiSchema),
    'beta:video': Joi.array().items(Joi.lazy(() => oa.VideoObjectOrSubClassJoiSchema)),
    'beta:sportsActivityLocation': Joi.array().items(Joi.lazy(() => schema.SportsActivityLocationOrSubClassJoiSchema)),
    'beta:offerValidityPeriod': Joi.string(),
    'beta:facilitySetting': Joi.lazy(() => oa.FacilitySettingTypeJoiSchema),
    'beta:isVirtuallyCoached': Joi.boolean(),
    'beta:virtualLocation': Joi.lazy(() => oa.VirtualLocationOrSubClassJoiSchema),
    'beta:affiliatedLocation': Joi.lazy(() => oa.PlaceOrSubClassJoiSchema),
    'beta:isInteractivityPreferred': Joi.boolean(),
    'beta:participantSuppliedEquipment': Joi.lazy(() => oa.RequiredStatusTypeJoiSchema),
    'beta:donationPaymentUrl': Joi.string().uri(),
    'beta:isFirstSessionAccessibleForFree': Joi.boolean(),
    'beta:contactPoint': Joi.lazy(() => schema.ContactPointOrSubClassJoiSchema),
    'beta:bookingChannel': Joi.array().items(Joi.lazy(() => oa.BookingChannelTypeJoiSchema)),
    'test:testOpenBookingFlow': Joi.lazy(() => oa.TestOpenBookingFlowEnumerationJoiSchema),
    'test:testOpportunityCriteria': Joi.lazy(() => oa.TestOpportunityCriteriaEnumerationJoiSchema),
    workFeatured: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    aggregateRating: Joi.alternatives().try(Joi.lazy(() => schema.AggregateRatingOrSubClassJoiSchema), Joi.string().uri()),
    workPerformed: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    eventSchedule: Joi.alternatives().try(Joi.lazy(() => schema.ScheduleOrSubClassJoiSchema), Joi.string().uri()),
    attendees: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    actor: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    performer: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    director: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    previousStartDate: Joi.string().isoDate(),
    review: Joi.alternatives().try(Joi.lazy(() => schema.ReviewOrSubClassJoiSchema), Joi.string().uri()),
    translator: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    subEvents: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.string().uri()),
    sponsor: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    maximumPhysicalAttendeeCapacity: Joi.number().integer(),
    attendee: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    recordedIn: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    about: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
    inLanguage: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.LanguageOrSubClassJoiSchema), Joi.string().uri()),
    composer: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    performers: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    doorTime: Joi.alternatives().try(Joi.string().isoDate(), Joi.string()),
    funder: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    audience: Joi.alternatives().try(Joi.lazy(() => schema.AudienceOrSubClassJoiSchema), Joi.string().uri()),
    typicalAgeRange: Joi.string(),
    sameAs: Joi.string().uri(),
    subjectOf: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    potentialAction: Joi.alternatives().try(Joi.lazy(() => schema.ActionOrSubClassJoiSchema), Joi.string().uri()),
    mainEntityOfPage: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    additionalType: Joi.string().uri(),
    alternateName: Joi.string(),
    disambiguatingDescription: Joi.string(),
});
/**
 * Event - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/Event, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from Event_JoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.Event_OrSubClassJoiSchema = Joi.alternatives().try([
    exports.Event_JoiSchema,
    Joi.lazy(() => oa.CourseInstanceOrSubClassJoiSchema),
    Joi.lazy(() => oa.EventSeriesOrSubClassJoiSchema),
    Joi.lazy(() => oa.HeadlineEventOrSubClassJoiSchema),
    Joi.lazy(() => oa.OnDemandEventOrSubClassJoiSchema),
    Joi.lazy(() => oa.ScheduledSessionOrSubClassJoiSchema),
    Joi.lazy(() => oa.SessionSeriesOrSubClassJoiSchema),
    Joi.lazy(() => oa.SlotOrSubClassJoiSchema),
]);
/**
 * Runtime validator for Event.
 *
 * If some data has a structure which matches a Event, it will be returned with the correct type.
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
