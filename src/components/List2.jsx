import React from "react";

//create component Heading
function List2(props) {
  return (
    <div className="card2">
      <div className="bottom2">
        <p className="role">{props.role}</p>
        <img className="circle-img2" src={props.img2} alt="avatar_img2" />
      </div>
      <div className="top2">
        <h2 className="name2">{props.name2}</h2>
      </div>
    </div>
  );
}

export default List2;
