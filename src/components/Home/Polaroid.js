import React from "react";
import { Link } from "react-router-dom";

function Polaroid(props) {
  return (
    <div className="polaroidSet">
      <Link to={`/${props.project}`}>
        <img
          className={`polaroid`}
          src={props.imageSrc}
          alt={`Polaroid: Snapshot of ${props.project} project`}
        />
      </Link>
      <div className={`postIt`}>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Polaroid;
