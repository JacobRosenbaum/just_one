import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';
import './assets/App.css';
import Instructions from './Instructions';
import Modal from 'react-modal';
Modal.setAppElement(document.getElementById('root'));

function App() {

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#17a2b8',
      borderRadius: '15px',
      color: 'white',
      textAlign: 'left',
    }
  };

  const [word, setWord] = useState();
  const [randomWord, setRandomWord] = useState('');
  const [writer, setWriter] = useState(false);
  const [homescreen, setHomeScreen] = useState(true);
  const [displayWord, setDisplayWord] = useState(false);
  const [instructions, setInstructions] = useState(false);
  const [timer, setTimer] = useState(false);
  const [guessedWord, setGuessedWord] = useState(false);
  const [category, setCategory] = useState(false);
  const [isMovie, setIsMovie] = useState(false);
  const [isNoun, setIsNoun] = useState(false);
  const [isFood, setIsFood] = useState(false);
  const [isDrink, setIsDrink] = useState(false);

  const generateMovie = async () => {
    try {
      const response = await fetch('https://k2maan-moviehut.herokuapp.com/api/random');
      const data = await response.json();
      setRandomWord(data.name);
      displayWords();
    } catch (error) {
      console.log(error);
    }
  }

  const generateNoun = async () => {
    try {
      const response = await fetch('https://random-word-form.herokuapp.com/random/noun/?count=1');
      const data = await response.json();
      setRandomWord(data.toString().toUpperCase());
      displayWords();
    } catch (error) {
      console.log(error);
    }
  }

  const generateFood = async () => {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
      const data = await response.json();
      setRandomWord(data.meals[0].strMeal);
      displayWords();
    } catch (error) {
      console.log(error);
    }
  }

  const generateDrinks = async () => {
    try {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
      const data = await response.json();
      setRandomWord(data.drinks[0].strDrink);
      displayWords();
      setWriter(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (!homescreen) {
      generateWord()
    }
  }, [isMovie]);

  useEffect(() => {
    if (!homescreen) {
      generateWord()
    }
  }, [isNoun]);

  useEffect(() => {
    if (!homescreen) {
      generateWord()
    }
  }, [isFood]);

  useEffect(() => {
    if (!homescreen) {
      generateWord()
    }
  }, [isDrink]);


  function generateWord() {
    if (isMovie) {
      setWriter(false);
      generateMovie();
    }
    if (isNoun) {
      setWriter(false);
      generateNoun();
    }
    if (isFood) {
      setWriter(false);
      generateFood();
    }
    if (isDrink) {
      setWriter(false);
      generateDrinks();
    }
  }

  function displayWords() {
    setDisplayWord(true);
    setTimer(true);
    setCategory(false)
    console.log(randomWord)
  }

  function openModal() {
    setInstructions(true);
  }
  function closeModal() {
    setInstructions(false);
    setHomeScreen(true)
  }

  const Completionist = () =>
    <div id='randomWord'>
      {randomWord}
    </div>;

  // Renderer callback with condition
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span id='timer'>
          {seconds}
        </span>
      );
    }
  };

  return (
    <div className="container">
      <div className="jumbotron">
        <div id='mainText' className="align-middle">
          {homescreen ?
            <div>
              <h1 style={{ color: '#17a2b8' }}>
                Just One, Dog!
              </h1>
              <button
                id='guesser'
                type="button"
                className="btn btn-info"
                onClick={e => {
                  setCategory(true);
                  setWriter(false);
                  setHomeScreen(false);
                }}
              >
                Pick a Category!
              </button>
              <button
                id='writer'
                type="button"
                className="btn btn-info"
                onClick={e => {
                  setWriter(true);
                  setHomeScreen(false);
                }}
              >
                Type a Guess!
              </button>
              <br>
              </br>
              <button
                id='writer'
                type="button"
                style={{ marginTop: '20px' }}
                className="btn btn-info"
                onClick={e => {
                  setWriter(false);
                  setHomeScreen(false);
                  setInstructions(true);
                }}
              >
                How to Play
              </button>
            </div> : <div> </div>
          }
          {writer ?
            <div>
              <form onSubmit={() => {
                setGuessedWord(true);
                setWriter(false)
              }}>
                <input
                  placeholder = 'Give it a guess, ern!'
                  style={{textAlign:'center'}}
                  id='input' onKeyDown={e => {
                    setWord(e.target.value);
                    console.log(word)
                  }}>
                </input>
              </form>
              <i id='back' className="fa-solid fa-x"
                onClick={e => {
                  setWriter(false);
                  setHomeScreen(true);
                  setDisplayWord(false);
                  setGuessedWord(false);
                  setIsDrink(false);
                  setIsNoun(false);
                  setIsMovie(false);
                  setIsFood(false);
                }}
              ></i>
            </div> : <div> </div>
          }
          {category ?
            <div>
              <button
                style={{ marginRight: '10px' }}
                type="button"
                className="btn btn-info"
                onClick={e => {
                  setIsNoun(false);
                  setIsMovie(true);
                  setIsFood(false);
                  setIsDrink(false);
                }}
              >
                Generate Random Movie
              </button>
              <button
                // style={{ marginLeft: '10px' }}
                type="button"
                className="btn btn-info"
                onClick={e => {
                  setIsNoun(true);
                  setIsMovie(false);
                  setIsFood(false);
                  setIsDrink(false);
                }}
              >
                Generate Random Noun
              </button>
              <button
                style={{ marginLeft: '10px' }}
                type="button"
                className="btn btn-info"
                onClick={e => {
                  setIsNoun(false);
                  setIsMovie(false);
                  setIsFood(true);
                  setIsDrink(false);
                }}
              >
                Generate Random Food
              </button>
              <button
                style={{ marginTop: '20px' }}
                type="button"
                className="btn btn-info"
                onClick={e => {
                  setIsNoun(false);
                  setIsMovie(false);
                  setIsFood(false);
                  setIsDrink(true);
                }}
              >
                Generate Random Drank
              </button>
            </div> : <div></div>
          }
          {displayWord ?
            <div>
              {timer ?
                <Countdown date={Date.now() + 3000} renderer={renderer} key={randomWord} />
                : <div>  </div>
              }
              <div>
                <i id='redo' className="fa-solid fa-arrows-rotate"
                  onClick={e => {
                    setTimer(false);
                    generateWord();
                    setHomeScreen(false);
                  }}>
                </i>
                <i id='back' className="fa-solid fa-x"
                  onClick={e => {
                    setWriter(false);
                    setHomeScreen(true);
                    setDisplayWord(false);
                    setIsDrink(false);
                    setIsNoun(false);
                    setIsMovie(false);
                    setIsFood(false);
                  }}
                ></i>
              </div>
            </div> : <div> </div>
          }
          {guessedWord ?
            <div>
              <text id='guessedWord'>
                {word}
              </text>
              <div>
                <i id='redo' className="fa-solid fa-arrows-rotate"
                  onClick={e => {
                    setWriter(true);
                    setGuessedWord(false)
                  }}>
                </i>
                <i id='back' className="fa-solid fa-x"
                  onClick={e => {
                    setWriter(false);
                    setHomeScreen(true);
                    setDisplayWord(false);
                    setGuessedWord(false);
                    setIsDrink(false);
                    setIsNoun(false);
                    setIsMovie(false);
                    setIsFood(false);
                  }}
                ></i>
              </div>
            </div>
            :
            <div>
            </div>
          }
          {instructions ?
            <Modal
              isOpen={openModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Modal"
            >
              <div id='modalBody'>
                <i id="close" class="fa-solid fa-x" onClick={closeModal}></i>
                <Instructions />
              </div>
            </Modal>
            : <div> </div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
