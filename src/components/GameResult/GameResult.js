import React from 'react'
import { checkGuess } from '../../game-helpers'

function GameResult({ guesses = [], answer }) {
  return (
    <div className="guess-results">
      {guesses.length > 0 &&
        guesses.map(({ key, guess }) => {
          const checkResult = checkGuess(guess, answer)
          console.log({ key, guess, answer })
          return (
            <p className="guess" key={key}>
              {checkResult.map(({ letter, status }, i) => (
                <span
                  className={`cell ${status}`}
                  key={`${key}-${i}`}
                >
                  {letter}
                </span>
              ))}
            </p>
          )
        })}
    </div>
  )
}

export default GameResult
