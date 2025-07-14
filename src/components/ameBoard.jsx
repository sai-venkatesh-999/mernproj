import React, { useEffect, useState, useRef } from 'react';

const boardSize = 10;
const initialSnake = [{ x: 2, y: 2 }];
const initialFood = { x: 5, y: 5 };
const directions = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 },
};

const GameBoard = () => {
  const [snake, setSnake] = useState(initialSnake);
  const [food, setFood] = useState(initialFood);
  const [direction, setDirection] = useState('ArrowRight');
  const [score, setScore] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const newDirection = e.key;
      if (
        directions[newDirection] &&
        !isOppositeDirection(newDirection, direction)
      ) {
        setDirection(newDirection);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    intervalRef.current = setInterval(moveSnake, 300);

    return () => {
      clearInterval(intervalRef.current);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [direction, snake]);

  const isOppositeDirection = (newDir, currDir) => {
    return (
      (newDir === 'ArrowUp' && currDir === 'ArrowDown') ||
      (newDir === 'ArrowDown' && currDir === 'ArrowUp') ||
      (newDir === 'ArrowLeft' && currDir === 'ArrowRight') ||
      (newDir === 'ArrowRight' && currDir === 'ArrowLeft')
    );
  };

  const moveSnake = () => {
    const newHead = {
      x: snake[0].x + directions[direction].x,
      y: snake[0].y + directions[direction].y,
    };

    if (
      newHead.x < 0 ||
      newHead.x >= boardSize ||
      newHead.y < 0 ||
      newHead.y >= boardSize ||
      snake.some((s) => s.x === newHead.x && s.y === newHead.y)
    ) {
      alert('Game Over! Your score: ' + score);
      setSnake(initialSnake);
      setFood(initialFood);
      setDirection('ArrowRight');
      setScore(0);
      return;
    }

    const newSnake = [newHead, ...snake];
    if (newHead.x === food.x && newHead.y === food.y) {
      setScore(score + 1);
      setFood({
        x: Math.floor(Math.random() * boardSize),
        y: Math.floor(Math.random() * boardSize),
      });
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  };

  return (
    <div>
      <h2>Score: {score}</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${boardSize}, 30px)`,
          justifyContent: 'center',
          margin: 'auto',
          width: `${boardSize * 30}px`,
        }}
      >
        {Array.from({ length: boardSize * boardSize }).map((_, i) => {
          const x = i % boardSize;
          const y = Math.floor(i / boardSize);
          const isSnake = snake.some((s) => s.x === x && s.y === y);
          const isFood = food.x === x && food.y === y;
          return (
            <div
              key={i}
              style={{
                width: 30,
                height: 30,
                border: '1px solid #ccc',
                backgroundColor: isSnake
                  ? 'green'
                  : isFood
                  ? 'red'
                  : 'white',
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GameBoard;




