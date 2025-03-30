import { createContext } from 'react';

export const EntryPointContext = createContext<{
  loading: boolean;
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>;
}>({ loading: false, setLoading: undefined });
