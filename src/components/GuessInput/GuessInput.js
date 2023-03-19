import React, { useState } from 'react'

function GuessInput({ onSubmit }) {
  const [guess, setGuess] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    e.target.value = ''
    onSubmit(guess)
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        value={guess}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
      />
    </form>
  )
}

export default GuessInput
