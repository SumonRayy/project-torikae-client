import React from 'react'
import './inputBox.css'

function InputBox(props) {

    const { type, placeholder, value, onChange, readOnly } = props

    return (
        <div className='input-box'>
            <input
                type={type}
                placeholder={placeholder}
                min="0"
                value={value}
                onChange={onChange}
                readOnly={readOnly}
            />
        </div>
    )
}

export default InputBox