import React, { useEffect, useRef } from 'react';

const BouncingBall = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Ball settings
    const ball = {
      x: width / 2,
      y: height / 2,
      radius: 25,
      dx: 2,
      dy: 1,
      image: new Image(),
    };
    ball.image.src = './Ball.png'; // make sure this path is correct

    // Background
    const background = new Image();
    background.src = './net.png'; // adjust path

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw background
      if (background.complete) {
        ctx.drawImage(background, 0, 0, width, height);
      }

      // Draw football
      if (ball.image.complete) {
        ctx.drawImage(
          ball.image,
          ball.x - ball.radius,
          ball.y - ball.radius,
          ball.radius * 2,
          ball.radius * 2
        );
      }

      // Move ball
      ball.x += ball.dx;
      ball.y += ball.dy;

      // Bounce logic
      if (ball.x + ball.radius > width || ball.x - ball.radius < 0) {
        ball.dx *= -1;
      }
      if (ball.y + ball.radius > height || ball.y - ball.radius < 0) {
        ball.dy *= -1;
      }

      requestAnimationFrame(draw);
    };

    // Start animation when images are ready
    const start = () => {
      if (ball.image.complete && background.complete) {
        draw();
      } else {
        setTimeout(start, 50); // wait a bit if images aren’t loaded yet
      }
    };

    start();
  }, []);

  return (
    <div style={{ margin:'0px 900px' }}>
      <canvas
        ref={canvasRef}
        width={600}
        height={580}
        style={{ border: '2px solid black'}}
      ></canvas>
    </div>
  );
};

export default BouncingBall;
