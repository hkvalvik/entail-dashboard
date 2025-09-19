import { UndefinedInitialDataOptions, useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { ApiContext } from "../ApiContext";

interface Options<T> extends UndefinedInitialDataOptions<T> {
  queryRootKey: string;
  errorMessage: string;
}

export const useApi = <T>({
  queryRootKey,
  errorMessage,
  queryFn,
  ...options
}: Options<T>) => {
  const { addError } = useContext(ApiContext);

  const tryFetch: typeof queryFn = async (context) => {
    if (!queryFn || typeof queryFn !== "function") {
      throw new Error("Query function is required");
    }
    try {
      return await queryFn(context);
    } catch (error) {
      addError({
        id: queryRootKey,
        message: errorMessage,
      });
      throw error;
    }
  };

  const result = useQuery({
    ...options,
    queryFn: tryFetch,
  });

  return result;
};
