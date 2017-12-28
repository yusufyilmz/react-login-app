
import React from 'react';

export const LoginFormSelect = ({ children, input, name, placeholder, meta: { touched, error } }) => (

    <div className="form-group">
        <select {...input} className="form-control" name={name}>
            {children}
        </select>
        {
            touched && error &&
            <div className="alert alert-warning">
                <strong>Warning!</strong> {error}
            </div>
        }
    </div>
)
