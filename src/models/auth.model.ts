export interface LoginResponse {
  token: string | null;
}

export interface UserInfo {
  id: number;
  name: string;
  email: string;
}
