import React, { useState } from "react";
import "./styles.css";

export default function App() {
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

  return (
    <>
      <div className="input_erea">
        <input placeholder="項目" />
        <input placeholder="単価" />
        <input placeholder="数量" />
        <input placeholder="単位" />
        <button>追加</button>
      </div>

      {price.map((s) => {
        return (
          <div key={s}>
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
