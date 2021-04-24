/**
 *
 *
 *
 * Error Use Case: There is a missing `acceptedOffer` or `orderedItem` property on the `OrderItem`.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
export const IncompleteOrderItemError: import("@imin/speck/lib/types").ObjectSpeck<{
    '@type': "IncompleteOrderItemError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}, {
    '@type': "IncompleteOrderItemError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}>;
