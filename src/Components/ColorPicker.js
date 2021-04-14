import React, { useState,useEffect } from 'react';
import Slider from './Slider';
import Card from 'react-bootstrap/Card';
import RgbDisplay from './RgbDisplay';
// import { propTypes } from 'react-bootstrap/esm/Image';
// import SwatchCreator from './SwatchCreator';

const ColorPicker = ({setColor}) => {
    // console.log();
   const [red, updateRed] = useState("128");
   const [green, updateGreen] = useState("128");
   const [blue, updateBlue] = useState("128");
  
    useEffect( () => {
        updateRed(red)
        updateGreen(green)
        updateBlue(blue)
        setColor({r: red, g: green, b: blue})
    }, [setColor, red, green, blue])

  return (
      <div >
          <Card className ="card">
              <Card.Body className ="cardResult">
                <Slider 
                label="R"
                val={red}
                updateColor={updateRed}
                />
                <Slider 
                label="G"
                val={green}
                updateColor={updateGreen}
                />
                <Slider 
                label="B"
                val={blue}
                updateColor={updateBlue}
                />
                <div 
                className ="color-preview" 
                style={{background:`rgb(${red},${green},${blue})`}}>

                </div>
                
                <RgbDisplay 
                label="R"
                val={red}
                updateColor={updateRed}
                />
                <RgbDisplay 
                label="B"
                val={blue}
                updateColor={updateBlue}
                />
                <RgbDisplay 
                label="G"
                val={green}
                updateColor={updateGreen}
                />
                
                </Card.Body>
            </Card>
       
    </div>
   
    );
}


// ========================================
export default ColorPicker;