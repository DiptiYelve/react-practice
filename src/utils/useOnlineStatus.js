import { useState, useEffect } from 'react';

const useOnlineStatus = () => {
    //state variable
    const [currstatus, setCurrStatus] = useState(true);

    //get status                           
    useEffect(() => {
        window.addEventListener('offline', () => {
            setCurrStatus(false);
        });
        window.addEventListener('online', () => {
            setCurrStatus(true);
        });
    }, [])
    
    return currstatus;
}

export default useOnlineStatus;