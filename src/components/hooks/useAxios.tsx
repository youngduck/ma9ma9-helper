import { useState, useCallback } from "react";
import axios from "axios";

interface requestConfigTypes {
  url: string;
  method: string;
  headers: object;
  data: object | null;
}

const useAxios = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);

  const sendRequest = useCallback(
    async (
      requestConfig: requestConfigTypes,
      applyData: (arg0: any) => void
    ) => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios({
          url: requestConfig.url,
          method: requestConfig.method ? requestConfig.method : "GET",
          headers: requestConfig.headers ? requestConfig.headers : {},
          data: requestConfig.data ? requestConfig.data : null,
        });

        const responseData = await response.data;
        applyData(responseData);
      } catch (err) {
        setError("useAxios Error");
      }
    },
    []
  );

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useAxios;
