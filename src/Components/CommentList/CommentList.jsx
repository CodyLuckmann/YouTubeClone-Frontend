const CommentList = (props) => {
    return ( 
        <table className="text" className="table">
        <tbody>
         {props.comment.map((entry) => {
           return (
             <tr> 
             <td> -  ~ {entry.data.text} ~ </td>
             </tr>
            );
         })}
        </tbody>
      </table>
     );
}
 
export default CommentList;