import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { googleAPIKey } from '../../NewKeys';

const VideoPlayer = (props) => {

    return ( 
        <div>
            <div><iframe id="ytplayer" type="text/html" width="640" height="360" src={`https://www.youtube.com/embed/${props.someVideo}?autohide=0&autoplay=1&origin=http://example.com`}frameBorder="0"allowFullScreen></iframe><h4>{props.someVideo.title}</h4></div>
           <h3>{props.title}</h3><h4>{props.description}</h4>
           {props.searchResults.map((element)=> <img onClick={()=>props.setVideoId(element.id.videoId)}src= {element.snippet.thumbnails.default.url}></img>)}
        </div>
     );
}
 //element.id.videoId
export default VideoPlayer;