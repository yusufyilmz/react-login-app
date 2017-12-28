
import React from 'react';

export const LoginFormInput = ({ input, placeholder, type, meta: { touched, error } }) => (

    <div className="form-group">
        <input placeholder={placeholder} className="form-control" type={type} {...input} />
        {   touched && error &&
            <div className="alert alert-warning">
                <strong>Warning!</strong> {error}
            </div>
        }
    </div>
)