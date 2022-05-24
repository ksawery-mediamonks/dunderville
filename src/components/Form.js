import React, { Component, createRef } from 'react';

import styles from './Form.module.scss';

const STATUS = {
    init: 'INIT',
    success: 'SUCCESS',
    error: 'ERROR',
    sent: 'SENT'
};

export default class FormContact extends Component {
    constructor() {
        super();

        this.state = {
            name: null,
            email: null,
            textarea: null
        };

        this.ui = {
            name: createRef(),
            email: createRef(),
            textarea: createRef()
        };
    }

    render() {
        const { t } = this.props;

        return (
            <form className={styles.form} id="form-contact" onSubmit={this._sumbitHandler}>
                <label className={styles.label} htmlFor="name">
                    <div className={styles.copy}>{t('form:form__name')}</div>
                    <input className={styles.input} id="name" type="text" name="name"></input>
                </label>
                <label className={styles.label} htmlFor="email">
                    <div className={styles.copy}>{t('form:form__email')}</div>
                    <input className={styles.input} id="email" type="email" name="email"></input>
                </label>
                <label className={styles.label} htmlFor="message">
                    <div className={styles.copy}>{t('form:form__message')}</div>
                    <textarea className={styles.textarea} id="message" name="message"></textarea>
                </label>
                <button className={styles.button} type="submit" form="form-contact">
                    <div className={styles.buttonCopy}>{t('form:form__submit')}</div>
                    <svg className={styles.svg} viewBox="0 0 26 9">
                        <path d="M0.211,3.435 L17.800,3.338 C17.800,2.038 17.795,1.288 17.749,0.133 C20.535,1.604 22.969,2.870 25.789,4.137 C23.030,5.495 20.615,6.731 17.749,8.142 C17.889,6.886 17.800,6.319 17.800,4.937 L0.211,4.746 L0.211,3.435 Z"></path></svg>
                </button>
            </form>
        );
    }

    _sumbitHandler = (e) => {
        e.preventDefault();

        console.log("send");
    };
}
