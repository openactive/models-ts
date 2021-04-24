
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 * 
 * 
 * 
 * Error Use Case: The available capacity required to book a specific Opportunity is reserved by a lease held by another Customer.  If the `OrderItem` is repeated (for multiple attendees) this error MUST only be included in the API response against the `OrderItem`s which are in excess of the capacity but which are reserved by the lease of another Customer - for example in an Opportunity with a `remainingAttendeeCapacity` of 3, with 1 additional space held by another lease, then for an `OrderQuote` with 9 `OrderItem`s related to it, this error would only be emitted against 1 of the `OrderItem`s, with `OpportunityHasInsufficientCapacityError` emitted against the other 5 of the `OrderItem`s. This helps a Customer to know whether they should try again.
 * 
 * 
 * 
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
const OpportunityCapacityIsReservedByLeaseError = s.intersection([
  s.type({'@type': s.literal('OpportunityCapacityIsReservedByLeaseError')}),
  s.partial({
      /**
      * A short, human-readable summary of the problem type. It should not change from occurrence to occurrence of the problem, except for purposes of localization.
      *
      * ```json
      * "name": "The available capacity required to book a specific Opportunity is reserved by a lease held by another Customer."
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
      * "statusCode": 409
      * ```
      */
      statusCode: s.nonNegativeInt,
  })
])

module.exports = {
  OpportunityCapacityIsReservedByLeaseError,
};