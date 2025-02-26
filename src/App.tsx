import React, { useState, useRef, useEffect } from 'react';

const App = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentX, setCurrentX] = useState<number>(50);
  const [currentY, setCurrentY] = useState<number>(50);
  const [lineLength, setLineLength] = useState<string>('');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
  }, []);

  const drawLine = (direction: string, length: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.beginPath();
    ctx.moveTo(currentX, currentY);

    let newX = currentX;
    let newY = currentY;

    switch (direction) {
      case 'up':
        newY -= length;
        break;
      case 'down':
        newY += length;
        break;
      case 'left':
        newX -= length;
        break;
      case 'right':
        newX += length;
        break;
      default:
        break;
    }

    ctx.lineTo(newX, newY);
    ctx.stroke();
    ctx.closePath();

    setCurrentX(newX);
    setCurrentY(newY);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowUp') {
      drawLine('up', parseInt(lineLength) || 10);
      setLineLength('');
    } else if (event.key === 'ArrowDown') {
      drawLine('down', parseInt(lineLength) || 10);
      setLineLength('');
    } else if (event.key === 'ArrowLeft') {
      drawLine('left', parseInt(lineLength) || 10);
      setLineLength('');
    } else if (event.key === 'ArrowRight') {
      drawLine('right', parseInt(lineLength) || 10);
      setLineLength('');
    } else if (/[0-9]/.test(event.key)) {
      setLineLength(lineLength + event.key);
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setCurrentX(50);
    setCurrentY(50);
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-gray-100"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      style={{ outline: 'none' }}
    >
      <h1 className="text-2xl font-bold mb-4">Floorplan Drawing Tool</h1>
      <canvas ref={canvasRef} width={600} height={400} className="bg-white shadow-md border border-gray-300" />
      <div className="mt-4">
        <input
          type="text"
          className="shadow appearance-none border rounded w-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
          placeholder="Length"
          value={lineLength}
          onChange={(e) => {
            if (/^[0-9]*$/.test(e.target.value)) {
              setLineLength(e.target.value);
            }
          }}
        />
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={clearCanvas}
        >
          Clear
        </button>
      </div>
      <p className="mt-2 text-sm text-gray-500">Use arrow keys + number to draw. Clear to reset.</p>
    </div>
  );
};

export default App;