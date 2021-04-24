/**
 *
 *
 *
 * Error Use Case: The Booking System is rate-limiting the Broker.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
export const TooManyRequestsError: import("@imin/speck/lib/types").ObjectSpeck<{
    '@type': "TooManyRequestsError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}, {
    '@type': "TooManyRequestsError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}>;
