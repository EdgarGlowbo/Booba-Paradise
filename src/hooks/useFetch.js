import db from "../data/firestore";
import {
  getDocs,
  collection,
  query,
  orderBy,
  limit,
  getDocsFromCache,
  loadBundle,
  addDoc,
  getDoc,
  onSnapshot,
} from "firebase/firestore";
import { useEffect, useState } from "react";

const useFetch = (configObjs) => {
  const [responses, setResponses] = useState([]);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await Promise.all(
          configObjs.map(async (obj) => {
            const { url, orderParam, lim } = obj;
            const colRef = collection(db, url);
            let q;
            if (orderParam && lim) {
              q = query(colRef, orderBy(...orderParam), limit(lim));
            } else if (orderParam && !lim) {
              q = query(colRef, orderBy(...orderParam));
            } else if (!orderParam && !lim) {
              q = query(colRef);
            }
            const querySnapshot = await getDocsFromCache(q);
            if (!querySnapshot.empty > 0) {
              console.log("From cache");
              return querySnapshot.docs;
            } else {
              // const docs = onSnapshot()
              const docs = (await getDocs(q)).docs;
              console.log("From server");

              return docs;
            }
          })
        );
        setResponses(results);
      } catch (err) {
        setErrors([err.message]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { responses, errors, isLoading };
};

export default useFetch;
