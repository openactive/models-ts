/**
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
export const DynamicPayment: import("@imin/speck/lib/types").ObjectSpeck<{
    '@type': "DynamicPayment";
} & {
    identifier?: string | undefined;
    name?: string | undefined;
    accountId?: string | undefined;
    additionalProperty?: any[] | undefined;
    paymentMethod?: any;
    paymentProviderId?: string | undefined;
}, {
    '@type': "DynamicPayment";
} & {
    identifier?: string | undefined;
    name?: string | undefined;
    accountId?: string | undefined;
    additionalProperty?: any[] | undefined;
    paymentMethod?: any;
    paymentProviderId?: string | undefined;
}>;
