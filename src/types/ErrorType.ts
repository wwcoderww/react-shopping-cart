type ErrorOptions = { type: string; message: string };

type ErrorNewUserType = [
  group: "email" | "password" | "verifyPassword",
  options: ErrorOptions
];

export { type ErrorNewUserType };
