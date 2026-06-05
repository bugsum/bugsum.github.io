export interface ContactConfig {
  /** Heading shown on the contact page / CTA. */
  heading: string;
  /** Supporting copy. */
  subheading: string;
  /** Email used for the direct-email CTA. */
  email: string;
  /** Typical response time, shown as reassurance. */
  responseTime: string;
  /** Subject presets offered in the form. */
  subjects: string[];
}

export const contact: ContactConfig = {
  heading: "Let's build something exceptional",
  subheading:
    "Have a product to ship, a problem worth solving, or a role you think I'd love? I read every message.",
  email: "samarthsharma9377@gmail.com",
  responseTime: "Usually within 24 hours",
  subjects: [
    "New project",
    "Job opportunity",
    "Collaboration",
    "Just saying hi",
  ],
};
