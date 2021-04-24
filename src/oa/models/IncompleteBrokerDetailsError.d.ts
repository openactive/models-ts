/**
 *
 *
 *
 * Error Use Case: The `name` property is not supplied within the `Organisation` object describing the Broker; or the `broker` property supplied is not a valid `Organisation` object.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
export const IncompleteBrokerDetailsError: import("@imin/speck/lib/types").ObjectSpeck<{
    '@type': "IncompleteBrokerDetailsError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}, {
    '@type': "IncompleteBrokerDetailsError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}>;
