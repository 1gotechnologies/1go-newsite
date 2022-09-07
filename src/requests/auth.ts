import useAuthStore from "../stores/auth";
import { backend } from "../utils/apis";

const auth = useAuthStore();
const login = async (data: { email: string; password: string }) => {
  const jsonData = JSON.stringify(data);
  try {
    const response = await fetch(`${backend}login`, {
      method: "POST",
      body: jsonData,
      headers: {},
    });
    return response.json();
  } catch (error) {
    throw new Error(JSON.stringify(error));
  }
};

const register = async (data: { email: string; password: string }) => {
  const jsonData = JSON.stringify(data);
  try {
    const response = await fetch(`${backend}login`, {
      method: "POST",
      body: jsonData,
      headers: {},
    });
    return response.json();
  } catch (error) {
    throw new Error(JSON.stringify(error));
  }
};

const refreshToken = async () => {
  const { accessToken, refreshToken } = auth;
  //   const jsonData = JSON.stringify(data);
  try {
    const response = await fetch(`${backend}login`, {
      method: "POST",
      //   body: jsonData,
      headers: {},
    });
    return response.json();
  } catch (error) {
    throw new Error(JSON.stringify(error));
  }
};

export { login, register, refreshToken };
