/**
 *
 *
 *
 * Error Use Case: The `payment` property of the `OrderQuote` or `Order` contains data that is not accepted by the Booking System for reconciliation, e.g. an invalid `accountId`.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
export const InvalidPaymentDetailsError: import("@imin/speck/lib/types").ObjectSpeck<{
    '@type': "InvalidPaymentDetailsError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}, {
    '@type': "InvalidPaymentDetailsError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}>;
