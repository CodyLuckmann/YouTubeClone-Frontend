import React, { useState } from 'react';


const RelatedVideos = (props) => {
    return ( 
        <div>
            {props.video.map((video) => {
                return (<div></div>)
            })
        }</div>
     );
}
 
export default RelatedVideos;