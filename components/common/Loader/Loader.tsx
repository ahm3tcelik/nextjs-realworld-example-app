import { useRouter } from "next/router";
import { useEffect } from "react";
import useLoader from "./useLoader";
import useLoaderStyles from "./useLoaderStyles";

const Loader = () => {
    const router = useRouter();
    const { loaderState, handleStart, handleComplete } = useLoader();
    const classes = useLoaderStyles();

    useEffect(() => {

        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleComplete)
        router.events.on('routeChangeError', handleComplete)

        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleComplete)
            router.events.off('routeChangeError', handleComplete)
        }
    })
    return (
        <>
            {loaderState.isLoading &&
                <div className={classes.root}>
                    <div className={classes.spinner}>
                        <div className={classes.bounce1}></div>
                        <div className={classes.bounce2}></div>
                    </div>
                </div>
            }
        </>
    );
}
export default Loader;