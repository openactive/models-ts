/**
 *
 *
 *
 * Error Use Case: The `@id` provided for the `acceptedOffer` is not a URL which corresponds to an applicable `Offer` for the Opportunity.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
export const UnacceptableOfferError: import("@imin/speck/lib/types").ObjectSpeck<{
    '@type': "UnacceptableOfferError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}, {
    '@type': "UnacceptableOfferError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}>;
