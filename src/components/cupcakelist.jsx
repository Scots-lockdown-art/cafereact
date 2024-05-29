import React from "react";
import { Typography } from "@mui/material";
import List from "./List";
import cupcakes from "../cupcakes";

function createList(cupcake) {
  return (
    <List
      key={cupcake.id}
      name={cupcake.name}
      img={cupcake.img}
      price={cupcake.price}
      info={cupcake.info}
    />
  );
}

function Cupcake() {
  return (
    <div>
      <Typography variant="h1" className="heading">
        Cupcakes
      </Typography>
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {cupcakes.map(createList)}
      </div>
    </div>
  );
}

export default Cupcake;
