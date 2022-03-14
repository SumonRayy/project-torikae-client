import React from 'react'
import './buttons.css'

function CircleButton(props) {

    const { content } = props;

    return (
        <div className='button-container'>
            <button className='button-circle'>
                {content}
            </button>
        </div>
    )
}

export default CircleButton