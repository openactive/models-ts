/**
 *
 *
 *
 * Error Use Case: The `@id` provided for the `orderedItem` or `acceptedOffer` does not match a recognised URL format within the Booking System.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
export const InvalidOpportunityOrOfferIdError: import("@imin/speck/lib/types").ObjectSpeck<{
    '@type': "InvalidOpportunityOrOfferIdError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}, {
    '@type': "InvalidOpportunityOrOfferIdError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}>;
