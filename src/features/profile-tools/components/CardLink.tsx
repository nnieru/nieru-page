import { CardLinkProps } from "../types/cardLinkProps";
import "./cardlink.scss";
import github from "../../../assets/github-brands.svg";
import linkedin from "../../../assets/linkedin-brands.svg";
import others from "../../../assets/link-solid.svg";

const CardLink = ({ title, url, icon = "others" }: CardLinkProps) => {
  const getIcon = () => {
    switch (icon) {
      case "github":
        return github;
      case "linkedin":
        return linkedin;
      default:
        return others;
    }
  };

  return (
    <div className="button">
      <a className="button-inner" href={url}>
        <div className="button-content">
          <img src={getIcon()} alt="logo-icon" /> {title}
        </div>
      </a>
    </div>
  );
};

export default CardLink;
