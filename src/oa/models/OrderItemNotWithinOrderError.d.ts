/**
 *
 *
 *
 * Error Use Case: The Order UUID for at least one provided `OrderItem` does not match the Order UUID of the `Order` being PATCHed.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
export const OrderItemNotWithinOrderError: import("@imin/speck/lib/types").ObjectSpeck<{
    '@type': "OrderItemNotWithinOrderError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}, {
    '@type': "OrderItemNotWithinOrderError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}>;
