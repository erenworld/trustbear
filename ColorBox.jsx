import { useState } from 'react';

function randomChoice(arr) {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
  //   const randomColor = colors[idx];
}

function ColorBox({ colors }) {
  const [color, setColor] = useState('purple');
  const changeColor = () => {
    const randomColor = randomChoice(colors);
    setColor(randomColor);
  };
  return (
    <div
      className="Color"
      onClick={changeColor}
      style={{ backgroundColor: color }}
    ></div>
  );
}

export default ColorBox;
