import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const baslangicDurumu = {
  hareketler: [],
};

export const GlobalContext = createContext(baslangicDurumu);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, baslangicDurumu);

  function harcamaSil(id) {
    dispatch({
      type: "HAREKETİ_SİL",
      payload: id,
    });
  }

  function yeniHarcama(hareket) {
    dispatch({
      type: "HAREKET_EKLE",
      payload: hareket,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        hareketler: state.hareketler,
        harcamaSil,
        yeniHarcama,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
