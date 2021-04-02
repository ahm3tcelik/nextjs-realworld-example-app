import { useState } from "react"

type ILoaderState = {
    isLoading: boolean;
}

const useLoader = () => {

    const [loaderState, setState] = useState<ILoaderState>({ isLoading: false });

    const handleStart = () => {
        setState({isLoading: true});
    }

    const handleComplete = () => {
        setState({isLoading: false});
    }
    return { handleStart, handleComplete, loaderState }
}

export default useLoader;