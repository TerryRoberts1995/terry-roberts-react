import React, { Component } from 'react'
import axios from 'axios';

export default class PortfolioForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            description: "",
            category: "",
            position: "",
            url: "",
            thumb_image: "",
            logo: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    buildForm() {
        let formData = new FormData();

        formData.append("portfolio_item[name]", this.state.name);
        formData.append("portfolio_item[description]", this.state.description);
        formData.append("portfolio_item[url]", this.state.url);
        formData.append("portfolio_item[position]", this.state.position);
        formData.append("portfolio_item[category]", this.state.category);

        return formData;
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {

        axios.post("https://toasty.devcamp.space/portfolio/portfolio_items", this.buildForm(), { withCredentials: true })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log("error: ", error);
            })
        this.buildForm()
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>Pro Form</h1>

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Portfolio Item name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />

                        <input
                            type="text"
                            name="url"
                            placeholder="URL"
                            value={this.state.url}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div>
                        <input
                            type="text"
                            name="position"
                            placeholder="Position"
                            value={this.state.position}
                            onChange={this.handleChange}
                        />

                        <select
                            name="category"
                            value={this.state.category}
                            onChange={this.handleChange}
                        >
                            <option value="eCommerce">eCommerce</option>
                            <option value="scheduling">Scheduling</option>
                            <option value="Enterprise">Enterprise</option>
                        </select>
                    </div>

                    <div>
                        <input
                            type="text"
                            name="description"
                            placeholder="description"
                            value={this.state.description}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <button type="submit"> Save</button>
                    </div>
                </form>
            </div>
        )
    }
}