const CommentList = (props) => {
    return ( 
        <table className="text" className="table">
        <tbody>
         {props.parentEntries.map((entry) => {
           return (
             <tr> 
             <td> -  ~ {entry.comment} ~ </td>
             </tr>
            );
         })}
        </tbody>
      </table>
     );
}
 
export default CommentList;