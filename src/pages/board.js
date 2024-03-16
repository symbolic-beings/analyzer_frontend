import * as React from "react"
import { Chessboard } from "react-chessboard"
import Chess from "chess.js"
import { useState } from "react"

const Board = () => {
    const [game, setGame] = useState(new Chess())
  
    function makeAMove(move) {
      const gameCopy = { ...game };
      const result = gameCopy.move(move);
      setGame(gameCopy);
      return result;
    }
  
    function onDrop(sourceSquare, targetSquare) {
      const move = makeAMove({
        from: sourceSquare,
        to: targetSquare,
        promotion: "q"
      });
  
      if (move === null) return false;
  
      return true
    }

    return (
        <div>
          <Chessboard id="board" position={game.fen()} onPieceDrop={onDrop} />
        </div>
    )
  }

  export default Board;