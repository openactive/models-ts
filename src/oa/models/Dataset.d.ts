/**
 *
 *
 *
 * EARLY RELEASE NOTICE: This class represents a draft that is designed to inform the OpenActive specification work with implementation feedback. It is mostly stable, as it based almost entirely on schema.org. HOWEVER, IT IS STILL SUBJECT TO CHANGE, as the [Dataset API Discovery specification](https://openactive.io/dataset-api-discovery/EditorsDraft/) evolves.
 *
 *
 *
 * This type is derived from https://schema.org/Dataset, which means that any of this type's properties within schema.org may also be used.
 */
export const Dataset: import("@imin/speck/lib/types").ObjectSpeck<{
    '@type': "Dataset";
} & {
    name?: string | undefined;
    description?: string | undefined;
    '@id'?: string | undefined;
    accessService?: any;
    backgroundImage?: any;
    bookingService?: any;
    dateModified?: string | undefined;
    datePublished?: string | undefined;
    discussionUrl?: string | undefined;
    distribution?: any[] | undefined;
    documentation?: string | undefined;
    inLanguage?: string[] | undefined;
    keywords?: string[] | undefined;
    license?: string | undefined;
    publisher?: any;
    schemaVersion?: string | undefined;
    url?: string | undefined;
}, {
    '@type': "Dataset";
} & {
    name?: string | undefined;
    description?: string | undefined;
    '@id'?: string | undefined;
    accessService?: any;
    backgroundImage?: any;
    bookingService?: any;
    dateModified?: string | undefined;
    datePublished?: string | undefined;
    discussionUrl?: string | undefined;
    distribution?: any[] | undefined;
    documentation?: string | undefined;
    inLanguage?: string[] | undefined;
    keywords?: string[] | undefined;
    license?: string | undefined;
    publisher?: any;
    schemaVersion?: string | undefined;
    url?: string | undefined;
}>;
