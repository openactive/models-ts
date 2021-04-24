/**
 *
 *
 *
 * Error Use Case: The Booking System recognises a PATCH request but the request object contains one or many properties that the Broker is not permitted to update to the requested value.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
export const PatchNotAllowedOnPropertyError: import("@imin/speck/lib/types").ObjectSpeck<{
    '@type': "PatchNotAllowedOnPropertyError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}, {
    '@type': "PatchNotAllowedOnPropertyError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}>;
