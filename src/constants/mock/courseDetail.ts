import { IMAGES } from "@/constants/images";
import { COURSES, FEATURED_COURSE, findCourse } from "@/constants/mock/courses";
import type { CourseDetail, CurriculumModule } from "@/types/courseDetail";

const MODULES: CurriculumModule[] = [
  {
    id: "m0",
    title: "Module 00: How the System Really Works",
    lessonCount: 3,
    minutes: 22,
    freePreview: true,
    lessons: [
      {
        id: "0-1",
        kind: "video",
        title: "0.1 The Statutory Architecture & The 3 Powers of German Immigration",
        format: "Video Lesson",
        duration: "08:14",
        freePreview: true,
      },
      {
        id: "0-2",
        kind: "article",
        title: "0.2 The Legal Spine in 5 Provisions (AufenthG Core Rules)",
        format: "Statutory Brief & Audio Guide",
        duration: "09:50",
      },
      {
        id: "0-3",
        kind: "quiz",
        title: "0.3 Module 00 Verification & Institutional Check",
        format: "Interactive Checkpoint",
        duration: "04:00",
      },
    ],
  },
  {
    id: "m1",
    title: "Module 01: Creating Your Auslandsportal Account & Flawless Lodgement",
    lessonCount: 3,
    minutes: 34,
    lessons: [
      { id: "1-1", kind: "video", title: "1.1 Digital Portal Prerequisites & Account Provisioning" },
      { id: "1-2", kind: "video", title: "1.2 Data Validation & Avoiding Instant Reject Flags" },
      { id: "1-3", kind: "assignment", title: "1.3 Submission Checksum & Consular Acknowledgement Receipt" },
    ],
  },
  {
    id: "m2",
    title: "Module 02: Appointment Securing & Logistics Layer Management",
    lessonCount: 3,
    minutes: 30,
    lessons: [
      { id: "2-1", kind: "video", title: "2.1 VFS / TLScontact vs Direct Embassy Appointment Scheduling" },
      { id: "2-2", kind: "video", title: "2.2 Defeating Black-Market Appointment Bots Legally" },
      { id: "2-3", kind: "quiz", title: "2.3 Slot Acquisition Scenario Test" },
    ],
  },
  {
    id: "m3",
    title: "Module 03: The Ironclad Dossier Assembly & Apostille Verification",
    lessonCount: 3,
    minutes: 32,
    lockedNote: "3 comprehensive dossier construction modules & PDF templates locked until enrollment.",
  },
  {
    id: "m4",
    title: "Module 04: The Consular Interview Day & Biometric Lodgement",
    lessonCount: 3,
    minutes: 28,
    lockedNote: "Consular Q&A simulations, counter psychology, and biometric security steps.",
  },
  {
    id: "m5",
    title: "Module 05: After Submission — Tracking Your File Across Agencies",
    lessonCount: 4,
    minutes: 34,
    lockedNote: "Inter-agency routing tracking (BAMF, BA Vorabzustimmung, and local Ausländerbehörde).",
  },
  {
    id: "m6",
    title: "Module 06: Remedying Stalls, Delays & Remonstration Actions",
    lessonCount: 4,
    minutes: 30,
    lockedNote: "Remonstration (Widerspruch) legal drafting templates, deadlines, and § 75 VwGO pressure letters.",
  },
  {
    id: "m7",
    title: "Module 07: Post-Arrival Formalities: Anmeldung & Final Residence Card",
    lessonCount: 4,
    minutes: 24,
    lockedNote: "Registration at the Bürgeramt, public health insurance activation, and physical eAT card collection.",
  },
];

