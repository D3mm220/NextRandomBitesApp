"use client";
import { createContext, ReactNode, useEffect, useState } from "react";

export const AccountContext = createContext<{
  openLogin: boolean;
  setOpenLogin: React.Dispatch<React.SetStateAction<boolean>>;
  openSignup: boolean;
  setOpenSignup: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  openLogin: false,
  setOpenLogin: () => {},
  openSignup: false,
  setOpenSignup: () => {},
});

export const AccountProvider = ({ children }: { children: ReactNode }) => {
  const [openLogin, setOpenLogin] = useState<boolean>(false);
  const [openSignup, setOpenSignup] = useState<boolean>(false);

  return (
    <AccountContext.Provider
      value={{
        openLogin,
        setOpenLogin,
        openSignup,
        setOpenSignup,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};
