import React, { Component } from 'react';

export default class App extends Component {
    render() {
        return (
           <div className={"app"}>
               HEADER
               <div className="container">
                   <h3>
                       {this.props.children}
                   </h3>
               </div>
               FOOTER
           </div>
        );
    }
}
