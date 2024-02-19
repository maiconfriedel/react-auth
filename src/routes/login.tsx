import { PropsWithChildren, useContext } from "react";
import { AuthContext } from "react-oauth2-code-pkce";

export default function LoginValidator({ children }: PropsWithChildren) {
  const { tokenData, login, loginInProgress, error } = useContext(AuthContext);

  if (loginInProgress) {
    return <div>Loading....</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!tokenData) {
    return <button onClick={() => login()}>Login</button>;
  }

  return children;
}
