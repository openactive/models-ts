"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSlot = exports.SlotOrSubClassJoiSchema = exports.SlotJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const oa = require("../oa");
const schema = require("../schema");
/**
 * Slot - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/Event, which means that any of this type's properties within schema.org may also be used.
 */
exports.SlotJoiSchema = Joi.object({
    '@type': Joi.string().valid('Slot').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.number().integer(), Joi.string(), Joi.lazy(() => oa.PropertyValueOrSubClassJoiSchema), Joi.array().items(Joi.lazy(() => oa.PropertyValueOrSubClassJoiSchema))),
    '@id': Joi.string().uri(),
    additionalAdmissionRestriction: Joi.array().items(Joi.string()),
    customerAccountBookingRestriction: Joi.array().items(Joi.string()),
    duration: Joi.string(),
    facilityUse: Joi.alternatives().try(Joi.lazy(() => oa.FacilityUseOrSubClassJoiSchema), Joi.string().uri()),
    isOpenBookingWithCustomerAccountAllowed: Joi.boolean(),
    maximumUses: Joi.number().integer(),
    offers: Joi.array().items(Joi.lazy(() => oa.OfferOrSubClassJoiSchema)),
    organizer: Joi.alternatives().try(Joi.lazy(() => oa.PersonOrSubClassJoiSchema), Joi.lazy(() => oa.OrganizationOrSubClassJoiSchema)),
    remainingUses: Joi.number().integer(),
    startDate: Joi.string().isoDate(),
    endDate: Joi.string().isoDate(),
    'beta:sportsActivityLocation': Joi.array().items(Joi.lazy(() => schema.SportsActivityLocationOrSubClassJoiSchema)),
    'beta:formattedDescription': Joi.string(),
    'beta:distance': Joi.lazy(() => oa.QuantitativeValueOrSubClassJoiSchema),
    'beta:attendeeCount': Joi.number().integer(),
    'beta:registrationCount': Joi.number().integer(),
    'beta:isWheelchairAccessible': Joi.boolean(),
    'beta:estimatedDuration': Joi.lazy(() => oa.QuantitativeValueOrSubClassJoiSchema),
    'beta:video': Joi.array().items(Joi.lazy(() => oa.VideoObjectOrSubClassJoiSchema)),
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
    workFeatured: Joi.alternatives().try(Joi.lazy(() => schema.CreativeWorkOrSubClassJoiSchema), Joi.string().uri()),
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
});
/**
 * Slot - Validation schema (w/ JOI)
 *
 * This type is derived from https://schema.org/Event, which means that any of this type's properties within schema.org may also be used.
 *
 * This differs from SlotJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.SlotOrSubClassJoiSchema = Joi.alternatives().try([
    exports.SlotJoiSchema,
]);
/**
 * Runtime validator for Slot.
 *
 * If some data has a structure which matches a Slot, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeSlot = validateSlot(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeSlot instanceof OaValidationError) {
 *   // From this point on, `maybeSlot` will have type `OaValidationError`
 *   const error = maybeSlot;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeSlot` will have type `Slot`
 * const slot = maybeSlot;
 * ```
 */
function validateSlot(maybeSlot) {
    const { value, error } = exports.SlotJoiSchema.validate(maybeSlot);
    if (error) {
        return new oaValidationError_1.OaValidationError('Slot', maybeSlot, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateSlot = validateSlot;
