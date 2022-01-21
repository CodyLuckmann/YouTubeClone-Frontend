import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { googleAPIKey } from '../../Keys';

const VideoPlayer = (props) => {

    return ( 
        <div>
            <div><iframe id="ytplayer" type="text/html" width="640" height="360" src={`https://www.youtube.com/embed/${props.someVideo[0]}?autoplay=1&origin=http://example.com`}frameBorder="0"></iframe><h4>{props.someVideo.title}</h4></div>
            <div><iframe id="ytplayer" type="text/html" width="640" height="360" src={`https://www.youtube.com/embed/${props.someVideo[1]}?autoplay=1&origin=http://example.com`}frameBorder="0"></iframe><h4>{props.someVideo.title}</h4></div>
            <div><iframe id="ytplayer" type="text/html" width="640" height="360" src={`https://www.youtube.com/embed/${props.someVideo[2]}?autoplay=1&origin=http://example.com`}frameBorder="0"></iframe><h4>{props.someVideo.title}</h4></div>
            <div><iframe id="ytplayer" type="text/html" width="640" height="360" src={`https://www.youtube.com/embed/${props.someVideo[3]}?autoplay=1&origin=http://example.com`}frameBorder="0"></iframe><h4>{props.someVideo.title}</h4></div>
        </div>
     );
}
 
export default VideoPlayer;