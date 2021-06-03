// This file was generated
import * as Joi from 'joi';
import { OaValidationError } from '../oaValidationError';

/**
 * PropertyEnumeration
 *
 * This enumeration contains a value for all properties in the https://schema.org/ and https://openactive.io/ vocabularies.
 */
export type PropertyEnumeration = 
  
  | 'https://openactive.io/accessChannel'
  | 'https://openactive.io/accessId'
  | 'https://openactive.io/accessPass'
  | 'https://openactive.io/accessibilityInformation'
  | 'https://openactive.io/accessibilitySupport'
  | 'https://openactive.io/activity'
  | 'https://openactive.io/additionalAdmissionRestriction'
  | 'https://openactive.io/ageRange'
  | 'https://openactive.io/ageRestriction'
  | 'https://openactive.io/aggregateFacilityUse'
  | 'https://openactive.io/allowCustomerCancellationFullRefund'
  | 'https://openactive.io/attendeeDetailsRequired'
  | 'https://openactive.io/attendeeInstructions'
  | 'https://openactive.io/authenticationAuthority'
  | 'https://openactive.io/backgroundImage'
  | 'https://openactive.io/bookingService'
  | 'https://openactive.io/brokerRole'
  | 'https://openactive.io/cancellationMessage'
  | 'https://openactive.io/concept'
  | 'https://openactive.io/customerNotice'
  | 'https://openactive.io/facilityUse'
  | 'https://openactive.io/genderRestriction'
  | 'https://openactive.io/idTemplate'
  | 'https://openactive.io/individualFacilityUse'
  | 'https://openactive.io/instance'
  | 'https://openactive.io/instanceOfCourse'
  | 'https://openactive.io/isCoached'
  | 'https://openactive.io/isOpenBookingAllowed'
  | 'https://openactive.io/latestCancellationBeforeStartDate'
  | 'https://openactive.io/leader'
  | 'https://openactive.io/lease'
  | 'https://openactive.io/leaseExpires'
  | 'https://openactive.io/level'
  | 'https://openactive.io/maximumUses'
  | 'https://openactive.io/meetingPoint'
  | 'https://openactive.io/openBookingFlowRequirement'
  | 'https://openactive.io/openBookingInAdvance'
  | 'https://openactive.io/openBookingPrepayment'
  | 'https://openactive.io/orderCreationStatus'
  | 'https://openactive.io/orderCustomerNote'
  | 'https://openactive.io/orderItemIntakeForm'
  | 'https://openactive.io/orderItemIntakeFormResponse'
  | 'https://openactive.io/orderProposalStatus'
  | 'https://openactive.io/orderProposalVersion'
  | 'https://openactive.io/orderRequiresApproval'
  | 'https://openactive.io/orderSellerNote'
  | 'https://openactive.io/payment'
  | 'https://openactive.io/paymentProviderId'
  | 'https://openactive.io/programme'
  | 'https://openactive.io/rate'
  | 'https://openactive.io/remainingUses'
  | 'https://openactive.io/requestId'
  | 'https://openactive.io/requiresExplicitConsent'
  | 'https://openactive.io/scheduledEventType'
  | 'https://openactive.io/schedulingNote'
  | 'https://openactive.io/statusCode'
  | 'https://openactive.io/taxCalculationExcluded'
  | 'https://openactive.io/taxMode'
  | 'https://openactive.io/totalPaymentTax'
  | 'https://openactive.io/unitTaxSpecification'
  | 'https://openactive.io/validFromBeforeStartDate'
  | 'https://openactive.io/valueOption'
  | 'https://schema.org/about'
  | 'https://schema.org/abridged'
  | 'https://schema.org/abstract'
  | 'https://schema.org/accelerationTime'
  | 'https://schema.org/acceptedAnswer'
  | 'https://schema.org/acceptedOffer'
  | 'https://schema.org/acceptedPaymentMethod'
  | 'https://schema.org/acceptsReservations'
  | 'https://schema.org/accessCode'
  | 'https://schema.org/accessMode'
  | 'https://schema.org/accessModeSufficient'
  | 'https://schema.org/accessibilityAPI'
  | 'https://schema.org/accessibilityControl'
  | 'https://schema.org/accessibilityFeature'
  | 'https://schema.org/accessibilityHazard'
  | 'https://schema.org/accessibilitySummary'
  | 'https://schema.org/accommodationCategory'
  | 'https://schema.org/accommodationFloorPlan'
  | 'https://schema.org/accountId'
  | 'https://schema.org/accountMinimumInflow'
  | 'https://schema.org/accountOverdraftLimit'
  | 'https://schema.org/accountablePerson'
  | 'https://schema.org/acquireLicensePage'
  | 'https://schema.org/acquiredFrom'
  | 'https://schema.org/acrissCode'
  | 'https://schema.org/actionAccessibilityRequirement'
  | 'https://schema.org/actionApplication'
  | 'https://schema.org/actionOption'
  | 'https://schema.org/actionPlatform'
  | 'https://schema.org/actionStatus'
  | 'https://schema.org/actionableFeedbackPolicy'
  | 'https://schema.org/activeIngredient'
  | 'https://schema.org/activityDuration'
  | 'https://schema.org/activityFrequency'
  | 'https://schema.org/actor'
  | 'https://schema.org/actors'
  | 'https://schema.org/addOn'
  | 'https://schema.org/additionalName'
  | 'https://schema.org/additionalNumberOfGuests'
  | 'https://schema.org/additionalProperty'
  | 'https://schema.org/additionalType'
  | 'https://schema.org/additionalVariable'
  | 'https://schema.org/address'
  | 'https://schema.org/addressCountry'
  | 'https://schema.org/addressLocality'
  | 'https://schema.org/addressRegion'
  | 'https://schema.org/administrationRoute'
  | 'https://schema.org/advanceBookingRequirement'
  | 'https://schema.org/adverseOutcome'
  | 'https://schema.org/affectedBy'
  | 'https://schema.org/affiliation'
  | 'https://schema.org/afterMedia'
  | 'https://schema.org/agent'
  | 'https://schema.org/aggregateRating'
  | 'https://schema.org/aircraft'
  | 'https://schema.org/album'
  | 'https://schema.org/albumProductionType'
  | 'https://schema.org/albumRelease'
  | 'https://schema.org/albumReleaseType'
  | 'https://schema.org/albums'
  | 'https://schema.org/alcoholWarning'
  | 'https://schema.org/algorithm'
  | 'https://schema.org/alignmentType'
  | 'https://schema.org/alternateName'
  | 'https://schema.org/alternativeHeadline'
  | 'https://schema.org/alumni'
  | 'https://schema.org/alumniOf'
  | 'https://schema.org/amenityFeature'
  | 'https://schema.org/amount'
  | 'https://schema.org/amountOfThisGood'
  | 'https://schema.org/announcementLocation'
  | 'https://schema.org/annualPercentageRate'
  | 'https://schema.org/answerCount'
  | 'https://schema.org/answerExplanation'
  | 'https://schema.org/antagonist'
  | 'https://schema.org/appearance'
  | 'https://schema.org/applicableLocation'
  | 'https://schema.org/applicantLocationRequirements'
  | 'https://schema.org/application'
  | 'https://schema.org/applicationCategory'
  | 'https://schema.org/applicationContact'
  | 'https://schema.org/applicationDeadline'
  | 'https://schema.org/applicationStartDate'
  | 'https://schema.org/applicationSubCategory'
  | 'https://schema.org/applicationSuite'
  | 'https://schema.org/appliesToDeliveryMethod'
  | 'https://schema.org/appliesToPaymentMethod'
  | 'https://schema.org/archiveHeld'
  | 'https://schema.org/area'
  | 'https://schema.org/areaServed'
  | 'https://schema.org/arrivalAirport'
  | 'https://schema.org/arrivalBoatTerminal'
  | 'https://schema.org/arrivalBusStop'
  | 'https://schema.org/arrivalGate'
  | 'https://schema.org/arrivalPlatform'
  | 'https://schema.org/arrivalStation'
  | 'https://schema.org/arrivalTerminal'
  | 'https://schema.org/arrivalTime'
  | 'https://schema.org/artEdition'
  | 'https://schema.org/artMedium'
  | 'https://schema.org/arterialBranch'
  | 'https://schema.org/artform'
  | 'https://schema.org/articleBody'
  | 'https://schema.org/articleSection'
  | 'https://schema.org/artist'
  | 'https://schema.org/artworkSurface'
  | 'https://schema.org/aspect'
  | 'https://schema.org/assembly'
  | 'https://schema.org/assemblyVersion'
  | 'https://schema.org/assesses'
  | 'https://schema.org/associatedAnatomy'
  | 'https://schema.org/associatedArticle'
  | 'https://schema.org/associatedMedia'
  | 'https://schema.org/associatedPathophysiology'
  | 'https://schema.org/athlete'
  | 'https://schema.org/attendee'
  | 'https://schema.org/attendees'
  | 'https://schema.org/audience'
  | 'https://schema.org/audienceType'
  | 'https://schema.org/audio'
  | 'https://schema.org/authenticator'
  | 'https://schema.org/author'
  | 'https://schema.org/availability'
  | 'https://schema.org/availabilityEnds'
  | 'https://schema.org/availabilityStarts'
  | 'https://schema.org/availableAtOrFrom'
  | 'https://schema.org/availableChannel'
  | 'https://schema.org/availableDeliveryMethod'
  | 'https://schema.org/availableFrom'
  | 'https://schema.org/availableIn'
  | 'https://schema.org/availableLanguage'
  | 'https://schema.org/availableOnDevice'
  | 'https://schema.org/availableService'
  | 'https://schema.org/availableStrength'
  | 'https://schema.org/availableTest'
  | 'https://schema.org/availableThrough'
  | 'https://schema.org/award'
  | 'https://schema.org/awards'
  | 'https://schema.org/awayTeam'
  | 'https://schema.org/backstory'
  | 'https://schema.org/bankAccountType'
  | 'https://schema.org/baseSalary'
  | 'https://schema.org/bccRecipient'
  | 'https://schema.org/bed'
  | 'https://schema.org/beforeMedia'
  | 'https://schema.org/beneficiaryBank'
  | 'https://schema.org/benefits'
  | 'https://schema.org/benefitsSummaryUrl'
  | 'https://schema.org/bestRating'
  | 'https://schema.org/billingAddress'
  | 'https://schema.org/billingDuration'
  | 'https://schema.org/billingIncrement'
  | 'https://schema.org/billingPeriod'
  | 'https://schema.org/billingStart'
  | 'https://schema.org/biomechnicalClass'
  | 'https://schema.org/birthDate'
  | 'https://schema.org/birthPlace'
  | 'https://schema.org/bitrate'
  | 'https://schema.org/blogPost'
  | 'https://schema.org/blogPosts'
  | 'https://schema.org/bloodSupply'
  | 'https://schema.org/boardingGroup'
  | 'https://schema.org/boardingPolicy'
  | 'https://schema.org/bodyLocation'
  | 'https://schema.org/bodyType'
  | 'https://schema.org/bookEdition'
  | 'https://schema.org/bookFormat'
  | 'https://schema.org/bookingAgent'
  | 'https://schema.org/bookingTime'
  | 'https://schema.org/borrower'
  | 'https://schema.org/box'
  | 'https://schema.org/branch'
  | 'https://schema.org/branchCode'
  | 'https://schema.org/branchOf'
  | 'https://schema.org/brand'
  | 'https://schema.org/breadcrumb'
  | 'https://schema.org/breastfeedingWarning'
  | 'https://schema.org/broadcastAffiliateOf'
  | 'https://schema.org/broadcastChannelId'
  | 'https://schema.org/broadcastDisplayName'
  | 'https://schema.org/broadcastFrequency'
  | 'https://schema.org/broadcastFrequencyValue'
  | 'https://schema.org/broadcastOfEvent'
  | 'https://schema.org/broadcastServiceTier'
  | 'https://schema.org/broadcastSignalModulation'
  | 'https://schema.org/broadcastSubChannel'
  | 'https://schema.org/broadcastTimezone'
  | 'https://schema.org/broadcaster'
  | 'https://schema.org/broker'
  | 'https://schema.org/browserRequirements'
  | 'https://schema.org/busName'
  | 'https://schema.org/busNumber'
  | 'https://schema.org/businessDays'
  | 'https://schema.org/businessFunction'
  | 'https://schema.org/buyer'
  | 'https://schema.org/byArtist'
  | 'https://schema.org/byDay'
  | 'https://schema.org/byMonth'
  | 'https://schema.org/byMonthDay'
  | 'https://schema.org/byMonthWeek'
  | 'https://schema.org/callSign'
  | 'https://schema.org/calories'
  | 'https://schema.org/candidate'
  | 'https://schema.org/caption'
  | 'https://schema.org/carbohydrateContent'
  | 'https://schema.org/cargoVolume'
  | 'https://schema.org/carrier'
  | 'https://schema.org/carrierRequirements'
  | 'https://schema.org/cashBack'
  | 'https://schema.org/catalog'
  | 'https://schema.org/catalogNumber'
  | 'https://schema.org/category'
  | 'https://schema.org/causeOf'
  | 'https://schema.org/ccRecipient'
  | 'https://schema.org/character'
  | 'https://schema.org/characterAttribute'
  | 'https://schema.org/characterName'
  | 'https://schema.org/cheatCode'
  | 'https://schema.org/checkinTime'
  | 'https://schema.org/checkoutTime'
  | 'https://schema.org/childMaxAge'
  | 'https://schema.org/childMinAge'
  | 'https://schema.org/children'
  | 'https://schema.org/cholesterolContent'
  | 'https://schema.org/circle'
  | 'https://schema.org/citation'
  | 'https://schema.org/claimReviewed'
  | 'https://schema.org/clincalPharmacology'
  | 'https://schema.org/clinicalPharmacology'
  | 'https://schema.org/clipNumber'
  | 'https://schema.org/closes'
  | 'https://schema.org/coach'
  | 'https://schema.org/code'
  | 'https://schema.org/codeRepository'
  | 'https://schema.org/codeSampleType'
  | 'https://schema.org/codeValue'
  | 'https://schema.org/codingSystem'
  | 'https://schema.org/colleague'
  | 'https://schema.org/colleagues'
  | 'https://schema.org/collection'
  | 'https://schema.org/collectionSize'
  | 'https://schema.org/color'
  | 'https://schema.org/colorist'
  | 'https://schema.org/comment'
  | 'https://schema.org/commentCount'
  | 'https://schema.org/commentText'
  | 'https://schema.org/commentTime'
  | 'https://schema.org/competencyRequired'
  | 'https://schema.org/competitor'
  | 'https://schema.org/composer'
  | 'https://schema.org/comprisedOf'
  | 'https://schema.org/conditionsOfAccess'
  | 'https://schema.org/confirmationNumber'
  | 'https://schema.org/connectedTo'
  | 'https://schema.org/constrainingProperty'
  | 'https://schema.org/contactOption'
  | 'https://schema.org/contactPoint'
  | 'https://schema.org/contactPoints'
  | 'https://schema.org/contactType'
  | 'https://schema.org/contactlessPayment'
  | 'https://schema.org/containedIn'
  | 'https://schema.org/containedInPlace'
  | 'https://schema.org/containsPlace'
  | 'https://schema.org/containsSeason'
  | 'https://schema.org/contentLocation'
  | 'https://schema.org/contentRating'
  | 'https://schema.org/contentReferenceTime'
  | 'https://schema.org/contentSize'
  | 'https://schema.org/contentType'
  | 'https://schema.org/contentUrl'
  | 'https://schema.org/contraindication'
  | 'https://schema.org/contributor'
  | 'https://schema.org/cookTime'
  | 'https://schema.org/cookingMethod'
  | 'https://schema.org/copyrightHolder'
  | 'https://schema.org/copyrightNotice'
  | 'https://schema.org/copyrightYear'
  | 'https://schema.org/correction'
  | 'https://schema.org/correctionsPolicy'
  | 'https://schema.org/costCategory'
  | 'https://schema.org/costCurrency'
  | 'https://schema.org/costOrigin'
  | 'https://schema.org/costPerUnit'
  | 'https://schema.org/countriesNotSupported'
  | 'https://schema.org/countriesSupported'
  | 'https://schema.org/countryOfOrigin'
  | 'https://schema.org/course'
  | 'https://schema.org/courseCode'
  | 'https://schema.org/courseMode'
  | 'https://schema.org/coursePrerequisites'
  | 'https://schema.org/courseWorkload'
  | 'https://schema.org/coverageEndTime'
  | 'https://schema.org/coverageStartTime'
  | 'https://schema.org/creativeWorkStatus'
  | 'https://schema.org/creator'
  | 'https://schema.org/credentialCategory'
  | 'https://schema.org/creditText'
  | 'https://schema.org/creditedTo'
  | 'https://schema.org/cssSelector'
  | 'https://schema.org/currenciesAccepted'
  | 'https://schema.org/currency'
  | 'https://schema.org/currentExchangeRate'
  | 'https://schema.org/customer'
  | 'https://schema.org/cutoffTime'
  | 'https://schema.org/cvdCollectionDate'
  | 'https://schema.org/cvdFacilityCounty'
  | 'https://schema.org/cvdFacilityId'
  | 'https://schema.org/cvdNumBeds'
  | 'https://schema.org/cvdNumBedsOcc'
  | 'https://schema.org/cvdNumC19Died'
  | 'https://schema.org/cvdNumC19HOPats'
  | 'https://schema.org/cvdNumC19HospPats'
  | 'https://schema.org/cvdNumC19MechVentPats'
  | 'https://schema.org/cvdNumC19OFMechVentPats'
  | 'https://schema.org/cvdNumC19OverflowPats'
  | 'https://schema.org/cvdNumICUBeds'
  | 'https://schema.org/cvdNumICUBedsOcc'
  | 'https://schema.org/cvdNumTotBeds'
  | 'https://schema.org/cvdNumVent'
  | 'https://schema.org/cvdNumVentUse'
  | 'https://schema.org/dataFeedElement'
  | 'https://schema.org/dataset'
  | 'https://schema.org/datasetTimeInterval'
  | 'https://schema.org/dateCreated'
  | 'https://schema.org/dateDeleted'
  | 'https://schema.org/dateIssued'
  | 'https://schema.org/dateModified'
  | 'https://schema.org/datePosted'
  | 'https://schema.org/datePublished'
  | 'https://schema.org/dateRead'
  | 'https://schema.org/dateReceived'
  | 'https://schema.org/dateSent'
  | 'https://schema.org/dateVehicleFirstRegistered'
  | 'https://schema.org/dateline'
  | 'https://schema.org/dayOfWeek'
  | 'https://schema.org/deathDate'
  | 'https://schema.org/deathPlace'
  | 'https://schema.org/defaultValue'
  | 'https://schema.org/deliveryAddress'
  | 'https://schema.org/deliveryLeadTime'
  | 'https://schema.org/deliveryMethod'
  | 'https://schema.org/deliveryStatus'
  | 'https://schema.org/deliveryTime'
  | 'https://schema.org/department'
  | 'https://schema.org/departureAirport'
  | 'https://schema.org/departureBoatTerminal'
  | 'https://schema.org/departureBusStop'
  | 'https://schema.org/departureGate'
  | 'https://schema.org/departurePlatform'
  | 'https://schema.org/departureStation'
  | 'https://schema.org/departureTerminal'
  | 'https://schema.org/departureTime'
  | 'https://schema.org/dependencies'
  | 'https://schema.org/depth'
  | 'https://schema.org/description'
  | 'https://schema.org/device'
  | 'https://schema.org/diagnosis'
  | 'https://schema.org/diagram'
  | 'https://schema.org/diet'
  | 'https://schema.org/dietFeatures'
  | 'https://schema.org/differentialDiagnosis'
  | 'https://schema.org/director'
  | 'https://schema.org/directors'
  | 'https://schema.org/disambiguatingDescription'
  | 'https://schema.org/discount'
  | 'https://schema.org/discountCode'
  | 'https://schema.org/discountCurrency'
  | 'https://schema.org/discusses'
  | 'https://schema.org/discussionUrl'
  | 'https://schema.org/diseasePreventionInfo'
  | 'https://schema.org/diseaseSpreadStatistics'
  | 'https://schema.org/dissolutionDate'
  | 'https://schema.org/distance'
  | 'https://schema.org/distinguishingSign'
  | 'https://schema.org/distribution'
  | 'https://schema.org/diversityPolicy'
  | 'https://schema.org/diversityStaffingReport'
  | 'https://schema.org/documentation'
  | 'https://schema.org/doesNotShip'
  | 'https://schema.org/domainIncludes'
  | 'https://schema.org/domiciledMortgage'
  | 'https://schema.org/doorTime'
  | 'https://schema.org/dosageForm'
  | 'https://schema.org/doseSchedule'
  | 'https://schema.org/doseUnit'
  | 'https://schema.org/doseValue'
  | 'https://schema.org/downPayment'
  | 'https://schema.org/downloadUrl'
  | 'https://schema.org/downvoteCount'
  | 'https://schema.org/drainsTo'
  | 'https://schema.org/driveWheelConfiguration'
  | 'https://schema.org/dropoffLocation'
  | 'https://schema.org/dropoffTime'
  | 'https://schema.org/drug'
  | 'https://schema.org/drugClass'
  | 'https://schema.org/drugUnit'
  | 'https://schema.org/duns'
  | 'https://schema.org/duplicateTherapy'
  | 'https://schema.org/duration'
  | 'https://schema.org/durationOfWarranty'
  | 'https://schema.org/duringMedia'
  | 'https://schema.org/earlyPrepaymentPenalty'
  | 'https://schema.org/editEIDR'
  | 'https://schema.org/editor'
  | 'https://schema.org/eduQuestionType'
  | 'https://schema.org/educationRequirements'
  | 'https://schema.org/educationalAlignment'
  | 'https://schema.org/educationalCredentialAwarded'
  | 'https://schema.org/educationalFramework'
  | 'https://schema.org/educationalLevel'
  | 'https://schema.org/educationalProgramMode'
  | 'https://schema.org/educationalRole'
  | 'https://schema.org/educationalUse'
  | 'https://schema.org/elevation'
  | 'https://schema.org/eligibilityToWorkRequirement'
  | 'https://schema.org/eligibleCustomerType'
  | 'https://schema.org/eligibleDuration'
  | 'https://schema.org/eligibleQuantity'
  | 'https://schema.org/eligibleRegion'
  | 'https://schema.org/eligibleTransactionVolume'
  | 'https://schema.org/email'
  | 'https://schema.org/embedUrl'
  | 'https://schema.org/emissionsCO2'
  | 'https://schema.org/employee'
  | 'https://schema.org/employees'
  | 'https://schema.org/employerOverview'
  | 'https://schema.org/employmentType'
  | 'https://schema.org/employmentUnit'
  | 'https://schema.org/encodesCreativeWork'
  | 'https://schema.org/encoding'
  | 'https://schema.org/encodingFormat'
  | 'https://schema.org/encodingType'
  | 'https://schema.org/encodings'
  | 'https://schema.org/endDate'
  | 'https://schema.org/endOffset'
  | 'https://schema.org/endTime'
  | 'https://schema.org/endorsee'
  | 'https://schema.org/endorsers'
  | 'https://schema.org/energyEfficiencyScaleMax'
  | 'https://schema.org/energyEfficiencyScaleMin'
  | 'https://schema.org/engineDisplacement'
  | 'https://schema.org/enginePower'
  | 'https://schema.org/engineType'
  | 'https://schema.org/entertainmentBusiness'
  | 'https://schema.org/epidemiology'
  | 'https://schema.org/episode'
  | 'https://schema.org/episodeNumber'
  | 'https://schema.org/episodes'
  | 'https://schema.org/equal'
  | 'https://schema.org/error'
  | 'https://schema.org/estimatedCost'
  | 'https://schema.org/estimatedFlightDuration'
  | 'https://schema.org/estimatedSalary'
  | 'https://schema.org/estimatesRiskOf'
  | 'https://schema.org/ethicsPolicy'
  | 'https://schema.org/event'
  | 'https://schema.org/eventAttendanceMode'
  | 'https://schema.org/eventSchedule'
  | 'https://schema.org/eventStatus'
  | 'https://schema.org/events'
  | 'https://schema.org/evidenceLevel'
  | 'https://schema.org/evidenceOrigin'
  | 'https://schema.org/exampleOfWork'
  | 'https://schema.org/exceptDate'
  | 'https://schema.org/exchangeRateSpread'
  | 'https://schema.org/executableLibraryName'
  | 'https://schema.org/exerciseCourse'
  | 'https://schema.org/exercisePlan'
  | 'https://schema.org/exerciseRelatedDiet'
  | 'https://schema.org/exerciseType'
  | 'https://schema.org/exifData'
  | 'https://schema.org/expectedArrivalFrom'
  | 'https://schema.org/expectedArrivalUntil'
  | 'https://schema.org/expectedPrognosis'
  | 'https://schema.org/expectsAcceptanceOf'
  | 'https://schema.org/experienceInPlaceOfEducation'
  | 'https://schema.org/experienceRequirements'
  | 'https://schema.org/expertConsiderations'
  | 'https://schema.org/expires'
  | 'https://schema.org/familyName'
  | 'https://schema.org/fatContent'
  | 'https://schema.org/faxNumber'
  | 'https://schema.org/featureList'
  | 'https://schema.org/feesAndCommissionsSpecification'
  | 'https://schema.org/fiberContent'
  | 'https://schema.org/fileFormat'
  | 'https://schema.org/fileSize'
  | 'https://schema.org/financialAidEligible'
  | 'https://schema.org/firstAppearance'
  | 'https://schema.org/firstPerformance'
  | 'https://schema.org/flightDistance'
  | 'https://schema.org/flightNumber'
  | 'https://schema.org/floorLevel'
  | 'https://schema.org/floorLimit'
  | 'https://schema.org/floorSize'
  | 'https://schema.org/followee'
  | 'https://schema.org/follows'
  | 'https://schema.org/followup'
  | 'https://schema.org/foodEstablishment'
  | 'https://schema.org/foodEvent'
  | 'https://schema.org/foodWarning'
  | 'https://schema.org/founder'
  | 'https://schema.org/founders'
  | 'https://schema.org/foundingDate'
  | 'https://schema.org/foundingLocation'
  | 'https://schema.org/free'
  | 'https://schema.org/freeShippingThreshold'
  | 'https://schema.org/frequency'
  | 'https://schema.org/fromLocation'
  | 'https://schema.org/fuelCapacity'
  | 'https://schema.org/fuelConsumption'
  | 'https://schema.org/fuelEfficiency'
  | 'https://schema.org/fuelType'
  | 'https://schema.org/functionalClass'
  | 'https://schema.org/fundedItem'
  | 'https://schema.org/funder'
  | 'https://schema.org/game'
  | 'https://schema.org/gameItem'
  | 'https://schema.org/gameLocation'
  | 'https://schema.org/gamePlatform'
  | 'https://schema.org/gameServer'
  | 'https://schema.org/gameTip'
  | 'https://schema.org/gender'
  | 'https://schema.org/genre'
  | 'https://schema.org/geo'
  | 'https://schema.org/geoContains'
  | 'https://schema.org/geoCoveredBy'
  | 'https://schema.org/geoCovers'
  | 'https://schema.org/geoCrosses'
  | 'https://schema.org/geoDisjoint'
  | 'https://schema.org/geoEquals'
  | 'https://schema.org/geoIntersects'
  | 'https://schema.org/geoMidpoint'
  | 'https://schema.org/geoOverlaps'
  | 'https://schema.org/geoRadius'
  | 'https://schema.org/geoTouches'
  | 'https://schema.org/geoWithin'
  | 'https://schema.org/geographicArea'
  | 'https://schema.org/gettingTestedInfo'
  | 'https://schema.org/givenName'
  | 'https://schema.org/globalLocationNumber'
  | 'https://schema.org/governmentBenefitsInfo'
  | 'https://schema.org/gracePeriod'
  | 'https://schema.org/grantee'
  | 'https://schema.org/greater'
  | 'https://schema.org/greaterOrEqual'
  | 'https://schema.org/gtin'
  | 'https://schema.org/gtin12'
  | 'https://schema.org/gtin13'
  | 'https://schema.org/gtin14'
  | 'https://schema.org/gtin8'
  | 'https://schema.org/guideline'
  | 'https://schema.org/guidelineDate'
  | 'https://schema.org/guidelineSubject'
  | 'https://schema.org/handlingTime'
  | 'https://schema.org/hasBroadcastChannel'
  | 'https://schema.org/hasCategoryCode'
  | 'https://schema.org/hasCourse'
  | 'https://schema.org/hasCourseInstance'
  | 'https://schema.org/hasCredential'
  | 'https://schema.org/hasDefinedTerm'
  | 'https://schema.org/hasDeliveryMethod'
  | 'https://schema.org/hasDigitalDocumentPermission'
  | 'https://schema.org/hasDriveThroughService'
  | 'https://schema.org/hasEnergyConsumptionDetails'
  | 'https://schema.org/hasEnergyEfficiencyCategory'
  | 'https://schema.org/hasHealthAspect'
  | 'https://schema.org/hasMap'
  | 'https://schema.org/hasMeasurement'
  | 'https://schema.org/hasMenu'
  | 'https://schema.org/hasMenuItem'
  | 'https://schema.org/hasMenuSection'
  | 'https://schema.org/hasMerchantReturnPolicy'
  | 'https://schema.org/hasOccupation'
  | 'https://schema.org/hasOfferCatalog'
  | 'https://schema.org/hasPOS'
  | 'https://schema.org/hasPart'
  | 'https://schema.org/hasVariant'
  | 'https://schema.org/headline'
  | 'https://schema.org/healthCondition'
  | 'https://schema.org/healthPlanCoinsuranceOption'
  | 'https://schema.org/healthPlanCoinsuranceRate'
  | 'https://schema.org/healthPlanCopay'
  | 'https://schema.org/healthPlanCopayOption'
  | 'https://schema.org/healthPlanCostSharing'
  | 'https://schema.org/healthPlanDrugOption'
  | 'https://schema.org/healthPlanDrugTier'
  | 'https://schema.org/healthPlanId'
  | 'https://schema.org/healthPlanMarketingUrl'
  | 'https://schema.org/healthPlanNetworkId'
  | 'https://schema.org/healthPlanNetworkTier'
  | 'https://schema.org/healthPlanPharmacyCategory'
  | 'https://schema.org/healthcareReportingData'
  | 'https://schema.org/height'
  | 'https://schema.org/highPrice'
  | 'https://schema.org/hiringOrganization'
  | 'https://schema.org/holdingArchive'
  | 'https://schema.org/homeLocation'
  | 'https://schema.org/homeTeam'
  | 'https://schema.org/honorificPrefix'
  | 'https://schema.org/honorificSuffix'
  | 'https://schema.org/hospitalAffiliation'
  | 'https://schema.org/hostingOrganization'
  | 'https://schema.org/hoursAvailable'
  | 'https://schema.org/howPerformed'
  | 'https://schema.org/httpMethod'
  | 'https://schema.org/iataCode'
  | 'https://schema.org/icaoCode'
  | 'https://schema.org/identifier'
  | 'https://schema.org/identifyingExam'
  | 'https://schema.org/identifyingTest'
  | 'https://schema.org/illustrator'
  | 'https://schema.org/image'
  | 'https://schema.org/imagingTechnique'
  | 'https://schema.org/inAlbum'
  | 'https://schema.org/inBroadcastLineup'
  | 'https://schema.org/inCodeSet'
  | 'https://schema.org/inDefinedTermSet'
  | 'https://schema.org/inLanguage'
  | 'https://schema.org/inPlaylist'
  | 'https://schema.org/inProductGroupWithID'
  | 'https://schema.org/inStoreReturnsOffered'
  | 'https://schema.org/inSupportOf'
  | 'https://schema.org/incentiveCompensation'
  | 'https://schema.org/incentives'
  | 'https://schema.org/includedComposition'
  | 'https://schema.org/includedDataCatalog'
  | 'https://schema.org/includedInDataCatalog'
  | 'https://schema.org/includedInHealthInsurancePlan'
  | 'https://schema.org/includedRiskFactor'
  | 'https://schema.org/includesAttraction'
  | 'https://schema.org/includesHealthPlanFormulary'
  | 'https://schema.org/includesHealthPlanNetwork'
  | 'https://schema.org/includesObject'
  | 'https://schema.org/increasesRiskOf'
  | 'https://schema.org/industry'
  | 'https://schema.org/ineligibleRegion'
  | 'https://schema.org/infectiousAgent'
  | 'https://schema.org/infectiousAgentClass'
  | 'https://schema.org/ingredients'
  | 'https://schema.org/inker'
  | 'https://schema.org/insertion'
  | 'https://schema.org/installUrl'
  | 'https://schema.org/instructor'
  | 'https://schema.org/instrument'
  | 'https://schema.org/intensity'
  | 'https://schema.org/interactingDrug'
  | 'https://schema.org/interactionCount'
  | 'https://schema.org/interactionService'
  | 'https://schema.org/interactionStatistic'
  | 'https://schema.org/interactionType'
  | 'https://schema.org/interactivityType'
  | 'https://schema.org/interestRate'
  | 'https://schema.org/inventoryLevel'
  | 'https://schema.org/inverseOf'
  | 'https://schema.org/isAcceptingNewPatients'
  | 'https://schema.org/isAccessibleForFree'
  | 'https://schema.org/isAccessoryOrSparePartFor'
  | 'https://schema.org/isAvailableGenerically'
  | 'https://schema.org/isBasedOn'
  | 'https://schema.org/isBasedOnUrl'
  | 'https://schema.org/isConsumableFor'
  | 'https://schema.org/isFamilyFriendly'
  | 'https://schema.org/isGift'
  | 'https://schema.org/isLiveBroadcast'
  | 'https://schema.org/isPartOf'
  | 'https://schema.org/isPlanForApartment'
  | 'https://schema.org/isProprietary'
  | 'https://schema.org/isRelatedTo'
  | 'https://schema.org/isResizable'
  | 'https://schema.org/isSimilarTo'
  | 'https://schema.org/isUnlabelledFallback'
  | 'https://schema.org/isVariantOf'
  | 'https://schema.org/isbn'
  | 'https://schema.org/isicV4'
  | 'https://schema.org/isrcCode'
  | 'https://schema.org/issn'
  | 'https://schema.org/issueNumber'
  | 'https://schema.org/issuedBy'
  | 'https://schema.org/issuedThrough'
  | 'https://schema.org/iswcCode'
  | 'https://schema.org/item'
  | 'https://schema.org/itemCondition'
  | 'https://schema.org/itemListElement'
  | 'https://schema.org/itemListOrder'
  | 'https://schema.org/itemLocation'
  | 'https://schema.org/itemOffered'
  | 'https://schema.org/itemReviewed'
  | 'https://schema.org/itemShipped'
  | 'https://schema.org/itinerary'
  | 'https://schema.org/jobBenefits'
  | 'https://schema.org/jobImmediateStart'
  | 'https://schema.org/jobLocation'
  | 'https://schema.org/jobLocationType'
  | 'https://schema.org/jobStartDate'
  | 'https://schema.org/jobTitle'
  | 'https://schema.org/jurisdiction'
  | 'https://schema.org/keywords'
  | 'https://schema.org/knownVehicleDamages'
  | 'https://schema.org/knows'
  | 'https://schema.org/knowsAbout'
  | 'https://schema.org/knowsLanguage'
  | 'https://schema.org/labelDetails'
  | 'https://schema.org/landlord'
  | 'https://schema.org/language'
  | 'https://schema.org/lastReviewed'
  | 'https://schema.org/latitude'
  | 'https://schema.org/layoutImage'
  | 'https://schema.org/learningResourceType'
  | 'https://schema.org/leaseLength'
  | 'https://schema.org/legalName'
  | 'https://schema.org/legalStatus'
  | 'https://schema.org/legislationApplies'
  | 'https://schema.org/legislationChanges'
  | 'https://schema.org/legislationConsolidates'
  | 'https://schema.org/legislationDate'
  | 'https://schema.org/legislationDateVersion'
  | 'https://schema.org/legislationIdentifier'
  | 'https://schema.org/legislationJurisdiction'
  | 'https://schema.org/legislationLegalForce'
  | 'https://schema.org/legislationLegalValue'
  | 'https://schema.org/legislationPassedBy'
  | 'https://schema.org/legislationResponsible'
  | 'https://schema.org/legislationTransposes'
  | 'https://schema.org/legislationType'
  | 'https://schema.org/leiCode'
  | 'https://schema.org/lender'
  | 'https://schema.org/lesser'
  | 'https://schema.org/lesserOrEqual'
  | 'https://schema.org/letterer'
  | 'https://schema.org/license'
  | 'https://schema.org/line'
  | 'https://schema.org/linkRelationship'
  | 'https://schema.org/liveBlogUpdate'
  | 'https://schema.org/loanMortgageMandateAmount'
  | 'https://schema.org/loanPaymentAmount'
  | 'https://schema.org/loanPaymentFrequency'
  | 'https://schema.org/loanRepaymentForm'
  | 'https://schema.org/loanTerm'
  | 'https://schema.org/loanType'
  | 'https://schema.org/location'
  | 'https://schema.org/locationCreated'
  | 'https://schema.org/lodgingUnitDescription'
  | 'https://schema.org/lodgingUnitType'
  | 'https://schema.org/logo'
  | 'https://schema.org/longitude'
  | 'https://schema.org/loser'
  | 'https://schema.org/lowPrice'
  | 'https://schema.org/lyricist'
  | 'https://schema.org/lyrics'
  | 'https://schema.org/mainContentOfPage'
  | 'https://schema.org/mainEntity'
  | 'https://schema.org/mainEntityOfPage'
  | 'https://schema.org/maintainer'
  | 'https://schema.org/makesOffer'
  | 'https://schema.org/manufacturer'
  | 'https://schema.org/map'
  | 'https://schema.org/mapType'
  | 'https://schema.org/maps'
  | 'https://schema.org/marginOfError'
  | 'https://schema.org/masthead'
  | 'https://schema.org/material'
  | 'https://schema.org/materialExtent'
  | 'https://schema.org/mathExpression'
  | 'https://schema.org/maxPrice'
  | 'https://schema.org/maxValue'
  | 'https://schema.org/maximumAttendeeCapacity'
  | 'https://schema.org/maximumEnrollment'
  | 'https://schema.org/maximumIntake'
  | 'https://schema.org/maximumPhysicalAttendeeCapacity'
  | 'https://schema.org/maximumVirtualAttendeeCapacity'
  | 'https://schema.org/mealService'
  | 'https://schema.org/measuredProperty'
  | 'https://schema.org/measuredValue'
  | 'https://schema.org/measurementTechnique'
  | 'https://schema.org/mechanismOfAction'
  | 'https://schema.org/mediaAuthenticityCategory'
  | 'https://schema.org/median'
  | 'https://schema.org/medicalAudience'
  | 'https://schema.org/medicalSpecialty'
  | 'https://schema.org/medicineSystem'
  | 'https://schema.org/meetsEmissionStandard'
  | 'https://schema.org/member'
  | 'https://schema.org/memberOf'
  | 'https://schema.org/members'
  | 'https://schema.org/membershipNumber'
  | 'https://schema.org/membershipPointsEarned'
  | 'https://schema.org/memoryRequirements'
  | 'https://schema.org/mentions'
  | 'https://schema.org/menu'
  | 'https://schema.org/menuAddOn'
  | 'https://schema.org/merchant'
  | 'https://schema.org/merchantReturnDays'
  | 'https://schema.org/merchantReturnLink'
  | 'https://schema.org/messageAttachment'
  | 'https://schema.org/mileageFromOdometer'
  | 'https://schema.org/minPrice'
  | 'https://schema.org/minValue'
  | 'https://schema.org/minimumPaymentDue'
  | 'https://schema.org/missionCoveragePrioritiesPolicy'
  | 'https://schema.org/model'
  | 'https://schema.org/modelDate'
  | 'https://schema.org/modifiedTime'
  | 'https://schema.org/monthlyMinimumRepaymentAmount'
  | 'https://schema.org/monthsOfExperience'
  | 'https://schema.org/mpn'
  | 'https://schema.org/multipleValues'
  | 'https://schema.org/muscleAction'
  | 'https://schema.org/musicArrangement'
  | 'https://schema.org/musicBy'
  | 'https://schema.org/musicCompositionForm'
  | 'https://schema.org/musicGroupMember'
  | 'https://schema.org/musicReleaseFormat'
  | 'https://schema.org/musicalKey'
  | 'https://schema.org/naics'
  | 'https://schema.org/name'
  | 'https://schema.org/namedPosition'
  | 'https://schema.org/nationality'
  | 'https://schema.org/naturalProgression'
  | 'https://schema.org/nerve'
  | 'https://schema.org/nerveMotor'
  | 'https://schema.org/netWorth'
  | 'https://schema.org/newsUpdatesAndGuidelines'
  | 'https://schema.org/nextItem'
  | 'https://schema.org/noBylinesPolicy'
  | 'https://schema.org/nonEqual'
  | 'https://schema.org/nonProprietaryName'
  | 'https://schema.org/nonprofitStatus'
  | 'https://schema.org/normalRange'
  | 'https://schema.org/nsn'
  | 'https://schema.org/numAdults'
  | 'https://schema.org/numChildren'
  | 'https://schema.org/numConstraints'
  | 'https://schema.org/numTracks'
  | 'https://schema.org/numberOfAccommodationUnits'
  | 'https://schema.org/numberOfAirbags'
  | 'https://schema.org/numberOfAvailableAccommodationUnits'
  | 'https://schema.org/numberOfAxles'
  | 'https://schema.org/numberOfBathroomsTotal'
  | 'https://schema.org/numberOfBedrooms'
  | 'https://schema.org/numberOfBeds'
  | 'https://schema.org/numberOfCredits'
  | 'https://schema.org/numberOfDoors'
  | 'https://schema.org/numberOfEmployees'
  | 'https://schema.org/numberOfEpisodes'
  | 'https://schema.org/numberOfForwardGears'
  | 'https://schema.org/numberOfFullBathrooms'
  | 'https://schema.org/numberOfItems'
  | 'https://schema.org/numberOfLoanPayments'
  | 'https://schema.org/numberOfPages'
  | 'https://schema.org/numberOfPartialBathrooms'
  | 'https://schema.org/numberOfPlayers'
  | 'https://schema.org/numberOfPreviousOwners'
  | 'https://schema.org/numberOfRooms'
  | 'https://schema.org/numberOfSeasons'
  | 'https://schema.org/numberedPosition'
  | 'https://schema.org/nutrition'
  | 'https://schema.org/object'
  | 'https://schema.org/observationDate'
  | 'https://schema.org/observedNode'
  | 'https://schema.org/occupancy'
  | 'https://schema.org/occupationLocation'
  | 'https://schema.org/occupationalCategory'
  | 'https://schema.org/occupationalCredentialAwarded'
  | 'https://schema.org/offerCount'
  | 'https://schema.org/offeredBy'
  | 'https://schema.org/offers'
  | 'https://schema.org/offersPrescriptionByMail'
  | 'https://schema.org/openingHours'
  | 'https://schema.org/openingHoursSpecification'
  | 'https://schema.org/opens'
  | 'https://schema.org/operatingSystem'
  | 'https://schema.org/opponent'
  | 'https://schema.org/option'
  | 'https://schema.org/orderDate'
  | 'https://schema.org/orderDelivery'
  | 'https://schema.org/orderItemNumber'
  | 'https://schema.org/orderItemStatus'
  | 'https://schema.org/orderNumber'
  | 'https://schema.org/orderQuantity'
  | 'https://schema.org/orderStatus'
  | 'https://schema.org/orderedItem'
  | 'https://schema.org/organizer'
  | 'https://schema.org/originAddress'
  | 'https://schema.org/originatesFrom'
  | 'https://schema.org/overdosage'
  | 'https://schema.org/ownedFrom'
  | 'https://schema.org/ownedThrough'
  | 'https://schema.org/ownershipFundingInfo'
  | 'https://schema.org/owns'
  | 'https://schema.org/pageEnd'
  | 'https://schema.org/pageStart'
  | 'https://schema.org/pagination'
  | 'https://schema.org/parent'
  | 'https://schema.org/parentItem'
  | 'https://schema.org/parentOrganization'
  | 'https://schema.org/parentService'
  | 'https://schema.org/parents'
  | 'https://schema.org/partOfEpisode'
  | 'https://schema.org/partOfInvoice'
  | 'https://schema.org/partOfOrder'
  | 'https://schema.org/partOfSeason'
  | 'https://schema.org/partOfSeries'
  | 'https://schema.org/partOfSystem'
  | 'https://schema.org/partOfTVSeries'
  | 'https://schema.org/partOfTrip'
  | 'https://schema.org/participant'
  | 'https://schema.org/partySize'
  | 'https://schema.org/passengerPriorityStatus'
  | 'https://schema.org/passengerSequenceNumber'
  | 'https://schema.org/pathophysiology'
  | 'https://schema.org/pattern'
  | 'https://schema.org/payload'
  | 'https://schema.org/paymentAccepted'
  | 'https://schema.org/paymentDue'
  | 'https://schema.org/paymentDueDate'
  | 'https://schema.org/paymentMethod'
  | 'https://schema.org/paymentMethodId'
  | 'https://schema.org/paymentStatus'
  | 'https://schema.org/paymentUrl'
  | 'https://schema.org/penciler'
  | 'https://schema.org/percentile10'
  | 'https://schema.org/percentile25'
  | 'https://schema.org/percentile75'
  | 'https://schema.org/percentile90'
  | 'https://schema.org/performTime'
  | 'https://schema.org/performer'
  | 'https://schema.org/performerIn'
  | 'https://schema.org/performers'
  | 'https://schema.org/permissionType'
  | 'https://schema.org/permissions'
  | 'https://schema.org/permitAudience'
  | 'https://schema.org/permittedUsage'
  | 'https://schema.org/petsAllowed'
  | 'https://schema.org/phoneticText'
  | 'https://schema.org/photo'
  | 'https://schema.org/photos'
  | 'https://schema.org/physicalRequirement'
  | 'https://schema.org/physiologicalBenefits'
  | 'https://schema.org/pickupLocation'
  | 'https://schema.org/pickupTime'
  | 'https://schema.org/playMode'
  | 'https://schema.org/playerType'
  | 'https://schema.org/playersOnline'
  | 'https://schema.org/polygon'
  | 'https://schema.org/populationType'
  | 'https://schema.org/position'
  | 'https://schema.org/possibleComplication'
  | 'https://schema.org/possibleTreatment'
  | 'https://schema.org/postOfficeBoxNumber'
  | 'https://schema.org/postOp'
  | 'https://schema.org/postalCode'
  | 'https://schema.org/postalCodeBegin'
  | 'https://schema.org/postalCodeEnd'
  | 'https://schema.org/postalCodePrefix'
  | 'https://schema.org/postalCodeRange'
  | 'https://schema.org/potentialAction'
  | 'https://schema.org/preOp'
  | 'https://schema.org/predecessorOf'
  | 'https://schema.org/pregnancyCategory'
  | 'https://schema.org/pregnancyWarning'
  | 'https://schema.org/prepTime'
  | 'https://schema.org/preparation'
  | 'https://schema.org/prescribingInfo'
  | 'https://schema.org/prescriptionStatus'
  | 'https://schema.org/previousItem'
  | 'https://schema.org/previousStartDate'
  | 'https://schema.org/price'
  | 'https://schema.org/priceComponent'
  | 'https://schema.org/priceComponentType'
  | 'https://schema.org/priceCurrency'
  | 'https://schema.org/priceRange'
  | 'https://schema.org/priceSpecification'
  | 'https://schema.org/priceType'
  | 'https://schema.org/priceValidUntil'
  | 'https://schema.org/primaryImageOfPage'
  | 'https://schema.org/primaryPrevention'
  | 'https://schema.org/printColumn'
  | 'https://schema.org/printEdition'
  | 'https://schema.org/printPage'
  | 'https://schema.org/printSection'
  | 'https://schema.org/procedure'
  | 'https://schema.org/procedureType'
  | 'https://schema.org/processingTime'
  | 'https://schema.org/processorRequirements'
  | 'https://schema.org/producer'
  | 'https://schema.org/produces'
  | 'https://schema.org/productGroupID'
  | 'https://schema.org/productID'
  | 'https://schema.org/productSupported'
  | 'https://schema.org/productionCompany'
  | 'https://schema.org/productionDate'
  | 'https://schema.org/proficiencyLevel'
  | 'https://schema.org/programMembershipUsed'
  | 'https://schema.org/programName'
  | 'https://schema.org/programPrerequisites'
  | 'https://schema.org/programType'
  | 'https://schema.org/programmingLanguage'
  | 'https://schema.org/programmingModel'
  | 'https://schema.org/propertyID'
  | 'https://schema.org/proprietaryName'
  | 'https://schema.org/proteinContent'
  | 'https://schema.org/provider'
  | 'https://schema.org/providerMobility'
  | 'https://schema.org/providesBroadcastService'
  | 'https://schema.org/providesService'
  | 'https://schema.org/publicAccess'
  | 'https://schema.org/publicTransportClosuresInfo'
  | 'https://schema.org/publication'
  | 'https://schema.org/publicationType'
  | 'https://schema.org/publishedBy'
  | 'https://schema.org/publishedOn'
  | 'https://schema.org/publisher'
  | 'https://schema.org/publisherImprint'
  | 'https://schema.org/publishingPrinciples'
  | 'https://schema.org/purchaseDate'
  | 'https://schema.org/qualifications'
  | 'https://schema.org/quarantineGuidelines'
  | 'https://schema.org/query'
  | 'https://schema.org/quest'
  | 'https://schema.org/question'
  | 'https://schema.org/rangeIncludes'
  | 'https://schema.org/ratingCount'
  | 'https://schema.org/ratingExplanation'
  | 'https://schema.org/ratingValue'
  | 'https://schema.org/readBy'
  | 'https://schema.org/readonlyValue'
  | 'https://schema.org/realEstateAgent'
  | 'https://schema.org/recipe'
  | 'https://schema.org/recipeCategory'
  | 'https://schema.org/recipeCuisine'
  | 'https://schema.org/recipeIngredient'
  | 'https://schema.org/recipeInstructions'
  | 'https://schema.org/recipeYield'
  | 'https://schema.org/recipient'
  | 'https://schema.org/recognizedBy'
  | 'https://schema.org/recognizingAuthority'
  | 'https://schema.org/recommendationStrength'
  | 'https://schema.org/recommendedIntake'
  | 'https://schema.org/recordLabel'
  | 'https://schema.org/recordedAs'
  | 'https://schema.org/recordedAt'
  | 'https://schema.org/recordedIn'
  | 'https://schema.org/recordingOf'
  | 'https://schema.org/recourseLoan'
  | 'https://schema.org/referenceQuantity'
  | 'https://schema.org/referencesOrder'
  | 'https://schema.org/refundType'
  | 'https://schema.org/regionDrained'
  | 'https://schema.org/regionsAllowed'
  | 'https://schema.org/relatedAnatomy'
  | 'https://schema.org/relatedCondition'
  | 'https://schema.org/relatedDrug'
  | 'https://schema.org/relatedLink'
  | 'https://schema.org/relatedStructure'
  | 'https://schema.org/relatedTherapy'
  | 'https://schema.org/relatedTo'
  | 'https://schema.org/releaseDate'
  | 'https://schema.org/releaseNotes'
  | 'https://schema.org/releaseOf'
  | 'https://schema.org/releasedEvent'
  | 'https://schema.org/relevantOccupation'
  | 'https://schema.org/relevantSpecialty'
  | 'https://schema.org/remainingAttendeeCapacity'
  | 'https://schema.org/renegotiableLoan'
  | 'https://schema.org/repeatCount'
  | 'https://schema.org/repeatFrequency'
  | 'https://schema.org/repetitions'
  | 'https://schema.org/replacee'
  | 'https://schema.org/replacer'
  | 'https://schema.org/replyToUrl'
  | 'https://schema.org/reportNumber'
  | 'https://schema.org/representativeOfPage'
  | 'https://schema.org/requiredCollateral'
  | 'https://schema.org/requiredGender'
  | 'https://schema.org/requiredMaxAge'
  | 'https://schema.org/requiredMinAge'
  | 'https://schema.org/requiredQuantity'
  | 'https://schema.org/requirements'
  | 'https://schema.org/requiresSubscription'
  | 'https://schema.org/reservationFor'
  | 'https://schema.org/reservationId'
  | 'https://schema.org/reservationStatus'
  | 'https://schema.org/reservedTicket'
  | 'https://schema.org/responsibilities'
  | 'https://schema.org/restPeriods'
  | 'https://schema.org/result'
  | 'https://schema.org/resultComment'
  | 'https://schema.org/resultReview'
  | 'https://schema.org/returnFees'
  | 'https://schema.org/returnPolicyCategory'
  | 'https://schema.org/review'
  | 'https://schema.org/reviewAspect'
  | 'https://schema.org/reviewBody'
  | 'https://schema.org/reviewCount'
  | 'https://schema.org/reviewRating'
  | 'https://schema.org/reviewedBy'
  | 'https://schema.org/reviews'
  | 'https://schema.org/riskFactor'
  | 'https://schema.org/risks'
  | 'https://schema.org/roleName'
  | 'https://schema.org/roofLoad'
  | 'https://schema.org/rsvpResponse'
  | 'https://schema.org/runsTo'
  | 'https://schema.org/runtime'
  | 'https://schema.org/runtimePlatform'
  | 'https://schema.org/rxcui'
  | 'https://schema.org/safetyConsideration'
  | 'https://schema.org/salaryCurrency'
  | 'https://schema.org/salaryUponCompletion'
  | 'https://schema.org/sameAs'
  | 'https://schema.org/sampleType'
  | 'https://schema.org/saturatedFatContent'
  | 'https://schema.org/scheduleTimezone'
  | 'https://schema.org/scheduledPaymentDate'
  | 'https://schema.org/scheduledTime'
  | 'https://schema.org/schemaVersion'
  | 'https://schema.org/schoolClosuresInfo'
  | 'https://schema.org/screenCount'
  | 'https://schema.org/screenshot'
  | 'https://schema.org/sdDatePublished'
  | 'https://schema.org/sdLicense'
  | 'https://schema.org/sdPublisher'
  | 'https://schema.org/season'
  | 'https://schema.org/seasonNumber'
  | 'https://schema.org/seasons'
  | 'https://schema.org/seatNumber'
  | 'https://schema.org/seatRow'
  | 'https://schema.org/seatSection'
  | 'https://schema.org/seatingCapacity'
  | 'https://schema.org/seatingType'
  | 'https://schema.org/secondaryPrevention'
  | 'https://schema.org/securityClearanceRequirement'
  | 'https://schema.org/securityScreening'
  | 'https://schema.org/seeks'
  | 'https://schema.org/seller'
  | 'https://schema.org/sender'
  | 'https://schema.org/sensoryRequirement'
  | 'https://schema.org/sensoryUnit'
  | 'https://schema.org/serialNumber'
  | 'https://schema.org/seriousAdverseOutcome'
  | 'https://schema.org/serverStatus'
  | 'https://schema.org/servesCuisine'
  | 'https://schema.org/serviceArea'
  | 'https://schema.org/serviceAudience'
  | 'https://schema.org/serviceLocation'
  | 'https://schema.org/serviceOperator'
  | 'https://schema.org/serviceOutput'
  | 'https://schema.org/servicePhone'
  | 'https://schema.org/servicePostalAddress'
  | 'https://schema.org/serviceSmsNumber'
  | 'https://schema.org/serviceType'
  | 'https://schema.org/serviceUrl'
  | 'https://schema.org/servingSize'
  | 'https://schema.org/sharedContent'
  | 'https://schema.org/shippingDestination'
  | 'https://schema.org/shippingDetails'
  | 'https://schema.org/shippingLabel'
  | 'https://schema.org/shippingRate'
  | 'https://schema.org/shippingSettingsLink'
  | 'https://schema.org/sibling'
  | 'https://schema.org/siblings'
  | 'https://schema.org/signDetected'
  | 'https://schema.org/signOrSymptom'
  | 'https://schema.org/significance'
  | 'https://schema.org/significantLink'
  | 'https://schema.org/significantLinks'
  | 'https://schema.org/size'
  | 'https://schema.org/sizeGroup'
  | 'https://schema.org/sizeSystem'
  | 'https://schema.org/skills'
  | 'https://schema.org/sku'
  | 'https://schema.org/slogan'
  | 'https://schema.org/smokingAllowed'
  | 'https://schema.org/sodiumContent'
  | 'https://schema.org/softwareAddOn'
  | 'https://schema.org/softwareHelp'
  | 'https://schema.org/softwareRequirements'
  | 'https://schema.org/softwareVersion'
  | 'https://schema.org/sourceOrganization'
  | 'https://schema.org/sourcedFrom'
  | 'https://schema.org/spatial'
  | 'https://schema.org/spatialCoverage'
  | 'https://schema.org/speakable'
  | 'https://schema.org/specialCommitments'
  | 'https://schema.org/specialOpeningHoursSpecification'
  | 'https://schema.org/specialty'
  | 'https://schema.org/speechToTextMarkup'
  | 'https://schema.org/speed'
  | 'https://schema.org/spokenByCharacter'
  | 'https://schema.org/sponsor'
  | 'https://schema.org/sport'
  | 'https://schema.org/sportsActivityLocation'
  | 'https://schema.org/sportsEvent'
  | 'https://schema.org/sportsTeam'
  | 'https://schema.org/spouse'
  | 'https://schema.org/stage'
  | 'https://schema.org/stageAsNumber'
  | 'https://schema.org/starRating'
  | 'https://schema.org/startDate'
  | 'https://schema.org/startOffset'
  | 'https://schema.org/startTime'
  | 'https://schema.org/status'
  | 'https://schema.org/steeringPosition'
  | 'https://schema.org/step'
  | 'https://schema.org/stepValue'
  | 'https://schema.org/steps'
  | 'https://schema.org/storageRequirements'
  | 'https://schema.org/streetAddress'
  | 'https://schema.org/strengthUnit'
  | 'https://schema.org/strengthValue'
  | 'https://schema.org/structuralClass'
  | 'https://schema.org/study'
  | 'https://schema.org/studyDesign'
  | 'https://schema.org/studyLocation'
  | 'https://schema.org/studySubject'
  | 'https://schema.org/subEvent'
  | 'https://schema.org/subEvents'
  | 'https://schema.org/subOrganization'
  | 'https://schema.org/subReservation'
  | 'https://schema.org/subStageSuffix'
  | 'https://schema.org/subStructure'
  | 'https://schema.org/subTest'
  | 'https://schema.org/subTrip'
  | 'https://schema.org/subjectOf'
  | 'https://schema.org/subtitleLanguage'
  | 'https://schema.org/successorOf'
  | 'https://schema.org/sugarContent'
  | 'https://schema.org/suggestedAge'
  | 'https://schema.org/suggestedAnswer'
  | 'https://schema.org/suggestedGender'
  | 'https://schema.org/suggestedMaxAge'
  | 'https://schema.org/suggestedMeasurement'
  | 'https://schema.org/suggestedMinAge'
  | 'https://schema.org/suitableForDiet'
  | 'https://schema.org/superEvent'
  | 'https://schema.org/supersededBy'
  | 'https://schema.org/supply'
  | 'https://schema.org/supplyTo'
  | 'https://schema.org/supportingData'
  | 'https://schema.org/surface'
  | 'https://schema.org/target'
  | 'https://schema.org/targetCollection'
  | 'https://schema.org/targetDescription'
  | 'https://schema.org/targetName'
  | 'https://schema.org/targetPlatform'
  | 'https://schema.org/targetPopulation'
  | 'https://schema.org/targetProduct'
  | 'https://schema.org/targetUrl'
  | 'https://schema.org/taxID'
  | 'https://schema.org/teaches'
  | 'https://schema.org/telephone'
  | 'https://schema.org/temporal'
  | 'https://schema.org/temporalCoverage'
  | 'https://schema.org/termCode'
  | 'https://schema.org/termDuration'
  | 'https://schema.org/termsOfService'
  | 'https://schema.org/termsPerYear'
  | 'https://schema.org/text'
  | 'https://schema.org/textValue'
  | 'https://schema.org/thumbnail'
  | 'https://schema.org/thumbnailUrl'
  | 'https://schema.org/tickerSymbol'
  | 'https://schema.org/ticketNumber'
  | 'https://schema.org/ticketToken'
  | 'https://schema.org/ticketedSeat'
  | 'https://schema.org/timeOfDay'
  | 'https://schema.org/timeRequired'
  | 'https://schema.org/timeToComplete'
  | 'https://schema.org/tissueSample'
  | 'https://schema.org/title'
  | 'https://schema.org/titleEIDR'
  | 'https://schema.org/toLocation'
  | 'https://schema.org/toRecipient'
  | 'https://schema.org/tocContinuation'
  | 'https://schema.org/tocEntry'
  | 'https://schema.org/tongueWeight'
  | 'https://schema.org/tool'
  | 'https://schema.org/torque'
  | 'https://schema.org/totalJobOpenings'
  | 'https://schema.org/totalPaymentDue'
  | 'https://schema.org/totalPrice'
  | 'https://schema.org/totalTime'
  | 'https://schema.org/tourBookingPage'
  | 'https://schema.org/touristType'
  | 'https://schema.org/track'
  | 'https://schema.org/trackingNumber'
  | 'https://schema.org/trackingUrl'
  | 'https://schema.org/tracks'
  | 'https://schema.org/trailer'
  | 'https://schema.org/trailerWeight'
  | 'https://schema.org/trainName'
  | 'https://schema.org/trainNumber'
  | 'https://schema.org/trainingSalary'
  | 'https://schema.org/transFatContent'
  | 'https://schema.org/transcript'
  | 'https://schema.org/transitTime'
  | 'https://schema.org/transitTimeLabel'
  | 'https://schema.org/translationOfWork'
  | 'https://schema.org/translator'
  | 'https://schema.org/transmissionMethod'
  | 'https://schema.org/travelBans'
  | 'https://schema.org/trialDesign'
  | 'https://schema.org/tributary'
  | 'https://schema.org/typeOfBed'
  | 'https://schema.org/typeOfGood'
  | 'https://schema.org/typicalAgeRange'
  | 'https://schema.org/typicalCreditsPerTerm'
  | 'https://schema.org/typicalTest'
  | 'https://schema.org/underName'
  | 'https://schema.org/unitCode'
  | 'https://schema.org/unitText'
  | 'https://schema.org/unnamedSourcesPolicy'
  | 'https://schema.org/unsaturatedFatContent'
  | 'https://schema.org/uploadDate'
  | 'https://schema.org/upvoteCount'
  | 'https://schema.org/url'
  | 'https://schema.org/urlTemplate'
  | 'https://schema.org/usageInfo'
  | 'https://schema.org/usedToDiagnose'
  | 'https://schema.org/userInteractionCount'
  | 'https://schema.org/usesDevice'
  | 'https://schema.org/usesHealthPlanIdStandard'
  | 'https://schema.org/utterances'
  | 'https://schema.org/validFor'
  | 'https://schema.org/validFrom'
  | 'https://schema.org/validIn'
  | 'https://schema.org/validThrough'
  | 'https://schema.org/validUntil'
  | 'https://schema.org/value'
  | 'https://schema.org/valueAddedTaxIncluded'
  | 'https://schema.org/valueMaxLength'
  | 'https://schema.org/valueMinLength'
  | 'https://schema.org/valueName'
  | 'https://schema.org/valuePattern'
  | 'https://schema.org/valueReference'
  | 'https://schema.org/valueRequired'
  | 'https://schema.org/variableMeasured'
  | 'https://schema.org/variantCover'
  | 'https://schema.org/variesBy'
  | 'https://schema.org/vatID'
  | 'https://schema.org/vehicleConfiguration'
  | 'https://schema.org/vehicleEngine'
  | 'https://schema.org/vehicleIdentificationNumber'
  | 'https://schema.org/vehicleInteriorColor'
  | 'https://schema.org/vehicleInteriorType'
  | 'https://schema.org/vehicleModelDate'
  | 'https://schema.org/vehicleSeatingCapacity'
  | 'https://schema.org/vehicleSpecialUsage'
  | 'https://schema.org/vehicleTransmission'
  | 'https://schema.org/vendor'
  | 'https://schema.org/verificationFactCheckingPolicy'
  | 'https://schema.org/version'
  | 'https://schema.org/video'
  | 'https://schema.org/videoFormat'
  | 'https://schema.org/videoFrameSize'
  | 'https://schema.org/videoQuality'
  | 'https://schema.org/volumeNumber'
  | 'https://schema.org/warning'
  | 'https://schema.org/warranty'
  | 'https://schema.org/warrantyPromise'
  | 'https://schema.org/warrantyScope'
  | 'https://schema.org/webCheckinTime'
  | 'https://schema.org/webFeed'
  | 'https://schema.org/weight'
  | 'https://schema.org/weightTotal'
  | 'https://schema.org/wheelbase'
  | 'https://schema.org/width'
  | 'https://schema.org/winner'
  | 'https://schema.org/wordCount'
  | 'https://schema.org/workExample'
  | 'https://schema.org/workFeatured'
  | 'https://schema.org/workHours'
  | 'https://schema.org/workLocation'
  | 'https://schema.org/workPerformed'
  | 'https://schema.org/workPresented'
  | 'https://schema.org/workTranslation'
  | 'https://schema.org/workload'
  | 'https://schema.org/worksFor'
  | 'https://schema.org/worstRating'
  | 'https://schema.org/xpath'
  | 'https://schema.org/yearBuilt'
  | 'https://schema.org/yearlyRevenue'
  | 'https://schema.org/yearsInOperation'
  | 'https://schema.org/yield'
  ;

