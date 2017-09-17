import React, { Component } from 'react';

import ActivityLog from './main/activity-log'

export default class Main extends Component {
    render() {
        return (
            <div className={'main-page'}>
                <ActivityLog/>
            </div>
        );
    }
}

