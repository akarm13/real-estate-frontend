import queryString, { ParsedQuery } from "query-string";

export const removeUnusedQueryParams = (url: string): string => {
  const parsed = queryString.parseUrl(url);
  const cleanParams: ParsedQuery<string> = Object.entries(parsed.query).reduce(
    (acc: ParsedQuery<string>, [key, value]) => {
      if (!isEmptyValue(value)) {
        acc[key] = value;
      } else {
        return acc;
      }
      return acc;
    },
    {}
  );

  console.log(cleanParams);

  return queryString.stringifyUrl({ url: parsed.url, query: cleanParams });
};

const isEmptyValue = (
  value: string | (string | null)[] | null | undefined
): boolean => {
  if (value === undefined || value === null || value === "") {
    return true;
  }

  if (Array.isArray(value)) {
    return (
      value.length === 0 || value.every((item) => item === null || item === "")
    );
  }

  return false;
};
