import { useContext } from "react";
import { AuthContext } from "react-oauth2-code-pkce";

export default function UserInfo() {
  const { token, tokenData, logOut, login, loginInProgress, error } =
    useContext(AuthContext);

  function handleLogout() {
    logOut();
  }

  if (loginInProgress) {
    return <div>Loading....</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!tokenData) {
    return <button onClick={() => login()}>Login</button>;
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
