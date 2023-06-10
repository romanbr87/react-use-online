import {useEffect, useState} from 'react';

const useOnline = () => { 
    const [isOnline, setIsOnline] = useState(window.navigator.onLine ?? true);         
    useEffect(() => {
        const handOnline = () => {
            setIsOnline(true);
        };

        const handleOffline = () => {
            setIsOnline(false);
        };

        window.addEventListener('online', handOnline);
        window.addEventListener('offline', handleOffline);
        return () => {
            window.removeEventListener('online', handOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    return isOnline;
}

export default useOnline;