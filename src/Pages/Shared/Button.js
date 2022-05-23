import React from 'react';

const Button = ({ children }) => {
    return (
        <div>
            <button class="btn bg-gradient-to-r from-secondary to-primary text-white font-bold">{children}</button>
        </div>
    );
};

export default Button;