// This file was generated using the booking_spec_examples/b_response_example_2_proposal.json example from @openactive/data-models
import { expect } from 'chai';
import { Order, validateOrder, OaValidationError } from '../..';

describe('data-models example - booking_spec_examples/b_response_example_2_proposal.json', () => {
  /* Because the tests are also checked by `tsc`, this declaration acts as a test to ensure that the generated type
  correctly identifies this valid example */
  const example: Order = {
  "@context": "https://openactive.io/",
  "@type": "Order",
  "orderProposalVersion": "https://example.com/api/order-proposals/e11429ea-467f-4270-ab62-e47368996fe8/versions/8eb1a6ce-3f5b-40b0-87a7-bddb4c5518bd",
  "payment": {
    "@type": "Payment",
    "name": "AcmeBroker Points",
    "identifier": "1234567890npduy2f"
  }
};

  it('should validate correctly', () => {
    const result = validateOrder(example);
    expect(result).to.not.be.an.instanceof(OaValidationError);
  });
});
