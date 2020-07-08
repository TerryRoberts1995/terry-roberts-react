import React, { Component } from "react";
import PortfolioItem from "./portfolio-item";
import portfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    
    constructor() {
        super();
        
    }
    
    portfolioItems() {
        const data = ["Russell", "Austin", "Michael", "Sam", "Ryan"]

        return data.map(item => {
            return <PortfolioItem />
        });
    }

    render() {
        return (
            <div>
                <h2> This is where my Portfolio goes</h2>
                {this.portfolioItems()}
            </div>
        );
    }
}