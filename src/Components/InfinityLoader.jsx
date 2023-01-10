import React, {useRef} from 'react';
import useObserver from '../hooks/useObserver';

export default function InfinityLoader({loading, canLoad, handlerScroll}) {
    const lastElement = useRef();
    const observer = useObserver(lastElement, loading, canLoad, handlerScroll);

    return (
        <>
            <div style={{width: '100%', height: 30, marginTop: 40}} ref={lastElement}></div>
        </>
    );
}