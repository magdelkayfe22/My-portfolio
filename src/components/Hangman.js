import React, { useState } from 'react';
import './Hangman.css';

const WORD_THEMES = {
  Cybersecurity: [
    'firewall', 'malware', 'phishing', 'encryption', 'hacker', 'breach', 'password', 'exploit', 'ransomware', 'botnet'
  ],
  Animals: [
    'elephant', 'kangaroo', 'dolphin', 'penguin', 'giraffe', 'leopard', 'octopus', 'squirrel', 'rabbit', 'flamingo'
  ],
  Food: [
    'pizza', 'hamburger', 'avocado', 'pancake', 'chocolate', 'spaghetti', 'omelette', 'cupcake', 'broccoli', 'burrito'
  ]
};
const THEME_OPTIONS = Object.keys(WORD_THEMES);


const HANGMAN_PICS = [

  `
    --------
    |      |
    |      O
    |     /|\\
    |      |
    |     / \\
    -
  `,

  `
    --------
    |      |
    |      O
    |     /|\\
    |      |
    |     / 
    -
  `,

  `
    --------
    |      |
    |      O
    |     /|\\
    |      |
    |      
    -
  `,

  `
    --------
    |      |
    |      O
    |     /| 
    |      |
    |      
    -
  `,

  `
    --------
    |      |
    |      O
    |      | 
    |      |
    |      
    -
  `,

  `
    --------
    |      |
    |      O
    |        
    |      
    |      
    -
  `,

  `
    --------
    |      |
    |      
    |      
    |      
    |      
    -
  `
];

function getRandomWord(theme) {
  const words = WORD_THEMES[theme];
  return words[Math.floor(Math.random() * words.length)].toUpperCase();
}

function Hangman() {
  const [theme, setTheme] = useState('');
  const [word, setWord] = useState('');
  const [wordCompletion, setWordCompletion] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [guessedWords, setGuessedWords] = useState([]);
  const [tries, setTries] = useState(6);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);
  const [input, setInput] = useState('');

  React.useEffect(() => {
    if (theme) {
      const newWord = getRandomWord(theme);
      setWord(newWord);
      setWordCompletion('_'.repeat(newWord.length));
      setGuessedLetters([]);
      setGuessedWords([]);
      setTries(6);
      setGameOver(false);
      setWin(false);
      setInput('');
    }

  }, [theme]);

  function handleInputChange(e) {
    setInput(e.target.value.toUpperCase());
  }

  function handleGuess(e) {
    e.preventDefault();
    if (gameOver || !input) return;
    const guess = input;
    setInput('');
    if (guess.length === 1 && /[A-Z]/.test(guess)) {
      if (guessedLetters.includes(guess)) return;
      if (!word.includes(guess)) {
        setTries(t => t - 1);
      }
      setGuessedLetters(gl => [...gl, guess]);
      let newWordCompletion = wordCompletion.split('');
      for (let i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          newWordCompletion[i] = guess;
        }
      }
      setWordCompletion(newWordCompletion.join(''));

      if (newWordCompletion.join('') === word) {
        setWin(true);
        setGameOver(true);
      }
    } else if (guess.length === word.length && /^[A-Z]+$/.test(guess)) {
      if (guessedWords.includes(guess)) return;
      if (guess === word) {
        setWordCompletion(word);
        setWin(true);
        setGameOver(true);
      } else {
        setTries(t => t - 1);
        setGuessedWords(gw => [...gw, guess]);
      }
    }
  }

  React.useEffect(() => {
    if (tries <= 0) {
      setGameOver(true);
      setWin(false);
      setWordCompletion(word);
    }
  }, [tries, word]);

  function handleRestart() {
    if (theme) {
      const newWord = getRandomWord(theme);
      setWord(newWord);
      setWordCompletion('_'.repeat(newWord.length));
      setGuessedLetters([]);
      setGuessedWords([]);
      setTries(6);
      setGameOver(false);
      setWin(false);
      setInput('');
    }
  }

  function handleThemeChange(e) {
    setTheme(e.target.value);
  }

  // We'll show the ASCII hangman art in a <pre> block for that classic look.
  const hangmanStage = HANGMAN_PICS[Math.max(0, Math.min(HANGMAN_PICS.length - 1, tries))];

  if (!theme) {
    return (
      <div className="hangman-theme-select">
        <h2>Hangman</h2>
        <div className="theme-select-wrapper">
          <span className="theme-icon" aria-hidden="true">🛡️</span>
          <label htmlFor="theme-select" style={{fontWeight:'bold', marginRight: '0.7em'}}>Choose a theme:</label>
          <select id="theme-select" className="cyber-theme-select" value={theme} onChange={handleThemeChange}>
            <option value="">-- Select Theme --</option>
            {THEME_OPTIONS.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>
    );
  }

  return (
    <div className="hangman-game">
      <h2>Hangman</h2>
      <div className="hangman-theme-label">Theme: <b>{theme}</b></div>
      <pre className="hangman-drawing">{hangmanStage}</pre>
      <div className="hangman-word">
        {wordCompletion.split('').map((char, i) => (
          <span key={i} className="hangman-letter">{char}</span>
        ))}
      </div>
      <form className="hangman-input" onSubmit={handleGuess}>
        <input
          type="text"
          maxLength={word.length}
          value={input}
          onChange={handleInputChange}
          disabled={gameOver}
          placeholder="Guess a letter or word"
        />
        <button type="submit" disabled={gameOver || !input}>Guess</button>
      </form>
      <div className="hangman-info">
        <div>Tries left: {tries}</div>
        <div>Guessed letters: {guessedLetters.join(', ')}</div>
      </div>
      {gameOver && (
        <div className="hangman-result">
          {win ? (
            <span className="hangman-win">Congratulations! You won!</span>
          ) : (
            <span className="hangman-lose">Game Over! The word was: {word}</span>
          )}
          <button className="hangman-restart" onClick={handleRestart}>Play Again</button>
        </div>
      )}
    </div>
  );
}

export default Hangman;
