// utils/SeoConfig.js
// Master SEO Configuration — Vidya Prabodhini Prashala English Medium School, Nashik
// Single source of truth for all SEO metadata, structured data, and schema generators.
// Used by hooks/useSEO.js to dynamically update meta tags on client-side navigation.

// ─── 1. SITE-WIDE CONFIG ────────────────────────────────────────────
export const schoolSeoConfig = {
  siteName: "Vidya Prabodhini Prashala English Medium School",
  societyName: "Central Hindu Military Education Society (CHME'S)",
  shortName: "VPPE | Bhonsala",
  defaultTitle: "Vidya Prabodhini Prashala English Medium School | CBSE School Nashik",
  defaultDescription:
    "Vidya Prabodhini Prashala English Medium School, Nashik — CBSE school from 5th to 10th standard. NDA preparation, military training, self-defence, Kathak, chess, and English lab. Under Central Hindu Military Education Society.",
  baseUrl: "https://vppe.bhonsala.in",
  twitterHandle: "@vppebhonsala",
  address: "Rambhoomi, Nashik, Maharashtra 422005",
  streetAddress: "Rambhoomi",
  addressLocality: "Nashik",
  addressRegion: "Maharashtra",
  postalCode: "422005",
  addressCountry: "IN",
  phone: "+91 7507546666",
  email: "info@vppe.bhonsala.in",
  foundedYear: "1935",
  defaultOgImage: "/logo_chmes.jpg",
  geo: {
    latitude: "20.0000",
    longitude: "73.7898",
  },
  socialMedia: {
    facebook: "https://facebook.com/vppebhonsala",
    instagram: "https://instagram.com/vppebhonsala",
    youtube: "https://youtube.com/vppebhonsala",
  },
  openingHours: [
    "Mo-Fr 08:00-14:00",
    "Sa 08:00-11:00",
  ],
};

