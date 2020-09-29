import React from "react";

function PhotoEditor() {
  const showPhoto = (e) => {
    console.log(e);
  };

  return (
    <div className="photoEditor">
      <input type="file" accept="image/*" onChange={showPhoto} />
      <img src="output" alt="" />
      <div className="photo"></div>
    </div>
  );
}

export default PhotoEditor;
