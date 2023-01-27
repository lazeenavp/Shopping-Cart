import React, { useState } from "react";
import list from "./data";
import "../Styles/Amazon.css"
import Card from "../Components/Card";


const Amazon = ({ handleClick }) => {
  return (
    <section>
      {list.map((item) => (
        <Card key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Amazon;