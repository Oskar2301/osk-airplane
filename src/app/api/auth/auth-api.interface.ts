export interface ILoginApi {
  email: string;
  password: string;
}

export interface IRegisterApi {
  email: string;
  name: string;
  password: string;
}

export interface IForgotApi {
  email: string;
}

export interface IChangePasswordApi {
  password: string;
}

export interface IAuthResponse {
  token: string;
}

export interface IForgotResponse {
  success: boolean
}
