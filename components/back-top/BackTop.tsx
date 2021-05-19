import React, {useEffect, useState} from 'react';

const BackTop: React.FC = ({children}) => {
    const [isShow, setIsShow] = useState(false)

    function handleIsShow() {
        if (document.documentElement.scrollTop > 40) {
            setIsShow(true)
        } else {
            setIsShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleIsShow);
        return () => {
            window.removeEventListener('scroll', handleIsShow)
        }
    }, [])
    return (
        <>
            {
                isShow && <div onClick={() => {
                    scrollTo({top: 0})
                }} className={'zzf-back-top'}>
                    回到顶部
                </div>
            }
        </>
    );
}

export default BackTop;
