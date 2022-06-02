import React from "react";

export const PriceList = (props) => {
  const { pricelists } = props;
  return (
    <div claccName="incoplate-area">
      <h3>金額</h3>
      <ul>
        {pricelists.map((priceList, index) => {
          return (
            <div key={priceList}>
              <li>{priceList}</li>;
            </div>
          );
        })}
      </ul>
    </div>
  );
};
