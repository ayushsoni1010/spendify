export interface LoginDataType {
  email: string;
  password: string;
}

export interface LoginErrorType {
  isError: boolean;
  errorEmailMessage: string;
  errorPasswordMessage: string;
}
