import React from "react";

function EndGame({ clearHistory, winCount, restartGame, player, draw }) {
  return (
    <div className="end-game-screen">
      {!draw && <span className="win-text">{player ? "Jugador ganador O" : "Jugador ganador X"}</span>}
      {draw && <span className="win-text">DRAW GAME</span>}


      <button className="btn" onClick={restartGame}>
        Reiniciar Juego
      </button>
    </div>
  );
}

export default EndGame;