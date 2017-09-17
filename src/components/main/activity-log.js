import React, { Component } from 'react';
//renders data about user activity
export default class ActivityLog extends Component {
    render () {
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
                            Total questions: 0
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}