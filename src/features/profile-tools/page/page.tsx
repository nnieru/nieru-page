import { useEffect } from "react";
import Card from "../../../shared/components/card/Card";
import CardLink from "../components/CardLink";
import { useMeta } from "../../../app/MetaProvider";
import { useProfile } from "../hooks/useProfile";

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

  const { profile } = useProfile();
  return (
    <div className="container">
      <div className="inner-container">
        {/* header */}
        <div className="content-wrapper">
          <Card>
            <h2> {profile?.name}</h2>
            <div>[image]</div>
            <div>
              <p className="description">{profile?.description}</p>
            </div>
          </Card>
        </div>

        {/* card links */}
        <div className="content-wrapper">
          <ul>
            {profile?.links.map((link) => (
              <li key={link.url}>
                <CardLink title={link.title} url={link.url} icon={link.icon} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileToolsPage;
