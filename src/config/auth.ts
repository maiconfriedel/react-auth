import { TAuthConfig, TRefreshTokenExpiredEvent } from "react-oauth2-code-pkce";

export const authConfig: TAuthConfig = {
  clientId: "PLACEHOLDER",
  authorizationEndpoint: "PLACEHOLDER",
  tokenEndpoint: "PLACEHOLDER",
  redirectUri: "PLACEHOLDER",
  scope: "PLACEHOLDER",
  onRefreshTokenExpire: (event: TRefreshTokenExpiredEvent) => event.login(),
  refreshTokenExpiresIn: 2.592e6, // 30 dias
  autoLogin: false,
  refreshWithScope: false,
};
