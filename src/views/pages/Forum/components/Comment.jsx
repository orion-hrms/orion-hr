import React from "react";
import {Comment_upload} from './Comment_upload.js'

function Comment() {
    return (
        <div className="add">
          
          Title
          <br/>
          <input style={{width: "25%",border: "3px solid black"}} id="Title" type="" name="" placeholder="Title"/>
          <br/>
          Comment
          <br/>
              <textarea style={{width:"75%",height:"25%", border: "3px solid black"}}id="Comment" rows="3" cols="20" autoFocus={true} ></textarea>
          <br/>
          <button onClick={Comment_upload}>Add</button>
          <br/>
        </div>
        
            
      );
}

export default Comment;