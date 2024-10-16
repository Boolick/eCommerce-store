export const validatePassword = (password: string): string => {
  const trimmedPassword = password.trimStart();

  switch (true) {
    case !trimmedPassword:
      return ' field cannot be empty.';
    case trimmedPassword.length < 8:
      return ' must be at least 8 characters long.';
    case !/[A-Z]/.test(trimmedPassword):
      return ' must include at least one uppercase letter.';
    case !/[a-z]/.test(trimmedPassword):
      return ' must include at least one lowercase letter.';
    case !/[0-9]/.test(trimmedPassword):
      return ' must include at least one number.';
    case !/[!@#$%^&*?/]/.test(trimmedPassword):
      return ` must include at least one special character '!@#$%^&*?'.`;
    default:
      return '';
  }
};
