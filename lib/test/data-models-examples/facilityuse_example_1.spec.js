"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// This file was generated using the facilityuse_example_1.json example from @openactive/data-models
const chai_1 = require("chai");
const __1 = require("../..");
describe('data-models example - facilityuse_example_1.json', () => {
    /* Because the tests are also checked by `tsc`, this declaration acts as a test to ensure that the generated type
    correctly identifies this valid example */
    const example = {
        "@context": [
            "https://openactive.io/",
            "https://openactive.io/ns-beta"
        ],
        "@type": "FacilityUse",
        "@id": "http://www.example.org/facility-uses/1",
        "name": "Example Leisure Centre Outdoor Tennis",
        "description": "Table courts are available to hire for thirty minute slots",
        "activity": [
            {
                "@id": "https://openactive.io/activity-list#f2ea7405-6098-4378-b0fe-4e398a659fc4",
                "inScheme": "https://openactive.io/activity-list",
                "prefLabel": "Tennis",
                "@type": "Concept"
            }
        ],
        "provider": {
            "@type": "Organization",
            "@id": "https://id.bookingsystem.example.com/organizers/1",
            "name": "Everyone Active",
            "url": "https://www.everyoneactive.com/",
            "logo": {
                "@type": "ImageObject",
                "url": "https://s3-eu-west-2.amazonaws.com/prod-everyoneactive-wp/wp-content/uploads/2017/10/26092236/Ea-Image2.jpg"
            },
            "telephone": "01455 890508",
            "sameAs": [
                "https://www.facebook.com/everyoneactive/",
                "https://twitter.com/everyoneactive"
            ]
        },
        "location": {
            "@type": "Place",
            "@id": "http://www.example.org/api/locations/8958f9b8-2004-4e90-80ff-50c98a9b121d",
            "url": "https://www.everyoneactive.com/centres/The-Castle-Centre",
            "name": "Example Leisure Centre",
            "description": "You can enjoy a huge range of different sports and activities at Middlesbrough Sports Village. There’s a state-of-the-art gym, a full programme of group exercise classes, indoor badminton sessions and a soft play area for kids. Outside, the Village boasts a full range of athletics facilities, including an eight-lane 400m track, a 10-lane 100m track, as well as four long jump pits. There’s also high jump, hammer throwing, javelin and pole vaulting facilities. The latest addition to the facility is a £1.6m, 250m velodrome, alongside five all-weather outdoor pitches and a skate park for BMX bikes, scooters and inline skaters.",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "1 High Street",
                "addressLocality": "Bristol",
                "addressRegion": "West England",
                "postalCode": "BS1 4SD",
                "addressCountry": "GB"
            },
            "telephone": "08448 933888",
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": 51.5282923438685,
                "longitude": -0.206177163090501
            },
            "image": [
                {
                    "@type": "ImageObject",
                    "url": "https://s3-eu-west-2.amazonaws.com/prod-everyoneactive-wp/wp-content/uploads/2018/04/13112215/Acton_HeaderBanner.png"
                }
            ],
            "amenityFeature": [
                {
                    "name": "Changing Facilities",
                    "value": true,
                    "@type": "ChangingFacilities"
                },
                {
                    "name": "Showers",
                    "value": false,
                    "@type": "Showers"
                },
                {
                    "name": "Lockers",
                    "value": true,
                    "@type": "Lockers"
                },
                {
                    "name": "Towels",
                    "value": false,
                    "@type": "Towels"
                },
                {
                    "name": "Creche",
                    "value": false,
                    "@type": "Creche"
                },
                {
                    "name": "Parking",
                    "value": true,
                    "@type": "Parking"
                }
            ],
            "openingHoursSpecification": [
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                        "https://schema.org/Monday",
                        "https://schema.org/Tuesday",
                        "https://schema.org/Wednesday",
                        "https://schema.org/Thursday"
                    ],
                    "opens": "06:00",
                    "closes": "13:00"
                },
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                        "https://schema.org/Monday",
                        "https://schema.org/Tuesday",
                        "https://schema.org/Wednesday",
                        "https://schema.org/Thursday"
                    ],
                    "opens": "16:00",
                    "closes": "20:00"
                },
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                        "https://schema.org/Friday"
                    ],
                    "opens": "06:00",
                    "closes": "12:00"
                },
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                        "https://schema.org/Saturday",
                        "https://schema.org/Sunday",
                        "https://schema.org/PublicHolidays"
                    ],
                    "opens": "08:00",
                    "closes": "12:00"
                }
            ],
            "specialOpeningHoursSpecification": [
                {
                    "@type": "OpeningHoursSpecification",
                    "opens": "00:00",
                    "closes": "00:00",
                    "validFrom": "2021-01-01",
                    "validThrough": "2021-01-31"
                }
            ]
        },
        "url": "https://www.example.com/booking/deep/link",
        "image": [
            {
                "@type": "ImageObject",
                "url": "http://example.org/images/1.jpg"
            }
        ],
        "beta:sportsActivityLocation": [
            {
                "@type": "SportsActivityLocation",
                "name": "Main Tennis Court 1",
                "containedInPlace": "http://www.example.org/api/locations/8958f9b8-2004-4e90-80ff-50c98a9b121d"
            },
            {
                "@type": "SportsActivityLocation",
                "name": "Main Tennis Court 2",
                "containedInPlace": "http://www.example.org/api/locations/8958f9b8-2004-4e90-80ff-50c98a9b121d"
            }
        ],
        "beta:facilitySetting": "https://openactive.io/ns-beta#IndoorFacility",
        "beta:facilityType": [
            {
                "@type": "Concept",
                "@id": "https://openactive.io/facility-types#a5ac16fe-06ac-4bc1-93f7-69ff3bfcf3b9",
                "prefLabel": "3G Artificial Grass",
                "inScheme": "https://openactive.io/facility-types"
            }
        ],
        "offers": [
            {
                "@type": "Offer",
                "name": "30 minute hire",
                "price": 10,
                "priceCurrency": "GBP"
            }
        ],
        "hoursAvailable": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "https://schema.org/Sunday"
                ],
                "opens": "09:00",
                "closes": "17:30"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "https://schema.org/Monday",
                    "https://schema.org/Tuesday",
                    "https://schema.org/Wednesday",
                    "https://schema.org/Thursday"
                ],
                "opens": "06:30",
                "closes": "21:30"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "https://schema.org/Friday"
                ],
                "opens": "06:30",
                "closes": "20:30"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "https://schema.org/Saturday"
                ],
                "opens": "07:15",
                "closes": "17:30"
            }
        ]
    };
    it('should validate correctly', () => {
        const result = __1.validateFacilityUse(example);
        chai_1.expect(result).to.not.be.an.instanceof(__1.OaValidationError);
    });
});
