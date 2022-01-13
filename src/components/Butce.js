import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

const Butce = () => {
  const { hareketler } = useContext(GlobalContext);

  const miktar = hareketler.map((hareket) => hareket.miktar);
  const toplam = miktar.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div>
      <h4>Toplam</h4>
      <h1>{toplam}TL</h1>
    </div>
  );
};

export default Butce;
