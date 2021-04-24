/**
 *
 *
 *
 * Error Use Case: `OrderItem` errors would have been generated at C2 given the same set of `OrderItem`s. The Broker is expected to retry C2 to retrieve such errors.  This error MUST only be used as a response from P or B.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
export const UnableToProcessOrderItemError: import("@imin/speck/lib/types").ObjectSpeck<{
    '@type': "UnableToProcessOrderItemError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}, {
    '@type': "UnableToProcessOrderItemError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}>;
