import React, {useEffect, useRef, useState} from 'react';

const Progress: React.FC = ({children}) => {
    const [max, setMax] = useState(0);
    const [value, setValue] = useState(0);

    function watch() {
        const winHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;
        setMax(docHeight - winHeight)
        setValue(window.scrollY)
    }

    useEffect(() => {
        document.addEventListener('scroll', watch);
        return () => {
            document.removeEventListener('scroll', watch);
        };
    }, []);
    return (
        <progress className={'zzf-progress'} max={max} value={value}/>
    );
};

export default Progress;
