import React from 'react';

const Message = ({text}) => {
    return (
        <div className="row g-3 justify-content-center">
            <div className="col-auto m-3">
                <h2>{text}</h2>
            </div>
        </div>
    );
};

export default Message;