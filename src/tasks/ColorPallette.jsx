import React, { useState } from "react";

const ColorPalette = () => {
  const [colors, setColors] = useState(["#FF5733", "#33FF57", "#3357FF"]);

  const generateColors = () => {
    const newColors = Array(5)
      .fill("")
      .map(() => `#${Math.floor(Math.random() * 16777215).toString(16)}`);
    setColors(newColors);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Dynamic Color Palette 🎨</h1>
      <div className="flex gap-4 mb-4">
        {colors.map((color, index) => (
          <div
            key={index}
            className="w-20 h-20 rounded"
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
      <button
        onClick={generateColors}
        className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
      >
        Generate New Colors
      </button>
    </div>
  );
};

export default ColorPalette;
