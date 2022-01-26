const ReplyList = (props) => {
    return ( 
        <table className="text" className="table">
        <tbody>
         {props.comment.map((entry) => {
           return (
             <tr> 
             <td> {entry.user.username}: {entry.text}  </td>
             </tr>
            );
         })}
        </tbody>
      </table>
     );
}
 
export default ReplyList;