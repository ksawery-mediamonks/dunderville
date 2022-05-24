import React, { Component, createRef } from 'react';
import Button from 'components/Button';
import gsap from 'gsap';

import styles from './Faq.module.scss';

const POSTS = 'https://jsonplaceholder.typicode.com/posts';
const POSTS_AMOUNT = 10;

export default class FAQ extends Component {
    state = {
        isItemsloaded: false
    };

    ui = {
        button: createRef(),
        list: createRef(),
    }

    items = [];
    contents = [];
    _itemsData = [];

    // constructor() {
    //     super();

    //     this.button = createRef();
    //     this.list = createRef();
    //     this.items = [];
    //     this.contents = [];

    //     this._isLoadedItems = false;
    // }

    componentDidMount() {
        this._startLoading();
    }

    componentWillUnmount() {
        this._removeEventListeners();
    }

    render() {
        return (
            <div className={styles.container}>
                <ul ref={this.ui.list} className={styles.list}>
                    { (this.state.isItemsloaded && this._itemsData.length > 0) &&
                        this._itemsData.map((item, index) => {
                            if (index > POSTS_AMOUNT) return;
                            return (
                                <li key={index} className={styles.item} ref={(context) => this.items.push(context)} onClick={this._handleClick}>
                                    <div ref={(context) => this.contents.push(context)}>
                                        <h1>{item.title}</h1>
                                        <p>{item.body}</p>
                                    </div>
                                </li>
                            );
                    })}
                </ul>
            </div>
        );
    }

    _startLoading() {
        //todo: CHANGE TO THIS._REQUEST
        this._rqst = new XMLHttpRequest();
        this._rqst.onreadystatechange = () => {
            if (this._rqst.readyState == 4 && this._rqst.status == 200) {

                this.setState({
                    isItemsloaded: true
                }, () => {
                    this._itemsData = JSON.parse(this._rqst.responseText).map((item) => ({ ...item, isActive: false }));
                    //this._setupEventListeners();
                });
            }
        };
        this._rqst.open('GET', POSTS, true);
        this._rqst.send();
    }

    _setupEventListeners() {
        console.log(this.items)

        this.items.forEach((item, index) => {
            console.log(this.contents)
            // item.addEventListener('click', () => {
            //     this._handleClick(item, index, { isSmall: !item.isActive || true });
            // });
        });
    }

    _removeEventListeners() {
        //if (this._isLoadedItems) return;
        //if (this._isLoadedItems) return;
        this.items.forEach((item) => {
            item.removeEventListener('click', () => {
                this._handleClick(item);
            });
        });
    }

    _getOneItemHeight(index) {
        return this.contents[index].getBoundingClientRect();
    }

    _handleClick = (item, index, options) => {
        console.log("item:", item);

        // const HEIGHT = 45;
        // console.log("item:", item, "index:", index, "options:", options)

        // if (options.isSmall && !this.state.items[index].isActive) {
        //     console.log("this._rqst:", this._rqst);
        //     this.setState({ items: JSON.parse(this._rqst .responseText).map((item) => ({ ...item, isActive: true })) });

        //     gsap.to(item, { maxHeight: this._getOneItemHeight(index).height, duration: 3.6, ease: 'power3.inOut' });
        // } else {
        //     console.log("item:", this.state.items[index].isActive);
        //     //this.setState.items[index]({ isActive: false })

        //     gsap.to(item, { maxHeight: this._getOneItemHeight(index).height, duration: 3.6, ease: 'power3.inOut' });
        // }
    };
}