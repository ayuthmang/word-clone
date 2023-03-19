import React, { useState } from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import Banner from '../Banner'
import GuessInput from '../GuessInput'
import GameResult from '../GameResult'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

const GAME_STATUS = {
  GUESSING: 'GUESSING',
  CORRECT: 'CORRECT',
  INCORRECT: 'INCORRECT',
}

function Game() {
  const [guesses, setGuesses] = useState([])
  const [guessTimes, setGuessTimes] = useState(0)
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.GUESSING)

  const handleGuessSubmit = (guess) => {
    const nextGuessTimes = guessTimes + 1
    const nextGuess = [...guesses, { key: crypto.randomUUID(), guess }]

    if (nextGuessTimes >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus(GAME_STATUS.INCORRECT)
    } else if (guess === answer) {
      setGameStatus(GAME_STATUS.CORRECT)
    } else {
      setGuesses(nextGuess)
      setGuessTimes(nextGuessTimes)
    }
  }

  return (
    <>
      <GameResult guesses={guesses} answer={answer} />

      {gameStatus === GAME_STATUS.GUESSING ? (
        <GuessInput onSubmit={handleGuessSubmit} />
      ) : gameStatus === GAME_STATUS.INCORRECT ? (
        <Banner variant={'sad'}>
          <p>
            Sorry, the correct answer is <strong>LEARN</strong>.
          </p>
        </Banner>
      ) : (
        <Banner variant={'happy'}>
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>{guessTimes} guesses</strong>.
          </p>
        </Banner>
      )}
    </>
  )
}

export default Game
