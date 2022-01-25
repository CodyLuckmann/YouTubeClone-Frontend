import React, { useState } from 'react';


const RelatedVideos = (props) => {
    return ( 
        <div>
            {props.video.map((video) => {
                return (
                    <div onClick={props.getRelatedVideos}>{props.searchResults.map((element)=> <img onClick={()=>props.setVideoId(element.id.videoId)}src= {element.snippet.thumbnails.default.url}></img>)}</div>
                )
            })
        }</div>
     );
}
 
export default RelatedVideos;