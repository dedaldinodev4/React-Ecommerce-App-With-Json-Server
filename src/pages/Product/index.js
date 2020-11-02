import React , { Component } from 'react';
import api from '../../services/api';

//** Components **//
import Menu from '../../components/Menu';
import Card from '../../components/Card';


class Product extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: null,
            product_info: {},
            views: null
        };

    }
    
    componentDidMount() {

        this.getProductItem();

    }

    //* Loading product & update views *//
    getProductItem = async () => {

        const { id } = this.props.match.params;

        const response = await api.get(`/products/${id}`);

        const { name, product_info, views} = response.data;
        const viewPlus = views + 1;

        const data = {
            name,
            product_info,
            views:viewPlus
        }

        //* Update views Product Item *//
        const responseUpdate = await api.put(`/products/${id}`, data);
        this.setState({ name, product_info,views: viewPlus});
        
    }

    render() {

        const { name, product_info } = this.state;


        return (

           <>
                <Menu leftContent = "Product" rightContent = "About"></Menu>
                <Card 
                    name={name} 
                    avatar_url={product_info.avatar_url} 
                    avatar = {product_info.avatar}
                    description={product_info.description}
                    categories = {product_info.categories}
                    price = {product_info.price}
                    amount = {product_info.amount}
                >

                </Card>
           </>
        );
    }


}

export default Product;