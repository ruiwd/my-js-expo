import React, { useEffect } from "react";
import Boom from "../projectAssets/drumKit/boom.wav";
import Clap from "../projectAssets/drumKit/clap.wav";
import Hihat from "../projectAssets/drumKit/hihat.wav";
import Kick from "../projectAssets/drumKit/kick.wav";
import Openhat from "../projectAssets/drumKit/openhat.wav";
import Ride from "../projectAssets/drumKit/ride.wav";
import Snare from "../projectAssets/drumKit/snare.wav";
import Tink from "../projectAssets/drumKit/tink.wav";
import Tom from "../projectAssets/drumKit/tom.wav";

function DrumKit() {
  useEffect(() => {
    const randomizeLabel = () => {
      document.querySelectorAll(".label").forEach((e) => {
        let randomNumber = Math.floor(Math.random() * 10);
        e.style.transform = `rotateZ(${randomNumber * 2 - 7}deg) 
        translateY(${randomNumber / 7}rem)`;
      });
    };

    randomizeLabel();

    const playAudio = (data) => {
      let audio = document.querySelector(`audio[data-key='${data}']`);

      if (audio !== null) {
        audio.currentTime = 0;
        audio.play();
      }

      let keyPressed = document.querySelector(`.key[data-key='${data}']`);

      if (keyPressed !== null) {
        keyPressed.classList.add("pressed");
        keyPressed.addEventListener("transitionend", () => {
          keyPressed.classList.remove("pressed");
        });
      }
    };

    document.addEventListener("click", (e) => {
      let data = e.target.getAttribute("data-key");

      playAudio(data);
    });

    document.addEventListener("keydown", (e) => {
      let data = e.keyCode;

      playAudio(data);
    });
  }, []);

  return (
    <div className="drumKit">
      <h2>Just a Simple Drum Kit</h2>
      <div className="sounds">
        <audio data-key="65" src={Boom}></audio>
        <audio data-key="83" src={Clap}></audio>
        <audio data-key="68" src={Hihat}></audio>
        <audio data-key="70" src={Kick}></audio>
        <audio data-key="71" src={Openhat}></audio>
        <audio data-key="72" src={Ride}></audio>
        <audio data-key="74" src={Snare}></audio>
        <audio data-key="75" src={Tink}></audio>
        <audio data-key="76" src={Tom}></audio>
      </div>
      <div className="keys">
        <div className="keyContainer">
          <div className="key" data-key="65">
            <p>A</p>
          </div>
          <div className="label">boom</div>
        </div>
        <div className="keyContainer">
          <div className="key" data-key="83">
            <p>S</p>
          </div>
          <div className="label">clap</div>
        </div>
        <div className="keyContainer">
          <div className="key" data-key="68">
            <p>D</p>
          </div>
          <div className="label">hi hat</div>
        </div>
        <div className="keyContainer">
          <div className="key" data-key="70">
            <p>F</p>
          </div>
          <div className="label">kick</div>
        </div>
        <div className="keyContainer">
          <div className="key" data-key="71">
            <p>G</p>
          </div>
          <div className="label">open hat</div>
        </div>
        <div className="keyContainer">
          <div className="key" data-key="72">
            <p>H</p>
          </div>
          <div className="label">ride</div>
        </div>
        <div className="keyContainer">
          <div className="key" data-key="74">
            <p>J</p>
          </div>
          <div className="label">snare</div>
        </div>
        <div className="keyContainer">
          <div className="key" data-key="75">
            <p>K</p>
          </div>
          <div className="label">tink</div>
        </div>
        <div className="keyContainer">
          <div className="key" data-key="76">
            <p>L</p>
          </div>
          <div className="label">tom</div>
        </div>
      </div>
    </div>
  );
}

export default DrumKit;
