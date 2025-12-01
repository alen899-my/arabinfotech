export function formatRoute(route: string) {
  if (route === "/") return "Home";
  return route
    .replace(/\//g, " › ")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}
