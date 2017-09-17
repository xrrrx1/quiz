import React, { Component } from 'react';

import Header from './header'

export default class App extends Component {
    render() {
        return (
           <div className={"app"}>
               <Header/>
               <div className="container">
                   <h3>
                       {this.props.children}
                   </h3>
               </div>
           </div>
        );
    }
}
