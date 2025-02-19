import { RouterProvider } from "react-router";
import { router } from "./router";
import { ThemeProvider } from "./theme_provider";
import MetaProvider from "./MetaProvider";

const App = () => {
  return (
    <ThemeProvider>
      <MetaProvider>
        <RouterProvider router={router} />
      </MetaProvider>
    </ThemeProvider>
  );
};

export default App;
