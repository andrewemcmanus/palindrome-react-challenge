
import './App.css';

function App() {
  let input;
  let palindrome = [];
  const handleInput = (e) => {
    input = e.target.value;
  };
  const reverseWord = () => {
    for (let i = (value.length - 1); i > -1 ; i--) {
      const elem = value[i];
      palindrome.push(elem);
    }
  };
  const concatWord = () => {
    palindrome = palindrome.join('');
  };
  const confirmMatch = () => {
    if (input === palindrome) {
      return;
    }
  };
  const clearPalindrome = () => {
    palindrome = [];
  }
  const checkIfPalindrome = (value) => {
    reverseWord(value);
    concatWord();
    confirmMatch();
    clearPalindrome();
  }
  return (
    <div className="App">
      <div className="main">
        <div className="inputArea">
          <input type="text" onChange={(e) => handleInput(e)}/>
          <button onClick={() => checkIfPalindrome()}>Submit</button>
        </div>
      <div>yaaaayyyy</div>
      </div>
    </div>
  );
}

export default App;
