/**
 *
 *
 *
 * Error Use Case: The `orderItemIntakeFormResponse` is missing fields that are specified as `valueRequired` within the `orderItemIntakeForm`.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
export const IncompleteIntakeFormError: import("@imin/speck/lib/types").ObjectSpeck<{
    '@type': "IncompleteIntakeFormError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}, {
    '@type': "IncompleteIntakeFormError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}>;
