/**
 *
 *
 *
 * Error Use Case: B failed for a reason not specified by a defined type of error in the Open Booking API specification.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
export const OrderCreationFailedError: import("@imin/speck/lib/types").ObjectSpeck<{
    '@type': "OrderCreationFailedError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}, {
    '@type': "OrderCreationFailedError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}>;
