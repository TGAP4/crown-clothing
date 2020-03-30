import React from 'react';
import './form-input.scss'

const FormInput = ({handleChange, label, value, ...rest}) => {
    return (
        <div className='group'>
            <input className='form-input' onChange={handleChange} {...rest} />
            {label ?
                <label className={`${value.length ? 'shrink' : ''} form-input-label`}>
                    {label}
                </label>
                : null
            }
        </div>
    )
}

export default FormInput;