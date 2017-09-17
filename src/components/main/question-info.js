import React, { Component } from 'react';
// renders question's info
export default class QuestionInfo extends Component {
    render() {
        return (
            <div className="question-info">
                <h1 className="title">Question #1231</h1>
                <h2 className="category">Category: energy</h2>
                <p className="description">
                    Hello, some text should be here. Bla bla bla bla bla bla.
                    Some another discription.Bla bla bla bla bla bla.Bla bla bla bla bla bla.Bla bla bla bla bla bla.Bla bla bla bla bla bla.
                </p>
            </div>
        );
    }
}