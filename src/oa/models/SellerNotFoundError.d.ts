/**
 *
 *
 *
 * Error Use Case: The `@id` of the `seller` included in the request was not found within the Booking System.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
export const SellerNotFoundError: import("@imin/speck/lib/types").ObjectSpeck<{
    '@type': "SellerNotFoundError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}, {
    '@type': "SellerNotFoundError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}>;
