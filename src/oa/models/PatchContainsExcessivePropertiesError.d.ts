/**
 *
 *
 *
 * Error Use Case: The Booking System recognises a PATCH request but the request object contains properties that the Broker is not permitted to update. Custom namespace properties are always excluded from consideration.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
export const PatchContainsExcessivePropertiesError: import("@imin/speck/lib/types").ObjectSpeck<{
    '@type': "PatchContainsExcessivePropertiesError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}, {
    '@type': "PatchContainsExcessivePropertiesError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}>;
