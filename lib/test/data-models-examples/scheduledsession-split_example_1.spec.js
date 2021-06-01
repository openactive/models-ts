"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// This file was generated using the scheduledsession-split_example_1.json example from @openactive/data-models
const chai_1 = require("chai");
const __1 = require("../..");
describe('data-models example - scheduledsession-split_example_1.json', () => {
    /* Because the tests are also checked by `tsc`, this declaration acts as a test to ensure that the generated type
    correctly identifies this valid example */
    const example = {
        "@context": "https://openactive.io/",
        "@type": "ScheduledSession",
        "@id": "https://opensessions.io/api/session-series/1402CBP20150217#/subEvent/C5EE1E55-2DE6-44F7-A865-42F268A82C63",
        "identifier": "C5EE1E55-2DE6-44F7-A865-42F268A82C63",
        "superEvent": "https://opensessions.io/api/session-series/1402CBP20150217",
        "startDate": "2016-05-09T18:15:00Z",
        "endDate": "2016-05-09T19:15:00Z",
        "duration": "PT1H",
        "eventStatus": "https://schema.org/EventScheduled",
        "maximumAttendeeCapacity": 10,
        "remainingAttendeeCapacity": 0,
        "url": "https://bookwhen.com/hulafit/e/ev-ssyp-20160510011500?r=oa"
    };
    it('should validate correctly', () => {
        const result = __1.validateScheduledSession(example);
        chai_1.expect(result).to.not.be.an.instanceof(__1.OaValidationError);
    });
});
