/**
 *
 *
 *
 * Error Use Case: The Broker supplied an invalid set of authorization details, either malformed or expired.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
export const InvalidAuthorizationDetailsError: import("@imin/speck/lib/types").ObjectSpeck<{
    '@type': "InvalidAuthorizationDetailsError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}, {
    '@type': "InvalidAuthorizationDetailsError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}>;
