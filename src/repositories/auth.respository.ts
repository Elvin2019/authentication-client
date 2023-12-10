import axios from "../config/axios-instance";
import { LoginResponse } from "../models/auth.model";

class AuthRepository {
  static async login(body: { email: string; password: string }) {
    const response = await axios.post<LoginResponse>("/auth/login", body);
    return response.data;
  }

  static async register(email: string, name: string, password: string) {
    const response = await axios.post("/auth/register", {
      email,
      name,
      password,
    });
    return response.data;
  }

  static async logout() {
    const response = await axios.post("/auth/logout");
    return response.data;
  }
}

export default AuthRepository;
