import { Counter, User } from "../components";

export const Routers = [
  { path: "/", component: <div>Home</div> },
  { path: "counter", component: <Counter /> },
  { path: "user", component: <User /> },
];
