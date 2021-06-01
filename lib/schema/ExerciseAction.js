"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateExerciseAction = exports.ExerciseActionOrSubClassJoiSchema = exports.ExerciseActionJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:ExerciseAction - Validation schema (w/ JOI)
 */
exports.ExerciseActionJoiSchema = Joi.object({
    '@type': Joi.string().valid('ExerciseAction').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string().uri(), Joi.string()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    exerciseCourse: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    fromLocation: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    exerciseType: Joi.string(),
    sportsEvent: Joi.alternatives().try(Joi.lazy(() => schema.SportsEventOrSubClassJoiSchema), Joi.string().uri()),
    sportsTeam: Joi.alternatives().try(Joi.lazy(() => schema.SportsTeamOrSubClassJoiSchema), Joi.string().uri()),
    course: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    diet: Joi.alternatives().try(Joi.lazy(() => schema.DietOrSubClassJoiSchema), Joi.string().uri()),
    sportsActivityLocation: Joi.alternatives().try(Joi.lazy(() => schema.SportsActivityLocationOrSubClassJoiSchema), Joi.string().uri()),
    opponent: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.string().uri()),
    distance: Joi.alternatives().try(Joi.lazy(() => schema.DistanceOrSubClassJoiSchema), Joi.string().uri()),
    exerciseRelatedDiet: Joi.alternatives().try(Joi.lazy(() => schema.DietOrSubClassJoiSchema), Joi.string().uri()),
    exercisePlan: Joi.alternatives().try(Joi.lazy(() => schema.ExercisePlanOrSubClassJoiSchema), Joi.string().uri()),
    toLocation: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string().uri()),
    event: Joi.alternatives().try(Joi.lazy(() => schema.Event_OrSubClassJoiSchema), Joi.string().uri()),
    audience: Joi.alternatives().try(Joi.lazy(() => schema.AudienceOrSubClassJoiSchema), Joi.string().uri()),
    startTime: Joi.alternatives().try(Joi.string().isoDate(), Joi.string()),
    instrument: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
    actionStatus: Joi.alternatives().try(Joi.lazy(() => schema.ActionStatusTypeOrSubClassJoiSchema), Joi.string().uri()),
    agent: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    participant: Joi.alternatives().try(Joi.lazy(() => schema.PersonOrSubClassJoiSchema), Joi.lazy(() => schema.OrganizationOrSubClassJoiSchema), Joi.string().uri()),
    target: Joi.alternatives().try(Joi.lazy(() => schema.EntryPointOrSubClassJoiSchema), Joi.string().uri()),
    endTime: Joi.alternatives().try(Joi.string().isoDate(), Joi.string()),
    error: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
    result: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
    object: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
    location: Joi.alternatives().try(Joi.lazy(() => schema.PlaceOrSubClassJoiSchema), Joi.string(), Joi.lazy(() => schema.VirtualLocationOrSubClassJoiSchema), Joi.lazy(() => schema.PostalAddressOrSubClassJoiSchema), Joi.string().uri()),
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
 * schema:ExerciseAction - Validation schema (w/ JOI)
 *
 * This differs from ExerciseActionJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.ExerciseActionOrSubClassJoiSchema = Joi.alternatives().try([
    exports.ExerciseActionJoiSchema,
]);
/**
 * Runtime validator for schema:ExerciseAction.
 *
 * If some data has a structure which matches a schema:ExerciseAction, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeExerciseAction = ExerciseAction.validate(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeExerciseAction instanceof OaValidationError) {
 *   // From this point on, `maybeExerciseAction` will have type `OaValidationError`
 *   const error = maybeExerciseAction;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeExerciseAction` will have type `ExerciseAction`
 * const exerciseAction = maybeExerciseAction;
 * ```
 */
function validateExerciseAction(maybeExerciseAction) {
    const { value, error } = exports.ExerciseActionJoiSchema.validate(maybeExerciseAction);
    if (error) {
        return new oaValidationError_1.OaValidationError('ExerciseAction', maybeExerciseAction, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateExerciseAction = validateExerciseAction;
