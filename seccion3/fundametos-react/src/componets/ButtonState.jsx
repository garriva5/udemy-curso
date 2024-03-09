import { useState } from "react";

const ButtonState = () =>{

    const [count, setCount] = useState(0);

    // const stateNumber = arrayState[0]
    // const stateFuncion = arrayState[1]


    const handleClick = () =>{
        // count = count + 1;
        // console.log("handleClick: " + count)
        setCount(count + 1);
    }


    return <button onClick={handleClick}>ButtonState : {count}</button>;
};

export default ButtonState;