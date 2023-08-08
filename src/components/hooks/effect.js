import React, { useEffect, useState } from "react";

const CountByEffect = () => {
    const [count, setCount] = useState(0)
    const [doubleCount, setDoubleCount] = useState(0)

    // Comment #1: this method runs on every render automaticly, note that return will cleanup memory after effect usage
    // useEffect(() => {
    //     console.log(count)
    //     setTimeout(()=>setCount((count)=> count +1), 1000)
    //     return ()=>console.log('unmounting')
    // })

    // Comment #2: this method runs on every render by click
    // useEffect(() => {
    //     console.log(count)
    //     return ()=>console.log('unmounting')
    // })

    // Comment #3: only runs on the initial render
    useEffect(() => {
        console.log(count)
        let timer = setTimeout(()=>setCount((count)=> count +1), 1000)
        return () => clearTimeout(timer)
    }, [])

    // Comment #4: run on initial render and doubleCount only.
    // useEffect(() => {
    //     console.log(count)
    //     return ()=>console.log('unmounting')
    // }, [doubleCount])

    // Comment #5: run is dependent on a varible, if the count updates, the effect will run again
    // useEffect(() => {
    //     console.log(count)
    //     // if you change setDoubleCount with setCount will return infinite
    //     setDoubleCount(()=>count * 2)
    // }, [count])

    

    return (
        <>
            <h1>Count: {count}</h1>
            <h1>Double Count: {doubleCount}</h1>
            <button onClick={()=>setCount((count)=> count + 1)}>+ count</button>
            <button onClick={()=>setDoubleCount((doubleCount)=> doubleCount + 1)}>+ doubleCount</button>
        </>
    )
}

export default CountByEffect