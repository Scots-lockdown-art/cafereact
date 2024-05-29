import React from "react";
import { Typography } from "@mui/material";
import List from "./List";
import vegan from "../vegan";

function createList(vegan) {
  return (
    <List
      key={vegan.id}
      name={vegan.name}
      img={vegan.img}
      price={vegan.price}
      info={vegan.info}
    />
  );
}

function Vegan() {
  return (
    <div>
      <Typography variant="h1" className="heading">
        Vegan
      </Typography>
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {vegan.map(createList)}
      </div>
    </div>
  );
}

export default Vegan;
