// This file was generated using the booking_spec_examples/order_patch_example_1.json example from @openactive/data-models
import { expect } from 'chai';
import { Order, validateOrder, OaValidationError } from '../..';

describe('data-models example - booking_spec_examples/order_patch_example_1.json', () => {
  /* Because the tests are also checked by `tsc`, this declaration acts as a test to ensure that the generated type
  correctly identifies this valid example */
  const example: Order = {
  "@context": "https://openactive.io/",
  "@type": "Order",
  "orderedItem": [
    {
      "@type": "OrderItem",
      "@id": "https://example.com/api/orders/e11429ea-467f-4270-ab62-e47368996fe8#/orderedItem/1234",
      "orderItemStatus": "https://openactive.io/CustomerCancelled"
    }
  ]
};

  it('should validate correctly', () => {
    const result = validateOrder(example);
    expect(result).to.not.be.an.instanceof(OaValidationError);
  });
});
