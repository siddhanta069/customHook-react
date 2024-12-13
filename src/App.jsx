import {useState} from "react"
import {useFetch} from "./hooks/useFetch"
import {usePrev} from "./hooks/use-prev"

function App() {
    // const [currentPosts, setCurrentPosts] = useState(1)
    // const {finalData, loading} = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPosts)

    // if(loading) {
    //     return <div>
    //         loading...
    //     </div>
    // }
   
    // return (
    //     <div>
    //         <button onClick={ () => setCurrentPosts(1)}>1</button>
    //         <button onClick={ () => setCurrentPosts(2)}>2</button>
    //         <button onClick={ () => setCurrentPosts(3)}>3</button>
    //         {JSON.stringify(finalData.title)}
    //     </div>
    // )

    const [count, setCount] = useState(0)
    const prev = usePrev(count)

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>click me</button>
            <p>The previous value was {prev}</p>
        </div>
    )
}

export default App; 