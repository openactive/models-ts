/**
 *
 *
 *
 * Error Use Case: The Booking System is unable for technical reasons to create an `Order` where the data provided to it is sufficient to allow it to do so.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
export const TemporarilyUnableToCreateOrderError: import("@imin/speck/lib/types").ObjectSpeck<{
    '@type': "TemporarilyUnableToCreateOrderError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}, {
    '@type': "TemporarilyUnableToCreateOrderError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}>;