/**
 * PropertyEnumeration - Validation schema (w/ JOI)
 *
 * This enumeration contains a value for all properties in the https://schema.org/ and https://openactive.io/ vocabularies.
 */
export const PropertyEnumerationJoiSchema = Joi.string().valid(
  'https://openactive.io/accessChannel',
  'https://openactive.io/accessId',
  'https://openactive.io/accessPass',
  'https://openactive.io/accessibilityInformation',
  'https://openactive.io/accessibilitySupport',
  'https://openactive.io/activity',
  'https://openactive.io/additionalAdmissionRestriction',
  'https://openactive.io/ageRange',
  'https://openactive.io/ageRestriction',
  'https://openactive.io/aggregateFacilityUse',
  'https://openactive.io/allowCustomerCancellationFullRefund',
  'https://openactive.io/attendeeDetailsRequired',
  'https://openactive.io/attendeeInstructions',
  'https://openactive.io/authenticationAuthority',
  'https://openactive.io/backgroundImage',
  'https://openactive.io/bookingService',
  'https://openactive.io/brokerRole',
  'https://openactive.io/cancellationMessage',
  'https://openactive.io/concept',
  'https://openactive.io/customerNotice',
  'https://openactive.io/facilityUse',
  'https://openactive.io/genderRestriction',
  'https://openactive.io/idTemplate',
  'https://openactive.io/individualFacilityUse',
  'https://openactive.io/instance',
  'https://openactive.io/instanceOfCourse',
  'https://openactive.io/isCoached',
  'https://openactive.io/isOpenBookingAllowed',
  'https://openactive.io/latestCancellationBeforeStartDate',
  'https://openactive.io/leader',
  'https://openactive.io/lease',
  'https://openactive.io/leaseExpires',
  'https://openactive.io/level',
  'https://openactive.io/maximumUses',
  'https://openactive.io/meetingPoint',
  'https://openactive.io/openBookingFlowRequirement',
  'https://openactive.io/openBookingInAdvance',
  'https://openactive.io/openBookingPrepayment',
  'https://openactive.io/orderCreationStatus',
  'https://openactive.io/orderCustomerNote',
  'https://openactive.io/orderItemIntakeForm',
  'https://openactive.io/orderItemIntakeFormResponse',
  'https://openactive.io/orderProposalStatus',
  'https://openactive.io/orderProposalVersion',
  'https://openactive.io/orderRequiresApproval',
  'https://openactive.io/orderSellerNote',
  'https://openactive.io/payment',
  'https://openactive.io/paymentProviderId',
  'https://openactive.io/programme',
  'https://openactive.io/rate',
  'https://openactive.io/remainingUses',
  'https://openactive.io/requestId',
  'https://openactive.io/requiresExplicitConsent',
  'https://openactive.io/scheduledEventType',
  'https://openactive.io/schedulingNote',
  'https://openactive.io/statusCode',
  'https://openactive.io/taxCalculationExcluded',
  'https://openactive.io/taxMode',
  'https://openactive.io/totalPaymentTax',
  'https://openactive.io/unitTaxSpecification',
  'https://openactive.io/validFromBeforeStartDate',
  'https://openactive.io/valueOption',
  'https://schema.org/about',
  'https://schema.org/abridged',
  'https://schema.org/abstract',
  'https://schema.org/accelerationTime',
  'https://schema.org/acceptedAnswer',
  'https://schema.org/acceptedOffer',
  'https://schema.org/acceptedPaymentMethod',
  'https://schema.org/acceptsReservations',
  'https://schema.org/accessCode',
  'https://schema.org/accessMode',
  'https://schema.org/accessModeSufficient',
  'https://schema.org/accessibilityAPI',
  'https://schema.org/accessibilityControl',
  'https://schema.org/accessibilityFeature',
  'https://schema.org/accessibilityHazard',
  'https://schema.org/accessibilitySummary',
  'https://schema.org/accommodationCategory',
  'https://schema.org/accommodationFloorPlan',
  'https://schema.org/accountId',
  'https://schema.org/accountMinimumInflow',
  'https://schema.org/accountOverdraftLimit',
  'https://schema.org/accountablePerson',
  'https://schema.org/acquireLicensePage',
  'https://schema.org/acquiredFrom',
  'https://schema.org/acrissCode',
  'https://schema.org/actionAccessibilityRequirement',
  'https://schema.org/actionApplication',
  'https://schema.org/actionOption',
  'https://schema.org/actionPlatform',
  'https://schema.org/actionStatus',
  'https://schema.org/actionableFeedbackPolicy',
  'https://schema.org/activeIngredient',
  'https://schema.org/activityDuration',
  'https://schema.org/activityFrequency',
  'https://schema.org/actor',
  'https://schema.org/actors',
  'https://schema.org/addOn',
  'https://schema.org/additionalName',
  'https://schema.org/additionalNumberOfGuests',
  'https://schema.org/additionalProperty',
  'https://schema.org/additionalType',
  'https://schema.org/additionalVariable',
  'https://schema.org/address',
  'https://schema.org/addressCountry',
  'https://schema.org/addressLocality',
  'https://schema.org/addressRegion',
  'https://schema.org/administrationRoute',
  'https://schema.org/advanceBookingRequirement',
  'https://schema.org/adverseOutcome',
  'https://schema.org/affectedBy',
  'https://schema.org/affiliation',
  'https://schema.org/afterMedia',
  'https://schema.org/agent',
  'https://schema.org/aggregateRating',
  'https://schema.org/aircraft',
  'https://schema.org/album',
  'https://schema.org/albumProductionType',
  'https://schema.org/albumRelease',
  'https://schema.org/albumReleaseType',
  'https://schema.org/albums',
  'https://schema.org/alcoholWarning',
  'https://schema.org/algorithm',
  'https://schema.org/alignmentType',
  'https://schema.org/alternateName',
  'https://schema.org/alternativeHeadline',
  'https://schema.org/alumni',
  'https://schema.org/alumniOf',
  'https://schema.org/amenityFeature',
  'https://schema.org/amount',
  'https://schema.org/amountOfThisGood',
  'https://schema.org/announcementLocation',
  'https://schema.org/annualPercentageRate',
  'https://schema.org/answerCount',
  'https://schema.org/answerExplanation',
  'https://schema.org/antagonist',
  'https://schema.org/appearance',
  'https://schema.org/applicableLocation',
  'https://schema.org/applicantLocationRequirements',
  'https://schema.org/application',
  'https://schema.org/applicationCategory',
  'https://schema.org/applicationContact',
  'https://schema.org/applicationDeadline',
  'https://schema.org/applicationStartDate',
  'https://schema.org/applicationSubCategory',
  'https://schema.org/applicationSuite',
  'https://schema.org/appliesToDeliveryMethod',
  'https://schema.org/appliesToPaymentMethod',
  'https://schema.org/archiveHeld',
  'https://schema.org/area',
  'https://schema.org/areaServed',
  'https://schema.org/arrivalAirport',
  'https://schema.org/arrivalBoatTerminal',
  'https://schema.org/arrivalBusStop',
  'https://schema.org/arrivalGate',
  'https://schema.org/arrivalPlatform',
  'https://schema.org/arrivalStation',
  'https://schema.org/arrivalTerminal',
  'https://schema.org/arrivalTime',
  'https://schema.org/artEdition',
  'https://schema.org/artMedium',
  'https://schema.org/arterialBranch',
  'https://schema.org/artform',
  'https://schema.org/articleBody',
  'https://schema.org/articleSection',
  'https://schema.org/artist',
  'https://schema.org/artworkSurface',
  'https://schema.org/aspect',
  'https://schema.org/assembly',
  'https://schema.org/assemblyVersion',
  'https://schema.org/assesses',
  'https://schema.org/associatedAnatomy',
  'https://schema.org/associatedArticle',
  'https://schema.org/associatedMedia',
  'https://schema.org/associatedPathophysiology',
  'https://schema.org/athlete',
  'https://schema.org/attendee',
  'https://schema.org/attendees',
  'https://schema.org/audience',
  'https://schema.org/audienceType',
  'https://schema.org/audio',
  'https://schema.org/authenticator',
  'https://schema.org/author',
  'https://schema.org/availability',
  'https://schema.org/availabilityEnds',
  'https://schema.org/availabilityStarts',
  'https://schema.org/availableAtOrFrom',
  'https://schema.org/availableChannel',
  'https://schema.org/availableDeliveryMethod',
  'https://schema.org/availableFrom',
  'https://schema.org/availableIn',
  'https://schema.org/availableLanguage',
  'https://schema.org/availableOnDevice',
  'https://schema.org/availableService',
  'https://schema.org/availableStrength',
  'https://schema.org/availableTest',
  'https://schema.org/availableThrough',
  'https://schema.org/award',
  'https://schema.org/awards',
  'https://schema.org/awayTeam',
  'https://schema.org/backstory',
  'https://schema.org/bankAccountType',
  'https://schema.org/baseSalary',
  'https://schema.org/bccRecipient',
  'https://schema.org/bed',
  'https://schema.org/beforeMedia',
  'https://schema.org/beneficiaryBank',
  'https://schema.org/benefits',
  'https://schema.org/benefitsSummaryUrl',
  'https://schema.org/bestRating',
  'https://schema.org/billingAddress',
  'https://schema.org/billingDuration',
  'https://schema.org/billingIncrement',
  'https://schema.org/billingPeriod',
  'https://schema.org/billingStart',
  'https://schema.org/biomechnicalClass',
  'https://schema.org/birthDate',
  'https://schema.org/birthPlace',
  'https://schema.org/bitrate',
  'https://schema.org/blogPost',
  'https://schema.org/blogPosts',
  'https://schema.org/bloodSupply',
  'https://schema.org/boardingGroup',
  'https://schema.org/boardingPolicy',
  'https://schema.org/bodyLocation',
  'https://schema.org/bodyType',
  'https://schema.org/bookEdition',
  'https://schema.org/bookFormat',
  'https://schema.org/bookingAgent',
  'https://schema.org/bookingTime',
  'https://schema.org/borrower',
  'https://schema.org/box',
  'https://schema.org/branch',
  'https://schema.org/branchCode',
  'https://schema.org/branchOf',
  'https://schema.org/brand',
  'https://schema.org/breadcrumb',
  'https://schema.org/breastfeedingWarning',
  'https://schema.org/broadcastAffiliateOf',
  'https://schema.org/broadcastChannelId',
  'https://schema.org/broadcastDisplayName',
  'https://schema.org/broadcastFrequency',
  'https://schema.org/broadcastFrequencyValue',
  'https://schema.org/broadcastOfEvent',
  'https://schema.org/broadcastServiceTier',
  'https://schema.org/broadcastSignalModulation',
  'https://schema.org/broadcastSubChannel',
  'https://schema.org/broadcastTimezone',
  'https://schema.org/broadcaster',
  'https://schema.org/broker',
  'https://schema.org/browserRequirements',
  'https://schema.org/busName',
  'https://schema.org/busNumber',
  'https://schema.org/businessDays',
  'https://schema.org/businessFunction',
  'https://schema.org/buyer',
  'https://schema.org/byArtist',
  'https://schema.org/byDay',
  'https://schema.org/byMonth',
  'https://schema.org/byMonthDay',
  'https://schema.org/byMonthWeek',
  'https://schema.org/callSign',
  'https://schema.org/calories',
  'https://schema.org/candidate',
  'https://schema.org/caption',
  'https://schema.org/carbohydrateContent',
  'https://schema.org/cargoVolume',
  'https://schema.org/carrier',
  'https://schema.org/carrierRequirements',
  'https://schema.org/cashBack',
  'https://schema.org/catalog',
  'https://schema.org/catalogNumber',
  'https://schema.org/category',
  'https://schema.org/causeOf',
  'https://schema.org/ccRecipient',
  'https://schema.org/character',
  'https://schema.org/characterAttribute',
  'https://schema.org/characterName',
  'https://schema.org/cheatCode',
  'https://schema.org/checkinTime',
  'https://schema.org/checkoutTime',
  'https://schema.org/childMaxAge',
  'https://schema.org/childMinAge',
  'https://schema.org/children',
  'https://schema.org/cholesterolContent',
  'https://schema.org/circle',
  'https://schema.org/citation',
  'https://schema.org/claimReviewed',
  'https://schema.org/clincalPharmacology',
  'https://schema.org/clinicalPharmacology',
  'https://schema.org/clipNumber',
  'https://schema.org/closes',
  'https://schema.org/coach',
  'https://schema.org/code',
  'https://schema.org/codeRepository',
  'https://schema.org/codeSampleType',
  'https://schema.org/codeValue',
  'https://schema.org/codingSystem',
  'https://schema.org/colleague',
  'https://schema.org/colleagues',
  'https://schema.org/collection',
  'https://schema.org/collectionSize',
  'https://schema.org/color',
  'https://schema.org/colorist',
  'https://schema.org/comment',
  'https://schema.org/commentCount',
  'https://schema.org/commentText',
  'https://schema.org/commentTime',
  'https://schema.org/competencyRequired',
  'https://schema.org/competitor',
  'https://schema.org/composer',
  'https://schema.org/comprisedOf',
  'https://schema.org/conditionsOfAccess',
  'https://schema.org/confirmationNumber',
  'https://schema.org/connectedTo',
  'https://schema.org/constrainingProperty',
  'https://schema.org/contactOption',
  'https://schema.org/contactPoint',
  'https://schema.org/contactPoints',
  'https://schema.org/contactType',
  'https://schema.org/contactlessPayment',
  'https://schema.org/containedIn',
  'https://schema.org/containedInPlace',
  'https://schema.org/containsPlace',
  'https://schema.org/containsSeason',
  'https://schema.org/contentLocation',
  'https://schema.org/contentRating',
  'https://schema.org/contentReferenceTime',
  'https://schema.org/contentSize',
  'https://schema.org/contentType',
  'https://schema.org/contentUrl',
  'https://schema.org/contraindication',
  'https://schema.org/contributor',
  'https://schema.org/cookTime',
  'https://schema.org/cookingMethod',
  'https://schema.org/copyrightHolder',
  'https://schema.org/copyrightNotice',
  'https://schema.org/copyrightYear',
  'https://schema.org/correction',
  'https://schema.org/correctionsPolicy',
  'https://schema.org/costCategory',
  'https://schema.org/costCurrency',
  'https://schema.org/costOrigin',
  'https://schema.org/costPerUnit',
  'https://schema.org/countriesNotSupported',
  'https://schema.org/countriesSupported',
  'https://schema.org/countryOfOrigin',
  'https://schema.org/course',
  'https://schema.org/courseCode',
  'https://schema.org/courseMode',
  'https://schema.org/coursePrerequisites',
  'https://schema.org/courseWorkload',
  'https://schema.org/coverageEndTime',
  'https://schema.org/coverageStartTime',
  'https://schema.org/creativeWorkStatus',
  'https://schema.org/creator',
  'https://schema.org/credentialCategory',
  'https://schema.org/creditText',
  'https://schema.org/creditedTo',
  'https://schema.org/cssSelector',
  'https://schema.org/currenciesAccepted',
  'https://schema.org/currency',
  'https://schema.org/currentExchangeRate',
  'https://schema.org/customer',
  'https://schema.org/cutoffTime',
  'https://schema.org/cvdCollectionDate',
  'https://schema.org/cvdFacilityCounty',
  'https://schema.org/cvdFacilityId',
  'https://schema.org/cvdNumBeds',
  'https://schema.org/cvdNumBedsOcc',
  'https://schema.org/cvdNumC19Died',
  'https://schema.org/cvdNumC19HOPats',
  'https://schema.org/cvdNumC19HospPats',
  'https://schema.org/cvdNumC19MechVentPats',
  'https://schema.org/cvdNumC19OFMechVentPats',
  'https://schema.org/cvdNumC19OverflowPats',
  'https://schema.org/cvdNumICUBeds',
  'https://schema.org/cvdNumICUBedsOcc',
  'https://schema.org/cvdNumTotBeds',
  'https://schema.org/cvdNumVent',
  'https://schema.org/cvdNumVentUse',
  'https://schema.org/dataFeedElement',
  'https://schema.org/dataset',
  'https://schema.org/datasetTimeInterval',
  'https://schema.org/dateCreated',
  'https://schema.org/dateDeleted',
  'https://schema.org/dateIssued',
  'https://schema.org/dateModified',
  'https://schema.org/datePosted',
  'https://schema.org/datePublished',
  'https://schema.org/dateRead',
  'https://schema.org/dateReceived',
  'https://schema.org/dateSent',
  'https://schema.org/dateVehicleFirstRegistered',
  'https://schema.org/dateline',
  'https://schema.org/dayOfWeek',
  'https://schema.org/deathDate',
  'https://schema.org/deathPlace',
  'https://schema.org/defaultValue',
  'https://schema.org/deliveryAddress',
  'https://schema.org/deliveryLeadTime',
  'https://schema.org/deliveryMethod',
  'https://schema.org/deliveryStatus',
  'https://schema.org/deliveryTime',
  'https://schema.org/department',
  'https://schema.org/departureAirport',
  'https://schema.org/departureBoatTerminal',
  'https://schema.org/departureBusStop',
  'https://schema.org/departureGate',
  'https://schema.org/departurePlatform',
  'https://schema.org/departureStation',
  'https://schema.org/departureTerminal',
  'https://schema.org/departureTime',
  'https://schema.org/dependencies',
  'https://schema.org/depth',
  'https://schema.org/description',
  'https://schema.org/device',
  'https://schema.org/diagnosis',
  'https://schema.org/diagram',
  'https://schema.org/diet',
  'https://schema.org/dietFeatures',
  'https://schema.org/differentialDiagnosis',
  'https://schema.org/director',
  'https://schema.org/directors',
  'https://schema.org/disambiguatingDescription',
  'https://schema.org/discount',
  'https://schema.org/discountCode',
  'https://schema.org/discountCurrency',
  'https://schema.org/discusses',
  'https://schema.org/discussionUrl',
  'https://schema.org/diseasePreventionInfo',
  'https://schema.org/diseaseSpreadStatistics',
  'https://schema.org/dissolutionDate',
  'https://schema.org/distance',
  'https://schema.org/distinguishingSign',
  'https://schema.org/distribution',
  'https://schema.org/diversityPolicy',
  'https://schema.org/diversityStaffingReport',
  'https://schema.org/documentation',
  'https://schema.org/doesNotShip',
  'https://schema.org/domainIncludes',
  'https://schema.org/domiciledMortgage',
  'https://schema.org/doorTime',
  'https://schema.org/dosageForm',
  'https://schema.org/doseSchedule',
  'https://schema.org/doseUnit',
  'https://schema.org/doseValue',
  'https://schema.org/downPayment',
  'https://schema.org/downloadUrl',
  'https://schema.org/downvoteCount',
  'https://schema.org/drainsTo',
  'https://schema.org/driveWheelConfiguration',
  'https://schema.org/dropoffLocation',
  'https://schema.org/dropoffTime',
  'https://schema.org/drug',
  'https://schema.org/drugClass',
  'https://schema.org/drugUnit',
  'https://schema.org/duns',
  'https://schema.org/duplicateTherapy',
  'https://schema.org/duration',
  'https://schema.org/durationOfWarranty',
  'https://schema.org/duringMedia',
  'https://schema.org/earlyPrepaymentPenalty',
  'https://schema.org/editEIDR',
  'https://schema.org/editor',
  'https://schema.org/eduQuestionType',
  'https://schema.org/educationRequirements',
  'https://schema.org/educationalAlignment',
  'https://schema.org/educationalCredentialAwarded',
  'https://schema.org/educationalFramework',
  'https://schema.org/educationalLevel',
  'https://schema.org/educationalProgramMode',
  'https://schema.org/educationalRole',
  'https://schema.org/educationalUse',
  'https://schema.org/elevation',
  'https://schema.org/eligibilityToWorkRequirement',
  'https://schema.org/eligibleCustomerType',
  'https://schema.org/eligibleDuration',
  'https://schema.org/eligibleQuantity',
  'https://schema.org/eligibleRegion',
  'https://schema.org/eligibleTransactionVolume',
  'https://schema.org/email',
  'https://schema.org/embedUrl',
  'https://schema.org/emissionsCO2',
  'https://schema.org/employee',
  'https://schema.org/employees',
  'https://schema.org/employerOverview',
  'https://schema.org/employmentType',
  'https://schema.org/employmentUnit',
  'https://schema.org/encodesCreativeWork',
  'https://schema.org/encoding',
  'https://schema.org/encodingFormat',
  'https://schema.org/encodingType',
  'https://schema.org/encodings',
  'https://schema.org/endDate',
  'https://schema.org/endOffset',
  'https://schema.org/endTime',
  'https://schema.org/endorsee',
  'https://schema.org/endorsers',
  'https://schema.org/energyEfficiencyScaleMax',
  'https://schema.org/energyEfficiencyScaleMin',
  'https://schema.org/engineDisplacement',
  'https://schema.org/enginePower',
  'https://schema.org/engineType',
  'https://schema.org/entertainmentBusiness',
  'https://schema.org/epidemiology',
  'https://schema.org/episode',
  'https://schema.org/episodeNumber',
  'https://schema.org/episodes',
  'https://schema.org/equal',
  'https://schema.org/error',
  'https://schema.org/estimatedCost',
  'https://schema.org/estimatedFlightDuration',
  'https://schema.org/estimatedSalary',
  'https://schema.org/estimatesRiskOf',
  'https://schema.org/ethicsPolicy',
  'https://schema.org/event',
  'https://schema.org/eventAttendanceMode',
  'https://schema.org/eventSchedule',
  'https://schema.org/eventStatus',
  'https://schema.org/events',
  'https://schema.org/evidenceLevel',
  'https://schema.org/evidenceOrigin',
  'https://schema.org/exampleOfWork',
  'https://schema.org/exceptDate',
  'https://schema.org/exchangeRateSpread',
  'https://schema.org/executableLibraryName',
  'https://schema.org/exerciseCourse',
  'https://schema.org/exercisePlan',
  'https://schema.org/exerciseRelatedDiet',
  'https://schema.org/exerciseType',
  'https://schema.org/exifData',
  'https://schema.org/expectedArrivalFrom',
  'https://schema.org/expectedArrivalUntil',
  'https://schema.org/expectedPrognosis',
  'https://schema.org/expectsAcceptanceOf',
  'https://schema.org/experienceInPlaceOfEducation',
  'https://schema.org/experienceRequirements',
  'https://schema.org/expertConsiderations',
  'https://schema.org/expires',
  'https://schema.org/familyName',
  'https://schema.org/fatContent',
  'https://schema.org/faxNumber',
  'https://schema.org/featureList',
  'https://schema.org/feesAndCommissionsSpecification',
  'https://schema.org/fiberContent',
  'https://schema.org/fileFormat',
  'https://schema.org/fileSize',
  'https://schema.org/financialAidEligible',
  'https://schema.org/firstAppearance',
  'https://schema.org/firstPerformance',
  'https://schema.org/flightDistance',
  'https://schema.org/flightNumber',
  'https://schema.org/floorLevel',
  'https://schema.org/floorLimit',
  'https://schema.org/floorSize',
  'https://schema.org/followee',
  'https://schema.org/follows',
  'https://schema.org/followup',
  'https://schema.org/foodEstablishment',
  'https://schema.org/foodEvent',
  'https://schema.org/foodWarning',
  'https://schema.org/founder',
  'https://schema.org/founders',
  'https://schema.org/foundingDate',
  'https://schema.org/foundingLocation',
  'https://schema.org/free',
  'https://schema.org/freeShippingThreshold',
  'https://schema.org/frequency',
  'https://schema.org/fromLocation',
  'https://schema.org/fuelCapacity',
  'https://schema.org/fuelConsumption',
  'https://schema.org/fuelEfficiency',
  'https://schema.org/fuelType',
  'https://schema.org/functionalClass',
  'https://schema.org/fundedItem',
  'https://schema.org/funder',
  'https://schema.org/game',
  'https://schema.org/gameItem',
  'https://schema.org/gameLocation',
  'https://schema.org/gamePlatform',
  'https://schema.org/gameServer',
  'https://schema.org/gameTip',
  'https://schema.org/gender',
  'https://schema.org/genre',
  'https://schema.org/geo',
  'https://schema.org/geoContains',
  'https://schema.org/geoCoveredBy',
  'https://schema.org/geoCovers',
  'https://schema.org/geoCrosses',
  'https://schema.org/geoDisjoint',
  'https://schema.org/geoEquals',
  'https://schema.org/geoIntersects',
  'https://schema.org/geoMidpoint',
  'https://schema.org/geoOverlaps',
  'https://schema.org/geoRadius',
  'https://schema.org/geoTouches',
  'https://schema.org/geoWithin',
  'https://schema.org/geographicArea',
  'https://schema.org/gettingTestedInfo',
  'https://schema.org/givenName',
  'https://schema.org/globalLocationNumber',
  'https://schema.org/governmentBenefitsInfo',
  'https://schema.org/gracePeriod',
  'https://schema.org/grantee',
  'https://schema.org/greater',
  'https://schema.org/greaterOrEqual',
  'https://schema.org/gtin',
  'https://schema.org/gtin12',
  'https://schema.org/gtin13',
  'https://schema.org/gtin14',
  'https://schema.org/gtin8',
  'https://schema.org/guideline',
  'https://schema.org/guidelineDate',
  'https://schema.org/guidelineSubject',
  'https://schema.org/handlingTime',
  'https://schema.org/hasBroadcastChannel',
  'https://schema.org/hasCategoryCode',
  'https://schema.org/hasCourse',
  'https://schema.org/hasCourseInstance',
  'https://schema.org/hasCredential',
  'https://schema.org/hasDefinedTerm',
  'https://schema.org/hasDeliveryMethod',
  'https://schema.org/hasDigitalDocumentPermission',
  'https://schema.org/hasDriveThroughService',
  'https://schema.org/hasEnergyConsumptionDetails',
  'https://schema.org/hasEnergyEfficiencyCategory',
  'https://schema.org/hasHealthAspect',
  'https://schema.org/hasMap',
  'https://schema.org/hasMeasurement',
  'https://schema.org/hasMenu',
  'https://schema.org/hasMenuItem',
  'https://schema.org/hasMenuSection',
  'https://schema.org/hasMerchantReturnPolicy',
  'https://schema.org/hasOccupation',
  'https://schema.org/hasOfferCatalog',
  'https://schema.org/hasPOS',
  'https://schema.org/hasPart',
  'https://schema.org/hasVariant',
  'https://schema.org/headline',
  'https://schema.org/healthCondition',
  'https://schema.org/healthPlanCoinsuranceOption',
  'https://schema.org/healthPlanCoinsuranceRate',
  'https://schema.org/healthPlanCopay',
  'https://schema.org/healthPlanCopayOption',
  'https://schema.org/healthPlanCostSharing',
  'https://schema.org/healthPlanDrugOption',
  'https://schema.org/healthPlanDrugTier',
  'https://schema.org/healthPlanId',
  'https://schema.org/healthPlanMarketingUrl',
  'https://schema.org/healthPlanNetworkId',
  'https://schema.org/healthPlanNetworkTier',
  'https://schema.org/healthPlanPharmacyCategory',
  'https://schema.org/healthcareReportingData',
  'https://schema.org/height',
  'https://schema.org/highPrice',
  'https://schema.org/hiringOrganization',
  'https://schema.org/holdingArchive',
  'https://schema.org/homeLocation',
  'https://schema.org/homeTeam',
  'https://schema.org/honorificPrefix',
  'https://schema.org/honorificSuffix',
  'https://schema.org/hospitalAffiliation',
  'https://schema.org/hostingOrganization',
  'https://schema.org/hoursAvailable',
  'https://schema.org/howPerformed',
  'https://schema.org/httpMethod',
  'https://schema.org/iataCode',
  'https://schema.org/icaoCode',
  'https://schema.org/identifier',
  'https://schema.org/identifyingExam',
  'https://schema.org/identifyingTest',
  'https://schema.org/illustrator',
  'https://schema.org/image',
  'https://schema.org/imagingTechnique',
  'https://schema.org/inAlbum',
  'https://schema.org/inBroadcastLineup',
  'https://schema.org/inCodeSet',
  'https://schema.org/inDefinedTermSet',
  'https://schema.org/inLanguage',
  'https://schema.org/inPlaylist',
  'https://schema.org/inProductGroupWithID',
  'https://schema.org/inStoreReturnsOffered',
  'https://schema.org/inSupportOf',
  'https://schema.org/incentiveCompensation',
  'https://schema.org/incentives',
  'https://schema.org/includedComposition',
  'https://schema.org/includedDataCatalog',
  'https://schema.org/includedInDataCatalog',
  'https://schema.org/includedInHealthInsurancePlan',
  'https://schema.org/includedRiskFactor',
  'https://schema.org/includesAttraction',
  'https://schema.org/includesHealthPlanFormulary',
  'https://schema.org/includesHealthPlanNetwork',
  'https://schema.org/includesObject',
  'https://schema.org/increasesRiskOf',
  'https://schema.org/industry',
  'https://schema.org/ineligibleRegion',
  'https://schema.org/infectiousAgent',
  'https://schema.org/infectiousAgentClass',
  'https://schema.org/ingredients',
  'https://schema.org/inker',
  'https://schema.org/insertion',
  'https://schema.org/installUrl',
  'https://schema.org/instructor',
  'https://schema.org/instrument',
  'https://schema.org/intensity',
  'https://schema.org/interactingDrug',
  'https://schema.org/interactionCount',
  'https://schema.org/interactionService',
  'https://schema.org/interactionStatistic',
  'https://schema.org/interactionType',
  'https://schema.org/interactivityType',
  'https://schema.org/interestRate',
  'https://schema.org/inventoryLevel',
  'https://schema.org/inverseOf',
  'https://schema.org/isAcceptingNewPatients',
  'https://schema.org/isAccessibleForFree',
  'https://schema.org/isAccessoryOrSparePartFor',
  'https://schema.org/isAvailableGenerically',
  'https://schema.org/isBasedOn',
  'https://schema.org/isBasedOnUrl',
  'https://schema.org/isConsumableFor',
  'https://schema.org/isFamilyFriendly',
  'https://schema.org/isGift',
  'https://schema.org/isLiveBroadcast',
  'https://schema.org/isPartOf',
  'https://schema.org/isPlanForApartment',
  'https://schema.org/isProprietary',
  'https://schema.org/isRelatedTo',
  'https://schema.org/isResizable',
  'https://schema.org/isSimilarTo',
  'https://schema.org/isUnlabelledFallback',
  'https://schema.org/isVariantOf',
  'https://schema.org/isbn',
  'https://schema.org/isicV4',
  'https://schema.org/isrcCode',
  'https://schema.org/issn',
  'https://schema.org/issueNumber',
  'https://schema.org/issuedBy',
  'https://schema.org/issuedThrough',
  'https://schema.org/iswcCode',
  'https://schema.org/item',
  'https://schema.org/itemCondition',
  'https://schema.org/itemListElement',
  'https://schema.org/itemListOrder',
  'https://schema.org/itemLocation',
  'https://schema.org/itemOffered',
  'https://schema.org/itemReviewed',
  'https://schema.org/itemShipped',
  'https://schema.org/itinerary',
  'https://schema.org/jobBenefits',
  'https://schema.org/jobImmediateStart',
  'https://schema.org/jobLocation',
  'https://schema.org/jobLocationType',
  'https://schema.org/jobStartDate',
  'https://schema.org/jobTitle',
  'https://schema.org/jurisdiction',
  'https://schema.org/keywords',
  'https://schema.org/knownVehicleDamages',
  'https://schema.org/knows',
  'https://schema.org/knowsAbout',
  'https://schema.org/knowsLanguage',
  'https://schema.org/labelDetails',
  'https://schema.org/landlord',
  'https://schema.org/language',
  'https://schema.org/lastReviewed',
  'https://schema.org/latitude',
  'https://schema.org/layoutImage',
  'https://schema.org/learningResourceType',
  'https://schema.org/leaseLength',
  'https://schema.org/legalName',
  'https://schema.org/legalStatus',
  'https://schema.org/legislationApplies',
  'https://schema.org/legislationChanges',
  'https://schema.org/legislationConsolidates',
  'https://schema.org/legislationDate',
  'https://schema.org/legislationDateVersion',
  'https://schema.org/legislationIdentifier',
  'https://schema.org/legislationJurisdiction',
  'https://schema.org/legislationLegalForce',
  'https://schema.org/legislationLegalValue',
  'https://schema.org/legislationPassedBy',
  'https://schema.org/legislationResponsible',
  'https://schema.org/legislationTransposes',
  'https://schema.org/legislationType',
  'https://schema.org/leiCode',
  'https://schema.org/lender',
  'https://schema.org/lesser',
  'https://schema.org/lesserOrEqual',
  'https://schema.org/letterer',
  'https://schema.org/license',
  'https://schema.org/line',
  'https://schema.org/linkRelationship',
  'https://schema.org/liveBlogUpdate',
  'https://schema.org/loanMortgageMandateAmount',
  'https://schema.org/loanPaymentAmount',
  'https://schema.org/loanPaymentFrequency',
  'https://schema.org/loanRepaymentForm',
  'https://schema.org/loanTerm',
  'https://schema.org/loanType',
  'https://schema.org/location',
  'https://schema.org/locationCreated',
  'https://schema.org/lodgingUnitDescription',
  'https://schema.org/lodgingUnitType',
  'https://schema.org/logo',
  'https://schema.org/longitude',
  'https://schema.org/loser',
  'https://schema.org/lowPrice',
  'https://schema.org/lyricist',
  'https://schema.org/lyrics',
  'https://schema.org/mainContentOfPage',
  'https://schema.org/mainEntity',
  'https://schema.org/mainEntityOfPage',
  'https://schema.org/maintainer',
  'https://schema.org/makesOffer',
  'https://schema.org/manufacturer',
  'https://schema.org/map',
  'https://schema.org/mapType',
  'https://schema.org/maps',
  'https://schema.org/marginOfError',
  'https://schema.org/masthead',
  'https://schema.org/material',
  'https://schema.org/materialExtent',
  'https://schema.org/mathExpression',
  'https://schema.org/maxPrice',
  'https://schema.org/maxValue',
  'https://schema.org/maximumAttendeeCapacity',
  'https://schema.org/maximumEnrollment',
  'https://schema.org/maximumIntake',
  'https://schema.org/maximumPhysicalAttendeeCapacity',
  'https://schema.org/maximumVirtualAttendeeCapacity',
  'https://schema.org/mealService',
  'https://schema.org/measuredProperty',
  'https://schema.org/measuredValue',
  'https://schema.org/measurementTechnique',
  'https://schema.org/mechanismOfAction',
  'https://schema.org/mediaAuthenticityCategory',
  'https://schema.org/median',
  'https://schema.org/medicalAudience',
  'https://schema.org/medicalSpecialty',
  'https://schema.org/medicineSystem',
  'https://schema.org/meetsEmissionStandard',
  'https://schema.org/member',
  'https://schema.org/memberOf',
  'https://schema.org/members',
  'https://schema.org/membershipNumber',
  'https://schema.org/membershipPointsEarned',
  'https://schema.org/memoryRequirements',
  'https://schema.org/mentions',
  'https://schema.org/menu',
  'https://schema.org/menuAddOn',
  'https://schema.org/merchant',
  'https://schema.org/merchantReturnDays',
  'https://schema.org/merchantReturnLink',
  'https://schema.org/messageAttachment',
  'https://schema.org/mileageFromOdometer',
  'https://schema.org/minPrice',
  'https://schema.org/minValue',
  'https://schema.org/minimumPaymentDue',
  'https://schema.org/missionCoveragePrioritiesPolicy',
  'https://schema.org/model',
  'https://schema.org/modelDate',
  'https://schema.org/modifiedTime',
  'https://schema.org/monthlyMinimumRepaymentAmount',
  'https://schema.org/monthsOfExperience',
  'https://schema.org/mpn',
  'https://schema.org/multipleValues',
  'https://schema.org/muscleAction',
  'https://schema.org/musicArrangement',
  'https://schema.org/musicBy',
  'https://schema.org/musicCompositionForm',
  'https://schema.org/musicGroupMember',
  'https://schema.org/musicReleaseFormat',
  'https://schema.org/musicalKey',
  'https://schema.org/naics',
  'https://schema.org/name',
  'https://schema.org/namedPosition',
  'https://schema.org/nationality',
  'https://schema.org/naturalProgression',
  'https://schema.org/nerve',
  'https://schema.org/nerveMotor',
  'https://schema.org/netWorth',
  'https://schema.org/newsUpdatesAndGuidelines',
  'https://schema.org/nextItem',
  'https://schema.org/noBylinesPolicy',
  'https://schema.org/nonEqual',
  'https://schema.org/nonProprietaryName',
  'https://schema.org/nonprofitStatus',
  'https://schema.org/normalRange',
  'https://schema.org/nsn',
  'https://schema.org/numAdults',
  'https://schema.org/numChildren',
  'https://schema.org/numConstraints',
  'https://schema.org/numTracks',
  'https://schema.org/numberOfAccommodationUnits',
  'https://schema.org/numberOfAirbags',
  'https://schema.org/numberOfAvailableAccommodationUnits',
  'https://schema.org/numberOfAxles',
  'https://schema.org/numberOfBathroomsTotal',
  'https://schema.org/numberOfBedrooms',
  'https://schema.org/numberOfBeds',
  'https://schema.org/numberOfCredits',
  'https://schema.org/numberOfDoors',
  'https://schema.org/numberOfEmployees',
  'https://schema.org/numberOfEpisodes',
  'https://schema.org/numberOfForwardGears',
  'https://schema.org/numberOfFullBathrooms',
  'https://schema.org/numberOfItems',
  'https://schema.org/numberOfLoanPayments',
  'https://schema.org/numberOfPages',
  'https://schema.org/numberOfPartialBathrooms',
  'https://schema.org/numberOfPlayers',
  'https://schema.org/numberOfPreviousOwners',
  'https://schema.org/numberOfRooms',
  'https://schema.org/numberOfSeasons',
  'https://schema.org/numberedPosition',
  'https://schema.org/nutrition',
  'https://schema.org/object',
  'https://schema.org/observationDate',
  'https://schema.org/observedNode',
  'https://schema.org/occupancy',
  'https://schema.org/occupationLocation',
  'https://schema.org/occupationalCategory',
  'https://schema.org/occupationalCredentialAwarded',
  'https://schema.org/offerCount',
  'https://schema.org/offeredBy',
  'https://schema.org/offers',
  'https://schema.org/offersPrescriptionByMail',
  'https://schema.org/openingHours',
  'https://schema.org/openingHoursSpecification',
  'https://schema.org/opens',
  'https://schema.org/operatingSystem',
  'https://schema.org/opponent',
  'https://schema.org/option',
  'https://schema.org/orderDate',
  'https://schema.org/orderDelivery',
  'https://schema.org/orderItemNumber',
  'https://schema.org/orderItemStatus',
  'https://schema.org/orderNumber',
  'https://schema.org/orderQuantity',
  'https://schema.org/orderStatus',
  'https://schema.org/orderedItem',
  'https://schema.org/organizer',
  'https://schema.org/originAddress',
  'https://schema.org/originatesFrom',
  'https://schema.org/overdosage',
  'https://schema.org/ownedFrom',
  'https://schema.org/ownedThrough',
  'https://schema.org/ownershipFundingInfo',
  'https://schema.org/owns',
  'https://schema.org/pageEnd',
  'https://schema.org/pageStart',
  'https://schema.org/pagination',
  'https://schema.org/parent',
  'https://schema.org/parentItem',
  'https://schema.org/parentOrganization',
  'https://schema.org/parentService',
  'https://schema.org/parents',
  'https://schema.org/partOfEpisode',
  'https://schema.org/partOfInvoice',
  'https://schema.org/partOfOrder',
  'https://schema.org/partOfSeason',
  'https://schema.org/partOfSeries',
  'https://schema.org/partOfSystem',
  'https://schema.org/partOfTVSeries',
  'https://schema.org/partOfTrip',
  'https://schema.org/participant',
  'https://schema.org/partySize',
  'https://schema.org/passengerPriorityStatus',
  'https://schema.org/passengerSequenceNumber',
  'https://schema.org/pathophysiology',
  'https://schema.org/pattern',
  'https://schema.org/payload',
  'https://schema.org/paymentAccepted',
  'https://schema.org/paymentDue',
  'https://schema.org/paymentDueDate',
  'https://schema.org/paymentMethod',
  'https://schema.org/paymentMethodId',
  'https://schema.org/paymentStatus',
  'https://schema.org/paymentUrl',
  'https://schema.org/penciler',
  'https://schema.org/percentile10',
  'https://schema.org/percentile25',
  'https://schema.org/percentile75',
  'https://schema.org/percentile90',
  'https://schema.org/performTime',
  'https://schema.org/performer',
  'https://schema.org/performerIn',
  'https://schema.org/performers',
  'https://schema.org/permissionType',
  'https://schema.org/permissions',
  'https://schema.org/permitAudience',
  'https://schema.org/permittedUsage',
  'https://schema.org/petsAllowed',
  'https://schema.org/phoneticText',
  'https://schema.org/photo',
  'https://schema.org/photos',
  'https://schema.org/physicalRequirement',
  'https://schema.org/physiologicalBenefits',
  'https://schema.org/pickupLocation',
  'https://schema.org/pickupTime',
  'https://schema.org/playMode',
  'https://schema.org/playerType',
  'https://schema.org/playersOnline',
  'https://schema.org/polygon',
  'https://schema.org/populationType',
  'https://schema.org/position',
  'https://schema.org/possibleComplication',
  'https://schema.org/possibleTreatment',
  'https://schema.org/postOfficeBoxNumber',
  'https://schema.org/postOp',
  'https://schema.org/postalCode',
  'https://schema.org/postalCodeBegin',
  'https://schema.org/postalCodeEnd',
  'https://schema.org/postalCodePrefix',
  'https://schema.org/postalCodeRange',
  'https://schema.org/potentialAction',
  'https://schema.org/preOp',
  'https://schema.org/predecessorOf',
  'https://schema.org/pregnancyCategory',
  'https://schema.org/pregnancyWarning',
  'https://schema.org/prepTime',
  'https://schema.org/preparation',
  'https://schema.org/prescribingInfo',
  'https://schema.org/prescriptionStatus',
  'https://schema.org/previousItem',
  'https://schema.org/previousStartDate',
  'https://schema.org/price',
  'https://schema.org/priceComponent',
  'https://schema.org/priceComponentType',
  'https://schema.org/priceCurrency',
  'https://schema.org/priceRange',
  'https://schema.org/priceSpecification',
  'https://schema.org/priceType',
  'https://schema.org/priceValidUntil',
  'https://schema.org/primaryImageOfPage',
  'https://schema.org/primaryPrevention',
  'https://schema.org/printColumn',
  'https://schema.org/printEdition',
  'https://schema.org/printPage',
  'https://schema.org/printSection',
  'https://schema.org/procedure',
  'https://schema.org/procedureType',
  'https://schema.org/processingTime',
  'https://schema.org/processorRequirements',
  'https://schema.org/producer',
  'https://schema.org/produces',
  'https://schema.org/productGroupID',
  'https://schema.org/productID',
  'https://schema.org/productSupported',
  'https://schema.org/productionCompany',
  'https://schema.org/productionDate',
  'https://schema.org/proficiencyLevel',
  'https://schema.org/programMembershipUsed',
  'https://schema.org/programName',
  'https://schema.org/programPrerequisites',
  'https://schema.org/programType',
  'https://schema.org/programmingLanguage',
  'https://schema.org/programmingModel',
  'https://schema.org/propertyID',
  'https://schema.org/proprietaryName',
  'https://schema.org/proteinContent',
  'https://schema.org/provider',
  'https://schema.org/providerMobility',
  'https://schema.org/providesBroadcastService',
  'https://schema.org/providesService',
  'https://schema.org/publicAccess',
  'https://schema.org/publicTransportClosuresInfo',
  'https://schema.org/publication',
  'https://schema.org/publicationType',
  'https://schema.org/publishedBy',
  'https://schema.org/publishedOn',
  'https://schema.org/publisher',
  'https://schema.org/publisherImprint',
  'https://schema.org/publishingPrinciples',
  'https://schema.org/purchaseDate',
  'https://schema.org/qualifications',
  'https://schema.org/quarantineGuidelines',
  'https://schema.org/query',
  'https://schema.org/quest',
  'https://schema.org/question',
  'https://schema.org/rangeIncludes',
  'https://schema.org/ratingCount',
  'https://schema.org/ratingExplanation',
  'https://schema.org/ratingValue',
  'https://schema.org/readBy',
  'https://schema.org/readonlyValue',
  'https://schema.org/realEstateAgent',
  'https://schema.org/recipe',
  'https://schema.org/recipeCategory',
  'https://schema.org/recipeCuisine',
  'https://schema.org/recipeIngredient',
  'https://schema.org/recipeInstructions',
  'https://schema.org/recipeYield',
  'https://schema.org/recipient',
  'https://schema.org/recognizedBy',
  'https://schema.org/recognizingAuthority',
  'https://schema.org/recommendationStrength',
  'https://schema.org/recommendedIntake',
  'https://schema.org/recordLabel',
  'https://schema.org/recordedAs',
  'https://schema.org/recordedAt',
  'https://schema.org/recordedIn',
  'https://schema.org/recordingOf',
  'https://schema.org/recourseLoan',
  'https://schema.org/referenceQuantity',
  'https://schema.org/referencesOrder',
  'https://schema.org/refundType',
  'https://schema.org/regionDrained',
  'https://schema.org/regionsAllowed',
  'https://schema.org/relatedAnatomy',
  'https://schema.org/relatedCondition',
  'https://schema.org/relatedDrug',
  'https://schema.org/relatedLink',
  'https://schema.org/relatedStructure',
  'https://schema.org/relatedTherapy',
  'https://schema.org/relatedTo',
  'https://schema.org/releaseDate',
  'https://schema.org/releaseNotes',
  'https://schema.org/releaseOf',
  'https://schema.org/releasedEvent',
  'https://schema.org/relevantOccupation',
  'https://schema.org/relevantSpecialty',
  'https://schema.org/remainingAttendeeCapacity',
  'https://schema.org/renegotiableLoan',
  'https://schema.org/repeatCount',
  'https://schema.org/repeatFrequency',
  'https://schema.org/repetitions',
  'https://schema.org/replacee',
  'https://schema.org/replacer',
  'https://schema.org/replyToUrl',
  'https://schema.org/reportNumber',
  'https://schema.org/representativeOfPage',
  'https://schema.org/requiredCollateral',
  'https://schema.org/requiredGender',
  'https://schema.org/requiredMaxAge',
  'https://schema.org/requiredMinAge',
  'https://schema.org/requiredQuantity',
  'https://schema.org/requirements',
  'https://schema.org/requiresSubscription',
  'https://schema.org/reservationFor',
  'https://schema.org/reservationId',
  'https://schema.org/reservationStatus',
  'https://schema.org/reservedTicket',
  'https://schema.org/responsibilities',
  'https://schema.org/restPeriods',
  'https://schema.org/result',
  'https://schema.org/resultComment',
  'https://schema.org/resultReview',
  'https://schema.org/returnFees',
  'https://schema.org/returnPolicyCategory',
  'https://schema.org/review',
  'https://schema.org/reviewAspect',
  'https://schema.org/reviewBody',
  'https://schema.org/reviewCount',
  'https://schema.org/reviewRating',
  'https://schema.org/reviewedBy',
  'https://schema.org/reviews',
  'https://schema.org/riskFactor',
  'https://schema.org/risks',
  'https://schema.org/roleName',
  'https://schema.org/roofLoad',
  'https://schema.org/rsvpResponse',
  'https://schema.org/runsTo',
  'https://schema.org/runtime',
  'https://schema.org/runtimePlatform',
  'https://schema.org/rxcui',
  'https://schema.org/safetyConsideration',
  'https://schema.org/salaryCurrency',
  'https://schema.org/salaryUponCompletion',
  'https://schema.org/sameAs',
  'https://schema.org/sampleType',
  'https://schema.org/saturatedFatContent',
  'https://schema.org/scheduleTimezone',
  'https://schema.org/scheduledPaymentDate',
  'https://schema.org/scheduledTime',
  'https://schema.org/schemaVersion',
  'https://schema.org/schoolClosuresInfo',
  'https://schema.org/screenCount',
  'https://schema.org/screenshot',
  'https://schema.org/sdDatePublished',
  'https://schema.org/sdLicense',
  'https://schema.org/sdPublisher',
  'https://schema.org/season',
  'https://schema.org/seasonNumber',
  'https://schema.org/seasons',
  'https://schema.org/seatNumber',
  'https://schema.org/seatRow',
  'https://schema.org/seatSection',
  'https://schema.org/seatingCapacity',
  'https://schema.org/seatingType',
  'https://schema.org/secondaryPrevention',
  'https://schema.org/securityClearanceRequirement',
  'https://schema.org/securityScreening',
  'https://schema.org/seeks',
  'https://schema.org/seller',
  'https://schema.org/sender',
  'https://schema.org/sensoryRequirement',
  'https://schema.org/sensoryUnit',
  'https://schema.org/serialNumber',
  'https://schema.org/seriousAdverseOutcome',
  'https://schema.org/serverStatus',
  'https://schema.org/servesCuisine',
  'https://schema.org/serviceArea',
  'https://schema.org/serviceAudience',
  'https://schema.org/serviceLocation',
  'https://schema.org/serviceOperator',
  'https://schema.org/serviceOutput',
  'https://schema.org/servicePhone',
  'https://schema.org/servicePostalAddress',
  'https://schema.org/serviceSmsNumber',
  'https://schema.org/serviceType',
  'https://schema.org/serviceUrl',
  'https://schema.org/servingSize',
  'https://schema.org/sharedContent',
  'https://schema.org/shippingDestination',
  'https://schema.org/shippingDetails',
  'https://schema.org/shippingLabel',
  'https://schema.org/shippingRate',
  'https://schema.org/shippingSettingsLink',
  'https://schema.org/sibling',
  'https://schema.org/siblings',
  'https://schema.org/signDetected',
  'https://schema.org/signOrSymptom',
  'https://schema.org/significance',
  'https://schema.org/significantLink',
  'https://schema.org/significantLinks',
  'https://schema.org/size',
  'https://schema.org/sizeGroup',
  'https://schema.org/sizeSystem',
  'https://schema.org/skills',
  'https://schema.org/sku',
  'https://schema.org/slogan',
  'https://schema.org/smokingAllowed',
  'https://schema.org/sodiumContent',
  'https://schema.org/softwareAddOn',
  'https://schema.org/softwareHelp',
  'https://schema.org/softwareRequirements',
  'https://schema.org/softwareVersion',
  'https://schema.org/sourceOrganization',
  'https://schema.org/sourcedFrom',
  'https://schema.org/spatial',
  'https://schema.org/spatialCoverage',
  'https://schema.org/speakable',
  'https://schema.org/specialCommitments',
  'https://schema.org/specialOpeningHoursSpecification',
  'https://schema.org/specialty',
  'https://schema.org/speechToTextMarkup',
  'https://schema.org/speed',
  'https://schema.org/spokenByCharacter',
  'https://schema.org/sponsor',
  'https://schema.org/sport',
  'https://schema.org/sportsActivityLocation',
  'https://schema.org/sportsEvent',
  'https://schema.org/sportsTeam',
  'https://schema.org/spouse',
  'https://schema.org/stage',
  'https://schema.org/stageAsNumber',
  'https://schema.org/starRating',
  'https://schema.org/startDate',
  'https://schema.org/startOffset',
  'https://schema.org/startTime',
  'https://schema.org/status',
  'https://schema.org/steeringPosition',
  'https://schema.org/step',
  'https://schema.org/stepValue',
  'https://schema.org/steps',
  'https://schema.org/storageRequirements',
  'https://schema.org/streetAddress',
  'https://schema.org/strengthUnit',
  'https://schema.org/strengthValue',
  'https://schema.org/structuralClass',
  'https://schema.org/study',
  'https://schema.org/studyDesign',
  'https://schema.org/studyLocation',
  'https://schema.org/studySubject',
  'https://schema.org/subEvent',
  'https://schema.org/subEvents',
  'https://schema.org/subOrganization',
  'https://schema.org/subReservation',
  'https://schema.org/subStageSuffix',
  'https://schema.org/subStructure',
  'https://schema.org/subTest',
  'https://schema.org/subTrip',
  'https://schema.org/subjectOf',
  'https://schema.org/subtitleLanguage',
  'https://schema.org/successorOf',
  'https://schema.org/sugarContent',
  'https://schema.org/suggestedAge',
  'https://schema.org/suggestedAnswer',
  'https://schema.org/suggestedGender',
  'https://schema.org/suggestedMaxAge',
  'https://schema.org/suggestedMeasurement',
  'https://schema.org/suggestedMinAge',
  'https://schema.org/suitableForDiet',
  'https://schema.org/superEvent',
  'https://schema.org/supersededBy',
  'https://schema.org/supply',
  'https://schema.org/supplyTo',
  'https://schema.org/supportingData',
  'https://schema.org/surface',
  'https://schema.org/target',
  'https://schema.org/targetCollection',
  'https://schema.org/targetDescription',
  'https://schema.org/targetName',
  'https://schema.org/targetPlatform',
  'https://schema.org/targetPopulation',
  'https://schema.org/targetProduct',
  'https://schema.org/targetUrl',
  'https://schema.org/taxID',
  'https://schema.org/teaches',
  'https://schema.org/telephone',
  'https://schema.org/temporal',
  'https://schema.org/temporalCoverage',
  'https://schema.org/termCode',
  'https://schema.org/termDuration',
  'https://schema.org/termsOfService',
  'https://schema.org/termsPerYear',
  'https://schema.org/text',
  'https://schema.org/textValue',
  'https://schema.org/thumbnail',
  'https://schema.org/thumbnailUrl',
  'https://schema.org/tickerSymbol',
  'https://schema.org/ticketNumber',
  'https://schema.org/ticketToken',
  'https://schema.org/ticketedSeat',
  'https://schema.org/timeOfDay',
  'https://schema.org/timeRequired',
  'https://schema.org/timeToComplete',
  'https://schema.org/tissueSample',
  'https://schema.org/title',
  'https://schema.org/titleEIDR',
  'https://schema.org/toLocation',
  'https://schema.org/toRecipient',
  'https://schema.org/tocContinuation',
  'https://schema.org/tocEntry',
  'https://schema.org/tongueWeight',
  'https://schema.org/tool',
  'https://schema.org/torque',
  'https://schema.org/totalJobOpenings',
  'https://schema.org/totalPaymentDue',
  'https://schema.org/totalPrice',
  'https://schema.org/totalTime',
  'https://schema.org/tourBookingPage',
  'https://schema.org/touristType',
  'https://schema.org/track',
  'https://schema.org/trackingNumber',
  'https://schema.org/trackingUrl',
  'https://schema.org/tracks',
  'https://schema.org/trailer',
  'https://schema.org/trailerWeight',
  'https://schema.org/trainName',
  'https://schema.org/trainNumber',
  'https://schema.org/trainingSalary',
  'https://schema.org/transFatContent',
  'https://schema.org/transcript',
  'https://schema.org/transitTime',
  'https://schema.org/transitTimeLabel',
  'https://schema.org/translationOfWork',
  'https://schema.org/translator',
  'https://schema.org/transmissionMethod',
  'https://schema.org/travelBans',
  'https://schema.org/trialDesign',
  'https://schema.org/tributary',
  'https://schema.org/typeOfBed',
  'https://schema.org/typeOfGood',
  'https://schema.org/typicalAgeRange',
  'https://schema.org/typicalCreditsPerTerm',
  'https://schema.org/typicalTest',
  'https://schema.org/underName',
  'https://schema.org/unitCode',
  'https://schema.org/unitText',
  'https://schema.org/unnamedSourcesPolicy',
  'https://schema.org/unsaturatedFatContent',
  'https://schema.org/uploadDate',
  'https://schema.org/upvoteCount',
  'https://schema.org/url',
  'https://schema.org/urlTemplate',
  'https://schema.org/usageInfo',
  'https://schema.org/usedToDiagnose',
  'https://schema.org/userInteractionCount',
  'https://schema.org/usesDevice',
  'https://schema.org/usesHealthPlanIdStandard',
  'https://schema.org/utterances',
  'https://schema.org/validFor',
  'https://schema.org/validFrom',
  'https://schema.org/validIn',
  'https://schema.org/validThrough',
  'https://schema.org/validUntil',
  'https://schema.org/value',
  'https://schema.org/valueAddedTaxIncluded',
  'https://schema.org/valueMaxLength',
  'https://schema.org/valueMinLength',
  'https://schema.org/valueName',
  'https://schema.org/valuePattern',
  'https://schema.org/valueReference',
  'https://schema.org/valueRequired',
  'https://schema.org/variableMeasured',
  'https://schema.org/variantCover',
  'https://schema.org/variesBy',
  'https://schema.org/vatID',
  'https://schema.org/vehicleConfiguration',
  'https://schema.org/vehicleEngine',
  'https://schema.org/vehicleIdentificationNumber',
  'https://schema.org/vehicleInteriorColor',
  'https://schema.org/vehicleInteriorType',
  'https://schema.org/vehicleModelDate',
  'https://schema.org/vehicleSeatingCapacity',
  'https://schema.org/vehicleSpecialUsage',
  'https://schema.org/vehicleTransmission',
  'https://schema.org/vendor',
  'https://schema.org/verificationFactCheckingPolicy',
  'https://schema.org/version',
  'https://schema.org/video',
  'https://schema.org/videoFormat',
  'https://schema.org/videoFrameSize',
  'https://schema.org/videoQuality',
  'https://schema.org/volumeNumber',
  'https://schema.org/warning',
  'https://schema.org/warranty',
  'https://schema.org/warrantyPromise',
  'https://schema.org/warrantyScope',
  'https://schema.org/webCheckinTime',
  'https://schema.org/webFeed',
  'https://schema.org/weight',
  'https://schema.org/weightTotal',
  'https://schema.org/wheelbase',
  'https://schema.org/width',
  'https://schema.org/winner',
  'https://schema.org/wordCount',
  'https://schema.org/workExample',
  'https://schema.org/workFeatured',
  'https://schema.org/workHours',
  'https://schema.org/workLocation',
  'https://schema.org/workPerformed',
  'https://schema.org/workPresented',
  'https://schema.org/workTranslation',
  'https://schema.org/workload',
  'https://schema.org/worksFor',
  'https://schema.org/worstRating',
  'https://schema.org/xpath',
  'https://schema.org/yearBuilt',
  'https://schema.org/yearlyRevenue',
  'https://schema.org/yearsInOperation',
  'https://schema.org/yield',
);

