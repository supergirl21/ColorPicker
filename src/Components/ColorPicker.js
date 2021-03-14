import React, { useState } from 'react';
import Slider from './Slider';
import Card from 'react-bootstrap/Card';

const ColorPicker = () => {
   const [red, updateRed] = useState("118");
   const [green, updateGreen] = useState("128");
   const [blue, updateBlue] = useState("128");

  return (
      <div>
          <Card className ="card">
              <Card.Body>
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
                </Card.Body>
            </Card>
       
    </div>
   
    );
}


// ========================================
export default ColorPicker;