/**
 *
 *
 *
 * Error Use Case: The `@id` of at least one of the provided `OrderItem`s is invalid.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
export const OrderItemIdInvalidError: import("@imin/speck/lib/types").ObjectSpeck<{
    '@type': "OrderItemIdInvalidError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}, {
    '@type': "OrderItemIdInvalidError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}>;
