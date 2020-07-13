import React, { Component } from "react";
import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    
    constructor() {
        super();
        

        this.state = {
            pageTitle: "Welcome to my Portfolio",
            isLoading: false,
            data: [{title: "Russell", category: "Savage"},{title: "Austin",category:"Awesome"},{title: "Michael", category: "Gnarly" }, {title: "Sam", category: "wicked"}]
        }

       this.handleFilter = this.handleFilter.bind(this);
    }
    
    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            }) 
        })
    }
    portfolioItems() {

        return this.state.data.map(item => {
            return <PortfolioItem title = {item.title} />;
        });
    }

    handlePageTitleUpdate() {
        this.setState({
            pageTitle: 'Here is some information.'
        })
    }

    render() {
        if(this.state.isLoading) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>
                
                <button onClick= {() => this.handleFilter('Savage')}>Savage</button>                
                <button onClick= {() => this.handleFilter('Awesome')}>Awesome</button>                
                <button onClick= {() => this.handleFilter('Wicked')}>Wicked</button>                
                <button onClick= {() => this.handleFilter('Gnarly')}>Gnarly</button>                
                
                {this.portfolioItems()}

            </div>
        );
    }
}