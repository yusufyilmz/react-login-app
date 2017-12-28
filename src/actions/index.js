import { FIRST_FORM_COMPLETE, SECOND_FORM_COMPLETE, SUBMITTING_FORM } from './types';

const submitForm = (state) => {

    return {
        type: SUBMITTING_FORM,
        payload: state
    }
}
export const completeFirstForm = (values, callback) => {

    return (dispatch) => {
        // dispatch(submitForm(true))
        // new Promise(function (resolve, reject) {
        //     setTimeout(function () { resolve(10); }, 1000);
        // })
        //     .then(function (result) {
        //         dispatch(submitForm(false))
        //         callback();
        //         console.log(result);
        //         dispatch({
        //             type: FIRST_FORM_COMPLETE,
        //             payload: values
        //         })
        //     });

        callback();
        dispatch({
            type: FIRST_FORM_COMPLETE,
            payload: values
        })


    }
}

export const completeSecondForm = (values, callback) => {

    return (dispatch) => {
        dispatch(submitForm(true))
        new Promise(function (resolve, reject) {
            setTimeout(function () { resolve(10); }, 2000);
        })
            .then(function (result) {
                dispatch(submitForm(false))

                callback();
                console.log(result);
                dispatch({
                    type: SECOND_FORM_COMPLETE,
                    payload: values
                })
            });
    }
}

