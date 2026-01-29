import React, {useState} from "react";
import style from "./Counter.module.css";


function Counter(){
    const [count, setCount] = useState(0);
    const increment =()=>{
        setCount(count + 1);
    };
    const decrement =()=>{
        setCount(count - 1);
    };
    const reset =()=>{
        setCount(0);
    };

    return(
        <div className={style["counter-container"]}>
            <h1>Counter App</h1>
            <h2 className={style["count-display"]}>{count}</h2>
            <button className={style["count-btn"]} onClick={increment}>Increment</button>
            <button className={style["count-btn"]} onClick={reset}>Reset</button>
            <button  className={style["count-btn"]} onClick={decrement}>Decrement</button>
        </div>
    );  

};
export default Counter;
