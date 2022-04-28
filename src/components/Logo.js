import React, { Component } from 'react';

export default class Logo extends Component {
    render() {
        return (
            <img 
                className={this.props.className}
                src={this.props.src}
                alt={this.props.alt}
            />
        );
    }
}
