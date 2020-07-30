import React, { Component } from 'react';
import axios from 'axios';

export default class BlogForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            blog_status: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    buildForm() {
        let formData = new FormData();

        formData.append("portfolio_blog[title]", this.state.title);
        formData.append("portfolio_blog[blog_status]", this.state.blog_status);


        return formData;

    }

    handleSubmit(event) {
        axios.post("https://toasty.devcamp.space/portfolio/portfolio_blogs", this.buildForm(), { withCredentials: true })
            .then(res => {
                this.props.handleSuccessfullFormSubmission(res.data.portfolio_blog)
            })
            .catch(error => console.log(error))
        event.preventDefault()

        this.setState({
            title: "",
            blog_status: ""
        })
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="blog-form-wrapper">
                <div className="two-column">
                    <input onChange={this.handleChange} type="text"
                        name="title"
                        placeholder="Blog Title"
                        value={this.state.title}
                    />
                    <input type="text"
                        onChange={this.handleChange}
                        name="blog_status"
                        placeholder="Blog Status"
                        value={this.state.blog_status} />
                </div>

                <button className="btn">Save</button>
            </form>
        );
    }
}