import React from 'react';
import  './video.css';

const video = () => {
    return (
      <div className="video-page">
        <div className="video-container">
          {/* Replace the source URL with your video URL */}
          <video controls>
            <source src="your-video-url.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    );
  };
  
export default video