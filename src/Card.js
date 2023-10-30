import React from "react";
import './robots'

const Card = ({ name, email, id }) => {
  // const { name, email, id} = props;
  return(
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img className="RoboCard" src={`https://robohash.org/${id}?size=200x200`} alt="Rpbots" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;