import useTicTacToe from "../hooks/use tic-tac-toe";

function TicTacToe() {
//   console.log("check");
//   console.log(board);
  const { board, handleClick, getStatus, resetGame } =
    useTicTacToe();

  return (
      <div className="game">
        <div className="status">
          {getStatus()}
          <button className="reset-button" onClick={resetGame}>
            Reset Game
          </button>
        </div>
        <div className="board">
          {board.map((b, index) => {
            return (
              <button
                className="cell"
                key={index}
                onClick={() => handleClick(index)}
                disabled={b!==null}
              >
                {b}
              </button>
            );
          })}
        </div>
      </div>
  );
}

export default TicTacToe;
