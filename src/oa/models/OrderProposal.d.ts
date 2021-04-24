/**
 *
 * This type is derived from https://schema.org/Order, which means that any of this type's properties within schema.org may also be used.
 */
export const OrderProposal: import("@imin/speck/lib/types").ObjectSpeck<{
    '@type': "OrderProposal";
} & {
    identifier?: string | undefined;
    '@id'?: string | undefined;
    bookingService?: any;
    broker?: any;
    brokerRole?: any;
    customer?: any;
    lease?: any;
    orderCreationStatus?: any;
    orderCustomerNote?: string | undefined;
    orderedItem?: any[] | undefined;
    orderNumber?: string | undefined;
    orderProposalStatus?: any;
    orderProposalVersion?: string | undefined;
    orderSellerNote?: string | undefined;
    payment?: any;
    seller?: any;
    taxCalculationExcluded?: boolean | undefined;
    totalPaymentDue?: any;
    totalPaymentTax?: any[] | undefined;
}, {
    '@type': "OrderProposal";
} & {
    identifier?: string | undefined;
    '@id'?: string | undefined;
    bookingService?: any;
    broker?: any;
    brokerRole?: any;
    customer?: any;
    lease?: any;
    orderCreationStatus?: any;
    orderCustomerNote?: string | undefined;
    orderedItem?: any[] | undefined;
    orderNumber?: string | undefined;
    orderProposalStatus?: any;
    orderProposalVersion?: string | undefined;
    orderSellerNote?: string | undefined;
    payment?: any;
    seller?: any;
    taxCalculationExcluded?: boolean | undefined;
    totalPaymentDue?: any;
    totalPaymentTax?: any[] | undefined;
}>;
