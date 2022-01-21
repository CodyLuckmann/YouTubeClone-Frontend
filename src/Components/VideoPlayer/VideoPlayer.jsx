import axios from 'axios';
import React, { useEffect, useState } from 'react';
const VideoPlayer = (props) => {

    const [title, setTitle] = useState()
    const [description, setDescription] = useState()

    useEffect(() => {
        getTitleDescription;
      }, [])

    async function getTitleDescription() {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${videoId}}&key=${googleAPIKey}&part=snippet,statistics`)
        setTitle(response.data.items[0].snippet.title)
        setDescription(response.data.items[0].snippet.description)
    }

    return ( 
        <div>
            <div><iframe id="ytplayer" type="text/html" width="640" height="360" src={`https://www.youtube.com/embed/${props.someVideo}?autoplay=1&origin=http://example.com`}frameBorder="0"></iframe>
            <h4>{props.someVideo.title}</h4></div>
            
        </div>
     );
}
 
export default VideoPlayer;