import React from 'react';


const Box = (props) => {

    return (
        <>
            <div className={props.class}>
                {props.price},00kz
            </div>
            <div className="thumbnail product-box">
                <img src={props.avatar_url} alt={props.avatar} />
                <div className="caption">
                    <h3><a>{props.name}</a></h3>
                    <p><a>{props.views}</a></p>
                </div>
            </div>
        </>
    );

}

export default Box; 