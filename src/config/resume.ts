export interface EducationItem {
  institution: string;
  credential: string;
  period: string;
  detail?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  url?: string;
}

export interface Achievement {
  title: string;
  detail: string;
  year?: string;
}

export interface Resume {
  /** Professional summary for the resume header. */
  summary: string;
  /** Path (in /public) to a downloadable PDF resume. */
  pdfPath: string;
  education: EducationItem[];
  certifications: Certification[];
  achievements: Achievement[];
}

export const resume: Resume = {
  summary:
    "Software engineer with 6+ years building performant, accessible products across the stack. I pair strong systems thinking with genuine product taste, and I care as much about reliability as I do about the last 5% of polish.",
  pdfPath: "/resume.pdf",
  education: [
    {
      institution: "GNSPSC, Indore",
      credential: "BCA in Computer Applications",
      period: "2023 - 2026",
      detail: "Focus on distributed systems and human–computer interaction.",
    },
  ],
  certifications: [
    // {
    //   name: "AWS Certified Solutions Architect",
    //   issuer: "Amazon Web Services",
    //   year: "2023",
    // },
    // {
    //   name: "Professional Scrum Developer",
    //   issuer: "Scrum.org",
    //   year: "2022",
    // },
  ],
  achievements: [
    // {
    //   title: "Speaker — Frontend Summit",
    //   detail: "Talk on perceived performance and motion design at scale.",
    //   year: "2024",
    // },
    // {
    //   title: "Open-source maintainer",
    //   detail: "2k+ GitHub stars across personal projects and libraries.",
    // },
    // {
    //   title: "Internal Engineering Award",
    //   detail: "Recognized for the platform rebuild that improved TTI by 48%.",
    //   year: "2023",
    // },
  ],
};
