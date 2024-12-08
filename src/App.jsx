
import {useFetch} from "./hooks/useFetch"

function App() {
    const posts = useFetch()
   
    return <div>
        {posts}
    </div>
}

export default App;