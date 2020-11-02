import React , { Component } from 'react';
import './index.css';



const Menu = (props) =>{


    return (

        <div className="wrapper">

            <nav className="main-menu">
                <ul className="main-ul">
                    <li className="main-li"><a>{props.leftContent}</a></li>
                    <li className="main-li">
                        <a href="#">
                            <span>
                                <strong>Tech</strong> Shop
                            </span>
                        </a>
                    </li>
                    <li className="main-li"><a href="#">{props.rightContent}</a></li>

                </ul>
            </nav>
        </div>
    );
}

export default Menu;