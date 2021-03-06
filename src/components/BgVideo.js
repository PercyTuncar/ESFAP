import React from 'react';
import Zoom from 'react-reveal/Zoom';
import classes from './BackgroundVideo.module.css';

const anchoVideo = {
    opacity:' 0.25'
}
const BgVideo = () => {
    const videoSource = "https://firebasestorage.googleapis.com/v0/b/esfap-2021.appspot.com/o/Videos%2FHomeVideoBG.mp4?alt=media&token=4516633a-cbfe-4d41-983e-36395e03a191"
    return (
    <div style={anchoVideo}>
            <div className={classes.Container} >
           
            <Zoom bottom>
                <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                        <source src={videoSource} type="video/mp4" />
                        Your browser does not support the video tag.
                 </video>
             </Zoom>
           

            <div>
            
            </div>
        </div>
    </div>
    )
}

export default BgVideo