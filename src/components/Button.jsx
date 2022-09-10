import React from 'react'

function Button({ onClick, children }) {

    return (
        <div>
            <button className='bg-indigo-700 text-white py-2 px-6 my-10 rounded hover:bg-indigo-800' onClick={onClick}>
                {children}
            </button>
        </div>
    )
}

export default Button