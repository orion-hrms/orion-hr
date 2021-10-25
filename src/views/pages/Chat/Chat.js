import React from "react";

export default function Chat() {
  return <div>

    <iframe title="Join a chat"
            src={process.env.REACT_APP_CHAT_URL}
            width="970"
            height="800"
    />    
  
  </div>;
}