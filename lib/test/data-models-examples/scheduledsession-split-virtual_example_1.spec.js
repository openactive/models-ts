"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// This file was generated using the scheduledsession-split-virtual_example_1.json example from @openactive/data-models
const chai_1 = require("chai");
const __1 = require("../..");
describe('data-models example - scheduledsession-split-virtual_example_1.json', () => {
    /* Because the tests are also checked by `tsc`, this declaration acts as a test to ensure that the generated type
    correctly identifies this valid example */
    const example = {
        "@context": [
            "https://openactive.io/",
            "https://openactive.io/ns-beta"
        ],
        "@type": "ScheduledSession",
        "@id": "https://opensessions.io/api/session-series/1402CBP20150217#/subEvent/C5EE1E55-2DE6-44F7-A865-42F268A82C63",
        "identifier": "C5EE1E55-2DE6-44F7-A865-42F268A82C63",
        "superEvent": "https://opensessions.io/api/session-series/1402CBP20150217",
        "startDate": "2016-05-09T18:15:00Z",
        "endDate": "2016-05-09T19:15:00Z",
        "duration": "PT1H",
        "eventStatus": "https://schema.org/EventScheduled",
        "maximumAttendeeCapacity": 10,
        "maximumVirtualAttendeeCapacity": 20,
        "remainingAttendeeCapacity": 0,
        "url": "https://bookwhen.com/hulafit/e/ev-ssyp-20160510011500?r=oa",
        "beta:virtualLocation": {
            "@type": "VirtualLocation",
            "name": "Zoom Video Chat",
            "url": "https://zoom.us/j/1234567890/signup",
            "description": "Please log into Zoom a few minutes before the event, and mute your mic while you wait for the session to start"
        }
    };
    it('should validate correctly', () => {
        const result = __1.validateScheduledSession(example);
        chai_1.expect(result).to.not.be.an.instanceof(__1.OaValidationError);
    });
});
