import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)
    const [txt, setTxt] = useState('Default text')

    const handleTxt = (e) => {
        setTxt(e.target.value)
    }

    return (
        <>
            <button onClick={() => setCount(count+1)}>+</button>
            <button onClick={()=> setCount(count-1)}>-</button>
            <h2>{count}</h2>
            <hr />
            <input type='text' value={txt} onChange={handleTxt} />
            <h2>{txt}</h2>
        </>
    )
}

export default Counter