import {useState, useEffect} from 'react'
import { useDebounce } from './hooks/use-Debounce';

function App1() {
    const [inputVal, setInputVal]=useState("");
    const debouncedVal = useDebounce(inputVal, 300)

    function change(e) {
        setInputVal(e.target.value)

    }

    useEffect(() => {
        console.log("expensive operation")

    }, [debouncedVal])
    
    return (
        <>
        <input type="text" onChange={change}></input>
        </>
    )
}

export default App1;