import React, { useEffect } from "react";

function PhotoEditor() {
  useEffect(() => {
    function handleSlide() {
      const weight = this.dataset.weight || "";
      document
        .querySelector(".photoEditor .photo")
        .style.setProperty(`--${this.name}`, this.value + weight);
      document.querySelector(`.${this.name} p`).innerHTML = `${
        this.value + weight
      }`;
    }

    document.querySelectorAll(".slider input").forEach((slider) => {
      slider.addEventListener("mousedown", () => {
        slider.addEventListener("change", handleSlide);
        slider.addEventListener("mousemove", handleSlide);
      });
      slider.addEventListener("mouseup", () => {
        slider.removeEventListener("mousemove", handleSlide);
      });
      slider.addEventListener('touchstart', () => {
        slider.addEventListener('change', handleSlide);
        slider.addEventListener('touchmove', handleSlide);
      });
      slider.addEventListener('touchend', () => {
        slider.removeEventListener('touchmove', handleSlide);
      });
    });
  }, []);

  const showPhoto = (e) => {
    const upload = e.target.files[0];

    const img = document.createElement("img");
    img.src = URL.createObjectURL(upload);

    document.querySelector(".photo").innerHTML = "";
    document.querySelector(".photo").appendChild(img);
  };

  return (
    <div className="photoEditor">
      <div className="uploadImage">
        <label htmlFor="image">Upload your photo!</label>
        <input type="file" name="image" accept="image/*" onChange={showPhoto} />
      </div>
      <div className="sliders">
        <div className="slider brightness">
          <label htmlFor="brightness">Brightness</label>
          <p className="value">100%</p>
          <input
            type="range"
            name="brightness"
            min="0"
            max="200"
            data-weight="%"
            defaultValue="100"
          />
        </div>
        <div className="slider contrast">
          <label htmlFor="contrast">Contrast</label>
          <p className="value">100%</p>
          <input
            type="range"
            name="contrast"
            min="0"
            max="200"
            data-weight="%"
            defaultValue="100"
          />
        </div>
        <div className="slider hue">
          <label htmlFor="hue">Hue Rotate</label>
          <p className="value">0deg</p>
          <input
            type="range"
            name="hue"
            min="0"
            max="360"
            data-weight="deg"
            defaultValue="0"
          />
        </div>
        <div className="slider saturation">
          <label htmlFor="saturation">Saturation</label>
          <p className="value">100%</p>
          <input
            type="range"
            name="saturation"
            min="0"
            max="200"
            data-weight="%"
            defaultValue="100"
          />
        </div>
        <div className="slider sepia">
          <label htmlFor="sepia">Sepia</label>
          <p className="value">0%</p>
          <input
            type="range"
            name="sepia"
            min="0"
            max="100"
            data-weight="%"
            defaultValue="0"
          />
        </div>
        <div className="slider blur">
          <label htmlFor="blur">Blur</label>
          <p className="value">0px</p>
          <input
            type="range"
            name="blur"
            min="0"
            max="50"
            data-weight="px"
            defaultValue="0"
          />
        </div>
      </div>
      <div className="photo"></div>
    </div>
  );
}

export default PhotoEditor;