const PLAYBOOK_DETAIL: CourseDetail = {
  slug: FEATURED_COURSE.slug,
  overline: "Immigration Law & Expedition Track • 2026 Statutory Update",
  title: FEATURED_COURSE.title,
  subtitle:
    "The authoritative legal masterclass for skilled workers, IT specialists, and international professionals navigating the Auslandsportal, ZAB equivalence, and consular interviews without procedural delays or administrative rejection.",
  rating: 4.9,
  reviewCountLabel: "(480+ enrolled jurists & applicants)",
  lead: "Mathias Schulze",
  leadCredential: "(Kammergericht Berlin)",
  updated: "Jan 2026 (§ 20a & § 18b AufenthG)",
  language: "Bilingual DE/EN Statutory Templates",
  specs: [
    "8 Modules",
    "27 Lessons",
    "4h 30m Runtime",
    "Cryptographic Completion Certificate",
    "Full Statutory Dossier Pack",
  ],
  moduleCount: 8,
  lessonCount: 27,
  totalDuration: "4 hours 30 minutes",
  outcomes: [
    {
      title: "Consular Services Portal Lodgement",
      text: "Navigate the Auslandsportal with zero fatal data-entry mistakes, metadata flaws, or mismatched field types.",
    },
    {
      title: "The 3 Layers of Institutional Power",
      text: "Map jurisdictions precisely: Chancery vs Logistics Contractor (VFS Global/TLScontact) vs Ausländerbehörde.",
    },
    {
      title: "BA Employment Declaration Architecture",
      text: "Structure the Erklärung zum Beschäftigungsverhältnis to breeze through Federal Employment Agency checks.",
    },
    {
      title: "Embassy Slot Securing & Bot Defense",
      text: "Circumvent third-party broker cartels to schedule legitimate consular appointments without risking cancellation.",
    },
    {
      title: "ZAB & Anabin Fast-Track Equivalence",
      text: "Obtain rapid Statement of Comparability validation for foreign qualifications under updated 2026 guidelines.",
    },
    {
      title: "Administrative Remonstration (Widerspruch)",
      text: "Draft legally binding administrative challenges and diplomatic inquiries if an application is stalled or rejected.",
    },
  ],
  prerequisites: [
    {
      label: "Target Pathway Identification:",
      text: "General intention to pursue the EU Blue Card (§ 18b), Qualified Employment (§ 18a), or the points-based Opportunity Card (Chancenkarte § 20a).",
    },
    {
      label: "No Prior Legal Knowledge Needed:",
      text: "All regulatory citations (AufenthG, BeschV, VwVfG) are deconstructed into practical step-by-step checklists and bilingual dossier files.",
    },
    {
      label: "Document Readiness:",
      text: "Access to standard personal identification, university degree/vocational diplomas, and draft or confirmed employment offers for instant dossier audit.",
    },
  ],
  modules: MODULES,
  instructor: {
    name: "Mathias Schulze",
    title: "Senior Chancery Jurist & Immigration Counsel",
    location: "Chancery Liaison • Berlin",
    bio: "Admitted to the Bar at Kammergericht Berlin (#48910) with more than 14 years specializing exclusively in high-skilled corporate migration, diplomatic remonstrations, and administrative immigration appeals across the Federal Republic.",
    stats: [
      { icon: "workspace_premium", value: "500+", label: "Successful Relocations", tone: "primary" },
      { icon: "task_alt", value: "98.2%", label: "Approval Rate", tone: "success" },
      { icon: "menu_book", label: "Author, German Chancery Practice (2025 Ed.)", tone: "muted" },
    ],
  },
  reviews: [
    {
      author: "Aarav M.",
      role: "Senior Cloud Architect → Munich",
      context: "Embassy New Delhi • Blue Card",
      quote:
        "The breakdown of the Auslandsportal file upload requirements saved me weeks. My colleague filed on his own and was rejected due to an incorrect declaration form. This course provided the exact DOCX template the consulate accepted without a single follow-up.",
    },
    {
      author: "Camila R., MD",
      role: "Clinical Researcher → Berlin",
      context: "Consulate São Paulo • Chancenkarte",
      quote:
        "Module 06's Remonstration guide is gold. When my qualification points were miscalculated by the logistics processor, I used Attorney Schulze's formal administrative clarification letter. My visa was approved 8 calendar days later.",
    },
  ],
  faqs: [
    {
      question: "Is this course fully updated with the 2026 German Immigration revisions?",
      answer:
        "Yes. All modules, checklists, and document templates include the recent modifications to the Chancenkarte points schedule (§ 20a AufenthG), lowered salary thresholds for the EU Blue Card, and updated Federal Employment Agency (BA) internal testing rules.",
    },
    {
      question: "Can I submit specific questions about my employment contract or situation?",
      answer:
        "Enrolled students receive access to the dedicated Legal Q&A tab inside the player, where certified immigration paralegals and jurists address specific dossier formatting inquiries within 48 business hours. For bespoke legal representation, course members receive a credit toward private retainer services.",
    },
    {
      question: "How long do I maintain access to the masterclass content and updates?",
      answer:
        "Enrollment grants lifetime access. As German statutory regulations shift or embassy digital portals evolve, masterclass videos and documentation kits are refreshed at no additional charge.",
    },
    {
      question: "What if my planned visa category differs (e.g., Freelance § 21 or Family Reunion § 28)?",
      answer:
        "While Modules 02 through 07 cover the universal mechanics common to all German national D-visas (Auslandsportal submission, apostilles, consular interviews, and remonstrations), specialized freelance revenue plans and family integration proofs are detailed in our specialized track add-ons.",
    },
  ],
  legalNotice:
    "This masterclass constitutes specialized legal instruction, procedural education, and document preparation frameworks. It does not establish an individualized attorney-client representation contract until a separate power of attorney (Vollmacht) is executed with EUVisaAdvice Chancery Partners. While curriculum templates reflect statutory compliance standards of the German Federal Foreign Office (Auswärtiges Amt), official visa issuance remains subject to sovereign consular discretion.",
  purchase: {
    price: 189,
    listPrice: 299,
    discountLabel: "36% OFF",
    kitNote: "Full 2026 Legal Dossier Kit Included",
    guarantee: "14-day money-back guarantee",
    features: [
      { strong: "4.5 hours", text: " on-demand legal video & audio breakdowns" },
      { strong: "14 downloadable templates", text: " & checklists (PDF & DOCX)" },
      { strong: "Direct 1-on-1 Q&A access", text: " to certified immigration jurists" },
      { strong: "Verified Certificate", text: " of Statutory Completion" },
      { text: "Cross-platform access: Web, iPadOS, iOS & Android" },
      { text: "Bundesagentur für Arbeit compliance updates feed" },
    ],
    image: IMAGES.courseFeatured,
    previewLabel: "Preview Lesson 01 (09:42)",
  },
};

