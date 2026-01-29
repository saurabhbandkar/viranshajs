/**
 * Converts a string to Title Case by replacing delimiters with spaces
 * and capitalizing the first letter of every word.
 *
 * Handles camelCase, snake_case, kebab-case, and multiple spaces.
 *
 * @param str - The input string to transform.
 * @returns The transformed title-cased string, or an empty string if input is falsy.
 *
 * @example
 * ```ts
 * toTitleCase("hello_world");     // "Hello World"
 * toTitleCase("camelCaseString"); // "Camel Case String"
 * toTitleCase("kebab-case-test"); // "Kebab Case Test"
 * ```
 */
const toTitleCase = (str: string): string => {
  if (!str) return "";

  if (typeof str !== "string") {
    return str;
  }

  return str
    .replace(/[_-]+/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\s+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .trim();
};

export { toTitleCase };
