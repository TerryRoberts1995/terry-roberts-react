import React, { Component } from "react";
import PortfolioItem from "./portfolio-item";
import axios from 'axios';


export default class PortfolioContainer extends Component {
    
    constructor() {
        super();
        

        this.state = {
            pageTitle: "Welcome to my Portfolio",
            isLoading: false,
            data: []
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

    getPortfolioItems() {
        axios.get("https://toasty.devcamp.space/portfolio/portfolio_items")
        .then(response => {
          this.setState({
            data: response.data.portfolio_items
          })
        })
        .catch(err => {
          console.log(err)
        })
    }

    portfolioItems() {

        return this.state.data.map(item => {
            console.log(item)
            return <PortfolioItem title = {item.name} url = {item.url} slug = {item.id}/>;
        });
    }

    componentDidMount() {
        this.getPortfolioItems();
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