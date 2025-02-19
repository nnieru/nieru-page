import { ReactNode, useContext } from "react";
import { MetadataContextType, MetadataType } from "../types/metadata";
import { MetaContext } from "../shared/context/MetaContext";

const MetaProvider = ({ children }: { children: ReactNode }) => {
  const setMeta = ({
    title,
    description,
    ogTitle,
    ogDescription,
    ogImage,
    canonical,
  }: MetadataType) => {
    if (title) document.title = title;
    if (description) {
      updateMetaTag("description", description);
    }
    if (ogTitle) {
      updateMetaProperty("og:title", ogTitle);
    }
    if (ogDescription) {
      updateMetaProperty("og:description", ogDescription);
    }
    if (ogImage) {
      updateMetaProperty("og:image", ogImage);
    }
    if (canonical) {
      updateLinkTag("canonical", canonical);
    }
  };

  const updateMetaTag = (name: string, content: string) => {
    let element = document.querySelector<HTMLMetaElement>(
      `meta[name='${name}']`
    );
    if (element) {
      element.setAttribute("content", content);
    } else {
      element = document.createElement("meta");
      element.name = name;
      element.content = content;
      document.head.appendChild(element);
    }
  };

  const updateMetaProperty = (property: string, content: string) => {
    let element = document.querySelector<HTMLMetaElement>(
      `meta[property='${property}']`
    );
    if (element) {
      element.setAttribute("content", content);
    } else {
      element = document.createElement("meta");
      element.setAttribute("property", property);
      element.content = content;
      document.head.appendChild(element);
    }
  };

  const updateLinkTag = (rel: string, href: string) => {
    let element = document.querySelector<HTMLLinkElement>(`link[rel='${rel}']`);
    if (element) {
      element.setAttribute("href", href);
    } else {
      element = document.createElement("link");
      element.rel = rel;
      element.href = href;
      document.head.appendChild(element);
    }
  };

  return (
    <MetaContext.Provider value={{ setMeta }}>{children}</MetaContext.Provider>
  );
};

export const useMeta = (): MetadataContextType => {
  const context = useContext(MetaContext);
  if (!context) {
    throw new Error("useMeta must be used within a MetaProvider");
  }
  return context;
};

export default MetaProvider;
