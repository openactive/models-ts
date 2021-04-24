/**
 *
 *
 *
 * Error Use Case: A generic internal error type, which is not intended to be used directly.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
export const InternalOpenBookingError: import("@imin/speck/lib/types").ObjectSpeck<{
    '@type': "InternalOpenBookingError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}, {
    '@type': "InternalOpenBookingError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}>;
