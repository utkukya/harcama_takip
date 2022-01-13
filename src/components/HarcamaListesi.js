import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

import { Hareket } from "./Hareket";

export const HarcamaListesi = () => {
  const { hareketler } = useContext(GlobalContext);

  return (
    <>
      <h3>Hareketler</h3>
      <ul className="liste">
        {hareketler.map((hareket) => (
          <Hareket key={hareket.id} hareketler={hareket} />
        ))}
      </ul>
    </>
  );
};
