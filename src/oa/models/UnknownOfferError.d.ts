/**
 *
 *
 *
 * Error Use Case: The `@id` provided for the `acceptedOffer` is not a URL which corresponds to an `Offer` within the Booking System.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
export const UnknownOfferError: import("@imin/speck/lib/types").ObjectSpeck<{
    '@type': "UnknownOfferError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}, {
    '@type': "UnknownOfferError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}>;
