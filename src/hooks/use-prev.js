import {useRef, useEffect} from "react" 

export function usePrev(value) {
    const ref = useRef()

    useEffect(() => {
        ref.current = value
    }, [value])

    return ref.current
} //it returns first, effect gets called later 