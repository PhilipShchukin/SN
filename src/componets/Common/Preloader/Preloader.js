import loader from '../../assests/images/loader.png';
import React from "react"; 

let Preloader= (props)=>{
    return <div style ={ { background: 'white' } }>
        <img src={loader} />
    </div>
}  

export default Preloader;