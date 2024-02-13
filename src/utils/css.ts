export const classNames = (...classes: string[]) => {
  return classes.join(" ");
};

export function variationName(name: string, value: string) {
  return `${name}${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}
