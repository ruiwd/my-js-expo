import React, { useEffect } from "react";

function Gallery() {
  useEffect(() => {
    document.querySelectorAll(".panel").forEach((openPanel) => {
      openPanel.addEventListener("click", (e) => {
        e.target.classList.toggle("open");
      });
    });
  });

  return (
    <div className="gallery">
      <div className="panel one">
        <p>Hey</p>
        <p>Let's</p>
        <p>Dance</p>
      </div>
      <div className="panel two">
        <p>Give</p>
        <p>Take</p>
        <p>Receive</p>
      </div>
      <div className="panel three">
        <p>Experience</p>
        <p>It</p>
        <p>Today</p>
      </div>
      <div className="panel four">
        <p>Give</p>
        <p>All</p>
        <p>You can</p>
      </div>
      <div className="panel five">
        <p>Life</p>
        <p>In</p>
        <p>Motion</p>
      </div>
    </div>
  );
}

export default Gallery;
