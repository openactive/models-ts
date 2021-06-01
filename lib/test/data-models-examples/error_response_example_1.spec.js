"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// This file was generated using the booking_spec_examples/error_response_example_1.json example from @openactive/data-models
const chai_1 = require("chai");
const __1 = require("../..");
describe('data-models example - booking_spec_examples/error_response_example_1.json', () => {
    /* Because the tests are also checked by `tsc`, this declaration acts as a test to ensure that the generated type
    correctly identifies this valid example */
    const example = {
        "@context": "https://openactive.io/",
        "@type": "IncompleteBrokerDetailsError",
        "description": "Only 'https://openactive.io/CustomerRejected' is permitted for this property."
    };
    it('should validate correctly', () => {
        const result = __1.validateIncompleteBrokerDetailsError(example);
        chai_1.expect(result).to.not.be.an.instanceof(__1.OaValidationError);
    });
});