// ─── 2. PAGE-LEVEL SEO ──────────────────────────────────────────────
// Each key matches a route slug (see SeoMappings.js for the route → key mapping).
// Fields: title, description, keywords, canonical, ogImage
export const schoolPageSEO = {

  // ── HOME ──────────────────────────────────────────────────────────
  home: {
    title: "Vidya Prabodhini Prashala English Medium School | CBSE School Nashik",
    description:
      "Vidya Prabodhini Prashala English Medium School, Nashik — Premier CBSE school (5th to 10th) under Central Hindu Military Education Society. NDA preparation, military training, self-defence, Kathak, chess, and modern English lab. Holistic education since 1935.",
    keywords:
      "Vidya Prabodhini Prashala English Medium, VPPE Nashik, Bhonsala school Nashik, CBSE school Nashik, NDA preparation school Nashik, military training school Nashik, best CBSE school Nashik, English medium school Nashik, CHME society school",
    canonical: "/",
    ogImage: "/logo_chmes.jpg",
  },

  // ── GENERAL RULES ─────────────────────────────────────────────────
  "general-rules": {
    title: "General Rules & Discipline | Vidya Prabodhini Prashala English Medium School",
    description:
      "School rules, discipline guidelines, and code of conduct at Vidya Prabodhini Prashala English Medium School, Nashik. Building responsible, disciplined students through structured values and military-inspired principles.",
    keywords:
      "school rules Nashik, discipline guidelines VPPE, school code of conduct, general rules CBSE school, school discipline Nashik, VPPE rules regulations",
    canonical: "/general-rules",
    ogImage: "/logo_chmes.jpg",
  },

  // ── MAIN ADMISSION ────────────────────────────────────────────────
  admissionform: {
    title: "Apply Online | Admission Form 2026-27 | Vidya Prabodhini Prashala English Medium",
    description:
      "Apply online for admission at Vidya Prabodhini Prashala English Medium School, Nashik for 2026-27. Fill the online admission form for CBSE classes 5th to 10th. Join Nashik's premier school for NDA preparation and holistic education.",
    keywords:
      "admission form VPPE 2026, apply online school Nashik, CBSE admission form Nashik, Vidya Prabodhini Prashala admission, school registration 2026 Nashik, NDA school admission Nashik",
    canonical: "/admission",
    ogImage: "/logo_chmes.jpg",
  },

  // ── PRE-PRIMARY SECTION ───────────────────────────────────────────
  "pre-primary": {
    title: "Pre-Primary Section | Early Education | Vidya Prabodhini Prashala English Medium",
    description:
      "Pre-Primary section at Vidya Prabodhini Prashala English Medium School, Nashik. Nurturing young learners with play-based activities, foundational skills, and value-based education in a safe, stimulating environment under CHME'S.",
    keywords:
      "pre-primary section Nashik, early education VPPE, foundational learning school Nashik, pre-primary Bhonsala school, pre-primary admission Nashik, CHME pre-primary",
    canonical: "/pre-primary",
    ogImage: "/logo_chmes.jpg",
  },
  "pre-primary-team": {
    title: "Pre-Primary Teaching Staff | Our Team | Vidya Prabodhini Prashala English Medium",
    description:
      "Meet the dedicated pre-primary teaching staff at Vidya Prabodhini Prashala English Medium School, Nashik. Qualified, caring educators committed to holistic early childhood development.",
    keywords:
      "pre-primary teachers VPPE, teaching staff Nashik, early childhood educators, pre-primary team Bhonsala school",
    canonical: "/pre-primary/preprimaryourteam",
    ogImage: "/logo_chmes.jpg",
  },
  "pre-primary-pta": {
    title: "Pre-Primary PTA Members | Parent-Teacher Association | VPPE Nashik",
    description:
      "Pre-Primary Parent-Teacher Association members at Vidya Prabodhini Prashala English Medium School, Nashik. Strengthening school-parent collaboration for better student outcomes.",
    keywords:
      "PTA members pre-primary VPPE, parent teacher association Nashik, school PTA Bhonsala, pre-primary parents Nashik",
    canonical: "/pre-primary/preprimaryptamembers",
    ogImage: "/logo_chmes.jpg",
  },
  "pre-primary-admission-process": {
    title: "Pre-Primary Admission Process 2026-27 | Vidya Prabodhini Prashala English Medium",
    description:
      "Step-by-step pre-primary admission process at Vidya Prabodhini Prashala English Medium School, Nashik for 2026-27. Age criteria, required documents, registration steps, and important dates.",
    keywords:
      "pre-primary admission process Nashik 2026, how to apply pre-primary VPPE, pre-primary registration Nashik, pre-primary admission steps Bhonsala school",
    canonical: "/pre-primary/pre-primary-admission-process",
    ogImage: "/logo_chmes.jpg",
  },
  "pre-primary-admissionform": {
    title: "Pre-Primary Admission Form | Apply Online | VPPE Nashik",
    description:
      "Fill the online admission form for Pre-Primary section at Vidya Prabodhini Prashala English Medium School, Nashik for 2026-27. Secure your child's place at our nurturing pre-primary section.",
    keywords:
      "pre-primary admission form VPPE, online pre-primary application Nashik, pre-primary admissions 2026, apply pre-primary Bhonsala school",
    canonical: "/pre-primary/pre-primary-admissionform",
    ogImage: "/logo_chmes.jpg",
  },
  "pre-primary-guidelines": {
    title: "Pre-Primary Admission Guidelines | Eligibility & Documents | VPPE Nashik",
    description:
      "Pre-Primary admission guidelines at Vidya Prabodhini Prashala English Medium School, Nashik. Eligibility criteria, age requirements, document checklist, and important rules for pre-primary admissions.",
    keywords:
      "pre-primary admission guidelines Nashik, eligibility criteria pre-primary VPPE, pre-primary documents required, pre-primary age criteria school Nashik",
    canonical: "/pre-primary/pre-primary-guidelines",
    ogImage: "/logo_chmes.jpg",
  },
  "pre-primary-achievements": {
    title: "Pre-Primary Achievements | Student Success | Vidya Prabodhini Prashala English Medium",
    description:
      "Celebrating pre-primary student achievements at Vidya Prabodhini Prashala English Medium School, Nashik. Milestones, events, competitions, and holistic accomplishments of our youngest learners.",
    keywords:
      "pre-primary achievements VPPE, student accomplishments Nashik, pre-primary events school Nashik, pre-primary awards Bhonsala",
    canonical: "/pre-primary/achievements",
    ogImage: "/logo_chmes.jpg",
  },
  "pre-primary-curriculum": {
    title: "Pre-Primary Curriculum | Learning Program | Vidya Prabodhini Prashala English Medium",
    description:
      "Pre-Primary curriculum at Vidya Prabodhini Prashala English Medium School, Nashik. Play-based and activity-based learning covering language, numeracy, arts, motor skills, and value development for young learners.",
    keywords:
      "pre-primary curriculum Nashik, early childhood program VPPE, foundational curriculum school Nashik, pre-primary syllabus Bhonsala school",
    canonical: "/pre-primary/curriculum",
    ogImage: "/logo_chmes.jpg",
  },

  // ── PRIMARY SECTION ───────────────────────────────────────────────
  primary: {
    title: "Primary Section | Class V–VII | Vidya Prabodhini Prashala English Medium School",
    description:
      "Primary section at Vidya Prabodhini Prashala English Medium School, Nashik. Strong academic foundation for Classes V–VII with CBSE curriculum, English lab, activity-based learning, NDA awareness, and character building.",
    keywords:
      "primary section VPPE Nashik, class 5 6 7 CBSE Nashik, primary school Bhonsala, English medium primary Nashik, primary education NDA school Nashik",
    canonical: "/primary",
    ogImage: "/logo_chmes.jpg",
  },
  "primary-about": {
    title: "About Primary Section | Vision & Programs | Vidya Prabodhini Prashala English Medium",
    description:
      "About the Primary section at Vidya Prabodhini Prashala English Medium School, Nashik. Discover our vision, teaching methodology, infrastructure, and approach to holistic education for primary classes.",
    keywords:
      "about primary section VPPE, primary school info Nashik, primary vision mission school, Bhonsala primary section Nashik",
    canonical: "/primary/about",
    ogImage: "/logo_chmes.jpg",
  },
  "primary-team": {
    title: "Primary Teaching Staff | Our Team | Vidya Prabodhini Prashala English Medium School",
    description:
      "Meet the experienced primary section teaching staff at Vidya Prabodhini Prashala English Medium School, Nashik. Qualified educators delivering quality CBSE education with dedication and discipline.",
    keywords:
      "primary teachers VPPE Nashik, teaching staff primary school, primary school team Bhonsala, primary educators Nashik CBSE",
    canonical: "/primary/about/team",
    ogImage: "/logo_chmes.jpg",
  },
  "primary-pta": {
    title: "Primary PTA Members | Parent-Teacher Association | VPPE Nashik",
    description:
      "Primary section Parent-Teacher Association members at Vidya Prabodhini Prashala English Medium School, Nashik. Active parent-school partnership for student growth and welfare.",
    keywords:
      "primary PTA VPPE, parent teacher association primary Nashik, school PTA members Bhonsala, primary section parents school",
    canonical: "/primary/about/pta",
    ogImage: "/logo_chmes.jpg",
  },
  "primary-vishakha": {
    title: "Vishakha Committee | Anti-Harassment Cell | Vidya Prabodhini Prashala English Medium",
    description:
      "Vishakha Committee at Vidya Prabodhini Prashala English Medium School, Nashik. Dedicated to ensuring a safe, respectful, and harassment-free school environment for students and staff.",
    keywords:
      "Vishakha committee school Nashik, anti harassment cell school, safe school Nashik, school safety committee VPPE, Vishakha committee CBSE school",
    canonical: "/primary/about/vishakhacommittee",
    ogImage: "/logo_chmes.jpg",
  },
  "primary-admissionform": {
    title: "Primary Admission Form 2026-27 | Apply Online | VPPE Nashik",
    description:
      "Online admission form for Primary section at Vidya Prabodhini Prashala English Medium School, Nashik for 2026-27. Apply for CBSE Classes V–VII. Join Nashik's premier English medium school.",
    keywords:
      "primary admission form VPPE 2026, apply primary school Nashik, CBSE primary admission Nashik, Bhonsala school admission form, primary online application 2026",
    canonical: "/primary/primary-admission-form",
    ogImage: "/logo_chmes.jpg",
  },
  "primary-admission-process": {
    title: "Primary Admission Process 2026-27 | Step-by-Step Guide | VPPE Nashik",
    description:
      "Complete step-by-step guide to primary section admission at Vidya Prabodhini Prashala English Medium School, Nashik for 2026-27. Age criteria, documents required, key dates, and registration steps.",
    keywords:
      "primary admission process VPPE 2026, how to apply primary school Nashik, primary registration CBSE Nashik, Bhonsala primary admission steps",
    canonical: "/primary/primary-admission-process",
    ogImage: "/logo_chmes.jpg",
  },
  "primary-guidelines": {
    title: "Primary Admission Guidelines | Eligibility & Documents | VPPE Nashik",
    description:
      "Primary section admission guidelines at Vidya Prabodhini Prashala English Medium School, Nashik. Eligibility criteria, age requirements, document checklist, and important admission rules.",
    keywords:
      "primary admission guidelines Nashik, primary eligibility criteria VPPE, primary documents required school, primary admission rules Bhonsala",
    canonical: "/primary/primary-guidelines",
    ogImage: "/logo_chmes.jpg",
  },
  "primary-curriculum": {
    title: "Primary Curriculum | CBSE Academic Program | Vidya Prabodhini Prashala English Medium",
    description:
      "CBSE primary curriculum at Vidya Prabodhini Prashala English Medium School, Nashik. Structured learning covering English, Mathematics, Science, Social Studies, Computer, and value education for Classes V–VII.",
    keywords:
      "primary curriculum VPPE Nashik, CBSE syllabus primary classes, primary academics Bhonsala school, Class 5 6 7 curriculum Nashik",
    canonical: "/primary/curriculum",
    ogImage: "/logo_chmes.jpg",
  },
  "primary-achievements": {
    title: "Primary Section Achievements | Student Success | Vidya Prabodhini Prashala English Medium",
    description:
      "Celebrating primary section student achievements at Vidya Prabodhini Prashala English Medium School, Nashik. Academic honours, sports victories, cultural wins, and overall excellence.",
    keywords:
      "primary achievements VPPE Nashik, primary students success, school awards primary Nashik, Bhonsala school achievements primary",
    canonical: "/primary/achievements",
    ogImage: "/logo_chmes.jpg",
  },

  // ── SECONDARY SECTION ─────────────────────────────────────────────
  secondary: {
    title: "Secondary Section | Class VIII–X | Vidya Prabodhini Prashala English Medium School",
    description:
      "Secondary section at Vidya Prabodhini Prashala English Medium School, Nashik for Classes VIII–X. CBSE board preparation, NDA preparation, military training, self-defence, Kathak, chess, and career-focused holistic education.",
    keywords:
      "secondary section VPPE Nashik, class 8 9 10 CBSE Nashik, CBSE board school Nashik, NDA preparation school Nashik, secondary English medium Nashik, Bhonsala secondary school",
    canonical: "/secondary",
    ogImage: "/logo_chmes.jpg",
  },
  "secondary-pta": {
    title: "Secondary PTA Members | Parent-Teacher Association | VPPE Nashik",
    description:
      "Secondary section Parent-Teacher Association members at Vidya Prabodhini Prashala English Medium School, Nashik. Building strong school-family partnerships for student success in board exams and beyond.",
    keywords:
      "secondary PTA VPPE Nashik, parent teacher association secondary, PTA members Bhonsala school, secondary section parents Nashik",
    canonical: "/secondary/about/pta",
    ogImage: "/logo_chmes.jpg",
  },
  "secondary-team": {
    title: "Secondary Teaching Staff | Expert Educators | Vidya Prabodhini Prashala English Medium",
    description:
      "Meet the expert secondary section teaching staff at Vidya Prabodhini Prashala English Medium School, Nashik. Highly qualified educators specialised in CBSE board preparation and NDA guidance.",
    keywords:
      "secondary teachers VPPE Nashik, secondary teaching staff Bhonsala, board class teachers Nashik, Class 9 10 teachers CBSE Nashik",
    canonical: "/secondary/about/team",
    ogImage: "/logo_chmes.jpg",
  },
  "secondary-admission-process": {
    title: "Secondary Admission Process 2026-27 | VPPE Nashik",
    description:
      "Step-by-step secondary section admission guide at Vidya Prabodhini Prashala English Medium School, Nashik for 2026-27. Age criteria, eligibility, documents, and key dates for Classes VIII–X.",
    keywords:
      "secondary admission process VPPE 2026, Class 8 9 10 admission Nashik, CBSE secondary admission Nashik, Bhonsala secondary admission steps",
    canonical: "/secondary/secondary-admission-process",
    ogImage: "/logo_chmes.jpg",
  },
  "secondary-admissionform": {
    title: "Secondary Admission Form 2026-27 | Apply Online | VPPE Nashik",
    description:
      "Online admission form for Secondary section at Vidya Prabodhini Prashala English Medium School, Nashik for 2026-27. Apply for CBSE Classes VIII–X. Prepare for board exams and NDA at Nashik's top school.",
    keywords:
      "secondary admission form VPPE 2026, apply secondary school Nashik, CBSE Class 9 10 admission Nashik, Bhonsala school admission form secondary",
    canonical: "/secondary/secondary-admission-form",
    ogImage: "/logo_chmes.jpg",
  },
  "secondary-guidelines": {
    title: "Secondary Admission Guidelines | Eligibility & Documents | VPPE Nashik",
    description:
      "Secondary section admission guidelines at Vidya Prabodhini Prashala English Medium School, Nashik. Eligibility criteria, age requirements, required documents, and school rules for Classes VIII–X admissions.",
    keywords:
      "secondary admission guidelines VPPE, eligibility criteria secondary Nashik, secondary documents required school, Bhonsala secondary admission rules",
    canonical: "/secondary/secondary-guidlines",
    ogImage: "/logo_chmes.jpg",
  },
  "secondary-achievements": {
    title: "Secondary Section Achievements | Board Results & Awards | VPPE Nashik",
    description:
      "Celebrating secondary section achievements at Vidya Prabodhini Prashala English Medium School, Nashik. CBSE board results, NDA selections, sports honours, cultural achievements, and student excellence.",
    keywords:
      "secondary achievements VPPE Nashik, CBSE board results Nashik, school toppers Bhonsala, NDA selected students school Nashik, secondary awards Nashik",
    canonical: "/secondary/achievements",
    ogImage: "/logo_chmes.jpg",
  },
  "secondary-curriculum": {
    title: "Secondary Curriculum | CBSE Board Program | Vidya Prabodhini Prashala English Medium",
    description:
      "CBSE secondary curriculum at Vidya Prabodhini Prashala English Medium School, Nashik for Classes VIII–X. Comprehensive board preparation with English, Mathematics, Science, Social Studies, Computer, NDA readiness, and co-curricular activities.",
    keywords:
      "secondary curriculum VPPE Nashik, CBSE syllabus Class 8 9 10, secondary academics Nashik, board exam preparation school Nashik, NDA prep curriculum school",
    canonical: "/secondary/curriculum",
    ogImage: "/logo_chmes.jpg",
  },

  // ── 404 ───────────────────────────────────────────────────────────
  notFound: {
    title: "Page Not Found | Vidya Prabodhini Prashala English Medium School",
    description:
      "The page you're looking for doesn't exist. Return to Vidya Prabodhini Prashala English Medium School homepage for information about our CBSE school in Nashik.",
    keywords: "page not found VPPE, 404 Bhonsala school website",
    canonical: "/404",
    ogImage: "/logo_chmes.jpg",
  },
};

