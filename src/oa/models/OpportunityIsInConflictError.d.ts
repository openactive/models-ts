/**
 *
 *
 *
 * Error Use Case: The specific `OrderItem`s against which this error is emitted are not able to be booked together.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
export const OpportunityIsInConflictError: import("@imin/speck/lib/types").ObjectSpeck<{
    '@type': "OpportunityIsInConflictError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}, {
    '@type': "OpportunityIsInConflictError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}>;
