// import React, { useState } from 'react';

// export default function App (){
// const [buttonText, setButtonText] = useState("click me, please With Hooks");

// return(
//     <button onClick={()=> setButtonText("Thanks, been clicked With Hooks!")}>
//         {buttonText}
//     </button>
// )
// }

import React, {useState} from "react";

export default function App(){
    const [buttonText, setButtonText] = useState("With Hooks. click me, Please");
    function handleClick(){
        return setButtonText("with Hooks. Thanks, been clicked! ")
    }
    return (
        <button onClick={handleClick}>
            {buttonText}
        </button>
    )
}