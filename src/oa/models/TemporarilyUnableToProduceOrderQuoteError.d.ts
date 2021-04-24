/**
 *
 *
 *
 * Error Use Case: The Booking System is unable for technical reasons to produce an `OrderQuote` where the data provided to it is sufficient to allow it to do so.
 *
 *
 *
 * This type is derived from https://schema.org/Thing, which means that any of this type's properties within schema.org may also be used.
 */
export const TemporarilyUnableToProduceOrderQuoteError: import("@imin/speck/lib/types").ObjectSpeck<{
    '@type': "TemporarilyUnableToProduceOrderQuoteError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}, {
    '@type': "TemporarilyUnableToProduceOrderQuoteError";
} & {
    name?: string | undefined;
    description?: string | undefined;
    instance?: string | undefined;
    requestId?: string | undefined;
    statusCode?: number | undefined;
}>;
