import ReactDom from "react-dom";
import React, { useState } from "react";
import Muffin from "./muflist";
import Cupcake from "./cupcakelist";
import Vegan from "./veganlist";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("cupcakes");

  return (
    <div className="product_container">
      <br />
      <h3>Select from our delicious desserts shown below</h3>
      <ul>
        <li>
          <button onClick={() => setSelectedCategory("cupcakes")}>
            Cupcakes
          </button>
        </li>
        <li>
          <button onClick={() => setSelectedCategory("muffins")}>
            Muffins
          </button>
        </li>
        <li>
          <button onClick={() => setSelectedCategory("vegan")}>Vegan</button>
        </li>
      </ul>
      {selectedCategory === "cupcakes" && <Cupcake />}
      {selectedCategory === "muffins" && <Muffin />}
      {selectedCategory === "vegan" && <Vegan />}
    </div>
  );
}
