import React, { useState } from "react";
import "./styles.css";
import { InputPrice } from "./components/inputPrice";
import { PriceList } from "./components/priceList";

export default function App() {
  const [priceText, setPriceText] = useState("");
  const onChangePriceText = (event) => setPriceText(event.target.value);
  const onClickAdd = () => {
    console.log(onChangePriceText);
  };
  const priceLists

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <InputPrice
        priceText={priceText}
        onChange={onChangePriceText}
        onClick={onClickAdd}
      />
      <PriceList priceLists={priceLists} />
    </div>
  );
}
