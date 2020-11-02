import React from 'react';

import './index.css';


const Footer = () =>{

    return (

        <React.Fragment>
            
            <div className="col-md-12 footer-box">

                <div className="row">
                    <div className="col-md-4">
                        <strong>Fala Connosco </strong>
                        <hr/>
                        <form>
                            <div className="row">
                                <div className="col-md-6 col-sm-6">
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            required="required" placeholder="Seu Nome"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            required="required" 
                                            placeholder="Seu Endereço de E-mail"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 col-sm-12">
                                    <div className="form-group">
                                        <textarea name="message" id="message" required="required" className="form-control" rows="3" placeholder="Mensagem"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-navbar">
                                            Enviar Mensagem
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="col-md-4">
                        <strong>Localização</strong>
                        <hr/>
                        <p>
                            Caxito, Rua-5 Outubro S/Nº,<br />
                            Bengo, Angola<br />
                            Telefone: +244-923-673-429<br/>
                            Email: techShop@gmail.com<br/>
                        </p>

                        {new Date().getFullYear()} www.techshop.com | Todos Direitos Reservados
                    </div>
                    <div className="col-md-4 social-box">
                        <strong>Nossas Redes Sociais </strong>
                        <hr/>
                        <a href="#"><i className="fa fa-facebook-square fa-3x"></i></a>
                        <a href="#"><i className="fa fa-twitter-square fa-3x "></i></a>
                        <a href="#"><i className="fa fa-google-plus-square fa-3x c"></i></a>
                        <a href="#"><i className="fa fa-linkedin-square fa-3x "></i></a>
                        <a href="#"><i className="fa fa-pinterest-square fa-3x "></i></a>
                        <p>
                           Tech Shp é uma empresa de tecnologia que visa encantar seus clientes,
                           Com seus produtos da mais recente geração e da melhor qualidade... 
                        </p>
                    </div>
                </div>
                <hr/>
            </div>
    
            <div className="col-md-12 end-box ">
                &copy; {new Date().getFullYear()} | &nbsp; Dedaldino Daniel | &nbsp;  Todos Direitos Reservados 
            </div>
  
        </React.Fragment>


    );
}

export default Footer;