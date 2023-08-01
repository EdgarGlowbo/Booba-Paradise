import db from "../data/firestore";
import {
  getDocs,
  collection,
  query,
  orderBy,
  limit,
  getDocsFromCache,
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

            if (!querySnapshot.empty) {
              // console.log("From cache");
              const docs = querySnapshot.docs;
              return docs;
            } else {
              const snapshot = await getDocs(q);
              const docs = snapshot.docs;
              // console.log("From server");
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
