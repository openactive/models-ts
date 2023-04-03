"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateOnDemandEvent = exports.OnDemandEventOrSubClassJoiSchema = exports.OnDemandEventJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const oa = require("../oa");
const schema = require("../schema");
/**
 * OnDemandEvent - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/OnDemandEvent, which means that any of this type's properties within schema.org may also be used.
 */
exports.OnDemandEventJoiSchema = Joi.object({
    '@type': Joi.string().valid('OnDemandEvent').required(),
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
    customerAccountBookingRestriction: Joi.array().items(Joi.string()),
    duration: Joi.string(),
    genderRestriction: Joi.lazy(() => oa.GenderRestrictionTypeJoiSchema),
    image: Joi.array().items(Joi.lazy(() => oa.ImageObjectOrSubClassJoiSchema)),
    isAccessibleForFree: Joi.boolean(),
    isCoached: Joi.boolean(),
    isOpenBookingWithCustomerAccountAllowed: Joi.boolean(),
    leader: Joi.array().items(Joi.lazy(() => oa.PersonOrSubClassJoiSchema)),
    level: Joi.alternatives().try(Joi.array().items(Joi.string()), Joi.array().items(Joi.lazy(() => oa.ConceptOrSubClassJoiSchema))),
    offers: Joi.array().items(Joi.lazy(() => oa.OfferOrSubClassJoiSchema)),
    organizer: Joi.alternatives().try(Joi.lazy(() => oa.PersonOrSubClassJoiSchema), Joi.lazy(() => oa.OrganizationOrSubClassJoiSchema)),
    programme: Joi.lazy(() => oa.BrandOrSubClassJoiSchema),
    superEvent: Joi.lazy(() => oa.Event_OrSubClassJoiSchema),
    url: Joi.string().uri(),
    workFeatured: Joi.lazy(() => oa.MediaObjectOrSubClassJoiSchema),
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
    'beta:isScheduledAsSlots': Joi.boolean(),
    'beta:contactPoint': Joi.lazy(() => schema.ContactPointOrSubClassJoiSchema),
    'beta:bookingChannel': Joi.array().items(Joi.lazy(() => oa.BookingChannelTypeJoiSchema)),
    'test:testOpenBookingFlow': Joi.lazy(() => oa.TestOpenBookingFlowEnumerationJoiSchema),
    'test:testOpportunityCriteria': Joi.lazy(() => oa.TestOpportunityCriteriaEnumerationJoiSchema),
    about: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
    doorTime: Joi.alternatives().try(Joi.string(), Joi.string().isoDate()),
    typicalAgeRange: Joi.string(),
    funder: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    aggregateRating: Joi.alternatives().try(Joi.lazy(() => schema.AggregateRatingOrSubClassJoiSchema), Joi.string().uri()),
    attendees: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    composer: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    translator: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    previousStartDate: Joi.string().isoDate(),
    director: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    maximumPhysicalAttendeeCapacity: Joi.number().integer(),
    attendee: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    audience: Joi.alternatives().try(Joi.lazy(() => schema.AudienceOrSubClassJoiSchema), Joi.string().uri()),
    sponsor: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    actor: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    workPerformed: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    recordedIn: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    performers: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    inLanguage: Joi.alternatives().try(Joi.string(), Joi.lazy(() => schema.LanguageOrSubClassJoiSchema), Joi.string().uri()),
    performer: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    review: Joi.alternatives().try(Joi.lazy(() => schema.ReviewOrSubClassJoiSchema), Joi.string().uri()),
    subEvents: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.string().uri()),
    eventSchedule: Joi.alternatives().try(Joi.lazy(() => schema.ScheduleOrSubClassJoiSchema), Joi.string().uri()),
    mainEntityOfPage: Joi.alternatives().try(Joi.string().uri(), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema)),
    additionalType: Joi.string().uri(),
    alternateName: Joi.string(),
    sameAs: Joi.string().uri(),
    potentialAction: Joi.alternatives().try(Joi.lazy(() => schema.ActionOrSubClassJoiSchema), Joi.string().uri()),
    subjectOf: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
    disambiguatingDescription: Joi.string(),
    publishedBy: Joi.alternatives().try(Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    publishedOn: Joi.alternatives().try(Joi.lazy(() => schema.BroadcastServiceOrSubClassJoiSchema), Joi.string().uri()),
    free: Joi.boolean(),
});
/**
 * OnDemandEvent - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/OnDemandEvent, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from OnDemandEventJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.OnDemandEventOrSubClassJoiSchema = Joi.alternatives().try([
    exports.OnDemandEventJoiSchema,
]);
/**
 * Runtime validator for OnDemandEvent.
 *
 * If some data has a structure which matches a OnDemandEvent, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeOnDemandEvent = validateOnDemandEvent(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeOnDemandEvent instanceof OaValidationError) {
 *   // From this point on, `maybeOnDemandEvent` will have type `OaValidationError`
 *   const error = maybeOnDemandEvent;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeOnDemandEvent` will have type `OnDemandEvent`
 * const onDemandEvent = maybeOnDemandEvent;
 * ```
 */
function validateOnDemandEvent(maybeOnDemandEvent) {
    const { value, error } = exports.OnDemandEventJoiSchema.validate(maybeOnDemandEvent);
    if (error) {
        return new oaValidationError_1.OaValidationError('OnDemandEvent', maybeOnDemandEvent, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateOnDemandEvent = validateOnDemandEvent;
