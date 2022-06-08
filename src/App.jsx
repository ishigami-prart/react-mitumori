import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [koumokuText, setKoumokuText] = useState("");
  const [tankaText, setTankaText] = useState("");
  const [suuryouText, setSuuryouText] = useState("");
  const [taniText, setTaniText] = useState("");
  const [price, setPrice] = useState([
    {
      koumoku: "企画費",
      tanka: "1000",
      suuryou: "3",
      tani: "ページ"
    },
    {
      koumoku: "デザイン費",
      tanka: "1000",
      suuryou: "3",
      tani: "ページ"
    }
  ]);

  const onChangeKoumokuText = (event) => setKoumokuText(event.target.value);
  const onChangeTankaText = (event) => setTankaText(event.target.value);
  const onChangeSuuryouText = (event) => setSuuryouText(event.target.value);
  const onChangeTaniText = (event) => setTaniText(event.target.value);

  const onClickAdd = () => {
    const newPriceObject = {
      koumoku: koumokuText,
      tanka: tankaText,
      suuryou: suuryouText,
      tani: taniText
    };

    const newPrice = [...price, newPriceObject];
    setPrice(newPrice);

    //inputのリセット
    setKoumokuText("");
    setTankaText("");
    setSuuryouText("");
    setTaniText("");
  };

  return (
    <>
      <div className="input_erea">
        <input
          placeholder="項目"
          value={koumokuText}
          onChange={onChangeKoumokuText}
        />
        <input
          placeholder="単価"
          value={tankaText}
          onChange={onChangeTankaText}
        />
        <input
          placeholder="数量"
          value={suuryouText}
          onChange={onChangeSuuryouText}
        />
        <input
          placeholder="単位"
          value={taniText}
          onChange={onChangeTaniText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>

      {price.map((s, index) => {
        return (
          <div key={index}>
            <p>{s.koumoku}</p>
            <p>{s.tanka}</p>
            <p>{s.suuryou}</p>
            <p>{s.tani}</p>
          </div>
        );
      })}
    </>
  );
}
