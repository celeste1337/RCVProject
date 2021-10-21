import './App.css';
import Welcome from './components/Welcome'
import VotingComponent from './components/VotingComponent';
import logo from './assets/logo.png'
import Main from './components/Main';

//put all components inside the App div
function App() {
  return (
    <div className="App">
    <div id="navBar">
      <span class="navLink">Text Size</span>
      <span class="navLink">Contrast</span>
      <span class="navLink">Contact</span>
      <span class="navLink">Help</span>
    </div>
    <img class="logo" src={logo}/>
    <Main/>


    </div>
  );
}

export default App;
