import type { ComponentType, SVGProps } from "react";
import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
  DiscordIcon,
  InstagramIcon,
  MailIcon,
  GlobeIcon,
} from "@/components/icons";

export type SocialPlatform =
  | "github"
  | "linkedin"
  | "x"
  | "discord"
  | "instagram"
  | "email"
  | "website"
  | "custom";

export interface Social {
  platform: SocialPlatform;
  label: string;
  /** Full href, including mailto: for email. */
  href: string;
  /** Username/handle shown in some contexts. */
  handle?: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  /** Show in the compact header/footer icon row. */
  primary?: boolean;
}

export const socials: Social[] = [
  {
    platform: "github",
    label: "GitHub",
    href: "https://github.com/bugsum",
    handle: "@bugsum",
    icon: GitHubIcon,
    primary: true,
  },
  {
    platform: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bugsum",
    handle: "in/bugsum",
    icon: LinkedInIcon,
    primary: true,
  },
  {
    platform: "x",
    label: "X",
    href: "https://x.com/Samarth1098",
    handle: "@Samarth1098",
    icon: XIcon,
    primary: true,
  },
  {
    platform: "discord",
    label: "Discord",
    href: "https://discord.com/users/949315754614992956",
    handle: "its.bugsum",
    icon: DiscordIcon,
  },
  {
    platform: "instagram",
    label: "Instagram",
    href: "https://instagram.com/its.bugsum",
    handle: "@its.bugsum",
    icon: InstagramIcon,
  },
  {
    platform: "email",
    label: "Email",
    href: "mailto:samarthsharma9377@gmail.com",
    handle: "samarthsharma9377@gmail.com",
    icon: MailIcon,
    primary: true,
  },
];

export const primarySocials = socials.filter((s) => s.primary);
