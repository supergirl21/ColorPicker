import React from 'react';


const RgbDisplay = (props) => {
   

  return (         
          <div>
            <label>{props.label}</label>
            <input className='inputNumber'
            type="number" 
            min="0" max="255" 
            value={props.val}
            onChange={(e) => props.updateColor(e.target.value)}
            />
            {/* <br/>  */}
        </div>
       
      
   
    );
}


// ========================================
export default RgbDisplay;