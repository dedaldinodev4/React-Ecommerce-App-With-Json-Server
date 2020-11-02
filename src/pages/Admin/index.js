import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './index.css';


export default class Admin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            length: 0,
            name: '',
            categories: 'Mobile',
            price: 0,
            version: 0,
            amount: 0,
            description: '',
            flagSubmit: 'add',
            idCurrent: 0,
            views: 0
        }

        //* Handle Events *//
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //* Handle input on Change *//
    handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    //* Handle Button submit *//
    handleSubmit(event) {
        
        const flagSubmit = this.state.flagSubmit;
        if(flagSubmit === 'add'){
            //* Product Additional *//
            this.addProductItem();
            this.loadProducts();
            alert('Successful of Product Additioned');
            //* reset Value State *//
            this.resetValueState();
        } else if(flagSubmit === 'edit') {
            //* Product Edition *//
            const { idCurrent } = this.state
            this.updateProductItem(idCurrent);
            this.loadProducts();
            //* message successful *//
            alert('Successful of Product Updated');
            //* reset Value State *//
            this.resetValueState();

        }

        event.preventDefault();
    }
    //* Handle Event for edit or delete items *//
    handleButtonClick(event) {
        const target = event.target;
        const ID = target.parentElement.id;
        const dataset = target.id;
        
        if(dataset === 'edit') {
            //* Button Edit *//
            this.setState({flagSubmit: 'edit'});
            this.getDataEditProduct(ID);
            this.setState({idCurrent: ID});

        }else if(dataset === 'delete'){
            //* Button Delete *//
            this.deleteProductItem(ID);
            alert('Successful Product Delete');
        }
    }
   
    //* Loading products from API *//
    loadProducts = async ()=>{

        const response = await api.get(`/products?_sort=name&_order=asc`);

        this.setState({ products: response.data});

        this.setState({length: this.state.products.length});

    }
    
    //* Update Product  from API *//
    updateProductItem = async (id) => {

        const { name, categories, price, version, amount, description, views} = this.state;
        const avatar = name;
        let avatar_url;

        const avatarArr = {
            'Mobile': '/assets/images/phone.jpg',
            'Tables': '/assets/images/technology.jpg',
            'Computers': '/assets/images/technology.jpg',
            'Bugs': '/assets/images/13.jpg',
            'Watches': '/assets/images/9.jpg',
            'Accessories': '/assets/images/headphones.jpg',
            'Shoes': '/assets/images/1.jpg'
        }

        Object.entries(avatarArr).forEach(([key, value]) => {
            if(key === categories){
                avatar_url = value;
            }
        }); 
        const product_info = {
            version,
            categories,
            price,
            amount,
            avatar_url,
            avatar,
            description
        }

        const data = {
            name,
            product_info,
            views
        }

        return await api.put(`/products/${id}`, data);

    }
    
    //* Add Product from API *//
    addProductItem = async () => {

        const { name, categories, price, version, amount, description, views} = this.state;
        const avatar = name;
        let avatar_url;
       
      

        const avatarArr = {
            'Mobile': '/assets/images/phone.jpg',
            'Tables': '/assets/images/technology.jpg',
            'Computers': '/assets/images/technology.jpg',
            'Bugs': '/assets/images/13.jpg',
            'Watches': '/assets/images/9.jpg',
            'Accessories': '/assets/images/headphones.jpg',
            'Shoes': '/assets/images/1.jpg'
        }

        Object.entries(avatarArr).forEach(([key, value]) => {
            if(key === categories){
                avatar_url = value;
            }
        });
        
        const product_info = {
            version,
            categories,
            price,
            amount,
            avatar_url,
            avatar,
            description
        }

        const data = {
            name,
            product_info,
            views
        }


        return await api.post('/products',data);
        
    }

    //* Delete Product from API *//
    deleteProductItem = async (id) => {
        return await api.delete(`/products/${id}`);
    }
    
    //* GET Data For Update Product *//
    getDataEditProduct = async (id) => {

        const response = await api.get(`/products/${id}`);

        const data = response.data;
        const product_info = data.product_info;
        const { categories, 
                price, 
                version, 
                amount,
                description} = product_info;
        this.setState({
            name: data.name, 
            price, 
            categories,
            version,
            amount,
            description,
            views: data.views
        });

    }
    
    //* Reset Value State *//
    resetValueState = () => {

        const 
            name = '',
            price = 0,
            categories = 'Mobile',
            version = 0,
            amount = 0,
            description = '',
            flagSubmit = 'add',
            idCurrent = 0,
            views = 0
        ;

        this.setState({
            name,
            categories,
            price,
            version,
            amount,
            description,
            flagSubmit,
            idCurrent, 
            views
        });
    }

    componentDidMount() { this.loadProducts(); }

    render() {

        const { products, length } = this.state;

        return(

        
            <>
                <h2 className="title">Panel Admin</h2>
                <Link to="/">
                    <button>
                        Back
                    </button>
                </Link>
                <div className="main">
                    <div className="container">
                        
                        <div className="flex-container">
                           
                            <div className="form-input">
                                <form onSubmit={this.handleSubmit}>
                                    <label htmlFor="name">Name</label>
                                    <input 
                                        type="text" 
                                        className="input-group"
                                        name="name"
                                        id="name"
                                        value={this.state.name} onChange={this.handleInputChange}
                                    />
                                    <label htmlFor="categories">Categories</label>
                                    <select name="categories" className="input-group" id="categories"value={this.state.categories} onChange={this.handleInputChange}>
                                        <option value="Mobile">Mobile</option>
                                        <option value="Computers">Computers</option>
                                        <option value="Tables">Tables</option>
                                        <option value="Accessories">Acessories</option>
                                        <option value="Watches">Watches</option>
                                        <option value="Bugs">Bugs</option>
                                        <option value="Games">Games</option>
                                        <option value="Shoes">Shoes</option>
                                        <option value="Entertement">Entertement</option>
                                        <option value="Extras">Extras</option>
                                    </select>
                                    <label htmlFor="price">Price</label>
                                    <input 
                                        type="number" 
                                        className="input-group"
                                        id="price"
                                        placeholder="0.0(Kzs)"
                                        min="5"
                                        step="5"
                                        name="price"
                                        value={this.state.price} onChange={this.handleInputChange}
                                    />
                                    <label htmlFor="version">Version</label>
                                    <input 
                                        type="number"
                                        className="input-group"
                                        id="version"
                                        placeholder="1.0"
                                        min="1"
                                        step="0.5"
                                        name="version"
                                        value={this.state.version} onChange={this.handleInputChange}
                                    />
                                    <label htmlFor="amount">Amount</label>
                                    <input 
                                        type="number" 
                                        className="input-group"
                                        id="amount"
                                        placeholder="1"
                                        min="1"
                                        step="1"
                                        name="amount"
                                        value={this.state.amount} onChange={this.handleInputChange}
                                    />

                                    <label htmlFor="description">Description</label><br></br>
                                    <textarea id="description" name="description"value={this.state.description} onChange={this.handleInputChange} />
                                   

                                    <button type="submit" className="btn-group" id="btn-group"
                                    
                                    >Send Data</button>

                                    
                                </form>
                            </div>

                            <div className="products">
                                <h3>Products</h3>
                                <ul className="list-prod">
                                    {products.map(product =>(

                                        <li id={product.id} key={product.id} className="list-prod-item">{product.name} -  {product.product_info.categories} ({product.product_info.amount})
                                        <img onClick={this.handleButtonClick} src="/assets/icons/edit.png"
                                        id='edit'  
                                        />
                                        <img onClick={this.handleButtonClick} src="/assets/icons/delete.png"  
                                        id='delete'/>
                                        </li>
                                    ))} 
                                    <li className="list-prod-item">TOTAL PRODUCTS - {length}</li> 
                                </ul>
                            </div>
                        </div>
                        

                       
                    </div>
                </div>

            </>
        );
    }

}