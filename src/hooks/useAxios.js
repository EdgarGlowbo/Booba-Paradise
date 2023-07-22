import { useEffect, useState } from "react";

const useAxios = (configObj) => {
  const { axiosInstance, method, urls, requestConfig } = configObj;
  const [responses, setResponses] = useState([]);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controllers = urls.map((url) => new AbortController());
    const fetchData = async () => {
      try {
        const results = await Promise.all(
          urls.map(async (url) => {
            const res = await axiosInstance[method.toLowerCase()](url, {
              ...requestConfig,
              signal: controllers[urls.indexOf(url)].signal,
            });
            return res.data;
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

    return () => controllers.forEach((controller) => controller.abort());
  }, []);

  return { responses, errors, isLoading };
};

export default useAxios;
