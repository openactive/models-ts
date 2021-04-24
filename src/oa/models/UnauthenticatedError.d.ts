/**
 *
 *
 *
 * Error Use Case: The Broker did not supply any form of authentication.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
export const UnauthenticatedError: import("@imin/speck/lib/types").ObjectSpeck<{
    '@type': "UnauthenticatedError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}, {
    '@type': "UnauthenticatedError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}>;
