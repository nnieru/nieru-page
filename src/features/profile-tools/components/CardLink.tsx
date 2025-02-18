import { CardLinkProps } from "../types/cardLinkProps";
import "./cardlink.scss";
const CardLink = ({ title, url }: CardLinkProps) => {
  return (
    <div className="button">
      <a className="button-inner" href={url}>
        {title}
      </a>
    </div>
  );
};

export default CardLink;
