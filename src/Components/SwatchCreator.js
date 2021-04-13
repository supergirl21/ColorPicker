import React, { useState} from 'react';
import ColorPicker from './ColorPicker';
import Button from 'react-bootstrap/Button';


const SwatchCreator = (props) => {
    console.log(props);
//    const initialState = { ...props }
//    console.log (initialState);

    const saveSwatch =() => {
        // console.log('Click');
        const swatch = { 
            title: title,
            colors: [color1, color2, color3, color4]
            
        }
        
        props.saveSwatch(swatch);

    }
    // const resetSwatch =() => {
    //     console.log(resetSwatch);
    //     const swatchReset = {
    //         title: title,
    //         // color: [{color1:'128'}, {color2:'128'}, {color3:'128'}, {color4:'128'}]
    //         // title: title,
    //         colors: [{r:'128', g:'128', b:'128'},
    //         {r:'128', g:'128', b:'128'},
    //         {r:'128', g:'128', b:'128'},
    //         {r:'128', g:'128', b:'128'}]
            
    //     }
    //     setColor1({r:'128', g:'128', b:'128'})
    //     setColor2({r:'128', g:'128', b:'128'})
    //     setColor3({r:'128', g:'128', b:'128'})
    //     setColor4({r:'128', g:'128', b:'128'})
    //     props.resetSwatch(swatchReset);
    // }
    const [title, setTitle] = useState ('');
    const [color1, setColor1] = useState ({});
    const [color2, setColor2] = useState ({});
    const [color3, setColor3] = useState ({});
    const [color4, setColor4] = useState ({});

    const resetPicker = () => {
        window.location.reload();
    }

  return (         
          <div  className="App" >
              <input className="swatch-name"
                placeholder="Swatch Name" 
                value={title} 
                onChange={(e) =>setTitle(e.target.value)}
                />
               <div className='card-color'>
                   <ColorPicker color={color1} setColor ={setColor1}/>
                   <ColorPicker color={color2} setColor ={setColor2}/>
                   <ColorPicker color={color3} setColor ={setColor3}/>
                   <ColorPicker color={color4} setColor ={setColor4}/>
                </div> 
            
            <Button className='btnSave'onClick={saveSwatch}>Save</Button>
            {/* <Button className='btnReset'onClick={resetSwatch}>Reset</Button> */}
            <Button className='btnReset'onClick={resetPicker}>Reset</Button>
            
        </div>
       
      
   
    );
}


// ========================================
export default SwatchCreator;