import { 
  Activity, Brain, Droplets, Shield, 
  Pill, Baby, Syringe, Scale, Users, Thermometer,
  Eye, ShieldAlert, HeartPulse, Zap, Footprints, 
  Stethoscope,
  type LucideIcon
} from 'lucide-react';

// ── Specialties Data ────────────────────────────────────────
export interface Specialty {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  category: string;
  badge?: string;
}

export const specialties: Specialty[] = [
  {
    id: 'diabetes',
    title: 'Diabetes & Complications',
    description: 'Complete blood sugar management, continuous glucose tracking & lifelong metabolic care.',
    icon: Droplets,
    category: 'Endocrine',
    badge: 'Specialized Center',
  },
  {
    id: 'hypertension',
    title: 'Hypertension & Cardiac Care',
    description: 'High blood pressure stabilization, lipid & cholesterol management, and preventative cardiology.',
    icon: HeartPulse,
    category: 'Cardiac',
    badge: 'Cardiac Health',
  },
  {
    id: 'thyroid',
    title: 'Thyroid & Hormonal Disorders',
    description: 'Accurate clinical diagnostics for hyperthyroidism, hypothyroidism, and endocrine imbalances.',
    icon: Activity,
    category: 'Endocrine',
    badge: 'Hormonal Care',
  },
  {
    id: 'renal',
    title: 'Renal (Kidney) Diseases',
    description: 'Diabetic nephropathy surveillance, proteinuria screening, and kidney function monitoring.',
    icon: ShieldAlert,
    category: 'Renal',
    badge: 'Nephrology',
  },
  {
    id: 'liver-stomach',
    title: 'Liver, Gastrointestinal & Respiratory',
    description: 'Fatty liver protocols, acid reflux (GERD), IBS management, and bronchial asthma/allergy care.',
    icon: Stethoscope,
    category: 'Internal Medicine',
    badge: 'Internal Medicine',
  },
  {
    id: 'weight',
    title: 'Weight & Lifestyle Management',
    description: 'Medical weight reduction therapies, personalized nutritional guidance, and metabolic health.',
    icon: Scale,
    category: 'Lifestyle',
    badge: 'Metabolism',
  },
  {
    id: 'general',
    title: 'General & Family Medicine',
    description: 'Comprehensive outpatient OPD, adult & pediatric care, vaccinations, and routine screenings.',
    icon: Users,
    category: 'Family Care',
    badge: 'Primary Care',
  },
];

// ── Diabetes Types (Unified High-End Clinical Theme) ─────────
export interface DiabetesType {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  badge: string;
}

export const diabetesTypes: DiabetesType[] = [
  {
    id: 'type1',
    title: 'Type 1 Diabetes',
    description: 'Autoimmune destruction of pancreatic beta cells requiring precise insulin therapy and continuous glucose monitoring.',
    icon: Syringe,
    badge: 'Autoimmune',
  },
  {
    id: 'type2',
    title: 'Type 2 Diabetes',
    description: 'Metabolic insulin resistance managed with evidence-based pharmacotherapy, dietary optimization, and lifestyle intervention.',
    icon: Pill,
    badge: 'Metabolic & Lifestyle',
  },
  {
    id: 'gestational',
    title: 'Gestational Diabetes',
    description: 'Carbohydrate intolerance diagnosed during pregnancy, safeguarding maternal health and healthy fetal development.',
    icon: Baby,
    badge: 'Maternal-Fetal Care',
  },
  {
    id: 'type5',
    title: 'Type 5 Diabetes',
    description: 'Malnutrition-related diabetes occurring without ketosis, common in developing regions requiring targeted nutritional restoration.',
    icon: Thermometer,
    badge: 'Malnutrition-Related',
  },
  {
    id: 'monogenic',
    title: 'Monogenic Diabetes',
    description: 'Inherited genetic variations (including MODY and neonatal diabetes) identified via precision clinical phenotyping.',
    icon: Brain,
    badge: 'Genetic Etiology',
  },
  {
    id: 'secondary',
    title: 'Secondary & Type 3c Diabetes',
    description: 'Secondary hyperglycemia caused by pancreatitis, endocrine neoplasms, corticosteroid therapies, or hemochromatosis.',
    icon: Shield,
    badge: 'Secondary Etiology',
  },
];

// ── Organ Protection Hub (Unified High-End Diagnostic Theme) ─
export interface OrganWarning {
  id: string;
  organ: string;
  condition: string;
  description: string;
  icon: LucideIcon;
  clinicalImpact: string;
}

