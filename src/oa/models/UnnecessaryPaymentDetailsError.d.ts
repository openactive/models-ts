/**
 *
 *
 *
 * Error Use Case: The `payment` property of the `Order` is provided when it is expected to be absent.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
export const UnnecessaryPaymentDetailsError: import("@imin/speck/lib/types").ObjectSpeck<{
    '@type': "UnnecessaryPaymentDetailsError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}, {
    '@type': "UnnecessaryPaymentDetailsError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}>;
