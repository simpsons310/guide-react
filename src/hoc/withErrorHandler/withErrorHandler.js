import React, { useState, useEffect } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxiliary/Auxiliary';

const withErrorHandler = (WrappedComponent, axios) => {
    return props => {
        const [error, setError] = useState(null);

        const requestInterceptors = axios.interceptors.request.use(request => {
            setError(null);
            return request;
        });
        const responseInterceptors = axios.interceptors.response.use(response => response, error => {
            setError(error);
        });

        useEffect(() => {
            return () => {
                axios.interceptors.request.eject(requestInterceptors);
                axios.interceptors.response.eject(responseInterceptors);
            }
        }, [requestInterceptors, responseInterceptors]);

        const errorConfirmHandler = () => {
            setError(null);
        }

        return (
            <Aux>
                <Modal
                    show={error}
                    modalClosed={errorConfirmHandler}
                >
                    {error ? error.message : null}
                </Modal>
                <WrappedComponent {...props}/>
            </Aux>
        );
    }
}

export default withErrorHandler;