"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// This file was generated using the ondemandevent_example_1.json example from @openactive/data-models
const chai_1 = require("chai");
const __1 = require("../..");
describe('data-models example - ondemandevent_example_1.json', () => {
    /* Because the tests are also checked by `tsc`, this declaration acts as a test to ensure that the generated type
    correctly identifies this valid example */
    const example = {
        "@context": [
            "https://openactive.io/",
            "https://openactive.io/ns-beta"
        ],
        "@type": "OnDemandEvent",
        "identifier": 158313,
        "url": "https://www.example.com/videos/gorhambury-house",
        "activity": [
            {
                "@type": "Concept",
                "@id": "https://openactive.io/activity-list#5e78bcbe-36db-425a-9064-bf96d09cc351",
                "prefLabel": "Bodypump™",
                "inScheme": "https://openactive.io/activity-list"
            }
        ],
        "duration": "PT2H40M0S",
        "name": "Alan's indoor cycling exercises",
        "programme": {
            "@type": "Brand",
            "identifier": "ride-social",
            "name": "HSBC UK Ride Social",
            "description": "Welcome to Britain’s biggest network of cyclists! Meet like-minded riders, create groups, and organise your own rides.",
            "url": "https://www.letsride.co.uk/social",
            "logo": {
                "@type": "ImageObject",
                "url": "https://media.letsride.co.uk/view/5ad9bc45eb35e95ac853abb0e7be7a7e/2018+RIDE+SOCIAL+LONGBOX+RGB+LOGO+KEYLINE.png"
            }
        },
        "level": [
            "Beginner"
        ],
        "genderRestriction": "https://openactive.io/NoRestriction",
        "workFeatured": {
            "@type": "VideoObject",
            "url": "https://www.youtube.com/watch?v=3fbCs0GVjgQ",
            "embedUrl": "https://www.youtube.com/embed/3fbCs0GVjgQ",
            "thumbnail": [
                {
                    "@type": "ImageObject",
                    "url": "http://example.com/static/image/speedball_thumbnail.jpg"
                }
            ]
        },
        "beta:donationPaymentUrl": "https://www.paypal.com/donate/acme_fit",
        "beta:participantSuppliedEquipment": "https://openactive.io/Optional",
        "image": [
            {
                "@type": "ImageObject",
                "url": "https://media.letsride.co.uk/image/c0f83af33c8ccd598bc4baebabb574f4"
            }
        ],
        "ageRange": {
            "@type": "QuantitativeValue",
            "minValue": 16
        },
        "description": "Leaving Watford heading towards North Watford Woodside Abbots Langley Bedmond gorhambury house St Albans Chiswell Green Bricket Wood then back to Watford check out the map for the exact route This is a British Cycling risk Assessed routeContact telephone number 07472 044502",
        "offers": [
            {
                "@type": "Offer",
                "url": "https://www.letsride.co.uk/rides/gorhambury-house-loop/book",
                "price": 0
            }
        ],
        "isAccessibleForFree": true,
        "organizer": {
            "@type": "Organization",
            "@id": "https://id.bookingsystem.example.com/organizers/1",
            "identifier": "steady-pace-group",
            "url": "https://www.letsride.co.uk/groups/steady-pace-group",
            "name": "Alan's social ride group",
            "description": "My name is Alan I'm creating this group for those people who would like to ride during the week and weekends at a Easygoing steady and fast-paced",
            "beta:formalCriteriaMet": [
                "https://emduk.org/advice-on-how-instructors-can-continue-to-deliver-their-classes-online/"
            ]
        }
    };
    it('should validate correctly', () => {
        const result = __1.validateOnDemandEvent(example);
        chai_1.expect(result).to.not.be.an.instanceof(__1.OaValidationError);
    });
});