// ─── 3. SCHEMA GENERATORS ────────────────────────────────────────────
// Generates Schema.org structured data for rich search results.

/** Base School (EducationalOrganization) schema — injected on every page */
export const getSchoolSchema = (pageDescription = schoolSeoConfig.defaultDescription) => ({
  "@context": "https://schema.org",
  "@type": ["School", "EducationalOrganization"],
  name: schoolSeoConfig.siteName,
  alternateName: schoolSeoConfig.shortName,
  url: schoolSeoConfig.baseUrl,
  logo: {
    "@type": "ImageObject",
    url: `${schoolSeoConfig.baseUrl}/logo_chmes.jpg`,
    width: 200,
    height: 200,
  },
  image: `${schoolSeoConfig.baseUrl}/logo_chmes.jpg`,
  description: pageDescription,
  telephone: schoolSeoConfig.phone,
  email: schoolSeoConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: schoolSeoConfig.streetAddress,
    addressLocality: schoolSeoConfig.addressLocality,
    addressRegion: schoolSeoConfig.addressRegion,
    postalCode: schoolSeoConfig.postalCode,
    addressCountry: schoolSeoConfig.addressCountry,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: schoolSeoConfig.geo.latitude,
    longitude: schoolSeoConfig.geo.longitude,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "14:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "11:00",
    },
  ],
  sameAs: Object.values(schoolSeoConfig.socialMedia),
  foundingDate: schoolSeoConfig.foundedYear,
  numberOfStudents: { "@type": "QuantitativeValue" },
  educationalLevel: ["PrimarySchool", "MiddleSchool", "SecondarySchool"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Academic Programs",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "EducationalOccupationalProgram", name: "Pre-Primary Section", educationalLevel: "PreSchool" } },
      { "@type": "Offer", itemOffered: { "@type": "EducationalOccupationalProgram", name: "Primary Section (Class V–VII)", educationalLevel: "PrimarySchool" } },
      { "@type": "Offer", itemOffered: { "@type": "EducationalOccupationalProgram", name: "Secondary Section (Class VIII–X)", educationalLevel: "SecondarySchool" } },
    ],
  },
  parentOrganization: {
    "@type": "Organization",
    name: schoolSeoConfig.societyName,
    url: schoolSeoConfig.baseUrl,
  },
  areaServed: "Nashik Metropolitan Region",
  curriculumAlignment: {
    "@type": "AlignmentObject",
    alignmentType: "educationalFramework",
    targetName: "CBSE – Central Board of Secondary Education",
    targetUrl: "https://cbse.gov.in",
  },
});

