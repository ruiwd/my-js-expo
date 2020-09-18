import React from "react";
import { Link } from "react-router-dom";
import DrumKit from "../../projectAssets/home/polaroidDrumKit.png";

function Polaroid(props) {
  return (
    <div className="polaroidSet">
      <Link to="/DrumKit">
        <img
          className={`polaroid`}
          src={DrumKit}
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