export const organWarnings: OrganWarning[] = [
  {
    id: 'eyes',
    organ: 'Eyes & Vision',
    condition: 'Diabetic Retinopathy',
    description: 'Microvascular retinal damage and capillary leakage. Regular funduscopic screening prevents irreversible vision loss.',
    icon: Eye,
    clinicalImpact: 'Annual Fundus Evaluation Advised',
  },
  {
    id: 'kidneys',
    organ: 'Kidneys & Filtration',
    condition: 'Diabetic Nephropathy',
    description: 'Glomerular barrier deterioration causing microalbuminuria. Proactive control stops progression toward renal failure.',
    icon: ShieldAlert,
    clinicalImpact: 'Urine Microalbumin & eGFR Monitoring',
  },
  {
    id: 'heart',
    organ: 'Cardiovascular System',
    condition: 'Heart Disease & Vascular Stroke',
    description: 'Accelerated arterial plaque buildup and hypertension risks. Strict lipid and blood pressure control protects coronary health.',
    icon: HeartPulse,
    clinicalImpact: 'Lipid Profiling & Regular ECG Screenings',
  },
  {
    id: 'nerves',
    organ: 'Nervous System',
    condition: 'Diabetic Neuropathy',
    description: 'Peripheral and autonomic axon degeneration triggering burning dysesthesias, loss of sensation, and silent cardiovascular risk.',
    icon: Zap,
    clinicalImpact: 'Neuro-Vascular Monofilament Checks',
  },
  {
    id: 'feet',
    organ: 'Feet & Cutaneous Health',
    condition: 'Foot Ulcers & Wound Infections',
    description: 'Compromised microcirculation combined with diminished sensory feedback increases susceptibility to deep ulcers.',
    icon: Footprints,
    clinicalImpact: 'Podiatric Care & Daily Foot Hygiene',
  },
];

// ── Anemia Symptoms (English Clean Clinical Presentation) ───
export interface AnemiaSymptom {
  id: string;
  name: string;
  clinicalNote: string;
  icon: LucideIcon;
}

export const anemiaSymptoms: AnemiaSymptom[] = [
  {
    id: 'weakness',
    name: 'Weakness & Fatigue',
    clinicalNote: 'Persistent exhaustion & depleted physical stamina',
    icon: Activity,
  },
  {
    id: 'pale',
    name: 'Pale Skin & Conjunctiva',
    clinicalNote: 'Diminished microvascular capillary perfusion',
    icon: Users,
  },
  {
    id: 'dizzy',
    name: 'Dizziness & Lightheadedness',
    clinicalNote: 'Reduced cerebral oxygen delivery upon standing',
    icon: Activity,
  },
  {
    id: 'breath',
    name: 'Shortness of Breath',
    clinicalNote: 'Exertional dyspnea & compensated heart strain',
    icon: HeartPulse,
  },
  {
    id: 'headache',
    name: 'Frequent Headaches',
    clinicalNote: 'Cerebrovascular dilation from arterial hypoxia',
    icon: Brain,
  },
  {
    id: 'concentration',
    name: 'Impaired Concentration',
    clinicalNote: 'Cognitive fatigue, brain fog & reduced mental focus',
    icon: Eye,
  },
];

// ── Anemia Causes ───────────────────────────────────────────
export const anemiaCauses: string[] = [
  'Iron Deficiency (Dietary Insufficiency or Occult Blood Loss)',
  'Vitamin B12 & Folic Acid Malabsorption',
  'Chronic Kidney & Inflammatory Disorders',
  'Thalassemia Minor or Hemoglobinopathy Trait',
  'Heavy Menstrual Loss or Gastrointestinal Bleeding',
  'Poor Nutrient Absorption (Celiac, Gastric Acidity & IBS)',
];

// ── Appointment Concerns ────────────────────────────────────
export const appointmentConcerns = [
  'Diabetes Consultation & Glycemic Control',
  'Anemia & Low Hemoglobin Comprehensive Workup',
  'Hypertension & Cardiovascular Health',
  'Thyroid & Endocrine Function Evaluation',
  'Thalassemia Free Screening & Transfusion Program',
  'General Outpatient (OPD) & Family Medicine',
  'Weight Management & Preventative Screening',
] as const;

// ── Time Slots ──────────────────────────────────────────────
export const timeSlots = [
  '4:00 PM',
  '4:30 PM',
  '5:00 PM',
  '5:30 PM',
  '6:00 PM',
  '6:30 PM',
  '7:00 PM',
  '7:30 PM',
  '8:00 PM',
  '8:30 PM',
  '9:00 PM',
  '9:30 PM',
] as const;
