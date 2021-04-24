
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 * 
 * 
 * 
 * Error Use Case: The Order UUID used for an `OrderQuote` already represents a completed `Order` with a different set of `OrderItem`s to those specified (note call to B is idempotent for the case where `OrderItem`s match). This happens in the rare event of a Order UUID clash.
 * 
 * 
 * 
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
const OrderAlreadyExistsError = s.intersection([
  s.type({'@type': s.literal('OrderAlreadyExistsError')}),
  s.partial({
      /**
      * A short, human-readable summary of the problem type. It should not change from occurrence to occurrence of the problem, except for purposes of localization.
      *
      * ```json
      * "name": "The Order UUID used for an 'OrderQuote' already represents a completed 'Order' with a different set of 'OrderItem's to those specified (note call to B is idempotent for the case where 'OrderItem's match). This happens in the rare event of a Order UUID clash."
      * ```
      */
      name: s.string,
      /**
      * A plain-text human-readable explanation specific to this occurrence of the problem, providing specific information about why the error occurred in this particular case. This description must not include HTML or other markup.
      *
      * ```json
      * "description": "No customer details supplied. These must be supplied for calls to C2, P, and B."
      * ```
      */
      description: s.string,
      /**
      * A URI reference that identifies the specific occurrence of the problem. It may or may not yield further information if dereferenced.
      */
      instance: s.urlString,
      /**
      * Used by technical support for diagnostics purposes.
      */
      requestId: s.string,
      /**
      * Must always be present and set to ```json
      * "statusCode": 500
      * ```
      */
      statusCode: s.nonNegativeInt,
  })
])

module.exports = {
  OrderAlreadyExistsError,
};