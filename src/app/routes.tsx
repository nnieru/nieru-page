import { lazy } from "react";
import { RouteObject } from "react-router";

const ProfileToolsPage = lazy(
  () => import("../features/profile-tools/page/page")
);
export const routes: RouteObject[] = [
  {
    path: "/",
    element: <ProfileToolsPage />,
  },
];
