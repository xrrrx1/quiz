import React, { Component } from 'react';

export default class AnswerBuilding extends Component {
    render() {
        return (
            <div className="answer-building">
                <div className="answer-container">
                    <div className="characters-place">
                        <ul className="inline-list">
                            <li className="inline-block character">
                                A
                            </li>
                            <li className="inline-block character">
                                B
                            </li>
                            <li className="inline-block character">
                                C
                            </li>
                            <li className="inline-block character space-as-character">
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}