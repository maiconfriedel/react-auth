import { useContext } from "react";
import { AuthContext } from "react-oauth2-code-pkce";

export default function UserInfo() {
  const { token, tokenData, logOut } = useContext(AuthContext);

  function handleLogout() {
    logOut();
  }

  return (
    <>
      <h4>Access Token</h4>
      <pre>{token}</pre>
      <h4>JWT Data</h4>
      <pre>{JSON.stringify(tokenData, null, 2)}</pre>
      <button onClick={() => handleLogout()}>Logout</button>
    </>
  );
}
