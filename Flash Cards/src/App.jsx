import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


function App() {
  const [card, setCard] = useState(0)
  function nextCard(){
    pass
  }
  function cardChange(){
    if(card >= flashcard_data.length -2){
      setCard(card - 3)
      console.log("help")
    }
    setCard(card + 1)
    console.log(card)
  }
  function cardData(list){
    pass
  }


  return (
    <div className="App">
      <div className='Title'></div>
      <div className='Card' >{flashcard_data[card].question}{flashcard_data[card].answer}</div>
      <div className='Next' onClick={cardChange} >Next</div>
    </div>
  )
}
const flashcard_data = [{question: "a",answer:"a1"},{question: "b",answer:"b1"},{question: "c",answer:"c1"}]

export default App
