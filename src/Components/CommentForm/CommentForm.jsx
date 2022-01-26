import axios from 'axios';
import { React, useState } from 'react';


const CommentForm = (props) => {

    const [video_id, setVideoId] = useState('');
    const [text, setText] = useState('');
    const jwt = localStorage.getItem('token')

    

    const handleSubmit = async (e) => {
        e.preventDefault();
        let comment = 
            {
                video_id: video_id,
                text: text,

            }
        let response = await axios.post('http://127.0.0.1:8000/api/comments/', {headers: {Authorization: 'Bearer ' + jwt}}, comment);
        props.addComment(response);
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Comment</label>
                <input type='text' value={text} onChange={(event) => setText(event.target.value)}/>
            </div>
        </form>
    )
}
    export default CommentForm