/** WebSite schema — enables sitelinks searchbox in Google */
export const getWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: schoolSeoConfig.siteName,
  url: schoolSeoConfig.baseUrl,
  potentialAction: {
    "@type": "SearchAction",
    target: `${schoolSeoConfig.baseUrl}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
});

/** BreadcrumbList schema — for any page with breadcrumbs */
export const getBreadcrumbSchema = (crumbs = []) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: crumbs.map((crumb, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: crumb.name,
    item: `${schoolSeoConfig.baseUrl}${crumb.path}`,
  })),
});

/** FAQPage schema — pass array of { question, answer } */
export const getFAQSchema = (faqs = []) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
});

/** Article / Blog Post schema */
export const getArticleSchema = ({ headline, description, datePublished, dateModified, image, authorName }) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline,
  description,
  image: image ? `${schoolSeoConfig.baseUrl}${image}` : `${schoolSeoConfig.baseUrl}/logo_chmes.jpg`,
  datePublished,
  dateModified: dateModified || datePublished,
  author: {
    "@type": "Organization",
    name: authorName || schoolSeoConfig.siteName,
    url: schoolSeoConfig.baseUrl,
  },
  publisher: {
    "@type": "Organization",
    name: schoolSeoConfig.siteName,
    logo: {
      "@type": "ImageObject",
      url: `${schoolSeoConfig.baseUrl}/logo_chmes.jpg`,
    },
  },
});

/** Build composite structured data for a specific page type */
export const buildPageSchema = (seoKey, pageData) => {
  const schemas = [];

  // Always include School schema
  schemas.push(getSchoolSchema(pageData.description));

  // Add page-specific schemas
  if (seoKey === "home") {
    schemas.push(getWebSiteSchema());
  }

  if (seoKey.includes("admission")) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      name: schoolSeoConfig.siteName,
      url: schoolSeoConfig.baseUrl,
      description: pageData.description,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "School Admissions 2026-27",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "EducationalOccupationalProgram", name: "Pre-Primary Section Admission", description: "Early childhood program" } },
          { "@type": "Offer", itemOffered: { "@type": "EducationalOccupationalProgram", name: "Primary Section Admission (Class V–VII)", description: "Age: 10–12 years" } },
          { "@type": "Offer", itemOffered: { "@type": "EducationalOccupationalProgram", name: "Secondary Section Admission (Class VIII–X)", description: "Age: 13–15 years" } },
        ],
      },
    });
  }

  // Wrap multiple schemas in a @graph if there are more than one
  if (schemas.length === 1) return schemas[0];
  return { "@context": "https://schema.org", "@graph": schemas.map(s => { const { "@context": _, ...rest } = s; return rest; }) };
};

// ─── 4. METADATA BUILDER (utility) ───────────────────────────────────
// Use this if you ever add SSR or prerendering support.
export const buildMetadata = (seoKey) => {
  const pageData = schoolPageSEO[seoKey] || schoolPageSEO.home;
  const ogImageUrl = pageData.ogImage
    ? `${schoolSeoConfig.baseUrl}${pageData.ogImage}`
    : `${schoolSeoConfig.baseUrl}/logo_chmes.jpg`;

  return {
    title: pageData.title,
    description: pageData.description,
    keywords: pageData.keywords,
    canonical: `${schoolSeoConfig.baseUrl}${pageData.canonical}`,
    openGraph: {
      title: pageData.title,
      description: pageData.description,
      url: `${schoolSeoConfig.baseUrl}${pageData.canonical}`,
      siteName: schoolSeoConfig.siteName,
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: pageData.title }],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageData.title,
      description: pageData.description,
      images: [ogImageUrl],
      site: schoolSeoConfig.twitterHandle,
    },
  };
};
