import { Profile } from "../types/profile.model";

export const getProfileData = (): Profile => {
  return {
    name: "Nathaniel Andrian",
    description:
      "A passionate software engineer with three years of experience in the field. I graduated in Computer Science from Bina Nusantara University and started my journey as an iOS developer. My first year in the industry focused on iOS development, and over the past two years, I've transitioned into a full-stack developer role, working across both front-end, back-end, and mobile technologies. I love exploring new technologies and continuously improving my skills, not only in technical areas but also in communication, collaboration, and problem-solving. I strive to contribute effectively to every team and project, always seeking opportunities to grow and innovate.",
    links: [
      {
        title: "Let's Connect!",
        url: "https://www.linkedin.com/in/nathaniel-andrian-169a84195/",
        icon: "linkedin",
      },
      {
        title: "My Project ^^",
        url: "https://github.com/nnieru",
        icon: "github",
      },
    ],
  };
};
