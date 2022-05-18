
import React, { Component, createRef } from 'react';
import { gsap } from "gsap";

import { loader, QUEUE_STATE } from '@superherocheesecake/loader';
import ImageXHRLoader from '@superherocheesecake/loaders-image-xhr-loader';

//import classNames from 'classnames';
import { resizeManager } from '@superherocheesecake/next-resize-manager';
import { isFunction } from 'utils/helpers';

import styles from './Preloader.module.scss';

//life, render, cycle, public (function to call from outside of component), private , handlers

export default class Preloader extends Component {
    el = createRef();

    ui = {
        canvas: createRef(),
        percentage: createRef(),
        wrapper: createRef()
    };

    _tweenObject = {
        startAngle: 0.0,
        endAngle: 2.0 * Math.PI,
        rotateAngle: 0,
        lineWidth: 2,
        strokeStyle: '#ffffff'
    };

    componentDidMount() {
        this._setupEventListeners();

        this._setupQueue();
        this._setupCanvas();
        this._setupTlProgress();

        this._resize();
    }

    componentWillUnmount() {
        this._removeEventListeners();
        this._killTimelines();

        this._removeQueue();
    }

    render() {
        return (
            <div className={styles.container}>
                <div ref={this.ui.wrapper} className={styles.wrapper}>
                    <span ref={this.ui.percentage} className={styles.percentage}></span>
                        <canvas ref={this.el} className={styles.canvas}></canvas>
                </div>
            </div>
        );
    }

    _setupEventListeners() {
        resizeManager.addEventListener('resize', this._resizeHandler);
        resizeManager.addEventListener('resize:complete', this._resizeHandler);
    }
    
    _removeEventListeners() {
        resizeManager.removeEventListener('resize', this._resizeHandler);
        resizeManager.removeEventListener('resize:complete', this._resizeHandler);
    }
    
    _resize() {
        this._setSize();
    }

    _killTimelines() {
        if (this._infiniteTl) {
            this._infiniteTl.kill();
            this._infiniteTl === null;
        }
    }
    
    _setSize() {
        this._width = this.ui.wrapper.current.clientWidth;
        this._height = this.ui.wrapper.current.clientHeight;

        this._canvas.width = this._width;
        this._canvas.height = this._height;

        // this._draw();
    }

    _setupCanvas() {
        this._canvas = this.el.current;
        this._context = this._canvas.getContext('2d');
    }
    _playTlProgress(progress) {
        gsap.to(this._tlProgress, { progress });
    }

    _setupTlProgress() {
        this._tlProgress = gsap.timeline({ paused: true, onUpdate: this._handleTlProgressUpdate });
        this._tlProgress.to(this._tweenObject, { endAngle: 2.0 * Math.PI }, 0);
    }

    _updatePercentage(progress) {
        var percent = Math.floor(progress * 100);
        this.ui.percentage.current.innerText =  `${percent} %`;
    }

    _draw() {
        const { lineWidth, startAngle, endAngle, rotateAngle, strokeStyle } = this._tweenObject;

        this._context.clearRect(0, 0, this._width, this._height);
        this._context.beginPath();
        this._context.arc(this._width * 0.5, this._height * 0.5, (this._width - lineWidth) * 0.5, startAngle + rotateAngle, endAngle + rotateAngle);
        this._context.lineWidth = lineWidth;
        this._context.strokeStyle = strokeStyle;
        this._context.stroke();
        this._context.closePath();
    }

    _setupQueue() {
        loader.use([{ test: /\.(png|jpeg|jpg|gif)$/, loader: ImageXHRLoader }]);

        this._queue = loader.queue([
            // {id: 'image-1', source: '/assets/img/spritesheet/sprite-1.jpeg'},
            // {id: 'image-2', source: '/assets/img/spritesheet/sprite-1.jpeg'},
            // {id: 'image-3', source: '/assets/img/spritesheet/sprite-1.jpeg'},
            // {id: 'image-4', source: '/assets/img/spritesheet/sprite-1.jpeg'},
            // {id: 'image-5', source: '/assets/img/spritesheet/sprite-1.jpeg'},
            // {id: 'image-6', source: '/assets/img/spritesheet/sprite-1.jpeg'},
            // {id: 'image-7', source: '/assets/img/spritesheet/sprite-1.jpeg'},
            //public/assets/img/spritesheet/image-1.jpg
            { id: 'image-1', source: '/assets/img/spritesheet/image-1.jpg' },
            { id: 'image-2', source: '/assets/img/spritesheet/image-2.jpg' },
            { id: 'image-3', source: '/assets/img/spritesheet/image-3.jpg' },
            { id: 'image-4', source: '/assets/img/spritesheet/image-4.jpg' },
            { id: 'image-5', source: '/assets/img/spritesheet/image-5.jpg' },
            { id: 'image-6', source: '/assets/img/spritesheet/spritesheet-1.png' },
            { id: 'image-7', source: '/assets/img/spritesheet/spritesheet-2.png' },
            { id: 'image-8', source: '/assets/img/spritesheet/spritesheet-3.png' },
            { id: 'image-9', source: '/assets/img/spritesheet/spritesheet-4.png' }
        ]);

        this._queue.addEventListener('stateChange', this._handleQueueStateChange);
        this._queue.addEventListener('progress', this._handleQueueProgressChange);

        this._queue.load();
    }


    _removeQueue() {
        console.log('_removeQueue');

        if (this._queue) {
            this._queue.destroy();
            this._queue === null;
        }
    }

    _resizeHandler = () => {
        this._resize();
    }

    _handleQueueStateChange = (state) => {
        const { onPreloaderCompleted } = this.props;

        console.log("state:", state);

        switch (state) {
            case QUEUE_STATE.LOADING: {
              // Show preloader
              break;
            }
            case QUEUE_STATE.COMPLETED: {
              // Hide preloader
              // Start application
              if (onPreloaderCompleted && isFunction(onPreloaderCompleted)) {
                //onPreloaderCompleted();
            }
              break;
            }
          }
    }

    _handleQueueProgressChange = (progress) => {
        this._updatePercentage(progress);
        this._playTlProgress(progress);
    }

    _handleTlProgressUpdate = () => {
        this._draw();
    }
}

