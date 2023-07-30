import db from "../data/firestore";
import {
  deleteDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

export function deleteAllButOneByTitle(params, fieldName, colName) {
  try {
    // Step 1: Query the Firestore collection
    const colRef = collection(db, colName);
    params.forEach(async (fieldValue) => {
      const q = query(colRef, where(fieldName, "==", fieldValue));
      const querySnapshot = (await getDocs(q)).docs;

      // Step 3: Delete all but one of the documents
      const docsToDelete = querySnapshot.slice(1); // Get all documents except the first one (to keep)

      docsToDelete.forEach(async (doc) => {
        await deleteDoc(doc.ref);
      });
      console.log(
        `Deleted ${docsToDelete.length} with ${fieldName}: ${fieldValue} `
      );
    });
  } catch (error) {
    console.error("Error deleting documents:", error);
  }
}

// Usage: Call the function with the title you want to keep one of.
