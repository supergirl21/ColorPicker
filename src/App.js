// import ColorPicker from './Components/ColorPicker';
import './App.css';
import SwatchCreator from './Components/SwatchCreator';
import Swatch from './Components/Swatch';
import { useState } from 'react';



const App = () => {
    const [swatches, setSwatches] = useState([]);
    const saveSwatch = (newSwatch) => {
      setSwatches([...swatches, newSwatch])
    }
    const resetSwatch =() => {
      setSwatches([])
    }
    
  return (
      <div className='App'>
          <h1 className='swatch-title'>Swatch Creator</h1>
              <SwatchCreator saveSwatch={saveSwatch} resetSwatch={resetSwatch} />
              <div className='swatch-main-wrapper'>
                {swatches.map((swatch,id) => (
                    <div>
                      <Swatch title={swatch.title} colors={swatch.colors} key={id}/>
                    </div>
                ))}
              </div>
            {/* <Button className='btnSave'onClick={saveSwatch}>Save</Button> */}
            {/* <Button className='btnReset'onClick={resetSwatch}>Reset App</Button> */}
            
      </div>
    
  );
}
export default App
