import { createContext } from "react";
import { MetadataContextType } from "../../types/metadata";

export const MetaContext = createContext<MetadataContextType | undefined>(
  undefined
);
