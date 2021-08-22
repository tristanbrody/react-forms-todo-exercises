import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from "uuid";

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  const addBox = box => {
    const newBox = { ...box, id: uuid() };
    setBoxes([...boxes, newBox]);
  };

  const removeBox = id => {
    setBoxes(
      boxes.filter(box => {
        return id !== box.id;
      })
    );
  };

  return (
    <div>
      {boxes.map(box => {
        return (
          <Box
            backgroundColor={box.backgroundColor}
            width={box.width}
            height={box.height}
            id={box.id}
            removeBox={removeBox}
          ></Box>
        );
      })}
      <NewBoxForm addBox={addBox} />
    </div>
  );
}

export default BoxList;
