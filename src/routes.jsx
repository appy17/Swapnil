import { Home, Profile, SignIn, SignUp } from "@/pages";

export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "About",
    path: "/about",
    element: <Profile />,
  },
  {
    name: "Blog",
    path: "/Blog",
    element: <SignIn />,
  },
  {
    name: "Events",
    path: "/Events",
    element: <SignUp />,
  },
  {
    name: "Video",
    href: "/video",
    target: "_blank",
    element: "",
  },
  {
    name: "Contact us",
    href: "/contact",
    target: "_blank",
    element: "",
  },
];

export default routes;
