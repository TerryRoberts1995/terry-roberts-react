import React, { Component } from 'react'
import axios from 'axios'

import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list"
import PortfolioForm from "../portfolio/portfolio-form"

export default class PortfolioManager extends Component {
    constructor() {
        super()

        this.state = {
            portfolioItems: []
        }

        this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this)
        this.handleformSubmissionError = this.handleformSubmissionError.bind(this)
    }

    handleSuccessfulFormSubmission(portfolioItem) {

    }

    handleformSubmissionError(error) {
        console.log(error)
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
                    <PortfolioForm />
                </div>

                <div className="right-column">
                    <PortfolioSidebarList data={this.state.portfolioItems} />
                </div>
            </div>
        )
    }
}