import React, { Component } from 'react';
//allows skip question
export default class SkipQuestion extends Component {
    receiveNextQuestion() {
        this.props.fetchQuestion();
        this.props.incrementQuestionsCount();
    }
    render() {
        return (
            <div className="skip-question" onClick={this.receiveNextQuestion.bind(this)}>
                Skip
            </div>
        );
    }
}