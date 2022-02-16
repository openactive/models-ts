"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// This file was generated using the slot_example_1.json example from @openactive/data-models
const chai_1 = require("chai");
const __1 = require("../..");
describe('data-models example - slot_example_1.json', () => {
    /* Because the tests are also checked by `tsc`, this declaration acts as a test to ensure that the generated type
    correctly identifies this valid example */
    const example = {
        "@context": "https://openactive.io/",
        "@type": "Slot",
        "@id": "http://www.example.org/facility-uses/1/individual-facility-uses/1#/slots/2018-03-01T10:00:00Z",
        "facilityUse": "http://www.example.org/facility-uses/1/individual-facility-uses/1",
        "startDate": "2018-03-01T11:00:00Z",
        "endDate": "2018-03-01T11:30:00Z",
        "duration": "PT30M",
        "remainingUses": 1,
        "maximumUses": 1,
        "offers": [
            {
                "@type": "Offer",
                "name": "30 minute hire",
                "price": 10,
                "priceCurrency": "GBP",
                "url": "https://profile.everyoneactive.com/booking?Site=0140&Activities=1402CBP20150217&Culture=en-GB"
            }
        ]
    };
    it('should validate correctly', () => {
        const result = __1.validateSlot(example);
        chai_1.expect(result).to.not.be.an.instanceof(__1.OaValidationError);
    });
});
