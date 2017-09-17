import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchQuestion } from "../actions/questions"

import ActivityLog from './main/activity-log'
import QuestionInfo from './main/question-info'

class Main extends Component {
    componentWillMount() {
        this.props.fetchQuestion();
    }
    showsQuestion(question) {
        if (question === null) {
            return <h3>Data processing...</h3>
        } else {
            return (
                <ul>
                    <li>Answer: {question.answer}</li>
                    <li>Id: {question.id}</li>
                    <li>Description: {question.description}</li>
                </ul>
            );
        }
    }
    render() {
        console.log(this.props.question);
        return (
            <div className={'main-page'}>
                <ActivityLog/>
                <QuestionInfo/>
                {this.showsQuestion(this.props.question)}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        question: state.questions.question
    }
}

export default connect(mapStateToProps, { fetchQuestion })(Main);