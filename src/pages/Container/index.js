import React, { Component } from 'react';
import Main from '../Main/';
import Header from '../../components/Header';
import Slide from '../../components/Slide';
import Footer from '../../components/Footer';



export default class Container extends Component {

    render() {

        return (
            <>
                <Header/>,
                <div className="container">
                    <Slide />
                    <Main />
                </div>
                <Footer />
            </>
        );
    }
}