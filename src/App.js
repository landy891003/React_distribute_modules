import logo from './logo.svg';
import './App.css';
import HelloCGU from './HelloCGU';
import MultiButton from './multibutton'
function App() {
  return (
    <div classname="App">
      <div>
        {
          HelloCGU()
        }
        </div>
        <div>
          {
            MultiButton(10)
          }
        </div>
      </div>
  );
}

export default App;
