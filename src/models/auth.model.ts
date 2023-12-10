export interface LoginResponse {
  response : Auth
}

export interface Auth {
  token: string | null;
}

export interface UserInfo {
  id: number;
  name: string;
  email: string;
}
