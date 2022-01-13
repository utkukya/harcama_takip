import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

export const Hareket = (props) => {
  const { harcamaSil } = useContext(GlobalContext);

  const sign = props.hareketler.miktar < 0 ? "-" : "+";

  return (
    <li className={props.hareketler.miktar < 0 ? "eksi" : "arti"}>
      {props.hareketler.baslik}
      <span>
        {sign}
        {Math.abs(props.hareketler.miktar)} TL
      </span>
      <button
        onClick={() => harcamaSil(props.hareketler.id)}
        className="sil-btn"
      >
        x
      </button>
    </li>
  );
};
