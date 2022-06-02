import React from "react";

export const InputPrice = (props) => {
  const { priceText, onChange, onClick } = props;
  return (
    <div>
      <input placeholder="金額を入力" value={priceText} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
