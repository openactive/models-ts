"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// This file was generated using the booking_spec_examples/c2_response_example_1.json example from @openactive/data-models
const chai_1 = require("chai");
const __1 = require("../..");
describe('data-models example - booking_spec_examples/c2_response_example_1.json', () => {
    /* Because the tests are also checked by `tsc`, this declaration acts as a test to ensure that the generated type
    correctly identifies this valid example */
    const example = {
        "@context": "https://openactive.io/",
        "@type": "OrderQuote",
        "@id": "https://example.com/api/order-quotes/e11429ea-467f-4270-ab62-e47368996fe8",
        "orderRequiresApproval": false,
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
            "@id": "https://example.com/api/organisations/123",
            "identifier": "CRUOZWJ1",
            "name": "Better",
            "taxMode": "https://openactive.io/TaxGross",
            "legalName": "Greenwich Leisure Limited",
            "description": "A charitable social enterprise for all the community",
            "url": "https://www.better.org.uk",
            "logo": {
                "@type": "ImageObject",
                "url": "http://data.better.org.uk/images/logo.png"
            },
            "telephone": "020 3457 8700",
            "email": "customerservices@gll.org",
            "vatID": "GB 789 1234 56",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Alan Peacock Way",
                "addressLocality": "Village East",
                "addressRegion": "Middlesbrough",
                "postalCode": "TS4 3AE",
                "addressCountry": "GB"
            },
            "termsOfService": [
                {
                    "@type": "PrivacyPolicy",
                    "name": "Privacy Policy",
                    "url": "https://example.com/privacy-policy",
                    "requiresExplicitConsent": false
                },
                {
                    "@type": "TermsOfUse",
                    "name": "Terms and Conditions",
                    "url": "https://example.com/terms-and-conditions",
                    "dateModified": "2019-04-16T20:31:13Z",
                    "requiresExplicitConsent": true
                }
            ]
        },
        "customer": {
            "@type": "Person",
            "email": "geoffcapes@example.com",
            "telephone": "020 811 8055",
            "givenName": "Geoff",
            "familyName": "Capes"
        },
        "bookingService": {
            "@type": "BookingService",
            "name": "Playwaze",
            "url": "http://www.playwaze.com",
            "termsOfService": [
                {
                    "@type": "Terms",
                    "name": "Terms of Service",
                    "url": "https://brokerexample.com/terms.html",
                    "requiresExplicitConsent": false
                }
            ]
        },
        "lease": {
            "@type": "Lease",
            "leaseExpires": "2018-10-01T11:00:00Z"
        },
        "orderedItem": [
            {
                "@type": "OrderItem",
                "position": 0,
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
                    "@id": "https://example.com/events/452/subEvents/132",
                    "identifier": 123,
                    "eventStatus": "https://schema.org/EventScheduled",
                    "maximumAttendeeCapacity": 30,
                    "remainingAttendeeCapacity": 20,
                    "startDate": "2018-10-30T11:00:00Z",
                    "endDate": "2018-10-30T12:00:00Z",
                    "duration": "PT1H",
                    "superEvent": {
                        "@type": "SessionSeries",
                        "@id": "https://api.example.com/events/452",
                        "name": "Bodypump",
                        "activity": [
                            {
                                "@type": "Concept",
                                "@id": "https://openactive.io/activity-list#5e78bcbe-36db-425a-9064-bf96d09cc351",
                                "prefLabel": "Bodypump™",
                                "inScheme": "https://openactive.io/activity-list"
                            }
                        ],
                        "duration": "PT1H",
                        "url": "https://example.com/events/452",
                        "location": {
                            "@type": "Place",
                            "url": "https://www.everyoneactive.com/centres/Middlesbrough-Sports-Village",
                            "name": "Middlesbrough Sports Village",
                            "identifier": "0140",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Alan Peacock Way",
                                "addressLocality": "Village East",
                                "addressRegion": "Middlesbrough",
                                "postalCode": "TS4 3AE",
                                "addressCountry": "GB"
                            },
                            "geo": {
                                "@type": "GeoCoordinates",
                                "latitude": 54.543964,
                                "longitude": -1.20978500000001
                            }
                        }
                    }
                }
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
        const result = __1.validateOrderQuote(example);
        chai_1.expect(result).to.not.be.an.instanceof(__1.OaValidationError);
    });
});
