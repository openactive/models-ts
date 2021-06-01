"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// This file was generated using the booking_spec_examples/b_request_example_1.json example from @openactive/data-models
const chai_1 = require("chai");
const __1 = require("../..");
describe('data-models example - booking_spec_examples/b_request_example_1.json', () => {
    /* Because the tests are also checked by `tsc`, this declaration acts as a test to ensure that the generated type
    correctly identifies this valid example */
    const example = {
        "@context": "https://openactive.io/",
        "@type": "Order",
        "brokerRole": "https://openactive.io/AgentBroker",
        "broker": {
            "@type": "Organization",
            "name": "MyFitnessApp",
            "url": "https://myfitnessapp.example.com",
            "description": "A fitness app for all the community",
            "logo": {
                "@type": "ImageObject",
                "url": "http://data.myfitnessapp.org.uk/images/logo.png"
            },
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Alan Peacock Way",
                "addressLocality": "Village East",
                "addressRegion": "Middlesbrough",
                "postalCode": "TS4 3AE",
                "addressCountry": "GB"
            }
        },
        "seller": {
            "@type": "Organization",
            "@id": "https://example.com/api/organisations/123"
        },
        "customer": {
            "@type": "Person",
            "email": "geoffcapes@example.com",
            "telephone": "020 811 8055",
            "givenName": "Geoff",
            "familyName": "Capes"
        },
        "orderedItem": [
            {
                "@type": "OrderItem",
                "position": 0,
                "acceptedOffer": {
                    "@type": "Offer",
                    "@id": "https://example.com/events/452#/offers/878"
                },
                "orderedItem": {
                    "@type": "ScheduledSession",
                    "@id": "https://example.com/events/452/subEvents/132"
                }
            }
        ],
        "totalPaymentDue": {
            "@type": "PriceSpecification",
            "price": 5,
            "priceCurrency": "GBP"
        },
        "payment": {
            "@type": "Payment",
            "name": "AcmeBroker Points",
            "identifier": "1234567890npduy2f"
        }
    };
    it('should validate correctly', () => {
        const result = __1.validateOrder(example);
        chai_1.expect(result).to.not.be.an.instanceof(__1.OaValidationError);
    });
});
