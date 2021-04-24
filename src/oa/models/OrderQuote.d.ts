/**
 *
 * This type is derived from https://schema.org/Order, which means that any of this type's properties within schema.org may also be used.
 */
export const OrderQuote: import("@imin/speck/lib/types").ObjectSpeck<{
    '@type': "OrderQuote";
} & {
    identifier?: string | undefined;
    '@id'?: string | undefined;
    bookingService?: any;
    broker?: any;
    brokerRole?: any;
    customer?: any;
    lease?: any;
    orderCreationStatus?: any;
    orderedItem?: any[] | undefined;
    orderNumber?: string | undefined;
    orderProposalVersion?: string | undefined;
    orderRequiresApproval?: boolean | undefined;
    payment?: any;
    seller?: any;
    taxCalculationExcluded?: boolean | undefined;
    totalPaymentDue?: any;
    totalPaymentTax?: any[] | undefined;
}, {
    '@type': "OrderQuote";
} & {
    identifier?: string | undefined;
    '@id'?: string | undefined;
    bookingService?: any;
    broker?: any;
    brokerRole?: any;
    customer?: any;
    lease?: any;
    orderCreationStatus?: any;
    orderedItem?: any[] | undefined;
    orderNumber?: string | undefined;
    orderProposalVersion?: string | undefined;
    orderRequiresApproval?: boolean | undefined;
    payment?: any;
    seller?: any;
    taxCalculationExcluded?: boolean | undefined;
    totalPaymentDue?: any;
    totalPaymentTax?: any[] | undefined;
}>;
