import { useEffect, useRef } from "react";

export default function useObserver(ref, isLoading, canLoad, callback) {
    const observer = useRef();

    useEffect(() => {
        if(isLoading) return;

        if(observer.current) observer.current.disconnect();

        const cb = (entries) => {
            if(entries[0].isIntersecting && canLoad) {
                console.log(canLoad);
                callback();
            }
        }

        observer.current = new IntersectionObserver(cb);

        observer.current.observe(ref.current);
    }, [isLoading]);
}