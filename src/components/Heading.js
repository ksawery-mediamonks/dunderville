import React, { Component } from 'react';

import styles from './Heading.module.scss';

export default class Heading extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isFocus: false
        };
    }

    componentDidMount() {
        this._idFocusDefined();
    }

    render() {
        const isFocus = this.state.isFocus;

        return (
            <h1 className={styles.heading}>
                {this.props.title}
                    { isFocus ? 
                        ( <div className={styles.heading__focus}>
                            {this.props.focus}
                        </div> 
                        ) : ( null )
                    }
            </h1>
        );
    }

    _idFocusDefined = () => {
        this.props.focus !== undefined ? this.setState({ isFocus: true }) :
        this.setState({ isFocus: false });

        console.log(this.props.focus);
    }
}
