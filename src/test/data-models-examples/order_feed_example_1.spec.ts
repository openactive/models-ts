// This file was generated using the booking_spec_examples/order_feed_example_1.json example from @openactive/data-models
import { expect } from 'chai';
import { Order, validateOrder, OaValidationError } from '../..';

describe('data-models example - booking_spec_examples/order_feed_example_1.json', () => {
  /* Because the tests are also checked by `tsc`, this declaration acts as a test to ensure that the generated type
  correctly identifies this valid example */
  const example: Order = {
  "@context": "https://openactive.io/",
  "@type": "Order",
  "@id": "https://example.com/api/orders/e11429ea-467f-4270-ab62-e47368996fe8",
  "identifier": "e11429ea-467f-4270-ab62-e47368996fe8",
  "orderedItem": [
    {
      "@type": "OrderItem",
      "@id": "https://example.com/api/orders/e11429ea-467f-4270-ab62-e47368996fe8#/orderedItem/1234",
      "orderItemStatus": "https://openactive.io/OrderItemConfirmed",
      "unitTaxSpecification": [
        {
          "@type": "TaxChargeSpecification",
          "name": "VAT at 20%",
          "price": 1,
          "priceCurrency": "GBP",
          "rate": 0.2
        }
      ],
      "acceptedOffer": {
        "@type": "Offer",
        "@id": "https://example.com/events/452#/offers/878",
        "description": "Winger space for Speedball.",
        "name": "Speedball winger position",
        "price": 10,
        "priceCurrency": "GBP",
        "validFromBeforeStartDate": "P6D",
        "allowCustomerCancellationFullRefund": true,
        "latestCancellationBeforeStartDate": "P1D"
      },
      "orderedItem": {
        "@type": "ScheduledSession",
        "@id": "https://example.com/events/452/subEvents/132"
      },
      "accessPass": [
        {
          "@type": "Barcode",
          "text": "0123456789"
        }
      ]
    }
  ],
  "totalPaymentDue": {
    "@type": "PriceSpecification",
    "price": 5,
    "priceCurrency": "GBP"
  },
  "totalPaymentTax": [
    {
      "@type": "TaxChargeSpecification",
      "name": "VAT at 20%",
      "price": 1,
      "priceCurrency": "GBP",
      "rate": 0.2
    }
  ]
};

  it('should validate correctly', () => {
    const result = validateOrder(example);
    expect(result).to.not.be.an.instanceof(OaValidationError);
  });
});
