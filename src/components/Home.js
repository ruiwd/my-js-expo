import React from "react";
import Polaroid from "./homeComponents/Polaroid.js";

function Home() {
  return (
    <div className="home">
      <div className="scrollDiv">
        <Polaroid
          project="DrumKit"
          description="Drums too hard to learn? Here's a shortcut!"
        />
      </div>
    </div>
  );
}

export default Home;
