/**
 *
 *
 *
 * Error Use Case: The Booking System has no `Order` matching the one requested.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
export const UnknownOrderError: import("@imin/speck/lib/types").ObjectSpeck<{
    '@type': "UnknownOrderError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}, {
    '@type': "UnknownOrderError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}>;
