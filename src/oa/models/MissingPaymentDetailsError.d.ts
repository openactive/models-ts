/**
 *
 *
 *
 * Error Use Case: The `payment` property of the `Order` is absent when it is expected to be provided.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
export const MissingPaymentDetailsError: import("@imin/speck/lib/types").ObjectSpeck<{
    '@type': "MissingPaymentDetailsError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}, {
    '@type': "MissingPaymentDetailsError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}>;
