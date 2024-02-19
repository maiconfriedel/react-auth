import { AuthProvider } from "react-oauth2-code-pkce";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { authConfig } from "../config/auth";
import Index from "../pages/Index";
import LoginValidator from "./login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
]);

export default function Routes() {
  return (
    <AuthProvider authConfig={authConfig}>
      <LoginValidator>
        <RouterProvider router={router} />
      </LoginValidator>
    </AuthProvider>
  );
}
