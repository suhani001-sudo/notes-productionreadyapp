export function logError(error, context = "") {
  console.error("Error in:", context);
  console.error(error);
}