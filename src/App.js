import logo from './logo.svg';
import './App.css';

function App() {

  const App_ID = '7eacc5e2'
  const API_KEY = '9a645d8682cce8be15d64b6eef45bccd' ;

  const request = "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}"
  

  return (
    <div className="App">
    <form>



    <input type="text" name="" id="" className="input__search"/>
    <button type="submit" className="btn">
      Submit
    </button>



    </form>
    </div>
  );
}

export default App;
