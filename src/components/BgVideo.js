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
                <div className={classes.SubContent} >
                    <h1>Reactjs Course</h1>
                    <p>Learn how to develope React projects</p>
                    <button type="button" className="btn btn-outline-dark">View the course</button>
                    <img
                        src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                        alt="profile" />
                </div>
            </div>
        </div>
    )
}

export default BgVideo