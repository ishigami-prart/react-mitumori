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
    <div className="App">
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
    </div>
  );
}
