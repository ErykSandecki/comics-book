// @ts-nocheck
import { createContext, FunctionComponent, ReactNode, useState } from 'react';

// other
import { LocalStorageKey } from '../../enums';

type TProps = {
  children: ReactNode;
};

export const Context: React.Context<any> = createContext({
  margin: 0,
  setMargin: () => {},
});

const getMarginFromLocalStorage = (): number =>
  parseInt(localStorage.getItem(LocalStorageKey.marginOffset) || 0);

const ContextProvider: FunctionComponent<TProps> = ({ children }) => {
  const [margin, setMargin] = useState(getMarginFromLocalStorage());

  const setMarginHandler = (value: number): void => {
    if (margin > 0 || value !== -1) {
      const result = margin + value;
      setMargin(result);
      localStorage.setItem(LocalStorageKey.marginOffset, result);
    }
  };

  return (
    <Context.Provider value={{ margin, setMargin: setMarginHandler }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
