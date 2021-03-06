import axios from 'axios';
import { React, useState } from 'react';


const CommentForm = (props) => {

    
    const [text, setText] = useState('');
    const jwt = localStorage.getItem('token')

    

    const handleSubmit = async (e) => {
        e.preventDefault();
        let comment = 
            {
                video_id: props.video_id,
                text: text,

            }
        console.log('hi', comment)
        let response = await axios.post('http://127.0.0.1:8000/api/comments/', comment ,{headers: {Authorization: 'Bearer ' + jwt}});
        props.addComment(response, comment)
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Comment</label>
                <input type='text' value={text} onChange={(event) => setText(event.target.value)}/>
                <button className="btn" type="submit">
              Submit
            </button>
            </div>
        </form>
    )
}
    export default CommentForm