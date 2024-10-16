export const validateEmail = (email: string): string => {
  const trimmedEmail = email.trim();
  const whitespaceRegex = /\s/;
  const multipleAtSymbolsRegex = /@.*@/;
  const doubleDotRegex = /\.{2,}/;
  const domainStartEndDotRegex = /(^\.)|(\.$)/;
  const specialCharactersRegex = /[<>()[\]\\,;:\s@"]/;
  const localPartFormatRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@/;
  const ipAddressRegex = /\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\]/;
  const domainRegex = /([<>()[\]\\,;:\s@"]+([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})$/;

  switch (true) {
    case !trimmedEmail:
      return ' field cannot be empty.';
    case whitespaceRegex.test(trimmedEmail):
      return ' must not contain leading or trailing whitespace.';
    case (trimmedEmail.match(/@/g) || []).length !== 1:
      return ' must contain at least one "@" symbol (e.g., user@example.com).';
    case multipleAtSymbolsRegex.test(trimmedEmail):
      return ' must not contain more than one "@" symbol.';
    case doubleDotRegex.test(trimmedEmail):
      return ' must not contain "..".';
    case domainStartEndDotRegex.test(trimmedEmail.split('@')[1]):
      return ' domain part must not start or end with a dot ".".';
    case specialCharactersRegex.test(trimmedEmail.split('@')[0]):
      return ' must not contain special characters like "<>()[]\\.,;:" or spaces.';
    case !localPartFormatRegex.test(trimmedEmail):
      return ' local part of the is not properly formatted (e.g., user@example.com).';
    case !ipAddressRegex.test(trimmedEmail) && !domainRegex.test(trimmedEmail):
      return ' domain part is not properly formatted (e.g., user@example.com).';
    default:
      return '';
  }
};
