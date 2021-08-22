import React from "react";

function Box({ backgroundColor, width, height, id, removeBox }) {
  const remove = () => removeBox(id);
  return (
    <div>
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor,
          margin: "auto",
        }}
      ></div>
      <button onClick={remove} style={{}}>
        X
      </button>
    </div>
  );
}

export default Box;
