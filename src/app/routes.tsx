import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Scene1 } from "./components/Scene1";
import { Scene2 } from "./components/Scene2";
import { Scene3 } from "./components/Scene3";
import { Scene4 } from "./components/Scene4";
import { Scene5 } from "./components/Scene5";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Scene1 },
      { path: "avatar", Component: Scene2 },
      { path: "memories", Component: Scene3 },
      { path: "letter", Component: Scene4 },
      { path: "ending", Component: Scene5 },
    ],
  },
]);
