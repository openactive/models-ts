"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// This file was generated using the booking_spec_examples/orderproposal_patch_example_1.json example from @openactive/data-models
const chai_1 = require("chai");
const __1 = require("../..");
describe('data-models example - booking_spec_examples/orderproposal_patch_example_1.json', () => {
    /* Because the tests are also checked by `tsc`, this declaration acts as a test to ensure that the generated type
    correctly identifies this valid example */
    const example = {
        "@context": "https://openactive.io/",
        "@type": "OrderProposal",
        "orderProposalStatus": "https://openactive.io/CustomerRejected",
        "orderCustomerNote": "Sorry I've actually made other plans, hope you find someone!"
    };
    it('should validate correctly', () => {
        const result = __1.validateOrderProposal(example);
        chai_1.expect(result).to.not.be.an.instanceof(__1.OaValidationError);
    });
});
