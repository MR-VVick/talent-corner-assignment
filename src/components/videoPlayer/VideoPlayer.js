import React, { useRef, useState } from 'react';

const VideoPlayer = ({videoRef}) => {

  return (
    <div style={{width: '100%', padding: '0 40px'}}>
      <video ref={videoRef} width="100%" height='256px' style={{objectFit: 'fill'}} controls={false}>
        <source src="https://archive.org/download/Popeye_forPresident/Popeye_forPresident_512kb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
