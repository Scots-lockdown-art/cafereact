import React, { Component } from "react";
import chris from "./images/chris.jpg";
import alex from "./images/alex.jpg";
import amanda from "./images/amanda.jpg";
import jose from "./images/jose.jpg";

const initialStaff = [
  {
    id: 1,
    name: "Paul",
    img: jose,
    role: "Owner",
    phone: "07548259132",
    email: "paul@example.com",
  },
  {
    id: 2,
    name: "Wendy",
    img: chris,
    role: "Manager",
    phone: "07548259133",
    email: "wendy@example.com",
  },
  {
    id: 3,
    name: "Jack",
    img: alex,
    role: "Assistant baristas",
    phone: "07548259134",
    email: "jack@example.com",
  },
  {
    id: 4,
    name: "Lucy",
    img: amanda,
    role: "Head waiter",
    phone: "07548259135",
    email: "lucy@example.com",
  },
];

class Staff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staff: initialStaff,
      showDetails: {},
    };
  }

  toggleDetails = (id) => {
    this.setState((prevState) => ({
      showDetails: {
        ...prevState.showDetails,
        [id]: !prevState.showDetails[id],
      },
    }));
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {this.state.staff.map((member) => (
            <div
              key={member.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                width: "300px",
                margin: "10px",
                padding: "10px",
              }}
            >
              <img
                src={member.img}
                alt={member.name}
                style={{ borderRadius: "50%", width: "150px", height: "150px" }}
              />
              <h4>{member.role}</h4>
              <h5>{member.name}</h5>
              {this.state.showDetails[member.id] && (
                <>
                  <p>Phone: {member.phone}</p>
                  <p>Email: {member.email}</p>
                </>
              )}
              <button onClick={() => this.toggleDetails(member.id)}>
                {this.state.showDetails[member.id]
                  ? "Hide Details"
                  : "Show Details"}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Staff;