/**
 * Runtime validator for PropertyEnumeration.
 *
 * If some data has one of the values of the PropertyEnumeration enum, it will be returned with the correct type.
 * Otherwise, this function returns an `OAValidationError` with details about why the data does not match.
 *
 * Use this to e.g. check a JSON object received in an HTTP request. Example usage (for an express request handler):
 *
 * ```ts
 * const maybePropertyEnumeration = validatePropertyEnumeration(req.body); // `req.body` will have type `any` or `unknown`
 * if (maybePropertyEnumeration instanceof OaValidationError) {
 *   // From this point on, `maybePropertyEnumeration` will have type `OaValidationError`
 *   const error = maybePropertyEnumeration;
 *   // Do something with the error. Maybe ignore it? Or log it? Or throw? Up to you.
 * }
 * // From this point on, `maybePropertyEnumeration` will have type `PropertyEnumeration`
 * const propertyEnumeration = maybePropertyEnumeration;
 * ```
 */
export function validatePropertyEnumeration(maybePropertyEnumeration: unknown): PropertyEnumeration | OaValidationError {
  const { value, error } = PropertyEnumerationJoiSchema.validate(maybePropertyEnumeration);
  if (error) {
    return new OaValidationError('PropertyEnumeration', maybePropertyEnumeration, error);
  }
  /* Joi does not implement TS Type Guards, so TS does not implicitly know that this has now been validated
  to have the right type. Therefore, we just cast it to the right type. */
  return value as PropertyEnumeration;
}
