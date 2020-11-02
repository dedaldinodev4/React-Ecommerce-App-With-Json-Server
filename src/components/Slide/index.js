import React,{ Component } from 'react';
import api from '../../services/api';
import './index.css';
import Box from '../BoxProd/';


class Slide extends Component {

    constructor(props) {
        super(props);

        this.state = {
            mobile: [],
            shoes: [],
            accessories: [],
            watches: [],
            nameLook: '',
            nameDont: '',
            product_info_look: {},
            product_info_dont: {}
        }

    }

    componentDidMount() {
        this.loadProductsItem();
        this.getProductsFromSlide();
    }

    //* Get Product For Slide *//
    getProductsFromSlide = async () => {
        let response;
        
        response = await api.get(`/products?product_info.categories=Mobile&_limit=4`);
        this.setState({ mobile: response.data});

        response = await api.get(`/products?product_info.categories=Shoes&_limit=4`);
        this.setState({ shoes: response.data});

        response = await api.get(`/products?product_info.categories=Accessories&_limit=4`);
        this.setState({ accessories: response.data});

        response = await api.get(`/products?product_info.categories=Watches&_limit=4`);
        this.setState({ watches: response.data});

    }

    //* Loading Products from API *//
    loadProductsItem = async () => {

        const response = await api.get(`/products?_limit=1&_sort=views&_order=desc`);

        const responseDontLooks = await api.get(`/products?_limit=1&_sort=views&_order=asc`);

       
        
        this.setState({
            nameLook: response.data[0].name,
            product_info_look: response.data[0].product_info,
            nameDont: responseDontLooks.data[0].name,
            product_info_dont: responseDontLooks.data[0].product_info,
            
        });

    }


    render() {

        const { 
            nameLook, 
            nameDont, 
            product_info_look, 
            product_info_dont,
            mobile,
            shoes,
            accessories,
            watches
        } = this.state;
      

        return (

        
            <div className="row">

                <div className="col-md-9">
                   
                    <div className="main box-border">
                        <div id="mi-slider" className="mi-slider">
                            <ul>
                                    {mobile.map(product =>(
                                <li key={product.id}><a>
                                    <img 
                                        src={product.product_info.avatar_url} 
                                        alt={product.product_info.avatar}/><h4>{product.name}</h4>
                                </a></li>
                                
                                ))}
                            </ul>
                            <ul>
                                {shoes.map(product =>(
                                <li key={product.id}><a>
                                    <img 
                                        src={product.product_info.avatar_url} 
                                        alt={product.product_info.avatar}/><h4>{product.name}</h4>
                                </a></li>
                                
                                ))}
                            </ul>
                            <ul>
                                {accessories.map(product =>(
                                <li key={product.id}><a>
                                    <img 
                                        src={product.product_info.avatar_url} 
                                        alt={product.product_info.avatar}/><h4>{product.name}</h4>
                                </a></li>
                                
                                ))}
                            </ul>
                            <ul>
                                {watches.map(product =>(
                                <li key={product.id}><a>
                                    <img 
                                        src={product.product_info.avatar_url} 
                                        alt={product.product_info.avatar}/><h4>{product.name}</h4>
                                </a></li>
                                
                                ))}
                            </ul>
                            <nav>
                                <a id='Mobile' onClick={this.handleChangeSlide}>Mobile</a>
                                <a id='Shoes' onClick={this.handleChangeSlide}>Shoes</a>
                                <a id='Accessories' onClick={this.handleChangeSlide}>Accessories</a>
                                <a id='Watches' onClick={this.handleChangeSlide}>Watches</a>
                            </nav>
                        </div>
                    </div>
                    <br/>
                </div>

                <div className="col-md-3 text-center">
                    <div className=" col-md-12 col-sm-6 col-xs-6" >
                        <Box 
                            class = "offer-text"
                            name = {nameLook}
                            avatar_url = {product_info_look.avatar_url}
                            avatar = {product_info_look.avatar}
                            price = {product_info_look.price}
                            views = "Product Views More"
                        />

                    
                    </div>
                    <div className=" col-md-12 col-sm-6 col-xs-6">
                        <Box 
                            class = "offer-text2"
                            name = {nameDont}
                            avatar_url = {product_info_dont.avatar_url}
                            avatar = {product_info_dont.avatar}
                            price = {product_info_dont.price}
                            views = "Product Dont Look"
                        />
                    </div>
                </div>

            </div>
            
            
        
    );

    }

   
}

export default Slide;