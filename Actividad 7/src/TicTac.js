import React, { useState } from "react";
import Square from "./Square";
import EndGame from "./EndGame";

const inicia = "";
const jugadorX = "X";
const jugadorO = "O";
const CombinacionGanadora = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function TicTacToe() {
  const [Tablero, setGrid] = useState(Array(9).fill(inicia));
  const [Jugador, setPlayer] = useState(false);
  const [Ganaron, setGameFinished] = useState(false);
  const [draw, setDraw] = useState(false);
  function juegoTerminado() {
    if (!Ganaron) {
      //* Checa si gana x
      for (let i = 0; i < 8; i++) {
        if (
          Tablero[CombinacionGanadora[i][0]] === jugadorX &&
          Tablero[CombinacionGanadora[i][1]] === jugadorX &&
          Tablero[CombinacionGanadora[i][2]] === jugadorX
        ) {
          setGameFinished(true);
          return;
        }
      }

      //* Checa si gana O
      for (let i = 0; i < 8; i++) {
        if (
          Tablero[CombinacionGanadora[i][0]] === jugadorO &&
          Tablero[CombinacionGanadora[i][1]] === jugadorO &&
          Tablero[CombinacionGanadora[i][2]] === jugadorO
        ) {
          setGameFinished(true);
          return;
        }
      }

      if (!Tablero.includes(inicia)) {
        setDraw(true);
        setGameFinished(true);
      }
    }
  }

  function reiniciaJuego() {
    setGrid(Array(9).fill(inicia));
    setGameFinished(false);
    setDraw(false);
  }


  juegoTerminado();

  function handleClick(id) {
    setGrid(
      Tablero.map((item, index) => {
        if (index === id) {
          if (Jugador) {
            return jugadorX;
          } else {
            return jugadorO;
          }
        } else {
          return item;
        }
      })
    );
    setPlayer(!Jugador);
  }

  return (
    <div>
      <h2 className="Turno">{Jugador ? "Turno del jugador X" : "Turno del jugador O"}</h2>
      {Ganaron && (
        <EndGame
          restartGame={reiniciaJuego}
          player={Jugador}
          draw={draw}
        />
      )}
      <Square clickedArray={Tablero} handleClick={handleClick} />
    </div>
  );
}

export default TicTacToe;