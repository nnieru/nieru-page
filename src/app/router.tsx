import { createHashRouter } from "react-router-dom";
import { routes } from "./routes";

// export const router = createBrowserRouter(routes);
export const router = createHashRouter(routes); // for static host like Github pages
