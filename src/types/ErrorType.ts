type ErrorOptions = { type: string; message: string };

type ErrorNewUserType = [
  group: "email" | "password" | "verifyPassword",
  options: ErrorOptions
];
type DisplayNameType = [group: "displayName", options: ErrorOptions];

type APIErrorType = {
  error: unknown;
  setError?: [group: string, options: ErrorOptions];
};

export { type ErrorNewUserType, type DisplayNameType, type APIErrorType };
