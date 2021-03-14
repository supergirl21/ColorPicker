import ColorPicker from './Components/ColorPicker';
import './App.css';


function App() {
  return (
    <div className="App">
          <h1>Swatch Creator</h1>
          <input textarea=""></input>
          <div className="card-color">
      
            <ColorPicker />
            <ColorPicker />
            <ColorPicker />
        
          </div>
          <button >Save</button>
    </div>
    
  );
}

export default App;
