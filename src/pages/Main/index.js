import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './index.css';


class Main extends Component {

   constructor(props) {
        super(props);
        
        this.state = {
            products: [],
            page: 1,
            length: 0,
            price: null,
            mobile: 0,
            computers: 0,
            tables: 0,
            accessories: 0,
            watchers: 0,
            games: 0,
            bugs: 0
        }

        this.handleClickPrice = this.handleClickPrice.bind(this);
        this.handleSetPage = this.handleSetPage.bind(this);
   }
   //* Handle Price ORDER *//
   handleClickPrice = (event) => {
       this.setState({price: event.target.id});
   }

   //* Handle Pagination *//
   handleSetPage = (event) => {
        let value = event.target.textContent;
        value = Number(value);
        this.setPage(value);
   }

    componentDidMount() {

        this.loadProducts();
        this.lengthProducts();
        this.countersProducts();
    }

    //* Loading from products API *//
    loadProducts = async (page = 1) => {

        const response = await api.get(`/products?_page=${page}&_limit=3`);

        this.setState({ products: response.data, page});
    }

    //* Get Product By Price *//
    loadProductCategories = async () => {
        const { price } = this.state.price;
        const response = await api.get(`/products?_page=3&_sort=price&order=${price}`);

        this.setState({product: response.data});
    }

    //* Get Products Numbers *//
    lengthProducts = async () => {

        const response = await api.get(`/products/`);
        const data = response.data;
        const length = data.length;

        this.setState({length});
    }

    //* Counter Products By Categories *//
    countersProducts = async () => {

        const response = await api.get(`/products?product_info.categories=Mobile`);
        const mobile = response.data.length;

        const responseAcc = await api(`/products?product_info.categories=Accessories`);
        const accessories = responseAcc.data.length;

        const responseWatchers = await api(`/products?product_info.categories=Watchers`);
        const watchers = responseWatchers.data.length;

        const responseTab = await api(`/products?product_info.categories=Tables`);
        const tables = responseTab.data.length;

        const responseComp = await api(`/products?product_info.categories=Computers`);
        const computers = responseComp.data.length;

        const responseBugs = await api(`/products?product_info.categories=Bugs`);
        const bugs = responseBugs.data.length;

        const responseGames = await api(`/products?product_info.categories=Games&product_info.categories=Entertement`);
        const games = responseGames.data.length;

        this.setState({
            mobile,
            accessories,
            watchers,
            tables,
            computers,
            bugs,
            games
        });
        
    }

    //* Previous Page from Products *//
    pagePrevious = () => {
        const { page } = this.state;

        if(page === 1) return;

        const pageNumber = page - 1;
        this.loadProducts(pageNumber);
    }

    //* Next Page from Products *//
    pageNext = () => {
        const { page } = this.state;

        if(page === 10 ) return;

        const pageNumber = page + 1;
        this.loadProducts(pageNumber);
    }

    //* Set Page from Products *//
    setPage = (page) => {
         this.loadProducts(page);
    }

    render() {

        const { products, page } = this.state;


        return (
            <>
                <div className="row">
                    <div className="col-md-3">
                        <div>
                            <a href="#" className="list-group-item active">Electronicos</a>
                            <ul className="list-group">

                                <li className="list-group-item">Telefones
                                    <span className="label label-primary pull-right">{this.state.mobile}</span>
                                </li>
                                <li className="list-group-item">Computadores
        <span className="label label-success pull-right">{this.state.computers}</span>
                                </li>
                                <li className="list-group-item">Tablets
                                    <span className="label label-danger pull-right">{this.state.tables}</span>
                                </li>
                                <li className="list-group-item">Games & Entertendimento
                                    <span className="label label-danger pull-right">{this.state.games}</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <a href="#" className="list-group-item active">Acessorios & Extras
                            </a>
                            <ul className="list-group">
                                <li className="list-group-item">Acessorios de Telefones
                                    <span className="label label-warning pull-right">{this.state.accessories}</span>
                                </li>
                                <li className="list-group-item">Watchers
                                    <span className="label label-success pull-right">{this.state.watchers}</span>
                                </li>
                                <li className="list-group-item">Bugs
                                    <span className="label label-danger pull-right">{this.state.bugs}</span>
                                </li>
                                
                            </ul>
                        </div>
                    
                        
                    </div>
        
                    <div className="col-md-9">
                        <div>
                            <ol className="breadcrumb">
                                <li><a href="#">Home</a></li>
                                <li className="active">Productos</li>
                            </ol>
                        </div>
              
                        <div className="row">
                            <div className="btn-group alg-right-pad">
                                <button type="button" className="btn btn-default"><strong>{this.state.length}  </strong>items</button>
                                <div className="btn-group">
                                    <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown">
                                        Ordenar Productos &nbsp;
                                        <span className="caret"></span>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li id="desc" onClick={this.handleClickPrice}><a>Preço Baixos</a></li>
                                        <li className="divider"></li>
                                        <li id="asc" onClick={this.handleClickPrice}><a>Mais Caros</a></li>
                                        <li className="divider"></li>
                                        <li><a href="#">Mais Populares</a></li>
                                        <li className="divider"></li>
                                        <li><a href="#">Mais Visualizados</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
            
                        <div className="row">
                            
                            {
                                products.map(product =>(
                                    <>
                                        
                                        
                                        <div key={product.id} className="col-md-4 text-center col-sm-6 col-xs-6">
                                            <div className="thumbnail product-box">
                                                <img src={product.product_info.avatar_url} alt={product.product_info.avatar} />
                                                <div className="caption">
                                                    <h3><a href="#">{product.name} </a></h3>
                                                    <p>Preço : <strong>{product.product_info.price},00Kz</strong> </p>
                                                    <p><a href="#">{product.product_info.categories} </a></p>
                                                    <p>{product.product_info.description}</p>
                                                    <p><a href="#" className="btn btn-success" role="button"> <i className="fa fa-shopping-cart"></i> Adicionar</a> <Link to={`products/${product.id}`} className="btn btn-info"><i className="fa fa-eye"></i> Detalhes</Link></p>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ))}
                                     
                        </div>
               
                        <div className="row">
                            <ul className="pagination alg-right-pad">
                                <li><a onClick={this.pagePrevious}>&laquo;</a></li>
                                <li><a onClick={this.handleSetPage}>1</a></li>
                                <li><a onClick={this.handleSetPage}>2</a></li>
                                
                                <li><a onClick={this.handleSetPage}>3</a></li>
                                <li><a onClick={this.handleSetPage}>4</a></li> 
                                <li><a onClick={this.handleSetPage}>5</a></li>
                                <li><a onClick={this.pageNext} >&raquo;</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        );
    }
} 

export default Main;
