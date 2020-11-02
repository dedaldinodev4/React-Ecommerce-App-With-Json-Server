import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const Header = ()=> {

    return  (
        <>
            <nav className="navbar navbar-default" role="navigation">
                <div className="container-fluid">
            
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#"><strong>Tech</strong> Shop</a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#">Meu Carrinho</a></li>
                            <li></li>
                            <li>
                                <Link to="admin">Admin</Link>
                            </li>

                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    Ajuda <b className="caret"></b>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a href="#"><strong>Telefone: </strong>+244-923-673-429</a></li>
                                    <li></li>
                                    <li><a href="#"><strong>E-mail: </strong>digitalShop@gmail.com</a></li>
                                    <li className="divider"></li>
                                    <li>
                                        <a href="#"><strong>Endereço: </strong>
                                            <div>
                                                Caixito, Rua-5 Outubro S/Nº,<br />
                                                Bengo, Angola
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <form className="navbar-form navbar-right" role="search">
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    placeholder="Pesquisar aqui ..." 
                                    className="form-control" 
                                />
                            </div>
                    
                            <button type="submit" className="btn btn-navbar">Pesquisar</button>
                        </form>
                    </div>
            
                </div>
        
            </nav>

            
            
        
        </>

    );
}

export default Header;