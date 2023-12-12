import { isAxiosError } from "axios";

import { AccessTokenService } from "services/AccessTokenService";
import { RefreshTokenService } from "services/RefreshTokenService";
import { api } from "api/instanceApi";
import { Credentials } from "types/credentials";
import { Tokens } from "types/tokens";

const { setAccessToken } = new AccessTokenService();
const { setRefreshToken } = new RefreshTokenService();

// const credentials: Credentials = {
//   email: "info@demining-georesource.tech",
//   password: "admin",
// };

export const signIn = async (credentials: Credentials): Promise<void> => {
  try {
    const response = await api.post<Tokens>("/api/auth/login", credentials, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    setAccessToken(response.data.access_token);
    setRefreshToken(response.data.refresh_token);
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error.message, error.response?.status);
    }

    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
