import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const YeniHarcama = () => {
  const [baslik, setBaslik] = useState("");
  const [miktar, setMiktar] = useState();

  const { yeniHarcama } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const yeniHareket = {
      id: Math.floor(Math.random() * 1000000),
      baslik,
      miktar: +miktar,
    };

    yeniHarcama(yeniHareket);
  };

  return (
    <>
      <h3>Yeni Hareket</h3>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="baslik">Baslik</label>
          <input
            type="baslik"
            id="baslik"
            value={baslik}
            onChange={(e) => setBaslik(e.target.value)}
            placeholder="Başlık giriniz..."
          />
        </div>
        <div>
          <label htmlFor="miktar">
            Miktar <br />
            (eksi - harcama, artı - gelir)
          </label>
          <input
            type="number"
            id="miktar"
            value={miktar}
            onChange={(e) => setMiktar(e.target.value)}
            placeholder="Miktar giriniz.."
          />
        </div>
        <button className="btn">Yeni Ekle</button>
      </form>
    </>
  );
};
