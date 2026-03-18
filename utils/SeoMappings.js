// utils/SeoMappings.js
// Maps URL path slugs → schoolPageSEO keys (from utils/SeoConfig.js).
// The useSEO hook strips leading/trailing slashes, then looks up:
//   1. Full path  (e.g. "pre-primary/curriculum")
//   2. First segment only (e.g. "pre-primary")
//   3. Falls back to "home"

export const schoolSlugToSeoKeyMap = {
  // ── Home ──────────────────────────────────────────────────────────
  "":                                              "home",
  "/":                                             "home",

  // ── General / Main Routes ─────────────────────────────────────────
  "general-rules":                                 "general-rules",
  "admission":                                     "admissionform",

  // ── Pre-Primary Section ───────────────────────────────────────────
  "pre-primary":                                   "pre-primary",
  "pre-primary/preprimaryourteam":                 "pre-primary-team",
  "pre-primary/preprimaryptamembers":              "pre-primary-pta",
  "pre-primary/pre-primary-admission-process":     "pre-primary-admission-process",
  "pre-primary/pre-primary-admissionform":         "pre-primary-admissionform",
  "pre-primary/pre-primary-guidelines":            "pre-primary-guidelines",
  "pre-primary/achievements":                      "pre-primary-achievements",
  "pre-primary/curriculum":                        "pre-primary-curriculum",

  // ── Primary Section ───────────────────────────────────────────────
  "primary":                                       "primary",
  "primary/about":                                 "primary-about",
  "primary/about/team":                            "primary-team",
  "primary/about/pta":                             "primary-pta",
  "primary/about/vishakhacommittee":               "primary-vishakha",
  "primary/primary-admission-form":                "primary-admissionform",
  "primary/primary-admission-process":             "primary-admission-process",
  "primary/primary-guidelines":                    "primary-guidelines",
  "primary/curriculum":                            "primary-curriculum",
  "primary/achievements":                          "primary-achievements",

  // ── Secondary Section ─────────────────────────────────────────────
  "secondary":                                     "secondary",
  "secondary/about/pta":                           "secondary-pta",
  "secondary/about/team":                          "secondary-team",
  "secondary/secondary-admission-process":         "secondary-admission-process",
  "secondary/secondary-admission-form":            "secondary-admissionform",
  "secondary/secondary-guidlines":                 "secondary-guidelines",
  "secondary/achievements":                        "secondary-achievements",
  "secondary/curriculum":                          "secondary-curriculum",
};
