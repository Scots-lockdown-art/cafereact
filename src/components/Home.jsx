import React from "react";

import cafe from "./images/hero.jpg";
import Gmap from "../components/Gmap.jsx";

function Home() {
  return (
    <div style={{ textAlign: "center", fontFamily: "Quesha" }}>
      {" "}
      <img className="cafe_main_image" src={cafe} />{" "}
      <div className="home_flex">
        {" "}
        <div class="about_flex">
          <h1 style={{ textAlign: "center", color: "black" }}>
            <span>About Our Cafe</span>
          </h1>
          <p
            style={{
              textAlign: "center",
              color: "#0f0b07",
              margin: "20px 80px",
            }}
          >
            Cafe Reagire is a charming coffee shop that offers a warm and
            inviting atmosphere for coffee enthusiasts and casual visitors
            alike. Located in a bustling neighborhood,Cafe Reagire aims to
            provide an exceptional coffee experience combined with excellent
            customer service.
          </p>
          <p
            style={{
              textAlign: "center",
              color: "#0f0b07",
              margin: "20px 80px",
            }}
          >
            The name Cafe Reagire" is derived from the Italian word "reagire,"
            which means "to react." This reflects the coffee shop's commitment
            to sparking positive reactions and creating memorable moments for
            its patrons through the art of coffee.
          </p>
          <p
            style={{
              textAlign: "center",
              color: "#0f0b07",
              margin: "20px 80px",
            }}
          >
            As you step into the coffee shop, you'll be greeted by the rich
            aroma of freshly brewed coffee and the cozy ambiance of comfortable
            seating areas. The interior design combines modern elements with
            rustic accents, creating a space that is both trendy and welcoming.
          </p>
          <p
            style={{
              textAlign: "center",
              color: "#0f0b07",
              margin: "20px 80px",
            }}
          >
            Cafe Reagire takes pride in sourcing high-quality coffee beans from
            around the world. The dedicated team of baristas is trained to craft
            exceptional coffee beverages, ranging from classic espresso drinks
            to signature blends and specialty creations. Whether you prefer a
            smooth latte, a bold drip coffee, or a refreshing iced beverage,Cafe
            Reagire has something to satisfy every coffee lover's palate.
          </p>
          <p
            style={{
              textAlign: "center",
              color: "#0f0b07",
              margin: "20px 80px",
            }}
          >
            In addition to coffee,Cafe Reagire offers a selection of delicious
            pastries, baked goods, and light snacks to complement your beverage.
            The menu features a variety of sweet and savory options, including
            freshly baked croissants, muffins, sandwiches, and salads, all made
            with locally sourced ingredients whenever possible.
          </p>
          <p
            style={{
              textAlign: "center",
              color: "#0f0b07",
              margin: "20px 80px",
            }}
          >
            Whether you're looking for a cozy spot to work, catch up with
            friends, or simply enjoy a moment of relaxation with a great cup of
            coffee,Cafe Reagire is the perfect destination. With its dedication
            to quality, warm atmosphere, and commitment to customer
            satisfaction,Cafe Reagire has become a beloved coffee shop in the
            community.
          </p>
        </div>
        <div className="contact_flex">
          <h1>Where to find us</h1>
          <p> Cafe Reagire</p>
          <p>24 West Telferton</p>
          <p>Edinburgh</p>
          <p> EH7 6UL</p> <Gmap />
          <br /> <br />
          <h2>Get in Touch </h2>
          <p>Email: Cafereagire@gmail.com</p>
          <p>Phone: 07564831196</p>
          <br />
        </div>
      </div>
    </div>
  );
}

export default Home;
