import React, { useEffect } from "react";
import Polaroid from "./Polaroid.js";
import DrumKit from "../../projectAssets/home/polaroidDrumKit.png";
import Clock from "../../projectAssets/home/polaroidClock.png";
import Gallery from "../../projectAssets/home/polaroidGallery.png";
import PhotoEditor from "../../projectAssets/home/polaroidPhotoEditor.png";
import Card from '../../projectAssets/home/polaroidCard.png';

function Home() {
  useEffect(() => {
    const randomizeLabel = () => {
      document.querySelectorAll(".polaroid, .postIt").forEach((e) => {
        let randomNumber = Math.floor(Math.random() * 10);
        e.style.transform = `rotateZ(${randomNumber - 5}deg) 
        translateY(${randomNumber / 7}rem)`;
      });
    };

    randomizeLabel();
  }, []);

  return (
    <div className="home">
      <div className="scrollDiv">
        <Polaroid
          project="DrumKit"
          imageSrc={DrumKit}
          description="Drums too hard to learn? Here's a shortcut!"
        />
        <Polaroid
          project="Clock"
          imageSrc={Clock}
          description="Just in case you needed another clock."
        />
        <Polaroid
          project="Gallery"
          imageSrc={Gallery}
          description="An interactive gallery of a few photos I took on my travels."
        />
        <Polaroid
          project="PhotoEditor"
          imageSrc={PhotoEditor}
          description="A simple photo editor. Sorry you can't save the product :("
        />

        <Polaroid
          project="threeDCard"
          imageSrc={Card}
          description="Trying my hand at 3D product cards. Marc Fisher should sponsor me."
        />
      </div>
    </div>
  );
}

export default Home;
