export const validateEmail = (email: string): string => {
  const trimmedEmail = email.trim();
  const emailRegex = new RegExp(
    '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|' +
      '(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|' +
      '(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
  );

  if (!trimmedEmail) {
    return ' Email field cannot be empty.';
  }
  if (!emailRegex.test(trimmedEmail)) {
    return ' Invalid email address format.';
  }
  return '';
};
