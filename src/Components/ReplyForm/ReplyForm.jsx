import axios from 'axios';
import { React, useState } from 'react';


const ReplyForm = (props) => {

    const [reply, setReply] = useState('');
    const [comment, setComment] =useState('');

    const handleReply = (e) => {
        setReply(e.target.value);
    };

    const handleComment = (e) => {
        setReply(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let reply =
            {
                reply: reply,
                comment: comment
            }

        let response = await axios.post('http://127.0.0.1:8000/api/comments/reply/', reply);
    }
}

    export default ReplyForm