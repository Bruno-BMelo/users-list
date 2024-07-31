import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { UsersList } from "./components/users-list";
import { UserProfile } from "./components/user-profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UsersList />
  },
  { 
    path: "/:userId",
    element: <UserProfile />
  }
]);

export function App() {
  return <RouterProvider router={router} />
}
