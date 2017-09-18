import React, { Component } from 'react';
// renders question's info
export default class QuestionInfo extends Component {
    render() {
        return (
            <div className="question-info">
                <h1 className="title">Question #{this.props.id}</h1>
                <h2 className="category">Category: {this.props.category}</h2>
                <p className="description">{this.props.description}</p>
            </div>
        );
    }
}