
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 * 
 * This type is derived from https://pending.schema.org/VirtualLocation.
 */
const VirtualLocation = s.intersection([
  s.type({'@type': s.literal('VirtualLocation')}),
  s.partial({
      /**
      * The name of the service that is providing remote access to the Opportunity.
      *
      * ```json
      * "name": "Zoom"
      * ```
      */
      name: s.string,
      /**
      * A plain text description of the live stream, including any instructions to join. This description must not include HTML or other markup.
      *
      * ```json
      * "description": "Please log into Zoom a few minutes before the event, and mute your mic while you wait for the session to start."
      * ```
      */
      description: s.string,
      /**
      * The password or pin required to access the `VirtualLocation` from any device, without requiring the URL, e.g. the meeting password.
      *
      * ```json
      * "accessCode": "211277"
      * ```
      */
      accessCode: s.string,
      /**
      * The identifier required to access the `VirtualLocation` from any device, without requiring the URL, e.g. the meeting ID.
      *
      * ```json
      * "accessId": "123456789"
      * ```
      */
      accessId: s.string,
      /**
      * The URL that enables remote access to the Opportunity, which should include encoded access credentials where possible.
      *
      * ```json
      * "url": "https://zoom.us/room/3fbCs0GVjgQ"
      * ```
      */
      url: s.urlString,
  })
])

module.exports = {
  VirtualLocation,
};