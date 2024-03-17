import * as React from "react"
import { Chessboard } from "react-chessboard"

const Board = ({game, setGame}) => {
  
    function makeAMove(move) {
      const gameCopy = { ...game };
      const result = gameCopy.move(move);
      if( result === null ){
        return false
      }
      setGame(gameCopy);
      return true;
    }
  
    function onDrop(sourceSquare, targetSquare) {
      return makeAMove({
        from: sourceSquare,
        to: targetSquare,
        promotion: "q"
      });
    }

    return (
        <div>
          <Chessboard id="board" position={game.fen()} onPieceDrop={onDrop} />
        </div>
    )
  }

  export default Board;