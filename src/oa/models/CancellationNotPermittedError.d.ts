/**
 *
 *
 *
 * Error Use Case: Cancellation is not permitted due to internal rules of the Booking System not otherwise exposed to the Broker.  The `description` property of the object MUST include a Customer-facing description of the reason that cancellation is not permitted.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
export const CancellationNotPermittedError: import("@imin/speck/lib/types").ObjectSpeck<{
    '@type': "CancellationNotPermittedError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}, {
    '@type': "CancellationNotPermittedError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}>;
