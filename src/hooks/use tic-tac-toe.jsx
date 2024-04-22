import { useState } from "react";

const initialBoard = () => Array(9).fill(null);

const useTicTacToe = () => {
  const [board, setBoard] = useState(initialBoard());
  const [isXNext, setIsNext] = useState(true);

  const Win_Pattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const calcualateWinner = (currentBoard) => {
    for (let i = 0; i < Win_Pattern.length; i++) {
      const [a, b, c] = Win_Pattern[i];
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }
    return null;
  };
  const handleClick = (index) => {
    const winner = calcualateWinner(board);
    console.log(winner);
    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsNext(!isXNext);
  };

  const getStatus = () => {
    const winner = calcualateWinner(board);
    if (winner) return `${winner} Wins !`;
    if (!board.includes(null)) return `It's a Draw!`;
    return ` Player ${isXNext ? "X" : "O"} turn`;
  };
  const resetGame = () => {
    setBoard(initialBoard());
    setIsNext(true);
  };

  return { board, calcualateWinner, handleClick, getStatus, resetGame };
};

export default useTicTacToe;
