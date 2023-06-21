export interface INewUser {
  name: string;
  email: string;
  password: string;
}

export interface IUzerLogin {
  email: string;
  password: string;
}

export interface IUserPromise {
  name: string;
  email: string;

}
export interface IErrorPromise {
  errorMessage: string;
}

export interface IInitialState {
  user: IUserPromise;
  token: string | null ;
  isLoading: boolean;
  isLoggedIn: boolean;
}
