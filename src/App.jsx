import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [price, setPrice] = useState({
    tanka: "1000",
    suuryou: "3",
    tani: "ページ"
  });

  return (
    <div className="App">
      <div>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
  );
}
