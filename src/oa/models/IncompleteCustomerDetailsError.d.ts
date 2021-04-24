/**
 *
 *
 *
 * Error Use Case: The `email` address of the Customer is not supplied within a `Person` object; or the `customer` property supplied is not a valid `Person` or `Organization` object.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
export const IncompleteCustomerDetailsError: import("@imin/speck/lib/types").ObjectSpeck<{
    '@type': "IncompleteCustomerDetailsError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}, {
    '@type': "IncompleteCustomerDetailsError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}>;
