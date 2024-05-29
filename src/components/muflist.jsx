import React from "react";
import { Typography } from "@mui/material";
import List from "./List";
import muffins from "../muffins";

function createList(muffin) {
  return (
    <List
      key={muffin.id}
      name={muffin.name}
      img={muffin.img}
      price={muffin.price}
      info={muffin.info}
    />
  );
}

function Muffin() {
  return (
    <div>
      <Typography variant="h1" className="heading">
        Muffins
      </Typography>
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {muffins.map(createList)}
      </div>
    </div>
  );
}

export default Muffin;
