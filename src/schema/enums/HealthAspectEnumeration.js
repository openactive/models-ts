const s = require('@imin/speck');

/**
 * HealthAspectEnumeration enumerates several aspects of health content online, each of which might be described using [[hasHealthAspect]] and [[HealthTopicContent]].
 */
const HealthAspectEnumeration = s.literalStringEnum([
  'https://schema.org/SeeDoctorHealthAspect',
  'https://schema.org/ScreeningHealthAspect',
  'https://schema.org/CausesHealthAspect',
  'https://schema.org/StagesHealthAspect',
  'https://schema.org/SafetyHealthAspect',
  'https://schema.org/BenefitsHealthAspect',
  'https://schema.org/ContagiousnessHealthAspect',
  'https://schema.org/SelfCareHealthAspect',
  'https://schema.org/PatientExperienceHealthAspect',
  'https://schema.org/MayTreatHealthAspect',
  'https://schema.org/EffectivenessHealthAspect',
  'https://schema.org/SymptomsHealthAspect',
  'https://schema.org/RelatedTopicsHealthAspect',
  'https://schema.org/PrognosisHealthAspect',
  'https://schema.org/TreatmentsHealthAspect',
  'https://schema.org/HowOrWhereHealthAspect',
  'https://schema.org/TypesHealthAspect',
  'https://schema.org/SideEffectsHealthAspect',
  'https://schema.org/AllergiesHealthAspect',
  'https://schema.org/RisksOrComplicationsHealthAspect',
  'https://schema.org/HowItWorksHealthAspect',
  'https://schema.org/IngredientsHealthAspect',
  'https://schema.org/PreventionHealthAspect',
  'https://schema.org/GettingAccessHealthAspect',
  'https://schema.org/PregnancyHealthAspect',
  'https://schema.org/MisconceptionsHealthAspect',
  'https://schema.org/OverviewHealthAspect',
  'https://schema.org/UsageOrScheduleHealthAspect',
  'https://schema.org/LivingWithHealthAspect',
]);