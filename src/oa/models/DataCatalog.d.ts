/**
 *
 *
 *
 * EARLY RELEASE NOTICE: This class represents a draft that is designed to inform the OpenActive specification work with implementation feedback. It is mostly stable, as it based entirely on schema.org. HOWEVER, IT IS STILL SUBJECT TO CHANGE, as the [Dataset API Discovery specification](https://openactive.io/dataset-api-discovery/EditorsDraft/) evolves.
 *
 *
 *
 * This type is derived from https://schema.org/DataCatalog, which means that any of this type's properties within schema.org may also be used.
 */
export const DataCatalog: import("@imin/speck/lib/types").ObjectSpeck<{
    '@type': "DataCatalog";
} & {
    name?: string | undefined;
    '@id'?: string | undefined;
    dataset?: string[] | undefined;
    dateModified?: string | undefined;
    datePublished?: string | undefined;
    hasPart?: string[] | undefined;
    license?: string | undefined;
    publisher?: any;
}, {
    '@type': "DataCatalog";
} & {
    name?: string | undefined;
    '@id'?: string | undefined;
    dataset?: string[] | undefined;
    dateModified?: string | undefined;
    datePublished?: string | undefined;
    hasPart?: string[] | undefined;
    license?: string | undefined;
    publisher?: any;
}>;
