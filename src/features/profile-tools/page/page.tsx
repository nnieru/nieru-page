import { useEffect } from "react";
import Card from "../../../shared/components/card/Card";
import CardLink from "../components/CardLink";
import { useMeta } from "../../../app/MetaProvider";

const ProfileToolsPage = () => {
  const { setMeta } = useMeta();
  useEffect(() => {
    setMeta({
      title: "Nieru Page",
      description: "This is my compact information",
      ogTitle: "Nieru Page",
      ogDescription: "This is my compact information",
      ogImage: "",
      canonical: "https://nnieru.github.io/nieru-page/",
    });
  }, [setMeta]);
  return (
    <div className="container">
      <div className="inner-container">
        {/* header */}
        <div className="content-wrapper">
          <Card>
            <h2>Nathaniel Andrian </h2>
            <div>image</div>
            <div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut et
                veniam quisquam! Ipsam unde dicta, quos nulla, rem magni ut
                dolore, veritatis tenetur alias vero expedita atque sequi ab
                voluptatem necessitatibus explicabo itaque aspernatur optio
                autem.
              </p>
            </div>
          </Card>
        </div>

        {/* card links */}
        <div className="content-wrapper">
          <ul>
            <li>
              <CardLink title="link 1" key={1} url="xx" />
            </li>
            <li>
              <CardLink title="link 1" key={1} url="xx" />
            </li>
            <li>
              <CardLink title="link 1" key={1} url="xx" />
            </li>
            <li>
              <CardLink title="link 1" key={1} url="xx" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileToolsPage;
