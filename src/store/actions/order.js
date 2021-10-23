import * as actionTypes from './actionTypes';
import axios from '../../axios-order';

export const perchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    };
};

export const perchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    };
};

export const perchaseBurgerStart = (orderData) => {
    return dispatch => {
        axios.post('/orders.json', orderData)
            .then(response => {
                console.log(response.data);
                dispatch(perchaseBurgerSuccess(response.data, orderData))
            })
            .catch(error => {
                dispatch(perchaseBurgerFail(error));
            });
    }
};
