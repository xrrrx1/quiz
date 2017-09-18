import React, { Component } from 'react';
//renders data about user activity
export default class ActivityLog extends Component {
    render () {
        console.log(`counter from nested comp: ${this.props.questionsCount}`);
        return (
            <div className="activity-log">
                <div className="row">
                    <div className="col-md-6">
                        <div className="correct-answers">
                            Correct answers: 0
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="total-questions">
                            Total questions: {this.props.questionsCount}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}