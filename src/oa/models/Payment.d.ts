/**
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
export const Payment: import("@imin/speck/lib/types").ObjectSpeck<{
    '@type': "Payment";
} & {
    identifier?: string | undefined;
    name?: string | undefined;
    accountId?: string | undefined;
    additionalProperty?: any[] | undefined;
    paymentMethod?: any;
    paymentProviderId?: string | undefined;
}, {
    '@type': "Payment";
} & {
    identifier?: string | undefined;
    name?: string | undefined;
    accountId?: string | undefined;
    additionalProperty?: any[] | undefined;
    paymentMethod?: any;
    paymentProviderId?: string | undefined;
}>;
