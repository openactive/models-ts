/**
 *
 *
 *
 * Error Use Case: The `payment` property of the `Order` does not include `identifier`.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
export const IncompletePaymentDetailsError: import("@imin/speck/lib/types").ObjectSpeck<{
    '@type': "IncompletePaymentDetailsError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}, {
    '@type': "IncompletePaymentDetailsError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}>;
