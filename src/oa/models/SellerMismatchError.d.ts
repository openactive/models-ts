/**
 *
 *
 *
 * Error Use Case: At least one of the `OrderItem`s did not match the specified `seller`.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
export const SellerMismatchError: import("@imin/speck/lib/types").ObjectSpeck<{
    '@type': "SellerMismatchError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}, {
    '@type': "SellerMismatchError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}>;
