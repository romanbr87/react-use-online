import {useEffect, useState} from 'react';

export const useOnline = () => { 
    if (typeof window === undefined || typeof navigator === undefined) {
        return {     
            isOffline: null,
            isOnline: null,
            error: "useIsOnline meant to be used only in a browser environment."
        };    
    }

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

    return {     
        isOffline: !isOnline,
        isOnline: isOnline,
        error: null
    };
}

export const useOnlineNotification = ({handOnline, handleOffline}) => { 
    
    useEffect(() => {
        window.addEventListener('online', handOnline);
        window.addEventListener('offline', handleOffline);
        return () => {
            window.removeEventListener('online', handOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    return (window.navigator.onLine !== undefined && window.navigator.onLine != null )
}