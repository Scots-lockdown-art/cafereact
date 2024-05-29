import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  flexy: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    fontFamily: "'Quesha', sans-serif",
  },
  card: {
    borderRadius: 25,
    padding: "25px 15px",
    margin: "25px",
    textAlign: "center",
    minWidth: 350,
    maxWidth: 350,
    fontSize: "1.6em",
    position: "relative",
    height: 400,
  },
  top: {
    borderRadius: 25,
    height: 55,
    backgroundColor: "hwb(27 36% 18%)",
    width: "80%",
    textAlign: "center",
    position: "absolute",
    bottom: 60,
    left: "50%",
    transform: "translateX(-50%)",
  },
  name: {
    textAlign: "center",
    fontSize: "1.1em !important",
    color: "#f6f6f6",
    paddingTop: "9px !important",
  },
  circleImg: {
    borderRadius: "50% !important",
    border: "6px solid #e9c3a3",
    width: "160px !important",
    height: "160px !important",
    margin: "10px auto 0",
  },
  bottom: {
    textAlign: "center",
  },
  price: {
    marginBottom: "20px !important",
    marginTop: "20px !important",
    fontWeight: "bold !important",
  },
  info: {
    color: "black",
  },
}));

function List(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.circleImg}
        component="img"
        alt="avatar_img"
        image={props.img}
      />
      <CardContent className={classes.bottom}>
        <Typography variant="body1" className={classes.price}>
          £{props.price}
        </Typography>
        <Typography variant="body2" className={classes.info}>
          "{props.info}"
        </Typography>
      </CardContent>
      <div className={classes.top}>
        <Typography variant="h2" className={classes.name}>
          {props.name}
        </Typography>
      </div>
    </Card>
  );
}

export default List;
