import { logError } from "../utils/logger";

export async function getNotes() {
  try {
    
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { _id: 1, text: "Learn React properly" },
          { _id: 2, text: "Understand Error Boundaries" },
          { _id: 3, text: "Practice production build" },
          {_id: 4, text: "Using Mock data currently"}
        ]);
      }, 1000);
    });
  } catch (error) {
    logError(error, "getNotes");
    throw error;
  }
}