import axios from "../config/axios-instance";
import { LoginResponse, UserInfo } from "../models/auth.model";

class AuthRepository {
  static async login(model: { email: string; password: string }) {
    const response = await axios.post<LoginResponse>("/auth/login", model);
    return response.data.response;
  }

  static async logout() {
    const response = await axios.post("/auth/logout");
    return response.data;
  }
  static async register(model: {email: string, name: string, password: string}) {
    const response = await axios.post("/user", model);
    return response.data;
  }

  static async me() {
    const response = await axios.get<UserInfo>("/auth/me");
    return response.data;
  }
}

export default AuthRepository;
