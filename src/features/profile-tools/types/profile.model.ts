export interface Profile {
  name: string;
  image?: string;
  description?: string;
  links: ProfileLink[];
}

export type Icon = "github" | "linkedin" | "others";

export interface ProfileLink {
  title: string;
  url: string;
  icon?: Icon;
}
