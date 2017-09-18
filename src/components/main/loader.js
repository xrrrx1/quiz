import React, { Component } from 'react';


import LoaderImage from '../../images/loader.gif'

export default class Loader extends Component {
    render() {
        return (
       <div className="loader">
           <img src={LoaderImage} alt="loader"/>
       </div>
        );
    }
}