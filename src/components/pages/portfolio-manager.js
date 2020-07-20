import React, { Component } from 'react'
import axios from 'axios'

export default class PortfolioManager extends Component {
    constructor() {
        super()

        this.state = {
            portfolioItems: []
        }
    }

    getPortfolioItems = () => {
        axios.get("https://toasty.devcamp.space/portfolio/portfolio_items", { withCredentials: true })
            .then(res => {
                this.setState({
                    portfolioItems: [...res.data.portfolio_items]
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    componentDidMount = () => {
        this.getPortfolioItems();
    }

    render() {
        return (
            <div className="portfolio-manager-wrapper">
                <div className="left-column">
                    <h1> Portfolio Form</h1>
                </div>

                <div className="right-column">
                    <h3>Portfolio-sidebar</h3>
                </div>
            </div>
        )
    }
}