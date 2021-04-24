/**
 *
 * This type is derived from https://pending.schema.org/Schedule.
 */
export const Schedule: import("@imin/speck/lib/types").ObjectSpeck<{
    '@type': "Schedule";
} & {
    byDay?: any[] | string[] | undefined;
    byMonth?: number[] | undefined;
    byMonthDay?: number[] | undefined;
    duration?: string | undefined;
    endTime?: string | undefined;
    exceptDate?: string[] | undefined;
    idTemplate?: string | undefined;
    repeatCount?: number | undefined;
    repeatFrequency?: string | undefined;
    scheduledEventType?: string | undefined;
    scheduleTimezone?: string | undefined;
    startDate?: string | undefined;
    endDate?: string | undefined;
    startTime?: string | undefined;
    urlTemplate?: string | undefined;
    timeZone?: string | undefined;
}, {
    '@type': "Schedule";
} & {
    byDay?: any[] | string[] | undefined;
    byMonth?: number[] | undefined;
    byMonthDay?: number[] | undefined;
    duration?: string | undefined;
    endTime?: string | undefined;
    exceptDate?: string[] | undefined;
    idTemplate?: string | undefined;
    repeatCount?: number | undefined;
    repeatFrequency?: string | undefined;
    scheduledEventType?: string | undefined;
    scheduleTimezone?: string | undefined;
    startDate?: string | undefined;
    endDate?: string | undefined;
    startTime?: string | undefined;
    urlTemplate?: string | undefined;
    timeZone?: string | undefined;
}>;
