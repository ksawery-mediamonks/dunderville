import React, { Component, createRef } from 'react';
import { gsap } from 'gsap';

import { resizeManager } from '@superherocheesecake/next-resize-manager';

import styles from './CustomCursor.module.scss';

export default class CustomCursor extends Component {
    el = createRef();

    ui = {
        wrapper: createRef(),
    }

    _mousePosition = {
        x: 0,
        y: 0
    };

    _tweenObject = {
        startRadius: 0,
        radius: 30,
        lineWidth: 4,
        strokeStyle: '#f8bebe',
        positionX: -30,
        positionY: -30,
        startAngle: 0,
        endAngle: 2 * Math.PI
    };

    componentDidMount() {
        this._setupEventListeners();
        this._setupCanvas();

        this._resize();
    }

    componentWillUnmount() {
        this._removeEventListeners();
    }

    render() {
        return (
            <div ref={this.ui.wrapper} className={styles.wrapper}>
                <canvas ref={this.el} className={styles.canvas}></canvas>
            </div>
        );
    }

    _setupEventListeners() {
        resizeManager.addEventListener('resize', this._resizeHandler);
        resizeManager.addEventListener('resize:complete', this._resizeHandler);

        window.addEventListener('mousemove', this._mouseMoveHandler);
    }

    _removeEventListeners() {
        resizeManager.removeEventListener('resize', this._resizeHandler);
        resizeManager.removeEventListener('resize:complete', this._resizeHandler);

        window.removeEventListener('mousemove', this._mouseMoveHandler);

        gsap.ticker.remove(this._handleTick);
    }

    _resize() {
        this._setSize();
        this._draw();
    }

    _updateMousePosition(e) {
        this._mousePosition = {
            x: e.clientX,
            y: e.clientY,
        };


        // this._tweenObject.positionX = this._mousePosition.x;
        // this._tweenObject.positionY = this._mousePosition.y;

        const timeline = gsap.timeline({ ease: "power3.in" });
        timeline.to(
            this._tweenObject, { positionX: this._mousePosition.x, positionY: this._mousePosition.y, duration: 0.6 }
        );

        gsap.ticker.add(this._handleTick);
    }

    _tick() {
        this._draw();
    }

    _setSize() {
        this._width = this.ui.wrapper.current.clientWidth;
        this._height = this.ui.wrapper.current.clientHeight;
        this._canvas.width = this._width;
        this._canvas.height = this._height;
    }

    _setupCanvas() {
        this._canvas = this.el.current;
        this._context = this._canvas.getContext('2d');
    }

    _draw() {
        const { lineWidth, strokeStyle, radius, positionX, positionY, startAngle, endAngle } = this._tweenObject;

        this._context.clearRect(0, 0, this._width, this._height);
        this._context.beginPath();
        this._context.arc(positionX, positionY, radius, startAngle, endAngle);
        this._context.lineWidth = lineWidth;
        this._context.strokeStyle = strokeStyle;
        this._context.stroke();
        this._context.closePath();
    }

    _mouseMoveHandler = (e) => {
        this._updateMousePosition(e);
    }

    _resizeHandler = () => {
        this._resize();
    };

    _handleTick = () => {
        this._tick();
    };
}