/** Per-course sales page sections to hide. A hidden section gets an empty list, and the page skips empty sections. */
const HIDDEN_SECTIONS: Record<string, { reviews?: boolean; prerequisites?: boolean }> = {
  "eu-blue-card-application-masterclass": { reviews: true, prerequisites: true },
  "germany-opportunity-card-points-system": { reviews: true },
};

/**
 * Returns the detail page content for a course slug.
 * Only the flagship playbook has bespoke content in the designs; other courses
 * reuse its structure with their own title, price and stats until real data exists.
 */
export function getCourseDetail(slug: string): CourseDetail | null {
  if (slug === PLAYBOOK_DETAIL.slug) return PLAYBOOK_DETAIL;
  const summary = COURSES.find((course) => course.slug === slug) ?? findCourse(slug);
  if (!summary) return null;
  const hidden = HIDDEN_SECTIONS[summary.slug] ?? {};
  return {
    ...PLAYBOOK_DETAIL,
    slug: summary.slug,
    title: summary.title,
    subtitle: summary.description,
    overline: `${summary.badge} • ${summary.reference}`,
    rating: summary.rating,
    reviews: hidden.reviews ? [] : PLAYBOOK_DETAIL.reviews,
    prerequisites: hidden.prerequisites ? [] : PLAYBOOK_DETAIL.prerequisites,
    reviewCountLabel: `(${summary.reviewCount} enrolled applicants)`,
    moduleCount: summary.moduleCount,
    lessonCount: summary.lessonCount,
    specs: PLAYBOOK_DETAIL.specs.map((spec, i) =>
      i === 0 ? `${summary.moduleCount} Modules` : i === 1 ? `${summary.lessonCount} Lessons` : spec,
    ),
    purchase: {
      ...PLAYBOOK_DETAIL.purchase,
      price: summary.price,
      listPrice: Math.round(summary.price * 1.58),
      image: summary.image,
    },
  };
}
