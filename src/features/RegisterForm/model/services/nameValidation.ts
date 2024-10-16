export const validateName = (email: string): string => {
  const trimmedEmail = email.trim();
  const nameRegex = /^[a-zA-Z]+$/;

  if (!trimmedEmail) {
    return ' This field cannot be empty.';
  }
  if (!nameRegex.test(trimmedEmail)) {
    return ' at least 1 or more letters.';
  }
  return '';
};
