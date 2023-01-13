import React from 'react';

const Button = (props) => {
    return (
        <div>
            <button type={'submit'} className={'bg-amber-400 px-4 p-2'}>{props.children}</button>
        </div>
    );
};

export default Button;