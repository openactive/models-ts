// This file was generated using the slot_example_1.json example from @openactive/data-models
import { expect } from 'chai';
import { Slot, validateSlot, OaValidationError } from '../..';

describe('data-models example - slot_example_1.json', () => {
  /* Because the tests are also checked by `tsc`, this declaration acts as a test to ensure that the generated type
  correctly identifies this valid example */
  const example: Slot = {
  "@context": "https://openactive.io/",
  "@type": "Slot",
  "@id": "http://www.example.org/api/facility-uses/432#/event/2018-03-01T10:00:00Z",
  "facilityUse": "http://www.example.org/api/facility-uses/432",
  "startDate": "2018-03-01T11:00:00Z",
  "endDate": "2018-03-01T11:30:00Z",
  "duration": "PT30M",
  "remainingUses": 3,
  "maximumUses": 6,
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
    const result = validateSlot(example);
    expect(result).to.not.be.an.instanceof(OaValidationError);
  });
});
