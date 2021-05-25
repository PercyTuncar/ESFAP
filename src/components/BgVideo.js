import React from 'react';

import classes from './BackgroundVideo.module.css';

const BgVideo = () => {
    const videoSource = "https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/Videos%2FHomeVideoBG.mp4?alt=media&token=4516633a-cbfe-4d41-983e-36395e03a191"
    return (
        <div className={classes.Container} >
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className={classes.Content}>
            
            </div>
        </div>
    )
}

export default BgVideo