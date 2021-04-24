/**
 *
 *
 *
 * Error Use Case: B failed due to a newer version of the `OrderProposal` existing than that specified by the Broker in `orderProposalVersion`.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
export const OrderProposalVersionOutdatedError: import("@imin/speck/lib/types").ObjectSpeck<{
    '@type': "OrderProposalVersionOutdatedError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}, {
    '@type': "OrderProposalVersionOutdatedError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}>;
