// This file was generated using the booking_spec_examples/orderproposal_patch_example_1.json example from @openactive/data-models
import { expect } from 'chai';
import { OrderProposal, validateOrderProposal, OaValidationError } from '../..';

describe('data-models example - booking_spec_examples/orderproposal_patch_example_1.json', () => {
  /* Because the tests are also checked by `tsc`, this declaration acts as a test to ensure that the generated type
  correctly identifies this valid example */
  const example: OrderProposal = {
  "@context": "https://openactive.io/",
  "@type": "OrderProposal",
  "orderProposalStatus": "https://openactive.io/CustomerRejected",
  "orderCustomerNote": "Sorry I've actually made other plans, hope you find someone!"
};

  it('should validate correctly', () => {
    const result = validateOrderProposal(example);
    expect(result).to.not.be.an.instanceof(OaValidationError);
  });
});
