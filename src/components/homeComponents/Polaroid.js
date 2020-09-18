import React from "react";
import { Link } from "react-router-dom";
import Photo from "../../projectAssets/home/polaroid.png";
import Postit from "../../projectAssets/home/postIt.png";

function Polaroid(props) {
  return (
    <Link to="/DrumKit">
      <img
        className={`polaroid`}
        src={Photo}
        alt={`Polaroid: Snapshot of ${props.project} project`}
      />
      <img
        className={`postIt`}
        src={Postit}
        alt={`Post-it: Description of ${props.project} project`}
      />
    </Link>
  );
}

export default Polaroid;
