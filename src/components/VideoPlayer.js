import React, { Component } from 'react';
import styles from './VideoPlayer.module.scss';

export default class VideoPlayer extends Component {
    render() {
        return (
            <section className={styles['section']}>
                <div className={styles['video-player']}>
                {/* <iframe width="100%" height="100%" 
                    autoPlay={true}
                    src="https://www.youtube.com/embed/2c6HDkcJ0LI?controls=0" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
                </iframe> */}
                </div>
            </section>
        );
    }
}
