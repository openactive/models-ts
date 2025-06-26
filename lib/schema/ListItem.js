"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateListItem = exports.ListItemOrSubClassJoiSchema = exports.ListItemJoiSchema = void 0;
// This file was generated
const Joi = require("joi");
const oaValidationError_1 = require("../oaValidationError");
const schema = require("../schema");
/**
 * schema:ListItem - Validation schema (w/ JOI)
 */
exports.ListItemJoiSchema = Joi.object({
    '@type': Joi.string().valid('ListItem').required(),
    '@context': Joi.alternatives().try([Joi.string(), Joi.array().items(Joi.string())]),
    identifier: Joi.alternatives().try(Joi.lazy(() => schema.PropertyValueOrSubClassJoiSchema), Joi.string(), Joi.string().uri()),
    name: Joi.string(),
    description: Joi.string(),
    '@id': Joi.string().uri(),
    position: Joi.alternatives().try(Joi.string(), Joi.number().integer()),
    nextItem: Joi.alternatives().try(Joi.lazy(() => schema.ListItemOrSubClassJoiSchema), Joi.string().uri()),
    previousItem: Joi.alternatives().try(Joi.lazy(() => schema.ListItemOrSubClassJoiSchema), Joi.string().uri()),
    item: Joi.alternatives().try(Joi.lazy(() => schema.ThingOrSubClassJoiSchema), Joi.string().uri()),
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
 * schema:ListItem - Validation schema (w/ JOI)
 *
 * This differs from ListItemJoiSchema because it also allows for objects that have the type of a model that
 * sub-classes this model. e.g. `Event.OrSubClassJoiSchema` allows `Event`s as well as `ScheduledSession`s,
 * `SessionSeries`, etc.
 */
exports.ListItemOrSubClassJoiSchema = Joi.alternatives().try([
    exports.ListItemJoiSchema,
    Joi.lazy(() => schema.HowToSectionOrSubClassJoiSchema),
    Joi.lazy(() => schema.HowToDirectionOrSubClassJoiSchema),
    Joi.lazy(() => schema.HowToTipOrSubClassJoiSchema),
    Joi.lazy(() => schema.HowToItemOrSubClassJoiSchema),
    Joi.lazy(() => schema.HowToStepOrSubClassJoiSchema),
]);
/**
 * Runtime validator for schema:ListItem.
 *
 * If some data has a structure which matches a schema:ListItem, it will be returned with the correct type.
 * Otherwise, this function returns an OAValidationError with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybeListItem = validateListItem(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybeListItem instanceof OaValidationError) {
 *   // From this point on, `maybeListItem` will have type `OaValidationError`
 *   const error = maybeListItem;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybeListItem` will have type `ListItem`
 * const listItem = maybeListItem;
 * ```
 */
function validateListItem(maybeListItem) {
    const { value, error } = exports.ListItemJoiSchema.validate(maybeListItem);
    if (error) {
        return new oaValidationError_1.OaValidationError('ListItem', maybeListItem, error);
    }
    /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
    to have the right type. Therefore, we just cast it to the right type. */
    return value;
}
exports.validateListItem = validateListItem;
