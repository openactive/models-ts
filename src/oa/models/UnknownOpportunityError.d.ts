/**
 *
 *
 *
 * Error Use Case: The `@id` provided for the `orderedItem` is not a URL which corresponds to an Opportunity within the Booking System.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
export const UnknownOpportunityError: import("@imin/speck/lib/types").ObjectSpeck<{
    '@type': "UnknownOpportunityError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}, {
    '@type': "UnknownOpportunityError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}>;
