/**
 *
 *
 *
 * Error Use Case: The `attendeeDetailsRequired` properties of the `attendee` are not supplied within a `Person` object.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
export const IncompleteAttendeeDetailsError: import("@imin/speck/lib/types").ObjectSpeck<{
    '@type': "IncompleteAttendeeDetailsError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}, {
    '@type': "IncompleteAttendeeDetailsError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}>;
