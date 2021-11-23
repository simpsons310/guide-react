import { useState, useEffect } from 'react';

export default httpClient => {
    const [error, setError] = useState(null);

    const requestInterceptors = httpClient.interceptors.request.use(request => {
        setError(null);
        return request;
    });
    const responseInterceptors = httpClient.interceptors.response.use(response => response, error => {
        setError(error);
    });

    useEffect(() => {
        return () => {
            httpClient.interceptors.request.eject(requestInterceptors);
            httpClient.interceptors.response.eject(responseInterceptors);
        }
    }, [requestInterceptors, responseInterceptors]);

    const errorConfirmHandler = () => {
        setError(null);
    }

    return [error, errorConfirmHandler];
};