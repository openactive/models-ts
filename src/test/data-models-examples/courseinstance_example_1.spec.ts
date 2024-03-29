// This file was generated using the courseinstance_example_1.json example from @openactive/data-models
import { expect } from 'chai';
import { CourseInstance, validateCourseInstance, OaValidationError } from '../..';

describe('data-models example - courseinstance_example_1.json', () => {
  /* Because the tests are also checked by `tsc`, this declaration acts as a test to ensure that the generated type
  correctly identifies this valid example */
  const example: CourseInstance = {
  "@context": [
    "https://openactive.io/",
    "https://openactive.io/ns-beta"
  ],
  "@type": "CourseInstance",
  "name": "Netball Youth Camp",
  "identifier": 76121,
  "startDate": "2018-08-01",
  "endDate": "2018-08-04",
  "duration": "P3D",
  "eventSchedule": [
    {
      "@type": "Schedule",
      "startDate": "2018-08-01",
      "endDate": "2018-08-04",
      "repeatCount": 3,
      "repeatFrequency": "P1D",
      "duration": "PT8H",
      "startTime": "09:00",
      "endTime": "17:00",
      "scheduleTimezone": "Europe/London",
      "scheduledEventType": "Event"
    }
  ],
  "eventStatus": "https://schema.org/EventScheduled",
  "location": {
    "@type": "Place",
    "name": "Trent College and The Elms",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": ", Long Eaton",
      "addressLocality": "Nottingham",
      "addressRegion": "Nottinghamshire",
      "postalCode": "NG10 4AD",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 52.901455,
      "longitude": -1.282734
    }
  },
  "leader": [
    {
      "@type": "Person",
      "jobTitle": "Derbyshire and Nottinghamshire NDO",
      "name": "Jane Smith",
      "email": "jane.smith@englandnetball.co.uk"
    }
  ],
  "organizer": {
    "@type": "Organization",
    "@id": "https://id.bookingsystem.example.com/organizers/1",
    "name": "England Netball",
    "url": "https://www.englandnetball.co.uk"
  },
  "url": "https://www.englandnetball.co.uk/?pagename=session&sessionid=76121NYC006506",
  "maximumAttendeeCapacity": 30,
  "remainingAttendeeCapacity": 21,
  "offers": [
    {
      "@type": "Offer",
      "name": "Member",
      "price": 124,
      "priceCurrency": "GBP"
    },
    {
      "@type": "Offer",
      "name": "Non-member",
      "price": 154,
      "priceCurrency": "GBP"
    }
  ],
  "instanceOfCourse": {
    "@type": "Course",
    "name": "Netball Youth Camp",
    "description": "Netball Youth Camps give junior netballers the chance to get together with their friends and take to the court in the holidays!\r\n\r\nThe camp is a non-residential holiday camp providing ‘Nothing but Netball’; not only will there be top quality coaching and fun netball activities but there is even an opportunity to meet and be inspired by an elite player.\r\n\r\nIf you are a junior netball lover (or the parent of one!) these are an unmissable holiday activity.",
    "image": [
      {
        "@type": "ImageObject",
        "url": "https://www.englandnetball.co.uk/app/uploads/2016/03/Netball-youth-camp-ball.jpg"
      }
    ],
    "url": "https://www.englandnetball.co.uk/NYC",
    "beta:video": [
      {
        "@type": "VideoObject",
        "url": "https://www.youtube.com/watch?v=lvlEpaKTotQ"
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
    "accessibilityInformation": "Please contact the centre for more information on the accessibility of this course.",
    "activity": [
      {
        "@id": "https://openactive.io/activity-list#fbdc35a8-3dd0-40ee-a7ca-6ff40b3e5f90",
        "@type": "Concept",
        "prefLabel": "Netball",
        "inScheme": "https://openactive.io/activity-list"
      }
    ],
    "author": "https://id.bookingsystem.example.com/organizers/1",
    "ageRange": {
      "@type": "QuantitativeValue",
      "minValue": 11,
      "maxValue": 16
    },
    "genderRestriction": "https://openactive.io/NoRestriction",
    "level": [
      "Beginner"
    ],
    "category": [
      "Holiday camps"
    ]
  }
};

  it('should validate correctly', () => {
    const result = validateCourseInstance(example);
    expect(result).to.not.be.an.instanceof(OaValidationError);
  });
});
