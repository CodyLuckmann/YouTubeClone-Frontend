import axios from 'axios';
import { React, useState } from 'react';


const ReplyForm = (props) => {

    const [text, setText] = useState('');
    const jwt = localStorage.getItem('token')

    const handleSubmit = async (e) => {
        e.preventDefault();
        let reply =
            {
                text: text,
                comment: props.comment_id
            }

        let response = await axios.post('http://127.0.0.1:8000/api/comments/reply/', reply, {headers: {Authorization: 'Bearer ' + jwt}});
        props.addReply(response, reply)
        console.log(reply)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Reply</label>
                <input type="text" value={text} onChange={(event) => setText(event.target.value)} />
                <button className="btn" type="submit">Reply</button>  
            </div>
        </form>
    )
}

    export default ReplyForm