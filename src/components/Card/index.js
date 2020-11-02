import React from 'react';
import './index.css';


const Card  = (props) => {

    return (
        <React.Fragment>

            <div className="container">
                <div className="card">
                    <div className="imgBx">
                        <img src={props.avatar_url} alt={props.avatar} />
                    </div>
                    <div className="content">
                        <div>
                            <h2>{props.name}</h2>
                            <h5><strong>Categoria:</strong> {props.categories}</h5>
                            <h5><strong>Preço:</strong> {props.price} | <strong>Estoque:</strong> {props.amount} </h5>
                            <p>
                                {props.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>

    );

}
export default Card;