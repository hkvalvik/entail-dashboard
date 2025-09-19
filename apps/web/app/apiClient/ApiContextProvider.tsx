import { ReactNode, useState } from "react";
import { ApiContext, ApiContextProps } from "./ApiContext";
import { ApiError } from "./types";

export interface ApiContextProviderProps {
  children?: ReactNode;
}

export const ApiContextProvider = ({ children }: ApiContextProviderProps) => {
  const [errors, setErrors] = useState<ApiError[]>([]);
  const value: ApiContextProps = {
    errors,
    addError: (error) =>
      setErrors((current) => [
        ...current.filter(({ id }) => id !== error.id),
        error,
      ]),
  };
  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};
