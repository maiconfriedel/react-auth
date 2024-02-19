import { AuthProvider } from "react-oauth2-code-pkce";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { authConfig } from "../config/auth";
import Index from "../pages/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
]);

export default function Routes() {
  return (
    <AuthProvider authConfig={authConfig}>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
