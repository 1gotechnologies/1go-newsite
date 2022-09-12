import create from "zustand";
import * as Crypto from "crypto-js";

interface Tokens {
  accessToken?: string;
  refreshToken?: string;
}

interface AuthState extends Tokens {
  getToken(): void;
  setToken: (tokens: Tokens) => void;
}

const encryptToken = (token: string) =>
  Crypto.AES.encrypt(token, import.meta.env.VITE_Enc_Key ?? "  ").toString();

const decryptToken = (token: string) =>
  Crypto.AES.decrypt(token, import.meta.env.VITE_Enc_Key ?? "  ").toString(
    Crypto.enc.Utf8
  );

const useAuthStore = create<AuthState>((set) => ({
  accessToken: "",
  refreshToken: "",

  getToken: function () {
    const token = localStorage.getItem("token");
    const x_key = localStorage.getItem("x_key");

    const accessToken = token ? decryptToken(token) : undefined;
    const refreshToken = x_key ? decryptToken(x_key) : undefined;

    this.setToken({
      accessToken,
      refreshToken,
    });
  },

  setToken: function (tokens) {
    tokens.accessToken
      ? (localStorage.setItem("token", encryptToken(tokens.accessToken)),
        set({ accessToken: tokens.accessToken }))
      : null;

    tokens.refreshToken
      ? (localStorage.setItem("x_key", encryptToken(tokens.refreshToken)),
        set({ refreshToken: tokens.refreshToken }))
      : null;
  },
}));

export default useAuthStore;
