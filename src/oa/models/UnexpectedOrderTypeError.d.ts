/**
 *
 *
 *
 * Error Use Case: The `@type` of the JSON-LD object submitted to the endpoint did not match the expected `@type`, as defined in the Open Booking API specification.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
export const UnexpectedOrderTypeError: import("@imin/speck/lib/types").ObjectSpeck<{
    '@type': "UnexpectedOrderTypeError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}, {
    '@type': "UnexpectedOrderTypeError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}>;
