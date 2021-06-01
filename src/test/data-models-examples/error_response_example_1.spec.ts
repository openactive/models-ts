// This file was generated using the booking_spec_examples/error_response_example_1.json example from @openactive/data-models
import { expect } from 'chai';
import { IncompleteBrokerDetailsError, validateIncompleteBrokerDetailsError, OaValidationError } from '../..';

describe('data-models example - booking_spec_examples/error_response_example_1.json', () => {
  /* Because the tests are also checked by `tsc`, this declaration acts as a test to ensure that the generated type
  correctly identifies this valid example */
  const example: IncompleteBrokerDetailsError = {
  "@context": "https://openactive.io/",
  "@type": "IncompleteBrokerDetailsError",
  "description": "Only 'https://openactive.io/CustomerRejected' is permitted for this property."
};

  it('should validate correctly', () => {
    const result = validateIncompleteBrokerDetailsError(example);
    expect(result).to.not.be.an.instanceof(OaValidationError);
  });
});
