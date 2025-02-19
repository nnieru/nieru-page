export interface MetadataContextType {
  setMeta: (metadata: MetadataType) => void;
}
export interface MetadataType {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonical?: string;
}
