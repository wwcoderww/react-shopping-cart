const validateEmail = {
  required: "Email is required",
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: "Invalid email address",
  },
};

const validatePassword = {
  minLength: {
    value: 6,
    message: "Password should be atleast 6 characters",
  },
  maxLength: { value: 16, message: "Max length is 16" },
};

const validateDisplayName = {
  maxLength: { value: 16, message: "Max length is 16" },
};

export { validateEmail, validatePassword, validateDisplayName };
