export interface SignUpDataType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface SignUpErrorType {
  isError: boolean;
  errorFirstNameMessage: string;
  errorLastNameMessage: string;
  errorEmailMessage: string;
  errorPasswordMessage: string;
}
