export const sizes = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

export const queries = {
  sm: `(min-width: ${sizes.sm})`,
  md: `(min-width: ${sizes.md})`,
  lg: `(min-width: ${sizes.lg})`,
  xl: `(min-width: ${sizes.xl})`,
  "2xl": `(min-width: ${sizes["2xl"]})`,
};
