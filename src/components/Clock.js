import React, { useState, useEffect } from "react";

function Clock() {
  const [time, updateTime] = useState({
    hours: `0`,
    minutes: `0`,
    seconds: `0`,
  });

  useEffect(() => {
    const newTime = () => {
      let now = new Date();
      let seconds = now.getSeconds();
      let minutes = now.getMinutes();
      let hours = now.getHours();

      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (hours < 10) {
        hours = "0" + hours;
      }

      updateTime({ hours, minutes, seconds });
    };
    setInterval(newTime, 1000);
  }, []);

  useEffect(() => {
    const moveHands = () => {
      document.querySelector(
        ".hand.second"
      ).style.transform = `translateX(-50%) rotateZ(${
        (time.seconds / 60) * 360
      }deg)`;

      document.querySelector(
        ".hand.minute"
      ).style.transform = `translateX(-50%) rotateZ(${
        (time.minutes / 60) * 360
      }deg)`;

      document.querySelector(
        ".hand.hour"
      ).style.transform = `translateX(-50%) rotateZ(${
        (time.hours / 12) * 360
      }deg)`;
    };
    moveHands();
  });

  return (
    <div className="clock">
      <div className="clockFace">
        <div className="knob"></div>
        <div className="screen">{`${time.hours}:${time.minutes}:${time.seconds}`}</div>
        <div className="hands">
          <div className="hand hour"></div>
          <div className="hand minute"></div>
          <div className="hand second"></div>
        </div>
        <div className="numbers">
          <h3 className="number twelve">12</h3>
          <h3 className="number three">3</h3>
          <h3 className="number six">6</h3>
          <h3 className="number nine">9</h3>
        </div>
      </div>
    </div>
  );
}

export default Clock;
