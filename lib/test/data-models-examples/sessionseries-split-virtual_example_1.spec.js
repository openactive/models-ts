"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// This file was generated using the sessionseries-split-virtual_example_1.json example from @openactive/data-models
const chai_1 = require("chai");
const __1 = require("../..");
describe('data-models example - sessionseries-split-virtual_example_1.json', () => {
    /* Because the tests are also checked by `tsc`, this declaration acts as a test to ensure that the generated type
    correctly identifies this valid example */
    const example = {
        "@context": [
            "https://openactive.io/",
            "https://openactive.io/ns-beta"
        ],
        "@id": "https://opensessions.io/api/session-series/1402CBP20150217",
        "identifier": "1402CBP20150217",
        "@type": "SessionSeries",
        "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
        "beta:isInteractivityPreferred": true,
        "beta:participantSuppliedEquipment": "https://openactive.io/Required",
        "beta:donationPaymentUrl": "https://www.paypal.com/donate/acme_fit",
        "beta:isFirstSessionAccessibleForFree": true,
        "organizer": {
            "@type": "Organization",
            "@id": "https://id.bookingsystem.example.com/organizers/1",
            "name": "Everyone Active",
            "url": "https://www.everyoneactive.com/",
            "logo": {
                "@type": "ImageObject",
                "url": "https://s3-eu-west-2.amazonaws.com/prod-everyoneactive-wp/wp-content/uploads/2017/10/26092236/Ea-Image2.jpg"
            },
            "email": "customerservices@gll.org",
            "telephone": "01455 890508",
            "sameAs": [
                "https://www.facebook.com/everyoneactive/",
                "https://twitter.com/everyoneactive"
            ],
            "beta:formalCriteriaMet": [
                "https://emduk.org/advice-on-how-instructors-can-continue-to-deliver-their-classes-online/"
            ]
        },
        "activity": [
            {
                "@type": "Concept",
                "@id": "https://openactive.io/activity-list#5e78bcbe-36db-425a-9064-bf96d09cc351",
                "prefLabel": "Bodypump™",
                "inScheme": "https://openactive.io/activity-list"
            }
        ],
        "accessibilitySupport": [
            {
                "@type": "Concept",
                "@id": "https://openactive.io/accessibility-support#1393f2dc-3fcc-4be9-a99f-f1e51f5ad277",
                "prefLabel": "Visual impairment",
                "inScheme": "https://openactive.io/accessibility-support"
            }
        ],
        "category": [
            "Group Exercise Classes",
            "Toning & Strength",
            "Group Exercise - Virtual"
        ],
        "name": "Virtual BODYPUMP",
        "description": "This is the virtual version of the original barbell class, which will help you get lean, toned and fit - fast. Les Mills™ Virtual classes are designed for people who cannot get access to our live classes or who want to get a ‘taste’ of a Les Mills™ class before taking a live class with an instructor. The classes are played on a big video screen, with dimmed lighting and pumping surround sound, and are led onscreen by the people who actually choreograph the classes.",
        "genderRestriction": "https://openactive.io/NoRestriction",
        "ageRange": {
            "@type": "QuantitativeValue",
            "minValue": 16
        },
        "level": [
            "Beginner"
        ],
        "image": [
            {
                "@type": "ImageObject",
                "url": "https://s3-eu-west-2.amazonaws.com/prod-everyoneactive-wp/wp-content/uploads/2017/10/26092236/Ea-Image2.jpg"
            }
        ],
        "url": "https://profile.everyoneactive.com/booking?Site=0140&Activities=1402CBP20150217&Culture=en-GB",
        "leader": [
            {
                "@type": "Person",
                "familyName": "Smith",
                "givenName": "Nicole"
            }
        ],
        "beta:affiliatedLocation": {
            "@type": "Place",
            "url": "https://www.everyoneactive.com/centres/Middlesbrough-Sports-Village",
            "name": "Middlesbrough Sports Village",
            "description": "You can enjoy a huge range of different sports and activities at Middlesbrough Sports Village. There’s a state-of-the-art gym, a full programme of group exercise classes, indoor badminton sessions and a soft play area for kids. Outside, the Village boasts a full range of athletics facilities, including an eight-lane 400m track, a 10-lane 100m track, as well as four long jump pits. There’s also high jump, hammer throwing, javelin and pole vaulting facilities. The latest addition to the facility is a £1.6m, 250m velodrome, alongside five all-weather outdoor pitches and a skate park for BMX bikes, scooters and inline skaters.",
            "identifier": "0140",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Alan Peacock Way",
                "addressLocality": "Village East",
                "addressRegion": "Middlesbrough",
                "postalCode": "TS4 3AE",
                "addressCountry": "GB"
            },
            "telephone": "01642 728555",
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": 54.543964,
                "longitude": -1.20978500000001
            },
            "image": [
                {
                    "@type": "ImageObject",
                    "url": "https://s3-eu-west-2.amazonaws.com/prod-everyoneactive-wp/wp-content/uploads/2018/04/13112215/Acton_HeaderBanner.png"
                }
            ]
        },
        "eventSchedule": [
            {
                "@type": "PartialSchedule",
                "repeatFrequency": "P1W",
                "startDate": "2018-10-19",
                "endDate": "2018-11-04",
                "startTime": "08:30",
                "endTime": "09:30",
                "byDay": [
                    "https://schema.org/Tuesday",
                    "https://schema.org/Sunday"
                ],
                "duration": "PT1H",
                "scheduleTimezone": "Europe/London"
            }
        ],
        "offers": [
            {
                "@type": "Offer",
                "identifier": "OX-AD",
                "name": "Oxygen - Adult",
                "price": 3.3,
                "priceCurrency": "GBP",
                "url": "https://profile.everyoneactive.com/booking?Site=0140&Activities=1402CBP20150217&Culture=en-GB"
            },
            {
                "@type": "Offer",
                "identifier": "OX-SNR",
                "name": "Oxygen - Senior",
                "price": 3.3,
                "priceCurrency": "GBP",
                "ageRestriction": {
                    "@type": "QuantitativeValue",
                    "minValue": 50
                },
                "url": "https://profile.everyoneactive.com/booking?Site=0140&Activities=1402CBP20150217&Culture=en-GB"
            }
        ],
        "duration": "PT30M"
    };
    it('should validate correctly', () => {
        const result = __1.validateSessionSeries(example);
        chai_1.expect(result).to.not.be.an.instanceof(__1.OaValidationError);
    });
});
