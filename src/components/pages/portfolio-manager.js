import React, { Component } from 'react'
import axios from 'axios'

import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list"
import PortfolioForm from "../portfolio/portfolio-form"

export default class PortfolioManager extends Component {
    constructor() {
        super()

        this.state = {
            portfolioItems: [],
            portfolioToEdit: {}
        }

        this.handleNewFormSubmission = this.handleNewFormSubmission.bind(this)
        this.handleEditFormSubmission = this.handleEditFormSubmission.bind(this)
        this.handleformSubmissionError = this.handleformSubmissionError.bind(this)
        this.handleDeleteClick = this.handleDeleteClick.bind(this)
        this.handleEditClick = this.handleEditClick.bind(this)
        this.clearPortfolioToEdit = this.clearPortfolioToEdit.bind(this)
    }

    clearPortfolioToEdit() {
        this.setState({
            portfolioToEdit: {}
        });
    }

    handleEditClick(portfolioItem) {
        this.setState({
            portfolioToEdit: portfolioItem
        })
    }

    handleDeleteClick(portfolioItem) {
        axios.delete(`https://api.devcamp.space/portfolio/portfolio_items/${portfolioItem.id}`, { withCredentials: true })
            .then(res => {
                this.setState({
                    portfolioItems: this.state.portfolioItems.filter(item => {
                        return item.id !== portfolioItem.id;
                    })
                })

                return res.data
            })
            .catch(err => {
                console.log("This is the error ", err)
            })
    }

    handleEditFormSubmission() {
        this.getPortfolioItems();
    }

    handleNewFormSubmission(portfolioItem) {
        this.setState({
            portfolioItems: [portfolioItem].concat(this.state.portfolioItems)
        })
    }

    handleformSubmissionError(error) {
        console.log(error)
    }
    getPortfolioItems = () => {
        axios.get("https://toasty.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc", { withCredentials: true })
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
                    <PortfolioForm
                        handleNewFormSubmission={this.handleNewFormSubmission}
                        handleEditFormSubmission={this.handleEditFormSubmission}
                        handleformSubmissionError={this.handleformSubmissionError}
                        clearPortfolioToEdit={this.clearPortfolioToEdit}
                        portfolioToEdit={this.state.portfolioToEdit}
                    />
                </div>

                <div className="right-column">
                    <PortfolioSidebarList
                        handleDeleteClick={this.handleDeleteClick}
                        data={this.state.portfolioItems}
                        handleEditClick={this.handleEditClick}
                    />
                </div>
            </div>
        )
    }
}