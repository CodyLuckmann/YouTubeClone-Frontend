import React from 'react';


const RelatedVideos = (props) => {
    console.log(props.relatedVids)
    return ( 
        <div>
            
            {props.relatedVids.map(element => {
                if (element.snippet){
                    return (<img onClick={()=>props.setVideoId(element.id.videoId)}src= {element.snippet.thumbnails.default.url}></img>)
                }
                else {
                    return <div></div>
                }
            })}

        </div>
    )
}
 
export default RelatedVideos;