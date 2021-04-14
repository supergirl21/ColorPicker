import React from 'react';


const Slider = (props) => {
  //  console.log(props);

  return (         
          <div className="slider">
            <label>{props.label}</label>
            <input 
            id="typeinp" 
            type="range" 
            min="0" max="255" 
            value={props.val}
            onChange={(e) => props.updateColor(e.target.value)}
            />
            <br/> 
        </div>
       
      
   
    );
}


// ========================================
export default Slider;