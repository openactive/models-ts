/**
 *
 * This type is derived from https://schema.org/Place, which means that any of this type's properties within schema.org may also be used.
 */
export const Place: import("@imin/speck/lib/types").ObjectSpeck<{
    '@type': "Place";
} & {
    identifier?: any;
    name?: string | undefined;
    description?: string | undefined;
    '@id'?: string | undefined;
    address?: any;
    amenityFeature?: any[] | undefined;
    containedInPlace?: any;
    containsPlace?: any[] | undefined;
    geo?: any;
    image?: any[] | undefined;
    openingHoursSpecification?: any[] | undefined;
    specialOpeningHoursSpecification?: any[] | undefined;
    telephone?: string | undefined;
    url?: string | undefined;
    formattedDescription?: string | undefined;
}, {
    '@type': "Place";
} & {
    identifier?: any;
    name?: string | undefined;
    description?: string | undefined;
    '@id'?: string | undefined;
    address?: any;
    amenityFeature?: any[] | undefined;
    containedInPlace?: any;
    containsPlace?: any[] | undefined;
    geo?: any;
    image?: any[] | undefined;
    openingHoursSpecification?: any[] | undefined;
    specialOpeningHoursSpecification?: any[] | undefined;
    telephone?: string | undefined;
    url?: string | undefined;
    formattedDescription?: string | undefined;
}>;
