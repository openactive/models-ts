/**
 *
 *
 *
 * Error Use Case: The `orderItemIntakeFormResponse` contains invalid fields that do not match those specified by the `orderItemIntakeForm`.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
export const InvalidIntakeFormError: import("@imin/speck/lib/types").ObjectSpeck<{
    '@type': "InvalidIntakeFormError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}, {
    '@type': "InvalidIntakeFormError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}>;
