import { createContext } from "react";
import { ApiError } from "./types";

export interface ApiContextProps {
  errors: ApiError[];
  addError: (error: ApiError) => void;
}

const defaults: ApiContextProps = {
  errors: [],
  addError: () => undefined,
};

export const ApiContext = createContext<ApiContextProps>(defaults);
