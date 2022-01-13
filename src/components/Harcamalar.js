import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

export const Harcamalar = () => {
  const { hareketler } = useContext(GlobalContext);

  const miktar = hareketler.map((hareket) => hareket.miktar);

  const gelir = miktar
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const gider = (
    miktar.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div>
      <div className="cerceve">
        <div>
          <h4>Gelirler</h4>
          <p className="miktar arti">{gelir}</p>
        </div>
        <div>
          <h4>Giderler</h4>
          <p className="miktar eksi">{gider}</p>
        </div>
      </div>
    </div>
  );
};
