/**
 *
 *
 *
 * Error Use Case: The `totalPaymentDue` property of the submitted `Order` or `OrderProposal` does not match the value calculated for that `Order` or `OrderProposal` by the Booking System.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
export const TotalPaymentDueMismatchError: import("@imin/speck/lib/types").ObjectSpeck<{
    '@type': "TotalPaymentDueMismatchError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}, {
    '@type': "TotalPaymentDueMismatchError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}>;
